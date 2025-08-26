// // "use client"
// // import React, { useEffect, useState } from "react";
// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";
// // import SimpleNewsCards from "./items/SimpleNewsCards";
// // import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// // import axios from "axios";

// // const LatestNews = () => {

// //   const [news,setNews]=useState([])

// //   const responsive = {
// //     superLargeDesktop: {
// //       breakpoint: { max: 4000, min: 3000 },
// //       items: 1,
// //     },
// //     desktop: {
// //       breakpoint: { max: 3000, min: 1024 },
// //       items: 1,
// //     },
// //     tablet: {
// //       breakpoint: { max: 1024, min: 464 },
// //       items: 2,
// //     },
// //     mobile: {
// //       breakpoint: { max: 464, min: 0 },
// //       items: 1,
// //     },
// //   };

// //   const latest_news_get=async()=>{
// //     try {
// //       const res=await fetch(`http://localhost:5500/api/admin/get-latest-news`)
      
// //       const data=await res.json()
// //       // console.log(data)
// //       setNews(data.news)
// //       // console.log(data)

// //     } catch (error) {
// //       console.log(error)
// //     }
// //   }

// //   useEffect(()=>{
// //      latest_news_get()
// //   },[])

// //   const ButtonGroup = ({ next, previous }) => {
// //     return (
// //       <div className="flex justify-between items-center">
// //         <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-red-500 before:h-full before:-left-0 pl-3  ">
// //           Latest News
// //         </div>
// //         <div className="flex justify-center items-center gap-x-3 ">
// //           <button
// //             onClick={() => previous()}
// //             className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
// //           >
// //             <span>
// //               <FiChevronLeft />
// //             </span>
// //           </button>
// //           <button
// //             onClick={() => next()}
// //             className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
// //           >
// //             <span>
// //               <FiChevronRight />
// //             </span>
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2 ">
// //       <Carousel
// //         autoPlay={true}
// //         arrows={false}
// //         renderButtonGroupOutside={true}
// //         customButtonGroup={<ButtonGroup />}
// //         responsive={responsive}
// //         infinite={true}
// //         transitionDuration={500}
// //       >
// //         {
// //         news.map((item, i) => (
// //           <SimpleNewsCards item={item} key={i} type="latest" />
// //         ))
// //         }
// //       </Carousel>
// //     </div>
// //   );
// // };

// // export default LatestNews;



// "use client"
// import React, { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import SimpleNewsCards from "./items/SimpleNewsCards";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import axios from "axios";

// const LatestNews = () => {
//   const [news, setNews] = useState([]);

//   const responsive = {
//     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
//   };

//   const latest_news_get = async () => {
//     try {
//       const data = await axios.get("http://localhost:5500/api/admin/get-latest-news");
//       // const data = await res.json();
//       // Ensure news is always an array
//       setNews(data.news ? data.news : []);
//       console.log(data.news ? data.news : [])
//     } catch (error) {
//       console.log(error);
//       setNews([]); // fallback to empty array
//     }
//   };

//   useEffect(() => {
//     latest_news_get();
//   }, []);

//   const ButtonGroup = ({ next, previous }) => (
//     <div className="flex justify-between items-center">
//       <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-red-500 before:h-full before:-left-0 pl-3">
//         Latest News
//       </div>
//       <div className="flex justify-center items-center gap-x-3">
//         <button onClick={previous} className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200">
//           <FiChevronLeft />
//         </button>
//         <button onClick={next} className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200">
//           <FiChevronRight />
//         </button>
//       </div>
//     </div>
//   );

//   if (!news.length) return null; // don't render carousel if empty

//   return (
//     <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2">
//       <Carousel
//         autoPlay
//         arrows={false}
//         renderButtonGroupOutside
//         customButtonGroup={<ButtonGroup />}
//         responsive={responsive}
//         infinite
//         transitionDuration={500}
//       >
//         {(news || [])?.map((item, i) => (
//           <SimpleNewsCards item={item} key={i} type="latest" />
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default LatestNews;
"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SimpleNewsCards from "./items/SimpleNewsCards";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import axios from "axios";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // Fetch latest news
  const latest_news_get = async () => {
    try {
      const res = await axios.get(`${backendURL}/api/admin/get-latest-news`);
      // Axios wraps response in `res.data`
      const fetchedNews = res.data.news || [];
      setNews(fetchedNews);
      // console.log(fetchedNews)
      // console.log("Latest news:", fetchedNews);
    } catch (error) {
      console.error("Error fetching latest news:", error);
      setNews([]);
    }
  };

  useEffect(() => {
    latest_news_get();
  }, []);

  // Custom buttons for carousel
  const ButtonGroup = ({ next, previous }) => (
    <div className="flex justify-between items-center mb-4">
      <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-red-500 before:h-full before:-left-0 pl-3">
        Latest News
      </div>
      <div className="flex gap-3">
        <button
          onClick={previous}
          className="w-[30px] h-[30px] flex justify-center items-center bg-white border border-slate-200 rounded"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={next}
          className="w-[30px] h-[30px] flex justify-center items-center bg-white border border-slate-200 rounded"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );

  if (!news.length) return null; // Don't render carousel if no news

  return (
    <div className="w-full flex flex-col-reverse pr-0 lg:pr-2">
      <Carousel
        autoPlay
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        infinite
        transitionDuration={500}
      >
        {news.map((item, i) => (
          <SimpleNewsCards item={item} key={i} type="latest" />
          
        ))}
      </Carousel>
    </div>
  );
};

export default LatestNews;
