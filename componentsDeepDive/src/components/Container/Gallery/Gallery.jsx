import { useEffect, useState } from "react";
import uniqid from 'uniqid'

function Gallery() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await retrieveData();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
        fetchData();
    }, []);
    return (
        <div id="gallery" className="popup mfp-with-anim mfp-hide tm-bg-gray">
            <a href="#" className="tm-close-popup">
                return home
                <i className="fas fa-times"></i>
            </a>
            <div className="tm-row tm-gallery-row">
                <div className="tm-gallery">
                    <div className="tm-gallery-container">
                        {data.map(fig => <Figure key={uniqid()} {...fig} />)}
                    </div>
                </div>
                {/* <!-- Gallery navigation and description --> */}
                <div className="tm-col tm-gallery-right">
                    <h2 className="tm-color-primary tm-mt-35 tm-page-title">Gallery</h2>
                    <div className="tm-gallery-right-inner">
                        <ul className="tm-gallery-links">
                            <li>
                                <a href="#" className="active tm-gallery-link" data-filter="*">
                                    <i className="fas fa-layer-group tm-gallery-link-icon"></i>
                                    All
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tm-gallery-link" data-filter="portrait">
                                    <i className="fas fa-portrait tm-gallery-link-icon"></i>
                                    Portraits
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tm-gallery-link" data-filter="nature">
                                    <i className="fas fa-leaf tm-gallery-link-icon"></i>
                                    Nature
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tm-gallery-link" data-filter="animal">
                                    <i className="fas fa-paw tm-gallery-link-icon"></i>
                                    Animals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tm-gallery-link" data-filter="building">
                                    <i className="far fa-building tm-gallery-link-icon"></i>
                                    Buildings
                                </a>
                            </li>
                        </ul>
                        <p>
                            Different icons are used for
                            different categories. There are 4 or more
                            pages of photos in this gallery. Each
                            thumbnail has a nice hover effect.
                        </p>
                        <p>
                            Proin lacus enim, finibus sed magna a,
                            molestie lacinia est. Maecenas id dolor
                            lorem. Donec sodales ex velit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Figure = ({
    name,
    img,
    text,

}) => (
    <figure className={`effect-chico tm-gallery-item ${name}`}>
        <img src={`/img/gallery/${img}`} alt="Image" />
        <figcaption>
            <p>{text}</p>
        </figcaption>
    </figure >
);

async function retrieveData() {
    const res = await fetch('../../../../imgsData.json', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', }
    });
    const data = await res.json();

    return data;
}

export default Gallery;