import { Picture } from "./Picture2";

export const Page2 = (
    {isShow}
) => (
    <>
        {/* Page 2 Gallery One  */}
        <li className={isShow && "selected"}>
            <div className="cd-full-width">
                <div className="container-fluid js-tm-page-content" data-page-no="2" data-page-type="gallery">
                    <div className="tm-img-gallery-container">
                        <div className="tm-img-gallery gallery-one">
                            {/*  Gallery One pop up connected with JS code below  */}
                            <div className="tm-img-gallery-info-container">
                                <h2 className="tm-text-title tm-gallery-title tm-white"><span className="tm-white">First Image Gallery</span></h2>
                                <p className="tm-text">Curabitur quis tellus sed orci rhoncus fermentum. Praesent sollicitudin scelerisque nunc et vehicula. Sed ex magna, elementum ut volutpat ut, vehicula quis metus.
                                </p>
                            </div>
                            <Picture
                                img="src/img/tm-img-01-tn.jpg"
                                title1="Image"
                                title2="One"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                            <Picture
                                img="src/img/tm-img-02-tn.jpg"
                                title1="Image"
                                title2="Two"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                            <Picture
                                img="src/img/tm-img-03-tn.jpg"
                                title1="Image"
                                title2="Three"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                            <Picture
                                img="src/img/tm-img-04-tn.jpg"
                                title1="Image"
                                title2="Four"
                                description="Maecenas purus sem, lobortis id odio in sapien."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </>
);