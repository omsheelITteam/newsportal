// import React from 'react'
// import { AiOutlineSearch } from 'react-icons/ai'

// const Search = () => {
//   return (
//     <p></p>
//   )
// }
// export default Search

// "use client";

// import React, { useState, useEffect } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
// import axios from 'axios';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [news, setNews] = useState([]);

//   const fetchAllNews = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/all/news");
//       const flatNews = Object.values(res.data.news).flat();
//       setNews(flatNews);
//     } catch (error) {
//       console.error("Error fetching all news", error);
//     }
//   };

//   const handleSearch = async () => {
//     if (!query.trim()) return fetchAllNews();
//     try {
//       const res = await axios.get(`http://localhost:5000/api/news/search`, {
//         params: { search: query }
//       });
//       setNews(res.data.news || []);
//     } catch (err) {
//       console.error("Search error", err);
//     }
//   };

//   useEffect(() => {
//     fetchAllNews();
//   }, []);

//   return (
//     <>
//       {/* Original Search Bar Styling */}
//       <div className='p-4 bg-white'>
//         <div className='flex '>
//           <div className='w-[calc(100%-45px)] h-[45px]'>
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className='w-full h-full p-2 border border-slate-300 outline-none bg-slate-100'
//               placeholder="Search news..."
//             />
//           </div>
//           <div
//             className='w-[45px] h-[45px] flex justify-center items-center bg-red-600 hover:bg-red-700 text-white text-xl cursor-pointer'
//             onClick={handleSearch}
//           >
//             <AiOutlineSearch />
//           </div>
//         </div>
//       </div>

//       {/* Display News Results Below Search */}
//       <div className="p-4">
//         {news.length === 0 ? (
//           <p className="text-gray-500">No news found.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {news.map((item) => (
//               <div key={item._id} className="bg-white p-4 rounded shadow">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-48 object-cover rounded mb-3"
//                 />
//                 <h2 className="text-xl font-bold">{item.title}</h2>
//                 <p className="text-sm text-gray-600">
//                   {item.date} • {item.writerName}
//                 </p>
//                 <p className="mt-2 text-gray-700 line-clamp-3">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Search;




// "use client";


// import React, { useState } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
// import axios from 'axios';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     if (!query.trim()) return;

//     try {
//       const { data } = await axios.get(`http://localhost:5000/api/news/search?title=${query}`);
//       setResults(data.news);
//     } catch (err) {
//       console.error("Search failed:", err);
//     }
//   };

//   return (
//     <div className='p-4 bg-white'>
//       <div className='flex mb-4'>
//         <div className='w-[calc(100%-45px)] h-[45px]'>
//           <input
//             type="text"
//             className='w-full h-full p-2 border border-slate-300 outline-none bg-slate-100'
//             placeholder='Search News...'
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
//         <div
//           onClick={handleSearch}
//           className='w-[45px] h-[45px] flex justify-center items-center bg-red-600 hover:bg-red-700 text-white text-xl cursor-pointer'
//         >
//           <AiOutlineSearch />
//         </div>
//       </div>

//       {/* Display Results */}
//       <div>
//         {results.length > 0 ? (
//           results.map((news, i) => (
//             <div key={i} className="mb-2 p-2 border border-slate-300 rounded">
//               <p className='font-semibold'>{news.title}</p>
//               <p className='text-sm text-slate-600'>{news.category} - {news.date}</p>
//             </div>
//           ))
//         ) : (
//           query && <p className='text-slate-500'>No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;
