'use client'

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <p>Online shopping simplified</p>
        <p>Order your groceries from SuperM with our easy to use app, and get your products delivered straight to your doorstep.</p>
        <Link href={"/products"}
        >Start shopping</Link>
      </div>
      <Image
        src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg"
        width="350"
        height="240"
        className="rounded home-image"
        alt=""
      />
    </>
  );
}
