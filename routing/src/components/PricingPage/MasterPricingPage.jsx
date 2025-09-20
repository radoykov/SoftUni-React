import { useEffect } from "react";
import Header from "../common/Header";
import Pricing from './Pricing'
import ContainerPricing from './ContainerPricing'
import PricingHorizontalSection from './PricingHorizontalSection'
import Footer from "../common/Footer";


function MasterPricingPage() {
    useEffect(() => {
        const bootstrapScript = document.createElement("script");
        bootstrapScript.src = "/assets/js/bootstrap.bundle.min.js";
        bootstrapScript.async = true;
        document.body.appendChild(bootstrapScript);

        const templatemoScript = document.createElement("script");
        templatemoScript.src = "./assets/js/templatemo.js";
        templatemoScript.async = true;
        document.body.appendChild(templatemoScript);

        const customScript = document.createElement("script");
        customScript.src = "./assets/js/custom.js";
        customScript.async = true;
        document.body.appendChild(customScript);

        return () => {
            document.body.removeChild(bootstrapScript);
            document.body.removeChild(templatemoScript);
            document.body.removeChild(customScript);
        };
    }, []);

    return (
        <>
            <Header/>

            <Pricing/>

            <PricingHorizontalSection/>

            <ContainerPricing/>

            <Footer/>
        </>
    );
}

export default MasterPricingPage;