import React, { useState } from 'react';
import Characters from './components/Characters/Characters';
import useCharactersSearch from './customHooks/useCharactersSearch';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [pageNo, setPageNo] = useState(1);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    setPageNo(1)
  }

  const { loading, characters, hasMore, hasError } = useCharactersSearch(searchTerm, pageNo);

  return (
   <div className='container m-5 px-5 d-flex flex-column justify-content-center align-items-center'>
     <h1 className='my-4 fw-bold'>Rick and Morty Search</h1>
     <input 
      className='form-control text-center mb-4' 
      type='text' 
      value={searchTerm} 
      placeholder='🔍 Search for a contact' 
      onChange={e => searchHandler(e)}/>
     <Characters characters={characters} loading={loading}/> 
   </div> 
  );
}

export default App;
