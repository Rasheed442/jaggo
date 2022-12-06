import React from 'react'
import style from '../styles/search.module.css'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image'
import Footer from '../component/Footer'
function Search() {
  return (
    <div className={style.container}>
         <div className={style.header}>
         <Image
        priority
        src='/snik.png'
        width={35}
        height={35}
        />
         <div className={style.search}>
          <AiOutlineSearch size={25} style={{color:"white"}}/>
           <input type='text' placeholder='search messages'/>
        </div>
         <FiSettings size={30}/>
        </div>

        <h2 style={{marginLeft:"20px"}}>Trends for you</h2>
         
         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Richarlison</h3>
                <span>507k Tweets</span>
              </div>
              <p>...</p>
         </div>

         
         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Sadio Mane</h3>
                <span>50k Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Lewandoski</h3>
                <span>7k Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Neymar</h3>
                <span>340k Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Ronaldo</h3>
                <span>1M Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Messi</h3>
                <span>507k Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Modric</h3>
                <span>507k Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Rodrygo</h3>
                <span>42k Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Martinelli</h3>
                <span>507k Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Richarlison</h3>
                <span>507k Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Mount</h3>
                <span>507k Tweets</span>
              </div>
              <p>...</p>
         </div>

         <div className={style.main}>
              <div className={style.trends}>
                <span>Trending</span>
                <h3>Son</h3>
                <span>57k Tweets</span>
              </div>
              <p>...</p>
         </div>



        <Footer/>
    </div>
  )
}

export default Search