import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import BaseLayout from './../components/BaseLayout';
import axios from 'axios';
import NoteEdit from '../components/NoteEdit';


const NoteView = () =>{
    const {id} = useParams()
    const [note, setNote] = useState({});
    const [eror, setError] = useState('');

    useEffect(() => {
        getNote();
    }, []);
    const getNote = () =>{
        axios.get(`https://cinta-roja-b42-proyecto.firebaseio.com/notes/${id}.json`)
        .then(({data, status}) => {
            if (data !== null){
                setNote(data);
            }else{
                setError('No existe la nota');
            }
        })
        .catch(({response}) => {
            setError(response);
        });

    }
    return(


        <BaseLayout className="container mh-100" title="Nota">
            <div className='d-flex justify-content-center'>
              <NoteEdit
              id = {id}
              nameNote = {note.name}
              dateNote = {note.date}
              totalNote = {note.total}
               />
         
            </div>
        </BaseLayout>
    );
}

export default NoteView;