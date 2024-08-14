import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test Cases", () => {

  test("Should Load Contact Component", () => {
    render(<Contact/>);
   
    const heading =screen.getByRole("heading");
   
    //Assertion
    expect(heading).toBeInTheDocument()
   });
   
   test("Should Load Button inside Contact Component", () => {
       render(<Contact/>);
      
       const button =screen.getByRole("button");
      
       //Assertion
       expect(button).toBeInTheDocument()
      });
   
      test("Should load input name inside Contact component", () => {
       render(<Contact/>);
      
       const inputName =screen.getByPlaceholderText("name");
      
       //Assertion
       expect(inputName).toBeInTheDocument()
      });
   
      test("Should Load two input boxes on the Contact component", () => {
        render(<Contact/>)
        
        //QUERYING
        const inputBoxes = screen.getAllByRole("textbox")
        //Assertion
        expect(inputBoxes.length).toBe(2)
      });
   
});
