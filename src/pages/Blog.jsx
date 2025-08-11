import { useEffect, useState } from "react";

function getBlogs() {
  return JSON.parse(localStorage.getItem("blogs")) || [];
}
function getLikes() {
  return JSON.parse(localStorage.getItem("likesData")) || {};
}

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [likesData, setLikesData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsPerPage = 2;
  const [showComments, setShowComments] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    setBlogs(getBlogs());
    setLikesData(getLikes());

    // Listen for localStorage changes (cross-tab)
    const handleStorage = (e) => {
      if (e.key === "blogs") {
        setBlogs(getBlogs());
      }
    };
    window.addEventListener("storage", handleStorage);

    // Polling fallback for same-tab updates
    let lastBlogs = JSON.stringify(getBlogs());
    const poll = setInterval(() => {
      const current = JSON.stringify(getBlogs());
      if (current !== lastBlogs) {
        setBlogs(getBlogs());
        lastBlogs = current;
      }
    }, 1000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(poll);
    };
  }, []);

  const handleLike = (blogId) => {
    const newLikes = { ...likesData, [blogId]: (likesData[blogId] || 0) + 1 };
    setLikesData(newLikes);
    localStorage.setItem("likesData", JSON.stringify(newLikes));
  };

  const handleCommentToggle = (blogId) => {
    setShowComments((prev) => ({ ...prev, [blogId]: !prev[blogId] }));
  };

  const handleComment = (blogId, comment) => {
    if (!comment.trim()) return;
    setComments((prev) => {
      const updated = { ...prev, [blogId]: [...(prev[blogId] || []), comment] };
      return updated;
    });
  };

  // Trending blog logic
  let popularBlog = null;
  let highestLikes = 0;
  blogs.forEach((blog, idx) => {
    const likes = likesData[idx] || 0;
    if (likes > highestLikes) {
      highestLikes = likes;
      popularBlog = { ...blog, likes };
    }
  });

  const displayedBlogs = blogs.slice(0, currentIndex + blogsPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-10">
      {/* Styled intro section matching Home1 and the image */}
      <section className="text-center py-10 bg-gradient-to-r from-gray-800 to-gray-900 mb-6">
        <div>
          <span style={{ display: 'block', color: '#53295a', fontWeight: 700, fontSize: '2.5rem', letterSpacing: '1px', lineHeight: 1 }}>marketing is</span>
          <span style={{ display: 'block', color: '#8bc34a', fontWeight: 700, fontSize: '2.5rem', letterSpacing: '1px', lineHeight: 1 }}>insight,</span>
        </div>
        <p className="max-w-2xl mx-auto mt-6 text-lg" style={{ color: '#53295a', fontWeight: 500 }}>
          We have successfully launched 50+ digital marketing campaigns, helping brands increase their online presence, generate quality leads, and boost ROI. Our expertise covers SEO, social media, PPC, content marketing, and analytics—empowering businesses to reach their target audience and achieve measurable growth in the digital landscape.
        </p>
      </section>
      <header className="text-center py-6 bg-gradient-to-r from-gray-800 to-gray-900">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">📖 Our Latest Blogs</h1>
        <p className="text-gray-300">Explore the latest digital marketing strategies, insights, and news.</p>
      </header>
      <section className="popular-blog-section bg-gray-800 rounded-lg shadow-lg max-w-3xl mx-auto mt-8 p-6 text-center">
        <h2 className="text-xl font-bold text-orange-400 mb-4">🔥 Trending Blog</h2>
        {popularBlog ? (
          <div className="blog-post border-2 border-orange-400 p-4 rounded-lg bg-gray-900">
            <h3 className="text-lg font-bold mb-2">{popularBlog.title} (🔥 {popularBlog.likes} Likes)</h3>
            <img src={popularBlog.image} className="blog-img rounded mb-2 mx-auto" alt="Popular Blog" />
            <p className="blog-summary text-gray-300">{popularBlog.summary}</p>
          </div>
        ) : (
          <div>No trending blog yet.</div>
        )}
      </section>
      <main className="max-w-3xl mx-auto mt-8 flex flex-col gap-6" id="blogContainer">
        {displayedBlogs.length === 0 ? (
          <p className="text-center">No blogs available.</p>
        ) : (
          displayedBlogs.map((blog, idx) => {
            const blogId = idx;
            return (
              <div key={blogId} className="blog-post bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-2">{blog.title}</h2>
                <img src={blog.image} alt="Blog" className="blog-img rounded mb-4 mx-auto" />
                <div className="author-info flex items-center gap-3 mb-3 text-gray-400">
                  <img src={blog.authorImage} className="author-pic rounded-full w-9 h-9" alt={blog.author} />
                  <span>{blog.author}</span>
                  <span className="ml-2"><i className="fa fa-calendar"></i> {blog.date}</span>
                </div>
                <p className="blog-summary text-gray-300 mb-2">{blog.summary}</p>
                <p className="blog-content text-gray-200 mb-2">{blog.content}</p>
                <div className="social-icons flex gap-3 text-xl mt-2">
                  {blog.instagram && <a href={blog.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400"><i className="fab fa-instagram"></i></a>}
                  {blog.facebook && <a href={blog.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500"><i className="fab fa-facebook"></i></a>}
                  {blog.whatsapp && <a href={blog.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-400"><i className="fab fa-whatsapp"></i></a>}
                  {blog.linkedin && <a href={blog.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300"><i className="fab fa-linkedin"></i></a>}
                </div>
                <div className="blog-actions flex gap-3 mt-4">
                  <button className="like-btn px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold" onClick={() => handleLike(blogId)}>
                    <i className="fa fa-thumbs-up"></i> Like <span className="like-count">{likesData[blogId] || 0}</span>
                  </button>
                  <button className="comment-btn px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white font-semibold" onClick={() => handleCommentToggle(blogId)}>
                    <i className="fa fa-comment"></i> Comment
                  </button>
                  <button className="share-btn px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-600 text-white font-semibold" onClick={() => {
                    const shareData = { title: blog.title, text: `Check out this blog: ${blog.title}`, url: window.location.href };
                    if (navigator.share) {
                      navigator.share(shareData).catch(console.error);
                    } else {
                      navigator.clipboard.writeText(`${blog.title} - ${window.location.href}`);
                      alert("Blog link copied to clipboard!");
                    }
                  }}>
                    <i className="fa fa-share"></i> Share
                  </button>
                </div>
                {showComments[blogId] && (
                  <div className="comment-section mt-4 bg-gray-900 p-4 rounded">
                    <textarea className="comment-input w-full p-2 rounded mb-2 text-black" placeholder="Write a comment..." rows={2} id={`comment-input-${blogId}`}></textarea>
                    <button className="submit-comment px-3 py-1 bg-blue-400 rounded text-white" onClick={() => {
                      const input = document.getElementById(`comment-input-${blogId}`);
                      if (input && input.value.trim()) {
                        handleComment(blogId, input.value);
                        input.value = "";
                      }
                    }}>Post Comment</button>
                    <div className="comments-list mt-2">
                      {(comments[blogId] || []).map((c, i) => (
                        <p key={i} className="bg-gray-800 rounded p-2 mt-1">{c}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </main>
      {currentIndex + blogsPerPage < blogs.length && (
        <div className="load-more-container text-center mt-6">
          <button className="load-more-btn px-6 py-2 bg-blue-500 rounded text-white font-semibold hover:bg-blue-600" onClick={() => setCurrentIndex(currentIndex + blogsPerPage)}>
            Load More Blogs
          </button>
        </div>
      )}
    </div>
  );
} 