"use clinet";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/Main">Main</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/features">Features</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;