import LandingPageSlider from "./landingPageSlider"
import {screen,render} from "@testing-library/react"

it('check if the landingpageSlider section working',()=>{
    render(<LandingPageSlider/>)

    const sliderSection = screen.getByTestId("landingPageSliderTesting")

     expect(sliderSection).toBeInTheDocument();

    //testing for class
    expect(sliderSection).toHaveClass('backgroundColor')
})

