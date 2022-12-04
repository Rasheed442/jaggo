import React, { useState } from "react";
import style from "../styles/cart.module.css";
import { BsCartFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
function Cart() {
  const [add, setAdd] = useState(0);
  const [open, setOpen] = useState("jj")

  function handle() {
    setAdd(add + 1);
  }
 
  return (
    <div>
      <div className={style.header}>
        <h1>Weather</h1>
        <div className={style.cart}>
          <Link href="book">
            <BsCartFill size={30} style={{ color: "black" }} />
            <span>{add}</span>
          </Link>
        </div>
      </div>

      <div className={style.grid}>
        <div>
          <Image priority src="/food2.jpeg" height={200} width={200} />
          <h3>Fried Rice and Chicken</h3>
          <button onClick={handle} handle={setOpen}>
            Add to cart
          </button>
        </div>
        <div>
          <Image priority src="/weather.png" height={200} width={200} />
          <h3>cgffhbjjhvh</h3>
          <button onClick={handle}>Add to cart</button>
        </div>
        <div>
          <Image priority src="/food1.webp" height={200} width={200} />
          <h3>Fried Rice and Chicken</h3>
          <button onClick={handle}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
