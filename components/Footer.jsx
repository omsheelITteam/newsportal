
// import React from "react";
// import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
//       <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
//         <div className="lg:w-1/3">
//           <a
//             rel="noopener noreferrer"
//             href="/home"
//             className="flex justify-center space-x-3 lg:justify-start"
//           >
//             <span className="self-center  text-2xl font-semibold">
//               My StartUp <span className="text-yellow-300">News</span>
//             </span>
//           </a>
//         </div>

//         {/* Footer Links */}
//         <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
//           <div className="space-y-3">
//             <h3 className="tracking-wide uppercase font-semibold dark:text-gray-900">
//               Business
//             </h3>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#">OTT</a>
//               </li>
//               <li>
//                 <a href="#">Media</a>
//               </li>
//               <li>
//                 <a href="#">Dadi</a>
//               </li>
//               <li>
//                 <a href="#">FAQ</a>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-3">
//             <h3 className="tracking-wide uppercase  font-semibold dark:text-gray-900">
//               Company
//             </h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link href="/privacy">Privacy</Link>
//               </li>
//               <li>
//                 <a href="#">Terms of Service</a>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-3">
//             <h3 className="uppercase font-semibold dark:text-gray-900">
//               Contact Us
//             </h3>
//             <ul className="space-y-1">
//               {/* <li>
//                 <a href="#">+91 73372 23376</a>
//               </li> */}
//               <li>
//                 <a
//                   className="text-blue-500"
//                   href="https://mail.google.com/mail/?view=cm&fs=1&to=sharemystory@mystratuptv.in,editor@mystartuptv.in"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   sharemystory@mystratuptv.in
//                   <br />
//                   editor@mystartuptv.in
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div className="space-y-3">
//             <h3 className="uppercase font-semibold dark:text-gray-900">
//               Social media
//             </h3>
//             <div className="flex justify-start space-x-4 text-xl">
//               <a
//                 href="https://www.facebook.com/mystartuptvin/"
//                 title="Facebook"
//                 className="text-blue-600 hover:scale-110 transition-transform"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="https://x.com/mystartuptvin/"
//                 title="Twitter"
//                 className="text-sky-500 hover:scale-110 transition-transform"
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="https://www.instagram.com/mystartuptvin/?hl=en"
//                 title="Instagram"
//                 className="text-pink-500 hover:scale-110 transition-transform"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://www.youtube.com/@MyStartupTV"
//                 title="YouTube"
//                 className="text-red-600 hover:scale-110 transition-transform"
//               >
//                 <FaYoutube />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="py-6 text-sm text-center dark:text-gray-600">
//         © 2025{" "}
//         <a
//           className="text-pink-400 font-semibold text-[16px]"
//           href="https://www.omsheelgroup.in/"
//         >
//           Omsheel
//         </a>
//         . All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import navbarLogo from "../assets/navLogo.png";
import { RiTelegram2Line,RiTwitterXFill  } from "react-icons/ri";
import { FaYoutube  } from "react-icons/fa6";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white text-black shadow-lg ">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Image
              src={navbarLogo}
              alt="MyStartupNEWS"
              className="w-[50px] h-[50px]"
            />
            <div>
              <h2 className="text-2xl font-bold text-yellow-400">
                MyStartupNEWS
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                The Voice of Indian Startups
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-10 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-12 w-full">
            {/* Newsletter */}
            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>
                <div className="flex items-center rounded-lg overflow-hidden border border-gray-700">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-100 text-black border-none focus:ring-0 sm:text-sm"
                  />
                  <button className="bg-yellow-400 px-6 py-3  font-bold text-white uppercase hover:bg-yellow-500 transition flex items-center gap-2">
                   <span>Send</span>  <RiTelegram2Line className="text-2xl text-white "/>

                  </button>
                </div>
              </form>
            </div>

            {/* Links */}
            <div>
              <p className="font-bold text-yellow-400">Quick Links</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                <li><a href="/pressRelease" className="hover:text-yellow-400">Press Release</a></li>
                <li><a href="/incubator" className="hover:text-yellow-400">Incubator</a></li>
                <li><a href="/msme" className="hover:text-yellow-400">MSME</a></li>
                <li><a href="/awards" className="hover:text-yellow-400">Awards</a></li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-yellow-400">Company</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="/aboutUs" className="hover:text-yellow-400">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400">Meet the Team</a></li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-yellow-400">Support</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                <li><a href="/feedBack" className="hover:text-yellow-400">Feedback</a></li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-yellow-400">Legal</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href={"/privacyPage"} className="hover:text-yellow-400">Privacy Policy</a></li>
                <li><a href={"/termsandcondition"} className="hover:text-yellow-400">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-lg  ">
            &copy; {new Date().getFullYear()} <span className="text-amber-400">MyStartupNEWS</span>. All rights reserved.
          </p>
          <div className="flex gap-5">
                     <a
                       className="w-[40px] h-[40px] flex justify-center items-center bg-[#ffffff2b]  text-blue-400 hover:scale-110 transition-transform"
                       href="https://www.facebook.com/mystartuptvin/"
                     >
                       <FaFacebookF />
                     </a>
                     <a
                       className="w-[40px] h-[40px] flex justify-center items-center bg-[#ffffff2b] text-blue-600 hover:scale-110 transition-transform"
                       href="https://x.com/mystartuptvin/"
                     >
                       <AiOutlineTwitter />
                     </a>
                     <a
                       href="https://www.instagram.com/mystartuptvin/?hl=en"
                       title="Instagram"
                       className="text-pink-500 w-[40px] h-[40px] flex justify-center items-center bg-[#ffffff2b] hover:scale-110 transition-transform"
                     >
                       <FaInstagram />
                     </a>
                     <a
                       className="w-[40px] h-[40px] flex justify-center items-center bg-[#ffffff2b] text-red-500 hover:scale-110 transition-transform"
                       href="https://www.youtube.com/@MyStartupTV"
                     >
                       <AiFillYoutube />
                     </a>
            <a href="#" className=" hover:scale-110 transition  rounded-full px-2 py-2"><FaLinkedinIn  className="text-xl"/></a>
            <a href="#" className=" hover:scale-110 transition rounded-full px-2 py-2"><CiGlobe className="text-xl "/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;