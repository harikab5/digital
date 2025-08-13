import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";
import home2hero from "../assets/home2hero.mp4";
import whychoose from "../assets/whychoose.jpg";
import ceoBg from "../assets/ceo.jpg";

// Team members array and TeamCarousel component
const teamMembers = [
  {
    name: "Helena Farse",
    role: "SEO Specialist | 10+ years in digital marketing",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dan Pitts",
    role: "Content Strategist | 5 years in digital campaigns",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Tomas Willens",
    role: "Social Media Manager | 5 years in brand growth",
    img: "https://randomuser.me/api/portraits/men/97.jpg",
  },
  {
    name: "Priya Sharma",
    role: "PPC Expert | 7 years in paid advertising",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Alex Kim",
    role: "Email Marketing Lead | 6 years in automation",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Sara Lee",
    role: "Web Designer | 8 years in UI/UX",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "John Carter",
    role: "Analytics Specialist | 9 years in data insights",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Tran",


// ...existing code for TeamCarousel, TrendsTips, Home2, and export default Home2...
    role: "Brand Manager | 6 years in digital branding",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Carlos Rivera",
    role: "Video Content Creator | 4 years in digital media",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

function TeamCarousel() {
  const [start, setStart] = React.useState(0);
  const visible = 3;
  const end = start + visible;
  const canPrev = start > 0;
  const canNext = end < teamMembers.length;

  const handlePrev = () => {
    if (canPrev) setStart(start - 1);
  };
  const handleNext = () => {
    if (canNext) setStart(start + 1);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-8 w-full justify-center">
        {teamMembers.slice(start, end).map((member) => (
          <div key={member.name} className="bg-white rounded-3xl shadow-2xl flex flex-col items-center p-14 min-h-[500px] w-[400px]">
            <img src={member.img} alt={member.name} className="w-56 h-56 rounded-3xl object-cover object-center mb-8" />
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{member.role}</p>
            <div className="flex gap-3 mt-2">
              {/* Social icons omitted for brevity */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <button onClick={handlePrev} disabled={!canPrev} className={`px-4 py-2 rounded-full bg-gray-300 text-gray-700 font-bold transition-colors ${!canPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}>{'<'}</button>
        <button onClick={handleNext} disabled={!canNext} className={`px-4 py-2 rounded-full bg-gray-300 text-gray-700 font-bold transition-colors ${!canNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}>{'>'}</button>
      </div>
    </div>
  );
}




// TrendsTips Section
function TrendsTips() {
  const tips = [
    "Leverage video content for higher engagement.",
    "Optimize for voice search in 2025.",
    "Personalize your email marketing.",
    "Focus on mobile-first design.",
    "Utilize AI for smarter ad targeting.",
    "Build trust with authentic storytelling.",
    "Invest in SEO for long-term growth.",
    "Embrace short-form video trends.",
    "Use analytics to refine your strategy.",
    "Engage with your audience on social media.",
  ];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [tips.length]);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-xl md:text-2xl font-semibold text-[#53295a] mb-4 min-h-[48px] transition-all duration-500">
        {tips[index]}
      </div>
      <div className="flex gap-2 mt-2">
        {tips.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#a259c6]' : 'bg-gray-300'} transition-colors`}
          />
        ))}
      </div>
    </div>
  );
}

const Home2 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-aos="fade-up">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100%', minWidth: '100%' }}
        >
          <source src={home2hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-white text-center px-4 animate-fade-in-up w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevate Your Brand with
            <span className="ml-3 bg-clip-text text-transparent inline-block" style={{
              background: 'linear-gradient(to right, #b57edc, #a259c6, #8d4bb7, #7b3fa2, #6c3483)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Digital Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Unlock your business potential with data-driven strategies, creative campaigns, and the latest in digital marketing technology. Grow your audience, boost engagement, and achieve measurable results with our expert team.
          </p>
        </div>
      </section>
      {/* Meet Our Team Section (redesigned) */}
  <section className="relative z-20 bg-white py-20" data-aos="fade-right">
        <div className="max-w-5xl mx-auto px-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center text-[#222]" style={{ fontFamily: 'serif' }}>Meet The Team</h2>
          <p className="text-lg text-center mb-10 text-gray-600">Behind The Creative Process Of Building Your Brand</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-8 border-[#a259c6] flex items-center justify-center overflow-hidden mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aaren Davis" className="w-full h-full object-cover" />
              </div>
              <div className="text-lg font-semibold text-gray-800">Aaren Davis</div>
              <div className="text-sm text-gray-500 mt-1">MARKETING EXPERT</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-8 border-[#a259c6] flex items-center justify-center overflow-hidden mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cadence Daniel" className="w-full h-full object-cover" />
              </div>
              <div className="text-lg font-semibold text-gray-800">Cadence Daniel</div>
              <div className="text-sm text-gray-500 mt-1">ADVERTISING HEAD</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-8 border-[#a259c6] flex items-center justify-center overflow-hidden mb-4">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Oliver Wilson" className="w-full h-full object-cover" />
              </div>
              <div className="text-lg font-semibold text-gray-800">Oliver Wilson</div>
              <div className="text-sm text-gray-500 mt-1">CONTENT CREATOR</div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-8 border-[#a259c6] flex items-center justify-center overflow-hidden mb-4">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Beatrice Dubois" className="w-full h-full object-cover" />
              </div>
              <div className="text-lg font-semibold text-gray-800">Beatrice Dubois</div>
              <div className="text-sm text-gray-500 mt-1">GRAPHICS DESIGNER</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-8 border-[#a259c6] flex items-center justify-center overflow-hidden mb-4">
                <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Crystal Jerry" className="w-full h-full object-cover" />
              </div>
              <div className="text-lg font-semibold text-gray-800">Crystal Jerry</div>
              <div className="text-sm text-gray-500 mt-1">CAMPAIGN LEAD</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-8 border-[#a259c6] flex items-center justify-center overflow-hidden mb-4">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sulema Silva" className="w-full h-full object-cover" />
              </div>
              <div className="text-lg font-semibold text-gray-800">Sulema Silva</div>
              <div className="text-sm text-gray-500 mt-1">DIGITAL LEADER</div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet Our CEO Section */}
      <section
        className="relative z-20 py-20 px-0 flex items-left justify-left"
        style={{
          backgroundImage: `url(${ceoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        data-aos="fade-left"
      >
        <div className="w-full pl-20 mx-auto flex flex-col md:flex-row items-start  px-4 animate-fade-in-up">
          {/* Left: CEO Content (fully left-aligned) */}
          <div className="flex-1 flex flex-col  items-start text-left bg-opacity-90 rounded-3xl shadow-xl">
            <div className="flex items-left mb-4">
              <svg className="w-8 h-8 text-[#a259c6] mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A7.003 7.003 0 0 0 2 13c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1c-.28 0-.53.11-.71.29l-.12.12zM17.17 6.17A7.003 7.003 0 0 0 12 13c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1c-.28 0-.53.11-.71.29l-.12.12z"/></svg>
              <span className="text-[#fff] font-bold text-lg">Meet Our</span>
              <span className="ml-2 bg-[#a259c6] text-white font-extrabold text-2xl px-4 py-2 rounded-xl shadow-lg">CEO</span>
            </div>
            <h3 className="text-2xl font-bold text-[#fff] mb-2 text-left">Alexandra Bennett</h3>
            <p className="text-[#fff] font-semibold mb-2 text-left">Founder & Chief Executive Officer</p>
            <p className="text-white text-lg mb-2 text-left">Alexandra brings over 15 years of experience in digital marketing, brand strategy, and busines.<br></br>Her vision and passion for innovation have driven our agency to the forefront of the industry.</p>
            <ul className="list-disc pl-5 text-white mb-2 text-left">
              <li>Expert in multi-channel marketing and growth strategies</li>
              <li>Featured speaker at top marketing conferences</li>
              <li>Mentor to young entrepreneurs and startups</li>
              <li>Believes in data-driven creativity and client success</li>
            </ul>
            <p className="text-white text-base mt-2 text-left">"My mission is to empower brands to reach their full potential through innovative digital solutions and<br></br>a relentless focus on results."</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section (Who We Are) */}
  <section className="relative w-full py-20 bg-white flex items-center justify-center" data-aos="fade-right">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-0 md:gap-8 px-4 md:px-0">
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0">
            {/* Decorative dots */}
            <div className="absolute left-0 top-0 z-10 hidden md:block" style={{ transform: 'translate(-30px, -30px)' }}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 5 }).map((_, row) => (
                  Array.from({ length: 5 }).map((_, col) => (
                    <rect key={row + '-' + col} x={col * 12} y={row * 12} width="6" height="6" rx="2" fill="#a259c6" />
                  ))
                ))}
              </svg>
            </div>
            <div className="w-full max-w-md md:max-w-lg h-96 md:h-[25rem] rounded-3xl shadow-2xl overflow-hidden bg-gray-100">
              <img src={whychoose} alt="Who We Are Visual" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right: Content inside white box with dark purple icons */}
          <div className="flex-1 flex flex-col justify-center items-start md:pr-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#53295a]">Why Choose Us</h2>
              <p className="text-gray-600 mb-8 max-w-md">Discover what sets us apart: expertise, data-driven results, 24/7 support, and a proven track record of successful website projects. Partner with us for your website's digital growth and online success.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* All icons in same dark purple (#53295a) */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#53295a] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#53295a] mb-1">Expert Team</h3>
                    <p className="text-gray-600 text-sm">Certified professionals with proven website project track records.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#53295a] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#fff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#53295a] mb-1">Data-Driven</h3>
                    <p className="text-gray-600 text-sm">Website results backed by analytics and insights.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#53295a] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#53295a] mb-1">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock website assistance for your success.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#53295a] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 17v-6a4 4 0 018 0v6" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#53295a] mb-1">Proven Results</h3>
                    <p className="text-gray-600 text-sm">Proven track record of successful campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Trends & Tips Corner Section (inlined) */}
  <section className="w-full py-20 flex flex-col items-center" style={{ background: '#BF77F6' }} data-aos="fade-up">
        <div className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl bg-white p-8 md:p-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#a259c6] mb-6 text-center">Trends & Tips Corner</h2>
          <TrendsTips />
        </div>
      </section>

      {/* Insights Section (redesigned) */}
      <section className="w-full py-20 bg-white flex justify-center items-center">
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center min-h-300" data-aos="fade-left">
            <div className="w-full max-w-lg h-[30rem] rounded-3xl shadow-2xl overflow-hidden bg-gray-100 flex items-center justify-center relative">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80" alt="Digital Marketing Insights Visual" className="w-full h-full object-cover" />
              {/* Decorative circles */}
              <div className="absolute left-[-30px] bottom-[-30px] w-24 h-24 bg-[#a259c6] opacity-20 rounded-full z-10"></div>
              <div className="absolute right-[-30px] top-[-30px] w-16 h-16 bg-[#a259c6] opacity-20 rounded-full z-10"></div>
            </div>
          </div>
          {/* Right: Content */}
          <div className="flex-1 flex flex-col justify-center items-start min-h-80" data-aos="fade-right">
            <h2 className="text-4xl font-extrabold mb-4 text-[#222]">
              <span className="text-[#222]">Digital </span>
              <span className="text-[#a259c6]">Marketing</span>
              <span className="text-[#222] ml-2">Insights</span>
            </h2>
            <p className="text-gray-700 mb-8 max-w-xl">
              Discover the latest trends, research, and expert insights in digital marketing. Our comprehensive analysis helps you make informed decisions to grow your brand, reach your audience, and maximize ROI in the digital era.
            </p>
            <div className="flex flex-col gap-6 mb-8 w-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a259c6] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#53295a] mb-1">Data-Driven Strategies</h3>
                  <p className="text-gray-600 text-sm">All our recommendations are backed by analytics, industry research, and proven digital methodologies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a259c6] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#53295a] mb-1">Personalized Campaigns</h3>
                  <p className="text-gray-600 text-sm">Tailored marketing strategies that adapt to your unique business goals and audience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a259c6] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V6a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#53295a] mb-1">Community & Support</h3>
                  <p className="text-gray-600 text-sm">Join a supportive network of marketers and get expert help on your digital journey.</p>
                </div>
              </div>
            </div>
            <button
              className="mt-2 px-6 py-3 rounded bg-[#a259c6] text-white font-semibold shadow hover:bg-[#7b3fa2] transition"
              onClick={() => navigate('/blog')}
            >
              Explore Insights
            </button>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home2;
