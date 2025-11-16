import { processImages } from './generateThumbnails.js';
import { photoData1 } from '../app/data/sba.js';

async function runAll() {
  console.log('===========================================');
  console.log('  THUMBNAIL GENERATION STARTED');
  console.log('===========================================\n');

  try {
    console.log('Loading photo data...\n');

    // HINDI
    if (photoData1.hindi && photoData1.hindi.length > 0) {
      console.log('📸 Processing HINDI photos (Code: H)...');
      console.log('-------------------------------------------');
      await processImages(photoData1.hindi, 'HINDI', 'H');
    }

    // GUJARATI
    if (photoData1.gujarati && photoData1.gujarati.length > 0) {
      console.log('\n📸 Processing GUJARATI photos (Code: G)...');
      console.log('-------------------------------------------');
      await processImages(photoData1.gujarati, 'GUJARATI', 'G');
    }

    // ENGLISH
    if (photoData1.english && photoData1.english.length > 0) {
      console.log('\n📸 Processing ENGLISH photos (Code: E)...');
      console.log('-------------------------------------------');
      await processImages(photoData1.english, 'ENGLISH', 'E');
    }

    console.log('\n✅ ALL DONE!\n');

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    process.exit(1);
  }
}

runAll();
