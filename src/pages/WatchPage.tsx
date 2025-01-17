import { useSearchParams } from "react-router-dom";

const WatchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  return (
    <>
      <iframe
        width="1200"
        height="600"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default WatchPage;
