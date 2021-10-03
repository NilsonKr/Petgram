import React from "react";
import { MockedProvider } from "@apollo/client/testing";

export const ApolloProviderMock: React.FC = ({ children }) => {
  return <MockedProvider mocks={[]}>{children}</MockedProvider>;
};
