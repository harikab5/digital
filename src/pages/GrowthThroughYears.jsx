import React from "react";

const growthData = [
  { number: "01", color: "from-pink-500 to-red-400", title: "YOUR TITLE", desc: "Aliquam blandit tempus varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices." },
  { number: "02", color: "from-yellow-400 to-orange-500", title: "YOUR TITLE", desc: "Aliquam blandit tempus varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices." },
  { number: "03", color: "from-purple-500 to-pink-400", title: "YOUR TITLE", desc: "Aliquam blandit tempus varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices." },
  { number: "04", color: "from-green-400 to-lime-500", title: "YOUR TITLE", desc: "Aliquam blandit tempus varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices." },
  { number: "05", color: "from-cyan-400 to-blue-500", title: "YOUR TITLE", desc: "Aliquam blandit tempus varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices." },
  { number: "06", color: "from-blue-700 to-blue-400", title: "YOUR TITLE", desc: "Aliquam blandit tempus varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices." },
];

export default function GrowthThroughYears() {
  return (
    <section className="w-full bg-[#101014] py-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 tracking-wide">Our Growth Through Years</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
        {growthData.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center bg-[#18181c] rounded-xl py-8 px-4 shadow-lg relative h-64"
          >
            <div
              className={`text-5xl font-extrabold mb-2 bg-gradient-to-b ${item.color} text-transparent bg-clip-text`}
            >
              {item.number}
            </div>
            <div className="text-white font-semibold text-lg mb-2 tracking-wide">{item.title}</div>
            <div className="text-gray-400 text-sm leading-relaxed max-w-[180px] mx-auto">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
