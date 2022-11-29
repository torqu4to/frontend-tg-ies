import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import "./style.css";

const LoginPage = () => {

    const { authenticated, login } = useContext(AuthContext) 
    
    const [ cpf, setCpf ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log('login auth', { cpf, password })
        login(cpf, password) //integração com contexto / api
    }

    return (
        <div id='login'>
            <h1 className='title'>Login do sistema</h1>
            <p>{String(authenticated)}</p>
            <form className='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor='cpf' >CPF</label>
                    <input type='text' name='cpf' id='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)} />
                </div>
                <div className='field'>
                    <label htmlFor='password' >Senha</label>
                    <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='actions'>
                    <button type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage