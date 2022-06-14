import React, { useContext, useState } from 'react';
import ThemeToggle from '../../components/ThemeToggle';
import { THEMES } from '../../constants/themes';
import Theme from '../../contexts/theme';
import { login } from './actions';
import { useDispatch } from "react-redux";
import './login.css';

const Login = () => {

    const theme = useContext(Theme);
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({ username: "", password: "" });

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
            <ThemeToggle />
            <form className="login_form" onSubmit={onSubmit}>
                <input id="username" type="text" className="login_form_input" placeholder="Usuario" value={formState.username} onChange={onChange("username")} />
                <input id="password" type="password" className="login_form_input" placeholder="Contraseña" value={formState.password} onChange={onChange("password")} />
                <button className="login_form_button">Iniciar sesión</button>
                <p>¿Todavía no estás registrado?</p>
                <a href="/register">Regístrate</a>
            </form>
        </div>
    );


}

export default Login;