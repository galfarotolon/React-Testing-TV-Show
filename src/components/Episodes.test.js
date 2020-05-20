import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";



test("renders Episodes Component without errors", () => {
    render(<Episodes episodes={[]} />);
});

