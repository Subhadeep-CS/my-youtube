import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constant";
import { VIDEO_OBJECT } from "./module";
import VideoCard from "./VideoCard";

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
  return (
    <div>
      <VideoCard video_details={videos[0]} />
    </div>
  );
};

export default VideoContainer;
