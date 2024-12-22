"use client"

import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="home-layout">
        <div>
          <h1>Online shopping simplified</h1>
          <p>
            Order your groceries from <em>SuperM</em> with our easy to use app, and get your
            products delivered straight to your doorstep.
          </p>

          <Link href="/products" className="btn btn-default">
            Start shopping
          </Link>
        </div>
        <Image
          src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg"
          width="350"
          height="240"
          className="rounded home-image"
          alt=""
          priority={true}
        />
      </div>
    </>
  )
}
