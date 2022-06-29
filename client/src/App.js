import React, { useEffect, useState, useContext } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import { THEMES } from "./constants/themes";
import Theme from "./contexts/theme";
import Login from "./modules/login/Login";
import NotesView from "./modules/notesView/NotesView";
import Register from "./modules/register/Register";
import PrivateRoute from "./components/PrivateRoute";
import configureAppStore from "./redux/store";
import User from "./contexts/user";
import AddNotes from "./modules/addNote/addNote";
import DetailNote from "./modules/detailNote/DetailNote";
import Home from "./modules/home/Home";

// Componente principal de la aplicación.
const App = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  const [signedIn, setUser] = useState(false);

  // Estado del tema 
  const [theme, setTheme] = useState(THEMES.light)

  const store = configureAppStore();

  // Cargamos el estado del servidor
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"))
      .finally(() => setLoading(false));

    if (document.body.classList.value === "") {
      document.body.classList.add(theme);
    } else {
      document.body.classList.replace(
        document.body.classList.value,
        theme
      );
    }

    //document.className.body = LA CLASE QUE SEA
  }, [theme]);

  // Mostramos la aplicación
  return (
    <div className="app">
      <Provider store={store}>
        <Theme.Provider value={{ current: theme, update: setTheme }}>
          <User.Provider value={{ signedIn: signedIn, updateUser: setUser }}>
            <Header />
            <Router>
              <Switch>
                <Route path="/" exact>
                  <Home></Home>
                </Route>
                <Route path="/login" exact>
                  {!signedIn && <Login />}
                  {signedIn && (
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
          </User.Provider>
        </Theme.Provider>
      </Provider>
    </div>
  );
};

export default App;
