import React from 'react'
import style from '../styles/post.module.css'
import Image from 'next/image'
import {GoVerified} from "react-icons/go"
function Post() {
  return (
    <div>
            <h1 style={{color:"white", margin:"30px"}}>Posts</h1>

            <div className={style.header}>
                 <Image
                   priority
                   src='/snik.png'
                   width={35}
                   height={35}
                   />
                   <div className={style.obs}>
                      <h5>JAGGO Sport <GoVerified size={15} style={{color:"skyblue"}}/></h5>
                      <p>What do you think about today's game Barca vs Bayern &#128293;</p>
                   </div>
              </div>
            
            <div className={style.lewa}>
                <Image
                priority
                src='/lewa.webp'
                width={350}
                height={200}
                />
            </div>

            <div className={style.header}>
                 <Image
                   priority
                   src='/snik.png'
                   width={35}
                   height={35}
                   />
                   <div className={style.obs}>
                      <h5>JAGGO Sport <GoVerified size={15} style={{color:"skyblue"}}/></h5>
                      <p>What do you think about today's game Barca vs Bayern &#128293;</p>
                   </div>
              </div>
            
            <div className={style.lewa}>
                <Image
                priority
                src='/lewa.webp'
                width={350}
                height={200}
                />
            </div>
            
            <div className={style.header}>
                 <Image
                   priority
                   src='/snik.png'
                   width={35}
                   height={35}
                   />
                   <div className={style.obs}>
                      <h5>JAGGO Sport <GoVerified size={15} style={{color:"skyblue"}}/></h5>
                      <p>What do you think about today's game Barca vs Bayern &#128293;</p>
                   </div>
              </div>
            
            <div className={style.lewa}>
                <Image
                priority
                src='/lewa.webp'
                width={350}
                height={200}
                />
            </div>

            <div className={style.header}>
                 <Image
                   priority
                   src='/snik.png'
                   width={35}
                   height={35}
                   />
                   <div className={style.obs}>
                      <h5>JAGGO Sport <GoVerified size={15} style={{color:"skyblue"}}/></h5>
                      <p>What do you think about today's game Barca vs Bayern &#128293;</p>
                   </div>
              </div>
            
            <div className={style.lewa}>
                <Image
                priority
                src='/lewa.webp'
                width={350}
                height={200}
                />
            </div>

            <div className={style.header}>
                 <Image
                   priority
                   src='/snik.png'
                   width={35}
                   height={35}
                   />
                   <div className={style.obs}>
                      <h5>JAGGO Sport <GoVerified size={15} style={{color:"skyblue"}}/></h5>
                      <p>What do you think about today's game Barca vs Bayern &#128293;</p>
                   </div>
              </div>
            
            <div className={style.lewa}>
                <Image
                priority
                src='/lewa.webp'
                width={350}
                height={200}
                />
            </div>

            <div className={style.header}>
                 <Image
                   priority
                   src='/snik.png'
                   width={35}
                   height={35}
                   />
                   <div className={style.obs}>
                      <h5>JAGGO Sport <GoVerified size={15} style={{color:"skyblue"}}/></h5>
                      <p>What do you think about today's game Barca vs Bayern &#128293;</p>
                   </div>
              </div>
            
            <div className={style.lewa}>
                <Image
                priority
                src='/lewa.webp'
                width={350}
                height={200}
                />
            </div>


    </div>
  )
}

export default Post