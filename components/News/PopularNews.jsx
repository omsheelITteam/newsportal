// import React from "react";
// import Title from "../Title";
// import SimpleDetailsNewsCard from "./items/SimpleDetailsNewsCard";

// const PopularNews = ({ type, news }) => {
//   // console.log(news)
//   return (
//     <div className=" w-full pb-8 mt-5">
//       <div className="flex flex-col w-full gap-y-[14px]">
//         <Title title="Top Stories" />
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3">
//           {news.map((item, i) => {

//             if (i < 4) {
//               return (
//                 <SimpleDetailsNewsCard
//                   news={item}
//                   type={type}
//                   item={item}
//                   key={i}
//                   height={250}
//                 />
//               );
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularNews;


"use client";
import React,{ useEffect, useState }  from "react";
import Title from "../Title";
import SimpleDetailsNewsCard from "./items/SimpleDetailsNewsCard";

const PopularNews =({ type }) => {

  //  const res= await fetch(`http://localhost:5500/api/admin/get-popular-news`,{
  //   next:{
  //     revalidate:1,
  //   }
  // })

  // const {news}= await res.json()
  // console.log(news)
  // console.log(news)

  const [news, setNews] = useState([]);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${backendURL}/api/admin/get-popular-news`);
        const { news } = await res.json();
        setNews(news || []);
      } catch (err) {
        console.error("Error fetching popular news:", err);
      }
    };

    fetchNews();
  }, []);
  return (
    <div className=" w-full pb-8 mt-5">
      <div className="flex flex-col w-full gap-y-[14px]">
        <Title title="Top Stories" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3">
          {
           news?.length>0 && news?.map((item, i) => {

            if (i < 4) {
              return (
                <SimpleDetailsNewsCard
                  news={item}
                  type={type}
                  item={item}
                  key={i}
                  height={250}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
