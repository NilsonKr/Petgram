import React from "react";
import Link from "next/link";

import { NotFound, NotFoundText } from "../styles/NotFound/NotFound";
import Logo from "@components/SVGS/Logo/Logo";

const Custom404 = () => {
  return (
    <NotFound>
      <Link href="/">
        <article>
          <Logo width={380} height={180} />
        </article>
      </Link>
      <NotFoundText> Page Not Found 404</NotFoundText>
      <p>Sorry we cannot find the page :(</p>
      <img src="/notFound.png" alt="Page Not Found" />
    </NotFound>
  );
};

export default Custom404;
