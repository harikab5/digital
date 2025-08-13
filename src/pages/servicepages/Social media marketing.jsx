import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import socialHeroVideo from "../../assets/socialhero.mp4";


import social1Img from "../../assets/social1.jpg";
import social2Img from "../../assets/social2.jpg";
import faqImg from "../../assets/faq.jpg";



export default function SocialMediaMarketing() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={socialHeroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
                        Social Media Marketing
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-2 max-w-2xl mx-auto drop-shadow-md">
                        Amplify your brand’s presence and engage your audience with our expert social media marketing solutions.
                    </p>
                </div>
            </section>

            {/* Why This Service Matters Section */}
            <section className="w-full py-16 bg-white flex flex-col items-center">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 px-4">
                    {/* Left: Image */}
                    <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0 min-h-[350px]">
                        <img src={social1Img} alt="Why Social Media Marketing" className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
                    </div>
                    {/* Right: Content */}
                    <div className="md:w-1/2 w-full flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-[#7c5dc7]">Why Social Media Marketing?</h2>
                        <p className="text-lg text-[#232136] mb-4 text-justify">Social media is where your customers spend their time. A strong social presence builds brand awareness, drives engagement, and turns followers into loyal customers.</p>
                        <ul className="list-disc pl-6 text-[#232136] space-y-2 text-justify">
                            <li>Grow your audience and reach new customers</li>
                            <li>Boost engagement with creative, shareable content</li>
                            <li>Build brand loyalty and community</li>
                            <li>Drive website traffic and conversions</li>
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
      <p className="text-lg mb-4 text-justify">We start by understanding your brand voice, audience, and goals. Our team researches trends, competitors, and platform algorithms to craft a social strategy that gets results.</p>
      <p className="text-base mb-4 text-justify">We create engaging content calendars, design eye-catching visuals, and manage campaigns across all major platforms. Every post is optimized for reach, engagement, and conversion.</p>
      <p className="text-base mb-4 text-justify">We monitor analytics, adapt to trends, and provide transparent reporting so you always know your social impact.</p>
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

           {/* Benefits Section (Social Media Marketing) */}
           <section className="w-full py-16 bg-white flex flex-col items-center">
               <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-[#7c3aed] text-center">Social Media Marketing Benefits</h2>
                                            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
                {/* Left: Content (2x2 Grid of Cards) */}
                <div className="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-8 order-1 md:order-1">
                                                                               {/* Card 1 */}
                                                                               <div className="rounded-tl-3xl rounded-br-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white">
                                                                                   <h3 className="font-bold text-lg mb-2 text-white">Brand Awareness</h3>
                                                                                   <p>Expand your brand’s reach and recognition across all major social platforms with consistent, creative content.</p>
                                                                               </div>
                                                                               {/* Card 2 */}
                                                                               <div className="rounded-tr-3xl rounded-bl-[60px] bg-white p-6 shadow-lg text-[#7c3aed]">
                                                                                   <h3 className="font-bold text-lg mb-2 text-[#7c3aed]">Audience Engagement</h3>
                                                                                   <p>Connect with your audience through interactive posts, stories, and campaigns that spark conversations and loyalty.</p>
                                                                               </div>
                                                                               {/* Card 3 */}
                                                                               <div className="rounded-bl-3xl rounded-tr-[60px] bg-white p-6 shadow-lg text-[#7c3aed]">
                                                                                   <h3 className="font-bold text-lg mb-2 text-[#7c3aed]">Lead Generation</h3>
                                                                                   <p>Drive targeted traffic to your website and generate quality leads with strategic social media advertising.</p>
                                                                               </div>
                                                                               {/* Card 4 */}
                                                                               <div className="rounded-br-3xl rounded-tl-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white">
                                                                                   <h3 className="font-bold text-lg mb-2 text-white">Performance Tracking</h3>
                                                                                   <p>Measure your success with in-depth analytics and reporting to optimize your campaigns for maximum ROI.</p>
                                                                               </div>
                                                            </div>
                                                            {/* Right: Image */}
                <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 order-2 md:order-2">
                    <img src={social2Img} alt="Social Media Marketing Benefits" className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
                </div>
                                            </div>
                            </section>

                    {/* FAQs Section */}
                       <section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-center">Social Media Marketing FAQs</h2>
  <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
    {/* Left: FAQ Image */}
    <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 min-h-full">
      <img src={faqImg} alt="Social Media Marketing FAQs" className="rounded-2xl shadow-xl max-w-md w-full object-cover h-full min-h-[400px]" />
    </div>
    {/* Right: FAQ Accordion */}
    <div className="md:w-1/2 w-full min-h-full flex flex-col justify-center">
      <div className="divide-y divide-violet-200 rounded-xl bg-white shadow-lg">
        {[
          {
            q: 'What is social media marketing?',
            a: 'Social media marketing uses platforms like Facebook, Instagram, LinkedIn, and Twitter to promote your brand, engage your audience, and drive business growth.'
          },
          {
            q: 'Which platforms should my business use?',
            a: 'The best platforms depend on your audience and goals. We help you choose and focus on the channels where your customers are most active.'
          },
          {
            q: 'How often should I post on social media?',
            a: 'Consistency is key. We create a tailored content calendar to keep your brand active and relevant without overwhelming your audience.'
          },
          {
            q: 'Can social media marketing generate leads?',
            a: 'Absolutely! With the right strategy, social media can drive targeted traffic, generate leads, and increase conversions.'
          },
          {
            q: 'How do you measure social media success?',
            a: 'We track engagement, reach, website traffic, and conversions to measure ROI and continually improve your campaigns.'
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
                               <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#7c3aed]">Ready to Grow with Social Media?</h2>
                               <p className="text-lg text-[#6d28d9] mb-8">Let our experts help you build your brand, engage your audience, and drive results through social media. Contact us today for a free consultation!</p>
                               <a href="/contact" className="inline-block bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:from-[#7c3aed] hover:to-[#a78bfa] transition">Get Started</a>
                           </div>
                       </section>
            <Footer />
        </>
    );
}
