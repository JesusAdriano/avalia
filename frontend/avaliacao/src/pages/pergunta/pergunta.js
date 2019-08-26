import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './pergunta.css'

import api from '../../services/api'

export default function Perguntas() {

    const [getPergunta, setPergunta] = useState([])
    const [getArea, setArea] = useState([])
    const [area, setAddArea] = useState('')
    const [pergunta, setAddPergunta] = useState('')

    useEffect(() => {
        async function loadPergunta() {
            const response = await api.get('/pergunta')
            setPergunta(response.data)
        }
        //loadPergunta()
    })

    useEffect(() => {
        async function loadArea() {
            const response = await api.get('/area')
            setArea(response.data)
        }
        loadArea()
    }, [])

    async function handleCreate(e) {
        e.preventDefault()

        const response = await api.post('/pergunta', {
            area,
            pergunta
        })
        console.log(response.data)
    }

    async function handleDel(_id) {
        const response = await api.delete(`/pergunta/${_id}`)
        console.log(response.data)
    }

    return (
        <div className="container pergunta">

            <Link className="buttonVoltar btn btn-primary" to="/admin">Voltar</Link>
            <h5>Perguntas</h5>

            <form>

                <input
                    className="form-control"
                    value={pergunta}
                    onChange={e => setAddPergunta(e.target.value)}
                    placeholder="Digite a Pergunta"
                />

                <select className="form-control"
                    value={area}
                    onChange={e => setAddArea(e.target.value)}
                >

                    <option selected>Selecione</option>
                    {getArea.map((ar, i) => (
                        <option
                            key={i}
                            value={ar.area}
                        >
                            {ar.area}
                        </option>
                    ))}

                </select>

                <button type="submit" className="btn btn-outline-success" onClick={handleCreate}>Adicionar</button>

            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Área</th>
                        <th scope="col">Perguntas</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {getPergunta.map((per, i) => (
                        <tr key={i}>
                            <th scope="row">{per._id}</th>
                            <td>{per.area}</td>
                            <td>{per.pergunta}</td>
                            <td>
                                <i className="fa fa-edit editar" ></i>
                                <i className="fa fa-trash delete" onClick={() => handleDel(per._id)}></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}