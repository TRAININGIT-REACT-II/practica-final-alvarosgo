import React, { useContext, useState } from 'react';
import ThemeToggle from '../../components/ThemeToggle';
import { THEMES } from '../../constants/themes';
import Theme from '../../contexts/theme';
import { login } from './actions';
import { useDispatch } from "react-redux";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";
import './login.css';

const Login = () => {

    const [formState, setFormState] = useState({ username: "", password: "" });
    const theme = useContext(Theme);
    const dispatch = useDispatch();

    const loginCssClass = theme.current === THEMES.light ? "login" : "login login_dark";

    const onChange = (key) => {
        return (e) => setFormState({
            ...formState,
            [key]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formState))
    }

    return (
        <div className={loginCssClass}>
            <form className="login_form" onSubmit={onSubmit}>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
                    <input id="username" type="text" className="form-control" placeholder="Usuario" value={formState.username} onChange={onChange("username")} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><BsFillKeyFill></BsFillKeyFill></span>
                    <input id="password" type="password" className="form-control" placeholder="Contraseña" value={formState.password} onChange={onChange("password")} />
                </div>
                <button className="btn btn-primary login_button">Iniciar sesión</button>
                <p>¿Todavía no estás registrado? <a href="/register">Regístrate aquí</a> </p>
            </form>
        </div>
    );


}

export default Login;