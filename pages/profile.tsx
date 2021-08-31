import React, { useContext } from "react";
import { Context } from "../context/AuthContext";

import Authenticate from "HOC/Authenticate";

import {
  LogOutButton,
  ProfileContainer,
} from "../styles/Profile/profileStyled";

const profile = () => {
  const { logout } = useContext(Context);

  return (
    <ProfileContainer>
      <h1>You are on your Profile!!</h1>
      <LogOutButton onClick={logout}>Log Out</LogOutButton>
    </ProfileContainer>
  );
};

export default Authenticate(profile);
