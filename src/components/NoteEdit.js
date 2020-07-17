import React, { useState, useEffect, useParameters } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';

const NoteEdit = ({id, nameNote, dateNote, totalNote}) =>{
    const url = `https://cinta-roja-b42-proyecto.firebaseio.com/notes/${id}.json`
    let location = useLocation();
    console.log('locacion');
    console.log(location);

    const history = useHistory();

    const [error, setError] = useState('');

    const updateNote = (data)=>{
        
        console.log("ENtra antes del axios")
        axios.patch(url, data)
        .then((data)=>{
            console.log('exito')
        })
        .catch((e)=>{
            console.log(e +"Eorro");
        });
    }
    const deleteNote=()=>{
        axios.delete(url)
        .then(()=>{
            history.push('/')
        })
        .catch(({response})=>{
            alert(response);
            history.push('/')
        });
    }

    const submitNote =(event) =>{
        event.preventDefault();
        const noteData =new FormData(event.currentTarget);

        let data= {
            name: noteData.get("name"),
            date: noteData.get("date"),
            total: noteData.get("total"),
        };
        console.log(noteData);
        updateNote(data);


       
    }



    return( 

        <form onSubmit={submitNote}>
            <div className="form-group " >
                <label htmlFor="title">Numero de Nota: {id} </label>
            </div>
            <div className="form-group col-sm-2 col-form-label">
                <label htmlFor="date">Fecha: </label>
                <input type="text" className="form-control" id="date" min='0' name="date" defaultValue={dateNote}></input>
            </div>
            
            <div className="form-group col-sm-2 col-form-label">
                <label htmlFor="name">Cliente: </label>
                <input type="text" className="form-control" id="name" name="name" defaultValue={nameNote} ></input>
            </div>
            <div className="form-group col-sm-2 col-form-label">
                <label htmlFor="total">Total: </label>
                <input type="number" className="form-control" id="total"  min='0' name="total" defaultValue = {totalNote}></input>
            </div>
            {location.data
            ?
            <>
            <div className="form-group col-sm-2 col-form-label">
                <button  className="btn btn-primary "  onClick={deleteNote} >Eliminar Nota</button>
            </div>
            </>
            :
            <>
            <div className="form-group col-sm-2 col-form-label">
                <button type="submit" className="btn btn-primary">Guardar Nota</button>
            </div>
            </>
            }
       
        
        
        </form>

    );

};

export default NoteEdit;