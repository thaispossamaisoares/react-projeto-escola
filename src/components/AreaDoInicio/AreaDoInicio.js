import React from "react";
import Navbar from '../Navbar/Navbar'
import './AreaDoInicio.css'

class AreaDoInicio extends React.Component{
    render(){
        return(
            <div class="teste">
                <Navbar select="home"/>
                <h1>Home</h1>
            </div>
        )
    }
}

export default AreaDoInicio