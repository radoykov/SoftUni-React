const Section3 = () => (
    <section className="news-section section-padding section-bg">
        <div className="container">
            <div className="row">

                <div className="col-lg-12 col-12 mb-4">
                    <h2>Related news</h2>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="news-block">
                        <div className="news-block-top">
                            <a href="news-detail.html">
                                <img src="images/news/medium-shot-volunteers-with-clothing-donations.jpg"
                                    className="news-image img-fluid" alt=""/>
                            </a>

                            <div className="news-category-block">
                                <a href="#" className="category-block-link">
                                    Lifestyle,
                                </a>

                                <a href="#" className="category-block-link">
                                    Clothing Donation
                                </a>
                            </div>
                        </div>

                        <div className="news-block-info">
                            <div className="d-flex mt-2">
                                <div className="news-block-date">
                                    <p>
                                        <i className="bi-calendar4 custom-icon me-1"></i>
                                        October 16, 2036
                                    </p>
                                </div>

                                <div className="news-block-author mx-5">
                                    <p>
                                        <i className="bi-person custom-icon me-1"></i>
                                        By Admin
                                    </p>
                                </div>

                                <div className="news-block-comment">
                                    <p>
                                        <i className="bi-chat-left custom-icon me-1"></i>
                                        24 Comments
                                    </p>
                                </div>
                            </div>

                            <div className="news-block-title mb-2">
                                <h4><a href="news-detail.html" className="news-block-title-link">Clothing donation to
                                    urban area</a></h4>
                            </div>

                            <div className="news-block-body">
                                <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito
                                    Professional charity theme based on Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="news-block">
                        <div className="news-block-top">
                            <a href="news-detail.html">
                                <img src="images/news/medium-shot-people-collecting-foodstuff.jpg"
                                    className="news-image img-fluid" alt=""/>
                            </a>

                            <div className="news-category-block">
                                <a href="#" className="category-block-link">
                                    Food,
                                </a>

                                <a href="#" className="category-block-link">
                                    Donation,
                                </a>

                                <a href="#" className="category-block-link">
                                    Caring
                                </a>
                            </div>
                        </div>

                        <div className="news-block-info">
                            <div className="d-flex mt-2">
                                <div className="news-block-date">
                                    <p>
                                        <i className="bi-calendar4 custom-icon me-1"></i>
                                        October 20, 2036
                                    </p>
                                </div>

                                <div className="news-block-author mx-5">
                                    <p>
                                        <i className="bi-person custom-icon me-1"></i>
                                        By Admin
                                    </p>
                                </div>

                                <div className="news-block-comment">
                                    <p>
                                        <i className="bi-chat-left custom-icon me-1"></i>
                                        36 Comments
                                    </p>
                                </div>
                            </div>

                            <div className="news-block-title mb-2">
                                <h4><a href="news-detail.html" className="news-block-title-link">Food donation area</a>
                                </h4>
                            </div>

                            <div className="news-block-body">
                                <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus
                                    elementum, tempor risus vel, condimentum orci</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Section3;