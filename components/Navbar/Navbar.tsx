import { useRouter } from "next/router";
import Link from "next/link";

import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { NavStyled } from "./navbarStyled";

const HomeRoutes = ["/", "/category/[id]", "/photo/[id]"];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <NavStyled>
      <Link href="/">
        <article className={HomeRoutes.includes(pathname) ? "selected" : ""}>
          <MdHome size="32px" />
        </article>
      </Link>
      <Link href="/favorites">
        <article className={pathname.includes("favorites") ? "selected" : ""}>
          <MdFavoriteBorder size="32px" />
        </article>
      </Link>
      <Link href="/profile">
        <article className={pathname.includes("profile") ? "selected" : ""}>
          <MdPersonOutline size="32px" />
        </article>
      </Link>
    </NavStyled>
  );
};

export default Navbar;
