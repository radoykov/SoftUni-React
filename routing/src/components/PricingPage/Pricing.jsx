const Pricing = () => (
    <>
        {/* <!-- Start pricing --> */}
        <div className="container-lg py-5">
            <div className="col-md-12 m-auto text-center py-5">
                <h1 className="pricing-header h2 semi-bold-600">Pricing</h1>
                <p className="pricing-footer">
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.
                </p>
            </div>


            <div className="row px-lg-3">


                <div className="col-md-4 pb-5 pt-sm-0 mt-5 px-xl-3">
                    <div className="pricing-table card h-100 shadow-sm border-0 py-5">
                        <div className="pricing-table-body card-body rounded-pill text-center align-self-center p-md-0">
                            <i className="pricing-table-icon display-3 bx bx-package text-secondary"></i>
                            <h2 className="pricing-table-heading h5 semi-bold-600">Free Plan</h2>
                            <p>$0</p>
                            <ul className="pricing-table-body text-start text-dark px-4 list-unstyled light-300">
                                <li><i className="bx bxs-circle me-2"></i>5 Users</li>
                                <li><i className="bx bxs-circle me-2"></i>2 TB space</li>
                                <li><i className="bx bxs-circle me-2"></i>Community Forums</li>
                                <li><i className="bx bxs-circle me-2"></i>Email Support</li>
                            </ul>
                            <div className="pricing-table-footer pt-5">
                                <a href="#" className="btn rounded-pill px-4 btn-outline-primary light-300">Get Now</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 pt-sm-0 pt-3 px-xl-3">
                    <div className="pricing-table card bg-secondary h-100 card-rounded shadow-sm border-0 py-5">
                        <div className="pricing-table-body card-body text-center text-white align-self-center p-md-0">
                            <i className="pricing-table-icon display-3 bx bx-package text-white py-3"></i>
                            <h2 className="pricing-table-heading h5 semi-bold-600">Standard Plan</h2>
                            <p>$120/Year</p>
                            <ul className="pricing-table-list text-start text-dark px-4 list-unstyled light-300">
                                <li className="text-white"><i className="bx bxs-circle me-2"></i>25 to 99 Users</li>
                                <li className="text-white"><i className="bx bxs-circle me-2"></i>10 TB space</li>
                                <li className="text-white"><i className="bx bxs-circle me-2"></i>Source Files</li>
                                <li className="text-white"><i className="bx bxs-circle me-2"></i>Live Chat</li>
                            </ul>
                            <div className="pricing-table-footer pt-5 pb-2">
                                <a href="#" className="btn rounded-pill px-4 btn-outline-light light-300">Get Now</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 pb-5 pt-sm-0 mt-5 px-xl-3">
                    <div className="pricing-table card h-100 shadow-sm border-0 py-5">
                        <div className="pricing-table-body card-body text-center align-self-center p-md-0">
                            <i className="pricing-table-icon display-3 bx bx-package text-secondary"></i>
                            <h2 className="pricing-table-heading h5 semi-bold-600">Enterprise</h2>
                            <p>$840/Year</p>
                            <ul className="pricing-table-list text-start text-dark px-4 list-unstyled light-300">
                                <li><i className="bx bxs-circle me-2"></i>100 users or more</li>
                                <li><i className="bx bxs-circle me-2"></i>80 TB space</li>
                                <li><i className="bx bxs-circle me-2"></i>Full Access Sources</li>
                                <li><i className="bx bxs-circle me-2"></i>Live Chat</li>
                                <li><i className="bx bxs-circle me-2"></i>Customizations</li>
                            </ul>
                            <div className="pricing-table-footer pt-1">
                                <a href="#" className="btn rounded-pill px-4 btn-outline-primary light-300">Get Now</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        {/* <!-- End Content --> */}
    </>
);

export default Pricing;