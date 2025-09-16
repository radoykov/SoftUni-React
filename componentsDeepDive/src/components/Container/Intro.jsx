const Intro = () => (
    <div id="intro" className="popup mfp-with-anim mfp-hide tm-bg-gray">
        <a href="#" className="tm-close-popup">
            return home
            <i className="fas fa-times"></i>
        </a>
        <div className="tm-row tm-intro-row">
            <img src="/img/intro.jpg" alt="Image" className="tm-intro-img"/>
                <div className="tm-col tm-bg-white tm-intro-pad">
                    <h2 className="tm-color-primary tm-page-title">Introducing Ocean Vibes</h2>
                    <div className="tm-row tm-content-row">
                        <div className="tm-col-6 tm-intro-col-l">
                            <p>
                                This CSS template is 100% free provided by
                                <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a>
                                website. You can use this template for any purpose. You can apply
                                this as a CMS theme or a custom website builder template.
                            </p>
                            <p>
                                You can support our website by contributing
                                <a rel="nofollow" href="http://paypal.me/templatemo" target="_parent">a little via
                                    <strong>PayPal</strong></a>
                                or spreading a word about TemplateMo to your friends.
                                If you have any question, feel free to send
                                us a message.
                            </p>
                            <p className="tm-mb-0">
                                <strong>Credit</strong> goes to Pexels for the video banner and images used in this
                                template. Some images are taken from Unsplash. Both Pexels and Unsplash are great
                                websites for free photos.
                            </p>
                        </div>
                        <div className="tm-col-6">
                            <p>
                                You are not allowed to re-distribute this
                                template as a downloadable ZIP file on
                                any template collection website.
                            </p>
                            <p>
                                Top right corner is a return home with an
                                icon that will close this pop-up page.
                            </p>
                            <p className="tm-mb-80">
                                Next Page will bring you to the gallery
                                page directly without going back to main
                                menu.
                            </p>
                            <div className="tm-text-center">
                                <a href="#" className="tm-btn tm-btn-primary mfp-prevent-close tm-btn-next">
                                    Next Page
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
);

export default Intro;