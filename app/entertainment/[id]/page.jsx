
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import BreadCrumb from "@/components/BreadCrumb";
import RecentNews from "@/components/News/RecentNews";
import PopularNews from "@/components/News/PopularNews";
import Search from "@/components/Search";

const EntertainmentDetails = () => {
  const params = useParams();
  const id = params?.id;
  const [entertainment, setEntrtainment] = useState(null);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchEntertainment = async () => {
      try {
        const res = await axios.get(
          `${backendURL}/api/news/get-news-categoryby-id/${id}`
        );
        setEntrtainment(res.data.news || res.data);
      } catch (err) {
        console.error("Error fetching press release:", err);
      }
    };

    if (id) {
      fetchEntertainment();
    }
  }, [id]);

  if (!entertainment) {
    return <p className="text-center text-gray-500 py-10">Loading...</p>;
  }

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <BreadCrumb one="Entertainment" two={entertainment.title} />
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap xl:flex-nowrap gap-6">
            {/* Left Column (Press Release Content) */}
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <h1 className="text-2xl font-bold mb-4">
                  {entertainment.title}
                </h1>

                <div className="relative">
                  <div className="float-left mr-4 mb-4">
                    <img
                      src={
                        entertainment.newsimage ||
                        "https://via.placeholder.com/450x300"
                      }
                      alt={entertainment.title}
                      className="rounded-md w-[450px] h-[300px] object-cover"
                    />
                  </div>

                  <div className="text-gray-700 leading-relaxed text-justify">
                    <p className="mb-4">{entertainment.description}</p>

                    {/* Optional extra content wrapping around image */}
                   
                   
                  </div>
                  <div className="clear-both"></div>
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

export default EntertainmentDetails;