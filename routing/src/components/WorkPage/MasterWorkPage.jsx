import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BannerHeroWork from "./BannerHeroWork";
import OurWork from './OurWork'
import FeatureWork from './FeatureWork'

function MasterWorkPage() {

    useEffect(() => {
        // Bootstrap
        const bootstrapScript = document.createElement("script");
        bootstrapScript.src = "/assets/js/bootstrap.bundle.min.js";
        bootstrapScript.async = true;
        document.body.appendChild(bootstrapScript);

        // Lightbox
        const lightboxScript = document.createElement("script");
        lightboxScript.src = "/assets/js/fslightbox.js";
        lightboxScript.async = true;
        lightboxScript.onload = () => {
            if (window.fsLightboxInstances?.gallery?.props) {
                window.fsLightboxInstances.gallery.props.loadOnlyCurrentSource = true;
            }
        };
        document.body.appendChild(lightboxScript);

        // jQuery
        const jqueryScript = document.createElement("script");
        jqueryScript.src = "/assets/js/jquery.min.js";
        jqueryScript.async = true;
        jqueryScript.onload = () => {
            // Isotope
            const isotopeScript = document.createElement("script");
            isotopeScript.src = "/assets/js/isotope.pkgd.js";
            isotopeScript.async = true;
            isotopeScript.onload = () => {
                window.$(window).on("load", function () {
                    const $projects = window.$(".projects").isotope({
                        itemSelector: ".project",
                        layoutMode: "fitRows",
                    });

                    window.$(".filter-btn").click(function () {
                        const data_filter = window.$(this).attr("data-filter");
                        $projects.isotope({ filter: data_filter });
                        window.$(".filter-btn").removeClass("active shadow");
                        window.$(this).addClass("active shadow");
                        return false;
                    });
                });
            };
            document.body.appendChild(isotopeScript);
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
            document.body.removeChild(lightboxScript);
            document.body.removeChild(jqueryScript);
            document.body.removeChild(templatemoScript);
            document.body.removeChild(customScript);
        };
    }, []);


    return (
        <>
            <Header/>

            <BannerHeroWork/>

            <OurWork/>

            <FeatureWork/>

            <Footer/>
        </>
    );


}

export default MasterWorkPage;