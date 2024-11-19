import "../styles/UserLog.css";
import "../styles/index.css";
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const UserLog = (props) => {
    
    const [nombre, setNombre] = useState('');
    const [selectionCard,setSelectionCard]= useState(null);


    const selectCard = (event) => {
        setSelectionCard(Number(event.target.textContent)); 
        
    }

    useEffect(()=>{

    },[selectionCard])
    
    const enviar = () => {
        props.setJugar(true);
        props.setCantCards(selectionCard);
    }
    
    return (
        <>
            <div className="container">        
                <h1>Ingrese su nombre</h1>
                <input type="text" placeholder="nombre" required onChange={e => {setNombre(e.target.value)}}/>
                <h3 className="px-3 mt-3">ingrese la cantidad de cartas con la que desea jugar</h3>
                <div className="cardsContainer mt-4">
                    <div onClick={selectCard} className="cards">16</div>
                    <div onClick={selectCard} className="cards">32</div>
                    <div onClick={selectCard} className="cards">64</div>
                </div>
                <button type="button" className="btn btn-outline-light mt-3 " onClick={enviar}>Jugar</button> {/* Usamos onClick en lugar de onSubmit */}
            </div>
        </>
    )
}

export default UserLog;
