import { processBookImages } from './generateBookThumbnails.js';
import { BOOKS_DATA } from '../app/data/book-list.js';

async function runBookThumbnails() {
  console.log('===========================================');
  console.log('  📚 BOOK THUMBNAIL GENERATION STARTED');
  console.log('===========================================\n');

  try {
    console.log('Loading book data...\n');

    console.log('📚 Processing book covers...');
    console.log('-------------------------------------------');

    const startTime = Date.now();

    const result = await processBookImages(BOOKS_DATA);

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log('\n===========================================');
    console.log('  📊 BOOK THUMBNAIL GENERATION SUMMARY');
    console.log('===========================================');
    console.log(`Total Books Processed: ${result.total}`);
    console.log(`✓ Successfully Generated: ${result.success}`);
    console.log(`✗ Failed: ${result.failed}`);
    console.log(`⏭️  Skipped: ${result.skipped}`);
    console.log(`⏱️  Time Taken: ${duration} seconds`);
    console.log(`📈 Average: ${(duration / result.total).toFixed(2)} seconds per book`);
    console.log('===========================================\n');

    if (result.failedBooks.length > 0) {
      console.log('⚠️  Some book covers failed:\n');
      result.failedBooks.forEach((book, idx) => {
        console.log(`${idx + 1}. ${book.name}`);
        console.log(`   Serial No: ${book.srno}`);
        console.log(`   Reason: ${book.reason}`);
        if (book.expectedPath) console.log(`   Expected path: ${book.expectedPath}`);
        console.log('');
      });
    }

    if (result.success > 0) {
      console.log('✅ SUCCESS! Next steps:');
      console.log('1. Check /public/book-thumbnails folder');
      console.log('2. Update BookCatalog to use thumbnails');
      console.log('3. Test the optimized loading!\n');
    }

  } catch (error) {
    console.error('\n❌ ERROR during book thumbnail generation:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

runBookThumbnails();
