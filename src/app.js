import './app.css';
import { useState, useEffect, useMemo } from 'react';
import AccountOverview from './account-overview';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Login from '../src/components/Login'

function App() {
  const [logged, setLogged] = useState(sessionStorage.getItem("logged"));
  const [session, setSession] = useState(localStorage.getItem("session"));

  const checkLogged = () => {
    if(session) {
      sessionStorage.setItem("logged", session);
      setLogged(session);
    }

    if(logged) {
      saveSession(logged, session);
    }
  }

  function saveSession(data, saveSession) {
    if(saveSession) {
      localStorage.setItem("session", data);
      setSession(localStorage.getItem("session"));
    }

    sessionStorage.setItem("logged", data);
  }
  
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem(session));
    if(user !== null){
      const savedNotes = user.notes;
      if(savedNotes) setNotes(savedNotes);
    }
  }, [session])

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem(session));
    if(user !== null){
      user.notes = notes;
      localStorage.setItem(session, JSON.stringify(user));
    } 
  }, [notes,session])

  const addNote = (text, title) => {
    let index = notes != null && notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
    const date = new Date();
    const newNote = {
      id: index,
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const logout = () => {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    setLogged(null);
  }

  const render = useMemo(() => {
    return (
      <>
        {
          !logged ? <Login checkLogged={checkLogged}/>
          :
          <div className="App">
            <AccountOverview data={JSON.parse(localStorage.getItem(session))}/>
            <div className="container">
              <Header logout={logout}/>
              <Search handleSearchNote={setSearchText}/>
              <NotesList 
                notes={notes.filter((note) => 
                  note.text.toLowerCase().includes(searchText)
                )} 
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
              />
            </div>
          </div>
        }
      </>
    );
  }, [logged,notes,session,searchText]);
  
  return (
    <>
      {render}
    </>
  );
}

export default App;
