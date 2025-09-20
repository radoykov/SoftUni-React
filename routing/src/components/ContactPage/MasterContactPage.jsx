import BannerHeroContact from "./BannerHeroContact";
import ContactContact from "./ContactContact";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useEffect } from "react";

function MasterContactPage() {

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
            <Header />

            <BannerHeroContact />

            <ContactContact />

            <Footer />

        </>
    );
}

export default MasterContactPage;