import { VIDEO_OBJECT } from "./module";

const VideoCard: React.FC<{ video_details: VIDEO_OBJECT }> = ({
  video_details,
}) => {
  return (
    <div className="p-2 m-2 w-96 h-96 flex-grow">
      <div>
        <img
          src={video_details?.snippet?.thumbnails?.medium?.url}
          className="rounded-md w-full"
        />
      </div>
      <div>
        <ul className="break-words overflow-hidden">
          <li className="text-md text-black font-semibold">
            {video_details?.snippet?.title}
          </li>
          <li className="text-gray-600 font-semibold text-sm">
            {video_details?.snippet?.channelTitle}
          </li>
          <li className="text-gray-600 font-semibold text-sm">
            {video_details?.statistics?.viewCount} views
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
