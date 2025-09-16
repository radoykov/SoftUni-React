const VideoTemplate = () => (
    <>
         {/* Video banner 400 px height  */}
        <div id="tm-video-container">
            <video autoPlay muted loop id="tm-video">
                <source src="./src/video/ocean-sea-wave-video.mp4" type="video/mp4"/>
            </video>
            <i id="tm-video-control-button" className="fas fa-pause"></i>
        </div>
    </>
);

export default VideoTemplate;