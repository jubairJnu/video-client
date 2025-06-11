"use client";

import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import Hls from "hls.js";

const PlyrPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
      
        playerRef.current = new Plyr(videoRef.current, {
          controls: [
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "settings",
            "fullscreen",
          ],
          settings: ["quality", "speed"],
          quality: {
            default: 720,
            options: hls.levels
              .map((level) => level.height)
              .filter((v, i, a) => a.indexOf(v) === i), // unique heights
            forced: true,
            onChange: (newQuality) => {
              // Change 
              const levelIndex = hls.levels.findIndex(
                (level) => level.height === newQuality
              );
              hls.currentLevel = levelIndex;
            },
          },
        });
      });

      return () => {
        if (playerRef.current) playerRef.current.destroy();
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      videoRef.current.src = src;
      playerRef.current = new Plyr(videoRef.current);
    }
  }, [src]);

  return <video ref={videoRef} className="plyr-react plyr" playsInline />;
};

export default PlyrPlayer;
