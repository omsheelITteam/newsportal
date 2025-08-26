


// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import axios from "axios";
// import Image from "next/image";
// import newsimage from "../../assets/navLogo.png";

// const MagazinesPage = () => {
//   const [magazines, setMagazines] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMagazines = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:5500/api/news/get-magazine"
//         );
//         setMagazines(data.magazines || []);
//         console.log(data.magazines)
//       } catch (err) {
//         console.error("Failed to fetch magazines", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMagazines();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <p className="text-lg font-semibold text-gray-600">
//           Loading magazines...
//         </p>
//       </div>
//     );
//   }

//   if (!loading && magazines.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center h-64">
//         <Image src={newsimage} alt="No Magazines" width={120} height={120} />
//         <p className="text-lg font-semibold text-yellow-600 mt-4">
//           No Magazines Uploaded Yet 📚
//         </p>
//       </div>
//     );
//   }

//   return (
//   <div className="p-4 flex flex-wrap justify-start gap-6">
//   {magazines.map((mag) => (
//     <Link
//       href={`/magazines/${mag.id}`}
//       key={mag.id} // unique key
//       className="bg-white p-4 rounded-xl shadow hover:scale-105 transition-transform duration-200 flex flex-col items-center w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%]"
//     >
//       <Image
//         src={mag.magazinecoverpic} // Cloudinary URL
//         alt={mag.title}
//         width={300} 
//         height={400} 
//         className="w-full h-auto object-contain rounded mb-2"
//       />
//       <h2 className="text-lg text-center font-semibold text-gray-800">{mag.title}</h2>
//       <p className="text-sm text-center text-gray-500 line-clamp-2">
//         {mag.description || "No description"}
//       </p>
//     </Link>
//   ))}
// </div>

//   );
// }

// export default MagazinesPage;



"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import newsimage from "../../assets/navLogo.png";

const MagazinesPage = () => {
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(true);

    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
 

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const { data } = await axios.get(`${backendURL}/api/news/get-magazine`);
        setMagazines(data.magazines || []);
        console.log(data.magazines)
      } catch (err) {
        console.error("Failed to fetch magazines", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMagazines();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg font-semibold text-gray-600">
          Loading magazines...
        </p>
      </div>
    );
  }

  if (!loading && magazines.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <Image src={newsimage} alt="No Magazines" width={120} height={120} />
        <p className="text-lg font-semibold text-yellow-600 mt-4">
          No Magazines Uploaded Yet 📚
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-wrap justify-start gap-6">
      {magazines.map((mag) => (
        <div
          key={mag.id} 
          className="bg-white p-4 rounded-xl shadow hover:scale-105 transition-transform duration-200 flex flex-col items-center w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] cursor-pointer"
        onClick={() => {
  if (mag.magazine) {
    window.open(mag.magazine, "_blank"); 
  }
}}
        >
          <Image
            src={mag.magazinecoverpic || newsimage} 
            alt={mag.title}
            width={300}
            height={400}
            className="w-full h-auto object-contain rounded mb-2"
          />
          <h2 className="text-lg text-center font-semibold text-gray-800">{mag.title}</h2>
          <p className="text-sm text-center text-gray-500 line-clamp-2">
            {mag.description || "No description"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MagazinesPage;
