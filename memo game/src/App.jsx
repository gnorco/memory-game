import { useState } from 'react'
import UserLog from './components/UserLog'


function App() {
  const [jugar, setJugar] = useState(false)
  const [mensaje, setMensaje] = useState('')

  
  return (

    <>
      {jugar ? (
        <p>mensaje</p>
      ):(
        <UserLog jugar={jugar} setJugar= {setJugar}/>
      )}
    </>
  )
}

export default App
