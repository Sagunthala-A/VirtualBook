import React from 'react'
import Search from './Search/Search.js';
import './NavBar.css';
import { Element } from 'react-scroll';

const NavBar= () => {
  return (
    <Element className='navbar' name='navbar'>
      <h1>Book Navigator</h1>
        <Search/>
    </Element>
  )
}

export default NavBar;