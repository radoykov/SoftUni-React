export const Picture = (
    {
        img,
        title1,
        title2,
        description,
    }
) => (
    <div className="grid-item">
        <figure className="effect-ruby">
            <img src={img} alt="Image" className="img-fluid tm-img" />
            <figcaption>
                <h2 className="tm-figure-title">{title1}<span>{title2}</span></h2>
                <p className="tm-figure-description">{description}</p>
                <a href={img}>View more</a>
            </figcaption>
        </figure>
    </div>
);