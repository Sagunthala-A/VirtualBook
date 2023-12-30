import DataContext  from "./DataContext";
import React,{useState} from "react";

const DataProvider = ({children})=>{
    const [search,setSearch] = useState('');
    const [movieList,setMovieList] = useState([]);
    
 
    return <DataContext.Provider value={{
        search,setSearch,
        movieList,setMovieList
    }}>
        {children}
    </DataContext.Provider>
}

export default DataProvider;