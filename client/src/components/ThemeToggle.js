import { useContext } from "react";
import { THEMES } from "../constants/themes";
import Theme from "../contexts/theme";

// Toggle para cambiar el tema actual
const ThemeToggle = () => {
    const theme = useContext(Theme);
    const currentName = theme.current === THEMES.light ? "Tema claro" : "Tema oscuro";

    const onChange = () => {
        theme.update(theme.current === THEMES.light ? THEMES.dark : THEMES.light);
    };

    return <label className="theme-toggle">
        <span className="theme-toggle_option" aria-label="Tema claro"></span>
        <div className="theme-toggle_controls" aria-current={currentName}>
            <input id="theme-toggle" type="checkbox" onChange={onChange} />
        </div>
        <span className="theme-toggle_option" aria-label="Tema oscuro"></span>
        {currentName}
    </label>
};

export default ThemeToggle;