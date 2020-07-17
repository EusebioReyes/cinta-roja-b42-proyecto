import React, {useState, useEffect} from 'react';
import BaseLayout from './../components/BaseLayout';
import Note from './../components/Note'
import axios from 'axios';


const Edit = () =>{
    const [notes, setNotes] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        getNotes();
    }, []);
    
    const getNotes = () => {
        axios.get('https://cinta-roja-b42-proyecto.firebaseio.com/notes.json')
        .then(({data, status}) => {
            if (data !== null){
                setNotes(data);
            }else{
                setError('No existe esa tarea');
            }
        }).catch(({error}) => {
            setError(error);
        });
    }

    const showNotes =() =>{
        return Object.keys(notes).map(note =>
            <Note
                key= {note}
                id = {note}
                name = {notes[note].name}
                date = {notes[note].date}
                total = {notes[note].total}
                isEdit = {false}
            >

            </Note>);
    }


    return(
        <BaseLayout title="Editar">
            <br></br>
            <br></br>

            <div className='d-flex flex-wrap'>
            {showNotes()}
            </div>
        </BaseLayout>
    );
}

export default Edit;