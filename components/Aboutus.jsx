import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-black text-yellow-400 min-h-screen py-10 px-6 ">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 ">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-300">
          At <span className="font-semibold text-yellow-400">MyStartupNEWS</span>, 
          we believe startups are the heartbeat of tomorrow’s economy. 
          We focus exclusively on the startup ecosystem because that’s 
          where real transformation happens.
        </p>
      </div>

      {/* Why Startups */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Why Startups?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="text-yellow-400 font-semibold">Innovation at the Core</span> – pushing boundaries and redefining industries.</li>
          <li><span className="text-yellow-400 font-semibold">Stories That Deserve a Voice</span> – shining light on early-stage entrepreneurs.</li>
          <li><span className="text-yellow-400 font-semibold">Fueling the Economy</span> – creating jobs and driving growth.</li>
          <li><span className="text-yellow-400 font-semibold">Inspiration for All</span> – resilience and success that motivate future founders.</li>
        </ul>
      </div>

      {/* What We Deliver */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">What We Deliver</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><span className="text-yellow-400 font-semibold">Exclusive Startup News</span> – funding, product launches, acquisitions, and trends.</li>
          <li><span className="text-yellow-400 font-semibold">Founder-Centric Content</span> – insights directly from entrepreneurs.</li>
          <li><span className="text-yellow-400 font-semibold">Voices of Tomorrow</span> – contributions from students, thought leaders, and founders.</li>
          <li><span className="text-yellow-400 font-semibold">Practical Knowledge</span> – features and op-eds to help innovators stay ahead.</li>
        </ul>
      </div>

      {/* Our Commitment */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
        <p className="text-gray-300">
          We don’t just report news — we celebrate innovation. Our mission is to 
          curate stories with authenticity, depth, and focus that general media 
          platforms overlook. By concentrating exclusively on startups, we provide 
          our readers with insights, perspectives, and a front-row seat to the 
          startup revolution.
        </p>
      </div>

      {/* Our Vision */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Vision</h2>
        <p className="text-gray-300">
          To become the go-to source for everything startups — a place where founders 
          share their journey, students sharpen their voices, thought leaders inspire 
          change, and ecosystem builders connect. 
          <br /> <br />
          <span className="text-yellow-400 font-semibold">
            MyStartupNEWS is not just a platform, it’s a mission and a movement — a 
            space where innovation gets the spotlight it deserves.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Aboutus;