import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getLoginState } from "../modules/login/selector";

const PrivateRoute = ({ children, ...others }) => {

    const loginState = useSelector((state) => getLoginState(state))

    const userIsLogged = loginState.userInfo !== null;

    return (
        <Route
            {...others}
            render={() =>
                userIsLogged ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { msg: "Debes iniciar sesión" },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;