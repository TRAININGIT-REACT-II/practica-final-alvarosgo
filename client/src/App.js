import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { THEMES } from "./constants/themes";
import Theme from "./contexts/theme";
import configureAppStore from "./redux/store";
import ManageRoutes from "./components/ManageRoutes";

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
          <ManageRoutes />
        </Theme.Provider>
      </Provider>
    </div>
  );
};

export default App;
