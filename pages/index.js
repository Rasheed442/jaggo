import React, { useState, useEffect } from "react";
import style from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import Axios from "axios"
import ClipLoader from "react-spinners/ClipLoader";
import "aos/dist/aos.css";
function Index() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  //  forms slide
  const [slide, setSlide] = useState(true);
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);

  // input states
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
// React Spinner states
const [loading, setLoading] = useState(false)

const details = {username, email, password}

   async function handler(e){
      e.preventDefault();
      setLoading(true)
           const response = await fetch ("https://x8ki-letl-twmt.n7.xano.io/api:O8cBFVK1/authentication", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(details)
           })
           const server =  await response.json();
           console.log(server)       
           setLoading(false)
           window.location='main'

     }
 

    //  function login(e){
    //   const user = server.find(user => user.email = req.body.email)
    //   if(user == null){
    //       return res.status(400).send("cannot find user")
    //   }try{
    //       if(compare(req.body.password, user.password)){
    //           res.send("success")
    //       }else{
    //           res.send("not allowed")
    //       }
    //   }catch{
    //       res.status(500).send(user)
    //   }
       
    //  }
   

  return (
    <div className={style.container}>

      <video autoPlay loop muted playsInline>
        <source src="/ball.mp4" />
      </video>
                   <div className={style.header}>
                     <h1 >JG</h1>
                     <h1></h1>
                  </div>

      {slide ? (
        <div className={style.main}>
          <h1>
            JG <br />
            Sports
          </h1>
          <p>
            Get Live Football Scores
            <br /> and Real-Time Football
            <br /> Results with JAGGO
            <br />
            SCORES!.
          </p>
          <button
            onClick={() => {
              setSlide1(true), setSlide(false);
            }}
          >
            Get Started!
          </button>
        </div>
      ) : (
        ""
      )}


      {slide1 ? (
        <div className={style.main} data-aos="zoom-in">
          <h1>JG </h1>
          <p>Log In</p>
          <div className={style.log}>
            <input type="email" placeholder="Email:" />
            <input type="Password" placeholder="Password:" />
            <button >Sign In</button>
            <div className={style.google}>
              <Image src="/google.png" priority width={20} height={20} alt=''/>
              <p>Sign In With Google</p>
            </div>
            <p>
              New to JG Sport{" "}
              <Link
                href=""
                onClick={() => {
                  setSlide1(false), setSlide(false), setSlide2(true);
                }}
              >
                <p>Sign up</p>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}



      {slide2 ? (
        <div className={style.main} data-aos="zoom-in">
          <h1>JG </h1>
          <p>Sign Up</p>
          <div className={style.log}>
            <input
              type="text"
              placeholder="Username:"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email:"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="Password"
              placeholder="Password:"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handler}>{loading ?  <ClipLoader color={"white"} loading={loading}  size={20}/>: "Sign Up"}</button>
            <p>
              Already Have an Account{" "}
              <Link
                href=""
                onClick={() => {
                  setSlide1(true), setSlide2(false);
                }}
              >
                <p>Sign In</p>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}


    </div>
  );
}

export default Index;

// export async function getServerSideProps(){
//   const response = await fetch("https://hshhshhshshshshs")

//   const data = response.json()

//   return {
//     props : {
//       data
//     }
//   }
// }
