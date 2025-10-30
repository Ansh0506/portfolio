import React, { useState, useEffect, useMemo } from 'react';
import './Contribution.css';
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
// 1. Re-add FaGithub
import { 
  FaExternalLinkAlt, FaCodeBranch, FaSearch, 
  FaGoogle, FaBitcoin, FaCode, FaGithub 
} from 'react-icons/fa';

// --- (Your data arrays: gsocContributions, sobContributions, otherContributions) ---
// (Data remains the same)
const gsocContributions = [
  { id: 'gsoc-sw360', project: 'Siemens SW360 (GSoC \'25)', title: 'Migrated SW360-FOSSology Integration', description: 'Migrated integration...', link: '...', tags: ['Java', 'Spring Boot', 'REST APIs', 'Siemens', 'FOSSology', 'SW360'], primaryTag: 'Java', role: 'Developer' },
  { id: 'gsoc-fossology', project: 'Siemens FOSSology (GSoC \'25)', title: 'Implemented Checksum-Reuse & Report Generation', description: 'Built Checksum-Driven...', link: '...', tags: ['Java', 'Thrift', 'CouchDB', 'Docker', 'Siemens', 'FOSSology'], primaryTag: 'Java', role: 'Developer' },
];
const sobContributions = [ { id: 'sob-blockcore', project: 'Blockcore Angor (SoB \'25)', title: 'WASM Liquid Wallet Service & Integration', description: 'Built LiquidService...', link: '...', tags: ['C#', 'Rust', 'WASM', 'Blockchain', 'Liquid Network', 'Nostr', 'Blockcore'], primaryTag: 'C#', role: 'Developer' } ];
const otherContributions = [
  { id: 'dhiway-pr522', project: 'Dhiway Cord PR #522', title: 'Feat: Added new Test Cases for Distribution Limit Exceeded...', link: 'https://github.com/dhiway/cord/pull/522', tags: ['Rust', 'Dhiway'], primaryTag: 'Rust' },
  { id: 'dhiway-pr548', project: 'Dhiway Cord PR #548', title: 'Feat: Added new Test Cases for Invalid Asset Type...', link: 'https://github.com/dhiway/cord/pull/548', tags: ['Rust', 'Dhiway'], primaryTag: 'Rust' },
  { id: 'dhiway-pr590', project: 'Dhiway Cord PR #590', title: 'Feat: Added new Test Cases for Invalid Identifier...', link: 'https://github.com/dhiway/cord/pull/590', tags: ['Rust', 'Dhiway'], primaryTag: 'Rust' },
  { id: 'dhiway-pr591', project: 'Dhiway Cord PR #591', title: 'Feat: Added new Test Cases for Invalid Asset Value...', link: 'https://github.com/dhiway/cord/pull/591', tags: ['Rust', 'Dhiway'], primaryTag: 'Rust' },
  { id: 'dhiway-pr593', project: 'Dhiway Cord PR #593', title: 'Feat: Added new Test Cases for Node_ID_Too_Long...', link: 'https://github.com/dhiway/cord/pull/593', tags: ['Rust', 'Dhiway'], primaryTag: 'Rust' },
  { id: 'consul-pr5931', project: 'Consul Democracy PR #5931', title: 'Fix: Fixed Multitenancy postgresql extensions work for tenants', link: 'https://github.com/consuldemocracy/consuldemocracy/pull/5931', tags: ['Ruby', 'Consul Democracy'], primaryTag: 'Ruby' },
  { id: 'nightwatch-pr4271', project: 'Nightwatch.js PR #4271', title: 'Fix: Fixed the problem of not displaying anything in the console...', link: 'https://github.com/nightwatchjs/nightwatch/pull/4271', tags: ['Javascript', 'Nightwatch.js'], primaryTag: 'Javascript' },
  { id: 'c2si-pr89', project: 'C2SI Webiu PR #89', title: 'Fix: Fixed the async errors persistent in the codebase.', link: 'https://github.com/c2siorg/Webiu/pull/89', tags: ['Javascript'], primaryTag: 'Javascript' },
  { id: 'bitbyte-pr160', project: 'Alumni Website - Bitbyte TPC PR #160', title: 'Feat: Implemented Custom Logs for both environments...', link: 'https://github.com/BitByte-TPC/alumni/pull/160', tags: ['Django'], primaryTag: 'Django' }
];

const allContributions = [...gsocContributions, ...sobContributions, ...otherContributions];

// --- (Color helper function) ---
const tagColors = [
  { bg: 'rgba(239, 108, 0, 0.1)', text: '#b35000ff' }, // Java
  { bg: 'rgba(0, 173, 216, 0.1)', text: '#00ADD8' }, // GoLang
  { bg: 'rgba(222, 165, 132, 0.15)', text: '#dea584' }, // Rust
  { bg: 'rgba(204, 20, 1, 0.1)', text: '#CC1401' }, // Ruby
  { bg: 'rgba(247, 223, 31, 0.15)', text: '#c4a60a' }, // JS
  { bg: 'rgba(103, 58, 183, 0.1)', text: '#673AB7' }, // C#
  { bg: 'rgba(139, 148, 182, 0.15)', text: '#777BB4' }, // PHP
  { bg: 'rgba(13, 72, 51, 0.1)', text: '#0d4833' }, // Django
  { bg: 'rgba(0, 123, 255, 0.1)', text: 'var(--primary-color)' }, // Default
];
function getTagColor(tagString) {
  if (!tagString) return tagColors[tagColors.length - 1];
  let hash = 0;
  for (let i = 0; i < tagString.length; i++) {
    hash = tagString.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % tagColors.length);
  return tagColors[index];
}
// --- End Color Helper ---

const Contribution = () => {
  // --- (Hooks and filtering logic remain the same) ---
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [allTags, setAllTags] = useState(['All']);
  const [activeTag, setActiveTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (allContributions.length > 0) {
      const uniqueTags = ['All', ...new Set(allContributions.flatMap(c => c.tags || []))];
      uniqueTags.sort((a, b) => { if (a === 'All') return -1; if (b === 'All') return 1; return a.localeCompare(b); });
      setAllTags(uniqueTags);
    }
  }, []);

  const filterContributions = (contributions) => {
    let filtered = contributions;
    if (activeTag !== 'All') { filtered = filtered.filter(c => c.tags && c.tags.includes(activeTag)); }
    if (searchTerm) { filtered = filtered.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.project.toLowerCase().includes(searchTerm.toLowerCase()) || (c.tags && c.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))); }
    return filtered;
  };
  const filteredGsoc = useMemo(() => filterContributions(gsocContributions), [activeTag, searchTerm]);
  const filteredSob = useMemo(() => filterContributions(sobContributions), [activeTag, searchTerm]);
  const filteredOthers = useMemo(() => filterContributions(otherContributions), [activeTag, searchTerm]);
  const hasResults = filteredGsoc.length > 0 || filteredSob.length > 0 || filteredOthers.length > 0;

  // Render function for a single card
  const renderContributionCard = (contrib, index, delayOffset = 0) => {
    const color = getTagColor(contrib.primaryTag);

    return (
      <div
        key={contrib.id || index}
        className={`contribution-card ${isVisible ? 'animate-in' : ''}`}
        style={{ animationDelay: isVisible ? `${(delayOffset + index) * 0.05}s` : '0s' }}
      >
        <div className="card-top">
          {/* 2. Added GitHub icon back to title */}
          <span className="project-pr-name">
            <FaGithub /> 
            <span>{contrib.project}</span>
          </span>
          {contrib.primaryTag && (
            <span 
              className="primary-tag" 
              style={{ backgroundColor: color.bg, color: color.text }}
            >
              {contrib.primaryTag}
            </span>
          )}
        </div>
        <p className="contribution-title-desc">{contrib.title}</p>
        {contrib.description && contrib.description !== contrib.title && (
            <p className="description card-description">{contrib.description}</p>
        )}
        <div className="card-bottom">
          <a href={contrib.link} target="_blank" rel="noopener noreferrer" className="view-pr-button" aria-label={`View Contribution: ${contrib.project}`}>
            {/* 3. Changed text to "View PR" or "View Details" */}
            <span>{contrib.role ? 'View Details' : 'View PR'}</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="contribution" className="contribution-section" ref={sectionRef}>
      {/* ... (Rest of the JSX remains the same) ... */}
      <div className="container">
        <h2 className="contribution-heading">Open Source Contributions</h2>
        <p className="contribution-subheading">
          Showcasing my notable contributions to various open source projects,
          focusing on improving code quality and adding new features and code for
          the common good.
        </p>
        <p className="contribution-subheading">...</p>
        <div className="contribution-layout-wrapper">
          <div className="contribution-main-content">
            <div className="contribution-search-bar">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search by title, project, or tag..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            {!hasResults && (<p className="no-results-text">...</p>)}

            {/* Section 1: GSoC */}
            {filteredGsoc.length > 0 && (
              <div className="contribution-category">
                <h3 className="category-heading"><FaGoogle className="heading-icon google" /> Google Summer of Code</h3>
                <div className="contribution-list summary-list">
                  {filteredGsoc.map((contrib, index) => renderContributionCard(contrib, index, 0))}
                </div>
              </div>
            )}
            {/* Section 2: Summer of Bitcoin */}
            {filteredSob.length > 0 && (
              <div className="contribution-category">
                <h3 className="category-heading"><FaBitcoin className="heading-icon bitcoin" /> Summer of Bitcoin</h3>
                <div className="contribution-list summary-list">
                  {filteredSob.map((contrib, index) => renderContributionCard(contrib, index, filteredGsoc.length))}
                </div>
              </div>
            )}
            {/* Section 3: Other Contributions */}
            {filteredOthers.length > 0 && (
              <div className="contribution-category">
                <h3 className="category-heading"><FaCodeBranch className="heading-icon others" /> Individual Contributions & PRs</h3>
                <div className="contribution-list pr-list">
                  {filteredOthers.map((contrib, index) => renderContributionCard(contrib, index, filteredGsoc.length + filteredSob.length))}
                </div>
              </div>
            )}
          </div>
          {/* Sidebar */}
          <aside className="contribution-sidebar">
            <h3 className="sidebar-heading">Filter by Tag</h3>
            {allTags.length > 1 && (
              <div className="contribution-tags-filter">
                {allTags.map((tag) => (
                  <button key={tag} className={`contribution-tag-button ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(tag)}>
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

export default Contribution;