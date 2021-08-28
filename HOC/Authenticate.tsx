import React from "react";
import Link from "next/link";

import Logo from "@components/SVGS/Logo/Logo";
import Navbar from "@components/Navbar/Navbar";
import NotAuthenticated from "@components/NotAuthenticated/NotAuthenticated";

const Authenticate = (WrappedPage: React.FC) => {
  const isAuthenticate = false;

  return () => (
    <>
      <Link href="/">
        <div>
          <Logo width={320} height={150} />
        </div>
      </Link>
      {isAuthenticate ? <WrappedPage /> : <NotAuthenticated />}
      <Navbar />
    </>
  );
};

export default Authenticate;
