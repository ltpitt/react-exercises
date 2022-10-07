// 1) Test that if no name prop is provided, the unit test's snapshot will
//  match one that only has "Weclome!" within the h1 tags.
// 2) Test that if a name prop is provided, the unit test's snapshot will
// match one that has "Weclome back {whichever name you provided}!" within the h1 tags.
import { render } from "@testing-library/react";
import * as React from "react";
import Greetings from "./Greetings";

describe("Greetings", () => {
  it("will match snapshot if a name is provided", () => {
    var component = render(<Greetings name={"Mike"} />);
    expect(component).toMatchSnapshot();
  });

  it("will match snapshot if no name is provided", () => {
    var component = render(<Greetings />);
    expect(component).toMatchSnapshot();
  });
});
