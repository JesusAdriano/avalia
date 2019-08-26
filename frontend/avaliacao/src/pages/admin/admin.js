import React from 'react';
import { Link } from 'react-router-dom'
import './admin.css'

export default function Admin() {
    return (
        <div className="container admin">
            <h3>Administrador</h3>

            <span>Perguntas: <Link className="buttonAcessar btn " to="/pergunta">Acessar</Link>
            </span>

            <span>Áreas: <Link className="buttonAcessar btn " to="/area">Acessar</Link>
            </span>

            <span>Funcionários: <Link className="buttonAcessar btn " to="/funci">Acessar</Link>
            </span>

            <span>Times: <Link className="buttonAcessar btn " to="/time">Acessar</Link>
            </span>
        </div>
    );
}