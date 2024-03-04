import React,{useContext,useState} from 'react'
import DataContext from './context/DataContext'
import './App.css'

import Content from './Components/Content/Content'
import NavBar from './Components/Navbar/NavBar'

const App = () => {
   const {movieList,network,setNetwork} = useContext(DataContext)
  return (
    <div className='app'>
        <NavBar/>
        
                {
            network && (
                <h1>
                    Loading books list...
                </h1>
            )
        }
        <Content />
    </div>
  )
}

export default App;