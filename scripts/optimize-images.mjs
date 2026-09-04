import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const targetDir = path.join(process.cwd(), 'public', 'images');
const validExts = new Set(['.jpg', '.jpeg', '.png']);

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function getAllFiles(dirPath) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImages() {
  console.log('🚀 Iniciando optimización de imágenes en:', targetDir);
  const allFiles = await getAllFiles(targetDir);
  const imageFiles = allFiles.filter(f => validExts.has(path.extname(f).toLowerCase()));

  let totalOriginal = 0;
  let totalOptimized = 0;
  let optimizedCount = 0;

  for (const file of imageFiles) {
    const relativePath = path.relative(targetDir, file);
    const stat = await fs.promises.stat(file);
    const originalSize = stat.size;
    totalOriginal += originalSize;

    // Si la imagen ya es muy liviana (< 150 KB), la dejamos como está
    if (originalSize < 150 * 1024) {
      totalOptimized += originalSize;
      continue;
    }

    try {
      const ext = path.extname(file).toLowerCase();
      const inputBuffer = await fs.promises.readFile(file);
      let pipeline = sharp(inputBuffer).rotate().resize({
        width: 1920,
        height: 1920,
        fit: 'inside',
        withoutEnlargement: true
      });

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: 82, compressionLevel: 8 });
      }

      const buffer = await pipeline.toBuffer();
      const newSize = buffer.length;

      // Solo guardamos si el nuevo archivo es realmente más pequeño
      if (newSize < originalSize) {
        await fs.promises.writeFile(file, buffer);
        totalOptimized += newSize;
        optimizedCount++;
        const percent = (((originalSize - newSize) / originalSize) * 100).toFixed(0);
        console.log(`✅ ${relativePath}: ${formatBytes(originalSize)} ➔ ${formatBytes(newSize)} (-${percent}%)`);
      } else {
        totalOptimized += originalSize;
      }
    } catch (err) {
      console.error(`⚠️ Error al procesar ${relativePath}:`, err.message);
      totalOptimized += originalSize;
    }
  }

  const saved = totalOriginal - totalOptimized;
  const savedPercent = totalOriginal > 0 ? ((saved / totalOriginal) * 100).toFixed(1) : 0;

  console.log('\n=============================================');
  console.log(`🎉 Optimización finalizada.`);
  console.log(`📁 Imágenes procesadas y reducidas: ${optimizedCount}`);
  console.log(`📦 Peso anterior: ${formatBytes(totalOriginal)}`);
  console.log(`⚡ Peso optimizado: ${formatBytes(totalOptimized)}`);
  console.log(`💾 Ahorro total: ${formatBytes(saved)} (-${savedPercent}%)`);
  console.log('=============================================\n');
}

optimizeImages();
