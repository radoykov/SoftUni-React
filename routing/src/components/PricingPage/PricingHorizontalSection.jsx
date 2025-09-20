const PricingHorizontalSection = () => (
    <>
        {/* <!-- Start Pricing Horizontal Section --> */}
        <section className="bg-light pt-sm-0 py-5">
            <div className="container py-5">

                <h1 className="h2 semi-bold-600 text-center mt-2">Our Pricing</h1>
                <p className="text-center pb-5 light-300">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</p>

                {/* <!-- Start Pricing Horizontal --> */}
                <div className="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white">
                    <div className="pricing-horizontal-icon col-md-3 text-center bg-secondary text-light py-4">
                        <i className="display-1 bx bx-package pt-4"></i>
                        <h5 className="h5 semi-bold-600 pb-4 light-300">Free</h5>
                    </div>
                    <div className="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
                        <ul className="text-left px-4 list-unstyled mb-0 light-300">
                            <li><i className="bx bxs-circle me-2"></i>5 Users</li>
                            <li><i className="bx bxs-circle me-2"></i>2 TB space</li>
                            <li><i className="bx bxs-circle me-2"></i>Community Forums</li>
                        </ul>
                    </div>
                    <div className="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
                        <div className="w-100 light-300">
                            <p>$0</p>
                            <a href="#" className="btn rounded-pill px-4 btn-outline-primary mb-3">Get Now</a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Pricing Horizontal --> */}

                {/* <!-- Start Pricing Horizontal --> */}
                <div className="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden my-5 bg-white">
                    <div className="pricing-horizontal-icon col-md-3 text-center bg-secondary text-light py-4">
                        <i className="display-1 bx bx-package pt-4"></i>
                        <h5 className="h5 semi-bold-600 pb-4 light-300">Standard</h5>
                    </div>
                    <div className="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
                        <ul className="text-left px-4 list-unstyled mb-0 light-300">
                            <li><i className="bx bxs-circle me-2"></i>25 to 99 Users</li>
                            <li><i className="bx bxs-circle me-2"></i>10 TB space</li>
                            <li><i className="bx bxs-circle me-2"></i>Live Chat</li>
                        </ul>
                    </div>
                    <div className="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
                        <div className="w-100 light-300">
                            <p>$120/Year</p>
                            <a href="#" className="btn rounded-pill px-4 btn-outline-primary mb-3">Get Now</a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Pricing Horizontal --> */}

                {/* <!-- Start Pricing Horizontal --> */}
                <div className="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white">
                    <div className="pricing-horizontal-icon col-md-3 text-center bg-secondary text-light py-4">
                        <i className="display-1 bx bx-package pt-4"></i>
                        <h5 className="h5 semi-bold-600 pb-4 light-300">Enterprise</h5>
                    </div>
                    <div className="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
                        <ul className="text-left px-4 list-unstyled mb-0 light-300">
                            <li><i className="bx bxs-circle me-2"></i>100 users or more</li>
                            <li><i className="bx bxs-circle me-2"></i>80 TB space</li>
                            <li><i className="bx bxs-circle me-2"></i>Full Access</li>
                            <li><i className="bx bxs-circle me-2"></i>Customizations</li>
                        </ul>
                    </div>
                    <div className="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
                        <div className="w-100 light-300">
                            <p>$840/Year</p>
                            <a href="#" className="btn rounded-pill px-4 btn-outline-primary mb-3">Get Now</a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Pricing Horizontal --> */}

            </div>
        </section>
        {/* <!--End Pricing Horizontal Section--> */}

    </>
);

export default PricingHorizontalSection;