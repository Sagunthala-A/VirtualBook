import React,{useState,useContext,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import DataContext from '../context/DataContext';


const Search = () => {
    const {search,setSearch,movieList,setMovieList} = useContext(DataContext);
    useEffect(async () =>{
            const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
            const response2 = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
            setMovieList([...response2.data.items, ...response.data.items]);
    },[])
    async function handleSearch(e){
        e.preventDefault();

        try{
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            setMovieList(response.data.items);
        }catch(err){
            console.log(err);
        }

    }

  return (
    <form className='search'>
        <div className='search-container'>
            <FaSearch
            className="search-icon"
            />
            <input
                type="search"
                placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
                value= {search}
                onChange={(e)=>{setSearch(e.target.value);}}

            />
        </div>
        <button onClick={handleSearch}>Search</button>
    </form>
  )
}

export default Search