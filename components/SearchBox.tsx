import React, { ChangeEvent } from 'react';

type SearchBoxProps = {
  searchfield: string; 
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({searchfield, searchChange}: SearchBoxProps) => {
  return ( 
    <div className='pa2'>
      <input 
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        value={searchfield}
        onChange={searchChange}
      /> 
    </div>
  );
}

export default SearchBox;
