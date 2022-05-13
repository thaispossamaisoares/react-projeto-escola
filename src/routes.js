import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import AreaDoAluno from './components/AreaDoAluno/AreaDoAluno';

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <Home/> } exact />
                <Route path="/area-aluno" element={<AreaDoAluno/>} />
                <Route path="/area-professor" element={<AreaDoAluno/>} />
                <Route path="/area-pais" element={<AreaDoAluno/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;