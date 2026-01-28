import { useState, useEffect } from 'react';
import './Blog.css';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    fetch('/data/blog/index.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error loading blog posts:', err));
  }, []);

  const openPost = async (post) => {
    try {
      const response = await fetch(`/data/blog/${post.file}`);
      const content = await response.text();
      setPostContent(content);
      setSelectedPost(post);
    } catch (err) {
      console.error('Error loading post:', err);
    }
  };

  const closePost = () => {
    setSelectedPost(null);
    setPostContent('');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Simple markdown renderer
  const renderMarkdown = (text) => {
    if (!text) return null;

    return text.split('\n').map((line, index) => {
      // Headers
      if (line.startsWith('### ')) {
        return <h4 key={index}>{line.replace('### ', '')}</h4>;
      }
      if (line.startsWith('## ')) {
        return <h3 key={index}>{line.replace('## ', '')}</h3>;
      }
      if (line.startsWith('# ')) {
        return <h2 key={index}>{line.replace('# ', '')}</h2>;
      }
      // Code blocks
      if (line.startsWith('```')) {
        return null; // Skip code fence markers for simple rendering
      }
      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }
      // Regular paragraphs
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <section id="blog" className="section blog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights from my journey
          </p>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <article
              key={post.id}
              className="blog-post-card card"
              onClick={() => openPost(post)}
            >
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <span className="blog-post-date">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {formatDate(post.date)}
                  </span>
                  <span className="blog-post-readtime">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {post.readTime}
                  </span>
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-tags">
                  {post.tags && post.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="blog-post-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="blog-empty">
            <div className="card-terminal">
              <div className="card-terminal-header">
                <span className="card-terminal-dot red"></span>
                <span className="card-terminal-dot yellow"></span>
                <span className="card-terminal-dot green"></span>
              </div>
              <div className="card-terminal-body">
                <p className="code">Blog posts coming soon...</p>
                <p className="code">Stay tuned for tutorials and insights!</p>
              </div>
            </div>
          </div>
        )}

        {/* Post Modal */}
        {selectedPost && (
          <div className="blog-modal-overlay" onClick={closePost}>
            <div className="blog-modal card-terminal" onClick={(e) => e.stopPropagation()}>
              <div className="card-terminal-header">
                <span className="card-terminal-dot red" onClick={closePost}></span>
                <span className="card-terminal-dot yellow"></span>
                <span className="card-terminal-dot green"></span>
              </div>
              <div className="blog-modal-content">
                <button className="blog-modal-close" onClick={closePost}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
                <h2 className="blog-modal-title">{selectedPost.title}</h2>
                <div className="blog-modal-meta">
                  <span>{formatDate(selectedPost.date)}</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className="blog-modal-body">
                  {renderMarkdown(postContent)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
