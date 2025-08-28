import React from "react";

const FeedBack = () => {
  return (
    <div className="w-full flex justify-center bg-black py-12 px-4">
      <div className="w-full max-w-lg flex flex-col items-center  space-y-6">
        {/* Heading */}
        <h2 className="text-yellow-400 text-3xl font-bold">
          MyStartup<span className="text-white">NEWS</span>
        </h2>
        <p className="text-gray-300 text-lg">
          We’d love to hear your thoughts. Give your valuable feedback below:
        </p>

        {/* Form */}
        <form className="flex flex-col text-yellow-400 w-full space-y-4">
          {/* Name */}
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="border-2 border-yellow-400 bg-transparent text-white px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Email */}
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="border-2 border-yellow-400 bg-transparent text-white px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Location */}
          <label htmlFor="location" className="text-sm font-semibold">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="City, Country"
            className="border-2 border-yellow-400 bg-transparent text-white px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Feedback */}
          <label htmlFor="feedback" className="text-sm font-semibold">
            Feedback
          </label>
          <textarea
            id="feedback"
            rows={4}
            placeholder="Share your thoughts..."
            className="border-2 border-yellow-400 bg-transparent text-white px-3 py-2 rounded-md outline-none resize-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;