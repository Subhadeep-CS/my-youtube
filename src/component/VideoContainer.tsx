import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constant";
import { VIDEO_OBJECT } from "./module";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState<VIDEO_OBJECT[]>([]);
  useEffect(() => {
    const getVideos = async () => {
      try {
        const respone = await fetch(YOUTUBE_VIDEO_URL);
        const data = await respone.json();
        setVideos([...data.items]);
      } catch (error) {
        console.log(error);
      }
    };

    getVideos();
  }, []);

  if (videos.length < 0) {
    return;
  }
  return (
    <div className="flex gap-2 flex-wrap justify-start">
      {videos.map((video) => (
        <Link to={`watch?v=${video.id}`} key={video.id}>
          <VideoCard video_details={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
