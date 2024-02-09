"use client";
import Link from "next/link";
import React from "react";
import Menu from "./menu_file";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            U-Buy
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
