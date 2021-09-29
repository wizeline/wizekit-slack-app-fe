import * as React from "react";
import { render } from "@testing-library/react";

import { App } from "../App";

/**
 * Just a simple integration tests
 */

test("App Component renders with toggle switch", () => {
  const wrap = render(<App />);

  expect(wrap.getByText("Permanent drawer")).toBeInTheDocument();
});
