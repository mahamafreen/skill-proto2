import { TESTIMONIALS_DATA } from '../data/testimonials';

export function renderStudentStories(): string {
  const featured = TESTIMONIALS_DATA.find(t => t.isFeatured) || TESTIMONIALS_DATA[0];
  const others = TESTIMONIALS_DATA.filter(t => !t.isFeatured);

  return `
    <section class="section-wrapper" id="testimonials">
      <div class="container">
        
        <div class="section-header">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="section-tag">STUDENT OUTCOMES</span>
              <h2 class="section-headline">LEARNING EXPERIENCES</h2>
            </div>
            <span class="badge badge-demo">
              [SAMPLE / DEMO TESTIMONIALS — CLIENT PLACEHOLDERS]
            </span>
          </div>
          <p class="section-description">
            Read representative learner case studies and feedback illustrating the academy's outcome-driven approach.
          </p>
        </div>

        <!-- Large-Format Editorial Student Story -->
        <div class="featured-story-card">
          <div class="story-quote-symbol">“</div>
          <p class="story-main-quote">
            ${featured.quote}
          </p>
          <div class="story-author-row">
            <div>
              <div class="student-author-name" style="font-size: 1.125rem;">${featured.studentName}</div>
              <div class="student-course-label" style="font-family: var(--font-mono); font-size: 0.8125rem;">
                Program: <span style="color: var(--text-primary); font-weight: 600;">${featured.course}</span> (${featured.learningMode} Batch)
              </div>
            </div>
            <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 0.75rem 1.25rem; max-width: 440px;">
              <span class="metric-label" style="color: var(--status-success);">VERIFIED OUTCOME</span>
              <div style="font-size: 0.8125rem; color: var(--text-secondary); margin-top: 0.25rem;">
                ${featured.outcome}
              </div>
            </div>
          </div>
        </div>

        <!-- Supporting Student Review Grid (Demo) -->
        <div class="testimonials-grid">
          ${others.map(item => `
            <div class="testimonial-card">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <span class="badge badge-info">${item.badge}</span>
                  <span class="badge badge-demo" style="font-size: 0.625rem;">DEMO REVIEW</span>
                </div>
                <p class="testimonial-quote">"${item.quote}"</p>
              </div>

              <div class="testimonial-footer">
                <div class="student-author-name">${item.studentName}</div>
                <div class="student-course-label">${item.course} • ${item.learningMode}</div>
                <div style="font-size: 0.75rem; color: var(--status-success); margin-top: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${item.outcome}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
