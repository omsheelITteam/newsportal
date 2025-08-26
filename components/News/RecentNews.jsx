// import React from "react";
// import NewsCard from "./items/NewsCard";
// import Title from "../Title";

// const RecentNews = async () => {
//   const res = await fetch(`http://localhost:5500/api/admin/get-recent-news`, {
//     next: {
//       revalidate: 1,
//     },
//   });
//   const news  = await res.json();
//   console.log(news)

//   return (
//     <div className="w-full flex flex-col gap-y-[14px]  pt-4">
//       <div className="pl-4">
//         <Title title="Recent news" />
//       </div>
//       <div className="grid grid-cols-1  gap-y-3 px-3">
//         {
//         news&& news.length>0 && news.map((item, i) => (
//           <NewsCard key={i} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentNews;



"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./items/NewsCard";
import Title from "../Title";

const RecentNews = () => {
  const [news, setNews] = useState([]);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${backendURL}/api/admin/get-recent-news`);
        if (res.data?.success) {
          setNews(res.data.data); 
          console.log(res.data?.data)
        }
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full flex flex-col gap-y-[14px] pt-4">
      <div className="pl-4">
        <Title title="Recent news" />
      </div>
      <div className="grid grid-cols-1 gap-y-3 px-3">
        {news.length > 0 &&
          news.map((item, i) => (
            <NewsCard key={i} item={item.value || item} /> 
          ))}
      </div>
    </div>
  );
};

export default RecentNews;
