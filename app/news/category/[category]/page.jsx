



// import BreadCrumb from "@/components/breadCrumb";
// import SimpleDetailsNewsCard from "@/components/News/items/SimpleDetailsNewsCard";
// import PopularNews from "@/components/News/PopularNews";
// import Search from "@/components/Search";
// import React from "react";
// import Title from "@/components/Title";
// import NewsCard from "@/components/News/items/NewsCard";
// import RecentNews from "@/components/News/RecentNews";

// const CategoryNews = async ({ params }) => {
//   const { category } = params;

//   // console.log("Category:", category);

//   const res = await fetch(`http://localhost:5500/api/category/news/${encodeURIComponent(category)}`, {
//     cache: "no-store",
//   });

//   const data = await res.json();
//   const categoryNewsData = data.news;
//   // console.log(categoryNewsData)

//   return (
//     <div className="">
//       {/* Breadcrumb */}
//       <div className="bg-white shadow-sm py-4">
//         <div className="px-4 md:px-8 w-full">
//           <BreadCrumb one="category" two={category} />
//         </div>
//       </div>

//       {/* Main Section */}
//       <div className="bg-white w-full">
//         <div className="px-4 md:px-8 w-full py-8">
//           <div className="flex flex-wrap xl:flex-nowrap gap-6">
            
//             {/* Left Column (News Cards) */}
//             <div className="w-full xl:w-8/12">
//               <div className="w-full pr-0 xl:pr-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {categoryNewsData.slice(0, 6).map((item, i) => (
//                     <SimpleDetailsNewsCard
//                       key={i}
//                       news={item}
//                       type="details-news"
//                       height={200}
//                     />
//                   ))}
//                 </div>
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

// export default CategoryNews;



import BreadCrumb from "@/components/breadCrumb";
import SimpleDetailsNewsCard from "@/components/News/items/SimpleDetailsNewsCard";
import PopularNews from "@/components/News/PopularNews";
import Search from "@/components/Search";
import RecentNews from "@/components/News/RecentNews";
import React from "react";

const CategoryNews = async ({ params }) => {
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { category } = params;
// console.log(category)
  // Fetch news by category
  const res = await fetch(
    `${backendURL}/api/news/get-news-bycategory?category=${encodeURIComponent(category)}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const categoryNewsData = data.news || [];
// console.log(categoryNewsData)
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <BreadCrumb one="category" two={category} />
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap xl:flex-nowrap gap-6">

            {/* Left Column (News Cards) */}
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryNewsData.slice(0, 6).map((item, i) => (
                    <SimpleDetailsNewsCard
                      key={i}
                      news={item}
                      type="details-news"
                      height={200}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-6">
                  <Search />
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

export default CategoryNews;
