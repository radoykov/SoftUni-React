const Contact = () => (

    <div id="contact" className="popup mfp-with-anim mfp-hide tm-bg-gray">
        <a href="#" className="tm-close-popup">
            return home
            <i className="fas fa-times"></i>
        </a>
        <h2 className="tm-contact-col tm-color-primary tm-page-title tm-mb-40">Contact Us</h2>
        <div className="tm-row tm-contact-row">
            <div className="tm-col tm-contact-col">

                {/*  Do you need a working HTML contact form?
                	Please visit https://templatemo.com/contact page  */}

                <form id="contact-form" action="" method="POST" className="tm-contact-form">
                    <div className="form-group">
                        <input type="text" name="name" className="form-control rounded-0" placeholder="Full Name"
                            required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control rounded-0" placeholder="Email"
                            required />
                    </div>
                    <div className="form-group">
                        <select className="form-control" id="contact-select" name="inquiry">
                            <option value="-">Subject</option>
                            <option value="sales">Sales &amp; Marketing</option>
                            <option value="creative">Creative Design</option>
                            <option value="uiux">UI / UX</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea rows="8" name="message" className="form-control rounded-0" placeholder="Message"
                            required></textarea>
                    </div>

                    <div className="form-group tm-text-right">
                        <button type="submit" className="tm-btn tm-btn-primary">Send it now</button>
                    </div>
                </form>
            </div>
            <div className="tm-col tm-contact-col tm-contact-col-r">
                {/* <!-- Map --> */}
                <div className="mapouter tm-mb-40">
                    <div className="gmap_canvas">
                        <iframe width="100%" height="520" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>

                {/* <!-- Address --> */}
                <address className="tm-mb-40">
                    110-220 Nam vel ultricies mauris,<br/>
                        Et gravida eros 10220
                </address>

                {/* <!-- Links --> */}
                <ul className="tm-contact-links">
                    <li>
                        <a href="tel:0100200340">
                            <i className="fas fa-phone tm-contact-link-icon"></i>
                            Tel: 010-020-0340
                        </a>
                    </li>
                    <li>
                        <a href="mailto:info@company.com">
                            <i className="fas fa-at tm-contact-link-icon"></i>
                            Email: info@company.com
                        </a>
                    </li>
                    <li>
                        <a href="https://www.company.com">
                            <i className="fas fa-link tm-contact-link-icon"></i>
                            URL: www.company.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Contact;