import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { register } from './actions';
import { BsFillKeyFill, BsFillPersonPlusFill, BsKey } from "react-icons/bs";
import './register.css';

const Register = () => {

    const [formState, setFormState] = useState({ username: "", password: "" });

    const dispatch = useDispatch();

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
                <h3>Regístrese en la aplicación</h3>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsFillPersonPlusFill /></span>
                    <input id="username" type="text" className="form-control" placeholder="Usuario" value={formState.username} onChange={onChange("username")} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsFillKeyFill /></span>
                    <input id="password" type="password" className="form-control" placeholder="Contraseña" value={formState.password} onChange={onChange("password")} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsKey /></span>
                    <input id="password" type="password" className="form-control" placeholder="Repita contraseña" value={formState.password} />
                </div>
                <button className="btn btn-primary login_button">Registrarse</button>
            </form>
        </div>
    );


}

export default Register;