"use client";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const VideoPage = () => {
  const videoId = "237172d0-e323-49d6-8c17-cc1aaeccf97d"; // normally from URL or fetched
  const hlsUrl = `https://pub-cba03f5ad4224f06a69192a6a26ac2b4.r2.dev/videos/f5925fa2-169e-4236-8330-0e9777a36fb0/master.m3u8`;

  return (
    <MediaPlayer
      title="My Video"
      src={hlsUrl}
      crossOrigin="anonymous"
      onQualitiesChange={}
      controls
      fullscreenOrientation="landscape"
    >
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};

export default VideoPage;
