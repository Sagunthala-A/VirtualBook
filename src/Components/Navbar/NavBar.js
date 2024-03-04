import React from 'react'
import Search from './Search.js';
import './NavBar.css';
import { Element } from 'react-scroll';

const NavBar= () => {
  return (
    <Element className='navbar' name='navbar'>
      <h1>Book Finder</h1>
        <Search/>
    </Element>
  )
}

export default NavBar;