import React, { useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';

const NoteEdit = ({id, nameNote, dateNote, totalNote}) =>{
    const url = `https://cinta-roja-b42-proyecto.firebaseio.com/notes/${id}.json`
    let location = useLocation();

    const history = useHistory(); 
    const [error, setError] = useState('');

    const updateNote = (data)=>{
        
        console.log("Entra antes del axios")
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

       /*  <form>
         <div className="form-group " >
                <label htmlFor="title">Numero de Nota:</label>
            </div>
            <div className="form-group ">
                <label htmlFor="date">Fecha: </label>
                <input type="text" className="form-control" id="date" min='0' name="date" ></input>
            </div>
            
            <div className="form-group ">
                <label htmlFor="name">Cliente: </label>
                <input type="text" className="form-control" id="name" name="name"></input>
            </div>
            <div className="form-group ">
                <label htmlFor="total">Total: </label>
                <input type="number" className="form-control" id="total"  min='0' name="total"></input>
            </div>
    </form> */

        <form onSubmit={submitNote}>
            <div className="form-group " >
                <label htmlFor="title">Numero de Nota: {id} </label>
            </div>
            <div className="form-group ">
                <label htmlFor="date">Fecha: </label>
                <input type="text" className="form-control" id="date" min='0' name="date" defaultValue={dateNote}></input>
            </div>
            
            <div className="form-group ">
                <label htmlFor="name">Cliente: </label>
                <input type="text" className="form-control" id="name" name="name" defaultValue={nameNote} ></input>
            </div>
            <div className="form-group ">
                <label htmlFor="total">Total: </label>
                <input type="number" className="form-control" id="total"  min='0' name="total" defaultValue = {totalNote}></input>
            </div>
            {location.data
            ?
            <>
            <div>
                <button  className="btn btn-primary  "  onClick={deleteNote} >Eliminar Nota</button>
            </div>
            </>
            :
            <>
                <div>
                    <button type="submit" className="btn btn-primary ">Guardar Nota</button>
                </div>
            </>
            }
       
        
        
        </form>

    );

};

export default NoteEdit;