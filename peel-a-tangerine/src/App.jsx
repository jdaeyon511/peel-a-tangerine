import React, { useState } from 'react';
import Tangerine from './components/Tangerine';
import PeelButton from './components/PeelButton';
import FunFactCard from './components/FunFactCard';
import facts from './data/facts';
import './index.css';

function App() {
  const [peeled, setPeeled] = useState(0);
  const [factIndex, setFactIndex] = useState(0);

  const handlePeel = () => setPeeled((p) => p + 1);
  const nextFact = () => setFactIndex((i) => (i + 1) % facts.length);
  const level = Math.floor(peeled / 10);
  const golden = Math.floor(peeled / 25);

  return (
    <div className="min-h-screen bg-orange-50 text-brown-800 flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-4xl font-bold mb-2">귤까고앉아있네</h1>
      <Tangerine />
      <PeelButton onClick={handlePeel} />
      <div className="text-center mt-3">
        <p>🔥 Peeled: {peeled}</p>
        <p>🍬 Golden 귤: {golden}</p>
        <p>🏅 Level: {level}</p>
      </div>
      <FunFactCard fact={facts[factIndex]} onNext={nextFact} />
    </div>
  );
}

export default App;
