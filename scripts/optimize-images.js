import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de optimización
const optimizationConfig = {
  favicon: {
    sizes: [16, 32, 48, 64, 96, 128, 192, 256, 512],
    quality: 90,
    format: 'png'
  },
  hero: {
    sizes: [400, 600, 800, 1200],
    quality: 85,
    format: 'webp'
  },
  logos: {
    sizes: [100, 200, 400],
    quality: 90,
    format: 'webp'
  }
};

async function optimizeImage(inputPath, outputDir, config, name) {
  try {
    console.log(`\n🔄 Optimizando ${name}...`);
    
    // Crear directorio de salida si no existe
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Obtener información de la imagen original
    const originalStats = fs.statSync(inputPath);
    console.log(`📊 Tamaño original: ${(originalStats.size / 1024).toFixed(2)} KB`);

    // Optimizar para cada tamaño
    for (const size of config.sizes) {
      const outputPath = path.join(outputDir, `${name}-${size}w.${config.format}`);
      
      await sharp(inputPath)
        .resize(size, size, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .toFormat(config.format, { 
          quality: config.quality,
          ...(config.format === 'png' ? { compressionLevel: 9 } : {})
        })
        .toFile(outputPath);

      const optimizedStats = fs.statSync(outputPath);
      const reduction = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
      
      console.log(`  ✅ ${size}w: ${(optimizedStats.size / 1024).toFixed(2)} KB (${reduction}% reducción)`);
    }

    // Crear versión original optimizada
    const originalOptimizedPath = path.join(outputDir, `${name}-original.${config.format}`);
    await sharp(inputPath)
      .toFormat(config.format, { 
        quality: config.quality,
        ...(config.format === 'png' ? { compressionLevel: 9 } : {})
      })
      .toFile(originalOptimizedPath);

    const optimizedStats = fs.statSync(originalOptimizedPath);
    const reduction = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
    console.log(`  ✅ Original optimizado: ${(optimizedStats.size / 1024).toFixed(2)} KB (${reduction}% reducción)`);

  } catch (error) {
    console.error(`❌ Error optimizando ${name}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');

  // Optimizar favicon
  await optimizeImage(
    'public/favicon-hogares-digitales.png',
    'public/optimized/favicon',
    optimizationConfig.favicon,
    'favicon'
  );

  // Optimizar imágenes del hero
  const heroImages = [
    'src/assets/hero/child-gaming-safely.png',
    'src/assets/hero/children-learning-together.png', 
    'src/assets/hero/child-using-tablet.png',
    'src/assets/hero/child1.png',
    'src/assets/hero/familia-3.png',
    'src/assets/hero/familia1.png',
    'src/assets/hero/family_reunited.png'
  ];

  for (const imagePath of heroImages) {
    if (fs.existsSync(imagePath)) {
      const name = path.basename(imagePath, path.extname(imagePath));
      await optimizeImage(
        imagePath,
        'public/optimized/hero',
        optimizationConfig.hero,
        name
      );
    }
  }

  // Optimizar logos
  const logoImages = [
    'src/assets/logos/Logo Hogares Digitales.png',
    'src/assets/logos/LogosFE_Colores 2.png',
    'src/assets/logos/Logo_Gob.png',
    'src/assets/logos/te-protejo-mexico.png'
  ];

  for (const imagePath of logoImages) {
    if (fs.existsSync(imagePath)) {
      const name = path.basename(imagePath, path.extname(imagePath));
      await optimizeImage(
        imagePath,
        'public/optimized/logos',
        optimizationConfig.logos,
        name
      );
    }
  }

  console.log('\n✨ Optimización completada!');
  console.log('\n📋 Próximos pasos:');
  console.log('1. Actualizar las referencias en el código para usar las imágenes optimizadas');
  console.log('2. Implementar lazy loading para imágenes no críticas');
  console.log('3. Agregar preload hints para imágenes críticas');
}

main().catch(console.error);
