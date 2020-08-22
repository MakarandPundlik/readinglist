import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);
    return ( 
        books.length ? (
        <div className="book-list">
            <ul>
                <li>{books.map(book => {
                    return(
                        <BookDetails book={book} key={book.id} />
                    )
                })}</li>
            </ul>
        </div>
        ) : (
            <div className="empty">Hello free time ! No books to read.</div>
        )
     );
}
 
export default BookList;