import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black/[.5] p-4 sticky top-0 drop-shadow-xl z-10 flex text-xl">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <Link
          href="/"
          className="text-zinc-100 no-underline hover:text-zinc-100 "
        >
          Tech Blogs
        </Link>
      </div>
      <div className="prose prose-xl mx-auto flex justify-end items-centerflex-col sm:flex-row gap-5 text-zinc-100">
        <img src="./images/moonIcon.png" alt="" />
        <Link href="/" className="text-zinc no-underline hover:text-zinc-200">
          Home
        </Link>
        <Link
          href="/category"
          className="text-zinc no-underline hover:text-zinc-200"
        >
          Category
        </Link>
        <Link
          href="/about"
          className="text-zinc no-underline hover:text-zinc-200"
        >
          About
        </Link>
        <Link
          href="/login"
          className="text-zinc no-underline hover:text-zinc-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
