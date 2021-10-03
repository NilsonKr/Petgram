import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import { ApolloProviderMock } from "../setup";
import { categoriesList } from "../data";

jest.mock("../../hooks/useIntersection", () => {
  return jest.fn(() => [false, null]);
});

describe("Categories list component", () => {
  beforeEach(() => {
    render(
      <ApolloProviderMock>
        <CategoriesList data={categoriesList.categories} />
      </ApolloProviderMock>
    );
  });

  test("Categories renders", () => {
    expect(screen.getByLabelText(/Categories list/i)).toBeInTheDocument();
    expect(screen.getAllByLabelText(/Category item/i).length).toBe(6);
  });
});
