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
           <Link href='main'><AiOutlineHome size={25} style={{color:"white"}}/></Link> 
           <Link href='search' style={{color:"white"}}><BiSearch size={25}/></Link>
            <FaUsers size={30}/>
           <Link href='notify'  style={{color:"white"}}><div className={style.span}> 
                   <AiOutlineBell size={25}/>
                   <span>0</span>
              </div></Link>
           <Link href='mail'><AiOutlineMail size={25} style={{color:"white"}}/></Link> 
        </div>
    </>
  )
}

export default Footer
