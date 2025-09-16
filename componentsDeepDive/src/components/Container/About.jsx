const About = () => (
    <div id="about" className="popup mfp-with-anim mfp-hide tm-bg-gray">
        <a href="#" className="tm-close-popup">
            return home
            <i className="fas fa-times"></i>
        </a>
        <h2 className="tm-color-primary tm-about-col tm-mb-40 tm-page-title">About Ocean Vibes</h2>
        <div className="tm-row tm-about-row">
            <div className="tm-col tm-about-col tm-about-left">
                <img src="/img/about.jpg" alt="Image" className="tm-mb-30"/>
                    <p className="tm-mb-40">
                        Suspendisse sit amet pellentesque nunc. Vivamus fringilla
                        tellus finibus lacus blandit, siet amet aliquet augue sagittis.
                        Duis nec auctor felis, nec ornare ex. In non ante ligula.
                    </p>
                    <p className="tm-mb-40">
                        Curabitur non augue dignissim est pulvibar lobortis. Nunc
                        vulputate, mi vel cursus mollis, justo mauris rutrum dui, id
                        egestas ante ligula id nunc. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus.
                    </p>
            </div>
            <div className="tm-col tm-about-col">
                <p className="tm-mb-40">
                    You are NOT allowed to re-distribute this template ZIP file
                    on any website that <span className="tm-color-primary">collects and reposts</span> free templates
                    from many different websites.
                </p>
                <p className="tm-mb-40">
                    Pellentesque vitae ipsum vel risus molestie cursus nec quis
                    lectus. Duis egestas lorem eu nisi finibus, sit amet
                    elementum lacus pretium. In tempor felis vitae nulla feugiat aliquam.
                </p>
                <p className="tm-mb-40">
                    If you need a working HTML contact form,
                    please visit our <a rel="nofollow" href="https://templatemo.com/contact"
                        target="_parent">contact page</a>. </p>
                <a href="#" className="tm-btn tm-btn-primary mfp-prevent-close tm-btn-contact tm-mb-40">
                    Contact Us
                </a>
            </div>
        </div>
    </div>
);

export default About;