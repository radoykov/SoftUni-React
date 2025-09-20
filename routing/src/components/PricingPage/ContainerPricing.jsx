const ContainerPricing = () => (
    <>

        <section className="container py-5">

            <h1 className="h2 semi-bold-600 text-center pt-5">Pricing</h1>
            <p className="text-center pb-5 light-300">
                Vector illustration from <a rel="nofollow" href="https://storyset.com/" target="_blank">StorySet</a>.
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.
            </p>

            <div className="row d-flex align-items-center pb-5">

                <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2">
                    <img className="rounded float-right" src="./assets/img/pricing.svg"/>
                </div>

                <div className="col-lg-6">

                    {/* <!-- Start Pricing List --> */}
                    <div className="pricing-list shadow-sm rounded-top rounded-3 py-sm-0 py-5">
                        <div className="row p-2">
                            <div className="pricing-list-icon col-3 text-center m-auto text-secondary ml-5 py-2">
                                <i className="display-3 bx bx-package"></i>
                            </div>
                            <div className="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                                <ul className="list-unstyled text-center light-300">
                                    <li className="h5 semi-bold-600 mb-0 mt-3">Free</li>
                                    <li>Deserunt mollit laborum.</li>
                                </ul>
                            </div>
                            <div className="pricing-list-footer col-4 text-center m-auto align-items-center">
                                <a href="#" className="btn rounded-pill px-4 btn-primary light-300">$0</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Pricing List --> */}

                    {/* <!-- Start Pricing List --> */}
                    <div className="pricing-list shadow-sm py-sm-0 py-5">
                        <div className="row p-2">
                            <div className="pricing-list-icon col-3 text-center m-auto text-secondary ml-5 py-2">
                                <i className="display-3 bx bx-package"></i>
                            </div>
                            <div className="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                                <ul className="list-unstyled text-center light-300">
                                    <li className="h5 semi-bold-600 mb-0 mt-3">Standard</li>
                                    <li>Adipiscing elit, sed do</li>
                                </ul>
                            </div>
                            <div className="pricing-list-footer col-sm-4 col-5 text-center m-auto align-items-center">
                                <a href="#" className="btn rounded-pill px-4 btn-primary light-300">$120/Year</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Pricing List --> */}

                    {/* <!-- Start Pricing List --> */}
                    <div className="pricing-list shadow-sm rounded-botton rounded-3 py-sm-0 py-5">
                        <div className="row p-2">
                            <div className="pricing-list-icon col-sm-3 text-center m-auto text-secondary ml-5 py-2">
                                <i className="display-3 bx bx-package"></i>
                            </div>
                            <div className="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                                <ul className="list-unstyled text-center light-300">
                                    <li className="h5 semi-bold-600 mb-0 mt-3">Enterprise</li>
                                    <li>Sed do eiusmod tempor</li>
                                </ul>
                            </div>
                            <div className="pricing-list-footer col-sm-4 col-5 text-center m-auto align-items-center">
                                <a href="#" className="btn rounded-pill px-4 btn-primary light-300">$840/Year</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Pricing List --> */}
                    <p className="text-center"><a className="btn px-4 mt-4 mx-auto btn-outline-primary" href="#">Get Now</a></p>


                </div>
            </div>
        </section>
    </>
);

export default ContainerPricing;