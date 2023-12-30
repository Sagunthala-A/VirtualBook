import React,{useContext,useState} from 'react'
import DataContext from '../context/DataContext'

const Content = () => {
    const {movieList,setMovieList} = useContext(DataContext)
    const [clickedBook,setClickedBook] = useState('')
    
    function handleBook(book){
        console.log('Books',book)
        setClickedBook(book);
    }
  return (
    <div>
        {
            clickedBook && (<div >
                <img style={{ transform: "rotate(-5deg)"}} src={clickedBook.volumeInfo.imageLinks.thumbnail}/>
                <div  style={{
                position:"absolute",
                display:"inline-block",
                width:"70%",
                height:"200px",
                backgroundColor:"blue"}}>
                    <h3 style={{color:"white"}}>{clickedBook.volumeInfo.title}</h3>
                    <p>{clickedBook.volumeInfo.description}</p>
                    <a href={clickedBook.volumeInfo.previewLink} target="_blank"><button>Read Now</button></a>
                    <a href={clickedBook.volumeInfo.infoLink} target="_blank" ><button>More Info</button></a>
                </div>
            </div>)
        }
        <h3>More books... </h3>
        {
            movieList.map((book)=>(
                <div  onClick={()=>{handleBook(book)}} className="image-container" key={book.id} style={{display:"inline",gap:"10px"}}>
                    <img src={book.volumeInfo.imageLinks.thumbnail}/>
                </div>
            ))
        }
    </div>
  )
}

export default Content