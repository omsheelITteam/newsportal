

import React from "react";
import BreadCrumb from "@/components/breadCrumb";
import RecentNews from "@/components/News/RecentNews";
import PopularNews from "@/components/News/PopularNews";
import Search from "@/components/Search";

const Videodetails=({ params })=> {
  const { id } = params;

  return (
    <div className="mx-24">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <BreadCrumb one="Awards" two={`Award ${id}`} />
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap xl:flex-nowrap gap-6">
            
            {/* Left Column */}
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <h1 className="text-3xl font-bold mb-4">
                  Static Award Details {id}
                </h1>
                <img
                  src="https://via.placeholder.com/800x400"
                  alt="Award"
                  className="w-full rounded mb-4"
                />
                <p className="text-gray-700 leading-relaxed mb-6">
                  This is a static award description for testing. Later, you can
                  fetch real data using the <code>{`id`}</code> param.
                </p>
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
}
export default Videodetails;