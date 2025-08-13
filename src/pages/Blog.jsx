import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bloghero from "../assets/bloghero.mp4";
import Header from "../Header";
import Footer from "../Footer";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.png";
import image3 from "../assets/3.jpeg";
import quiz from "../assets/digital quiz.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BlogHero() {
   const questions = [
  {
    question: "What does SEO stand for?",
    options: [
      "Search Engine Optimization",
      "Social Engagement Operation",
      "Systematic Email Outreach",
      "Sales Effective Outreach",
    ],
    correctIndex: 0,
  },
  {
    question: "Which platform is best for B2B marketing?",
    options: ["Instagram", "LinkedIn", "Facebook", "Pinterest"],
    correctIndex: 1,
  },
  {
    question: "What is a PPC campaign?",
    options: [
      "Pay Per Click advertising",
      "Private Product Communication",
      "Public Personal Content",
      "Product Placement Campaign",
    ],
    correctIndex: 0,
  },
  {
    question: "Name a popular email marketing tool.",
    options: ["HubSpot", "Slack", "Zoom", "Dropbox"],
    correctIndex: 0,
  },
  {
    question: "What is a landing page?",
    options: [
      "A homepage",
      "A page users land on after clicking an ad",
      "An about us page",
      "A contact page",
    ],
    correctIndex: 1,
  },
  {
    question: "Which metric shows website traffic sources?",
    options: ["Bounce rate", "Traffic source", "Conversion rate", "CTR"],
    correctIndex: 1,
  },
  {
    question: "What is content marketing?",
    options: [
      "Promoting products by creating valuable content",
      "Cold calling customers",
      "Email spam",
      "Television advertising",
    ],
    correctIndex: 0,
  },
  {
    question: "Name one key social media metric.",
    options: ["Likes", "Emails", "Clicks on a PDF", "Web server logs"],
    correctIndex: 0,
  },
  {
    question: "What does CTA stand for?",
    options: [
      "Call To Action",
      "Click Through Average",
      "Content Target Audience",
      "Customer Trend Analysis",
    ],
    correctIndex: 0,
  },
  {
    question: "Why is mobile optimization important?",
    options: [
      "Most users browse on mobile devices",
      "Mobile sites are faster to build",
      "Desktops are obsolete",
      "Mobile optimization increases bounce rate",
    ],
    correctIndex: 0,
  },
];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    summary: '',
    content: '',
    image: '',
    author: '',
    authorImage: '',
    instagram: '',
    facebook: '',
    whatsapp: '',
    linkedin: '',
    date: ''
  });
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const loadBlogs = () => {
      const stored = JSON.parse(localStorage.getItem("blogs")) || [];
      setBlogs(stored);
    };
    loadBlogs();
    // Listen for storage changes (from AdminDashboard)
    const handleStorage = (e) => {
      if (e.key === 'blogs' || e.key === 'blogs_update') {
        loadBlogs();
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Remove blog
  useEffect(() => {
  const loadBlogs = () => {
    const stored = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(stored);
  };
  loadBlogs();

  const handleStorage = (e) => {
    if (e.key === 'blogs' || e.key === 'blogs_update') {
      loadBlogs();
    }
  };

  window.addEventListener('storage', handleStorage);
  return () => window.removeEventListener('storage', handleStorage);
}, []);



  // Edit blog
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditForm({ ...blogs[index] });
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = () => {
    const updated = blogs.map((b, i) => (i === editIndex ? { ...editForm } : b));
    setBlogs(updated);
    localStorage.setItem("blogs", JSON.stringify(updated));
    setShowEditModal(false);
  };

  const handleOptionClick = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    setSelectedOption(null);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isCorrect = selectedOption === questions[currentQuestion].correctIndex;
  const articles = [
    {
      id: 1,
      title: "Boost Your SEO with These Proven Techniques",
      excerpt:
        "Learn the latest SEO strategies that can help your website rank higher and attract more organic traffic.",
      imgSrc:image1,
  link: "/blog/article/1",
    },
    {
      id: 2,
      title: "Mastering Social Media Advertising in 2025",
      excerpt:
        "Discover how to create compelling social media campaigns that convert followers into customers.",
      imgSrc:image2,
  link: "/blog/article/2",
    },
    {
      id: 3,
      title: "Email Marketing Best Practices for 2025",
      excerpt:
        "Maximize your email marketing ROI with these updated tips and tricks for building engagement.",
      imgSrc:image3,
  link: "/blog/article/3",
    },
  ];
  // Inside your BlogHero component, below Featured Articles section:

const mythsAndFacts = [
  {
    myth: "You need a lot of money to start investing.",
    fact: "You can start investing with small amounts thanks to fractional shares and micro-investing apps.",
  },
  {
    myth: "Checking your credit score hurts it.",
    fact: "Checking your own credit score is a soft inquiry and does not affect your score.",
  },
  {
    myth: "Investing is just like gambling.",
    fact: "Investing is based on research, strategy, and long-term growth, unlike gambling which relies mostly on chance.",
  },
  {
    myth: "Financial planning is only for the wealthy.",
    fact: "Financial planning helps anyone manage money better, regardless of income level.",
  },
  {
    myth: "Credit cards lead to debt and should be avoided.",
    fact: "Used responsibly, credit cards can build your credit score and offer rewards.",
  },
  {
    myth: "You should avoid all risk in investing.",
    fact: "Taking calculated risks is essential for growing your investments over time.",
  },
];
const categories = [
    "SEO",
    "Content Marketing",
    "Social Media",
    "Email Marketing",
    "PPC Advertising",
    "Analytics",
  ];

  const cards = [
    {
      id: 1,
      title: "SEO Basics",
      description: "Learn how to optimize your website for search engines.",
    },
    {
      id: 2,
      title: "Content Strategy",
      description: "Create engaging content that drives traffic and conversions.",
    },
    {
      id: 3,
      title: "Social Media Tactics",
      description: "Boost your brand presence on social platforms.",
    },
    {
      id: 4,
      title: "Email Campaigns",
      description: "Design effective email marketing campaigns.",
    },
    {
      id: 5,
      title: "PPC Fundamentals",
      description: "Get the most out of paid advertising budgets.",
    },
    {
      id: 6,
      title: "Data Analytics",
      description: "Understand your marketing performance with analytics.",
    },
  ];



  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bloghero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-4xl text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Insights & Strategies for the Digital Era
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Stay ahead with expert tips, marketing trends, and growth hacks from
            industry leaders.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#articles"
               onClick={(e) => {
    e.preventDefault();
    document.querySelector("#articles")?.scrollIntoView({ behavior: "smooth" });
  }}
              className="bg-[linear-gradient(to_right,#b57edc,#a259c6,#8d4bb7,#7b3fa2,#6c3483)] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Explore
            </a>
          </motion.div>
        </div>
      </section>

      {/* User Blogs Section */}
      {blogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">Latest Blogs</h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            {blogs.map((blog, i) => (
              <article
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <img src={blog.authorImage} alt={blog.author} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-sm text-gray-600">By {blog.author}</span>
                  </div>
                  <p className="text-gray-700 mb-5">{blog.summary}</p>
                  <div className="flex gap-2 flex-wrap mb-2">
                    {blog.instagram && <a href={blog.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">Instagram</a>}
                    {blog.facebook && <a href={blog.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Facebook</a>}
                    {blog.whatsapp && <a href={blog.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-400 underline">WhatsApp</a>}
                    {blog.linkedin && <a href={blog.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">LinkedIn</a>}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{blog.date}</div>
                  <p className="text-gray-500 text-sm line-clamp-3">{blog.content}</p>
                  {/* Edit/Remove buttons removed for public blog page */}
                </div>
              </article>
            ))}
  {/* Edit Modal removed for public blog page */}
          </div>
        </section>
      )}
      {/* Featured Articles Section */}
      <section
  id="articles"
  className="max-w-7xl mx-auto px-6 py-16 rounded-lg"

>
  <h2 className="text-3xl font-bold text-center mb-12 text-white">
    Featured Articles
  </h2>

  <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
    {articles.map(({ id, title, excerpt, imgSrc, link }) => (
      <article
        key={id}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-700 text-justify mb-5">{excerpt}</p>
          <button
            className="text-indigo-600 font-semibold hover:underline"
            onClick={() => navigate(`/blog/article/${id}`, { state: { title, excerpt, imgSrc } })}
          >
            Read More →
          </button>
        </div>
      </article>
    ))}
  </div>
</section>




<section className="w-full bg-[#c7a6fa] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Left side: Categories list or matter */}
        <div className="md:w-2/4">
          <h2 className="text-3xl font-bold mb-6 border-b text-violet-900 border-violet-400 pb-3">
            Categories
          </h2>
          <div className="mb-6  text-white text-justify">
  <p>
    Explore our main marketing categories, carefully curated to help you master every facet of digital marketing. Whether you're aiming to improve your search rankings, craft compelling content, manage social media channels, or optimize paid advertising campaigns, our expert insights and strategies will empower you to grow your brand and reach your audience effectively.
  </p>

  <p className="mt-4 font-semibold">Here’s what you’ll gain from exploring these categories:</p>

  <ul className="list-disc list-inside mt-2 space-y-1">
    <li>Proven SEO techniques to increase your website’s visibility</li>
    <li>Content creation tips that engage and convert your audience</li>
    <li>Social media strategies to build and nurture your community</li>
    <li>Effective email marketing practices for higher open rates and clicks</li>
    <li>Pay-per-click advertising know-how to maximize your ad spend</li>
      </ul>
</div>


          
        </div>

        {/* Right side: 6 cards in 2 columns x 3 rows */}
        <div className="md:w-2/4 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map(({ id, title, description }) => (
            <div
              key={id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold  text-center mb-2">{title}</h3>

            </div>
          ))}
        </div>
      </div>
    </section>



 <section className="w-full  py-16 ">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12 text-violet-600">
      Myths & Facts
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 text-gray-800">
      {mythsAndFacts.map(({ myth, fact }, idx) => (
        <div key={idx}>
          <p className="font-semibold text-black mb-1">Myth:</p>
          <p className="italic mb-3">"{myth}"</p>

          <p className="font-semibold text-violet-600 mb-1">Fact:</p>
          <p>{fact}</p>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="w-full bg-[#c7a6fa] py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-violet-600 text-center mb-12 text-gray-900">
      Digital Marketing Tools Comparison
    </h2>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
        <thead className="bg-violet-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Tool</th>
            <th className="py-3 px-6 text-left">Pricing</th>
            <th className="py-3 px-6 text-left">Features</th>
            <th className="py-3 px-6 text-left">Best For</th>
            <th className="py-3 px-6 text-left">User Rating</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="py-4 px-6 font-semibold">Google Analytics</td>
            <td className="py-4 px-6">Free</td>
            <td className="py-4 px-6">Web analytics, traffic tracking</td>
            <td className="py-4 px-6">All Businesses</td>
            <td className="py-4 px-6">4.7/5</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-4 px-6 font-semibold">SEMrush</td>
            <td className="py-4 px-6">$119.95/month</td>
            <td className="py-4 px-6">SEO, PPC, content marketing</td>
            <td className="py-4 px-6">Marketers, Agencies</td>
            <td className="py-4 px-6">4.5/5</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-4 px-6 font-semibold">HubSpot</td>
            <td className="py-4 px-6">Free - Custom pricing</td>
            <td className="py-4 px-6">CRM, email marketing, automation</td>
            <td className="py-4 px-6">SMBs to Enterprises</td>
            <td className="py-4 px-6">4.4/5</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-4 px-6 font-semibold">Mailchimp</td>
            <td className="py-4 px-6">Free - $299/month</td>
            <td className="py-4 px-6">Email marketing, automation</td>
            <td className="py-4 px-6">Small to Medium Businesses</td>
            <td className="py-4 px-6">4.3/5</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-4 px-6 font-semibold">Hootsuite</td>
            <td className="py-4 px-6">$49/month</td>
            <td className="py-4 px-6">Social media management</td>
            <td className="py-4 px-6">Social media teams</td>
            <td className="py-4 px-6">4.2/5</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-4 px-6 font-semibold">Google Ads</td>
            <td className="py-4 px-6">Pay per click</td>
            <td className="py-4 px-6">PPC advertising platform</td>
            <td className="py-4 px-6">Advertisers</td>
            <td className="py-4 px-6">4.6/5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>








<section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-50 rounded-lg shadow-md">
      {/* Left Side Image */}      <div>
        <img
          src={quiz}
          alt="Digital Marketing Quiz"
          className="rounded-lg shadow-lg w-full object-cover max-h-[400px]"
          loading="lazy"
        />
      </div>

      {/* Right Side Quiz */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-violet-600">
          Digital Marketing Quiz
        </h2>

        <p className="text-lg mb-8">{questions[currentQuestion].question}</p>

        <div className="flex flex-col gap-4">
          {questions[currentQuestion].options.map((option, idx) => {
            let bgColor = "bg-gray-100 hover:bg-gray-200 cursor-pointer";

            if (selectedOption !== null) {
              if (idx === questions[currentQuestion].correctIndex) {
                bgColor = "bg-green-100 bg-opacity-40 cursor-default";
              } else if (idx === selectedOption && selectedOption !== questions[currentQuestion].correctIndex) {
                bgColor = "bg-red-100 bg-opacity-40 cursor-default";
              } else {
                bgColor = "bg-gray-100 cursor-default";
              }
            }

            return (
              <button
                key={idx}
                className={`text-left p-3 rounded border border-gray-300 ${bgColor} transition-colors duration-300`}
                onClick={() => handleOptionClick(idx)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`px-4 py-2 rounded ${
              currentQuestion === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-violet-600 text-white hover:bg-violet-700"
            }`}
          >
            Previous
          </button>

          <button
            onClick={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
            className={`px-4 py-2 rounded ${
              currentQuestion === questions.length - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-violet-600 text-white hover:bg-violet-700"
            }`}
          >
            Next
          </button>
        </div>

        <p className="mt-6 text-gray-600 text-sm text-center">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>
    </section>

    

      <Footer />
    </>
  );
}