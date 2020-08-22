import React, { useState,createContext } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
       /* {title:'Three Mistakes of My Life', id : Math.floor(Math.random()*100), author:'Chetan Bhagat'},
        {title:'Two States', id : Math.floor(Math.random()*100), author:'Chetan Bhagat' } */
    ])
 const  addBook = (title, author) => {
     setBooks([...books,{title,author,id:Math.floor(Math.random()*100)}]);
 }

 const removeBook = (id) =>{
     setBooks(books.filter(book=> book.id !== id))
 }
    return ( 
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;