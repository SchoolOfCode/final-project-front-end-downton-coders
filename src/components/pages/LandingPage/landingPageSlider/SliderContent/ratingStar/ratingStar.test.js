import RatingStar from "./ratingStar"
import {screen,render} from "@testing-library/react"

it('check if the ratingStar in the page',()=>{
    render(<RatingStar/>)

    const starSection = screen.getByTestId("starRatingContainerTesting")

     expect(starSection).toBeInTheDocument();

    //testing for class
    expect(starSection).toHaveClass('StarRatingContainer')
})