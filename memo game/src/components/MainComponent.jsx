import "../styles/MainComponent.css"
import "../styles/index.css"
const MainComponent = (props) => {
    return(
        <>
            <div className="grid-container">
                <p>{props.emoji}</p>
            </div>
        </>
    );
    
}

export default MainComponent;