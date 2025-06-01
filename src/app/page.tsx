// pages/video/[id].tsx

import HLSPlayer from "./component/HLSPlayer";

const VideoPage = () => {
  const videoId = "237172d0-e323-49d6-8c17-cc1aaeccf97d"; // normally from URL or fetched
  const hlsUrl = `https://pub-cba03f5ad4224f06a69192a6a26ac2b4.r2.dev/videos/f5925fa2-169e-4236-8330-0e9777a36fb0/master.m3u8`;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <HLSPlayer src={hlsUrl} />
    </div>
  );
};

export default VideoPage;
