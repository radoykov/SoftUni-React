import { useEffect } from "react";
import Header from '../common/Header'
import TeamMember from "./TeamMember";
import OurPartner from "./OurPartner";
import Progress from "./Progress";
import BannerHeroAbout from "./BannerHeroAbout";
import Choice from "./Choice";
import Aim from "./Aim";
import ContactAbout from "./ContactAbout";
import Footer from "../common/Footer";

function MasterAboutPage() {
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

            <BannerHeroAbout />

            <TeamMember />

            <OurPartner />

            <Progress />

            <Choice />

            <Aim />

            <ContactAbout />

            <Footer />

        </>
    );
}

export default MasterAboutPage;