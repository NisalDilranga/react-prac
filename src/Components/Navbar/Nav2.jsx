
import React from "react";
import "./Navbar2.css"
import Menu from "../Menu_Icon/Menu";

function Navbar(){

    return(
        <>
        <div className="logo">

           <h1>HELLO</h1>
           <div className="menu_icon">

            <Menu linkname="Home" url="#home"/>
            <Menu linkname="About" url="#about"/>
            <Menu linkname="Login" url="#login"/>
           
           
           </div>
           
        </div>
        
        </>
    )
}
export default Navbar