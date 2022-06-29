import React from 'react';
import './home.css';

const Home = () => {

    return (
        <div className='home'>
            <p>Esto es el Home</p>
            <button className="btn btn-primary login_button" onClick={() => window.location = '/login'} >Iniciar sesión</button>
        </div>
    );

}

export default Home;