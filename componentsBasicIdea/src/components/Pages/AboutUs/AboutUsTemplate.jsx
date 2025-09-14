export const AboutUsTemplate = ({
    title,
    text
}) => (
    <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
        <h2 className="tm-text-title">{title}</h2>
        <p className="tm-text">{text}</p>
    </div>
);