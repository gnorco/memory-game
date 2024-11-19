import { useState, useEffect } from 'react';
import UserLog from './components/UserLog';
import MainComponent from './components/MainComponent';
import './styles/MainComponent.css'


const emojisIniciales = [
  { emoji: '🌞' }, { emoji: '🌞' }, { emoji: '🌜' }, { emoji: '🌜' }, { emoji: '⭐' }, { emoji: '⭐' }, 
  { emoji: '🌈' }, { emoji: '🌈' }, { emoji: '🌊' }, { emoji: '🌊' }, { emoji: '🏔️' }, { emoji: '🏔️' }, 
  { emoji: '🏝️' }, { emoji: '🏝️' }, { emoji: '🐦' }, { emoji: '🐦' }
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

function multEmojis(emojis,multiplicador){
  return Array(multiplicador).fill(emojis).flat();
}


function App() {
  const [jugar, setJugar] = useState(false);
  const [emojis, setEmojis] = useState(emojisIniciales);
  const [cantCards, setCantCards] = useState(16);

  useEffect(() => {
    if (jugar) {
      const multiplicar = cantCards / 16;
      const emojisMultiplicados = multEmojis(emojisIniciales,multiplicar);
      const nuevosEmojis = mezclarEmojis(emojisMultiplicados);
      setEmojis(nuevosEmojis);
    }
  }, [jugar,cantCards]);

  const voltearCarta = (index) => {
    // Implementa la lógica para voltear cartas aquí
  }

  const verificarPareja = () => {
    // Implementa la lógica para verificar parejas aquí
  }


  const clase = ()=>{
    switch (cantCards){
      case 16:
        return 'row-cols-4 row-cols-md-4';
      case 32:
        return 'row-cols-8 row-cols-lg-8';
      case 64:
        return 'row-cols-sm-4 row-cols-lg-8'
      default:
        return 'row-cols-4 row-cols-md-4'
    }
  }

  const cartaSize = ( )=>{
    switch(cantCards){
      case 16:
        return 'col-3 mb-3';
      case 32:
        return 'col-3 col-md-1-3 mb-3';
      case 64:
        return 'col-3 col-md-1-5 mb-3';
      default:
        return 'col-3 mb-3';
    }
  }

  return (
    <>
      <div className='container bg-warning mb-5 mt-5'>
      {jugar ? (
        <div className={`row ${clase()} `}>
          {emojis.map((e, index) => (
            <div key={index} className={`${cartaSize()}`}>
              <MainComponent 
              palabra={e.emoji}
              cantidadCard={cantCards}
            />
            </div>
            
          ))}
        </div>
      ) : (
        <UserLog jugar={jugar} setJugar={setJugar} cantCards={cantCards} setCantCards={setCantCards}/>
      )}
      </div>
    </>
  )
}

export default App;
