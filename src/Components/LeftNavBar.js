import React from 'react'
import { BiSolidBookHeart } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import premium from '../assets/premium.png';
import user from '../assets/user.png';

const LeftNavBar = () => {
  return (
    <div>
      <BiSolidBookHeart/>
      <IoIosNotificationsOutline/>
      <img src={premium}></img>
      <img src={user}></img>
    </div>
  )
}

export default LeftNavBar