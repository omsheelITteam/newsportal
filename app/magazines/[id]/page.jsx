// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import axios from "axios";
// import Image from "next/image";

// const MagazineDetail = () => {
//   const { id } = useParams();
//   const [magazine, setMagazine] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMagazine = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:5500/api/news/get-magazine/${id}`);
//         if (data.success) {
//           setMagazine(data.magazine);
//         } else {
//           setError(data.message || "Magazine not found");
//         }
//       } catch (err) {
//         setError("Failed to fetch magazine");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchMagazine();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64 text-gray-700">
//         Loading magazine...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-64 text-red-600">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
//       <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
//         {magazine.title}
//       </h1>

//       {/* Display magazine cover */}
//       {magazine.magazinecoverpic && (
//         <div className="w-full mb-4 flex justify-center">
//           <Image
//             src={magazine.magazinecoverpic} // Cloudinary URL or backend file
//             alt={magazine.title}
//             width={400}
//             height={500}
//             className="object-contain rounded"
//           />
//         </div>
//       )}

//       <p className="text-gray-700 dark:text-gray-300 text-justify mb-6">
//         {magazine.description || "No description available."}
//       </p>

//       {/* File link */}
//       {magazine.type === "file" && magazine.fileUrl && (
//         <div className="flex justify-center">
//           <a
//             href={`http://localhost:5500${magazine.fileUrl}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
//           >
//             View PDF
//           </a>
//         </div>
//       )}

//       {/* URL link */}
//       {magazine.type === "url" && magazine.link && (
//         <div className="flex justify-center">
//           <a
//             href={magazine.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//           >
//             Visit Online Magazine
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MagazineDetail;
