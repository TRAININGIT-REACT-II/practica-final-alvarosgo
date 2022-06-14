import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { THEMES } from "./constants/themes";
import Theme from "./contexts/theme";
import Login from "./modules/login/Login";
import Register from "./modules/register/Register";
import configureAppStore from "./redux/store";

// Componente principal de la aplicación.
const App = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

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
          <Router>
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="*">
                <div>Ruta no encontrada</div>
                <a href="/">Volver a home</a>
              </Route>
            </Switch>
          </Router>
        </Theme.Provider>
      </Provider>
    </div>
  );
};

export default App;
