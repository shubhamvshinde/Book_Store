import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Dropdown = ({ onSearch }) => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/books')
      .then(response => {
        setData(response.data);
        // console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


    const [selectCategory, setSelectedCategory] = useState('');
    const [selectBook, setSelectBook] = useState('');


    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setSelectBook('');
    }

    const handleBookChange = (event) => {
        const book = event.target.value;
        setSelectBook(book)
        onSearch(book)
    }

    const lang = data.map((lang, index) => (
        lang.language
    ))
    // console.log("lang",lang)
    const uniquecategory = Array.from(new Set(lang));

    const categaryBooks = data.filter(book => book.language === selectCategory);
    return (
        <>
            <div className='dropdown'>
                <div className="dropbox-1">
                    <label>
                        Select Book Category :
                        <select value={selectCategory} onChange={handleCategoryChange}>
                            <option defaultChecked value={''}>Select Language</option>
                            {!uniquecategory.length > 0
                                ?
                                <option>Books Not Available</option>
                                :

                                uniquecategory.map((category, index) => (
                                    <option
                                        key={index}
                                        value={category}
                                        
                                    >
                                        {category}
                                    </option>

                                ))
                            }
                        </select>
                    </label>
                </div>
                <div className="dropbox-2">
                    <label>Select a book from {selectCategory} :
                        <select value={selectBook} onChange={handleBookChange}>
                            <option value={''}>Please Select Category</option>
                            {categaryBooks.map((book, index) => (
                                book.language === selectCategory && (
                                    <option key={index} value={book.title} >
                                        {book.title}
                                    </option>
                                )
                            ))}
                        </select>
                    </label>
                </div>
            </div>

        </>
    )
}

export default Dropdown