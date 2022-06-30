import Input from "./Input";
import React from "react";
import Personal from "../img/personal_notes.png";

const Search = ({ updateQuery }) => {
  return (
    <div className='border-0'>
      <img src={Personal} alt='Personal picture' style={{ width: "90%" }} />
      <p className='mt-4'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>

      <div className='w-75'>
        <Input
          className='w-100 outline-none'
          onChange={updateQuery}
          type='search'
          id='search_note'
          name='search_note'
          placeholder='Pencarian...'
        />
      </div>
    </div>
  );
};

export default Search;
