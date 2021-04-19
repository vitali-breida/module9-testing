import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import AddMovieDialog from "../../../app/Components/AddMovieDialog/AddMovieDialog";

jest.mock("react-redux");

describe("AddMovieDialog", () => {
  it("should render components", () => {
    useSelector.mockImplementation(() => {
      return true;
    });

    const { getByRole } = render(<AddMovieDialog />);

    let element = getByRole("heading", { name: "ADD MOVIE" });
    expect(element).toBeDefined();

    element = getByRole("textbox", { name: "Title" });
    expect(element).toBeDefined();

    element = getByRole("textbox", { name: "Movie URL" });
    expect(element).toBeDefined();

    element = getByRole("textbox", { name: "Overview" });
    expect(element).toBeDefined();

    element = getByRole("textbox", { name: "Runtime" });
    expect(element).toBeDefined();

    element = getByRole("button", { name: "Reset" });
    expect(element).toBeDefined();

    element = getByRole("button", { name: "Submit" });
    expect(element).toBeDefined();
  });
});
