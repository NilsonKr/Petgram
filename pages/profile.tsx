import React from "react";

import Authenticate from "HOC/Authenticate";

const profile = () => {
  return (
    <div>
      <h1>You are on your Profile!!</h1>
    </div>
  );
};

export default Authenticate(profile);
