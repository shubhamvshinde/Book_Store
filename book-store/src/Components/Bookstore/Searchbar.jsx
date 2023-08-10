import React, { useState } from 'react'

const Searchbar = ({onSearch}) => {
    const [searchBook, setSearchBook] = useState('');

    const handleChange = (event) =>{
        const value = event.target.value;
        setSearchBook(value);
        onSearch(value);
    }
     
  return (
    <div className='searchbar'>
        <input 
            type='text'
            placeholder='Search Books ...'
            value={searchBook}
            onChange={handleChange}
        />

    </div>
  )
}

export default Searchbar;