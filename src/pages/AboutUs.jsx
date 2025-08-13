import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutUsHero from "../assets/aboutushero.mp4";
import ourMissionImg from "../assets/ourmission.jpg";
import whatWeThinkImg from "../assets/whatwethink.webp";
import uniqueImg from "../assets/unique.avif";
import valuesImg from "../assets/values.jpg";
import Header from "../Header";
import Footer from "../Footer";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-white">
      {/* Hero Section with Video Background */}
  <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" data-aos="fade-up">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={aboutUsHero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg" style={{color:'#a259c6'}}>About us</h1>
          <p className="text-lg md:text-xl text-white mb-2 max-w-2xl mx-auto drop-shadow-md" style={{color:'#ffb347'}}>Your Digital Growth Partners</p>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto drop-shadow-md">
            We help brands thrive online with creative digital marketing, data-driven strategies, and measurable results. From SEO and social media to PPC and web design, we empower your business to grow in the digital age.
          </p>
        </div>
      </section>

      {/* Our Growth Through Years Section (inline, matches image) */}
  <section className="w-full bg-white py-20 flex flex-col items-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide" style={{color:'#a259c6'}}>Our Growth Through Years</h2>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
          {[
            { year: "2018", color: "from-purple-500 to-pink-400", title: "Started Our Journey", desc: "Launched as a boutique agency<br/>for local businesses." },
            { year: "2019", color: "from-purple-500 to-pink-400", title: "First SEO Success", desc: "Achieved top Google rankings<br/>and 200% organic growth." },
            { year: "2020", color: "from-purple-500 to-pink-400", title: "Social Media Expansion", desc: "Added social media marketing<br/>and boosted engagement." },
            { year: "2021", color: "from-purple-500 to-pink-400", title: "Data-Driven Results", desc: "Adopted analytics and automation<br/>for measurable ROI." },
            { year: "2022", color: "from-purple-500 to-pink-400", title: "Award-Winning Campaigns", desc: "Won awards for creative PPC<br/>and content marketing." },
            { year: "2023", color: "from-purple-500 to-pink-400", title: "Full-Service Agency", desc: "Became a full-service partner<br/>for web, SEO, PPC, social." },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-[#18181c] rounded-xl py-8 px-4 shadow-lg relative h-64 border border-[#2d1b3c]"
            >
              <div
                className={`text-2xl font-bold mb-2 bg-gradient-to-b ${item.color} text-transparent bg-clip-text`}
                style={{fontFamily:'monospace'}}
              >
                {item.year}
              </div>
              <div className="text-white font-semibold text-base mb-2 tracking-wide">{item.title}</div>
              <div className="text-gray-300 text-sm leading-relaxed  max-w-[180px] mx-auto" dangerouslySetInnerHTML={{__html: item.desc}}></div>
            </div>
          ))}
        </div>
      </section>
      {/* What Makes Us Unique Section */}
      {/* Our Vision & Our Mission Section */}
  <section className="w-full py-16 bg-[#c7a6fa] flex flex-col items-center" data-aos="fade-right">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center mb-8 md:mb-0" data-aos="zoom-in">
            <div className="w-full max-w-xs md:max-w-sm h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-[#e6f0fa]">
              <img src={ourMissionImg} alt="Vision Mission" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right: Vision & Mission Cards */}
          <div className="flex-1 flex flex-col gap-8 min-w-[260px] max-w-md" data-aos="fade-left">
            <div className="bg-white rounded-[2.5rem] shadow-xl p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-3" style={{color:'#a259c6'}}>Our Vision</h3>
              <p className="text-gray-700 text-justify text-base">To empower businesses of all sizes to thrive in the digital world by delivering innovative, data-driven marketing solutions that inspire growth and lasting impact.</p>
            </div>
            <div className="bg-white rounded-[2.5rem] shadow-xl p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-3" style={{color:'#a259c6'}}>Our Mission</h3>
              <p className="text-gray-700 text-justify text-base">To partner with our clients on their digital journey, providing expert guidance, creative strategies, and measurable results that drive their business forward.</p>
            </div>
          </div>
        </div>
      </section>
      {/* What Makes Us Unique Section (moved and themed) */}
  <section className="w-full py-16 bg-[#f7f7f7] flex flex-col items-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide text-[#a259c6]">What Makes Us Unique</h2>
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center justify-between px-4">
          {/* Left: Unique Image */}
          <div className="flex-1 flex items-center justify-center mb-8 md:mb-0" data-aos="zoom-in">
            <div className="w-full h-[410px] rounded-3xl overflow-hidden shadow-2xl bg-[#e6f0fa] flex items-center justify-center">
              <img src={uniqueImg} alt="Unique Digital Marketing" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right: Cards in 3 rows, 2 columns */}
          <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-6 min-w-[320px] max-w-xl" data-aos="fade-left">
            <div className="rounded-2xl shadow-xl p-8 flex flex-col items-start min-h-[110px] bg-white border-l-8 border-[#a259c6]">
              <h3 className="font-bold text-lg text-[#232136]">Integrated Digital Solutions</h3>
            </div>
            <div className="rounded-2xl shadow-xl p-8 flex flex-col items-start min-h-[110px] bg-white border-l-8 border-[#a259c6]">
              <h3 className="font-bold text-lg text-[#232136]">Data-Driven Personalization</h3>
            </div>
            <div className="rounded-2xl shadow-xl p-8 flex flex-col items-start min-h-[110px] bg-white border-l-8 border-[#a259c6]">
              <h3 className="font-bold text-lg text-[#232136]">Expert-Led Innovation</h3>
            </div>
            <div className="rounded-2xl shadow-xl p-8 flex flex-col items-start min-h-[110px] bg-white border-l-8 border-[#a259c6]">
              <h3 className="font-bold text-lg text-[#232136]">Transparent Communication</h3>
            </div>
            <div className="rounded-2xl shadow-xl p-8 flex flex-col items-start min-h-[110px] bg-white border-l-8 border-[#a259c6]">
              <h3 className="font-bold text-lg text-[#232136]">Client Collaboration</h3>
            </div>
            <div className="rounded-2xl shadow-xl p-8 flex flex-col items-start min-h-[110px] bg-white border-l-8 border-[#a259c6]">
              <h3 className="font-bold text-lg text-[#232136]">Continuous Growth</h3>
            </div>
          </div>
        </div>
      </section>
      {/* What We Think Section */}
  <section className="w-full py-16 bg-[#c7a6fa] flex flex-col items-center" data-aos="fade-up">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Left: Content */}
          <div className="flex-1 min-w-0 flex flex-col items-start justify-center pr-0 md:pr-8" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{color:'white'}}>What We Think</h2>
            <div className="space-y-5 w-full">
              <div className="rounded-2xl bg-[#232136] bg-opacity-90 text-white p-6 border-l-4 border-[#a259c6] shadow-md">
                <h3 className="font-bold text-lg mb-1">Holistic Approach</h3>
                <p className="text-sm text-justify">We address the complete business journey not just campaigns, but the root of digital growth through integrated, comprehensive marketing solutions.</p>
              </div>
              <div className="rounded-2xl bg-[#232136] bg-opacity-90 text-white p-6 border-l-4 border-[#a259c6] shadow-md">
                <h3 className="font-bold text-lg mb-1">Personalized Care</h3>
                <p className="text-sm text-justify">Every brand is unique. We believe digital marketing solutions should be tailored to your goals, audience, and industry for maximum results.</p>
              </div>
              <div className="rounded-2xl bg-[#232136] bg-opacity-90 text-white p-6 border-l-4 border-[#53295a] shadow-md">
                <h3 className="font-bold text-lg mb-1">Evidence-Based Practice</h3>
                <p className="text-smt text-justify">We combine creative strategy with proven analytics and the latest technology to deliver measurable, sustainable growth for your business.</p>
              </div>
            </div>
          </div>
          {/* Right: Image */}
            <div className="w-full max-w-xl  h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-[#232136] flex items-center justify-center" data-aos="fade-left">
              <img src={whatWeThinkImg} alt="What We Think" className="w-full h-full object-cover" />
            </div>
          
        </div>
      </section>
       
      {/* Our Values Section */}
  <section className="w-full py-16 bg-white flex flex-col items-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide text-[#a259c6]">Our Values</h2>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 gap-10">
          {/* Left: Diamond Cards */}
          <div className="flex-1 flex flex-col items-center" data-aos="fade-right">
            <div className="flex flex-row justify-center items-end gap-10 mb-[-30px]">
              {/* Card 1 */}
              <div className="relative flex flex-col items-center">
                <div className="transform rotate-45 w-40 h-40 bg-white border-2 border-[#a259c6] flex flex-col items-center justify-center shadow-xl">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl font-bold text-[#a259c6]">1</span>
                  <span className="transform -rotate-45 text-[#232136] font-bold text-lg">Transparency</span>
                  <span className="transform -rotate-45 text-xs text-gray-600 text-center mt-2">Open, honest reporting on every campaign.</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative flex flex-col items-center">
                <div className="transform rotate-45 w-40 h-40 bg-white border-2 border-[#a259c6] flex flex-col items-center justify-center shadow-xl">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl font-bold text-[#a259c6]">2</span>
                  <span className="transform -rotate-45 text-[#232136] font-bold text-lg">Innovation</span>
                  <span className="transform -rotate-45 text-xs text-gray-600 text-center mt-2">Creative, data-driven digital strategies.</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-10 mb-[-30px]">
              {/* Card 3 (center) */}
              <div className="relative flex flex-col items-center">
                <div className="transform rotate-45 w-40 h-40 bg-white border-2 border-[#a259c6] flex flex-col items-center justify-center shadow-xl">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl font-bold text-[#a259c6]">3</span>
                  <span className="transform -rotate-45 text-[#232136] font-bold text-lg">Collaboration</span>
                  <span className="transform -rotate-45 text-xs text-gray-600 text-center mt-2">Working together for your success.</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start gap-10 mt-[-30px]">
              {/* Card 4 */}
              <div className="relative flex flex-col items-center">
                <div className="transform rotate-45 w-40 h-40 bg-white border-2 border-[#a259c6] flex flex-col items-center justify-center shadow-xl">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl font-bold text-[#a259c6]">4</span>
                  <span className="transform -rotate-45 text-[#232136] font-bold text-lg">Results</span>
                  <span className="transform -rotate-45 text-xs text-gray-600 text-center mt-2">Focused on measurable growth.</span>
                </div>
              </div>
              {/* Card 5 */}
              <div className="relative flex flex-col items-center">
                <div className="transform rotate-45 w-40 h-40 bg-white border-2 border-[#a259c6] flex flex-col items-center justify-center shadow-xl">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl font-bold text-[#a259c6]">5</span>
                  <span className="transform -rotate-45 text-[#232136] font-bold text-lg">Growth</span>
                  <span className="transform -rotate-45 text-xs text-gray-600 text-center mt-2">Always learning, always improving.</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center" data-aos="fade-left">
            <div className="w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-[#e6f0fa]">
              <img src={valuesImg} alt="Our Values" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* More sections will go here */}
      </main>
      <Footer />
    </>
  );
}
