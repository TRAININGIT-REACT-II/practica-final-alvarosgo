import ThemeToggle from './ThemeToggle';
import './header.css';

const Header = () => {

    return (
        <div className="header">
            <h1>QN - QUALITY NOTES</h1>
            <p>Usuario</p>
            <a href="/register">Cerrar sesión</a>
            <ThemeToggle />
        </div>
    )

}

export default Header;