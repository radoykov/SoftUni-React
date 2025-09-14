import { Page1 } from './Page1/Page1'
import { Page2 } from './Page2/Page2'
import { Page3 } from './Page3/Page3'
import { Page4 } from './Page4/Page4'
import { AboutUs } from './AboutUs/AboutUs'
import { ContactUs } from './ContactUs/ContactUs'

export const Pages = (
    { currPage }
) => (
    <>
        <ul className="cd-hero-slider">
            < Page1 isShow={currPage == 1} />
            <Page2 isShow={currPage == 2} />
            <Page3 isShow={currPage == 3} />
            <Page4 isShow={currPage == 4} />
            <AboutUs isShow={currPage == 5} />
            <ContactUs isShow={currPage == 6} />
        </ul>
        {/* .cd-hero - slider-- >*/}
    </>

);
