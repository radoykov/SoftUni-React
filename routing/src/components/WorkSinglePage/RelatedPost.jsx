const RelatedPost = () => (
    <>
        {/* <!-- Start Related Post --> */}
        <article className="container-fluid bg-light">
            <div className="container">
                <div className="worksingle-related-header row">
                    <h1 className="h2 py-5">Related Post</h1>
                    <div className="col-md-12 text-left justify-content-center">
                        <div className="row gx-5">


                            <div className="col-sm-6 col-lg-4 mb-5">
                                <a href="#" className="related-content card text-decoration-none overflow-hidden h-100">
                                    <img className="related-img card-img-top" src="./assets/img/related-post-01.jpg" alt="Card image cap" />
                                    <div className="related-body card-body p-4">
                                        <h5 className="card-title h6 m-0 semi-bold-600 text-dark">Digital Marketing</h5>
                                        <p className="card-text pt-2 mb-1 light-300 text-dark">
                                            Lorem ipsum dolor sit amet, consectetur.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <span className="text-primary light-300">Read more</span>
                                            <div className="light-300">
                                                <i className='bx-fw bx bx-heart me-1'></i>5
                                                <i className='bx-fw bx bx-chat    ms-1 me-1'></i>3
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-5">
                                <a href="#" className="related-content card text-decoration-none overflow-hidden h-100">
                                    <img className="related-img card-img-top" src="./assets/img/related-post-02.jpg" alt="Card image cap" />
                                    <div className="related-body card-body p-4">
                                        <h5 className="card-title h6 m-0 semi-bold-600 text-dark">App Development</h5>
                                        <p className="card-text pt-2 mb-1 light-300 text-dark">
                                            Tempor incididunt ut labore et dolore.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <span className="text-primary light-300">Read more</span>
                                            <div className="light-300">
                                                <i className='bx-fw bx bx-heart me-1'></i>11
                                                <i className='bx-fw bx bx-chat    ms-1 me-1'></i>9
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-5">
                                <a href="#" className="related-content card text-decoration-none overflow-hidden h-100">
                                    <img className="related-img card-img-top" src="./assets/img/related-post-03.jpg" alt="Card image cap" />
                                    <div className="related-body card-body p-4">
                                        <h5 className="card-title h6 m-0 semi-bold-600 text-dark">Digital Marketing</h5>
                                        <p className="card-text pt-2 mb-1 light-300 text-dark">
                                            Consectetur adipiscing elit.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <span className="text-primary light-300">Read more</span>
                                            <div className="light-300">
                                                <i className='bx-fw bx bx-heart me-1'></i>31
                                                <i className='bx-fw bx bx-chat    ms-1 me-1'></i>2
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        {/* <!-- End Related Post --> */}
    </>
);

export default RelatedPost;