import RestroCard, { withPromotedLabel } from "../RestroCard"
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json"

it("Should render RestroCard component with props", () => {
   render(<RestroCard resData={MOCK_DATA}/>)
    
    const name = screen.getByText("Chinese Wok")
    expect(name).toBeInTheDocument();
 })

//  it("Should render RestroCard component with Veg Label", () => {
//     render(withPromotedLabel)

//     const name = screen.getByLabelText("Veg")
//     expect(name).toBeInTheDocument();
//     })