export const Picture = (props) => (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox">
        <div className="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
            <i className={props.i}></i>
            <h2 className="tm-text-title">{props.greeting}</h2>
            <p className="tm-text">{props.children}</p>
        </div>
    </div>
);