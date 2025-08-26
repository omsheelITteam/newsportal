// "use client";
// import { useState, useEffect } from 'react';

// const LiveVideo = ({ liveVideo, ytURL, extractYouTubeID }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isMinimized, setIsMinimized] = useState(false);

//   // Check if user has previously closed the video
//   useEffect(() => {
//     const videoHidden = sessionStorage.getItem('liveVideoHidden');
//     if (videoHidden === 'true') {
//       setIsVisible(false);
//     }
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//     // Remember user's choice for this session
//     sessionStorage.setItem('liveVideoHidden', 'true');
//   };

//   const handleMinimize = () => {
//     setIsMinimized(!isMinimized);
//   };

//   if (!isVisible || !liveVideo?.videolink) {
//     return null;
//   }

//   return (
//     <div className={`fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50 shadow-lg border border-gray-300 bg-black rounded-md overflow-hidden mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 transition-all duration-300 ${
//       isMinimized 
//         ? 'w-[200px] h-[40px]' 
//         : 'w-[250px] h-[140px] sm:w-[300px] sm:h-[170px]'
//     }`}>
      
//       {/* Control buttons */}
//       <div className="absolute top-1 right-1 flex gap-1 z-10">
//         <button
//           onClick={handleMinimize}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold transition-colors"
//           title={isMinimized ? "Expand" : "Minimize"}
//         >
//           {isMinimized ? '+' : '−'}
//         </button>
//         <button
//           onClick={handleClose}
//           className="bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold transition-colors"
//           title="Close"
//         >
//           ×
//         </button>
//       </div>

//       {/* Video content */}
//       {!isMinimized && (
//         <>
//           {liveVideo.videolink.includes("youtube.com") || liveVideo.videolink.includes("youtu.be") ? (
//             <iframe
//               className="w-full h-full"
//               src={
//                 liveVideo.videolink.includes("embed")
//                   ? liveVideo.videolink
//                   : `${ytURL}/embed/${extractYouTubeID(liveVideo.videolink)}`
//               }
//               title="Live Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           ) : (
//             <video className="w-full h-full" controls autoPlay muted src={liveVideo.videolink}></video>
//           )}
//         </>
//       )}

//       {/* Minimized state */}
//       {isMinimized && (
//         <div className="flex items-center justify-center h-full text-white text-sm px-2">
//           🔴 Live Video
//         </div>
//       )}
//     </div>
//   );
// };

// export default LiveVideo;




// "use client";
// import { useState, useEffect } from 'react';

// const LiveVideo = ({ liveVideo, ytURL, extractYouTubeID }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isMinimized, setIsMinimized] = useState(false);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   const handleMinimize = () => {
//     setIsMinimized(!isMinimized);
//   };

//   if (!isVisible || !liveVideo?.videolink) {
//     return null;
//   }

//   return (
//     <div className={`fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50 shadow-lg border border-gray-300 bg-black rounded-md overflow-hidden mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 transition-all duration-300 ${
//       isMinimized 
//         ? 'w-[200px] h-[40px]' 
//         : 'w-[250px] h-[140px] sm:w-[300px] sm:h-[170px]'
//     }`}>
      
//       {/* Control buttons */}
//       <div className="absolute -top-2 -right-2 flex gap-1 z-10">
//         <button
//           onClick={handleMinimize}
//           className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold transition-colors shadow-lg border-2 border-white"
//           title={isMinimized ? "Expand" : "Minimize"}
//         >
//           {isMinimized ? '+' : '−'}
//         </button>
//         <button
//           onClick={handleClose}
//           className="bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold transition-colors shadow-lg border-2 border-white"
//           title="Close"
//         >
//           ×
//         </button>
//       </div>

//       {/* Video content */}
//       {!isMinimized && (
//         <>
//           {liveVideo.videolink.includes("youtube.com") || liveVideo.videolink.includes("youtu.be") ? (
//             <iframe
//               className="w-full h-full"
//               src={
//                 liveVideo.videolink.includes("embed")
//                   ? liveVideo.videolink
//                   : `${ytURL}/embed/${extractYouTubeID(liveVideo.videolink)}`
//               }
//               title="Live Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           ) : (
//             <video className="w-full h-full" controls autoPlay muted src={liveVideo.videolink}></video>
//           )}
//         </>
//       )}

//       {/* Minimized state */}
//       {isMinimized && (
//         <div className="flex items-center justify-center h-full text-white text-sm px-2">
//           🔴 Live Video
//         </div>
//       )}
//     </div>
//   );
// };

// export default LiveVideo;