import "../styles/MainComponent.css"
import "../styles/index.css"


const MainComponent = (props) => {
    console.log(props)
    return(
        <>
            <div className="cont">
                <div className="card">
                    <div>{props.palabra}</div>
                </div>
            </div>
            
        </>
    );
    
}

export default MainComponent;