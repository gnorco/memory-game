import "../styles/UserLog.css"
import "../styles/index.css"

const UserLog = (props) => {
    console.log(props)
    return(
        <>
            <div className="container">        
                <h1>Ingrese su nombre</h1>
                <input type="text" placeholder="nombre" />
                <button onClick={()=>{props.setJugar(true)}}>Jugar</button>
            </div>
        </>
    )
}
export default UserLog;