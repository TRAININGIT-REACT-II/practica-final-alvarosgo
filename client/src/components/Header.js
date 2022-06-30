import ThemeToggle from './ThemeToggle';
import { TOKEN, USER_INFO } from "../modules/login/actions";
import './header.css';

const Header = (props) => {

    const { userInfo } = props;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">QN - QUALITY NOTES</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <ThemeToggle /> */}
                    {userInfo && <button type="button" class="btn btn-danger" onClick={() => {
                        localStorage.removeItem(USER_INFO);
                        localStorage.removeItem(TOKEN);

                        window.location = '/';
                    }
                    }>Cerrar sesión</button>}
                </div>
            </nav>
        </div>
    )

}

export default Header;