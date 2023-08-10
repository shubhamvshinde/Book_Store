import React from 'react'

const Booklist = ({books, seabook}) => {
    // console.log("book", seabook)
    // console.log("book", books)
  return (
    <div className='booklist'>
        {!books.length > 0 ?
            <h1>Book Not Found</h1>
            :
            <table>
                <thead>
                    <tr className='table-row'>
                        <th>Sr.No</th>
                        <th>Book</th>
                        <th>Author</th>
                        <th>Country</th>
                        <th>Book Language</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                {!seabook
                    ? 
                    books.map((book,index) =>(
                    <tr className='table-row' key={book.title}>
                        <td>{index + 1}</td>
                        <td><img src={book.imageLink} alt={book.title} /><br/>
                            {book.title}
                        </td>
                        <td>Author : {book.author} <br />
                            Book Pages :{book.page} <br/>
                            Book Year : {book.year}
                        </td>
                        <td>
                            Country : {book.country}<br/>
                        </td>
                        <td>
                            <p>Book Language : {book.language}</p>
                            <p>Created Date : {book.date}</p>
                        </td>
                        <td>
                            <button>Edit</button>
                        </td>
                    </tr>
                    ))
                    :
                    seabook.map((book,index) =>(
                        <tr className='table-row' key={book.title}>
                            <td>{index + 1}</td>
                            <td><img src={book.imageLink} alt={book.title} /><br/>
                                {book.title}
                            </td>
                            <td>Author : {book.author} <br />
                                Book Pages :{book.page} <br/>
                                Book Year : {book.year}
                            </td>
                            <td>
                                Country : {book.country}<br/>
                                Book Language : {book.language}
                            </td>
                            <td>
                                <p>Book Link : {book.link}</p>
                            </td>
                            <td>
                                <button>Edit</button>
                            </td>
                        </tr>
                    ))

                }
                
                </tbody>
            </table>
        }
    </div>
  )
}

export default Booklist