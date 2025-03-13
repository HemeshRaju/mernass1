const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Translation API Route
app.post("/translate", async (req, res) => {
    try {
        const { text, targetLanguage } = req.body;

        if (!text || !targetLanguage) {
            return res.status(400).json({ error: "Text and target language are required" });
        }

        // Your translation logic here (e.g., using Google Translate API)
        const translatedText = `Translated(${text}) to ${targetLanguage}`;

        res.json({ translatedText });
    } catch (error) {
        console.error("Translation error:", error);
        res.status(500).json({ error: "Something went wrong on the server" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
