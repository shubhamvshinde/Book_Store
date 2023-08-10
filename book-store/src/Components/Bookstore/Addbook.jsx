import React, { useState } from 'react';

const AddBookForm = ({ addBook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    imageLink: '',
    country: '',
    language: '',
    date: '',
    page: '',
  });
  const [formError, setFormError] = useState('');

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log('handleSubmit called');
      console.log('formData:', formData);
  
      if (
        formData.title &&
        formData.author &&
        formData.year &&
        formData.imageLink &&
        formData.country &&
        formData.language &&
        formData.date &&
        formData.page
      ) {
        console.log('Form data is complete');
        await addBook(formData);
        console.log('addBook API call successful');
  
        toggleForm();
        setFormData({
          title: '',
          author: '',
          year: '',
          imageLink: '',
          country: '',
          language: '',
          date: '',
          page: '',
        });
        setFormError('');
      } else {
        console.log('Form data is incomplete');
        setFormError('All fields are mandatory');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setFormError('An error occurred while adding the book.');
    }
  };

  return (
    <div  >
      <button className='addbuttontoggle' onClick={toggleForm}>Click Here To Add Book</button>
      {isOpen && (
        <div>
          <form className='addbookform'>
          <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <label>Author:</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Year:</label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
              <label>ImageLink:</label>
              <input
                type="text"
                name="imageLink"
                value={formData.imageLink}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              <label>Language:</label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
              />
              
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <label>Page:</label>
              <input
                type="text"
                name="page"
                value={formData.page}
                onChange={handleChange}
              />
              
            </div>
            <button type="button" onClick={handleSubmit} className='addbuttontoggle'>
              Add Book
            </button>
          </form>
          {formError && <p>{formError}</p>}
        </div>
      )}
    </div>
  );
};

export default AddBookForm;
