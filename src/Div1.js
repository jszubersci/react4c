import { useRef, useState } from "react";
import "./Div1.css"
import Row from './Row';


function Div1() {
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

    const tablica1 = ["Text1", "Text2", "Text3"];
    const data2 = [
      {"id1": "5311de8c-f2f5-4642-afeb-7e663645c3a9", "id2": "7145e09f-da06-477b-934c-bb803bdceb72", "id3": "f8c315bf-44c3-478c-ac3b-8ce72c1269a2"},
      {"id1": "55cd9773-f3b0-4710-8c7f-3f30adf1bf7f", "id2": "cec70a92-fbe0-4b29-af08-5a6b919c3931", "id3": "fed277fe-f56a-4999-bcdc-706830b52ff3"},
      {"id1": "3dc886fe-4b7f-4085-b122-1a2903205c40", "id2": "409cc13b-e186-4025-8772-3780a8afad83", "id3": "52779a94-8c88-4cba-a1b4-e11be66a90f8"}
    ]

    return ( 
        <div className="Div1" style={myStyle}>
        <table>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
          <tr>
            <td>Data 1a</td>
            <td>Data 1b</td>
          </tr>
          <tr>
            <td>Data 2a</td>
            <td>Data 2b</td>
          </tr>

          {
            tablica1.map((element, index, array) => {
              return (<tr><td>{index+1}</td></tr>)
            })
          }

          {/* {
            data2.map((element, index, array) => {
              return (<tr key={index}><td>{index+1} {element["id1"]}</td></tr>)
            })
          } */}

          {
            data2.map((element, index, array) => {
              return (<Row key={element.id} index={index+1} id2={element.id2}></Row>)
            })
          }

        </table>
        </div>
    );
}

export default Div1;