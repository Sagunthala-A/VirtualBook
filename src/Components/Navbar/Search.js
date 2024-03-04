import React,{useState,useContext,useEffect} from 'react'
// import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import DataContext from '../../context/DataContext';


const Search = () => {
    const {search,setSearch,movieList,setMovieList,network,setNetwork} = useContext(DataContext);
    useEffect(async () =>{
            const response1 = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=20")
            const response2 = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes&maxResults=20")
            setMovieList([...response2.data.items, ...response1.data.items]);
            setNetwork(false);
    },[])

    async function handleSearch(e){
        e.preventDefault();
        try{
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=30`)
            // `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=11`
            setMovieList(response.data.items);
        }catch(err){
            console.log(err);
        }
    }

  return (
    <form className='search'>
        <div className='search-container'>
            <input
                type="search"
                placeholder="Search for the book you want... Sherlock Holmes, Harry Pot..."
                value= {search}
                onChange={(e)=>{setSearch(e.target.value);}}
            />
        </div>
        <button onClick={handleSearch}>Search</button>
    </form>
  )
}

export default Search;