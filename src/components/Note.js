import { MdDeleteForever } from 'react-icons/md';

function Note({id, title, text, date, handleDeleteNote}) {
    return (
    <div className="note">
        <div className="note-header">
            <h4 className="note-title">{title}</h4>
            <span>{text}</span>
        </div>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever 
                onClick={() => handleDeleteNote(id)} 
                className="delete-icon" 
                size="1.5em"
            />
        </div>
    </div>
    );
};

export default Note;