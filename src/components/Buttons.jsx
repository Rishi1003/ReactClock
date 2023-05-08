import React from "react";

function Buttons(props)
{
    return(
        <button onClick={props.onClick}>{props.name}</button>
    );
}

export default Buttons;