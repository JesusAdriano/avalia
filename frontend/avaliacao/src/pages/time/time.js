import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './time.css'

import api from '../../services/api'

export default function Area() {

    const [getTime, setTime] = useState([])
    const [time, setAddTime] = useState('')

    useEffect(() => {
        async function loadTime() {
            const response = await api.get('/time')
            setTime(response.data)
        }
        loadTime()
    })

    async function handleCreate(e) {
        e.preventDefault()

        const response = await api.post(`/time`, {
            time
        })
        console.log(response.data)
    }

    async function handleDel(_id) {

        const response = await api.delete(`/time/${_id}`)
        console.log(response.data)

    }

    return (
        <div className="container time">

            <Link className="buttonVoltar btn btn-primary" to="/admin">Voltar</Link>
            <h5>Times</h5>

            <div>
                <form>
                    <input
                       className="form-control"
                        value={time}
                        onChange={e => setAddTime(e.target.value)}

                    />

                    <button className="btn btn-outline-success" onClick={handleCreate}>Adicionar</button>
                </form>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Times</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {getTime.map((ti, i) => (
                        <tr key={i}>
                            <th scope="row">{ti._id}</th>
                            <td>{ti.time}</td>
                            <td>
                                <i className="fa fa-binoculars view" ></i>
                                <i className="fa fa-edit editar" ></i>
                                <i className="fa fa-trash delete" onClick={() => handleDel(ti._id)}></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}