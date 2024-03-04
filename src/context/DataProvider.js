import DataContext  from "./DataContext";
import React,{useState} from "react";

const DataProvider = ({children})=>{
    const [search,setSearch] = useState('');
    const [movieList,setMovieList] = useState([]);
    const [clickedBook,setClickedBook] = useState('');
    const [network , setNetwork] = useState('true')
    
 
    return <DataContext.Provider value={{
        search,setSearch,
        movieList,setMovieList,
        clickedBook,setClickedBook,
        network,setNetwork
    }}>
        {children}
    </DataContext.Provider>
}

export default DataProvider;