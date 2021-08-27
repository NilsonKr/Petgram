import React from "react";
import Link from "next/link";

import Logo from "../SVGS/Logo/Logo";
import CategoriesList from "../categoriesList/CategoriesList";
import Navbar from "@components/Navbar/Navbar";

const HomeLayout: React.FC = ({ children }) => {
  return (
    <>
      <Link href="/">
        <section>
          <Logo width={320} height={150} />
        </section>
      </Link>
      <CategoriesList />
      {children}
      <Navbar />
    </>
  );
};

export default HomeLayout;
