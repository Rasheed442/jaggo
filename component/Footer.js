import React, { useState } from 'react'
import style from '../styles/footer.module.css'
import Link from 'next/link'
import {AiOutlineHome,AiOutlineMail, AiOutlineBell} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"
import {BsNewspaper,BsFillSunFill} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {FiSettings} from "react-icons/fi"
function Footer() {
  const [light, setLight] = useState(false)

 
  return (
    <>
        <div className={style.container}>
           <Link href='main'><AiOutlineHome size={30} style={{color:"white"}}/></Link> 
           <BiSearch size={30}/>
            <FaUsers size={30}/>
            <div className={style.span}> 
                   <AiOutlineBell size={30}/>
                   <span>0</span>
              </div>
           <Link href='mail'><AiOutlineMail size={30} style={{color:"white"}}/></Link> 
        </div>
    </>
  )
}

export default Footer
