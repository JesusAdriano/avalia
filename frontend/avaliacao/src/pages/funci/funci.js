import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './funci.css'

import api from '../../services/api'

export default function Funci({ history }) {

    const [funci, setFunci] = useState([])

    useEffect(() => {
        async function loadFunci() {
            const response = await api.get('/funci')
            setFunci(response.data)

        }
        loadFunci()
    }, [])

    async function handleDel(_id) {

        const response = await api.delete(`/funci/${_id}`)
        console.log(response.data)

    }

    async function handleView(_id) {

        history.push(`/funci/${_id}`)
    }

    return (

        <div className="container funci">
            <Link className="buttonVoltar btn btn-primary" to="/admin">Voltar</Link>
            <h5>Funcionários</h5>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Matrícula</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ramal</th>
                        <th scope="col">Email</th>
                        <th scope="col">Dependência</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {funci.map(fu => (
                        <tr key={fu._id}>
                            <th scope="row">{fu.matricula}</th>
                            <td>{fu.nome}</td>
                            <td>{fu.telefone}</td>
                            <td>{fu.email}</td>
                            <td>{fu.dependencia}</td>
                            <td>
                                <i className="fa fa-binoculars view" onClick={() => handleView(fu._id)}></i>
                                <i className="fa fa-trash delete" onClick={() => handleDel(fu._id)}></i>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}
