import React from 'react'
import style from '../styles/footer.module.css'
import {AiOutlineHome,AiOutlineMenu} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"
import {BsNewspaper,BsFillSunFill} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
function Footer() {
  return (
    <>
        <div className={style.container}>
            <AiOutlineHome size={30}/>
            <AiOutlineMenu size={30}/>
            <FaUsers size={30}/>
            <BsNewspaper size={30}/>
            {/* <FiSettings size={35}/> */}
            <BsFillSunFill size={30}/>
        </div>
    </>
  )
}

export default Footer