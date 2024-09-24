import Body from "../Body"
import {render} from "@testing-library/react"
import MOCK_DATA from "../../Components/mocks/mockRestroListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
//intergration testing
// with async operations.

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("Should render the Body component with Search Button",async  () => {
    await act(async() => render(
    <BrowserRouter>
       <Body/>
    </BrowserRouter>))
});