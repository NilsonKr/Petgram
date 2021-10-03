import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import { ApolloProviderMock } from "../setup";
import { categoriesList } from "../data";

jest.mock("../../hooks/useIntersection", () => {
  return jest.fn(() => [false, null]);
});

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

describe("Home page view", () => {
  beforeEach(() => {
    render(
      <ApolloProviderMock>
        <Home categoriesData={categoriesList} />
      </ApolloProviderMock>
    );
  });

  test("Home page renders", () => {
    expect(screen.getByLabelText(/Petgram logo/i)).toBeInTheDocument();
  });
});
