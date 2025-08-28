

"use client";
import React, { useEffect, useState, useRef } from "react";
import { Card } from "flowbite-react";
import axios from "axios";

// Turn YouTube URL into embed + JS API enabled
const getEmbedLink = (url) => {
  // const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!url) return "";
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  const origin =
    typeof window !== "undefined" ? `&origin=${encodeURIComponent(window.location.origin)}` : "";
  if (match) {
    return `https://www.youtube.com/embed/${match[1]}?enablejsapi=1&rel=0&playsinline=1${origin}`;
  }
  // If it's already an embed URL, make sure enablejsapi is present
  if (/youtube\.com\/embed\//.test(url) && !/[?&]enablejsapi=1/.test(url)) {
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}enablejsapi=1${origin}`;
  }
  return url;
};

const isVideoFile = (url) => /\.(mp4|webm|ogg)$/i.test(url);

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const htmlVideoRefs = useRef([]);    // <video> elements
  const iframeRefs = useRef([]);        // <iframe> elements
  const ytPlayers = useRef({});         // index -> YT.Player instance
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  // Fetch videos
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${backendURL}/api/news/get-live-video`);
        if (res.data?.success) setVideos(res.data.data || []);
      } catch (e) {
        console.error("Error fetching videos:", e);
      }
    })();
  }, []);

  // Load/initialize YouTube IFrame API and create players for iframes
  useEffect(() => {
    if (videos.length === 0) return;

    const initPlayers = () => {
      iframeRefs.current.forEach((el, i) => {
        if (!el) return;
        // Avoid re-initializing
        if (ytPlayers.current[i]) return;

        try {
          ytPlayers.current[i] = new window.YT.Player(el, {
            events: {
              onStateChange: (event) => {
                // When this iframe starts playing, pause all others
                if (event.data === window.YT.PlayerState.PLAYING) {
                  stopOthers(i);
                }
              },
            },
          });
        } catch (err) {
          // If construction fails, ensure entry is cleared
          console.warn("YT Player init failed:", err);
          delete ytPlayers.current[i];
        }
      });
    };

    // If API already loaded, init now; else load and init on callback
    if (typeof window !== "undefined" && window.YT && window.YT.Player) {
      initPlayers();
    } else {
      if (!document.getElementById("yt-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prev === "function") prev();
        initPlayers();
      };
    }

    // Cleanup on unmount
    return () => {
      Object.values(ytPlayers.current).forEach((p) => {
        try {
          p && p.destroy && p.destroy();
        } catch {}
      });
      ytPlayers.current = {};
    };
  }, [videos]);

  // Pause all other players except the one at currentIndex
  const stopOthers = (currentIndex) => {
    // Pause HTML5 videos
    htmlVideoRefs.current.forEach((v, i) => {
      if (i !== currentIndex && v && !v.paused) {
        v.pause();
        // optional: reset
        // v.currentTime = 0;
      }
    });
    // Pause YouTube players
    Object.keys(ytPlayers.current).forEach((key) => {
      const i = Number(key);
      if (i !== currentIndex) {
        const player = ytPlayers.current[i];
        if (player && typeof player.pauseVideo === "function") {
          player.pauseVideo();
        } else {
          // Fallback: postMessage (in case player object not ready yet)
          const iframe = iframeRefs.current[i];
          iframe?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
            "*"
          );
        }
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-2 mt-10">
      <h2 className="text-3xl font-bold mb-6">Live Videos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No live videos available.</p>
        ) : (
          videos.map((video, index) => {
            const url = video.videolink;
            const isFile = isVideoFile(url);
            return (
              <Card
                key={video.id || video._id || index}
                className="w-full !rounded-md !shadow-md hover:scale-[1.01] transition"
              >
                <div
                  className="w-full aspect-video bg-black"
                  // Pre-emptively pause others when user interacts with an iframe
                  onPointerDown={() => stopOthers(index)}
                >
                  {isFile ? (
                    <video
                      ref={(el) => (htmlVideoRefs.current[index] = el)}
                      src={url}
                      controls
                      className="w-full h-full"
                      // When this starts, stop the rest
                      onPlay={() => stopOthers(index)}
                    />
                  ) : (
                    <iframe
                      ref={(el) => (iframeRefs.current[index] = el)}
                      src={getEmbedLink(url)}
                      title={`Video ${index}`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  )}
                </div>

                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                  {video.title || `Live Video ${index + 1}`}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {video.description || "Latest live video from admin."}
                </p>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Videos;



// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { Card, Button } from "flowbite-react";
// import axios from "axios";

// const getEmbedLink = (url) => {
//   if (!url) return "";
//   const watchMatch = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
//   if (watchMatch) {
//     return `https://www.youtube.com/embed/${watchMatch[1]}?enablejsapi=1`;
//   }
//   return url;
// };

// const isVideoFile = (url) => /\.(mp4|webm|ogg)$/i.test(url);

// const Videos = () => {
//   const [videos, setVideos] = useState([]);
//   const videoRefs = useRef([]);
//   const ytPlayers = useRef({});

//   // Fetch videos
//   const fetchVideos = async () => {
//     try {
//       const res = await axios.get("http://localhost:5500/api/news/get-live-video");
//       if (res.data.success) {
//         setVideos(res.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   // Ensure YouTube Iframe API
//   useEffect(() => {
//     if (!window.YT) {
//       const tag = document.createElement("script");
//       tag.src = "https://www.youtube.com/iframe_api";
//       document.body.appendChild(tag);
//     }

//     window.onYouTubeIframeAPIReady = () => {
//       videos.forEach((video, index) => {
//         const url = video.videolink;
//         const idMatch = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
//         if (idMatch) {
//           ytPlayers.current[index] = new window.YT.Player(`yt-player-${index}`, {
//             events: {
//               onStateChange: (event) => {
//                 if (event.data === window.YT.PlayerState.PLAYING) {
//                   stopOthers(index);
//                 }
//               },
//             },
//           });
//         }
//       });
//     };
//   }, [videos]);

//   const stopOthers = (currentIndex) => {
//     videos.forEach((video, i) => {
//       if (i !== currentIndex) {
//         const ref = videoRefs.current[i];
//         if (ref && ref.pause) {
//           ref.pause();
//           ref.currentTime = 0;
//         } else if (ytPlayers.current[i] && ytPlayers.current[i].pauseVideo) {
//           ytPlayers.current[i].pauseVideo();
//         }
//       }
//     });
//   };

//   // Handle remove
//   const handleRemove = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5500/api/news/delete-live-video/${id}`);
//       setVideos((prev) => prev.filter((video) => video.id !== id));
//       console.log(id)
//     } catch (error) {
//       console.error("Error deleting video:", error);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-2 mt-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 w-full gap-4">
//         {videos.map((video, index) => {
//           const url = video.videolink;
//           const isFile = isVideoFile(url);

//           return (
//             <Card
//               key={video.id}
//               className="w-full !rounded-lg !shadow-md !m-0 !p-2 relative"
//             >
//               <div className="w-full aspect-video bg-black">
//                 {isFile ? (
//                   <video
//                     ref={(el) => (videoRefs.current[index] = el)}
//                     src={url}
//                     controls
//                     className="w-full h-full"
//                     onPlay={() => stopOthers(index)}
//                   />
//                 ) : (
//                   <iframe
//                     id={`yt-player-${index}`}
//                     ref={(el) => (videoRefs.current[index] = el)}
//                     src={getEmbedLink(url)}
//                     title={`Video ${index}`}
//                     className="w-full h-full"
//                     allow="autoplay; encrypted-media"
//                     allowFullScreen
//                   />
//                 )}
//               </div>
//               <div className="flex justify-between items-center mt-2 hover:cursor-pointer">
//                 <h5 className="text-lg font-bold text-gray-900 dark:text-white">
//                   {video.title || `Live Video ${index + 1}`}
//                 </h5>
//                 <Button
//                   size="xs"
//                   color="failure"
//                   className=""
//                   onClick={() => handleRemove(video.id)}
//                 >
//                   Remove
//                 </Button>
//               </div>
//               <p className="font-normal text-gray-700 dark:text-gray-400">
//                 Latest live video from admin.
//               </p>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Videos;
