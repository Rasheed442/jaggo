import React from 'react'
import Image from 'next/image'
import style from '../styles/mail.module.css'
import {FiSettings} from "react-icons/fi"
import {AiOutlineSearch} from "react-icons/ai"
function Mail() {
  return (
    <div className={style.container}>
        <div className={style.header}>
         <Image
        priority
        src='/snik.png'
        width={35}
        height={35}
        />
        <h3>messages</h3>
        <FiSettings size={25}/>
        </div>

        <div className={style.search}>
          <AiOutlineSearch size={25} style={{color:"white"}}/>
           <input type='text' placeholder='search direct message'/>
        </div>
    </div>
  )
}

export default Mail