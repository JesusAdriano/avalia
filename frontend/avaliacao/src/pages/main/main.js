import React, { useEffect, useState } from 'react';
import './main.css'

import api from '../../services/api'

export default function Main({ match }) {

    const [getTime, setTime] = useState([])
    const [time, setAddTime] = useState('')

    useEffect(() => {
        async function loadTime() {
            const response = await api.get('/time')
            setTime(response.data)
        }
        loadTime()
    })

    async function filtro() {
        await api.get('/time')
        setTime(time.filter(ti => ti.time === time))
    }

    // async function handleId() {

    // }
    async function handleCreate(e) {
        e.preventDefault()

        const response = await api.post(`/time`, {
            time
        })
        console.log(response.data)
    }

    return (
        <div className="container main">
            {getTime.length >= 1 ? (
                <form>
                    <input type="text" className="form-control" />
                    <button className="btn" onClick={filtro}>Filtro</button>
                </form>
            ) : (
                    ''
                )}

            {getTime.length > 0 ? (
                <ul>
                    {getTime.map((ti, i) => (
                        <li>
                            <footer key={i}>
                                <strong>{ti.time}</strong><br></br>
                                <i className="fa fa-binoculars view"></i>
                            </footer>
                        </li>
                    ))}
                </ul>
            ) : (
                    <form className="adicionar">
                        <input
                            value={time}
                            onChange={e => setAddTime(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Adicionar seu Time"
                        />
                        <button
                            className="btn"
                            onClick={handleCreate}
                        >
                            Adicionar
                            </button>
                    </form>
                )}
        </div>
    );
}