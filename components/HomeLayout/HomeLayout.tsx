import React from "react";
import Link from "next/link";

import Logo from "../SVGS/Logo/Logo";
import CategoriesList from "../categoriesList/CategoriesList";
import Navbar from "@components/Navbar/Navbar";

type Props = { data: any[] };

const HomeLayout: React.FC<Props> = ({ children, data }) => {
  return (
    <>
      <Link href="/">
        <section>
          <Logo width={320} height={150} />
        </section>
      </Link>
      <CategoriesList data={data} />
      {children}
      <Navbar />
    </>
  );
};

export default HomeLayout;
