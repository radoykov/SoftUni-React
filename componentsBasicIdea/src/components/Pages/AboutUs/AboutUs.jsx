import { MasterTemplate } from './MasterTemplate'

export const AboutUs = ({ isShow }) => (
    <>
        {/*  Page 5 About  */}
        <li className={isShow && "selected"}>
            <div className="cd-full-width">
                <div className="container-fluid js-tm-page-content tm-page-width" data-page-no="5">
                    {/*  This { down is from js not obj!  */}
                    <MasterTemplate
                        inners={[{
                            title: "Lorem ipsum dolor",
                            text: "Nulla efficitur, ligula et imperdiet volutpat, lacus tortor tempus massa, eget tempus quam nibh vel nulla. Vivamus non molestie leo, non tincidunt diam. Mauris sagittis elit in velit ultricies aliquet sed in magna. Pellentesque semper, est nec consequat viverra, sem augue tincidunt nisi, a posuere nisi sapien sed sapien. Nulla facilisi."
                        }]}
                    />
                    <MasterTemplate
                        inners={[
                            {
                                title: "Nulla facilisi",
                                text: "Donec vitae bibendum est, et ultrices urna. Curabitur ac bibendum augue, a convallis mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultrices placerat arcu."
                            },
                            {
                                title: "Aliquam sem sem",
                                text: "Proin sagittis mauris dolor, vel efficitur lectus dictum nec. Sed ultrices placerat arcu, id malesuada metus cursus suscipit. Donex quis consectetur ligula. Proin accumsan eros id nisi porttitor, a facilisis quam cursus."
                            }
                        ]}
                    />

                </div>
            </div>
            {/*  .cd-full-width  */}

        </li>
    </>
);