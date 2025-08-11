import React from "react";

const steps = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M16 8v8l6 3" stroke="#7c5dc7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "YOUR TITLE",
    desc: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit, sed diam nonummy nibh.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M16 8v16M8 16h16" stroke="#7c5dc7" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "YOUR TITLE",
    desc: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit, sed diam nonummy nibh.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M10 16l4 4 8-8" stroke="#7c5dc7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "YOUR TITLE",
    desc: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit, sed diam nonummy nibh.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M16 8v8l6 3" stroke="#7c5dc7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "YOUR TITLE",
    desc: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit, sed diam nonummy nibh.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M8 16h16" stroke="#7c5dc7" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "YOUR TITLE",
    desc: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit, sed diam nonummy nibh.",
  },
];


export default function BenefitsInfographic() {
  // Petal data
  const petals = [
    {
      number: '01',
      title: 'LOREM IPSUM',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.',
      color: 'bg-black',
      text: 'text-white',
      border: 'border-yellow-400',
      style: 'top-[-90px] left-1/2 -translate-x-1/2',
      highlight: true,
    },
    {
      number: '02',
      title: 'LOREM IPSUM',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.',
      color: 'bg-yellow-400',
      text: 'text-black',
      border: 'border-yellow-400',
      style: 'right-[-90px] top-1/2 -translate-y-1/2',
      highlight: false,
    },
    {
      number: '03',
      title: 'LOREM IPSUM',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.',
      color: 'bg-yellow-400',
      text: 'text-black',
      border: 'border-yellow-400',
      style: 'bottom-[-90px] left-1/2 -translate-x-1/2',
      highlight: false,
    },
    {
      number: '04',
      title: 'LOREM IPSUM',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.',
      color: 'bg-black',
      text: 'text-white',
      border: 'border-yellow-400',
      style: 'left-[-90px] top-1/2 -translate-y-1/2',
      highlight: false,
    },
  ];

  return (
    <div className="relative flex items-center justify-center w-full min-h-[500px] py-12">
      {/* Center Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-black rounded-full flex flex-col items-center justify-center shadow-2xl border-8 border-yellow-400 z-20">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <span className="text-lg md:text-2xl text-yellow-400 font-bold mb-1">Business</span>
          <span className="text-2xl md:text-4xl text-white font-extrabold leading-tight">steps</span>
          <span className="text-lg md:text-2xl text-yellow-400 font-bold mb-1">INFOGRAPHIC</span>
        </div>
      </div>
      {/* Petals */}
      {petals.map((petal, idx) => (
        <div
          key={idx}
          className={`absolute ${petal.style} w-56 h-56 md:w-72 md:h-72 flex flex-col items-center justify-center rounded-t-full rounded-b-full border-4 ${petal.color} ${petal.text} ${petal.border} shadow-xl z-10`}
          style={{clipPath: 'ellipse(60% 45% at 50% 50%)'}}
        >
          <div className="flex flex-col items-center justify-center px-6 py-8">
            <span className="text-4xl md:text-5xl font-extrabold mb-2">{petal.number}</span>
            <h4 className="text-lg md:text-xl font-bold mb-2 uppercase">{petal.title}</h4>
            <p className="text-xs md:text-sm text-center opacity-80">{petal.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
