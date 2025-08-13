
export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" data-aos="fade-up">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={servicesHero}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#a259c6] mb-2 drop-shadow-lg">Our Services</h1>
                    <p className="text-lg md:text-xl text-white mb-2 max-w-2xl mx-auto drop-shadow-md">Discover the full suite of digital marketing solutions we offer to grow your business online.</p>
                </div>
            </section>

            {/* Our Services Section (modern grid cards) */}
            <section className="w-full py-16 bg-[#f3e8ff] flex flex-col items-center" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide text-[#232136]">Our Services</h2>
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {/* Card 1 */}
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-[#2d1b3c] to-[#18181c] text-white shadow-2xl flex flex-col min-h-[220px] relative overflow-hidden">
                        <span className="text-[7rem] font-extrabold text-[#a259c6] opacity-20 absolute left-0 top-0 leading-none z-0 select-none" style={{ lineHeight: '0.9', letterSpacing: '-0.1em' }}>01</span>
                        <div className="relative z-10 mt-8">
                            <h3 className="text-2xl font-bold mb-2">Search Engine Optimization (SEO)</h3>
                            <p className="text-base text-gray-200">Boost your visibility and rank higher on search engines with expert SEO strategies tailored to your business.</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-[#7c5dc7] to-[#232136] text-white shadow-2xl flex flex-col min-h-[220px] relative overflow-hidden">
                        <span className="text-[7rem] font-extrabold text-[#fff] opacity-20 absolute left-0 top-0 leading-none z-0 select-none" style={{ lineHeight: '0.9', letterSpacing: '-0.1em' }}>02</span>
                        <div className="relative z-10 mt-8">
                            <h3 className="text-2xl font-bold mb-2">Social Media Marketing (SMM)</h3>
                            <p className="text-base text-gray-200">Engage your audience and grow your brand with targeted social media campaigns across all major platforms.</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-[#7c5dc7] to-[#232136] text-white shadow-2xl flex flex-col min-h-[220px] relative overflow-hidden">
                        <span className="text-[7rem] font-extrabold text-[#fff] opacity-20 absolute left-0 top-0 leading-none z-0 select-none" style={{ lineHeight: '0.9', letterSpacing: '-0.1em' }}>03</span>
                        <div className="relative z-10 mt-8">
                            <h3 className="text-2xl font-bold mb-2">Pay-Per-Click Advertising (PPC)</h3>
                            <p className="text-base text-gray-200">Drive instant traffic and leads with high-converting PPC campaigns managed by certified experts.</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-[#2d1b3c] to-[#18181c] text-white shadow-2xl flex flex-col min-h-[220px] relative overflow-hidden">
                        <span className="text-[7rem] font-extrabold text-[#a259c6] opacity-20 absolute left-0 top-0 leading-none z-0 select-none" style={{ lineHeight: '0.9', letterSpacing: '-0.1em' }}>04</span>
                        <div className="relative z-10 mt-8">
                            <h3 className="text-2xl font-bold mb-2">Content Marketing</h3>
                            <p className="text-base text-white">Attract, inform, and convert with compelling content strategies that build authority and trust.</p>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-[#2d1b3c] to-[#18181c] text-white shadow-2xl flex flex-col min-h-[220px] relative overflow-hidden">
                        <span className="text-[7rem] font-extrabold text-[#a259c6] opacity-20 absolute left-0 top-0 leading-none z-0 select-none" style={{ lineHeight: '0.9', letterSpacing: '-0.1em' }}>05</span>
                        <div className="relative z-10 mt-8">
                            <h3 className="text-2xl font-bold mb-2">Email Marketing & Automation</h3>
                            <p className="text-base text-white">Nurture leads and boost retention with personalized, automated email campaigns that drive results.</p>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-[#7c5dc7] to-[#232136] text-white shadow-2xl flex flex-col min-h-[220px] relative overflow-hidden">
                        <span className="text-[7rem] font-extrabold text-[#fff] opacity-20 absolute left-0 top-0 leading-none z-0 select-none" style={{ lineHeight: '0.9', letterSpacing: '-0.1em' }}>06</span>
                        <div className="relative z-10 mt-8">
                            <h3 className="text-2xl font-bold mb-2">Website Design & Development</h3>
                            <p className="text-base text-gray-200">Get a stunning, high-performing website that converts visitors into loyal customers and supports your growth.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* How We Work Section */}
            <section className="w-full py-16 bg-[#c7a6fa] flex text-justify flex-col items-center" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide text-[#232136]">How We Work</h2>
                <div className="w-full max-w-3xl mx-auto flex flex-col gap-0 relative">
                    {/* Timeline Dots and Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 flex flex-col items-center z-0">
                        <div className="h-8 w-2"></div>
                        <div className="flex-1 w-1 bg-gradient-to-b from-[#a259c6] to-[#232136] rounded-full"></div>
                        <div className="h-8 w-2"></div>
                    </div>
                    {/* Steps */}
                    {/* Step 1 */}
                    <div className="flex md:flex-row flex-col items-center mb-8 relative z-10">
                        <div className="md:w-1/2 w-full flex justify-end md:pr-8 order-2 md:order-1">
                            <div className="bg-[#a259c6] text-white rounded-2xl shadow-lg px-8 py-6 max-w-md w-full flex flex-col items-end">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl font-bold mr-2">Step 01</span>
                                    <span className="bg-white text-[#a259c6] rounded-full p-2 ml-2"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" /></svg></span>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-lg mb-1">Discovery & Consultation</div>
                                    <div className="text-sm">We start by understanding your business, goals, and audience to craft a tailored digital marketing plan.</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full flex justify-center md:justify-start order-1 md:order-2"></div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex md:flex-row flex-col items-center mb-8 relative z-10">
                        <div className="md:w-1/2 w-full flex justify-end md:pr-8 order-2 md:order-1"></div>
                        <div className="md:w-1/2 w-full flex justify-start md:pl-8 order-1 md:order-2">
                            <div className="bg-[#232136] text-white rounded-2xl shadow-lg px-8 py-6 max-w-md w-full flex flex-col items-start border border-[#a259c6] md:ml-auto md:mr-0 ml-0 mr-auto">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl font-bold mr-2">Step 02</span>
                                    <span className="bg-[#a259c6] text-white rounded-full p-2 ml-2"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#a259c6" /></svg></span>
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Strategy & Planning</div>
                                    <div className="text-sm">We develop a data-driven strategy, select the right channels, and set clear KPIs for your campaign.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex md:flex-row flex-col items-center mb-8 relative z-10">
                        <div className="md:w-1/2 w-full flex justify-end md:pr-8 order-2 md:order-1">
                            <div className="bg-[#7c5dc7] text-white rounded-2xl shadow-lg px-8 py-6 max-w-md w-full flex flex-col items-end">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl font-bold mr-2">Step 03</span>
                                    <span className="bg-white text-[#7c5dc7] rounded-full p-2 ml-2"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" /></svg></span>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-lg mb-1">Execution & Optimization</div>
                                    <div className="text-sm">We launch your campaigns, monitor performance, and optimize continuously for the best results.</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full flex justify-center md:justify-start order-1 md:order-2"></div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex md:flex-row flex-col items-center mb-8 relative z-10">
                        <div className="md:w-1/2 w-full flex justify-end md:pr-8 order-2 md:order-1"></div>
                        <div className="md:w-1/2 w-full flex justify-start md:pl-8 order-1 md:order-2">
                            <div className="bg-[#232136] text-white rounded-2xl shadow-lg px-8 py-6 max-w-md w-full flex flex-col items-start border border-[#a259c6] md:ml-auto md:mr-0 ml-0 mr-auto">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl font-bold mr-2">Step 04</span>
                                    <span className="bg-[#a259c6] text-white rounded-full p-2 ml-2"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#a259c6" /></svg></span>
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Reporting & Growth</div>
                                    <div className="text-sm">We provide transparent reports and insights, helping you scale and achieve long-term digital growth.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Industries We Serve Section (Home1 color theme) */}
            <section className="w-full py-16 bg-gradient-to-br from-[#f5f3ff] via-[#f3e8ff] to-[#f8fafc] flex flex-col items-center" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-[#7c5dc7] text-center">Industries We Serve</h2>
                <p className="text-lg text-[#232136] mb-10 text-center max-w-2xl">We empower a diverse range of industries with tailored digital marketing strategies that drive measurable results and sustainable growth.</p>
                <div className="w-full max-w-6xl grid text-justify grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {/* Card 1 */}
                    <div className="rounded-xl shadow-lg bg-white flex flex-col min-h-[220px] overflow-hidden">
                        <div className="bg-[#a259c6] px-6 py-4">
                            <span className="text-2xl font-bold text-white">01</span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-[#a259c6] mb-2">Healthcare & Wellness</h3>
                            <p className="text-[#232136] text-sm">Grow your practice and connect with more patients through targeted healthcare digital marketing and reputation management.</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-xl shadow-lg bg-white flex flex-col min-h-[220px] overflow-hidden">
                        <div className="bg-[#7c5dc7] px-6 py-4">
                            <span className="text-2xl font-bold text-white">02</span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-[#7c5dc7] mb-2">E-Commerce & Retail</h3>
                            <p className="text-[#232136] text-sm">Boost online sales and brand loyalty with conversion-driven e-commerce marketing, SEO, and social media campaigns.</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-xl shadow-lg bg-white flex flex-col min-h-[220px] overflow-hidden">
                        <div className="bg-[#a259c6] px-6 py-4">
                            <span className="text-2xl font-bold text-white">03</span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-[#a259c6] mb-2">Education & EdTech</h3>
                            <p className="text-[#232136] text-sm">Attract students and build your institution’s reputation with digital campaigns, content marketing, and lead generation.</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="rounded-xl shadow-lg bg-white flex flex-col min-h-[220px] overflow-hidden">
                        <div className="bg-[#7c5dc7] px-6 py-4">
                            <span className="text-2xl font-bold text-white">04</span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-[#7c5dc7] mb-2">Real Estate & Construction</h3>
                            <p className="text-[#232136] text-sm">Showcase properties, generate leads, and close deals faster with innovative real estate digital marketing solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Awards & Recognitions Section */}
            <section className="w-full py-16 bg-[#c7a6fa] flex flex-col items-center" data-aos="fade-left">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 px-4">
                    {/* Left: Info */}
                    <div className="md:w-1/2 w-full flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-[#000]">Awards & Recognitions</h2>
                        <p className="text-lg text-justify text-[#232136] mb-6">Our commitment to excellence has been recognized by industry leaders and trusted organizations. These achievements reflect our dedication to delivering outstanding digital marketing results for our clients.</p>
                        <ul className="mb-6 space-y-3">
                            <li className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-[#a259c6] mr-3"></span><span className="font-semibold text-[#232136]">Google Partner Agency</span></li>
                            <li className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-[#7c5dc7] mr-3"></span><span className="font-semibold text-[#232136]">Clutch Top Digital Marketing Company 2025</span></li>
                            <li className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-[#a259c6] mr-3"></span><span className="font-semibold text-[#232136]">Meta Business Partner</span></li>
                            <li className="flex items-center"><span className="inline-block w-3 h-3 rounded-full bg-[#7c5dc7] mr-3"></span><span className="font-semibold text-[#232136]">Featured in MarketingProfs & HubSpot Blog</span></li>
                        </ul>
                        <div className="text-sm text-gray-500">Building trust and positioning us as a digital marketing authority.</div>
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <img src="/src/assets/awards.jpg" alt="Awards & Recognitions" className="max-w-xs w-full rounded-2xl shadow-xl border border-[#f3e8ff] bg-[#f8fafc]" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 bg-gradient-to-br from-[#f5f3ff] via-[#f3e8ff] to-[#f8fafc] flex flex-col items-center" data-aos="fade-up">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#7c5dc7]">Ready to Grow Your Business Online?</h2>
                <p className="text-lg text-[#232136] mb-8 text-center max-w-2xl">Join hundreds of businesses who have accelerated their digital marketing success with our expert team and proven strategies.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="bg-[#7c5dc7] hover:bg-[#a259c6] text-white font-semibold px-10 py-3 rounded-xl shadow-lg transition-all text-lg">Get Started Today</button>
                    <button className="border-2 border-[#7c5dc7] text-[#7c5dc7] font-semibold px-10 py-3 rounded-xl bg-white hover:bg-[#f5fafd] transition-all text-lg">Learn More</button>
                </div>
            </section>
            <Footer />
        </>
    );
}
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";
import servicesHero from "../assets/serviceshero.mp4";
