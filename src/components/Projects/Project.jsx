import React, { useState, useEffect, useMemo } from 'react';
import ProjectRow from '../../components/Projects/ProjectRow';
import './Project.css';
// 1. ONLY import allProjectData
import { allProjectData } from '../../data/projects';
import { FaSearch } from 'react-icons/fa';

const Project = () => {
  const [allTags, setAllTags] = useState(['All']);
  const [activeTag, setActiveTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [categoriesForFilter, setCategoriesForFilter] = useState(['All']);

  useEffect(() => {
    if (allProjectData.length > 0) {
      // Extract unique tags
      const allUniqueTags = allProjectData.flatMap(project => project.tags || []);
      const uniqueTags = ['All', ...new Set(allUniqueTags)];
      setAllTags(uniqueTags);

      // --- 3. Extract unique CATEGORIES ---
      const allUniqueCategories = allProjectData.map(project => project.category || 'Other'); // Get all category strings, use 'Other' if missing
      const uniqueCategories = ['All', ...new Set(allUniqueCategories)]; // Get unique values and add 'All'
      setCategoriesForFilter(uniqueCategories);
      // --- END CATEGORY EXTRACTION ---
    }
  }, []); // Run only once on mount

  // Filter projects (logic remains the same)
  const filteredProjects = useMemo(() => {
    let filtered = allProjectData;
    if (activeCategory !== 'All') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    if (activeTag !== 'All') {
      filtered = filtered.filter(project => project.tags && project.tags.includes(activeTag));
    }
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.tags && project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }
    return filtered;
  }, [activeCategory, activeTag, searchTerm]);

  const hasResults = filteredProjects.length > 0;

  return (
    <section className="projects-page-section">
      <div className="container">
        <h2 className="projects-page-heading">My Projects</h2>
        <h3 className="projects-page-subheading">
          A collection of my work spanning open source contributions, blockchain technology, backend development, and cloud infrastructure.
        </h3>

        <div className="project-layout-wrapper">
          {/* Main Content (Left Column) */}
          <div className="project-main-content">
            {/* Search Bar */}
            <div className="project-search-bar">
              {/* ... search input ... */}
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by title or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Project List */}
            {hasResults ? (
              <div className="projects-list-container">
                {filteredProjects.map((project, index) => (
                  <ProjectRow
                    key={project.title}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <p className="no-results-text">No projects found matching your criteria.</p>
            )}
          </div>

          {/* Sidebar (Right Column) */}
          <aside className="project-sidebar">
            {/* Category Filter */}
            <h3 className="sidebar-heading">Filter by Category</h3>
            <div className="project-category-filter">
              {/* --- 4. Map over the dynamically generated categories --- */}
              {categoriesForFilter.map((category) => (
                <button
                  key={category}
                  className={`project-category-button ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tag Filter */}
            <h3 className="sidebar-heading tags-heading">Filter by Tag</h3>
            {allTags.length > 1 && (
              <div className="project-tags-filter">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    className={`project-tag-button ${activeTag === tag ? 'active' : ''}`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </aside>
        </div> {/* End wrapper */}
      </div>
    </section>
  );
};

export default Project;