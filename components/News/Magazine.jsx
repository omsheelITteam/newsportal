// "use client";
// import React, { useEffect, useState } from "react";
// import Title from "../Title"; // adjust path if needed
// import SimpleDetailsNewsCard from "../News/items/SimpleDetailsNewsCard"; 

// const Magazines = () => {
//   const [magazines, setMagazines] = useState([]);

//   // Fetch magazines from your backend API
//   useEffect(() => {
//     const fetchMagazines = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/magazine/all`);
//         const data = await res.json();
//         console.log(data.magazines);
//         setMagazines(data.magazines || []);
//       } catch (error) {
//         console.error("Failed to fetch magazines", error);
//       }
//     };

//     fetchMagazines();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="w-full pb-8 mt-5">
//         <div className="flex flex-col w-full gap-y-[14px]">
//           <Title title="Magazine" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3">
//             {magazines.slice(0, 4).map((item, i) => (
//               <SimpleDetailsNewsCard
//                 news={item}
//                 type="magazine"
//                 item={item}
//                 key={i}
//                 height={250}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Magazines;




"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Magazine = () => {
  const [magazines, setMagazines] = useState([]);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchMagazines = async () => {
    try {
      const { data } = await axios.get(`${backendURL}/api/news/get-magazine`);
      // console.log("Fetched magazines:", data.magazines);
      setMagazines(data.magazines);
    } catch (err) {
      console.error("Failed to fetch magazines", err);
    }
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {magazines.map((magazine) => (
        <div
          key={magazine._id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <Link href={`/magazines/${magazine._id}`}>
            <img
              className="rounded-t-lg w-full h-48 object-cover cursor-pointer"
              src={
                magazine.type === "file"
                  ? `http://localhost:5000${magazine.fileUrl}`
                  : magazine.fileUrl
              }
              alt={magazine.title}
            />
          </Link>
          <div className="p-5">
            <Link href={`/magazines/${magazine._id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {magazine.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {magazine.description?.slice(0, 100)}...
            </p>
            <Link
              href={`/magazines/${magazine._id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Read
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Magazine;

