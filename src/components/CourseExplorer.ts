import { Course, COURSES } from '../data/courses';

export function renderCourseExplorer(): string {
  return `
    <section class="section-wrapper" id="courses">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">PROGRAM DIRECTORY</span>
          <h2 class="section-headline">CURATED DIGITAL COURSES</h2>
          <p class="section-description">
            Explore industry-aligned training programs categorized into Design, Digital Marketing, Development, and Core Foundations.
          </p>
        </div>

        <!-- Filter & Search Controls -->
        <div class="explorer-controls">
          <div class="explorer-top-row">
            <!-- Category Tabs -->
            <div class="category-filter-buttons" id="categoryTabs">
              <button class="category-btn active" data-category="ALL">ALL PROGRAMS (8)</button>
              <button class="category-btn" data-category="DESIGN">DESIGN (3)</button>
              <button class="category-btn" data-category="DIGITAL">DIGITAL (2)</button>
              <button class="category-btn" data-category="DEVELOPMENT">DEVELOPMENT (2)</button>
              <button class="category-btn" data-category="FOUNDATIONS">FOUNDATIONS (2)</button>
            </div>

            <!-- Search Bar -->
            <div class="search-input-wrapper">
              <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" id="courseSearchInput" class="form-input" placeholder="Search by course name or software..." />
            </div>
          </div>

          <!-- Secondary Filters -->
          <div class="explorer-secondary-filters">
            <div class="filter-select-group">
              <span class="filter-label">LEVEL:</span>
              <select id="levelFilterSelect" class="form-select filter-select">
                <option value="ALL">All Skill Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="All Levels">All Levels</option>
              </select>
            </div>

            <div class="filter-select-group">
              <span class="filter-label">LEARNING MODE:</span>
              <select id="modeFilterSelect" class="form-select filter-select">
                <option value="ALL">All Modes</option>
                <option value="Online & Onsite">Online & Onsite</option>
                <option value="Online">Online Only</option>
                <option value="Onsite">Onsite Only</option>
              </select>
            </div>

            <div style="margin-left: auto; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
              Showing <span id="courseCountDisplay" style="color: var(--text-primary); font-weight: 700;">8</span> Courses
            </div>
          </div>
        </div>

        <!-- Course Cards Grid -->
        <div class="courses-grid" id="coursesGridContainer">
          ${renderCourseCards(COURSES)}
        </div>
      </div>
    </section>
  `;
}

export function renderCourseCards(courses: Course[]): string {
  if (courses.length === 0) {
    return `
      <div style="grid-column: 1 / -1; padding: 4rem; text-align: center; background-color: var(--bg-surface-1); border: 1px dashed var(--border-medium); border-radius: var(--radius-md);">
        <p style="font-size: 1.125rem; color: var(--text-muted); margin-bottom: 1rem;">No courses match the selected filters.</p>
        <button class="btn btn-secondary btn-sm" id="resetFiltersBtn">RESET ALL FILTERS</button>
      </div>
    `;
  }

  return courses.map(course => `
    <article class="course-card ${course.isFeatured ? 'featured-border' : ''}" data-course-id="${course.id}">
      <div class="course-header">
        <div class="course-meta-top">
          <span class="badge ${course.badge ? 'badge-accent' : 'badge-info'}">
            ${course.badge || course.category}
          </span>
          <span class="badge badge-success">
            ${course.learningMode}
          </span>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">${course.shortDescription}</p>

        <!-- Tools Pills -->
        <div class="course-tools-list">
          ${course.tools.slice(0, 4).map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
        </div>
      </div>

      <div class="course-footer-info">
        <div class="course-detail-metrics">
          <span class="metric-label">Duration / Fee</span>
          <span class="metric-val">${course.duration} • <span style="color: var(--accent-primary);">${course.fee}</span></span>
        </div>
        <button class="btn btn-secondary btn-sm view-course-btn" data-course-id="${course.id}">
          <span>VIEW COURSE</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </article>
  `).join('');
}

export function initCourseExplorerEvents(onOpenCourseModal: (courseId: string) => void) {
  const categoryTabs = document.getElementById('categoryTabs');
  const searchInput = document.getElementById('courseSearchInput') as HTMLInputElement | null;
  const levelSelect = document.getElementById('levelFilterSelect') as HTMLSelectElement | null;
  const modeSelect = document.getElementById('modeFilterSelect') as HTMLSelectElement | null;
  const gridContainer = document.getElementById('coursesGridContainer');
  const countDisplay = document.getElementById('courseCountDisplay');

  let activeCategory = 'ALL';
  let activeLevel = 'ALL';
  let activeMode = 'ALL';
  let searchQuery = '';

  function filterCourses() {
    let filtered = COURSES.filter(c => {
      // Category filter
      if (activeCategory !== 'ALL') {
        if (activeCategory === 'DESIGN' && (c.id === 'graphic-designing' || c.id === 'motion-graphics' || c.id === 'video-editing')) {
          // match
        } else if (c.category !== activeCategory) {
          return false;
        }
      }

      // Level filter
      if (activeLevel !== 'ALL' && c.level !== activeLevel && c.level !== 'All Levels') {
        return false;
      }

      // Mode filter
      if (activeMode !== 'ALL' && c.learningMode !== activeMode && c.learningMode !== 'Online & Onsite') {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = c.title.toLowerCase().includes(q);
        const matchDesc = c.shortDescription.toLowerCase().includes(q);
        const matchTool = c.tools.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchTool) return false;
      }

      return true;
    });

    if (gridContainer) {
      gridContainer.innerHTML = renderCourseCards(filtered);
      attachCardListeners();
    }

    if (countDisplay) {
      countDisplay.textContent = String(filtered.length);
    }
  }

  function attachCardListeners() {
    document.querySelectorAll('.view-course-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const courseId = btn.getAttribute('data-course-id');
        if (courseId) onOpenCourseModal(courseId);
      });
    });

    document.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('click', () => {
        const courseId = card.getAttribute('data-course-id');
        if (courseId) onOpenCourseModal(courseId);
      });
    });

    document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
      activeCategory = 'ALL';
      activeLevel = 'ALL';
      activeMode = 'ALL';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (levelSelect) levelSelect.value = 'ALL';
      if (modeSelect) modeSelect.value = 'ALL';
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('[data-category="ALL"]')?.classList.add('active');
      filterCourses();
    });
  }

  // Category Tab Clicks
  categoryTabs?.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      categoryTabs.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'ALL';
      filterCourses();
    });
  });

  // Search Input listener
  searchInput?.addEventListener('input', (e) => {
    searchQuery = (e.target as HTMLInputElement).value;
    filterCourses();
  });

  // Select listeners
  levelSelect?.addEventListener('change', (e) => {
    activeLevel = (e.target as HTMLSelectElement).value;
    filterCourses();
  });

  modeSelect?.addEventListener('change', (e) => {
    activeMode = (e.target as HTMLSelectElement).value;
    filterCourses();
  });

  // Initial card listeners
  attachCardListeners();
}
