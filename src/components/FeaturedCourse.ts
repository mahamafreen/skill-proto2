import { COURSES } from '../data/courses';

export function renderFeaturedCourse(): string {
  const graphicCourse = COURSES.find(c => c.id === 'graphic-designing') || COURSES[0];

  return `
    <div class="featured-section" id="featuredCourse">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Flagship Program</span>
          <h2 class="section-headline">Graphic Designing</h2>
          <p class="section-description">
            Our most comprehensive course — from design fundamentals to a full commercial portfolio.
          </p>
        </div>

        <div class="featured-section-inner">
          <div class="featured-grid">
            
            <!-- Left Column -->
            <div class="featured-left-content">
              <div class="featured-badge-row">
                <span class="badge badge-accent">FLAGSHIP PROGRAM</span>
                <span class="badge badge-success">Online &amp; Onsite</span>
              </div>

              <h3 class="featured-title">
                Master Graphic<br />
                <span style="color: var(--accent-primary);">Designing</span>
              </h3>

              <p style="color: var(--text-secondary); line-height: 1.7;">
                ${graphicCourse.fullOverview}
              </p>

              <div class="learn-pillars">
                ${graphicCourse.whatYouWillLearn.slice(0, 4).map(point => `
                  <div class="pillar-item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${point}</span>
                  </div>
                `).join('')}
              </div>

              <div class="featured-meta-grid">
                <div class="featured-meta-item">
                  <span class="metric-label">Duration</span>
                  <span class="metric-val">${graphicCourse.duration}</span>
                </div>
                <div class="featured-meta-item">
                  <span class="metric-label">Level</span>
                  <span class="metric-val">${graphicCourse.level}</span>
                </div>
                <div class="featured-meta-item">
                  <span class="metric-label">Course Fee</span>
                  <span class="metric-val" style="color: var(--accent-primary);">${graphicCourse.fee}</span>
                </div>
                <div class="featured-meta-item">
                  <span class="metric-label">Mode</span>
                  <span class="metric-val">${graphicCourse.learningMode}</span>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary" id="featuredViewSyllabusBtn">
                  View full syllabus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <button class="btn btn-outline" id="featuredApplyBtn">
                  Apply for admission
                </button>
              </div>
            </div>

            <!-- Right Column: Tools & Career -->
            <div class="featured-right-panel">
              <div>
                <div class="panel-subheading">Tools You Will Learn</div>
                <div class="course-tools-list" style="margin-bottom: 0;">
                  ${graphicCourse.tools.map(tool => `<span class="tool-tag" style="padding: 0.35rem 0.75rem; font-size: 0.8125rem;">${tool}</span>`).join('')}
                </div>
              </div>

              <div>
                <div class="panel-subheading">Portfolio Deliverables</div>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                  ${graphicCourse.projects.map(proj => `
                    <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>${proj}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div>
                <div class="panel-subheading">Career Opportunities</div>
                <div class="career-tag-list">
                  ${graphicCourse.careerOpportunities.map(opp => `<span class="career-tag">${opp}</span>`).join('')}
                </div>
              </div>

              <div style="background-color: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                <div style="font-size: 0.8125rem;">
                  <strong style="color: var(--text-primary); display: block;">Official Academy Certificate</strong>
                  <span style="color: var(--text-muted);">Awarded upon verified portfolio submission</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;
}

export function initFeaturedCourseEvents(onOpenCourseModal: (courseId: string) => void, onOpenAdmission: () => void) {
  document.getElementById('featuredViewSyllabusBtn')?.addEventListener('click', () => {
    onOpenCourseModal('graphic-designing');
  });

  document.getElementById('featuredApplyBtn')?.addEventListener('click', onOpenAdmission);
}
