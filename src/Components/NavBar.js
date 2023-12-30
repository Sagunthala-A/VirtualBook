import React from 'react'
import Search from '../Components/Search'
import LeftNavBar from './LeftNavBar'
import Logo from './Logo.js'

const NavBar= () => {
  return (
    <nav className='navbar'>
      <Logo/>
      <Search
        
      />
      <LeftNavBar/>
    </nav>
  )
}

export default NavBar;