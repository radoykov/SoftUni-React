const ContactUs = () => (
    <div className="parallax-content contact-content" id="contact-us">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="contact-form">
                        <div className="row">
                            <form onSubmit={onSubmit} id="contact" method="post">
                                <div className="row">
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="email" type="email" className="form-control" id="email" placeholder="Your email..." required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="btn">Send Message</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="map">
                        {/* <!-- How to change your own map point
                            1. Go to Google Maps
                            2. Click on your location point
                            3. Click "Share" and choose "Embed map" tab
                            4. Copy only URL and paste it within the src="" field below
                    --> */}

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907" width="100%" height="390" frameBorder="0" style={{ "border": 0 }} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

function onSubmit(ev){
    ev.preventDefault();

    const formData = new FormData(ev.target);
    console.log(...formData.values())

    ev.target.reset();
}

export default ContactUs;