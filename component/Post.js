import React from 'react'
import style from '../styles/post.module.css'
import Image from 'next/image'
import {GoVerified} from "react-icons/go"
import {FaRegCommentDots, FaRetweet} from "react-icons/fa"
import {FcLike} from "react-icons/fc"
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
                <div className={style.like}>
                    <FaRegCommentDots size={20}/>
                    <FaRetweet size={25}/>
                    < FcLike size={20}/>
                </div>
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
                 <div className={style.like}>
                    <FaRegCommentDots size={20}/>
                    <FaRetweet size={25}/>
                    < FcLike size={20}/>
                </div>
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
                 <div className={style.like}>
                    <FaRegCommentDots size={20}/>
                    <FaRetweet size={25}/>
                    < FcLike size={20}/>
                </div>
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
                 <div className={style.like}>
                    <FaRegCommentDots size={20}/>
                    <FaRetweet size={25}/>
                    < FcLike size={20}/>
                </div>
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
                 <div className={style.like}>
                    <FaRegCommentDots size={20}/>
                    <FaRetweet size={25}/>
                    < FcLike size={20}/>
                </div>
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
                 <div className={style.like}>
                    <FaRegCommentDots size={20}/>
                    <FaRetweet size={25}/>
                    < FcLike size={20}/>
                </div>
            </div>


    </div>
  )
}

export default Post