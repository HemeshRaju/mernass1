const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
    sourceText: { type: String, required: true },
    translatedText: { type: String, required: true },
    sourceLanguage: { type: String, required: true },
    targetLanguage: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Translation = mongoose.model('Translation', translationSchema);

module.exports = Translation;
