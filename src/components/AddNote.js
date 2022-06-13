import { useState } from 'react';

function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleChangeTitle = (event) => {
        setNoteTitle(event.target.value);
    };

    const handleSaveClick = () => {
        if(noteTitle.trim().length > 0 && noteText.trim().length) {
            handleAddNote(noteText, noteTitle);
            setNoteTitle('');
            setNoteText('');
        }
    };

    return (
    <div className="note new">
        <input
            placeholder={"Type title of note..."}
            value={noteTitle}
            onChange={handleChangeTitle}
        ></input>
        <textarea
            rows={8}
            cols={10}
            placeholder={"Type to add a note..."}
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
    );
};

export default AddNote;