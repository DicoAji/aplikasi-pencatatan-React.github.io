import { showFormattedDate } from "../utils";
import Button from "./Button";

const Card = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNotes = (item) => action((notes) => notes.filter((note) => note.id !== item));
  const toggler = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    );
  };

  return (
    <div className=' border-r mb-3 p-3'>
      <article id={id}>
        <header>
          <h4>{title}</h4>
          <small className='grey'>{showFormattedDate(createdAt)}</small>
          <p>{body}</p>
        </header>
        <footer>
          <Button
            eventHandler={() => deleteNotes(id)}
            label={<i className='bi bi-trash-fill'></i>}
          />
          <Button
            eventHandler={() => toggler(id)}
            label={
              archived ? (
                <i className='bi bi-arrow-left'></i>
              ) : (
                <i className='bi bi-file-earmark-zip'></i>
              )
            }
          />
        </footer>
      </article>
    </div>
  );
};

export default Card;
