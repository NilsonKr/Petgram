import React from "react";

import Authenticate from "HOC/Authenticate";

const favorites = () => {
  return (
    <div>
      <h1>You are in your favorites section! </h1>
    </div>
  );
};

export default Authenticate(favorites);
