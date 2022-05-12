import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AreaDoInicio from './components/AreaDoInicio/AreaDoInicio';
import AreaDoAluno from './components/AreaDoAluno/AreaDoAluno';

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <AreaDoInicio/> } exact />
                <Route path="/area-aluno" element={<AreaDoAluno/>} />
                <Route path="/area-professor" element={<AreaDoAluno/>} />
                <Route path="/area-pais" element={<AreaDoAluno/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;