import React from "react";
import Navbar from '../Navbar/Navbar'

class AreaDoAluno extends React.Component {
    render(){
        return(
            <div>
                <Navbar select="aluno"/>
                <h2>Area Do Aluno</h2>
            </div>
        )
    }
}

export default AreaDoAluno