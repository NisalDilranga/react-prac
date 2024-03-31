import React from "react"
import './Footers.css'

function Footers(props){
    return(<>
        <div className="footers">This is footer
        {props.children}
        </div>
        
        </>
    )
}

export default Footers