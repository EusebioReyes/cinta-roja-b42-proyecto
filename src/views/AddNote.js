import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import BaseLayout from './../components/BaseLayout';
import axios from 'axios';

const AddNote = () =>{
    
    const history = useHistory();
    const [note, setNote] = useState({
        name: "",
        date: 0,
        total: 0,
    });

    const handleChange =(event) =>{

        switch(event.target.id){
            case 'name':
                setNote({
                    ...note,
                    name: event.target.value,
                });
                break;
            case 'date':
                setNote({
                    ...note,
                    date: parseInt(event.target.value),
                });
                break;     
            case 'total':
                setNote({
                       ...note,
                    total: parseInt(event.target.value),
                });
                break;      

        }

        
    }

    const sendNote = () =>{
        if(
            note.name.length > 0 &&
            note.date > 0 &&
            note.total > 0 
        ){
             axios.post('https://cinta-roja-b42-proyecto.firebaseio.com/notes.json', note)
             .then((data) =>{
                const name = data.data.name;
                 console.log(name);
                 history.push(`/`);
                 //console.log(JSON.stringify(name).length);


             })
             .catch(()=>{
                 //si sigues desarrollando el proyecto, si esta en tus manos reperarlo
                 alert('Has llenado de forma incorrecta un campo');
             });
          }else{
            alert('no has llenado tomdos los campos');
        }
     }

    return(
        <BaseLayout title="Agregar">
            <br></br>
            <br></br>

             <div>
                <div className="form-group row ">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-3">
                     <input type="text" placeholder="Nombre del cliente" className="form-control" id="name" value={note.name} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Fecha</label>
                    <div className="col-sm-3">
                     <input type="number" placeholder="Fecha de la nota" className="form-control" id="date" value={note.date} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="total" className="col-sm-2 col-form-label">Total</label>
                    <div className="col-sm-2">
                     <input type="number" placeholder="Total de la nota" className="form-control" id="total" value={note.total} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={sendNote}>Aceptar</button>
                    </div>
                </div>
             </div>

            
        </BaseLayout>
    );
}

export default AddNote;