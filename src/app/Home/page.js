"use client";
import React from 'react';
// import MemeCard from '../components/MemeCard';
import { useState } from 'react';

export default function Home() {
  const [memeText, setMemeText] = useState('');
  const [memeImage, setMemeImage] = useState('');

  const handleGenerateMeme = async (prompt) => {
    const response = await fetch('/api/memeGeneration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setMemeText(data.memeText);
    // If you're integrating DALL-E, you can fetch the image as well
    setMemeImage('Generated Image URL');
  };

  return (
    <div>
      <h1>Generate Memes with AI</h1>
      <button onClick={() => handleGenerateMeme('Trending topic or prompt')}>
        Generate Meme
      </button>
      {memeText && <MemeCard memeText={memeText} memeImage={memeImage} />}
    </div>
  );
}
