import React from "react";

const insights = [
  {
    icon: (
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#19b3ae] text-white mr-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
      </span>
    ),
    title: "Evidence-Based Approach",
    desc: "All our recommendations are backed by the latest scientific research and proven methodologies."
  },
  {
    icon: (
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#19b3ae] text-white mr-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </span>
    ),
    title: "Personalized Strategies",
    desc: "Tailored wellness strategies that adapt to your unique lifestyle and goals."
  },
  {
    icon: (
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#19b3ae] text-white mr-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v2a4 4 0 00-3 3.87V18a2 2 0 002 2h12a2 2 0 002-2v-4.13A4 4 0 0017 12z" /></svg>
      </span>
    ),
    title: "Community Support",
    desc: "Join a supportive community of like-minded individuals on their wellness journey."
  },
];

export default function InsightsSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-white">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-md flex flex-col md:flex-row items-center px-6 md:px-12 py-10 relative overflow-hidden">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col items-start justify-center pr-0 md:pr-10 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#222]">
            <span className="text-black">Wellness </span>
            <span className="text-[#19b3ae]">Insights</span>
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl">
            Discover the latest trends, research, and expert insights in health and wellness. Our comprehensive analysis helps you make informed decisions about your fitness journey.
          </p>
          <div className="space-y-6 w-full">
            {insights.map((item, i) => (
              <div key={i} className="flex items-start">
                {item.icon}
                <div>
                  <h3 className="font-semibold text-lg text-[#222] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image with decorative circles */}
        <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0 z-10">
          <div className="w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-lg relative">
            <img src="https://img.freepik.com/free-photo/doctor-holding-tablet-with-medical-icons_23-2148827746.jpg?w=900" alt="Wellness Insights" className="w-full h-full object-cover" />
            {/* Decorative circles */}
            <span className="absolute -left-16 -bottom-10 w-32 h-32 bg-[#19b3ae] opacity-20 rounded-full z-0"></span>
            <span className="absolute -right-10 -top-10 w-24 h-24 bg-[#19b3ae] opacity-20 rounded-full z-0"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
