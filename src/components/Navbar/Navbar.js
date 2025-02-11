import React from "react";
import './Navbar.css'

function Navbar(props) {
    return (
        <div class="navbar">
            <section>
                <div class="container-navbar">
                    <div class="sub-container-navbar">
                        <div>
                            <div>
                                <a href="index.html">
                                    <h1>TIJOLINHOS DO <span class="green">SABER</span></h1>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div>
                                <ul>
                                    <li><a href="/" class={props.select === 'home' ? 'select' : 'notselect'}>HOME</a></li>
                                    <li><a href="/area-aluno" class={props.select === 'aluno' ? 'select' : 'notselect'}>AREA DO ALUNO</a></li>
                                    <li><a href="/area-professor" class={props.select === 'professor' ? 'select' : 'notselect'}>AREA DO PROFESSOR</a></li>
                                    <li><a href="/area-pais" class={props.select === 'pais' ? 'select' : 'notselect'}>AREA DOS PAIS</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Navbar;