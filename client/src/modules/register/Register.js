import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { register } from './actions';
import { BsFillKeyFill, BsFillPersonPlusFill, BsKey } from "react-icons/bs";
import './register.css';
import userHook from '../../hooks/userHook';
import { getRegisterState, getUsername } from './selector';

const Register = () => {

    const registerState = useSelector((state) => getRegisterState(state))

    // Estados
    const usersForm = userHook();
    const [passwordRepeated, setPasswordRepeted] = useState("")
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(registerState)
    })

    const onSubmit = (e) => {
        e.preventDefault();

        let formError = false;

        if (usersForm.value.password !== passwordRepeated) {
            setError(true)
            formError = true;
        } else {
            setError(false)
            formError = false;
        }

        if (!formError) {
            const formToSend = {
                username: usersForm.value.username,
                password: usersForm.value.password
            }

            dispatch(register(formToSend))
        }

        if (registerState.error === null) {
            console.log('NO HAY ERROR')
        }

    }

    const onChangePasswordRepeated = (e) => {
        setPasswordRepeted(e.target.value)
    }

    return (
        <div className="register">
            <form className="register_form" onSubmit={onSubmit}>
                <h3>Regístrese en la aplicación</h3>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsFillPersonPlusFill /></span>
                    <input id="username" type="text" className="form-control" placeholder="Usuario" value={usersForm.value.username} onChange={usersForm.onChangeForm("username")} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsFillKeyFill /></span>
                    <input id="password" type="password" className="form-control" placeholder="Contraseña" value={usersForm.value.password} onChange={usersForm.onChangeForm("password")} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><BsKey /></span>
                    <input id="password" type="password" className="form-control" placeholder="Repita contraseña" value={passwordRepeated} onChange={onChangePasswordRepeated} />
                </div>
                {error && <p className='error'>Las contraseñas no coinciden</p>}
                <button className="btn btn-primary login_button">Registrarse</button>
            </form>
        </div>
    );


}

export default Register;