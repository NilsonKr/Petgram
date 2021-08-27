import React from "react";
import Link from "next/link";

import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { NavStyled } from "./navbarStyled";

const Navbar = () => {
  return (
    <NavStyled>
      <Link href="/">
        <article>
          <MdHome size="30px" />
        </article>
      </Link>
      <Link href="/favorites">
        <article>
          <MdFavoriteBorder size="30px" />
        </article>
      </Link>
      <Link href="/profile">
        <article>
          <MdPersonOutline size="30px" />
        </article>
      </Link>
    </NavStyled>
  );
};

export default Navbar;
