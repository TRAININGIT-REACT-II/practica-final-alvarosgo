import { useContext } from "react";
import { THEMES } from "../constants/themes";
import Theme from "../contexts/theme";
import { BsSun, BsMoon } from "react-icons/bs";

// Toggle para cambiar el tema actual
const ThemeToggle = () => {
    const theme = useContext(Theme);

    const currentName = theme.current === THEMES.light ? "Tema claro" : "Tema oscuro";

    const onChange = () => {
        theme.update(theme.current === THEMES.light ? THEMES.dark : THEMES.light);
    };

    return (
        <div className="form-check form-switch" aria-current={currentName}>
            <label className="form-check-label" htmlFor="theme-toggle"><BsSun /></label>
            <input id="theme-toggle" className="form-check-input" type="checkbox" onChange={onChange} />
            <label className="form-check-label" htmlFor="theme-toggle"><BsMoon /></label>
        </div>)
};

export default ThemeToggle;