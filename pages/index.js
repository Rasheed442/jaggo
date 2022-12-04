import React, { useState } from 'react'
import style from '../styles/Home.module.css'

function Index() {
  return (
 <div className={style.container}>

        <div className={style.header}>
             <video autoPlay loop muted playsInline>
               <source src='/ball.mp4'/>
             </video>
        </div>
  <h1 style={{margin:"20px", fontSize:"35px"}}>JG</h1>
         <div className={style.main}>
             <h1>JG <br/>Sports</h1>
             <p>Get Live Football Scores<br/> and Real-Time Football<br/> Results
              with JAGGO<br/>SCORES!.
             </p>
             <button>Get Started!</button>
        </div>
           
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