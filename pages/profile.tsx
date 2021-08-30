import React, { useContext } from "react";
import { Context } from "../context/AuthContext";

import Authenticate from "HOC/Authenticate";

const profile = () => {
  const { logout } = useContext(Context);

  return (
    <div>
      <h1>You are on your Profile!!</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Authenticate(profile);
