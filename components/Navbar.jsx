// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { AiOutlineSearch } from "react-icons/ai";
// import { IoClose } from "react-icons/io5";
// import { BsList } from "react-icons/bs";
// import axios from "axios";

// const Navbar = () => {
//   const path = usePathname();

//   // const data = [
//   //   { id: 1, name: "news" },
//   //   { id: 2, name: "sports" },
//   //   { id: 3, name: "Interviews" },
//   //   { id: 4, name: "innovation" },
//   //   // { id: 4, name: "Education" },
//   //   { id: 5, name: "Technology" },
//   //   // { id: 6, name: "Travel" },
//   //   { id: 6, name: "Contact Us"}
//   // ];

// const [categories, setCategories] = useState([]);

// const get_categories = async () => {
//   try {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category/all`);
   
//     setCategories(res.data.categories);
//     // console.log(res.data.categories)
   
//   } catch (error) {
//     console.error("Axios error fetching categories:", error);
//   }
// };

// useEffect(() => {
//   get_categories();
// }, []);


//   const [show, setShow] = useState(false);
//   const [view, setView] = useState(false);

//   return (
//     <div className="w-full">
//       <div className="bg-[#facc15] w-full text-white uppercase font-semibold relative">
//         <div className="px-8 flex justify-between items-center relative h-[48px]">
//           <div
//             onClick={() => setView(!view)}
//             className={`text-3xl flex lg:hidden font-bold h-full w-[48px] cursor-pointer justify-center items-center ${
//               view ? "bg-[#00000030]" : ""
//             } hover:bg-[#00000030]`}
//           >
//             <BsList />
//           </div>
//           <div className="flex-wrap hidden lg:flex">
//             <Link
//               className={`px-6 font-medium py-[13px] ${
//                 path === "/" ? "bg-[#00000030]" : ""
//               }`}
//               href="/"
//             >
//               Home
//             </Link>
//             {
            
//             categories.length>0 && categories.map((c,i) => 
//               <Link
//                 key={i}
//                 href={`/news/category/${c.category}`}
//                 className={`px-6 font-medium py-[13px] ${
//                   path === c.category ? "bg-[#00000030]" : ""
//                 }`}
//               >
//                 {c.category}
//               </Link>
//             )}
//           </div>

//           <div className="h-full w-[48px]">
//             <div
//               onClick={() => setShow(!show)}
//               className={`text-xl ${
//                 show ? "bg-[#00000030]" : ""
//               } font-bold h-full w-full cursor-pointer flex justify-center items-center hover:bg-[#00000030]`}
//             >
//               {show ? <IoClose /> : <AiOutlineSearch />}
//             </div>

//             <div
//               className={`absolute lg:block transition-all text-slate-500 z-20 shadow-lg lg:right-10 top-[50px] w-full lg:w-auto right-0 ${
//                 show ? "visible" : "invisible"
//               }`}
//             >
//               <div className="p-3 bg-white">
//                 <div className="flex flex-col sm:flex-row gap-2">
//                   <div className="w-full  sm:w-[250px] md:w-[300px] lg:w-[350px] h-[40px]">
//                     <input
//                       type="text"
//                       placeholder="Search"
//                       className="h-full w-full p-2 border border-slate-400 outline-none bg-slate-100 text-sm"
//                     />
//                   </div>
//                   <div className="w-full sm:w-[45px] h-[40px] flex justify-center items-center bg-red-600 text-white text-xl cursor-pointer hover:bg-amber-700">
//                     <AiOutlineSearch />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {view && (
//         <div className="flex flex-wrap lg:hidden py-2 px-[30px]">
//           <Link
//             className={`px-4 font-medium py-[5px] ${
//               path === "/" ? "bg-[#00000030]" : ""
//             }`}
//             href="/"
//           >
//             Home
//           </Link>
//           {data.map((c) => (
//             <Link
//               key={c.id}
//               href="/"
//               className={`px-4 font-medium py-[5px] ${
//                 path === c.name ? "bg-[#00000030]" : ""
//               }`}
//             >
//               {c.category}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ For dynamic breadcrumb
import newsLogo from "../assets/newsLogo.jpg";
import NewsLogo from "../assets/navLogo.png";
import { CiClock1, CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import WeatherAPI from "./WeatherApi";
import { CiBellOn, CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ✅ Correct Breadcrumb import
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const pathname = usePathname(); // ✅ Get current route
 const [query, setQuery] = useState("");
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };
  useEffect(() => {
    setMounted(true);

    const updateTime = () =>
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );

    const now = new Date();
    setCurrentDate(now.toDateString());
    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  // ✅ Generate breadcrumb items dynamically from pathname
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <>
      <div className="flex items-center justify-around gap-5 mt-5 cursor-pointer">
        {/* Time + Date */}
        <div className="hidden sm:hidden md:flex items-center gap-3 text-xs text-gray-600 font-medium">
          <div className="flex items-center gap-1">
            <CiClock1 className="text-black text-lg font-bold" />
            {currentTime} IST
          </div>
          <div>{currentDate}</div>
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-black text-lg font-bold" />
            <WeatherAPI />
          </div>
        </div>

        {/* Sign In */}
        <div className="hidden sm:hidden text-xs text-gray-600 font-medium md:flex items-center gap-3">
          <Link href={"/pages/signuppage"}>Sign In</Link>
          <p className="text-xs bg-yellow-500 text-white rounded p-1 outline-none flex items-center gap-1">
            <CiBellOn className="text-sm font-bold" />
            Subscribe To MSN
          </p>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:hidden md:flex flex-row gap-2">
          <p className="border rounded-full hover:text-blue-500 p-1">
            <FaFacebookF />
          </p>
          <p className="border rounded-full hover:text-pink-500 p-1">
            <FaInstagram />
          </p>
          <p className="border rounded-full hover:text-blue-500 p-1">
            <BsTwitterX />
          </p>
          <p className="border rounded-full hover:text-red-500 p-1">
            <FaYoutube />
          </p>
          <p className="border rounded-full hover:text-blue-500 p-1">
            <FaLinkedinIn />
          </p>
        </div>

        {/* Mobile Header */}
        <div className="flex flex-row items-center justify-between gap-5 w-full md:hidden">
          <div className="text-black font-bold">
            My <span className="text-lg text-yellow-600">Startup</span>NEWS
          </div>
          <div className="flex items-center gap-5">
            <div>
              <Link
                href="/pages/signuppage"
                className="text-sm font-medium text-gray-600"
              >
                Sign In
              </Link>
            </div>

            <div className="group flex items-center bg-yellow-400 h-[30px] rounded-full px-2 transition-all duration-300 w-[40px] hover:w-[160px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-0 group-hover:w-full transition-all duration-300 bg-transparent outline-none border-none text-sm"
              />
              <a href="#" className="ml-2 text-black">
                <CiSearch />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="hidden sm:hidden md:block border-amber-400 bg-amber-500 h-0.5 w-5/6 mx-auto rounded mt-2" />

      <div className="flex justify-evenly items-center text-center mt-2">
        <Image
          src={newsLogo}
          alt="Mystartup NEWS"
          className="h-[90px] w-[300px] "
          priority
        />
      </div>

      <div className="container flex items-center justify-around cursor-pointer overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap sm:text-xs">
          <Link href={"/"}>
            <Image
              src={NewsLogo}
              alt="My Startup NEWS"
              className="h-[40px] w-[40px]"
              priority
            />
          </Link>

          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/pressRelease"}>Press Release</Link>
          </div>
          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/incubator"}>Incubator</Link>
          </div>
          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/msme"}>MSME</Link>
          </div>
          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/technology"}>Technology</Link>
          </div>
          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/awards"}>Awards</Link>
          </div>
          <Link
            href={"/magazines"}
            className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold"
          >
            Magazines
          </Link>
          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/videos"}>Videos</Link>
          </div>
          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/sports"}>Sports</Link>
          </div>
          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/entertainment"}>Entertainment</Link>
          </div>
          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/travel"}>Travel</Link>
          </div>
          <div className="hover:border-b-2 border-yellow-500 hover:text-yellow-500 text-sm font-semibold ">
            <Link href={"/health"}>Health</Link>
          </div>
        </div>

        <div className="hidden md:flex group items-center bg-yellow-400 h-[30px] rounded-full px-2 transition-all duration-300 w-[40px] hover:w-[200px]">
          <input
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search..."
            onKeyPress={handleKeyPress}
            className="w-0 group-hover:w-full transition-all duration-300 bg-transparent outline-none border-none text-sm"
          />
          <a href="#" className="ml-2 text-black">
            <CiSearch />
          </a>
        </div>
      </div>

      <hr className="border-amber-400 bg-amber-500 h-0.5 w-5/6 mx-auto rounded mt-0.5" />


      {pathname !== "/" && (
        <div className="max-w-7xl mx-auto px-4 py-2 mt-4">
          {/* <Breadcrumb aria-label="Dynamic breadcrumb example">
            <BreadcrumbItem href="/" icon={HiHome}>
              Home
            </BreadcrumbItem>
            {pathParts.map((part, index) => {
              const href = "/" + pathParts.slice(0, index + 1).join("/");
              const label = part.charAt(0).toUpperCase() + part.slice(1);
              return (
                <BreadcrumbItem key={index} href={href}>
                  {label}
                </BreadcrumbItem>
              );
            })}
          </Breadcrumb> */}
        </div>
      )}
    </>
  );
};

export default Navbar;




