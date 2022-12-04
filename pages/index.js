import React, { useState, useEffect} from 'react'
import style from '../styles/Home.module.css'
import Link from 'next/link'
import Image from "next/image"
import Aos from "aos";
import "aos/dist/aos.css";
function Index() {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [slide , setSlide] = useState(true)
  const [slide1 , setSlide1] = useState(false)
  const [slide2 , setSlide2] = useState(false)
  return (
 <div className={style.container}>

             <video autoPlay loop muted playsInline>
               <source src='/ball.mp4'/>
             </video>
  <h1 style={{margin:"20px", fontSize:"35px"}}>JG</h1>
        {slide ? <div className={style.main}>
             <h1>JG <br/>Sports</h1>
             <p>Get Live Football Scores<br/> and Real-Time Football<br/> Results
              with JAGGO<br/>SCORES!.
             </p>
             <button onClick={()=> {setSlide1(true),setSlide(false)}}>Get Started!</button>
        </div>:""}

       {slide1 ?<div className={style.main} data-aos='zoom-in'>
             <h1>JG </h1>
             <p>Log In</p>
          <div className={style.log}>
            <input type='email' placeholder='Email'/>
            <input type='Password' placeholder='Password'/>
            <button>Sign In</button>
            <div className={style.google}>
              <Image
              src='/google.png'
              priority
              width={20}
              height={20}
              />
              <p>Sign In With Google</p>
            </div>
            <p>New to JG Sport <Link href='' onClick={()=> {setSlide1(false), setSlide(false),setSlide2(true)}}><p>Sign up</p></Link></p>
          </div>
        </div>:""}

      {slide2 ?<div className={style.main} data-aos='zoom-in'>
             <h1>JG </h1>
             <p>Sign Up</p>
          <div className={style.log}>
            <input type='text' placeholder='Username'/>
            <input type='email' placeholder='Email'/>
            <input type='text' placeholder='Phone Number'/>
            <input type='Password' placeholder='Password'/>
            <input type='Password' placeholder='Confirm Password'/>
            <button>Sign Up</button>
            <p>Already Have an Account <Link href='' onClick={()=>{setSlide1(true), setSlide2(false)}}><p>Sign In</p></Link></p>
          </div>
        </div>:""}
           
</div>


  )
}

export default Index






























































































// export async function getServerSideProps(){
//   const response = await fetch("https://hshhshhshshshshs")
  
//   const data = response.json()

//   return {
//     props : {
//       data
//     }
//   }
// }