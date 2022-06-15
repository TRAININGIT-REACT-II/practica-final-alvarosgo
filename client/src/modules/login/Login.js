import React, { useContext, useState } from 'react';
import { useLocation } from "react-router";
import ThemeToggle from '../../components/ThemeToggle';
import { THEMES } from '../../constants/themes';
import Theme from '../../contexts/theme';
import { login } from './actions';
import { useDispatch } from "react-redux";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";
import './login.css';
import User from '../../contexts/user';

const Login = () => {

    const { state } = useLocation();

    const [formState, setFormState] = useState({ username: "", password: "" });

    const theme = useContext(Theme);
    const user = useContext(User);

    const dispatch = useDispatch();

    const loginCssClass = theme.current === THEMES.light ? "login" : "login login_dark";

    const showError = state && state.msg != null && !user.signedIn;

    const onChange = (key) => {
        return (e) => setFormState({
            ...formState,
            [key]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        user.updateUser(true)
        dispatch(login(formState))
    }

    return (
        <div className={loginCssClass}>
            <form className="login_form" onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
                    <input id="username" type="text" className="form-control" placeholder="Usuario" value={formState.username} onChange={onChange("username")} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsFillKeyFill></BsFillKeyFill></span>
                    <input id="password" type="password" className="form-control" placeholder="Contraseña" value={formState.password} onChange={onChange("password")} />
                </div>
                <button className="btn btn-primary login_button" >Iniciar sesión</button>
                <p>¿Todavía no estás registrado? <a href="/register">Regístrate aquí</a> </p>
                {showError && (<div className='login_error'><p>{state.msg}</p></div>)}
            </form>
        </div>
    );


}

export default Login;