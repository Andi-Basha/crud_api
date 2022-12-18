import { useContext } from 'react';

import { NoteContext } from '../context/NoteProvider';

const useNoteContext = () => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error("useNotificationContext must be used within an NoteProvider");
    }

    return context;
};

export default useNoteContext;