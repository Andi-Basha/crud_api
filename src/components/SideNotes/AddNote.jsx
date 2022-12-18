import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import useNoteContext from '../../lib/hooks/useNoteContext';

export const AddNote = ({onHideForm}) => {
    const [note, setNote] = useState('');
    const [noteError, setNoteError] = useState(null);

    const {addNewNote} = useNoteContext();

    const handleInputChange = (event) => {
        setNote(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if(note === '') {
            setNoteError('Note cannot be empty :)');
            return;
        } 

        addNewNote({
          id: (Date.now()+'').slice(-10),
          creationTime: Date.now(),
          text: note
        });

        onHideForm();
        setNoteError(null);
    }
    
  return (
    <Form className='Form__Note p-3 m-2 mb-3' onSubmit={handleSubmit}>
        {noteError && (
            <div className='alert alert-danger' role='alert'>
            {noteError}
            </div>
        )}
      <Form.Group className="mb-3">
        <Form.Label>Add Note</Form.Label>
        <Form.Control type="text" placeholder="Enter Note" value={note} name="note" onChange={handleInputChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
