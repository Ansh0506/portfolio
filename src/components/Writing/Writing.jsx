import React, { useState, useEffect, useMemo } from 'react';
import './Writing.css';
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';

const MEDIUM_API_ENDPOINT = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ritankar.saha786";

function getSnippet(html, wordCount) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent || "";
  if (text) {
    return text.split(" ").slice(0, wordCount).join(" ") + "...";
  }
  return "";
}

const Writing = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const [allTags, setAllTags] = useState(['All']);
  const [activeTag, setActiveTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(MEDIUM_API_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const validPosts = data.items ? data.items.filter(item => item.title && item.link) : [];
        setPosts(validPosts);
        
        if (validPosts.length > 0) {
          const allCategories = validPosts.flatMap(post => post.categories || []);
          const uniqueTags = ['All', ...new Set(allCategories)];
          setAllTags(uniqueTags);
        }
        
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Medium posts:", err);
        setLoading(false);
      });
  }, []);

  const filteredPosts = useMemo(() => {
    let filtered = posts;
    if (activeTag !== 'All') {
      filtered = filtered.filter(post =>
        post.categories && post.categories.includes(activeTag)
      );
    }
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.categories.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    return filtered;
  }, [posts, activeTag, searchTerm]);

  return (
    <section id="writing" className="writing-section" ref={sectionRef}>
      <div className="container">
        {/* These stay at the top */}
        <h2 className="writing-heading">My Writing</h2>
        <p className="writing-subheading">
          My personal logs and thoughts on backend systems, Web3, cloud computing, and DevOps.
        </p>
        
        {/* --- NEW 2-Column Wrapper --- */}
        <div className="writing-layout-wrapper">
          
          {/* --- Main Content (Left Column) --- */}
          <div className="writing-main-content">
            {/* Search Bar */}
            {!loading && (
              <div className="blog-search-bar">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by title or tag..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
            
            {loading && <p className="loading-text">Fetching articles from Medium...</p>}

            {/* Blog Post List */}
            <div className="blog-list">
              {!loading && filteredPosts.length > 0 && filteredPosts.map((post, index) => (
                <a 
                  key={post.guid} 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`blog-item ${isVisible ? 'animate-in' : ''}`}
                  style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
                >
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-snippet">
                    {getSnippet(post.description, 25)}
                  </p>
                  <div className="blog-meta">
                    <span className="blog-date">
                      <FaCalendarAlt />
                      {new Date(post.pubDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <div className="blog-tags">
                      {post.categories && post.categories.map((tag) => (
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
              
              {!loading && filteredPosts.length === 0 && (
                <p className="no-results-text">No posts found matching your criteria.</p>
              )}
            </div>
          </div>

          {/* --- Sidebar (Right Column) --- */}
          <aside className="writing-sidebar">
            <h3 className="sidebar-heading">Filter by Tag</h3>
            {!loading && allTags.length > 1 && (
              <div className="blog-tags-filter">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    className={`tag-filter-button ${activeTag === tag ? 'active' : ''}`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </aside>

        </div>
      </div>
    </section>
  );
};

export default Writing;