import React, { useState } from 'react'
import style from '../styles/notify.module.css'
import {FiSettings} from "react-icons/fi"
import Image from 'next/image'
import Footer from '../component/Footer'
function Notify() {
    const [slide , setSlide] = useState(false)
    const [slide1 , setSlide1] = useState(false)
  return (
    <div className={style.container}>
         <div className={style.header}>
         <Image
        priority
        src='/snik.png'
        width={35}
        height={35}
        />
        <h3>Notifications</h3>
        <FiSettings size={25}/>
        </div>

        <div className={style.main}>
            <h3 onClick={()=> {setSlide(false), setSlide1(false)}} style={{color: slide ? "gray":"white"}}>All</h3>
            <h3 onClick={()=> {setSlide1(true), setSlide(true)}} style={{color: slide1 ? "white":"gray"}}>Mention</h3>
        </div>

        {slide ? "":<div className={style.all}>
            <h3>You Don&apos;t have any notifications yet !</h3>
        </div>}

        {slide1 ? <div className={style.all}>
            <h3>You Don&apos; have any mentions Yet also!</h3>
        </div>:""}
  <Footer/>
    </div>
  )
}

export default Notify