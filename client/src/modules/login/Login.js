import React, { useContext, useState } from 'react';
import { useLocation } from "react-router";
import { THEMES } from '../../constants/themes';
import Theme from '../../contexts/theme';
import { login } from './actions';
import { useDispatch } from "react-redux";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";
import './login.css';
import User from '../../contexts/user';
import userHook from '../../hooks/userHook';

const Login = () => {

    // Estados
    const usersForm = userHook();

    const { state } = useLocation();

    // Contextos
    const theme = useContext(Theme);
    const { signedIn, updateUser } = useContext(User);

    const dispatch = useDispatch();

    const loginCssClass = theme.current === THEMES.light ? "login" : "login login_dark";

    const showError = state && state.msg != null && !signedIn;

    const onSubmit = (e) => {
        e.preventDefault();
        updateUser(true)
        console.log('EN EL SUBMIT')
        console.log(signedIn)
        dispatch(login(usersForm.value))
    }

    return (
        <div className={loginCssClass}>
            <form className="login_form" onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
                    <input id="username" type="text" className="form-control" placeholder="Usuario" value={usersForm.value.username} onChange={usersForm.onChangeForm("username")} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsFillKeyFill></BsFillKeyFill></span>
                    <input id="password" type="password" className="form-control" placeholder="Contraseña" value={usersForm.value.password} onChange={usersForm.onChangeForm("password")} />
                </div>
                <button className="btn btn-primary login_button" >Iniciar sesión</button>
                <p>¿Todavía no estás registrado? <a href="/register">Regístrate aquí</a> </p>
                {showError && (<div className='login_error'><p>{state.msg}</p></div>)}
            </form>
        </div>
    );


}

export default Login;