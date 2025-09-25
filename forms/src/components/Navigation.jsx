import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav className="navbar navbar-expand-lg bg-light shadow-lg">
        <div className="container">
            <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" className="logo img-fluid" alt="" />
                <span>
                    Kind Heart Charity
                    <small>Non-profit Organization</small>
                </span>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link click-scroll" to="/home">Home</Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link click-scroll" href="index.html#section_2">About</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link click-scroll" href="index.html#section_3">Causes</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link click-scroll" href="index.html#section_4">Volunteer</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link click-scroll dropdown-toggle" href="index.html#section_5" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</a>

                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/news">News Listing</Link></li>

                            <li><Link className="dropdown-item" to="/news-details">News Detail</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link click-scroll" href="index.html#section_6">Contact</a>
                    </li>

                    <li className="nav-item ms-3">
                        <Link className="nav-link custom-btn custom-border-btn btn" to="/donate">Donate</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigation;