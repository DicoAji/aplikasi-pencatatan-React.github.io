import { useState, useEffect } from "react";
import { Form, Navbar, Section, Search } from "./components";
import { getInitialData } from "./utils";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());
  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);
  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <Container className='container'>
      <Navbar />
      <div className=' pt-5 pb-5 row'>
        <div className='col-lg-6 col-12'>
          <div className='d-flex '>
            <Search
              className='d-flex w-100 outline-none '
              search={query}
              updateQuery={setQuery}
              updateNotes={setNotes}
            />
          </div>
        </div>
        <div className='col-lg-6 col-12 mt-3'>
          <Form updateNotes={setNotes} />
        </div>
      </div>

      <main className='bt'>
        <div className='row mt-5'>
          <div className='col-lg-6 col-12 '>
            <Section label='Catatan Aktif' notes={activeNotes} setNotes={setNotes} />
          </div>
          <div className='col-lg-6 col-12'>
            <Section label='Arsip' notes={archivedNotes} setNotes={setNotes} />
          </div>
        </div>
      </main>
    </Container>
  );
}

export default App;
