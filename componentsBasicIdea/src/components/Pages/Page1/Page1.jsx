import { Picture } from "./Picture1";

export const Page1 = (
    { isShow }
) => (
    <>
        {/* <!-- Page 1 Home --> */}
        <li className={isShow && "selected"} >
            <div className="cd-full-width">
                <div className="container-fluid js-tm-page-content tm-page-pad" data-page-no="1">
                    <div className="row">
                        <div className="tm-3-col-container">
                            <Picture greeting="Hello Guest" i="fa fa-4x fa-pagelines tm-home-fa">
                                Upper HTML Template contains different background images for pages. Please check <a href="http://www.templatemo.com/tm-494-motion" target="_parent">Motion Template</a> if you want to see video backgrounds. Feel free to download and use web templates from templatemo.
                            </Picture>

                            <Picture greeting="Welcome!" i="fa fa-4x fa-bicycle tm-home-fa">
                                There are 3 different gallaries in this template. You can customize them in any suitable way you prefer. You can also modify the content columns as you wish. Images are from Unsplash website. Good Luck!
                            </Picture>

                            <Picture greeting="Stay relaxed" i="fa fa-4x fa-plane tm-home-fa">
                                You can easily change icons in HTML codes by <a href="http://fontawesome.io/icons/" target="_parent">Font Awesome</a>. Praesent tempus dapibus. Curabitur sodales, est auctor congue vulputate, nisl tellus finibus nunc, vitae consectetur enim.
                            </Picture>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </>
);