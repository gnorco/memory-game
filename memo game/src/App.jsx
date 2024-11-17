import { useState, useEffect } from 'react';
import UserLog from './components/UserLog';
import MainComponent from './components/MainComponent';

const emojisIniciales = [
  { emoji: '🌞' }, { emoji: '🌞' }, { emoji: '🌜' }, { emoji: '🌜' }, { emoji: '⭐' }, { emoji: '⭐' }, 
  { emoji: '🌈' }, { emoji: '🌈' }, { emoji: '🌊' }, { emoji: '🌊' }, { emoji: '🏔️' }, { emoji: '🏔️' }, 
  { emoji: '🌳' }, { emoji: '🌳' }, { emoji: '🏜️' }, { emoji: '🏜️' }, { emoji: '🏝️' }, { emoji: '🏝️' }, 
  { emoji: '🐦' }, { emoji: '🐦' }
];

function mezclarEmojis(listaEmojis) {
  const listEmojis = [...listaEmojis];
  const listaMezclada = [];
  while (listEmojis.length > 0) {
    const pos = Math.floor(Math.random() * listEmojis.length);
    const elemento = listEmojis.splice(pos, 1)[0];
    listaMezclada.unshift(elemento);
  }
  return listaMezclada;
}

function App() {
  const [jugar, setJugar] = useState(false);
  const [emojis, setEmojis] = useState(emojisIniciales);
  const [cantCards, setCantCards] = useState(16);

  useEffect(() => {
    if (jugar) {
      const nuevosEmojis = mezclarEmojis(emojisIniciales);
      setEmojis(nuevosEmojis);
    }
  }, [jugar,cantCards]);

  const voltearCarta = (index) => {
    // Implementa la lógica para voltear cartas aquí
  }

  const verificarPareja = () => {
    // Implementa la lógica para verificar parejas aquí
  }

  return (
    <>
      {jugar ? (
        <div className="grid grid-cols-5 gap-4">
          {emojis.map((e, index) => (
            <MainComponent 
              key={index} 
              palabra={e.emoji}
            />
          ))}
        </div>
      ) : (
        <UserLog jugar={jugar} setJugar={setJugar} cantCards={cantCards} setCantCards={setCantCards}/>
      )}
    </>
  )
}

export default App;
