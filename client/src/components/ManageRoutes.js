import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "../modules/login/Login";
import NotesView from "../modules/notesView/NotesView";
import Register from "../modules/register/Register";
import PrivateRoute from "./PrivateRoute";
import Header from "./Header";
import AddNotes from "../modules/addNote/addNote";
import DetailNote from "../modules/detailNote/DetailNote";
import Home from "../modules/home/Home";
import { useSelector } from "react-redux";
import { getLoginState } from "../modules/login/selector";

const ManageRoutes = () => {

    // Selectors
    const loginState = useSelector((state) => getLoginState(state))

    return (
        <div>
            <Header userInfo={loginState.userInfo} />
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>
                    <Route path="/login">
                        {!loginState.userInfo && <Login />}
                        {loginState.userInfo && (
                            <Redirect
                                to={{
                                    pathname: '/notes',
                                }}
                            />
                        )}
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <PrivateRoute path="/notes">
                        <NotesView />
                    </PrivateRoute>
                    <PrivateRoute path="/add-note">
                        <AddNotes />
                    </PrivateRoute>
                    <PrivateRoute path="/detail-note">
                        <DetailNote />
                    </PrivateRoute>
                    <Route path="*">
                        <div>Ruta no encontrada</div>
                        <a href="/login">Volver a home</a>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default ManageRoutes;