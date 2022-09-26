import "./style/style.css";
import videoImage from "./../../assets/images/movebottom.jpg";

const VideoSection = () => {
  return (
    <div className="video_content">
      <img src={videoImage} alt="video image" />
      <a href="">
        <span className="play"></span>
      </a>
    </div>
  );
};

export default VideoSection;
