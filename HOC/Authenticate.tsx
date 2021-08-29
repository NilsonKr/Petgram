import React, { useContext } from "react";
import { Context } from "../context/AuthContext";
import Link from "next/link";

import Logo from "@components/SVGS/Logo/Logo";
import Navbar from "@components/Navbar/Navbar";
import NotAuthenticated from "@components/NotAuthenticated/NotAuthenticated";

const Authenticate =
  (WrappedPage: React.FC): React.FC =>
  () => {
    const { isAuth } = useContext(Context);

    return (
      <>
        <Link href="/">
          <div>
            <Logo width={320} height={150} />
          </div>
        </Link>
        {isAuth ? <WrappedPage /> : <NotAuthenticated />}
        <Navbar />
      </>
    );
  };

export default Authenticate;
