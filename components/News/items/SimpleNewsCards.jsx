

import React from "react";
import Image from "next/image";
import Link from "next/link";
const SimpleNewsCards = ({item,type}) => {
    const newsItem = item.value;
const imageUrl = item?.newsimage || newsItem?.imageUrl ;
// console.log(newsItem)
  return (
    <div className="group relative  ">
      <div className="overflow-hidden">
        <div className={`${type ? "h-[270px] sm:h-[470px]" : "h-[228px]"} w-full group-hover:scale-[1.1] transition-all duration-[1s]`}>
          <Image
          
            fill
            src={item?.newsimage || newsItem?.imageUrl }
            alt="images"
           
            style={{ objectFit: "cover", backgroundRepeat:"no-repeat" }}
          
          />
        </div>
      </div>
      <div
        className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"
       
      >
        {" "}
      </div>
      <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-black font-semibold gap-y-2">
        <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-amber-300">
          {item?.category || newsItem?.category}
        </div>
        <Link   href={`/news/${item?.slug}`} className=" text-xl text-white hover:text-yellow-500">{item?.title || newsItem?.title }</Link>
        <div className="flex gap-x-2 text-sm font-normal">
            <span className="text-black">
  {item?.createdat
    ? new Date(item.createdat).toLocaleDateString()
    : "Unknown Date" || newsItem?.createdAt ? new Date(newsItem?.createdAt).toLocaleDateString():""}
</span>

            <span className="text-black">{item?.writername || newsItem?.writername}</span>
            
        </div>
         {/* {type === "details-news" && (
                  <div className="text-sm text-slate-600 pt-3">
                    {parse((news?.description || "").slice(0, 210))}
                  </div>
                )} */}
      </div>
    </div>
  );
};

export default SimpleNewsCards;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SimpleNewsCards = ({ item, type }) => {
//   const newsItem = item.value;
// const imageUrl = newsItem?.imageUrl || "/fallback-image.jpg";
//   return (
//     <div className="group relative">
//       <div className="overflow-hidden">
//         <div className={`${type ? "h-[270px] sm:h-[470px]" : "h-[228px]"} w-full group-hover:scale-[1.1] transition-all duration-[1s]`}>
//           <Image
//             fill
//             src={imageUrl}
//             alt={newsItem?.title || "news image"}
//             style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
//           />
//         </div>
//       </div>

//       <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>

//       <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2">
//         <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-amber-300">
//           {newsItem?.category || "General"}
//         </div>
//         <Link href={`/news/${newsItem?.slug || "#"}`} className="text-xl text-white hover:text-yellow-500">
//           {item?.title || "No Title"}
//         </Link>
//         <div className="flex gap-x-2 text-sm font-normal">
//           <span>
//   {newsItem?.createdAt
//     ? new Date(newsItem.createdAt).toLocaleDateString()
//     : "Unknown Date"}
// </span>

//           <span>{newsItem?.writername || "Unknown Writer"}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SimpleNewsCards;



// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SimpleNewsCards = ({ item, type }) => {
//   const newsItem = item.value; // if your SQL returns { n: {...} }
//   const imageUrl = newsItem?.imageUrl || "/fallback-image.jpg";

//   return (
//     <div className="group relative">
//       <div className="overflow-hidden">
//         <div
//           className={`${
//             type ? "h-[270px] sm:h-[470px]" : "h-[228px]"
//           } w-full group-hover:scale-[1.1] transition-all duration-[1s]`}
//         >
//           <Image
//             fill
//             src={imageUrl}
//             alt={newsItem?.title || "news image"}
//             style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
//           />
//         </div>
//       </div>

//       <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>

//       <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2">
//         <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-amber-300">
//           {newsItem?.category || "General"}
//         </div>
//         <Link
//           href={`/news/${newsItem?.slug || "#"}`}
//           className="text-xl text-white hover:text-yellow-500"
//         >
//           {newsItem?.title || "No Title"}
//         </Link>
//         <div className="flex gap-x-2 text-sm font-normal">
//           <span>
//             {newsItem?.createdAt
//               ? new Date(newsItem.createdAt).toLocaleDateString()
//               : "Unknown Date"}
//           </span>

//           <span>{newsItem?.writername || "Unknown Writer"}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SimpleNewsCards;
