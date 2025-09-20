import {Link } from 'react-router-dom';

const Header = () => (
    <>
        {/* < !--Header -- > */}
        <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand h1" href="index.html">
                    <i className='bx bx-buildings bx-sm text-dark'></i>
                    <span className="text-dark h4">Purple</span> <span className="text-primary h4">Buzz</span>
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                    <div className="flex-fill mx-xl-5 mb-2">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/work">Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/contact">Contact</Link>
                            </li>
                              <li className="nav-item">
                                <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/digital-marketing">Digital marketing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar align-self-center d-flex">
                        <a className="nav-link" href="#"><i className='bx bx-bell bx-sm bx-tada-hover text-primary'></i></a>
                        <a className="nav-link" href="#"><i className='bx bx-cog bx-sm text-primary'></i></a>
                        <a className="nav-link" href="#"><i className='bx bx-user-circle bx-sm text-primary'></i></a>
                    </div>
                </div>
            </div>
        </nav>
        {/* <!--Close Header-- > */}
    </>
);

export default Header;