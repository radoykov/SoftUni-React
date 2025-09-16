const BottomNav = () => (
    <nav className="tm-main-nav">
        <ul id="inline-popups">
            {array.map(el => <LiNavItem key={el.id} id={el.id} context={el.context} >{el.i}</LiNavItem>)}
        </ul>
    </nav >
);

const array = [
    {
        id: "intro",
        context: "Introduction",
        i: (<i className="fas fa-3x fa-water"></i>)
    },
    {
        id: "gallery",
        context: "Gallery",
        i: (<i className="far fa-3x fa-images"></i>)
    },
    {
        id: "testimonials",
        context: "Testimonials",
        i: (<i className="far fa-3x fa-smile"></i>)
    },
    {
        id: "about",
        context: "About",
        i: (<i className="fas fa-3x fa-tint"></i>)
    },
    {
        id: "contact",
        context: "Contact",
        i: (<i className="far fa-3x fa-comments"></i>)
    }
];

const LiNavItem = ({
    id,
    context,
    children
}) => (
    <li className="tm-nav-item">
        <a href={`#${id}`} data-effect="mfp-move-from-top" className="tm-nav-link">
            {context}
            {children}
        </a>
    </li>
);

export default BottomNav;