const TeamMember = () => (
    <>
        {/* <!-- Start Team Member --> */}
        <section className="container py-5">
            <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5">

                <div className="col-lg-3">
                    <h2 className="h2 py-5 typo-space-line">Our Team</h2>
                    <p className="text-muted light-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="col-lg-9 row">
                    <div className="team-member col-md-4">
                        <img className="team-member-img img-fluid rounded-circle p-4" src="./assets/img/team-01.jpg"
                            alt="Card image"/>
                            <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300" >
                            <li>John Doe</li>
                            <li>Business Development</li>
                        </ul>
                    </div>
                    <div className="team-member col-md-4">
                        <img className="team-member-img img-fluid rounded-circle p-4" src="./assets/img/team-02.jpg"
                            alt="Card image"/>
                            <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300" >
                            <li>Jane Doe</li>
                            <li>Media Development</li>
                        </ul>
                    </div>
                    <div className="team-member col-md-4">
                        <img className="team-member-img img-fluid rounded-circle p-4" src="./assets/img/team-03.jpg"
                            alt="Card image"/>
                            <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300" >
                            <li>Sam</li>
                            <li>Developer</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
        {/* <!-- End Team Member --> */}
    </>
);

export default TeamMember;