// "use client";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
 
//   useEffect(() => {
//     if (!query) return;

//     const fetchResults = async () => {
//       try {
//         const res = await axios.get(
//           `${backendURL}/api/news/getNewsbySearch?search=${query}`
//         );
//         setResults(res.data.news || []);
//         console.log(res.data.news)
//       } catch (err) {
//         console.error("Search failed", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchResults();
//   }, [query]);

//   if (loading) return <div className="p-6 text-center">Loading...</div>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">
//         Search results for: <span className="text-yellow-600">{query}</span>
//       </h2>

//       {results.length === 0 ? (
//         <p>No results found.</p>
//       ) : (
//         <ul className="space-y-4">
//           {results.map((item) => (
//             <li
//               key={item.id}
//               className="p-4 border rounded-lg shadow hover:shadow-md transition"
//             >
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <span>{item.newsimage}</span>
//               <p className="text-sm text-gray-600">
//                 {item.description || "No description available"}
//               </p>
//               <p className="text-xs text-gray-500 mt-1">
//                 {item.category} • {item.writername}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchPage;


// "use client";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";
// import Image from "next/image";

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

//   useEffect(() => {
//     if (!query) return;

//     const fetchResults = async () => {
//       try {
//         const res = await axios.get(
//           `${backendURL}/api/news/getNewsbySearch?search=${query}`
//         );
//         setResults(res.data.news || []);
//         // console.log(res.data.news);
//       } catch (err) {
//         console.error("Search failed", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchResults();
//   }, [query]);

//   if (loading) return <div className="p-6 text-center">Loading...</div>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">
//         Search results for: <span className="text-yellow-600">{query}</span>
//       </h2>

//       {results.length === 0 ? (
//         <p>No results found.</p>
//       ) : (
//         <ul className="space-y-4">
//           {results.map((item) => (
//             <li
//               key={item.id || item.news_id} // ✅ safer key
//               className="p-4 border rounded-lg shadow hover:shadow-md transition "
//             >
//               <h3 className="text-lg font-semibold text-center">{item.title}</h3>

//               {item.newsimage && (
//                 <div className="my-2 flex justify-center items-center">
//                   {/* If stored as full URL */}
//                   <Image
//                     src={item.newsimage}
//                     alt={item.title}
//                     width={600}
//                     height={400}
//                     className="rounded-lg object-cover "
//                   />
//                 </div>
//               )}

//               <p className="text-sm text-gray-600">
//                 {item.description || "No description available"}
//               </p>
//               <p className="text-xs text-gray-500 mt-1">
//                 {item.category} • {item.writername}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchPage;


"use client";

import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}