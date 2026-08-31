import { INSTRUCTOR_DATA } from '../data/instructor';

export function renderInstructorSection(): string {
  return `
    <section class="section-wrapper" id="instructor">
      <div class="container">
        
        <div class="section-header">
          <span class="section-tag">LEADERSHIP & MENTORSHIP</span>
          <h2 class="section-headline">MEET YOUR INSTRUCTOR</h2>
          <p class="section-description">
            Direct, outcome-oriented instruction by the founder of Skillful Sir Adnan Academy.
          </p>
        </div>

        <div class="instructor-grid">
          
          <!-- Column 1: Authentic Photo & Credentials Card -->
          <div class="instructor-photo-column">
            <div class="instructor-photo-frame">
              <img 
                src="${INSTRUCTOR_DATA.photoUrl}" 
                alt="Skillful Sir Adnan — Founder & Instructor" 
                class="instructor-photo"
              />
              <div class="instructor-caption-box">
                <h3 class="instructor-name">${INSTRUCTOR_DATA.name}</h3>
                <div class="instructor-role">${INSTRUCTOR_DATA.title}</div>
                <p style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 0.5rem;">
                  ${INSTRUCTOR_DATA.role}
                </p>
              </div>
            </div>

            <!-- Quick Contacts Box -->
            <div style="margin-top: 1.5rem; background-color: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
              <span class="metric-label">Direct Communication</span>
              <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-secondary);">
                WhatsApp: <span style="color: var(--accent-primary);">${INSTRUCTOR_DATA.contactPlaceholder.whatsapp}</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-secondary);">
                Email: <span style="color: var(--text-primary);">${INSTRUCTOR_DATA.contactPlaceholder.email}</span>
              </div>
            </div>
          </div>

          <!-- Column 2: Biography, Philosophy & Experience Breakdown -->
          <div class="instructor-bio-column">
            
            <!-- Biography -->
            <div class="instructor-info-block">
              <span class="info-block-title">01 — BIOGRAPHY</span>
              <h3 style="font-size: 1.5rem; text-transform: uppercase; font-weight: 800;">
                DEDICATED TO REAL DIGITAL VALUE
              </h3>
              <p class="lead">
                ${INSTRUCTOR_DATA.biography}
              </p>
            </div>

            <!-- Teaching Philosophy -->
            <div class="instructor-info-block" style="background-color: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 2rem;">
              <span class="info-block-title">02 — TEACHING PHILOSOPHY</span>
              <blockquote style="font-size: 1.0625rem; color: var(--text-primary); line-height: 1.7; font-style: italic; border-left: 3px solid var(--accent-primary); padding-left: 1.25rem; margin-top: 0.5rem;">
                "${INSTRUCTOR_DATA.teachingPhilosophy}"
              </blockquote>
            </div>

            <!-- Core Expertise & Courses Taught Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
              <div class="instructor-info-block">
                <span class="info-block-title">03 — CORE EXPERTISE</span>
                <div class="expertise-pill-list">
                  ${INSTRUCTOR_DATA.expertise.map(skill => `
                    <div class="expertise-pill">
                      <span style="color: var(--accent-primary); margin-right: 4px;">•</span>
                      <span>${skill}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="instructor-info-block">
                <span class="info-block-title">04 — COURSES TAUGHT</span>
                <div class="expertise-pill-list">
                  ${INSTRUCTOR_DATA.coursesTaught.map(course => `
                    <div class="expertise-pill" style="border-color: var(--accent-border);">
                      <span style="color: var(--accent-primary); font-weight: 700;">✓</span>
                      <span>${course}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Achievements / Vision -->
            <div class="instructor-info-block">
              <span class="info-block-title">05 — ACADEMY MILESTONES</span>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.625rem;">
                ${INSTRUCTOR_DATA.achievements.map(ach => `
                  <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.9375rem; color: var(--text-secondary);">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" style="flex-shrink: 0; margin-top: 4px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>${ach}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
