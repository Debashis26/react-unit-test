import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Comp3 from "../../components/Comp3";
describe("testing component 3", () => {
  it("should have name,email input box and click me button", () => {
    const { getByTestId }= render(<Comp3 />);
    const name_id = getByTestId("name");
    const email_id = getByTestId("email");
    const clickMe_id = getByTestId("submit");
    expect(name_id).toBeInTheDocument();
    expect(email_id).toBeInTheDocument();
    expect(clickMe_id).toBeInTheDocument();
  });

  it("should display the error message when the form is submitted with empty name and email fields ", () => {
    const { getByTestId } = render(<Comp3 />);
    const name_id = getByTestId("name");
    const email_id = getByTestId("email");
    const clickMe_id = getByTestId("submit");
    fireEvent.change(name_id, { target: { value: "" } });
    fireEvent.change(email_id, { target: { value: "" } });
    fireEvent.click(clickMe_id);
    const errorMessageElement = screen.getByText("All fieldis are required");
    expect(errorMessageElement).toBeInTheDocument();
  });
  it("should display the 'sucessful' alert message when the form is submitted with name and email fields ", () => {
    jest.spyOn(window, "alert");
    const { getByTestId } = render(<Comp3 />);
    const name_id = getByTestId("name");
    const email_id = getByTestId("email");
    const clickMe_id = getByTestId("submit");
    fireEvent.change(name_id, { target: { value: "debashis" } });
    fireEvent.change(email_id, { target: { value: "deb@check.com" } });
    fireEvent.click(clickMe_id);
    expect(window.alert).toHaveBeenCalledWith("form submitted sucessfully");
  });
});
