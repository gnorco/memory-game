import "../styles/UserLog.css";
import "../styles/index.css";
import { useState,useEffect } from "react";

const UserLog = (props) => {
    const [nombre, setNombre] = useState('');
    const [selectionCard,setSelectionCard]= useState(props.cantCards);

    useEffect (()=> {
        props.setCantCards(selectionCard);
    },[selectionCard,props])

    const selectCard = (event) => {
        setSelectionCard(Number(event.target.textContent)); 
        console.log(props.cantCards);
    }
    
    const enviar = () => {
        props.setJugar(true);
    }
    
    return (
        <>
            <div className="container">        
                <h1>Ingrese su nombre</h1>
                <input type="text" placeholder="nombre" required onChange={e => {setNombre(e.target.value)}}/>
                <div className="cardsContainer">
                    <div onClick={selectCard} className="cards">16</div>
                    <div onClick={selectCard} className="cards">32</div>
                    <div onClick={selectCard} className="cards">64</div>
                </div>
                <button type="button" onClick={enviar}>Jugar</button> {/* Usamos onClick en lugar de onSubmit */}
            </div>
        </>
    )
}

export default UserLog;
