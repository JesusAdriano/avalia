import React, { useState } from 'react';
import './login.css'
import api from '../../services/api'

export default function Login({ history }) {

    const [matricula, setMatricula] = useState('')
    // const [nome, setNome] = useState('')
    // const [telefone, setTel] = useState('')
    // const [email, setEmail] = useState('')
    // const [dependencia, setDep] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post('/funci', {
            matricula
            // ,
            // nome,
            // telefone,
            // email,
            // dependencia
        })

        const { _id } = response.data

        history.push(`/main/${_id}`)
    }

    return (
        <div className="login-container">

            <form>
                <h1>Avaliação - Times Ágeis</h1><br></br>

                <input type="text" className="form-control"
                    required
                    value={matricula}
                    onChange={e => setMatricula(e.target.value.toUpperCase())}
                    placeholder="Digite sua matricula"
                />

                {/* {<input type="text"className="form-control"
            value={nome} 
            onChange={e => setNome(e.target.value)}
            placeholder="Digite seu nome"  
            />
            <input type="text"className="form-control"
            value={telefone} 
            onChange={e => setTel(e.target.value)}
            placeholder="Digite seu Ramal"  
            />
            <input type="email"className="form-control" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite seu E-mail"  
            />
            <input type="text"className="form-control"
            value={dependencia} 
            onChange={e => setDep(e.target.value)}
            placeholder="Digite sua dependência"  
            /><br></br> */}


                <button onClick={handleSubmit} className="btn btn-block">Enviar</button>
            </form>
        </div>
    );
}