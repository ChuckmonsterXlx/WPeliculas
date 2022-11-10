import React, { Component } from 'react';
import Nav from './Nav';

function App() {
  return (
    <div className="App">

      <Nav />
      
      <header id="head-nav">
        <div id="logo">
            <h1>WPeliculas</h1>
        </div>

        <nav id="menu">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Series TV</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Novedades más visatas</a></li>
                <li><a href="#">Mi lista</a></li>
            </ul>
        </nav>
    </header>

    

    <div className="clearfix"></div>

    {/* Contenido */}

    <section id="content">

        <div className="movies">

            <h3>Novedad en WPeliculas</h3>
            
            <div className="content-movie"><a href="#"><img src="img/DRAGONSRIDERSOFBERK-01-01-00WHORIZONTAL.jpg" /></a></div>
            
            <div className="content-movie"><a href="#"><img src="img/capitan-america-655x368.jpg" /></a></div>
            
            <div className="content-movie"><a href="#"><img src="img/SPIRITUNTAMEDWHORIZONTAL.jpg" /></a></div>

            

        </div>

    </section>

    </div>
  );
}

export default App;
