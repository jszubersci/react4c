import { useRef, useState } from "react";

function Row(props) {
    const inputRef = useRef()


    return (
      <tr>
        <td>{props.index}</td>
        <td>{props.id2}</td>
      </tr>
    )

}

export default Row;
