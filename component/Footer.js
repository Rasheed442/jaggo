import React from 'react'
import style from '../styles/footer.module.css'
import {AiOutlineHome,AiOutlineMenu} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"
import {BsNewspaper} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
function Footer() {
  return (
    <>
        <div className={style.container}>
           <div className={style.icon}>
            <AiOutlineHome size={35}/>
            <AiOutlineMenu size={35}/>
            <FaUsers size={35}/>
            <BsNewspaper size={35}/>
            <FiSettings size={35}/>
            </div>  
        </div>
    </>
  )
}

export default Footer