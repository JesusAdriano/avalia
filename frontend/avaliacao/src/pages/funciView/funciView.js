import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './funciView.css'

import api from '../../services/api'

export default function FunciView({ match }) {

    const [funci, setFunci] = useState([])

    useEffect(() => {
        async function loadFunci() {
            const response = await api.get(`/funci/${match.params.id}`)

            const obj = response.data

            setFunci(Object.entries(obj))

            console.log(Object.entries(obj))
            // console.log(Object.values(obj))
        }
        loadFunci()
    }, [])

    return (
        <div className="container funciView">

            <Link className="buttonVoltar btn btn-primary" to="/funci">Voltar</Link>
            {/* Requested Param: {match.params.id} */}


            {funci.map(fu => (
                <div key={fu}>
                    {fu[1]}
                </div>
                // <input value={} disabled />
                // <input value="Pedro" disabled />
                // <input value="Ramal" disabled />
                // <input value="Email" disabled />
                // <input value="Dependência" disabled />
            ))}

        </div>

    );
}