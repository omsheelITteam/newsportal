// import React from "react";
// import Title from "../Title";
// import SimpleDetailsNewsCard from "./items/SimpleDetailsNewsCard";

// const DetailsNews = ({news,category}) => {
//   console.log(news)
//   // console.log(category)
//   return (
//     <>    <div className="w-full flex flex-col gap-[14px] pr-2 py-8">
//       <Title title={category} />

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 lg:gap-x-3">
//         <SimpleDetailsNewsCard news={news[0]} type="details-news" height={300} />
//         <SimpleDetailsNewsCard news={news[1]} type="details-news" height={300} />
//       </div>
//     </div>
//     </>
//   );
// };

// export default DetailsNews;



import React from "react";
import Title from "../Title";
import SimpleDetailsNewsCard from "./items/SimpleDetailsNewsCard";

const DetailsNews = ({ news, category }) => {
  // console.log(news);

  if (!news || news.length === 0) {
    return <p className="text-center mt-10">No news available.</p>;
  }

  return (
    <div className="w-full flex flex-col gap-[14px] pr-2 py-8">
      <Title title={category} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 lg:gap-x-3">
        {news.map((item, index) => (
          <SimpleDetailsNewsCard
            key={index}
            news={item}
            type="details-news"
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsNews;
