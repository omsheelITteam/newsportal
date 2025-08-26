


import BreadCrumb from "@/components/BreadCrumb";
import SimpleDetailsNewsCard from "@/components/News/items/SimpleDetailsNewsCard";
import PopularNews from "@/components/News/PopularNews";
import Search from "@/components/Search";
import React from "react";
import Title from "@/components/Title";
import NewsCard from "@/components/News/items/NewsCard";
import parse from "html-react-parser";
import RelatedNews from "@/components/News/RelatedNews";
import RecentNews from "@/components/News/RecentNews";
import SharesButton from "@/components/ShareButton";

const Details = async ({ params }) => {
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { slug } = await params;
  //  console.log("slug",slug)
  const res = await fetch(`${backendURL}/api/news/get-news-byslug?slug=${encodeURIComponent(slug)}`, {
    next: { revalidate: 1 },
  });


  const { news, relatedNews } = await res.json();
  // console.log(news)
  // console.log("related news",relatedNews)
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <BreadCrumb one={news?.category} two={news?.title} />
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap xl:flex-nowrap gap-6">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <h1 className="text-2xl font-bold mb-4">
                  {news?.title}
                </h1>

                <div className="relative">
                  <div className="float-left mr-4 mb-4">
                    <img
                      src={news?.newsimage}
                      alt={news?.title || "News image"}
                      className="rounded-md w-[450px] h-[300px] object-cover"
                    />
                    <div className="mt-4">
                      {news?.newssource && (
                      <span className="text-yellow-500 font-serif "> {news.newssource}</span>
                    )}
                    </div>
                    <div className="mt-2 flex gap-4 justify-center items-center">

                      <h3 className="text-amber-500 uppercase font-medium text-sm mb-1">
                        {news?.category}
                      </h3>
                      <div className="flex gap-x-2 text-sm font-normal text-slate-600">
                        <span>
                          {news?.createdat
                            ? new Date(news?.createdat).toLocaleDateString()
                            : "Unknown Date"}
                        </span>

                        {/* <span>/</span> */}
                        <span>{news?.writername}</span>

                      </div>
                      <SharesButton />
                    </div>
                  </div>
                  <div className="text-gray-700 leading-relaxed text-justify">
                    <div className="mb-2">
                      {parse(news?.description || "")}
                    </div>
                  </div>
                  <div className="clear-both"></div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-6">
                  <Search />
                  <RecentNews />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <RelatedNews news={relatedNews} type="Related news" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;



