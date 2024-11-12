import { useState } from 'react'
import UserLog from './components/UserLog'
import MainComponent from './components/MainComponent'

function App() {
  const [jugar, setJugar] = useState(false);

  
  return (
    <>
      {jugar ? (
        <MainComponent/>
      ):(
        <UserLog jugar={jugar} setJugar={setJugar}/>
      )}
    </>
  )
}

export default App;
