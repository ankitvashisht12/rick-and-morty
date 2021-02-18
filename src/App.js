import React, { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
   <div className='container m-5 px-5'>
     <h1 className='text-center py-5'>Rick and Morty Search</h1>
     <input className='form-control text-center' type='text' value={searchTerm} placeholder='🔍 Search for a contact' onChange={e => setSearchTerm(e.target.value)}/>
   </div> 
  );
}

export default App;
