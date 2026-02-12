/**
 * Firebase Cloud Function for Vachana Shreni Hindi 2082
 * This function should be placed in your Firebase Functions project.
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize admin if not already initialized
if (admin.apps.length === 0) {
    admin.initializeApp();
}

const db = admin.firestore();

exports.vachanaShreniHindi2082 = functions.https.onRequest(async (req, res) => {
    // Enable CORS
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
    }

    if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
    }

    try {
        const data = req.body;
        const { participants } = data;

        if (!participants || !Array.isArray(participants) || participants.length === 0) {
            res.status(400).send({ message: "No participants provided" });
            return;
        }

        const collectionRef = db.collection("vachana-shreni-hindi-2082");

        // Batch write to store items separately
        const batch = db.batch();

        // Get the current total count to generate unique IDs
        // Note: In high-concurrency environments, a distributed counter or a separate counter doc is better.
        // For this use case, we'll use the collection size as a simple approach.
        const snapshot = await collectionRef.count().get();
        let currentCount = snapshot.data().count;

        const results = [];

        for (const participant of participants) {
            currentCount++;
            const uniqueId = `VSH82-${String(currentCount).padStart(3, "0")}`;

            const record = {
                uniqueId,
                ...participant, // Now contains all details (name, age, mobile, address, etc.)
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            };

            const docRef = collectionRef.doc();
            batch.set(docRef, record);
            results.push(uniqueId);
        }

        await batch.commit();

        res.status(200).send({
            message: "Success",
            codes: results
        });
    } catch (error) {
        console.error("Error storing records:", error);
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});
