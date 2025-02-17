import Contact from "../Contact";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load the contact us component", () => {
    render( <Contact/> );
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});