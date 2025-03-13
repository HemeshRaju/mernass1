import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLang, setTargetLang] = useState('es'); // Default: Spanish

  const handleTranslate = async () => {
    const response = await axios.post('http://localhost:5000/translate', { text, targetLang });
    setTranslatedText(response.data);
  };

  return (
    <div>
      <h1>Text Translator</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
      <select onChange={(e) => setTargetLang(e.target.value)}>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
      <button onClick={handleTranslate}>Translate</button>
      <h2>Translation: {translatedText}</h2>
    </div>
  );
}

export default App;
