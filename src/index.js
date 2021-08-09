import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
const books = [
    {
        id:1,
        img: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg",
        title: 'Attitude is everything',
        author: 'Jeff Keller'
    },
    {
        id:2,
        img: "https://m.media-amazon.com/images/I/81U3+6n3s1L._AC_UY327_QL65_.jpg",
        title: 'The Rudest Book Ever',
        author: 'Shwetabh Gangwar'
    },
    {
        id:3,
        img: "https://m.media-amazon.com/images/I/91JGwQlnu7L._AC_UY327_QL65_.jpg",
        title: 'The Book Theif',
        author: 'Markus Zusak'
    },
];

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book)=>{
                return (
                    <Book key={book.id} {...book}></Book>
                )
            })}
        </section>
    )
}

const Book = (props) => {
    const {img, title, author} = props;
    return <article className={'book'}>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
}

ReactDom.render(<BookList/>,document.getElementById('root'));
