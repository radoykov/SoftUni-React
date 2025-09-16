import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery/Gallery";

const MasterContainer = () => (
    <div className="tm-container">
        {/* <!-- Popup itself --> */}
        <Intro />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
    </div>
);
export default MasterContainer;