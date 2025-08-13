import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import IndexSplash from "./pages/IndexSplash";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUs";
import ContactUsHero from "./pages/ContactUs";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import AdminDashboard from "./pages/AdminDashboard";
import Services from "./pages/services";
import SearchEngineOptimization from "./pages/servicepages/Search engine optimization (SEO)";
import SocialMediaMarketing from "./pages/servicepages/Social media marketing";
import PayPerClickAdvertising from "./pages/servicepages/Pay-Per-Click Advertising (PPC)";
import ContentMarketing from "./pages/servicepages/Content Marketing";
import EmailMarketingAutomation from "./pages/servicepages/Email Marketing & Automation";
import WebsiteDesignDevelopment from "./pages/servicepages/Website Design & Development";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexSplash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home1" element={<Home1 />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/article/:id" element={<ArticleDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/home2" element={<Home2 />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contactus" element={<ContactUsHero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/seo" element={<SearchEngineOptimization />} />
        <Route path="/services/smm" element={<SocialMediaMarketing />} />
        <Route path="/services/ppc" element={<PayPerClickAdvertising />} />
        <Route path="/services/content" element={<ContentMarketing />} />
        <Route path="/services/email" element={<EmailMarketingAutomation />} />
        <Route path="/services/web" element={<WebsiteDesignDevelopment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
