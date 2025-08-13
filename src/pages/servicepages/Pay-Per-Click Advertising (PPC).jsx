import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import ppcHeroVideo from "../../assets/ppchero.mp4";


import ppc1Img from "../../assets/ppc1.jpg";
import ppc2Img from "../../assets/ppc2.jpg";
import faqImg from "../../assets/faq.jpg";



export default function PayPerClickAdvertising() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={ppcHeroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
                        Pay-Per-Click Advertising (PPC)
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-2 max-w-2xl mx-auto drop-shadow-md">
                        Drive instant, targeted traffic to your business and maximize ROI with our expert PPC management services.
                    </p>
                </div>
            </section>

            {/* Why This Service Matters Section */}
            <section className="w-full py-16 bg-white flex flex-col items-center">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 px-4">
                    {/* Left: Image */}
                    <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0 min-h-[350px]">
                        <img src={ppc1Img} alt="Why PPC" className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
                    </div>
                    {/* Right: Content */}
                    <div className="md:w-1/2 w-full flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-[#7c5dc7]">Why PPC?</h2>
                        <p className="text-lg text-[#232136] mb-4 text-justify">PPC puts your business at the top of search results instantly. Reach your ideal customers, control your budget, and see measurable results from day one.</p>
                        <ul className="list-disc pl-6 text-[#232136] space-y-2 text-justify">
                            <li>Instantly drive qualified traffic to your website</li>
                            <li>Target your ideal audience with precision</li>
                            <li>Control your ad spend and maximize ROI</li>
                            <li>Get measurable, real-time results</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Our Approach Section */}
            <section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-center">Our Approach</h2>
  <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
    {/* Left: Text Content - Expanded */}
    <div className="md:w-1/2 w-full flex flex-col items-start">
      <p className="text-lg mb-4 text-justify">We start with a comprehensive audit of your current PPC campaigns and business objectives. Our team researches keywords, competitors, and audience segments to build a strategy that maximizes ROI.</p>
      <p className="text-base mb-4 text-justify">We create compelling ad copy, design high-converting landing pages, and set up precise targeting. Every campaign is monitored and optimized in real time for best results.</p>
      <p className="text-base mb-4 text-justify">We provide transparent reporting and ongoing consultation, so you’re always informed and in control of your ad spend.</p>
    </div>
    {/* Right: Timeline or Image */}
    <div className="md:w-1/2 w-full flex flex-wrap justify-center gap-6">
      {[
        { title: 'STRATEGY LAUNCH', year: '2020' },
        { title: 'BRAND GROWTH', year: '2021' },
        { title: 'GLOBAL REACH', year: '2022' },
        { title: 'INNOVATION HUB', year: '2023' },
        { title: 'PERFORMANCE FOCUS', year: '2024' },
        { title: 'AI-DRIVEN MARKETING', year: '2025' },
      ].map((item, idx) => (
        <div key={idx} className="w-36 h-40 flex flex-col items-center justify-center relative">
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon points="50,5 95,32.5 95,82.5 50,110 5,82.5 5,32.5" fill="#fff" stroke="#a78bfa" strokeWidth="2" />
          </svg>
          <div className="absolute top-10 left-0 w-full flex flex-col items-center px-2">
            <span className="text-sm text-[#7c3aed] font-semibold tracking-wide mb-1 text-center">{item.title}</span>
            <span className="text-2xl text-[#6d28d9] font-bold text-center">{item.year}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

           {/* Benefits Section (PPC) */}
           <section className="w-full py-16 bg-white flex flex-col items-center">
               <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-[#7c3aed] text-center">PPC Benefits</h2>
                                            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
                {/* Left: Content (2x2 Grid of Cards) */}
                <div className="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-8 order-1 md:order-1">
                                                                               {/* Card 1 */}
                                                                               <div className="rounded-tl-3xl rounded-br-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white">
                                                                                   <h3 className="font-bold text-lg mb-2 text-white">Immediate Results</h3>
                                                                                   <p>Launch campaigns and start seeing traffic and leads right away—no waiting for organic growth.</p>
                                                                               </div>
                                                                               {/* Card 2 */}
                                                                               <div className="rounded-tr-3xl rounded-bl-[60px] bg-white p-6 shadow-lg text-[#7c3aed]">
                                                                                   <h3 className="font-bold text-lg mb-2 text-[#7c3aed]">Precise Targeting</h3>
                                                                                   <p>Reach your ideal customers by targeting specific keywords, locations, devices, and demographics.</p>
                                                                               </div>
                                                                               {/* Card 3 */}
                                                                               <div className="rounded-bl-3xl rounded-tr-[60px] bg-white p-6 shadow-lg text-[#7c3aed]">
                                                                                   <h3 className="font-bold text-lg mb-2 text-[#7c3aed]">Flexible Budget</h3>
                                                                                   <p>Set your own budget and adjust spending anytime to maximize your return on investment.</p>
                                                                               </div>
                                                                               {/* Card 4 */}
                                                                               <div className="rounded-br-3xl rounded-tl-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white">
                                                                                   <h3 className="font-bold text-lg mb-2 text-white">Transparent Analytics</h3>
                                                                                   <p>Track every click, conversion, and dollar spent with detailed, real-time reporting.</p>
                                                                               </div>
                                                            </div>
                                                            {/* Right: Image */}
                <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 order-2 md:order-2">
                    <img src={ppc2Img} alt="PPC Benefits" className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
                </div>
                                            </div>
                            </section>

                    {/* FAQs Section */}
                       <section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-center">PPC Advertising FAQs</h2>
  <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
    {/* Left: FAQ Image */}
    <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 min-h-full">
      <img src={faqImg} alt="PPC Advertising FAQs" className="rounded-2xl shadow-xl max-w-md w-full object-cover h-full min-h-[400px]" />
    </div>
    {/* Right: FAQ Accordion */}
    <div className="md:w-1/2 w-full min-h-full flex flex-col justify-center">
      <div className="divide-y divide-violet-200 rounded-xl bg-white shadow-lg">
        {[
          {
            q: 'What is PPC advertising?',
            a: 'PPC (Pay-Per-Click) is a digital advertising model where advertisers pay each time a user clicks on their ad.'
          },
          {
            q: 'Which platforms do you use for PPC?',
            a: 'We manage PPC campaigns on Google Ads, Bing Ads, Facebook, Instagram, LinkedIn, and more.'
          },
          {
            q: 'How do you optimize PPC campaigns?',
            a: 'We use keyword research, ad copy testing, audience targeting, and ongoing performance analysis to maximize ROI.'
          },
          {
            q: 'What budget is needed for PPC?',
            a: 'Budgets vary by industry and goals. We help you set a budget that aligns with your objectives and maximizes results.'
          },
          {
            q: 'How do you measure PPC success?',
            a: 'We track metrics like clicks, conversions, cost-per-click, and return on ad spend to measure campaign effectiveness.'
          }
        ].map((faq, idx) => (
          <details key={idx} className="group p-6 cursor-pointer">
            <summary className="font-semibold text-lg text-black group-open:text-[#a78bfa] transition-colors flex items-center justify-between">
              {faq.q}
              <span className="ml-2 group-open:rotate-90 transition-transform">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#7c3aed] border-2 border-[#6d28d9] shadow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5,3 12,8 5,13" fill="#fff" />
                  </svg>
                </span>
              </span>
            </summary>
            <p className="mt-3 text-black text-base">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </div>
</section>

                    {/* CTA Section */}
                       <section className="w-full py-16 bg-white flex flex-col items-center">
                           <div className="w-full max-w-3xl mx-auto text-center">
                               <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#7c3aed]">Ready to Grow with PPC?</h2>
                               <p className="text-lg text-[#6d28d9] mb-8">Let our PPC experts help you reach your goals faster. Contact us today for a free PPC strategy session!</p>
                               <a href="/contact" className="inline-block bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:from-[#7c3aed] hover:to-[#a78bfa] transition">Get Started</a>
                           </div>
                       </section>
            <Footer />
        </>
    );
}
