import { Picture } from "./Picture3";

export const Page3 = ({ isShow }) => (
    <>
        {/*  Page 3 Gallery Two  */}
        <li className={isShow && "selected"}>
            <div className="cd-full-width">
                <div className="container-fluid js-tm-page-content" data-page-no="3" data-page-type="gallery">
                    <div className="tm-img-gallery-container tm-img-gallery-container-2">
                        <div className="tm-img-gallery gallery-two">
                            {/*  Gallery Two pop up connected with JS code below  */}

                            <div className="tm-img-gallery-info-container">
                                <h2 className="tm-text-title tm-gallery-title"><span className="tm-white">Second Gallery</span></h2>
                                <p className="tm-text"><span className="tm-white">Aenean nulla lorem, laoreet eu nibh et, lacinia ullamcorper dui. Nullam ut tincidunt odio. Morbi accumsan diam vel enim cursus, in dapibus eros tristique.</span>
                                </p>
                            </div>
                            <Picture
                                img="src/img/tm-img-05-tn.jpg"
                                num="One"
                                context="Suspendisse id placerat risus. Mauris quis luctus risus."
                            />
                            <Picture
                                img="src/img/tm-img-06-tn.jpg"
                                num="Two"
                                context="Maecenas purus sem, lobortis id odio in sapien."
                            />
                            <Picture
                                img="src/img/tm-img-07-tn.jpg"
                                num="Three"
                                context="Suspendisse id placerat risus. Mauris quis luctus risus."
                            />
                            <Picture
                                img="src/img/tm-img-08-tn.jpg"
                                num="Four"
                                context="Maecenas purus sem, lobortis id odio in sapien."
                            />
                            <Picture
                                img="src/img/tm-img-09-tn.jpg"
                                num="Five"
                                context="Suspendisse id placerat risus. Mauris quis luctus risus."
                            />
                            <Picture
                                img="src/img/tm-img-10-tn.jpg"
                                num="Six"
                                context="Maecenas purus sem, lobortis id odio in sapien."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </>
);