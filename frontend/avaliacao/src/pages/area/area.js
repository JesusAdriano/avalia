import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './area.css'

import api from '../../services/api'

export default function Area() {

    const [getArea, setArea] = useState([])
    const [area, setAddArea] = useState('')

    useEffect(() => {
        async function loadArea() {
            const response = await api.get('/area')
            setArea(response.data)
        }
        loadArea()
    }, [])

    async function handleCreate(e) {
        e.preventDefault()

        const response = await api.post(`/area`, {
            area
        })
        console.log(response.data)

    }

    async function handleDel(_id) {

        const response = await api.delete(`/area/${_id}`)
        console.log(response.data)

    }

    return (
        <div className="container area">

            <Link className="buttonVoltar btn btn-primary" to="/admin">Voltar</Link>
            <h5>Área</h5>

            <div>
                <form>
                    <input
                        className="form-control"
                        value={area}
                        onChange={e => setAddArea(e.target.value)}

                    />

                    <button className="btn btn-outline-success" onClick={handleCreate}>Adicionar</button>
                </form>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Áreas</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {getArea.map(ar => (
                        <tr key={ar._id}>
                            <th scope="row">{ar._id}</th>
                            <td>{ar.area}</td>
                            <td>
                                <i className="fa fa-edit editar" ></i>
                                <i className="fa fa-trash delete" onClick={() => handleDel(ar._id)}></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
