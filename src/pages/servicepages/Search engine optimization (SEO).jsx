import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import seoVideo from "../../assets/seo.mp4";


import seoImg from "../../assets/seo.jpg";
import valuesImg from "../../assets/values.jpg";
import faqImg from "../../assets/faq.jpg";



export default function SearchEngineOptimization() {
	return (
		<>
			<Header />
			{/* Hero Section */}
			<section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
				<video
					className="absolute inset-0 w-full h-full object-cover z-0"
					src={seoVideo}
					autoPlay
					loop
					muted
					playsInline
				/>
				<div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
				<div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
					<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
						Search Engine Optimization (SEO)
					</h1>
					<p className="text-lg md:text-xl text-white mb-2 max-w-2xl mx-auto drop-shadow-md">
						Unlock your website's full potential and rank higher on search engines with our proven SEO strategies.
					</p>
				</div>
			</section>

			{/* Why This Service Matters Section */}
			<section className="w-full py-16 bg-white flex flex-col items-center">
				<div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 px-4">
					{/* Left: Image */}
					<div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
						<img src={seoImg} alt="SEO" className="rounded-2xl shadow-xl max-w-md w-full" />
					</div>
					{/* Right: Content */}
					<div className="md:w-1/2 w-full flex flex-col items-start">
						<h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-[#7c5dc7]">Why SEO Matters</h2>
						<p className="text-lg text-[#232136] mb-4">SEO is the foundation of online visibility. With billions of searches every day, ranking higher on search engines means more opportunities for your business to be discovered by potential customers.</p>
						<ul className="list-disc pl-6 text-[#232136] space-y-2">
							<li>Increase organic website traffic and qualified leads</li>
							<li>Build trust and credibility with your audience</li>
							<li>Outperform competitors in search results</li>
							<li>Achieve long-term, sustainable growth</li>
						</ul>
					</div>
				</div>
			</section>
			{/* Our Approach Section */}
			<section className="w-full py-16 bg-white flex flex-col items-center">
			   <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
				   {/* Left: Text Content */}
				   <div className="md:w-1/2 w-full flex flex-col items-start">
					   <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-[#7c3aed]">Our Approach </h2>
					   <p className="text-lg text-[#6d28d9] mb-4">Our SEO approach is built on research, transparency, and continuous optimization. We start by understanding your business, audience, and goals, then craft a custom SEO strategy that drives real, measurable results.</p>
					   <p className="text-base text-[#6d28d9] mb-6">From technical audits and keyword research to on-page optimization and high-quality link building, we use proven methods and the latest tools to boost your search rankings. Our team monitors performance and adapts strategies to keep you ahead of the competition, ensuring your website attracts and converts the right audience.</p>
				   </div>
				   {/* Right: Hexagon Timeline */}
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

		   {/* Benefits Section (SEO) */}
								 <section className="w-full py-16 bg-white flex flex-col items-center">
												<h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-[#7c3aed] text-center">SEO Benefits</h2>
											<div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
				{/* Left: Content (2x2 Grid of Cards) */}
				<div className="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-8 order-1 md:order-1">
																			{/* Card 1 */}
																				<div className="rounded-tl-3xl rounded-br-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white">
																						<h3 className="font-bold text-lg mb-2 text-white">Increased Visibility</h3>
																						<p>Boost your website’s ranking on search engines, making it easier for potential customers to find your business online.</p>
																				</div>
																			{/* Card 2 */}
																				<div className="rounded-tr-3xl rounded-bl-[60px] bg-white p-6 shadow-lg text-[#7c3aed]">
																						<h3 className="font-bold text-lg mb-2 text-[#7c3aed]">Credibility & Trust</h3>
																						<p>Establish your brand as an authority in your industry and build trust with your audience through high search rankings.</p>
																				</div>
																			{/* Card 3 */}
																				<div className="rounded-bl-3xl rounded-tr-[60px] bg-white p-6 shadow-lg text-[#7c3aed]">
																						<h3 className="font-bold text-lg mb-2 text-[#7c3aed]">Long-Term Results</h3>
																						<p>SEO delivers sustainable growth, driving consistent traffic and leads over time without ongoing ad spend.</p>
																				</div>
																			{/* Card 4 */}
																				<div className="rounded-br-3xl rounded-tl-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white">
																						<h3 className="font-bold text-lg mb-2 text-white">Measurable ROI</h3>
																						<p>Track your SEO performance and see real, data-driven results that contribute directly to your business goals.</p>
																				</div>
															</div>
															{/* Right: Image */}
				<div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 order-2 md:order-2">
																			<img src={valuesImg} alt="SEO Benefits" className="rounded-2xl shadow-xl max-w-md w-full object-cover" />
															</div>
											</div>
							</section>

					{/* FAQs Section */}
					   <section className="w-full py-16 bg-white flex flex-col items-center">
						   <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-[#7c3aed] text-center">SEO FAQs</h2>
						   <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
							   {/* Left: FAQ Image */}
							   <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 min-h-full">
								   <img src={faqImg} alt="SEO FAQs" className="rounded-2xl shadow-xl max-w-md w-full object-cover h-full min-h-[400px]" />
							   </div>
							   {/* Right: FAQ Accordion */}
							   <div className="md:w-1/2 w-full min-h-full flex flex-col justify-center">
								   <div className="divide-y divide-violet-200 rounded-xl bg-white shadow-lg">
									   {[
										   {
											   q: 'What is SEO and why is it important?',
											   a: 'SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results, increasing visibility and attracting more organic traffic.'
										   },
										   {
											   q: 'How long does it take to see SEO results?',
											   a: 'SEO is a long-term strategy. Most websites start seeing significant improvements within 3-6 months, depending on competition and industry.'
										   },
										   {
											   q: 'What are the key components of SEO?',
											   a: 'Key components include keyword research, on-page optimization, technical SEO, content creation, and link building.'
										   },
										   {
											   q: 'Do I need ongoing SEO services?',
											   a: 'Yes, SEO requires ongoing effort to maintain and improve rankings as search engine algorithms and competitors change.'
										   },
										   {
											   q: 'Can SEO guarantee top rankings?',
											   a: 'No reputable agency can guarantee #1 rankings, but effective SEO greatly increases your chances of ranking higher and driving more traffic.'
										   }
									   ].map((faq, idx) => (
										   <details key={idx} className="group p-6 cursor-pointer">
											   <summary className="font-semibold text-lg text-[#7c3aed] group-open:text-[#a78bfa] transition-colors flex items-center justify-between">
												   {faq.q}
												   <span className="ml-2 group-open:rotate-90 transition-transform">
													   <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#7c3aed] border-2 border-[#6d28d9] shadow">
														   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															   <polygon points="5,3 12,8 5,13" fill="#fff" />
														   </svg>
													   </span>
												   </span>
											   </summary>
											   <p className="mt-3 text-[#6d28d9] text-base">{faq.a}</p>
										   </details>
									   ))}
								   </div>
							   </div>
						   </div>
					   </section>

					{/* CTA Section */}
					   <section className="w-full py-16 bg-white flex flex-col items-center">
						   <div className="w-full max-w-3xl mx-auto text-center">
							   <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#7c3aed]">Ready to Grow with SEO?</h2>
							   <p className="text-lg text-[#6d28d9] mb-8">Let our experts help you boost your search rankings and drive real business results. Contact us today for a free SEO consultation!</p>
							   <a href="/contact" className="inline-block bg-white text-[#7c3aed] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#ede9fe] transition">Get Started</a>
						   </div>
					   </section>
			<Footer />
		</>
	);
}
