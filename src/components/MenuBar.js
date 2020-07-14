import React from 'react';
import {Link} from 'react-router-dom';

const MenuBar = ({title}) =>{
    console.log(title);
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <Link className="navbar-brand" to="/">Inicio</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
       <Link className="nav-link" to="/note/Add">Agregar Nota <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="note/edit">Editar</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/note/search">Buscar</Link>
      </li>
    </ul>
  </div>
  <h2>{title} </h2>
</nav>
        
    );
}

export default MenuBar;