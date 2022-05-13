import React from "react";
import Navbar from './Navbar/Navbar'
import './Home/style.css'
import Banner from './Home/Banner'

class AreaDoInicio extends React.Component{
    render(){
        return(
            <div class="teste">
                <Navbar select="home"/>
                <Banner 
                    titulo="BEM-VINDO AO TIJOLINHO DO SABER" 
                    slogan="Uma escola moderna, perfeita e ideal para seu filho! Venha com a gente :)"
                />
            </div>
        )
    }
}

export default AreaDoInicio