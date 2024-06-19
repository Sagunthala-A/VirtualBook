import React,{useContext,useState} from 'react'
import DataContext from '../../context/DataContext'
import './Content.css';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from 'react-scroll';

const Content = () => {
    const {movieList,setMovieList,clickedBook,setClickedBook} = useContext(DataContext)
    
    function handleBook(book){
        // console.log("Book", book)
        setClickedBook(book);
    }
  return (
    <div className="contentContainer">
      {clickedBook && (
        <div className="content__clickedBook">
          <img src={clickedBook.volumeInfo.imageLinks.thumbnail} />
          <div className="content__clickedBookDetails">
            <div className="content__clickedBookHeading">
              <h1>{clickedBook.volumeInfo.title} </h1>
              <span> - {clickedBook.volumeInfo.authors}</span>
            </div>
            <button
              className="content__closeBtn"
              onClick={() => {
                setClickedBook("");
              }}
            >
              X
            </button>
            {/* <span style={{fontSize:"18px",color:"black",marginTop:"15px"}}>{clickedBook.volumeInfo.authors}</span> */}
            <p>{clickedBook.volumeInfo.description}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "20px",
              }}
            >
              <div className="content__additionalDetails">
                <p>
                  Category:{" "}
                  {clickedBook.volumeInfo.categories
                    ? clickedBook.volumeInfo.categories
                    : "Not found"}
                </p>
                <p>Language: {clickedBook.volumeInfo.language}</p>
                <p>Published on: {clickedBook.volumeInfo.publishedDate}</p>
                <p>Page Count: {clickedBook.volumeInfo.pageCount}</p>
              </div>
              <div className="content__buttons">
                <a href={clickedBook.volumeInfo.previewLink} target="_blank">
                  <button>Read Now</button>
                </a>
                <a href={clickedBook.volumeInfo.infoLink} target="_blank">
                  <button>More Info</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {!movieList ? (
        <p className="noBooks__found">
          Oops! We couldn't find any books. Try searching for something else!
        </p>
      ) : (
        <div className="image__container">
          {movieList &&
            movieList.map((book) => (
              <div
                onClick={() => {
                  handleBook(book);
                }}
                className="image-container"
                key={book.id}
              >
                {book.volumeInfo.imageLinks ? (
                  <img src={book.volumeInfo.imageLinks.thumbnail} />
                ) : (
                  <h3 style={{ color: "white" }}>BOOK NOT FOUND</h3>
                )}
              </div>
            ))}
          <Link
            to="navbar"
            smooth="true"
            duration={700}
            className="content__upArrow"
            style={{}}
          >
            <FaArrowAltCircleUp />
          </Link>
        </div>
      )}
    </div>
  );
}


export default Content;