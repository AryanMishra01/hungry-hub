import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test Cases", () => {

  it("Should Load Contact Component", () => {
    render(<Contact/>);
   
    const heading =screen.getByRole("heading");
   
    //Assertion
    expect(heading).toBeInTheDocument()
   });
   
   it("Should Load Button inside Contact Component", () => {
       render(<Contact/>);
      
       const button =screen.getByRole("button");
      
       //Assertion
       expect(button).toBeInTheDocument()
      });
   
      it("Should load input name inside Contact component", () => {
       render(<Contact/>);
      
       const inputName =screen.getByPlaceholderText("name");
      
       //Assertion
       expect(inputName).toBeInTheDocument()
      });
   
      it("Should Load two input boxes on the Contact component", () => {
        render(<Contact/>)
        
        //QUERYING
        const inputBoxes = screen.getAllByRole("textbox")
        //Assertion
        expect(inputBoxes.length).toBe(2)
      });
   
});
