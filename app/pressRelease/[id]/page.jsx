// import React from "react";
// import BreadCrumb from "@/components/breadCrumb";
// import RecentNews from "@/components/News/RecentNews";
// import PopularNews from "@/components/News/PopularNews";
// import Search from "@/components/Search";

// const PressReleaseDetails = ({ params }) => {
//   const { id } = params;
// console.log(id)
//   return (
//     <div className="">
//       {/* Main Section */}
//       <div className="bg-white w-full">
//         <div className="px-4 md:px-8 w-full py-8">
//           <div className="flex flex-wrap xl:flex-nowrap gap-6">
//             {/* Left Column (Press Release Content) */}
//             <div className="w-full xl:w-8/12">
//               <div className="w-full pr-0 xl:pr-4">
//                 <h1 className="text-3xl font-bold mb-4">
//                   Static Press Release Title {id}
//                 </h1>
//                 <img
//                   src="https://via.placeholder.com/800x400"
//                   alt="Press Release"
//                   className="w-full rounded mb-4"
//                 />
//                 <p className="text-gray-700 leading-relaxed mb-6">
//                   This is a static press release content for testing. Later, you
//                   can fetch real data using the <code>{`id`}</code> param.
//                 </p>
//               </div>
//             </div>

//             {/* Right Sidebar */}
//             <div className="w-full xl:w-4/12">
//               <div className="w-full pl-0 xl:pl-4">
//                 <div className="flex flex-col gap-y-6">
//                   <Search />
//                   <RecentNews />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom: Popular News */}
//           <div className="pt-6">
//             <PopularNews type="popular news" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PressReleaseDetails;


// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import axios from "axios";

// const PressReleaseDetails = () => {
//   const params = useParams();
//   const id = params?.id; 
//   const [pressRelease, setPressRelease] = useState(null);

//   useEffect(() => {
//     if (!id) return; 

//     const fetchPressRelease = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5500/api/news/get-news-on-category/${id}`
//         );
//         // console.log("Press Release Details:", res.data);
//         setPressRelease(res.data.pressRelease || res.data);
//       } catch (err) {
//         console.error("Error fetching press release:", err);
//       }
//     };

//     fetchPressRelease();
//   }, [id]);

//   if (!pressRelease) {
//     return <p className="text-center mt-10">Loading press release...</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto mt-10 px-4">
//       <h1 className="text-4xl font-bold mb-4">{pressRelease.title}</h1>
//       <img
//         src={pressRelease.imageUrl}
//         alt={pressRelease.title}
//         className="w-full h-auto mb-6"
//       />
//       <p className="text-gray-700 leading-relaxed">{pressRelease.content}</p>
//     </div>
//   );
// };

// export default PressReleaseDetails;


// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "next/navigation";

// const PressReleaseDetails = () => {
//   const params = useParams();
//   const id = params?.id;   // ✅ extract id properly
//   const [pressRelease, setPressRelease] = useState(null);

//   useEffect(() => {
//     const fetchPressRelease = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5500/api/news/get-news-categoryby-id/${id}`
//         );
//         setPressRelease(res.data.news || res.data);
//       } catch (err) {
//         console.error("Error fetching press release:", err);
//       }
//     };

//     if (id) {
//       fetchPressRelease();
//     }
//   }, [id]);

//   if (!pressRelease) {
//     return <p className="text-center text-gray-500">Loading...</p>;
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">{pressRelease.title}</h1>
//       <img
//         src={pressRelease.newsimage || "https://via.placeholder.com/800x400"}
//         alt={pressRelease.title}
//         className="w-full rounded mb-4"
//       />
//       <p>{pressRelease.description}</p>
//     </div>
//   );
// };

// export default PressReleaseDetails;


// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "next/navigation";
// import BreadCrumb from "@/components/breadCrumb";
// import RecentNews from "@/components/News/RecentNews";
// import PopularNews from "@/components/News/PopularNews";
// import Search from "@/components/Search";

// const PressReleaseDetails = () => {
//   const params = useParams();
//   const id = params?.id;
//   const [pressRelease, setPressRelease] = useState(null);

//   useEffect(() => {
//     const fetchPressRelease = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5500/api/news/get-news-categoryby-id/${id}`
//         );
//         setPressRelease(res.data.news || res.data);
//       } catch (err) {
//         console.error("Error fetching press release:", err);
//       }
//     };

//     if (id) {
//       fetchPressRelease();
//     }
//   }, [id]);

//   if (!pressRelease) {
//     return <p className="text-center text-gray-500 py-10">Loading...</p>;
//   }

//   return (
//     <div className="">
//       {/* Main Section */}
//       <div className="bg-white w-full">
//         <div className="px-4 md:px-8 w-full py-8">
//           <div className="flex flex-wrap xl:flex-nowrap gap-6">
//             {/* Left Column (Press Release Content) */}
//             <div className="w-full xl:w-8/12">
//               <div className="w-full pr-0 xl:pr-4">
//                 <h1 className="text-3xl font-bold mb-4">
//                   {pressRelease.title}
//                 </h1>
//                 <img
//                   src={
//                     pressRelease.newsimage ||
//                     "https://via.placeholder.com/800x400"
//                   }
//                   alt={pressRelease.title}
//                   className="w-full rounded mb-4"
//                 />
//                 <p className="text-gray-700 leading-relaxed mb-6">
//                   {pressRelease.description}
//                 </p>
//               </div>
//             </div>

//             {/* Right Sidebar */}
//             <div className="w-full xl:w-4/12">
//               <div className="w-full pl-0 xl:pl-4">
//                 <div className="flex flex-col gap-y-6">
//                   <Search />
//                   <RecentNews />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom: Popular News */}
//           <div className="pt-6">
//             <PopularNews type="popular news" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PressReleaseDetails;



"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import BreadCrumb from "@/components/BreadCrumb";
import RecentNews from "@/components/News/RecentNews";
import PopularNews from "@/components/News/PopularNews";
import Search from "@/components/Search";

const PressReleaseDetails = () => {
  const params = useParams();
  const id = params?.id;
  const [pressRelease, setPressRelease] = useState(null);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchPressRelease = async () => {
      try {
        const res = await axios.get(
          `${backendURL}/api/news/get-news-categoryby-id/${id}`
        );
        setPressRelease(res.data.news || res.data);
      } catch (err) {
        console.error("Error fetching press release:", err);
      }
    };

    if (id) {
      fetchPressRelease();
    }
  }, [id]);

  if (!pressRelease) {
    return <p className="text-center text-gray-500 py-10">Loading...</p>;
  }

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <BreadCrumb one="Press Release" two={pressRelease.title} />
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap xl:flex-nowrap gap-6">
            {/* Left Column (Press Release Content) */}
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <h1 className="text-2xl font-bold mb-4">
                  {pressRelease.title}
                </h1>

                <div className="relative">
                  <div className="float-left mr-4 mb-4">
                    <img
                      src={
                        pressRelease.newsimage ||
                        "https://via.placeholder.com/450x300"
                      }
                      alt={pressRelease.title}
                      className="rounded-md w-[450px] h-[300px] object-cover"
                    />
                  </div>

                  <div className="text-gray-700 leading-relaxed text-justify">
                    <p className="mb-4">{pressRelease.description}</p>

                    {/* Optional extra content wrapping around image */}
                   
                   
                  </div>
                  <div className="clear-both"></div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-6">
                  {/* <Search /> */}
                  <RecentNews />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Popular News */}
          <div className="pt-6">
            <PopularNews type="popular news" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressReleaseDetails;
