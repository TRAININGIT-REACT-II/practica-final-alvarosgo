import React from 'react';
import './home.css';

const Home = () => {

    return (
        <div className='home'>
            <h3>Bienvenido/a a la mejor aplicación de gestión de notas que existe actualmente en el mercado</h3>
            <p>¡Inicie sesión ya en la aplicación para probarla!</p>
            <button className="btn btn-primary login_button" onClick={() => window.location = '/login'} >Iniciar sesión</button>
        </div>
    );

}

export default Home;