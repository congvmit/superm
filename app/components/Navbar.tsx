"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { cartCountSelector } from "@/store/cart";
import { ICartState } from "@/types/Cart";

export default function Navbar() {
  const cart = useSelector((state: { cart: ICartState }) => state.cart);
  const cartCount = cartCountSelector(cart);

  const pathname = usePathname();
  return (
    <nav className="navbar">
      <Link href="/" className="nav-brand">
        SuperM
      </Link>
      <div>
        <ul>
          <li className="nav-item">
            <Link href="/" className={pathname == "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/products"
              className={pathname == "/products" ? "active" : ""}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/about"
              className={pathname == "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link href="/cart" className="nav-item nav-cart btn btn-accent">
              Cart ({cartCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
