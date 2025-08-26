// "use client";
// import React, { useEffect, useState } from "react";
// import Magazine from "../News/Magazine";

// const MagazinesPage = () => {
//   const [magazines, setMagazines] = useState([]);

//   // Fetch magazines from your backend API
//   useEffect(() => {
//     const fetchMagazines = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/magazine/all"); 
//         const data = await res.json();
//         console.log(data.Magazine)
//         setMagazines(data.magazines || []);
//       } catch (error) {
//         console.error("Failed to fetch magazines", error);
//       }
//     };

//     fetchMagazines();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <Magazine type="magazine" news={magazines} />
//     </div>
//   );
// };

// export default MagazinesPage;
