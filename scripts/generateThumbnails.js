import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const THUMBNAIL_WIDTH = 300;
const THUMBNAIL_HEIGHT = 371;
const THUMBNAIL_QUALITY = 30;
const PUBLIC_DIR = './public';
const OUTPUT_DIR = './public/thumbnails';

// Generate thumbnail from local file
export async function generateThumbnailFromFile(inputPath, outputPath, filename) {
  try {
    await sharp(inputPath)
      .resize(THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: THUMBNAIL_QUALITY,
        progressive: true,
        mozjpeg: true
      })
      .toFile(path.join(outputPath, filename));

    return true;
  } catch (error) {
    console.error(`Error generating thumbnail for ${filename}:`, error.message);
    return false;
  }
}

// Main processor function
export async function processImages(photoData, languageName = '', languageCode = '') {
  // Create folder
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✓ Created directory: ${OUTPUT_DIR}\n`);
  }

  console.log(`Starting thumbnail generation for ${photoData.length} images...`);

  let successCount = 0;
  let failCount = 0;
  let skippedCount = 0;
  const failedPhotos = [];

  for (let i = 0; i < photoData.length; i++) {
    const photo = photoData[i];

    if (!photo) {
      console.log(`[${i + 1}/${photoData.length}] ⚠️  Skipping - null/undefined photo data`);
      skippedCount++;
      continue;
    }

    if (!photo.uid) {
      console.log(`[${i + 1}/${photoData.length}] ⚠️  Skipping ${photo.name || 'Unknown'} - missing UID`);
      skippedCount++;
      continue;
    }

    if (!photo.imageUrl) {
      console.log(`[${i + 1}/${photoData.length}] ⚠️  Skipping ${photo.name} - missing imageUrl`);
      skippedCount++;
      failedPhotos.push({ name: photo.name, uid: photo.uid, reason: 'Missing imageUrl' });
      continue;
    }

    // Extract numbers from UID
    const uidNumber = photo.uid.replace(/\D/g, '');
    const thumbnailFilename = `SBA_THUMB-${uidNumber}${languageCode}.jpg`;
    const thumbnailPath = path.join(OUTPUT_DIR, thumbnailFilename);

    if (fs.existsSync(thumbnailPath)) {
      console.log(`[${i + 1}/${photoData.length}] ⏭️  Skipping ${photo.name} - thumbnail exists`);
      successCount++;
      continue;
    }

    const relativePath = photo.imageUrl.startsWith('/')
      ? photo.imageUrl.slice(1)
      : photo.imageUrl;

    const sourcePath = path.join(PUBLIC_DIR, relativePath);

    if (!fs.existsSync(sourcePath)) {
      console.log(`[${i + 1}/${photoData.length}] ✗ ${photo.name} - source file not found`);
      console.log(`    Expected: ${sourcePath}`);
      failCount++;
      failedPhotos.push({
        name: photo.name,
        uid: photo.uid,
        reason: 'Source file not found',
        expectedPath: sourcePath
      });
      continue;
    }

    try {
      console.log(`[${i + 1}/${photoData.length}] 📸 Processing ${photo.name}...`);

      const success = await generateThumbnailFromFile(
        sourcePath,
        OUTPUT_DIR,
        thumbnailFilename
      );

      if (success) {
        const sourceStats = fs.statSync(sourcePath);
        const thumbnailStats = fs.statSync(thumbnailPath);
        const sourceSizeKB = (sourceStats.size / 1024).toFixed(2);
        const thumbnailSizeKB = (thumbnailStats.size / 1024).toFixed(2);
        const savings = ((1 - thumbnailStats.size / sourceStats.size) * 100).toFixed(1);

        console.log(`    ✓ Generated: ${thumbnailFilename}`);
        console.log(`    📊 Original: ${sourceSizeKB} KB → Thumbnail: ${thumbnailSizeKB} KB (${savings}% smaller)`);
        successCount++;
      } else {
        failCount++;
        failedPhotos.push({ name: photo.name, uid: photo.uid, reason: 'Generation failed' });
      }
    } catch (error) {
      console.error(`    ✗ Failed to process ${photo.name}: ${error.message}`);
      failCount++;
      failedPhotos.push({ name: photo.name, uid: photo.uid, reason: error.message });
    }
  }

  console.log('\n========================================');
  console.log(`${languageName ? languageName + ' ' : ''}Thumbnail Generation Complete!`);
  console.log(`✓ Success: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log(`⏭️  Skipped: ${skippedCount}`);
  console.log(`📊 Total: ${photoData.length}`);
  console.log('========================================');

  if (failedPhotos.length > 0) {
    console.log('\n⚠️  Failed/Skipped Photos:');
    failedPhotos.forEach((photo, idx) => {
      console.log(`${idx + 1}. ${photo.name} (${photo.uid})`);
      console.log(`   Reason: ${photo.reason}`);
      if (photo.expectedPath) {
        console.log(`   Expected path: ${photo.expectedPath}`);
      }
    });
  }

  console.log('');

  return {
    success: successCount,
    failed: failCount,
    skipped: skippedCount,
    total: photoData.length,
    failedPhotos
  };
}

// Default export (optional)
export default {
  processImages
};
