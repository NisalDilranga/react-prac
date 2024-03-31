import React from "react";

import "./menu.css"

function Menu(props){
    return(
        <>
        <a href={props.url} className="menu">
            {props.linkname}
        </a>
       
        </>
    )
}
export default Menu
