import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <Link href="/">SuperM</Link>
                <div>
                    <ul>
                        <li className="nav-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="nav-item nav-cart btn btn-accent">
                            <Link href="/cart">Cart (0)</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}