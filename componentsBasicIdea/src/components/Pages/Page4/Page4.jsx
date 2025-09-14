import { Picture } from "../Page3/Picture3";

export const Page4 = (
    { isShow }
) => (
    <>
        {/*  Page 4 Gallery Three  */}
        <li className={isShow && "selected"}>
            <div className="cd-full-width">
                <div className="container-fluid js-tm-page-content" data-page-no="4" data-page-type="gallery">
                    <div className="tm-img-gallery-container tm-img-gallery-container-3">
                        <div className="tm-img-gallery gallery-three">
                            {/*  Gallery Two pop up connected with JS code below  */}

                            <div className="tm-img-gallery-info-container">
                                <h2 className="tm-text-title tm-gallery-title"><span className="tm-white">Third Image Grid</span></h2>
                                <p className="tm-text"><span className="tm-white">Nulla efficitur, ligula et imperdiet volutpat, lacus tortor tempus massa, eget tempus quam nibh vel nulla. Maecenas purus sem, lobortis id odio in, ultrices scelerisque sapien.</span>
                                </p>
                            </div>
                            <Picture 
                                img="src/img/tm-img-11-tn.jpg"
                                num="One"
                                context="Suspendisse id placerat risus. Mauris quis luctus risus."
                            />
                            <Picture 
                                img="src/img/tm-img-12-tn.jpg"
                                num="Two"
                                context="Maecenas purus sem, lobortis id odio in sapien."
                            />
                            <Picture 
                                img="src/img/tm-img-13-tn.jpg"
                                num="Three"
                                context="Suspendisse id placerat risus. Mauris quis luctus risus."
                            />
                            <Picture 
                                img="src/img/tm-img-14-tn.jpg"
                                num="Four"
                                context="Maecenas purus sem, lobortis id odio in sapien."
                            />
                            <Picture 
                                img="src/img/tm-img-15-tn.jpg"
                                num="Five"
                                context="Suspendisse id placerat risus. Mauris quis luctus risus."
                            />
                            <Picture 
                                img="src/img/tm-img-16-tn.jpg"
                                num="Six"
                                context="Maecenas purus sem, lobortis id odio in sapien."
                            />
                        </div>
                    </div>
                    {/*  .tm-img-gallery-container  */}
                </div>
            </div>
        </li>
    </>
);