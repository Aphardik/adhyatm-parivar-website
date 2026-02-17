import XLSX from 'xlsx';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const EXCEL_FILE_PATH = './vachana_shreni_data.xlsx';
const API_ENDPOINT = 'https://vachanashrenihindi2082ttt-fahifz22ha-uc.a.run.app'; // Update with your actual endpoint URL

// Column mapping from Excel to Firebase format
const COLUMN_MAPPING = {
    'नाम': 'fullName',
    'उम्र': 'age',
    'Male/Female': 'gender',
    'शहर': 'city',
    'Mobile Number': 'mobile',
    'Alternate Mobile Number': 'altMobile',
    'क्या आप पहले हिंदी वाचना अटेंड कर चुके हैं?': 'attendedBefore',
    'क्या आपको गुजराती समझ आती  हैं?': 'understandGujarati',
    'Timestamp': 'timestamp'
};

/**
 * Convert Excel timestamp to ISO 8601 format
 * Excel stores dates like "2/11/2026 11:04:55"
 */
function convertExcelTimestampToISO(excelTimestamp) {
    if (!excelTimestamp) return new Date().toISOString();

    try {
        // If it's already a Date object from XLSX
        if (excelTimestamp instanceof Date) {
            return excelTimestamp.toISOString();
        }

        // If it's a string like "2/11/2026 11:04:55"
        if (typeof excelTimestamp === 'string') {
            const date = new Date(excelTimestamp);
            if (!isNaN(date.getTime())) {
                return date.toISOString();
            }
        }

        // If it's an Excel serial number
        if (typeof excelTimestamp === 'number') {
            const date = XLSX.SSF.parse_date_code(excelTimestamp);
            return new Date(date.y, date.m - 1, date.d, date.H, date.M, date.S).toISOString();
        }

        return new Date().toISOString();
    } catch (error) {
        console.error('Error converting timestamp:', excelTimestamp, error);
        return new Date().toISOString();
    }
}

/**
 * Translate Hindi responses to English
 */
function translateHindiToEnglish(value) {
    if (!value) return '';

    const translations = {
        'हा': 'Yes',
        'हां': 'Yes',
        'नहीं': 'No',
        'थोड़ी-थोड़ी': 'Little',
        'थोड़ी थोड़ी': 'Little'
    };

    const trimmedValue = String(value).trim();
    return translations[trimmedValue] || trimmedValue;
}

/**
 * Clean and format mobile number
 */
function formatMobileNumber(mobile) {
    if (!mobile) return '';
    return String(mobile).replace(/[^0-9]/g, '');
}

/**
 * Transform Excel row to Firebase format
 */
function transformRowToFirebaseFormat(row) {
    const participant = {
        fullName: row['नाम'] || '',
        age: row['उम्र'] ? String(row['उम्र']) : '',
        gender: row['Male/Female'] || '',
        city: row['शहर'] || '',
        mobile: formatMobileNumber(row['Mobile Number']),
        altMobile: formatMobileNumber(row['Alternate Mobile Number']),
        attendedBefore: translateHindiToEnglish(row['क्या आप पहले हिंदी वाचना अटेंड कर चुके हैं?']) || 'No',
        understandGujarati: translateHindiToEnglish(row['क्या आपको गुजराती समझ आती  हैं?']) || 'No',
        dob: '', // Empty as per requirement
        state: '', // Empty as per requirement
        created_at: convertExcelTimestampToISO(row['Timestamp'])
    };

    return participant;
}

/**
 * Read Excel file and convert to participants array
 */
function readExcelFile(filePath) {
    try {
        console.log('Reading Excel file:', filePath);
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        console.log(`Found ${jsonData.length} rows in Excel file`);

        // Transform each row
        const participants = jsonData.map((row, index) => {
            const participant = transformRowToFirebaseFormat(row);
            console.log(`Transformed row ${index + 1}:`, participant.fullName);
            return participant;
        });

        return participants;
    } catch (error) {
        console.error('Error reading Excel file:', error);
        throw error;
    }
}

/**
 * Post participants to Firebase in batches
 */
async function postToFirebase(participants, batchSize = 50) {
    const batches = [];

    // Split into batches
    for (let i = 0; i < participants.length; i += batchSize) {
        batches.push(participants.slice(i, i + batchSize));
    }

    console.log(`\nSending ${participants.length} participants in ${batches.length} batches...`);

    const allCodes = [];

    for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        console.log(`\nSending batch ${i + 1}/${batches.length} (${batch.length} participants)...`);

        try {
            const response = await axios.post(API_ENDPOINT, {
                participants: batch
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data && response.data.codes) {
                allCodes.push(...response.data.codes);
                console.log(`✓ Batch ${i + 1} successful. Generated IDs:`, response.data.codes.join(', '));
            }

            // Wait a bit between batches to avoid overwhelming the server
            if (i < batches.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        } catch (error) {
            console.error(`✗ Error posting batch ${i + 1}:`, error.response?.data || error.message);
            throw error;
        }
    }

    return allCodes;
}

/**
 * Main function
 */
async function main() {
    try {
        console.log('=== Vachana Shreni Hindi 2082 - Excel Upload Script ===\n');

        // Check if API endpoint is configured
        if (API_ENDPOINT === 'YOUR_FIREBASE_FUNCTION_URL') {
            console.error('ERROR: Please update API_ENDPOINT in the script with your actual Firebase function URL');
            return;
        }

        // Read and transform Excel data
        const participants = readExcelFile(EXCEL_FILE_PATH);

        if (participants.length === 0) {
            console.log('No participants found in Excel file');
            return;
        }

        console.log('\nSample of first participant:');
        console.log(JSON.stringify(participants[0], null, 2));

        // Ask for confirmation
        console.log(`\n⚠️  Ready to upload ${participants.length} participants to Firebase`);
        console.log('Press Ctrl+C to cancel, or wait 5 seconds to continue...\n');

        await new Promise(resolve => setTimeout(resolve, 5000));

        // Post to Firebase
        const generatedCodes = await postToFirebase(participants);

        console.log('\n=== Upload Complete ===');
        console.log(`Total participants uploaded: ${generatedCodes.length}`);
        console.log('Generated IDs:', generatedCodes.join(', '));

        // Save the generated codes to a file
        fs.writeFileSync('generated_codes.txt', generatedCodes.join('\n'));
        console.log('\n✓ Generated codes saved to generated_codes.txt');

    } catch (error) {
        console.error('\n✗ Upload failed:', error.message);
        process.exit(1);
    }
}

// Run the script
main();