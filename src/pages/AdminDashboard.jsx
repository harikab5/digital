import { useState, useEffect } from "react";
import Header from "../Header";
import UserGrowthChart from "../components/UserGrowthChart";

const sections = [
  { key: "users", label: "Users" },
  { key: "campaigns", label: "Campaigns" },
  { key: "content", label: "Content" },
  { key: "leads", label: "Leads" },
  { key: "analytics", label: "Analytics" },
  { key: "integrations", label: "Integrations" },
];

export default function AdminDashboard() {
  // State for editing a blog
  const [editForm, setEditForm] = useState({
    title: '',
    image: '',
    author: '',
    authorImage: '',
    summary: '',
    content: '',
    instagram: '',
    facebook: '',
    whatsapp: '',
    linkedin: '',
    date: ''
  });
  const [editIndex, setEditIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("users");
  const [darkMode, setDarkMode] = useState(true);
  // State for Edit Modal
  const [showEditModal, setShowEditModal] = useState(false);

  // Real-time data for users and logins
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [loginHistory, setLoginHistory] = useState(JSON.parse(localStorage.getItem("loginHistory")) || []);

  // Real-time user and login history updates
  useEffect(() => {
    const updateUserData = () => {
      setUsers(JSON.parse(localStorage.getItem("users")) || []);
      setLoginHistory(JSON.parse(localStorage.getItem("loginHistory")) || []);
    };
    window.addEventListener("storage", updateUserData);
    // Poll every 2 seconds for real-time updates
    const interval = setInterval(updateUserData, 2000);
    return () => {
      window.removeEventListener("storage", updateUserData);
      clearInterval(interval);
    };
  }, []);

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
  // Prepare data for chart
  const chartData = Object.entries(registrationsByDay)
    .sort(([a], [b]) => new Date(a) - new Date(b))
    .map(([date, registrations]) => ({ date, registrations }));

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
    const loadBlogs = () => {
      const stored = JSON.parse(localStorage.getItem("blogs")) || [];
      setBlogs(stored);
    };
    loadBlogs();
    const handleStorage = (e) => {
      if (e.key === "blogs_update") {
        loadBlogs();
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);


  const handleRemove = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    localStorage.setItem("blogs_update", Date.now().toString());
  };

  const handleChange = (e) => {
    // (removed duplicate code that caused syntax error)
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Edit a blog by index
  const handleEdit = (index) => {
    setEditForm({ ...blogs[index] });
    setEditIndex(index);
    setShowEditModal(true);
  };

  // Handle changes in the edit modal
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Save changes from the edit modal
  const handleEditSave = () => {
    if (editIndex === null) return;
    const updatedBlogs = blogs.map((blog, i) =>
      i === editIndex ? { ...editForm } : blog
    );
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setShowEditModal(false);
    setEditIndex(null);
    // Force reload for Blog page in all tabs
    localStorage.setItem('blogs_update', Date.now().toString());
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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8f6ff] to-[#f3eaff] text-[#222] flex flex-col">
      <Header />
      <div className="flex flex-1">
      {/* Sidebar */}
      <aside className="w-56 bg-[#f3eaff] flex flex-col p-4 border-r border-[#e5d6fa]">
        <h2 className="text-xl font-bold text-center mb-6 text-[#53295a]">☰ Dashboard</h2>
        {sections.map((sec) => (
          <button
            key={sec.key}
            className={`text-left px-4 py-2 rounded mb-2 font-medium flex items-center transition ${activeSection === sec.key ? "bg-[#a259c6] text-white border-2 border-[#53295a]" : "text-[#53295a] hover:bg-[#e5d6fa]"}`}
            style={activeSection === sec.key ? { boxShadow: '0 0 0 2px #a259c6' } : {}}
            onClick={() => setActiveSection(sec.key)}
          >
            {sec.label}
          </button>
        ))}
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="bg-white p-4 rounded mb-6 text-2xl font-bold border border-[#e5d6fa] shadow-sm text-[#a259c6] tracking-wide">
          Admin Dashboard
        </header>
        {/* Section Content */}
        {activeSection === "users" && (
          <section>
            <div className="bg-gradient-to-r from-[#b57edc] via-[#a259c6] to-[#6c3483] text-white p-4 rounded mb-4 font-semibold">Total Registered Users: {users.length}</div>
            <table className="w-full bg-white rounded shadow overflow-hidden mb-8">
              <thead>
                <tr className="bg-[#a259c6] text-white">
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
                    <tr key={i} className="border-b border-[#e5d6fa] hover:bg-[#f3eaff]">
                      <td className="p-3 text-[#53295a]">{u.name}</td>
                      <td className="p-3 text-[#53295a]">{u.email}</td>
                      <td className="p-3 text-[#53295a]">{u.registeredAt}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </section>
        )}
        {activeSection === "campaigns" && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-violet-500">Campaigns Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-violet-800 to-violet-600 rounded-md p-6 text-center shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-white">Total Users</h3>
                <p className="text-2xl font-bold text-white">{users.length}</p>
              </div>
              <div className="bg-gradient-to-br from-violet-700 to-violet-500 rounded-md p-6 text-center shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-white">Today's Registrations</h3>
                <p className="text-2xl font-bold text-white">{todaysRegistrations}</p>
              </div>
              <div className="bg-gradient-to-br from-violet-600 to-violet-400 rounded-md p-6 text-center shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-white">Peak Day</h3>
                <p className="text-2xl font-bold text-white">{peakDay}</p>
              </div>
            </div>
          </section>
        )}
        {activeSection === "content" && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-violet-500">Content Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-md p-6 shadow-md cursor-pointer hover:from-violet-800 hover:to-violet-600" onClick={() => alert('Blog Posts panel')}>
                <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
                  <span role="img" aria-label="blog" className="mr-2">📝</span>
                  <span className="text-violet-300">Blog Posts</span>
                </h3>
                <p className="text-violet-100">Create, edit, and track all blog content for digital marketing.</p>
              </div>
              <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-md p-6 shadow-md cursor-pointer hover:from-violet-800 hover:to-violet-600" onClick={() => alert('Social Media panel')}>
                <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
                  <span role="img" aria-label="social" className="mr-2">📋</span>
                  <span className="text-pink-300">Social Media Content</span>
                </h3>
                <p className="text-violet-100">Manage and schedule social media campaigns and posts.</p>
              </div>
              <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-md p-6 shadow-md cursor-pointer hover:from-violet-800 hover:to-violet-600" onClick={() => alert('Email Campaigns panel')}>
                <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
                  <span role="img" aria-label="email" className="mr-2">📧</span>
                  <span className="text-green-300">Email Campaigns</span>
                </h3>
                <p className="text-violet-100">Plan and create professional marketing emails.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-md p-6 mb-6 min-h-[60px] text-violet-200">
              [Content Panel Placeholder]
            </div>
            <div className="max-w-3xl mx-auto w-full bg-white rounded-xl p-8 mt-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-400 flex items-center gap-2 mb-6"><span role="img" aria-label="blog">📝</span> BLOG POSTS</h2>
              <form className="space-y-6" onSubmit={e => { e.preventDefault(); handleSave(); }}>
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">Blog Title</label>
                  <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Enter blog title" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">Blog Image URL</label>
                  <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Enter blog image URL" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">Author Name</label>
                  <input type="text" name="author" value={form.author} onChange={handleChange} placeholder="Enter author name" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">Author Profile Image URL</label>
                  <input type="text" name="authorImage" value={form.authorImage} onChange={handleChange} placeholder="Enter author profile image URL" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">Blog Summary</label>
                  <textarea name="summary" value={form.summary} onChange={handleChange} placeholder="Enter a short summary" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" rows={2} />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">Blog Content</label>
                  <textarea name="content" value={form.content} onChange={handleChange} placeholder="Enter blog content" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" rows={4} />
                </div>
                <button type="submit" className="w-full py-2 rounded font-bold text-white text-lg bg-violet-700 hover:bg-violet-800 shadow-md transition">SAVE BLOG</button>
              </form>
              <h2 className="text-2xl font-bold text-orange-400 mt-10 mb-4 text-center">SOCIAL MEDIA LINKS (OPTIONAL)</h2>
              <div className="space-y-4 bg-white rounded-xl p-6">
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">Instagram</label>
                  <input type="text" name="instagram" value={form.instagram} onChange={handleChange} placeholder="Enter Instagram URL" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">Facebook</label>
                  <input type="text" name="facebook" value={form.facebook} onChange={handleChange} placeholder="Enter Facebook URL" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">WhatsApp</label>
                  <input type="text" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="Enter WhatsApp URL" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-violet-700">LinkedIn</label>
                  <input type="text" name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="Enter LinkedIn URL" className="w-full px-3 py-2 rounded bg-violet-100 text-violet-900 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 mt-10">Existing Blogs</h3>
              <div className="flex flex-col gap-4">
                {blogs.length === 0 ? (
                  <div className="text-violet-200">No blogs yet.</div>
                ) : (
                  blogs.map((blog, i) => (
                    <div key={i} className="bg-violet-800 p-4 rounded shadow text-white relative">
                      <div className="flex items-center gap-4 mb-2">
                        <img src={blog.image} alt="Blog" className="w-36 h-36 object-cover rounded" />
                        <div>
                          <h4 className="text-xl font-bold text-orange-300">{blog.title}</h4>
                          <div className="flex items-center gap-2 text-violet-200 text-sm">
                            {blog.authorImage && (
                              <img src={blog.authorImage} alt={blog.author} className="w-6 h-6 object-cover rounded-full border border-white" onError={e => {e.target.style.display='none';}} />
                            )}
                            <span>By {blog.author} | {blog.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-violet-100 mb-2">{blog.summary}</div>
                      <div className="text-violet-200 text-sm mb-2">{blog.content}</div>
                      <div className="flex gap-2 mt-2">
                        {blog.instagram && <a href={blog.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">Instagram</a>}
                        {blog.facebook && <a href={blog.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Facebook</a>}
                        {blog.whatsapp && <a href={blog.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-400 underline">WhatsApp</a>}
                        {blog.linkedin && <a href={blog.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">LinkedIn</a>}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button onClick={() => handleEdit(i)} className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-700">Edit</button>
                        <button onClick={() => handleRemove(i)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700">Remove</button>
                      </div>
                    </div>
                  ))
                )}
      {/* Edit Modal for AdminDashboard */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
            <button onClick={() => setShowEditModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">✕</button>
            <h2 className="text-2xl font-bold mb-4 text-violet-700">Edit Blog</h2>
            <div className="space-y-3">
              <input type="text" name="title" value={editForm.title} onChange={handleEditChange} placeholder="Title" className="w-full px-3 py-2 border rounded" />
              <input type="text" name="author" value={editForm.author} onChange={handleEditChange} placeholder="Author" className="w-full px-3 py-2 border rounded" />
              <input type="text" name="authorImage" value={editForm.authorImage} onChange={handleEditChange} placeholder="Author Image URL" className="w-full px-3 py-2 border rounded" />
              <input type="text" name="image" value={editForm.image} onChange={handleEditChange} placeholder="Blog Image URL" className="w-full px-3 py-2 border rounded" />
              <input type="text" name="summary" value={editForm.summary} onChange={handleEditChange} placeholder="Summary" className="w-full px-3 py-2 border rounded" />
              <textarea name="content" value={editForm.content} onChange={handleEditChange} placeholder="Content" className="w-full px-3 py-2 border rounded" rows={4} />
              <input type="text" name="instagram" value={editForm.instagram} onChange={handleEditChange} placeholder="Instagram Link" className="w-full px-3 py-2 border rounded" />
              <input type="text" name="facebook" value={editForm.facebook} onChange={handleEditChange} placeholder="Facebook Link" className="w-full px-3 py-2 border rounded" />
              <input type="text" name="whatsapp" value={editForm.whatsapp} onChange={handleEditChange} placeholder="WhatsApp Link" className="w-full px-3 py-2 border rounded" />
              <input type="text" name="linkedin" value={editForm.linkedin} onChange={handleEditChange} placeholder="LinkedIn Link" className="w-full px-3 py-2 border rounded" />
              <input type="text" name="date" value={editForm.date} onChange={handleEditChange} placeholder="Date" className="w-full px-3 py-2 border rounded" />
            </div>
            <button onClick={handleEditSave} className="mt-6 w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-800">Save Changes</button>
          </div>
        </div>
      )}
              </div>
            </div>
          </section>
        )}
        {activeSection === "leads" && (
          <section>
            <h2 className="text-xl font-bold mb-4">Leads</h2>
            <div className="flex gap-6 flex-wrap mb-8">
              {/* Example team members with person photos */}
              <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-lg shadow-lg p-4 w-64 text-center">
                <img src="/src/assets/lead1.jpg" alt="Priya" className="w-32 h-32 object-cover rounded-full mx-auto mb-2 border-4 border-white" />
                <h4 className="font-bold text-violet-200">Priya Sharma</h4>
                <p className="text-violet-100">Digital Marketing Lead</p>
                <p className="text-violet-100 mt-2">Email: priya@digital.com</p>
                <p className="text-violet-100">Phone: +91 98765 43210</p>
              </div>
              <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-lg shadow-lg p-4 w-64 text-center">
                <img src="/src/assets/lead2.jpg" alt="Rahul" className="w-32 h-32 object-cover rounded-full mx-auto mb-2 border-4 border-white" />
                <h4 className="font-bold text-violet-200">Rahul Verma</h4>
                <p className="text-violet-100">SEO Specialist</p>
                <p className="text-violet-100 mt-2">Email: rahul@digital.com</p>
                <p className="text-violet-100">Phone: +91 91234 56789</p>
              </div>
              <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-lg shadow-lg p-4 w-64 text-center">
                <img src="/src/assets/lead3.jpg" alt="Aisha" className="w-32 h-32 object-cover rounded-full mx-auto mb-2 border-4 border-white" />
                <h4 className="font-bold text-violet-200">Aisha Khan</h4>
                <p className="text-violet-100">Content Strategist</p>
                <p className="text-violet-100 mt-2">Email: aisha@digital.com</p>
                <p className="text-violet-100">Phone: +91 99887 66554</p>
              </div>
            </div>
            <div className="mt-8 bg-gradient-to-br from-violet-800 to-violet-600 p-6 rounded shadow">
              <h2 className="text-orange-200 text-xl font-bold mb-4">Leadership Insights</h2>
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gradient-to-br from-violet-900 to-violet-700 p-4 rounded text-center font-bold text-violet-100">Total Leads<br />124</div>
                <div className="flex-1 bg-gradient-to-br from-violet-900 to-violet-700 p-4 rounded text-center font-bold text-violet-100">Active Campaigns<br />18</div>
                <div className="flex-1 bg-gradient-to-br from-violet-900 to-violet-700 p-4 rounded text-center font-bold text-violet-100">Success Rate<br />92%</div>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-white">Team Performance</h4>
                <div className="w-full bg-violet-700 rounded h-6 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-400 to-violet-200 h-6 rounded" style={{ width: "85%" }}>85%</div>
                </div>
                <h4 className="font-bold mt-2 text-white">Marketing Reach</h4>
                <div className="w-full bg-violet-700 rounded h-6 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-400 to-violet-200 h-6 rounded" style={{ width: "70%" }}>70%</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-violet-900 to-violet-700 p-4 rounded mt-4 italic text-center text-violet-200">"Leadership is not about titles, positions, or flowcharts. It is about one life influencing another."<br /><span className="block mt-2 text-violet-100">- John C. Maxwell</span></div>
            </div>
          </section>
        )}
        {activeSection === "analytics" && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#53295a]">User Analytics</h2>
            <div className="bg-gradient-to-br from-[#7c3aed] to-[#a259c6] p-6 rounded shadow mb-4">
              <UserGrowthChart data={chartData} />
            </div>
            <div className="bg-gradient-to-br from-[#7c3aed] to-[#a259c6] text-white p-4 rounded font-semibold mb-4">
              <p>Total Registered Users: {users.length}</p>
              <p>Total Logins: {loginHistory.length}</p>
            </div>
          </section>
        )}
        {activeSection === "integrations" && (
          <section>
            <h2 className="text-xl font-bold mb-4">Integrations</h2>
            <div className="bg-gradient-to-br from-violet-900 to-violet-700 p-6 rounded shadow">
              <div className="mb-4">
                <h3 className="font-bold mb-2 text-violet-200">Google Analytics</h3>
                <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder="Enter Google Analytics Tracking ID" />
                <button className="px-4 py-2 bg-gradient-to-r from-violet-700 to-violet-500 rounded text-white font-semibold hover:from-violet-600 hover:to-violet-400">Test Connection</button>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2 text-violet-200">Facebook Pixel</h3>
                <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder="Enter Facebook Pixel ID" />
                <button className="px-4 py-2 bg-gradient-to-r from-violet-700 to-violet-500 rounded text-white font-semibold hover:from-violet-600 hover:to-violet-400">Test Connection</button>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2 text-violet-200">Mailchimp</h3>
                <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder="Enter Mailchimp API Key" />
                <button className="px-4 py-2 bg-gradient-to-r from-violet-700 to-violet-500 rounded text-white font-semibold hover:from-violet-600 hover:to-violet-400">Test Connection</button>
              </div>
              <button className="w-full py-2 bg-gradient-to-r from-violet-700 to-violet-500 text-white rounded font-semibold hover:from-violet-600 hover:to-violet-400 transition mt-4">Save Integrations</button>
            </div>
          </section>
        )}
      </main>
      </div>
    </div>
  );
}