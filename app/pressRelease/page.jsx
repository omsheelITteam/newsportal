
// "use client";
// import React, { useEffect, useState } from "react";
// import { Card } from "flowbite-react";
// import Link from "next/link";
// import axios from "axios";
// import img1 from "../../assets/News.png";

// const PressReleaseList = () => {
//   const [news, setNews] = useState([]);


//   const fetchNews = async () => {
//       try {
//         // Fetch by category name instead of non-existent endpoint
//         const category = "Press Release"; 
//         const res = await axios.get(
//           `http://localhost:5500/api/news/get-news-on-category/${encodeURIComponent(category)}`
//         );
//         console.log("API Response:", res.data);
//         setNews(res.data.news || res.data); 
//       } catch (err) {
//         console.error("Error fetching press releases:", err);
//       }
//     };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-2 mt-10">
//       <h1 className="text-3xl font-bold mb-6">Press Releases</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 w-full gap-2">
//         {news.length === 0 ? (
//           <p className="text-center text-gray-500">No press releases available.</p>
//         ) : (
//           news.map((item) => (
//             <Link key={item.news_id} href={`/pressRelease/${item.news_id}`}>
//               <Card
//                 className="w-full !rounded-none !shadow-none !m-0 !p-0 cursor-pointer hover:scale-[1.02] transition-transform"
//                 imgAlt={item.title}
//                 imgSrc={item.newsimage || img1.src}
//               >
//                 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   {item.title}
//                 </h5>
//                 <p className="font-normal text-gray-700 dark:text-gray-400">
//                   {item.description.slice(0,200) || "No description available."}
//                 </p>
//               </Card>
//             </Link>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default PressReleaseList;


"use client";
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Link from "next/link";
import axios from "axios";
import img1 from "../../assets/News.png";

const PressReleaseList = () => {
  const [news, setNews] = useState([]);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchNews = async () => {
    try {
      const category = "Press Release"; 
      const res = await axios.get(
        `${backendURL}/api/news/get-news-on-category/${encodeURIComponent(category)}`
      );
      // console.log("API Response:", res.data);
      setNews(res.data.news || res.data);
    } catch (err) {
      console.error("Error fetching press releases:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 mt-10">
      <h1 className="text-3xl font-bold mb-6">Press Releases</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 w-full gap-2">
        {news?.length === 0 ? (
          <p className="text-center text-gray-500">No press releases available.</p>
        ) : (
          news.map((item) => (
            <Link key={item?.id} href={`/pressRelease/${item?.id}`}>
              <Card
                className="w-full !rounded-none !shadow-none !m-0 !p-0 cursor-pointer hover:scale-[1.02] transition-transform"
                imgAlt={item.title}
                imgSrc={item?.newsimage || img1.src}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.description?.slice(0, 200) || "No description available."}
                </p>
              </Card>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default PressReleaseList;
