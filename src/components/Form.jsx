import { useState } from "react";
import Input from "./Input";
import Button from "react-bootstrap/Button";

const Form = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: note, archived: false, createdAt: timestamp },
    ]);
  };

  return (
    <div>
      <div className=' d-flex justify-content-center'>
        <form onSubmit={createNote} className='w-75'>
          <div className='d-flex justify-content-end'>
            <small>
              Jumlah karakter tersisa : <span className='biru fw-bold'>{50 - title.length}</span>
            </small>
          </div>
          <div className='mt-2'>
            <Input
              value={title}
              onChange={setTitle}
              type='text'
              placeholder='Judul'
              id='title'
              name='title'
              required
            />
          </div>
          <div className='mt-2'>
            <Input
              value={note}
              onChange={setNote}
              type='textarea'
              placeholder='Catatan'
              id='note'
              name='note'
              required
            />
          </div>
          <div className='d-flex justify-content-end'>
            <Button
              className='btn border-r bg_biru'
              type='submit'
              id='submit_form'
              name='submit_form'
            >
              Tambah
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
