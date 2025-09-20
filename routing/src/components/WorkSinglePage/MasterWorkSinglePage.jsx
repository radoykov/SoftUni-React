import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BannerHeroWorkSingle from "./BannerHeroWorkSingle";
import WorkSigle from './WorkSigle'
import RelatedPost from './RelatedPost'

function MasterWorkSinglePage() {

    useEffect(() => {
        // Bootstrap
        const bootstrapScript = document.createElement("script");
        bootstrapScript.src = "/assets/js/bootstrap.bundle.min.js";
        bootstrapScript.async = true;
        document.body.appendChild(bootstrapScript);

        // jQuery
        const jqueryScript = document.createElement("script");
        jqueryScript.src = "/assets/js/jquery.min.js";
        jqueryScript.async = true;
        jqueryScript.onload = () => {
            // Slide functionality
            window.$(window).on("load", function () {
                window.$(".templatemo-slide-link").click(function () {
                    const this_href = window.$(this).attr("href");
                    window.$("#templatemo-slide-link-target img").attr("src", this_href);
                    return false;
                });
            });
        };
        document.body.appendChild(jqueryScript);

        // Templatemo
        const templatemoScript = document.createElement("script");
        templatemoScript.src = "/assets/js/templatemo.js";
        templatemoScript.async = true;
        document.body.appendChild(templatemoScript);

        // Custom
        const customScript = document.createElement("script");
        customScript.src = "/assets/js/custom.js";
        customScript.async = true;
        document.body.appendChild(customScript);

        return () => {
            document.body.removeChild(bootstrapScript);
            document.body.removeChild(jqueryScript);
            document.body.removeChild(templatemoScript);
            document.body.removeChild(customScript);
        };
    }, []);


    return (
        <>
            <Header/>

            <BannerHeroWorkSingle/>

            <WorkSigle/>

            <RelatedPost/>

            <Footer/>
        </>
    );


}

export default MasterWorkSinglePage;