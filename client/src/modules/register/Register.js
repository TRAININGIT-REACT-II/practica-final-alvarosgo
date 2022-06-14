import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { register } from './actions';
import './register.css';

const Register = () => {

    const dispatch = useDispatch();
    const [formState, setFormState] = useState({ username: "", password: "" });

    const onChange = (key) => {
        return (e) => setFormState({
            ...formState,
            [key]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formState))
    }

    return (
        <div className="register">
            <form className="register_form" onSubmit={onSubmit}>
                <h1>Regístrese en la aplicación</h1>
                <input id="username" type="text" className="register_form_input" placeholder="Usuario" value={formState.username} onChange={onChange("username")} />
                <input id="password" type="password" className="register_form_input" placeholder="Contraseña" value={formState.password} onChange={onChange("password")} />
                <button className="register_form_button">Registrar</button>
            </form>
        </div>
    );


}

export default Register;