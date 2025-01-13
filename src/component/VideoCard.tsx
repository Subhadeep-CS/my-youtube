import { VIDEO_OBJECT } from "./module";

const VideoCard: React.FC<{ video_details: VIDEO_OBJECT }> = ({
  video_details,
}) => {
  console.log(video_details);
  return (
    <div>
      <img src={video_details?.snippet?.thumbnails?.medium?.url} />
    </div>
  );
};

export default VideoCard;
