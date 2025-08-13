import React from "react";
import { useParams, Link } from "react-router-dom";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.png";
import image3 from "../assets/3.jpeg";
import Header from "../Header";
import Footer from "../Footer";

const articleDetails = [
  {
    id: "1",
    title: "Boost Your SEO with These Proven Techniques",
    imgSrc: image1,
    content: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. Keyword Research</h3>
        <p className="mb-6">
          Keyword research is the backbone of a successful SEO strategy because it determines the exact terms and
          phrases your audience is actively typing into search engines. Without proper keyword research, you risk
          creating content that no one is searching for, or targeting overly competitive terms you cannot rank for.
          Start by brainstorming seed keywords related to your business and then expand them using tools like Google
          Keyword Planner, Ahrefs, or SEMrush. Look at search volume, competition level, and search intent — whether
          users are looking for information, products, or solutions. Balancing short-tail and long-tail keywords can
          help you capture both broad and niche traffic.
        </p>

        <h3 className="text-xl font-semibold mb-2">2. On-Page Optimization</h3>
        <p className="mb-6">
          On-page optimization is about making your web pages search-engine-friendly while keeping them highly readable
          for humans. It starts with optimizing title tags, meta descriptions, and headers to include target keywords
          naturally. Your title tag should be under 60 characters, catchy, and keyword-rich, while your meta
          description should entice users to click through. Additionally, ensure proper use of H1, H2, and H3 tags to
          create a logical structure. Internal linking is another important element, as it guides both search engines
          and visitors through your site’s content in a strategic manner.
        </p>

        <h3 className="text-xl font-semibold mb-2">3. Quality Content Creation</h3>
        <p className="mb-6">
          Quality content is at the heart of SEO success, and Google’s algorithms are designed to reward websites that
          deliver genuine value. This means producing in-depth, original articles that thoroughly cover the topic and
          answer the user’s intent. Avoid thin content or keyword stuffing — instead, aim to create resources that your
          audience will bookmark, share, and return to. Include relevant images, charts, and videos to make your
          content visually appealing and more engaging. Remember that quality content is not a one-time task; regularly
          updating older articles keeps them relevant and improves rankings over time.
        </p>

        <h3 className="text-xl font-semibold mb-2">4. Backlink Building</h3>
        <p className="mb-6">
          Backlinks act as “votes of confidence” from other websites, signaling to search engines that your content is
          credible and authoritative. High-quality backlinks can significantly boost your rankings, but they must come
          from relevant and trustworthy sources. Guest posting, creating link-worthy content like infographics or
          research reports, and engaging in influencer outreach are proven tactics. Always focus on earning backlinks
          naturally rather than buying them, as low-quality or spammy links can harm your rankings instead of helping.
        </p>

        <h3 className="text-xl font-semibold mb-2">5. Mobile Optimization</h3>
        <p className="mb-6">
          With mobile devices accounting for the majority of internet traffic, a mobile-optimized website is no longer
          optional. Google uses mobile-first indexing, meaning it primarily evaluates the mobile version of your site
          for ranking purposes. Ensure your site has a responsive design that adjusts smoothly to any screen size, and
          test it regularly on different devices. Loading speed is critical — use tools like Google PageSpeed Insights
          to identify issues and make improvements. A slow or clunky mobile site can lead to higher bounce rates and
          lost revenue.
        </p>

        <h3 className="text-xl font-semibold mb-2">6. Technical SEO</h3>
        <p>
          Technical SEO ensures that search engines can easily crawl, interpret, and index your website. This includes
          having a clean site structure, using HTTPS, and fixing crawl errors. XML sitemaps and robots.txt files help
          search engines navigate your site efficiently. Implementing schema markup provides additional context about
          your content, increasing the chances of appearing in rich snippets. Regularly audit your site for broken
          links, duplicate content, and slow-loading pages, as these factors can directly impact your SEO performance.
        </p>
      </>
    ),
  },

  // Similarly expand id: 2 & id: 3 with longer 5–7 line paragraphs...
  {
  id: "2",
  title: "Mastering Social Media Advertising in 2025",
  imgSrc: image2,
  content: (
    <>
      <h3 className="text-xl font-semibold mb-2">1. Platform Selection</h3>
      <p className="mb-6">
        Choosing the right platform is the first step in creating a successful social media advertising strategy.
        Instead of trying to be everywhere, focus on the platforms where your audience is most engaged. For example,
        LinkedIn works well for B2B marketing, Instagram and TikTok are ideal for visually-driven campaigns, and
        Facebook remains a strong option for community-based targeting. Research your target demographic’s age, interests,
        and behaviors to determine the best fit. A platform with high engagement but the wrong audience is a waste of
        ad spend, so strategic selection is key.
      </p>

      <h3 className="text-xl font-semibold mb-2">2. Creative Content</h3>
      <p className="mb-6">
        In 2025, social media is more competitive than ever, making creativity your biggest advantage. Static images are
        no longer enough; high-quality videos, carousels, and interactive posts dominate the space. Your content should
        capture attention within the first three seconds, as users scroll quickly through their feeds. Incorporate
        storytelling, humor, or emotion to make your brand memorable. Don’t be afraid to experiment with trends, but
        ensure that your creative output always aligns with your brand’s voice and objectives.
      </p>

      <h3 className="text-xl font-semibold mb-2">3. Advanced Targeting</h3>
      <p className="mb-6">
        Advanced targeting options are what make social media advertising so powerful. Platforms now offer the ability
        to target based on interests, behaviors, demographics, location, and even life events. Retargeting allows you
        to reconnect with users who have visited your site or engaged with your content but haven’t converted yet.
        Additionally, lookalike audiences help you reach people who share characteristics with your existing customers.
        Using these tools effectively can significantly improve ad relevance and ROI.
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Data-Driven Decisions</h3>
      <p className="mb-6">
        The days of running “set-and-forget” ad campaigns are over. Success in 2025 requires constant monitoring and
        optimization based on real-time performance metrics. Track key indicators like click-through rate, cost per
        acquisition, and conversion rate. Use A/B testing to compare different creatives, headlines, and call-to-action
        placements. Data should guide every decision you make — from budget allocation to creative direction — ensuring
        that your campaigns continually improve over time.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Budget Optimization</h3>
      <p className="mb-6">
        Throwing money at social media ads without a strategy is a quick way to burn through your budget. Start small
        with test campaigns to see which combinations of creative, audience, and placement perform best. Gradually
        increase spending on the highest-performing ads while pausing underperformers. Diversifying across ad formats —
        such as Stories, Reels, and carousel ads — helps reduce risk and increase your chances of success.
      </p>

      <h3 className="text-xl font-semibold mb-2">6. Trend Adaptation</h3>
      <p>
        Social media trends evolve at lightning speed, and what worked last year may already feel outdated. Keep a close
        eye on platform updates, emerging content formats, and viral challenges. Experiment with AR filters, shoppable
        posts, and AI-assisted creative tools to stay ahead. By adapting quickly while maintaining brand consistency,
        you position your business as both innovative and relevant in the eyes of your audience.
      </p>
    </>
  ),
},

  {
  id: "3",
  title: "Email Marketing Best Practices for 2025",
  imgSrc: image3,
  content: (
    <>
      <h3 className="text-xl font-semibold mb-2">1. Personalization at Scale</h3>
      <p className="mb-6">
        Personalization in email marketing has gone far beyond simply inserting the subscriber’s first name. In 2025,
        successful campaigns use behavioral and transactional data to craft emails that feel hand-written for each
        recipient. This could mean recommending products based on previous purchases, offering location-specific
        promotions, or sending tailored content based on a user’s past browsing history. The more relevant your emails,
        the higher your open and click-through rates will be.
      </p>

      <h3 className="text-xl font-semibold mb-2">2. Segmentation Strategies</h3>
      <p className="mb-6">
        Treating all subscribers the same is a guaranteed way to lower engagement. Effective segmentation involves
        grouping subscribers by demographics, purchase history, engagement level, or interests. For example, a
        high-value customer who shops frequently should receive exclusive offers, while inactive subscribers may need a
        re-engagement campaign. By delivering the right message to the right segment at the right time, you can boost
        both conversions and customer loyalty.
      </p>

      <h3 className="text-xl font-semibold mb-2">3. Mobile-First Design</h3>
      <p className="mb-6">
        Since more than 60% of emails are opened on mobile devices, designing for small screens first is essential.
        This means using responsive templates that automatically adjust layout and font size, ensuring buttons are large
        enough to tap easily, and keeping subject lines concise. A poorly formatted mobile email is likely to be
        deleted within seconds, so mobile optimization directly affects your ROI.
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Strong CTAs</h3>
      <p className="mb-6">
        Every email you send should have a clear purpose, and that purpose should be reflected in a strong
        call-to-action (CTA). Whether you want readers to make a purchase, download a guide, or sign up for an event,
        the CTA should be visually distinct and easy to find. Using action-oriented language like “Get Started” or
        “Claim Your Offer” can create urgency and increase conversions.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Automation Workflows</h3>
      <p className="mb-6">
        Automation allows you to send timely and relevant emails without constant manual input. Common workflows include
        welcome sequences for new subscribers, abandoned cart reminders, and win-back campaigns for inactive customers.
        Advanced automation can also trigger messages based on specific behaviors, such as viewing a product or
        completing a purchase. Done right, automation saves time and increases revenue.
      </p>

      <h3 className="text-xl font-semibold mb-2">6. Continuous Testing</h3>
      <p>
        Testing is not a one-time activity but an ongoing process in email marketing. From subject lines and preview
        text to design elements and send times, every part of an email can be optimized. A/B testing lets you compare
        variations to see what resonates best with your audience. Over time, these small optimizations compound into
        significantly higher engagement and conversion rates.
      </p>
    </>
  ),
}
];

  
import { useLocation } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();
  const location = useLocation();
  const article = articleDetails.find((a) => a.id === id);

  // Try to get author info from location.state (for user blogs), else use default
  const author = location.state?.author || "Admin";
  const authorImage = location.state?.authorImage || "https://ui-avatars.com/api/?name=Admin";

  if (!article) {
    // If it's a user-created blog (not in articleDetails), show info from location.state
    if (location.state) {
      return (
        <div className="w-full px-4">
          <Header />
          <Link to="/blog" className="text-violet-600 pt-20mt-20 hover:underline">← Back to Blog</Link>
          <img src={location.state.image} alt={location.state.title} className="w-full h-100 object-cover rounded-lg mb-8" />
          <div className="flex items-center gap-2 mb-4">
            <img src={authorImage} alt={author} className="w-10 h-10 rounded-full object-cover" />
            <span className="text-sm text-gray-600">By {author}</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 text-violet-700">{location.state.title}</h1>
          <div className="text-lg text-gray-800 mb-8">{location.state.content}</div>
          <Link to="/blog" className="text-violet-600 hover:underline">← Back to Blog</Link>
          <Footer />
        </div>
      );
    }
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-violet-600 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="w-full  px-4">
      <Header />
      <Link to="/blog" className="text-violet-600 pt-20mt-20 hover:underline">← Back to Blog</Link>
      <img src={article.imgSrc} alt={article.title} className="w-full h-100 object-cover rounded-lg mb-8" />
      <div className="flex items-center gap-2 mb-4">
        <img src={authorImage} alt={author} className="w-10 h-10 rounded-full object-cover" />
        <span className="text-sm text-gray-600">By {author}</span>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-violet-700">{article.title}</h1>
      <div className="text-lg text-gray-800 mb-8">{article.content}</div>
      <Link to="/blog" className="text-violet-600 hover:underline">← Back to Blog</Link>
      <Footer />
    </div>
  );
}