import { Course, COURSES } from '../data/courses';

export function renderCourseDetailModal(course: Course): string {
  return `
    <div class="modal-backdrop open" id="courseDetailModalBackdrop">
      <div class="modal-container" style="max-width: 840px;">
        
        <!-- Modal Header -->
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="badge badge-accent">${course.category}</span>
            <span class="badge badge-success">${course.learningMode}</span>
          </div>
          <button class="modal-close-btn" id="closeCourseModalBtn" aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body" style="padding: 2.5rem;">
          
          <!-- Course Hero -->
          <div style="margin-bottom: 2.5rem;">
            <h2 style="font-size: 2.25rem; font-weight: 900; text-transform: uppercase; margin-bottom: 0.75rem;">
              ${course.title}
            </h2>
            <p class="lead" style="margin-bottom: 1.5rem;">
              ${course.fullOverview}
            </p>

            <!-- Key Parameters Bar -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem;">
              <div>
                <span class="metric-label">Duration</span>
                <div class="metric-val">${course.duration}</div>
              </div>
              <div>
                <span class="metric-label">Skill Level</span>
                <div class="metric-val">${course.level}</div>
              </div>
              <div>
                <span class="metric-label">Course Fee</span>
                <div class="metric-val" style="color: var(--accent-primary);">${course.fee}</div>
              </div>
              <div>
                <span class="metric-label">Instructor</span>
                <div class="metric-val">Skillful Sir Adnan</div>
              </div>
            </div>
          </div>

          <!-- What You'll Learn -->
          <div style="margin-bottom: 2.5rem;">
            <h4 style="font-size: 1.125rem; text-transform: uppercase; margin-bottom: 1rem; font-family: var(--font-display);">
              WHAT YOU WILL LEARN
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 0.75rem;">
              ${course.whatYouWillLearn.map(item => `
                <div style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.9375rem; color: var(--text-secondary);">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${item}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Detailed Expandable Syllabus Accordion -->
          <div style="margin-bottom: 2.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <h4 style="font-size: 1.125rem; text-transform: uppercase; font-family: var(--font-display);">
                DETAILED SYLLABUS (${course.syllabus.length} MODULES)
              </h4>
              <span class="badge badge-demo">CURRICULUM SPECIFICATION</span>
            </div>

            <div class="accordion-group">
              ${course.syllabus.map((mod, idx) => `
                <div class="accordion-item ${idx === 0 ? 'open' : ''}">
                  <button class="accordion-trigger">
                    <div class="accordion-title-group">
                      <span class="accordion-num">${mod.number}</span>
                      <span class="accordion-title">${mod.title}</span>
                    </div>
                    <svg class="accordion-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
                  <div class="accordion-content">
                    <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.875rem;">
                      ${mod.description}
                    </p>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                      ${mod.lessons.map(lesson => `
                        <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; color: var(--text-muted);">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                          <span>${lesson}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Software Tools & Projects Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem;">
            <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.5rem;">
              <h5 style="font-family: var(--font-mono); font-size: 0.8125rem; text-transform: uppercase; color: var(--accent-primary); margin-bottom: 0.75rem;">
                TOOLS & SOFTWARE
              </h5>
              <div class="course-tools-list" style="margin-bottom: 0;">
                ${course.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
              </div>
            </div>

            <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.5rem;">
              <h5 style="font-family: var(--font-mono); font-size: 0.8125rem; text-transform: uppercase; color: var(--accent-primary); margin-bottom: 0.75rem;">
                CAPSTONE PROJECTS
              </h5>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                ${course.projects.map(proj => `
                  <li style="font-size: 0.8125rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 0.4rem;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${proj}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <!-- FAQs Section -->
          ${course.faqs && course.faqs.length > 0 ? `
            <div style="margin-bottom: 2rem;">
              <h4 style="font-size: 1.125rem; text-transform: uppercase; margin-bottom: 1rem; font-family: var(--font-display);">
                FREQUENTLY ASKED QUESTIONS
              </h4>
              <div class="accordion-group">
                ${course.faqs.map(faq => `
                  <div class="accordion-item open">
                    <div style="padding: 1.25rem 1.5rem;">
                      <strong style="display: block; color: var(--text-primary); font-size: 0.9375rem; margin-bottom: 0.35rem;">${faq.question}</strong>
                      <p style="font-size: 0.875rem; color: var(--text-secondary);">${faq.answer}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

        </div>

        <!-- Modal Footer CTA -->
        <div class="modal-footer">
          <button class="btn btn-secondary" id="modalCloseSecondaryBtn">Close</button>
          <button class="btn btn-primary btn-lg" id="modalApplyCourseBtn" data-course-title="${course.title}">
            <span>APPLY FOR ADMISSION</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

      </div>
    </div>
  `;
}

export function initCourseDetailModalEvents(onClose: () => void, onOpenAdmissionWithCourse: (courseTitle: string) => void) {
  const backdrop = document.getElementById('courseDetailModalBackdrop');
  const closeBtn = document.getElementById('closeCourseModalBtn');
  const closeSecondaryBtn = document.getElementById('modalCloseSecondaryBtn');
  const applyBtn = document.getElementById('modalApplyCourseBtn');

  function closeModal() {
    backdrop?.remove();
    document.body.style.overflow = '';
    onClose();
  }

  closeBtn?.addEventListener('click', closeModal);
  closeSecondaryBtn?.addEventListener('click', closeModal);

  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  applyBtn?.addEventListener('click', () => {
    const courseTitle = applyBtn.getAttribute('data-course-title') || '';
    closeModal();
    onOpenAdmissionWithCourse(courseTitle);
  });

  // Accordion toggling inside modal
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      item?.classList.toggle('open');
    });
  });
}
