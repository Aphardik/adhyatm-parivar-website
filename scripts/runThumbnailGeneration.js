const { processImages } = require('./generateThumbnails');

async function runAll() {
  console.log('===========================================');
  console.log('  THUMBNAIL GENERATION STARTED');
  console.log('===========================================\n');

  try {
    console.log('Loading photo data...\n');
const { photoData1 } = require('./photoData');

    // IMPORTANT: Pass language codes 'H', 'G', 'E' as third parameter
    if (photoData1.hindi && photoData1.hindi.length > 0) {
      console.log('📸 Processing HINDI photos (Code: H)...');
      console.log('-------------------------------------------');
      await processImages(photoData1.hindi, 'HINDI', 'H'); // <-- 'H' is important!
    }

    if (photoData1.gujarati && photoData1.gujarati.length > 0) {
      console.log('\n📸 Processing GUJARATI photos (Code: G)...');
      console.log('-------------------------------------------');
      await processImages(photoData1.gujarati, 'GUJARATI', 'G'); // <-- 'G' is important!
    }

    if (photoData1.english && photoData1.english.length > 0) {
      console.log('\n📸 Processing ENGLISH photos (Code: E)...');
      console.log('-------------------------------------------');
      await processImages(photoData1.english, 'ENGLISH', 'E'); // <-- 'E' is important!
    }

    console.log('\n✅ ALL DONE!\n');

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    process.exit(1);
  }
}

runAll();