import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ContactUsForm } from "./ContactUsForm";

describe("ContactUsForm", () => {
  it("will display an error if all fields except the email are submitted", () => {
    var component = render(<ContactUsForm />);

    var select = component.getByTestId("department-select");
    fireEvent.change(select, { target: { value: "sales" } });
    var textarea = component.getByTestId("question-textarea");
    fireEvent.change(textarea, { target: { value: "my question" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
    expect(component.getByTestId("error-header")).toBeInTheDocument();
  });

  it("will display an error if all fields except the department are submitted", () => {
    var component = render(<ContactUsForm />);

    var input = component.getByTestId("email-input");
    fireEvent.change(input, { target: { value: "myEmail@udacity.com" } });
    var textarea = component.getByTestId("question-textarea");
    fireEvent.change(textarea, { target: { value: "my question" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
    expect(component.getByTestId("error-header")).toBeInTheDocument();
  });

  it("will display an error if all fields except the question are submitted", () => {
    var component = render(<ContactUsForm />);

    var input = component.getByTestId("email-input");
    fireEvent.change(input, { target: { value: "myEmail@udacity.com" } });
    var select = component.getByTestId("department-select");
    fireEvent.change(select, { target: { value: "sales" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
    expect(component.getByTestId("error-header")).toBeInTheDocument();
  });

  it("will display a success message if all fields are submitted", () => {
    var component = render(<ContactUsForm />);

    var input = component.getByTestId("email-input");
    fireEvent.change(input, { target: { value: "myEmail@udacity.com" } });
    var select = component.getByTestId("department-select");
    fireEvent.change(select, { target: { value: "sales" } });
    var textarea = component.getByTestId("question-textarea");
    fireEvent.change(textarea, { target: { value: "my question" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.getByTestId("success-header")).toBeInTheDocument();
    expect(component.queryByTestId("error-header")).not.toBeInTheDocument();
  });
});
