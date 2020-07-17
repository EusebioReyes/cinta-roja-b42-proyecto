import React from 'react';
import { Link} from 'react-router-dom';

const Note = ({id,name, date, total}) =>{

    return( 
    <div className="card" style={{width: '18rem'}}>
        <div className="card-header">
            Numero de Nota: {id}
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Fecha: {date} </li>
            <li className="list-group-item">Cliente: {name} </li>
             <li className="list-group-item">Total: {total} </li>
             <li className="list-group-item">
                <div  className="btn-group">
                    <Link  to={ {pathname:`/note/${id}`, data:false}}><button className='btn btn-info' style={{marginLeft: 10}}>Editar</button></Link>
                    <Link  to={{pathname:`/note/${id}`, data:true}}><button className='btn btn-info' >Ir al detalle</button></Link>

                </div>
                 </li>
             
        </ul>
    </div>

        

    );

};

export default Note;