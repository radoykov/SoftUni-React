import { FluidContainer1 } from './FluidContainer1'
import { FluidContainer2 } from './FluidContainer2'
import { FluidContainer3 } from './FluidContainer3'
import { FluidContainer4 } from './FluidContainer4'
import { FluidContainer5 } from './FluidContainer5'
import { FluidContainer6 } from './FluidContainer6'

export const Services = () => (
    <div id="services" className="our-services section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h6>Our Services</h6>
                        <h2>Discover What We Do &amp; <span>Offer</span> To Our <em>Clients</em></h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
            <FluidContainer1/>
            <FluidContainer2/>
            <FluidContainer3/>
            <FluidContainer4/>
            <FluidContainer5/>
            <FluidContainer6/>
            </div>
        </div>
    </div>

);