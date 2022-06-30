import Card from "./Card";

const Section = ({ label, notes, setNotes }) => {
  return (
    <section className='w-75'>
      <h2 className='fw-bold'>{label}</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy
      </p>
      {notes.length === 0 ? (
        <p className='text-center red fw-bold'>Kosong</p>
      ) : (
        <div>
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Section;
