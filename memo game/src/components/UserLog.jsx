const UserLog = (props) => {
    console.log(props)
    return(
        <>
            <h1>Ingrese su nombre</h1>
            <input type="text" placeholder="nombre" />
            <button onClick={()=>{props.setJugar(true)}}>Jugar</button>
        </>
    )
}
export default UserLog;