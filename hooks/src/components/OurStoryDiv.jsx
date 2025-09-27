const OurStoryDiv = ({
    id,
    img,
    text
}) => (
    <div id={id}>
        <img src={img} alt="" />
        <p>{text}</p>
    </div>
);

export default OurStoryDiv;