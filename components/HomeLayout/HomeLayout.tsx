import React from "react";
import Link from "next/link";
import CategoriesList from "../categoriesList/CategoriesList";
import Logo from "../SVGS/Logo/Logo";

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
    </>
  );
};

export default HomeLayout;
