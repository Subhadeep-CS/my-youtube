export const YOUTUBE_VIDEO_URL:string=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${import.meta.env.VITE_APP_API_KEY}`;