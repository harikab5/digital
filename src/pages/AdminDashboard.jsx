import { useState, useEffect } from "react";

const sections = [
  { key: "users", label: "👤 Users" },
  { key: "campaigns", label: "📈 Campaigns" },
  { key: "content", label: "✏️ Content" },
  { key: "leads", label: "👥 Leads" },
  { key: "analytics", label: "📊 Analytics" },
  { key: "integrations", label: "⚙️ Integrations" },
];

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("users");
  const [darkMode, setDarkMode] = useState(true);

  // Dummy data for demonstration
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loginHistory = JSON.parse(localStorage.getItem("loginHistory")) || [];

  // Calculate campaign stats
  const today = new Date().toLocaleDateString();
  const todaysRegistrations = users.filter(u => {
    if (!u.registeredAt) return false;
    // Extract date part from registeredAt
    const datePart = u.registeredAt.split(",")[0].trim();
    return datePart === today;
  }).length;
  // Count registrations per day
  const registrationsByDay = users.reduce((acc, u) => {
    if (!u.registeredAt) return acc;
    const datePart = u.registeredAt.split(",")[0].trim();
    acc[datePart] = (acc[datePart] || 0) + 1;
    return acc;
  }, {});
  let peakDay = "-";
  let maxRegs = 0;
  for (const [date, count] of Object.entries(registrationsByDay)) {
    if (count > maxRegs) {
      maxRegs = count;
      peakDay = date;
    }
  }

  const [form, setForm] = useState({
    title: "",
    image: "",
    author: "",
    authorImage: "",
    summary: "",
    content: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
    linkedin: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(stored);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };
  function isValidUrl(url) {
    try {
      if (!url) return true;
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
  const handleSave = () => {
    // Required fields
    if (!form.title || !form.image || !form.author || !form.authorImage || !form.summary || !form.content) {
      setError("Please fill all required fields.");
      setSuccess("");
      return;
    }
    // Validate URLs
    if (!isValidUrl(form.image)) {
      setError("Please enter a valid Blog Image URL.");
      setSuccess("");
      return;
    }
    if (!isValidUrl(form.authorImage)) {
      setError("Please enter a valid Author Profile Image URL.");
      setSuccess("");
      return;
    }
    if (form.instagram && !isValidUrl(form.instagram)) {
      setError("Please enter a valid Instagram URL.");
      setSuccess("");
      return;
    }
    if (form.facebook && !isValidUrl(form.facebook)) {
      setError("Please enter a valid Facebook URL.");
      setSuccess("");
      return;
    }
    if (form.whatsapp && !isValidUrl(form.whatsapp)) {
      setError("Please enter a valid WhatsApp URL.");
      setSuccess("");
      return;
    }
    if (form.linkedin && !isValidUrl(form.linkedin)) {
      setError("Please enter a valid LinkedIn URL.");
      setSuccess("");
      return;
    }
    // Save blog
    const newBlog = { ...form, date: new Date().toLocaleString() };
    const updatedBlogs = [newBlog, ...blogs];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    setForm({
      title: "",
      image: "",
      author: "",
      authorImage: "",
      summary: "",
      content: "",
      instagram: "",
      facebook: "",
      whatsapp: "",
      linkedin: ""
    });
    setError("");
    setSuccess("Blog saved successfully!");
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen flex" : "bg-gray-100 text-gray-900 min-h-screen flex"}>
      {/* Sidebar */}
      <aside className={darkMode ? "w-56 bg-gray-800 flex flex-col p-4 border-r border-gray-700" : "w-56 bg-gray-200 flex flex-col p-4 border-r border-gray-300"}>
        <h2 className="text-xl font-bold text-center mb-6">☰ Dashboard</h2>
        <button
          className="theme-btn mb-4 px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        {sections.map((sec) => (
          <button
            key={sec.key}
            className={`text-left px-4 py-2 rounded mb-2 font-medium transition ${activeSection === sec.key ? (darkMode ? "bg-blue-600 text-white" : "bg-blue-300 text-black") : (darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-300")}`}
            onClick={() => setActiveSection(sec.key)}
          >
            {sec.label}
          </button>
        ))}
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className={darkMode ? "bg-gray-800 p-4 rounded mb-6 text-2xl font-bold border border-gray-700" : "bg-gray-200 p-4 rounded mb-6 text-2xl font-bold border border-gray-300"}>
          Admin Dashboard
        </header>
        {/* Section Content */}
        {activeSection === "users" && (
          <section>
            <div className="bg-blue-900 text-white p-4 rounded mb-4 font-semibold">Total Registered Users: {users.length}</div>
            <table className="w-full bg-gray-800 rounded shadow overflow-hidden mb-8">
              <thead>
                <tr className="bg-blue-700">
                  <th className="p-3 text-left">Full Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Registered At</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr><td colSpan={3} className="p-3 text-center text-gray-400">No registered users yet.</td></tr>
                ) : (
                  users.map((u, i) => (
                    <tr key={i} className="border-b border-gray-700 hover:bg-gray-700">
                      <td className="p-3">{u.name}</td>
                      <td className="p-3">{u.email}</td>
                      <td className="p-3">{u.registeredAt}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </section>
        )}
        {activeSection === "campaigns" && (
          <section>
            <h2 className="text-blue-400 text-xl font-bold mb-4">Campaigns Overview</h2>
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-blue-800 p-4 rounded text-center font-bold">Total Users<br />{users.length}</div>
              <div className="flex-1 bg-blue-700 p-4 rounded text-center font-bold">Today's Registrations<br />{todaysRegistrations}</div>
              <div className="flex-1 bg-blue-600 p-4 rounded text-center font-bold">Peak Day<br />{peakDay}</div>
            </div>
           </section>
        )}
        {activeSection === "content" && (
          <section>
            <h2 className="text-xl font-bold mb-4">Content Management</h2>
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-gray-800 p-4 rounded cursor-pointer hover:bg-blue-800" onClick={() => alert('Blog Posts panel')}>
                <h3 className="font-bold text-blue-400">📝 Blog Posts</h3>
                <p>Create, edit, and track all blog content for digital marketing.</p>
              </div>
              <div className="flex-1 bg-gray-800 p-4 rounded cursor-pointer hover:bg-blue-800" onClick={() => alert('Social Media panel')}>
                <h3 className="font-bold text-pink-400">📱 Social Media Content</h3>
                <p>Manage and schedule social media campaigns and posts.</p>
              </div>
              <div className="flex-1 bg-gray-800 p-4 rounded cursor-pointer hover:bg-blue-800" onClick={() => alert('Email Campaigns panel')}>
                <h3 className="font-bold text-green-400">📧 Email Campaigns</h3>
                <p>Plan and create professional marketing emails.</p>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded shadow mb-8">[Content Panel Placeholder]</div>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-orange-400 flex items-center gap-2 justify-center"><span role='img' aria-label='blog'>📝</span> BLOG POSTS</h2>
            </div>
            {/* Blog Post Form with Validation and Save */}
            <form className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col gap-6 mb-8" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">Blog Title</label>
                <input name="title" value={form.title} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" placeholder="Enter blog title" />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">Blog Image URL</label>
                <input name="image" value={form.image} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" placeholder="Enter blog image URL" />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">Author Name</label>
                <input name="author" value={form.author} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" placeholder="Enter author name" />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">Author Profile Image URL</label>
                <input name="authorImage" value={form.authorImage} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" placeholder="Enter author profile image URL" />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">Blog Summary</label>
                <textarea name="summary" value={form.summary} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" rows={3} placeholder="Enter a short summary"></textarea>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">Blog Content</label>
                <textarea name="content" value={form.content} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" rows={5} placeholder="Enter blog content"></textarea>
              </div>
              {error && <div className="text-red-400 font-semibold text-center">{error}</div>}
              {success && <div className="text-green-400 font-semibold text-center">{success}</div>}
              <button type="button" onClick={handleSave} className="w-full py-3 mt-4 rounded font-bold text-white bg-gradient-to-r from-orange-400 to-pink-400 hover:from-pink-400 hover:to-orange-400 transition">SAVE BLOG</button>
            </form>
            <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col gap-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-orange-400 text-center">SOCIAL MEDIA LINKS (OPTIONAL)</h2>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">Instagram</label>
                <input name="instagram" value={form.instagram} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" placeholder="Enter Instagram URL" />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">Facebook</label>
                <input name="facebook" value={form.facebook} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" placeholder="Enter Facebook URL" />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">WhatsApp</label>
                <input name="whatsapp" value={form.whatsapp} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" placeholder="Enter WhatsApp URL" />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-300">LinkedIn</label>
                <input name="linkedin" value={form.linkedin} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" placeholder="Enter LinkedIn URL" />
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-white mb-2">Existing Blogs</h3>
              <div className="flex flex-col gap-4">
                {blogs.length === 0 ? (
                  <div className="text-gray-400">No blogs yet.</div>
                ) : (
                  blogs.map((blog, i) => (
                    <div key={i} className="bg-gray-800 p-4 rounded shadow text-white">
                      <div className="flex items-center gap-4 mb-2">
                        <img src={blog.image} alt="Blog" className="w-36 h-36 object-cover rounded" />
                        <div>
                          <h4 className="text-xl font-bold text-orange-300">{blog.title}</h4>
                          <div className="text-gray-400 text-sm">By {blog.author} | {blog.date}</div>
                        </div>
                      </div>
                      <div className="text-gray-300 mb-2">{blog.summary}</div>
                      <div className="text-gray-400 text-sm mb-2">{blog.content}</div>
                      <div className="flex gap-2 mt-2">
                        {blog.instagram && <a href={blog.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">Instagram</a>}
                        {blog.facebook && <a href={blog.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Facebook</a>}
                        {blog.whatsapp && <a href={blog.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-400 underline">WhatsApp</a>}
                        {blog.linkedin && <a href={blog.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">LinkedIn</a>}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        )}
        {activeSection === "leads" && (
          <section>
            <h2 className="text-xl font-bold mb-4">Leads</h2>
            <div className="flex gap-6 flex-wrap">
              {leads.map((lead, i) => (
                <div key={i} className="bg-gray-800 rounded-lg shadow-lg p-4 w-64 text-center">
                  <img src={lead.img} alt={lead.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-2" />
                  <h4 className="font-bold text-blue-400">{lead.name}</h4>
                  <p className="text-gray-400">{lead.role}</p>
                  <p className="text-gray-300 mt-2">Email: {lead.email}</p>
                  <p className="text-gray-300">Phone: {lead.phone}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-900 p-6 rounded shadow">
              <h2 className="text-orange-400 text-xl font-bold mb-4">🚀 Leadership Insights</h2>
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-800 p-4 rounded text-center font-bold">Total Leads<br />124</div>
                <div className="flex-1 bg-gray-800 p-4 rounded text-center font-bold">Active Campaigns<br />18</div>
                <div className="flex-1 bg-gray-800 p-4 rounded text-center font-bold">Success Rate<br />92%</div>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Team Performance</h4>
                <div className="w-full bg-gray-700 rounded h-6 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-6 rounded" style={{ width: "85%" }}>85%</div>
                </div>
                <h4 className="font-bold mt-2">Marketing Reach</h4>
                <div className="w-full bg-gray-700 rounded h-6 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-6 rounded" style={{ width: "70%" }}>70%</div>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded mt-4 italic text-center">"Leadership is not about titles, positions, or flowcharts. It is about one life influencing another."<br /><span className="block mt-2 text-gray-400">- John C. Maxwell</span></div>
            </div>
          </section>
        )}
        {activeSection === "analytics" && (
          <section>
            <h2 className="text-xl font-bold mb-4">📊 User Analytics</h2>
            <div className="bg-gray-800 p-6 rounded shadow mb-4">[User Growth Chart Placeholder]</div>
            <div className="bg-blue-900 text-white p-4 rounded font-semibold">
              <p>Total Registered Users: 2</p>
              <p>Total Logins: 5</p>
            </div>
          </section>
        )}
        {activeSection === "integrations" && (
          <section>
            <h2 className="text-xl font-bold mb-4">⚙️ Integrations</h2>
            <div className="bg-gray-800 p-6 rounded shadow">
              <div className="mb-4">
                <h3 className="font-bold mb-2">Google Analytics</h3>
                <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder="Enter Google Analytics Tracking ID" />
                <button className="px-4 py-2 bg-blue-500 rounded text-white font-semibold hover:bg-blue-600">Test Connection</button>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2">Facebook Pixel</h3>
                <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder="Enter Facebook Pixel ID" />
                <button className="px-4 py-2 bg-blue-500 rounded text-white font-semibold hover:bg-blue-600">Test Connection</button>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2">Mailchimp</h3>
                <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder="Enter Mailchimp API Key" />
                <button className="px-4 py-2 bg-blue-500 rounded text-white font-semibold hover:bg-blue-600">Test Connection</button>
              </div>
              <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded font-semibold hover:from-cyan-400 hover:to-blue-500 transition mt-4">Save Integrations</button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
} 