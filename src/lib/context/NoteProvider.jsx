import React, { useEffect, useState } from 'react';

const LOCAL_STORAGE_NOTES_KEY = 'note-key';

const getNotesFromLocalStorage = () => {
    const notes = localStorage.getItem(LOCAL_STORAGE_NOTES_KEY);

    if(!notes) return [];

    return JSON.parse(notes);
}

export const NoteContext = React.createContext(null);

const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState(getNotesFromLocalStorage());
    
    useEffect(() => {
        if(notes) {
            localStorage.setItem(LOCAL_STORAGE_NOTES_KEY, JSON.stringify(notes))
        }
    }, [notes])

    const addNewNote = (note) => {
        console.log(notes)
        console.log(note)
        setNotes(prevNotes => [...prevNotes, note]);
    }

    const removeNote = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

    return (
        <NoteContext.Provider value={{notes, addNewNote, removeNote}}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteProvider;