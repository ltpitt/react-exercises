import { render } from "@testing-library/react";
import * as React from "react";
import Greeting from "./Geeting";

describe("Greeting", () => {
  it("will match snapshot", () => {
    var component = render(<Greeting />);
    expect(component).toMatchSnapshot();
  });
});
