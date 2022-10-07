import { render } from "@testing-library/react";
import * as React from "react";
import App2 from "./App2";

describe("App2", () => {
  it("will have all expected fields", () => {
    var component = render(<App2 />);

    var labels = component.getAllByText(/name/);
    expect(labels.length).toEqual(2);

    var firstNameInput = component.getByTestId("first-name-input");
    var lastNameInput = component.getByTestId("last-name-input");
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();

    var submitButton = component.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });
});
