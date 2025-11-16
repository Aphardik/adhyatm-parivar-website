import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Configuration for Book Thumbnails
const THUMBNAIL_WIDTH = 200;
const THUMBNAIL_HEIGHT = 280;
const THUMBNAIL_QUALITY = 20;
const PUBLIC_DIR = './public';
const OUTPUT_DIR = './public/book-thumbnails';

// Function to generate thumbnail from local file
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

// Main function to process all book images
export async function processBookImages(booksData) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✓ Created directory: ${OUTPUT_DIR}\n`);
  }

  console.log(`Starting thumbnail generation for ${booksData.length} book covers...`);

  let successCount = 0;
  let failCount = 0;
  let skippedCount = 0;
  const failedBooks = [];

  for (let i = 0; i < booksData.length; i++) {
    const book = booksData[i];

    // Validate
    if (!book) {
      console.log(`[${i + 1}/${booksData.length}] ⚠️  Skipping - null/undefined book data`);
      skippedCount++;
      continue;
    }

    if (!book.srno) {
      console.log(`[${i + 1}/${booksData.length}] ⚠️  Skipping ${book.name || 'Unknown'} - missing srno`);
      skippedCount++;
      continue;
    }

    if (!book.image) {
      console.log(`[${i + 1}/${booksData.length}] ⚠️  Skipping ${book.name} - missing image`);
      skippedCount++;
      failedBooks.push({ name: book.name, srno: book.srno, reason: 'Missing image' });
      continue;
    }

    // File naming
    const thumbnailFilename = `BOOK_THUMB-${book.srno}.jpg`;
    const thumbnailPath = path.join(OUTPUT_DIR, thumbnailFilename);

    if (fs.existsSync(thumbnailPath)) {
      console.log(
        `[${i + 1}/${booksData.length}] ⏭️  Skipping ${book.name.substring(0, 40)}... - thumbnail exists`
      );
      successCount++;
      continue;
    }

    const relativePath = book.image.startsWith('/')
      ? book.image.substring(1)
      : book.image;

    const sourcePath = path.join(PUBLIC_DIR, relativePath);

    if (!fs.existsSync(sourcePath)) {
      console.log(
        `[${i + 1}/${booksData.length}] ✗ ${book.name.substring(0, 40)}... - source file not found`
      );
      console.log(`    Expected: ${sourcePath}`);

      failCount++;
      failedBooks.push({
        name: book.name,
        srno: book.srno,
        reason: 'Source file not found',
        expectedPath: sourcePath
      });
      continue;
    }

    try {
      console.log(
        `[${i + 1}/${booksData.length}] 📚 Processing: ${book.name.substring(0, 50)}...`
      );

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
        console.log(
          `    📊 Original: ${sourceSizeKB} KB → Thumbnail: ${thumbnailSizeKB} KB (${savings}% smaller)`
        );

        successCount++;
      } else {
        failCount++;
        failedBooks.push({ name: book.name, srno: book.srno, reason: 'Generation failed' });
      }
    } catch (error) {
      console.error(`    ✗ Failed to process ${book.name}: ${error.message}`);
      failCount++;
      failedBooks.push({ name: book.name, srno: book.srno, reason: error.message });
    }
  }

  console.log('\n========================================');
  console.log('Book Thumbnail Generation Complete!');
  console.log(`✓ Success: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log(`⏭️  Skipped: ${skippedCount}`);
  console.log(`📊 Total: ${booksData.length}`);
  console.log('========================================');

  if (failedBooks.length > 0) {
    console.log('\n⚠️  Failed/Skipped Books:');
    failedBooks.forEach((book, idx) => {
      console.log(`${idx + 1}. ${book.name.substring(0, 50)}... (${book.srno})`);
      console.log(`   Reason: ${book.reason}`);
      if (book.expectedPath) {
        console.log(`   Expected path: ${book.expectedPath}`);
      }
    });
  }

  return {
    success: successCount,
    failed: failCount,
    skipped: skippedCount,
    total: booksData.length,
    failedBooks
  };
}

// Default export (optional for compatibility)
export default {
  processBookImages
};
