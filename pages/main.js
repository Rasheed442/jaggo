import React, { useState, useEffect } from 'react'
import style from '../styles/main.module.css'
import {BiFootball, } from 'react-icons/bi'
import {AiOutlineBell} from 'react-icons/ai'
import {FiSettings} from "react-icons/fi"
import Image from 'next/image'
import Footer from '../component/Footer'
import Aos from "aos";
import "aos/dist/aos.css";
import Post from '../component/Post'

function Main() {
   useEffect(() => {
      Aos.init({ duration: 500 });
    }, []);
  return (
    <div className={style.container}>
        <div className={style.header}>
              <div className={style.ball}>
                <BiFootball size={30}/>
                <h2>JG Sport</h2>
              </div>
              <div className={style.icon}>
                   <Image
                   priority
                   src='/snik.png'
                   width={30}
                   height={30}
                   />
                 <FiSettings size={29}/>  
              </div>
        </div>

 
        

   <div className={style.uefa}>
            <Image
            priority
            src='/uefa.jpeg'
            width={350}
            height={170}
            />
</div>

    <h1 style={{color:"white", margin:"30px"}}>Live Scores</h1>


<div className={style.ground}>

    <div className={style.back}>
         <div className={style.stage}>
            <p>Champions League group stage</p>
            <h5>Live</h5>
         </div>
         
         <div className={style.team}>
            <Image
            priority
            src='/baca.png'
            width={40}
            height={40}
            />
            <h3>VS</h3>
            <Image
            priority
            src='/baya.png'
            width={40}
            height={40}
            />
         </div>

         <div className={style.score}>
            <h4>Bayern Munich</h4>
            <h4>1</h4>
            <h4>Barcelona</h4>
            <h4>0</h4>
         </div>
    </div>


    <div className={style.back}>
         <div className={style.stage}>
            <p>Champions League group stage</p>
            <h5>Live</h5>
         </div>
         
         <div className={style.team}>
            <Image
            priority
            src='/baca.png'
            width={40}
            height={40}
            />
            <h3>VS</h3>
            <Image
            priority
            src='/baya.png'
            width={40}
            height={40}
            />
         </div>

         <div className={style.score}>
            <h4>Bayern Munich</h4>
            <h4>1</h4>
            <h4>Barcelona</h4>
            <h4>0</h4>
         </div>
    </div>

    <div className={style.back}>
         <div className={style.stage}>
            <p>Champions League group stage</p>
            <h5>Live</h5>
         </div>
         
         <div className={style.team}>
            <Image
            priority
            src='/baca.png'
            width={40}
            height={40}
            />
            <h3>VS</h3>
            <Image
            priority
            src='/baya.png'
            width={40}
            height={40}
            />
         </div>

         <div className={style.score}>
            <h4>Bayern Munich</h4>
            <h4>1</h4>
            <h4>Barcelona</h4>
            <h4>0</h4>
         </div>
    </div>

    <div className={style.back}>
         <div className={style.stage}>
            <p>Champions League group stage</p>
            <h5>Live</h5>
         </div>
         
         <div className={style.team}>
            <Image
            priority
            src='/baca.png'
            width={40}
            height={40}
            />
            <h3>VS</h3>
            <Image
            priority
            src='/baya.png'
            width={40}
            height={40}
            />
         </div>

         <div className={style.score}>
            <h4>Bayern Munich</h4>
            <h4>1</h4>
            <h4>Barcelona</h4>
            <h4>0</h4>
         </div>
    </div>
    <div className={style.back}>
         <div className={style.stage}>
            <p>Champions League group stage</p>
            <h5>Live</h5>
         </div>
         
         <div className={style.team}>
            <Image
            priority
            src='/baca.png'
            width={40}
            height={40}
            />
            <h3>VS</h3>
            <Image
            priority
            src='/baya.png'
            width={40}
            height={40}
            />
         </div>

         <div className={style.score}>
            <h4>Bayern Munich</h4>
            <h4>1</h4>
            <h4>Barcelona</h4>
            <h4>0</h4>
         </div>
    </div>
    <div className={style.back}>
         <div className={style.stage}>
            <p>Champions League group stage</p>
            <h5>Live</h5>
         </div>
         
         <div className={style.team}>
            <Image
            priority
            src='/baca.png'
            width={40}
            height={40}
            />
            <h3>VS</h3>
            <Image
            priority
            src='/baya.png'
            width={40}
            height={40}
            />
         </div>

         <div className={style.score}>
            <h4>Bayern Munich</h4>
            <h4>1</h4>
            <h4>Barcelona</h4>
            <h4>0</h4>
         </div>
    </div>



 </div>
 
<Post/>
<Footer/>
    </div>
  )
}

export default Main