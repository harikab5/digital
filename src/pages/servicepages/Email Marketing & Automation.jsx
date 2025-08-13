import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import emailHeroVideo from "../../assets/emailhero.mov";


import email1Img from "../../assets/email1.jpg";
import email2Img from "../../assets/email2.jpg";
import faqImg from "../../assets/faq.jpg";



export default function EmailMarketingAutomation() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={emailHeroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
                        Email Marketing & Automation
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-2 max-w-2xl mx-auto drop-shadow-md">
                        Nurture leads, boost engagement, and drive conversions with targeted email campaigns and smart automation.
                    </p>
                </div>
            </section>

            {/* Why This Service Matters Section */}
            <section className="w-full py-16 bg-white flex flex-col items-center">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 px-4">
                    {/* Left: Image */}
                    <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0 min-h-[350px]">
                        <img src={email1Img} alt="Why Email Marketing & Automation" className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
                    </div>
                    {/* Right: Content */}
                    <div className="md:w-1/2 w-full flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-[#7c5dc7]">Why Email Marketing & Automation?</h2>
                        <p className="text-lg text-[#232136] mb-4 text-justify">Email marketing delivers your message directly to your audience’s inbox. Automation ensures the right message reaches the right person at the right time—every time.</p>
                        <ul className="list-disc pl-6 text-[#232136] space-y-2 text-justify">
                            <li>Build lasting relationships with personalized emails</li>
                            <li>Automate follow-ups and nurture leads efficiently</li>
                            <li>Increase engagement and drive repeat business</li>
                            <li>Track results and optimize every campaign</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Our Approach Section */}
            <section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-left">Our Approach</h2>
  <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
    {/* Left: Text Content - Expanded */}
    <div className="md:w-1/2 w-full flex flex-col items-start">
      <p className="text-lg mb-4 text-justify">We begin by analyzing your audience, business goals, and current email performance. Our experts segment your list, identify key touchpoints, and design personalized journeys for every subscriber.</p>
      <p className="text-base mb-4 text-justify">We craft compelling email copy and visuals, set up automation flows, and rigorously test every campaign. Our approach combines creativity with data-driven optimization for maximum engagement.</p>
      <p className="text-base mb-4 text-justify">We monitor results, refine strategies, and provide transparent reporting so you always know the impact of your email marketing efforts.</p>
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

           {/* Benefits Section (Email Marketing & Automation) */}
           <section className="w-full py-16 bg-white flex flex-col items-center">
               <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-[#7c3aed] text-center">Email Marketing & Automation Benefits</h2>
                                            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
                {/* Left: Content (2x2 Grid of Cards) */}
                <div className="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-8 order-1 md:order-1">
                                                                               {/* Card 1 */}
                                                                               <div className="rounded-tl-3xl rounded-br-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white">
                                                                                   <h3 className="font-bold text-lg mb-2 text-white">Personalized Messaging</h3>
                                                                                   <p>Send the right message to the right person at the right time with advanced segmentation and automation.</p>
                                                                               </div>
                                                                               {/* Card 2 */}
                                                                               <div className="rounded-tr-3xl rounded-bl-[60px] bg-white p-6 shadow-lg text-[#7c3aed]">
                                                                                   <h3 className="font-bold text-lg mb-2 text-[#7c3aed]">Automated Workflows</h3>
                                                                                   <p>Save time and increase efficiency with automated welcome series, follow-ups, and drip campaigns.</p>
                                                                               </div>
                                                                               {/* Card 3 */}
                                                                               <div className="rounded-bl-3xl rounded-tr-[60px] bg-white p-6 shadow-lg text-[#7c3aed]">
                                                                                   <h3 className="font-bold text-lg mb-2 text-[#7c3aed]">Higher Engagement</h3>
                                                                                   <p>Boost open and click rates with compelling content and targeted offers your audience loves.</p>
                                                                               </div>
                                                                               {/* Card 4 */}
                                                                               <div className="rounded-br-3xl rounded-tl-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white">
                                                                                   <h3 className="font-bold text-lg mb-2 text-white">Measurable Results</h3>
                                                                                   <p>Track every open, click, and conversion to optimize your campaigns and prove ROI.</p>
                                                                               </div>
                                                            </div>
                                                            {/* Right: Image */}
                <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 order-2 md:order-2">
                    <img src={email2Img} alt="Email Marketing & Automation Benefits" className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
                </div>
                                            </div>
                            </section>

                    {/* FAQs Section */}
                       <section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center">
                           <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-center">Email Marketing FAQs</h2>
                           <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
                               {/* Left: FAQ Image */}
                               <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 min-h-full">
                                   <img src={faqImg} alt="Email Marketing FAQs" className="rounded-2xl shadow-xl max-w-md w-full object-cover h-full min-h-[400px]" />
                               </div>
                               {/* Right: FAQ Accordion */}
                               <div className="md:w-1/2 w-full min-h-full flex flex-col justify-center">
                                   <div className="divide-y divide-violet-200 rounded-xl bg-white shadow-lg">
                                       {[
                                           {
                                               q: 'What is email marketing?',
                                               a: 'Email marketing is a direct way to communicate with your audience, promote your brand, and drive sales through targeted messages.'
                                           },
                                           {
                                               q: 'What is marketing automation?',
                                               a: 'Automation uses technology to send personalized emails at the right time, improving engagement and efficiency.'
                                           },
                                           {
                                               q: 'How do you grow my email list?',
                                               a: 'We use lead magnets, sign-up forms, and ethical list-building strategies to grow your subscriber base.'
                                           },
                                           {
                                               q: 'How do you measure email campaign success?',
                                               a: 'We track open rates, click-through rates, conversions, and ROI to measure campaign effectiveness.'
                                           },
                                           {
                                               q: 'Do you comply with email regulations?',
                                               a: 'Yes, we follow all major regulations (GDPR, CAN-SPAM) to keep your campaigns compliant and your audience protected.'
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
                               <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#7c3aed]">Ready to Grow with Email Marketing?</h2>
                               <p className="text-lg text-[#6d28d9] mb-8">Let our email marketing experts help you nurture leads and grow your business. Contact us today for a free strategy session!</p>
                               <a href="/contact" className="inline-block bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:from-[#7c3aed] hover:to-[#a78bfa] transition">Get Started</a>
                           </div>
                       </section>
            <Footer />
        </>
    );
}
