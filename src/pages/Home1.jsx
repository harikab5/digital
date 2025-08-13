
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const whoWeAreRef = React.useRef(null);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);
  // Initialize AOS after React is available
  React.useEffect(() => {
    AOS.init({ once: false, duration: 2000 }); // 1200ms = 1.2s for slower animations
  }, []);
  // Inject keyframes for slideInLeft animation only once
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `@keyframes slideInLeft { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
    document.head.appendChild(styleSheet);
    return () => { document.head.removeChild(styleSheet); };
  }, []);
  // Use a CSS class for sliding animation
  // Animated number component for metrics
  const AnimatedNumber = ({ value, duration = 2000, suffix = '' }) => {
    const [display, setDisplay] = React.useState(0);
    React.useEffect(() => {
      let start = 0;
      const startTime = performance.now();
      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * (value - start) + start);
        setDisplay(current);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplay(value);
        }
      };
      requestAnimationFrame(step);
      // eslint-disable-next-line
    }, [value, duration]);
    return <>{display}{suffix}</>;
  };
  // Animated words for the 'insight,' text
  const animatedWords = ['insight,', 'strategy,', 'growth,', 'impact,', 'success,'];
  const [currentWordIdx, setCurrentWordIdx] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIdx(idx => (idx + 1) % animatedWords.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  const serviceCards = [
    {
      image: "/src/assets/seo.jpg",
      title: "Search Engine Optimization (SEO)",
      subtitle: "Boost your search rankings and drive organic traffic to your website with our comprehensive SEO strategies. Our SEO experts use the latest techniques in keyword research, on-page and off-page optimization, and technical SEO to ensure your business stands out in search engine results and attracts high-quality leads.",
      bg: 'linear-gradient(to right, #b57edc, #a259c6, #8d4bb7, #7b3fa2, #6c3483)'
    },
    {
      image: "/src/assets/Social Media Marketing.jpg",
      title: "Social Media Marketing (SMM)",
      subtitle: "Engage with your audience across all major social platforms and build meaningful connections. We create tailored content, manage your profiles, and run targeted ad campaigns to grow your brand presence, increase followers, and drive measurable engagement and conversions.",
      bg: '#fff'
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      title: "Pay-Per-Click Advertising (PPC)",
      subtitle: "Drive targeted traffic and maximize ROI with our data-driven PPC campaigns and optimization. We handle everything from keyword selection and ad creation to bid management and analytics, ensuring your ads reach the right audience and deliver the best possible return on investment.",
      bg: '#fff'
    },
    {
      image: "/src/assets/content.jpg",
      title: "Content Marketing",
      subtitle: "Create compelling content that resonates with your audience and drives meaningful engagement. Our team crafts blogs, articles, infographics, videos, and more to establish your brand as an authority, improve SEO, and nurture customer relationships.",
      bg: '#fff'
    },
    {
      image: "/src/assets/email-marketing.jpg",
      title: "Email Marketing & Automation",
      subtitle: "Nurture leads and drive conversions with personalized email campaigns and automation. We design, segment, and automate email flows to deliver the right message at the right time, increasing open rates, click-throughs, and customer loyalty.",
      bg: '#fff'
    },
    {
      image: "/src/assets/website.jpg",
      title: "Website Design & Development",
      subtitle: "Create stunning, responsive websites that convert visitors into customers and drive growth. Our web design and development team builds fast, secure, and user-friendly sites tailored to your brand and business goals, ensuring a seamless experience across all devices.",
      bg: '#fff'
    }
  ];

  // Slideshow logic for last 3 cards
  const [slideIdx, setSlideIdx] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIdx((i) => (i + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Add 2 more services for the Our Top Services section
  const extendedServiceCards = [
    ...serviceCards,
    {
      image: "/src/assets/ourservices.jpg",
      title: "Brand Strategy & Consulting",
      subtitle: "Develop a powerful brand identity and strategy to stand out in your market. We help you define your mission, values, and unique selling proposition, and create a cohesive brand experience that resonates with your target audience.",
      bg: '#fff'
    },
    {
      image: "/src/assets/ppc.jpg",
      title: "Analytics & Conversion Optimization",
      subtitle: "Leverage analytics to optimize conversions and maximize your marketing ROI. We track user behavior, analyze data, and implement A/B testing to continuously improve your website and campaigns, turning more visitors into loyal customers.",
      bg: '#fff'
    }
  ];

  // Slideshow logic for 3-card sliding with direction
  const [serviceSlideIdx, setServiceSlideIdx] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState('right');
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('right');
      setServiceSlideIdx((i) => (i + 1) % 2); // 2 slides: 0 (first 3), 1 (next 3)
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Manual slide controls (optional, for future use)
  const handleSlideLeft = () => {
    setSlideDirection('left');
    setServiceSlideIdx((i) => (i - 1 + 2) % 2);
  };
  const handleSlideRight = () => {
    setSlideDirection('right');
    setServiceSlideIdx((i) => (i + 1) % 2);
  };

  return (
    <div className="relative overflow-hidden">
      <Header />
      {/* Hero Section */}
  <section className="relative h-screen" data-aos="fade-up">
  {/* Video Background */}
  <div className="absolute inset-0 bg-black z-0 animate-fade-in">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/src/assets/homehero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span
                className="bg-clip-text text-transparent"
                style={{
            background: 'linear-gradient(to right, #b57edc, #a259c6, #8d4bb7, #7b3fa2, #6c3483)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                {" "}Digital Marketing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Drive growth, increase engagement, and dominate your market with our cutting-edge digital marketing strategies. 
              From SEO to social media, we've got your success covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  if (whoWeAreRef.current) {
                    whoWeAreRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 text-white rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ background: 'linear-gradient(to right, #b57edc, #a259c6, #8d4bb7, #7b3fa2, #6c3483)' }}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Animated Metrics Script */}

      {/* Who We Are Section */}
  <section ref={whoWeAreRef} className="relative z-20 bg-white py-20" data-aos="fade-right">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Side - Image */}
            <div className="relative h-full" data-aos="fade-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="Who We Are"
                  className="w-full h-full object-cover animate-zoom-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ background: '#53295a' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                <div style={{ background: '#53295a', width: '100%', height: '100%', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6" data-aos="fade-left">
                <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#2d174d' }}>Why Choose Us</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Discover what sets us apart: expertise, data-driven results, 24/7 support, and a proven track record of successful website projects. Partner with us for your website's digital growth and online success.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex items-start gap-4 bg-[#f6f2fa] rounded-xl p-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-[#6c3477]">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2d174d] mb-1">Expert Team</h3>
                      <p className="text-gray-600 text-sm">Certified professionals with proven website project track records.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#f6f2fa] rounded-xl p-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-[#6c3477]">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2d174d] mb-1">Data-Driven</h3>
                      <p className="text-gray-600 text-sm">Website results backed by analytics and insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#f6f2fa] rounded-xl p-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-[#6c3477]">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2d174d] mb-1">24/7 Support</h3>
                      <p className="text-gray-600 text-sm">Round-the-clock website assistance for your success.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#f6f2fa] rounded-xl p-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-[#6c3477]">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17v-6a4 4 0 018 0v6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2d174d] mb-1">Proven Results</h3>
                      <p className="text-gray-600 text-sm">Proven track record of successful website campaigns.</p>
                    </div>
                  </div>
                </div>
              
              <div className="pt-6">
                <button
                  className="px-8 py-3 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{ background: 'linear-gradient(to right, #b57edc, #a259c6, #8d4bb7, #7b3fa2, #6c3483)' }}
                  onClick={() => navigate('/about')}
                >
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Top Services Section with purple background */}
      <section
        className="relative z-20 py-20 animate-fade-in"
        data-aos="fade-left"
        style={{
          backgroundColor: '#c7a6fa'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#fff' }}>
              Our Top Services
            </h2>
          </div>

          {/* Services Grid - 3 cards with slideshow */}
          <style>{`
            @keyframes slideInLeft { from { transform: translateX(-60px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            @keyframes slideInRight { from { transform: translateX(60px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          `}</style>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700">
            {extendedServiceCards.slice(serviceSlideIdx * 3, serviceSlideIdx * 3 + 3).map((card, idx) => (
              <div
                key={idx}
                className={
                  `relative group rounded-xl shadow-lg overflow-hidden flex flex-col bg-white cursor-pointer animate-fade-in-up ` +
                  (slideDirection === 'right'
                    ? 'slide-in-right'
                    : 'slide-in-left')
                }
                style={{
                  minHeight: '400px',
                  animation: slideDirection === 'right'
                    ? 'slideInRight 0.7s cubic-bezier(0.4,0,0.2,1)'
                    : 'slideInLeft 0.7s cubic-bezier(0.4,0,0.2,1)'
                }}
              >
                <div className="h-72 overflow-hidden flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex items-center justify-center bg-white transition-colors duration-300">
                  <h3
                    className="text-lg font-bold py-6 px-2 text-center tracking-wide"
                    style={{
                      color: '#53295a',
                      letterSpacing: '1px',
                      transition: 'color 0.3s',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {card.title.replace(/\s*\(.*\)/, '')}
                  </h3>
                </div>
                {/* Overlay on hover: purple bg, title and subtitle centered */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 px-6"
                  style={{
                    cursor: 'pointer',
                    background: '#6c3477',
                    backgroundColor: '#6c3477',
                  }}
                >
                  <h3
                    className="text-xl font-extrabold mb-2 text-center"
                    style={{ color: '#fff', letterSpacing: '1px' }}
                  >
                    {card.title.replace(/\s*\(.*\)/, '')}
                  </h3>
                  <p className="text-base text-center text-justify text-white font-medium">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Impact Metrics Section (reference style) */}
  <section className="relative z-10 py-20 bg-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-12 gap-8">
            {/* Main Metric and Description (Digital Marketing) */}
            <div className="flex-1 flex flex-col items-start" data-aos="fade-right">
              {/* Styled lines as in the reference image */}
              <div className="mb-2">
                <span style={{ display: 'block', color: '#111', fontWeight: 700, fontSize: '2.5rem', letterSpacing: '1px', lineHeight: 1 }}>marketing is</span>
                <span style={{
                  display: 'block',
                  width: '12rem',
                  height: '3rem',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <span style={{
                    display: 'flex',
                    color: '#53295a',
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    letterSpacing: '1px',
                    lineHeight: 1,
                    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                    willChange: 'transform',
                    transform: `translateX(-${currentWordIdx * 12}rem)`
                  }}>
                    {animatedWords.map((word, idx) => (
                      <span key={word} style={{ display: 'block', minWidth: '12rem', textAlign: 'left' }}>{word}</span>
                    ))}
                  </span>
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-6xl md:text-7xl font-extrabold text-[#53295a] mr-2 metric-scroll" data-target="50">21</span>
                <span className="text-lg font-semibold slide-in-metric-label" style={{ color: '#8d6fd1' }}>Campaigns Launched</span>
              </div>
              <p className="text-lg text-justify text-[#53295a] max-w-2xl mb-4">
                We have successfully launched 50+ digital marketing campaigns, helping brands increase their online presence, generate quality leads, and boost ROI. Our expertise covers SEO, social media, PPC, content marketing, and analytics—empowering businesses to reach their target audience and achieve measurable growth in the digital landscape.
              </p>
            </div>
            {/* Impact Image on the right */}
            <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0" data-aos="fade-left">
              <img
                src="/src/assets/impact.jpg"
                alt="Impact Metrics"
                className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
                style={{ minHeight: '260px', maxHeight: '340px' }}
              />
            </div>
          </div>
          <hr className="mb-10" style={{ borderColor: '#b57edc' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center rounded-xl p-8 shadow-lg animate-zoom-in" style={{ background: 'linear-gradient(135deg, #6a4fc2 0%, #a98be7 100%)' }}>
              <span className="text-4xl md:text-5xl font-extrabold text-white metric-scroll"><AnimatedNumber value={12000} duration={1500} /></span>
              <span className="text-lg font-semibold text-white slide-in-left">Total Customers</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl p-8 shadow-lg" style={{ background: 'linear-gradient(135deg, #6a4fc2 0%, #a98be7 100%)' }}>
              <span className="text-4xl md:text-5xl font-extrabold text-white metric-scroll"><AnimatedNumber value={320} duration={1500} /></span>
              <span className="text-lg font-semibold text-white slide-in-left">Enterprise Clients</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl p-8 shadow-lg" style={{ background: 'linear-gradient(135deg, #6a4fc2 0%, #a98be7 100%)' }}>
              <span className="text-4xl md:text-5xl font-extrabold text-white metric-scroll"><AnimatedNumber value={99} duration={1500} suffix="%" /></span>
              <span className="text-lg font-semibold text-white slide-in-left">Uptime Guarantee</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl p-8 shadow-lg" style={{ background: 'linear-gradient(135deg, #6a4fc2 0%, #a98be7 100%)' }}>
              <span className="text-4xl md:text-5xl font-extrabold text-white metric-scroll"><AnimatedNumber value={75} duration={1500} /></span>
              <span className="text-lg font-semibold text-white slide-in-left">AI Integrations</span>
            </div>
          </div>
        </div>
      </section>


      {/* What Our Clients Say Section */}
  <section className="relative z-10 py-20 bg-[#c7a6fa]" data-aos="fade-right">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <div className="bg-white bg-opacity-80 rounded-2xl shadow-xl p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
              <div data-aos="fade-right">
                <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#53295a' }}>
                  What Our <span style={{ color: '#a259c6' }}>Clients Say</span>
                </h2>
                <p className="text-lg text-gray-700 max-w-xl">
                  Real feedback from businesses that trust us! See how we help brands grow.
                </p>
              </div>
              {/* Removed Get a Free Consultation button */}
            </div>
            {/* Testimonials Carousel (slideshow, 3 at a time, arrows, 6+ cards) */}
            {(() => {
              const testimonials = [
                {
                  border: '#b57edc',
                  icon: '#b57edc',
                  title: 'A Game-Changer for Our Business',
                  text: 'Edisi Software transformed our outdated website into a sleek, modern platform that boosted our conversions by 47%! The team was professional, creative, and attentive to our needs.',
                  img: 'https://randomuser.me/api/portraits/men/45.jpg',
                  name: 'Adnan Ashif',
                  role: 'CEO, EdisiLogic',
                  stars: '#b57edc',
                },
                {
                  border: '#a259c6',
                  icon: '#a259c6',
                  title: 'Exceptional Service & Outstanding Results',
                  text: 'From branding to web development, Edisi exceeded our expectations. Their strategic approach and attention to detail helped us create a seamless online experience for our customers.',
                  img: 'https://randomuser.me/api/portraits/women/65.jpg',
                  name: 'Sarah Lamin',
                  role: 'CMO, MarketWork',
                  stars: '#a259c6',
                },
                {
                  border: '#8d4bb7',
                  icon: '#8d4bb7',
                  title: 'Creative, Reliable, and Results-Driven',
                  text: 'Working with Edisi was a fantastic experience! They delivered a stunning e-commerce website that\'s fast, user-friendly, and beautifully designed. Couldn\'t be happier.',
                  img: 'https://randomuser.me/api/portraits/women/32.jpg',
                  name: 'Esther Howard',
                  role: 'Founder, ShopEase',
                  stars: '#8d4bb7',
                },
                // 3 more demo testimonials
                {
                  border: '#b57edc',
                  icon: '#b57edc',
                  title: 'Outstanding Support',
                  text: 'The support team at Edisi is always available and quick to resolve any issues. Their dedication to customer satisfaction is unmatched.',
                  img: 'https://randomuser.me/api/portraits/men/32.jpg',
                  name: 'Michael Chen',
                  role: 'CTO, TechNova',
                  stars: '#b57edc',
                },
                {
                  border: '#a259c6',
                  icon: '#a259c6',
                  title: 'Great Results, Every Time',
                  text: 'We have worked with Edisi on multiple projects and they always deliver great results. Highly recommended for any digital needs.',
                  img: 'https://randomuser.me/api/portraits/men/65.jpg',
                  name: 'David Lee',
                  role: 'Marketing Director, Brandify',
                  stars: '#a259c6',
                },
                {
                  border: '#8d4bb7',
                  icon: '#8d4bb7',
                  title: 'Professional & Creative',
                  text: 'Edisi\'s creative team brought our vision to life. The website looks amazing and our customers love it!',
                  img: 'https://randomuser.me/api/portraits/women/45.jpg',
                  name: 'Priya Singh',
                  role: 'Owner, Artistry',
                  stars: '#8d4bb7',
                },
              ];
              const [testimonialIdx, setTestimonialIdx] = React.useState(0);
              React.useEffect(() => {
                const timer = setInterval(() => {
                  setTestimonialIdx(idx => (idx + 3) % testimonials.length);
                }, 3000);
                return () => clearInterval(timer);
              }, [testimonials.length]);
              const showPrev = () => setTestimonialIdx(idx => (idx - 3 + testimonials.length) % testimonials.length);
              const showNext = () => setTestimonialIdx(idx => (idx + 3) % testimonials.length);
              return (
                <>
                  <div className="flex justify-between items-center">
                    <button onClick={showPrev} className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition mr-2" aria-label="Previous testimonials">
                      <svg className="w-6 h-6 text-[#a259c6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                      {testimonials.slice(testimonialIdx, testimonialIdx + 3).concat(
                        testimonialIdx + 3 > testimonials.length
                          ? testimonials.slice(0, (testimonialIdx + 3) % testimonials.length)
                          : []
                      ).map((t, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full border-t-4 testimonial-card animate-fade-in-up" style={{ borderColor: t.border }}>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <svg className="w-6 h-6 mr-2" style={{ color: t.icon }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7v4a2 2 0 01-2 2h-3v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3a2 2 0 012-2h3V7a2 2 0 012-2h3a2 2 0 012 2z" /></svg>
                              <span className="text-xs text-gray-400">{t.title}</span>
                            </div>
                            <p className="text-gray-700  text-justify text-sm mb-4">{t.text}</p>
                          </div>
                          <div className="flex items-center mt-4" data-aos="fade-left">
                            <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full mr-3" />
                            <div>
                              <span className="font-bold text-[#53295a] text-sm">{t.name}</span>
                              <div className="text-xs text-gray-500">{t.role}</div>
                            </div>
                          </div>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, starIdx) => (
                              <svg key={starIdx} className="w-4 h-4" style={{ color: t.stars }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button onClick={showNext} className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition ml-2" aria-label="Next testimonials">
                      <svg className="w-6 h-6 text-[#a259c6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                  {/* Carousel Dots */}
                  <div className="flex justify-center mt-8">
                    {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`inline-block w-3 h-3 mx-1 rounded-full ${dotIdx === Math.floor(testimonialIdx / 3) ? '' : 'bg-gray-300'}`}
                        style={{ background: dotIdx === Math.floor(testimonialIdx / 3) ? '#b57edc' : undefined }}
                      ></span>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>
      {/* CTA Section (moved below testimonials) */}
  <section className="relative z-20 bg-white py-20" data-aos="fade-left">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="text-black">Get Started </span>
                <span className="text-[#a259c6]">Today</span>
              </h2>
              <p className="text-lg mb-8 text-justify text-[#53295a] max-w-2xl">
                Drive growth, increase engagement, and dominate your market with our cutting-edge digital marketing strategies. 
                From SEO to social media, we've got your success covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contactus')}
                  className="px-8 py-4 text-white rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#b57edc] via-[#a259c6] to-[#6c3483]"
                >
                  Get Started Today
                </button>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex justify-center order-1 md:order-2">
              <img src="/src/assets/website.jpg" alt="Get Started" className="w-full max-w-md rounded-2xl shadow-2xl object-cover" style={{ minHeight: '260px', maxHeight: '340px' }} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}