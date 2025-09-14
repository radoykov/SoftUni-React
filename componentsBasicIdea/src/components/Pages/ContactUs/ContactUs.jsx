export const ContactUs = ({ isShow }) => (
    <>
        {/*  Page 6 Contact Us  */}
        <li className={isShow && "selected"}>
            <div className="cd-full-width">
                <div className="container-fluid js-tm-page-content tm-page-pad" data-page-no="6">
                    <div className="tm-contact-page">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="tm-flex tm-contact-container">
                                    <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
                                        <h2 className="tm-contact-info">Contact Us</h2>
                                        <p className="tm-text">Praesent tempus dapibus odio nec elementum. Sed elementum est quis tortor faucibus, et molestie nibh finibus. Mauris condimentum ex vestibulum fringilla consectetur.</p>

                                        {/*  contact form  */}
                                        <form action="index.html" method="post" className="tm-contact-form">

                                            <div className="form-group">
                                                <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
                                            </div>

                                            <div className="form-group">
                                                <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
                                            </div>

                                            <div className="form-group">
                                                <textarea id="contact_message" name="contact_message" className="form-control" rows="5" placeholder="Your message" required></textarea>
                                            </div>

                                            <button type="submit" className="pull-xs-right tm-submit-btn">Send</button>

                                        </form>
                                    </div>

                                    <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
                                        <h2 className="tm-contact-info">123 New Street 11000, San Francisco, CA</h2>
                                        {/*  google map goes here  */}
                                        <div id="google-map"></div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/*  .cd-full-width  */}
        </li>

    </>
);