import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import User from "../contexts/user";

const PrivateRoute = ({ children, ...others }) => {

    const { signedIn } = useContext(User);

    return (
        <Route
            {...others}
            render={() =>
                //signedIn ? ( HASTA QUE LO HAGAMOS CON EL API
                true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { msg: "Debes iniciar sesión" },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;