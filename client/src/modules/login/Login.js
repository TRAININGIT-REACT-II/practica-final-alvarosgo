import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { THEMES } from '../../constants/themes';
import Theme from '../../contexts/theme';
import { login } from './actions';
import { useDispatch, useSelector } from "react-redux";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";
import './login.css';
import userHook from '../../hooks/userHook';
import { getLoginState } from './selector';

const Login = () => {

    // Selectors
    const loginState = useSelector((state) => getLoginState(state))

    // Estados
    const usersForm = userHook();
    const [errorEnLogin, setErrorEnLogin] = useState(false);

    const { state } = useLocation();

    // Contextos
    const theme = useContext(Theme);

    const dispatch = useDispatch();

    const loginCssClass = theme.current === THEMES.light ? "login" : "login login_dark";

    const showError = state && state.msg != null && !loginState.userInfo;

    useEffect(() => {
        if (loginState.userInfo === null && loginState.error !== null) {
            setErrorEnLogin(true)
        } else if (loginState.userInfo !== null && loginState.userInfo?.userId === -1 && loginState.error !== null) {
            setErrorEnLogin(true)
        }

    }, [loginState])

    const onSubmit = (e) => {
        e.preventDefault();
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
                {showError && (<div className='login_error'><p>{state.msg}</p></div>)}
                {errorEnLogin && <div className='login_error'><p>{loginState.error}</p></div>}
                <button className="btn btn-primary login_button" >Iniciar sesión</button>
                <p>¿Todavía no estás registrado? <a href="/register">Regístrate aquí</a> </p>
            </form>
        </div>
    );


}

export default Login;