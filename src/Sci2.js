import { useRef, useState } from "react";
import "./Sci.css"

function Sci2() {
    const inputRef = useRef()

    const myStyle = {color : "Black", border:"solid", margin:"20px"}
    const [name , setName] = useState("aaaaaaaa");

    const handleButton = () => {
        setName(inputRef.current.value)
        //console.log(inputRef.current.value);
    }
    const handleInputText = (event) => {
        //console.log(event.target.value)
    }
    return ( 
        <div className="Sci2" style={myStyle}>
        {/* <input type="button" value="baton" onClick={handleButton}></input>
        <input ref={inputRef} type="text" onInputCapture={handleInputText}></input>
        <p>{name}</p> */}
        <p>START</p>
          <input></input><br></br>
          <input></input>


        <br></br><br></br><br></br>
        <p>STOP</p>
        </div>
    );
}

export default Sci2;