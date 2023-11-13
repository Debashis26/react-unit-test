import { fireEvent, render, screen } from "@testing-library/react";
import Comp2 from "../../components/Comp2";
import React from "react";

describe("testing component-2", () => {
  it("should display A at initial stage", () => {
    const { getByTestId } = render(<Comp2 />);
    const displayedLetter = getByTestId("disp_item");
    expect(displayedLetter.textContent).toBe("A");
  });

  it('should update the valu to "B" after clicking "Click me" button', () => {
    const { getByTestId } = render(<Comp2 />);
    const displayedButton = getByTestId("click_me");
    fireEvent.click(displayedButton);
    const updatedDispLater = getByTestId("disp_item");
    
    expect(updatedDispLater.textContent).toBe("B");
  });
});
