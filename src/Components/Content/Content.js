import React,{useContext,useState} from 'react'
import DataContext from '../../context/DataContext'
import './Content.css';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from 'react-scroll';


const Content = () => {
    const {movieList,setMovieList,clickedBook,setClickedBook} = useContext(DataContext)
    
    function handleBook(book){
        console.log('Books',book)
        setClickedBook(book);
    }
  return (
    <div className='contentContainer'>
        {
            clickedBook && (
            <div className='content__clickedBook'>
                <img src={clickedBook.volumeInfo.imageLinks.thumbnail}/>
                <div className='content__clickedBookDetails'>
                    <h1>{clickedBook.volumeInfo.title} <span style={{fontSize:"18px",color:"black",position:"absolute",right:"220px",marginTop:"15px"}}> - {clickedBook.volumeInfo.authors}</span></h1>
                    <button className='content__closeBtn' onClick={()=>{setClickedBook(false)}}>X</button>
                    {/* <span style={{fontSize:"18px",color:"black",marginTop:"15px"}}>{clickedBook.volumeInfo.authors}</span> */}
                    <p>{clickedBook.volumeInfo.description}</p>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginRight:"20px"}}>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",columnGap:"90px", color:"black",fontSize:"18px",fontWeight:"600"}}>
                            <p>Category: {clickedBook.volumeInfo.categories ? clickedBook.volumeInfo.categories :"Not found" }</p>
                            <p>Language: {clickedBook.volumeInfo.language}</p>
                            <p>Published on: {clickedBook.volumeInfo.publishedDate}</p>
                            <p>Page Count: {clickedBook.volumeInfo.pageCount}</p>
                        </div>
                        <div className='content__buttons'>
                            <a href={clickedBook.volumeInfo.previewLink} target="_blank"><button>Read Now</button></a>
                            <a href={clickedBook.volumeInfo.infoLink} target="_blank" ><button>More Info</button></a>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        <div className='image__container'>
            {
                movieList.map((book)=>(
                    <div onClick={()=>{handleBook(book)}} className="image-container" key={book.id}>
                        <img src={book.volumeInfo.imageLinks.thumbnail}/>
                    </div>
                ))
            }
            <Link 
                to='navbar'
                smooth='true'
                duration={700}
                className='content__topIcon'
                style={{}}
                ><FaArrowAltCircleUp /></Link>
        </div>
    </div>
  )
}


export default Content;