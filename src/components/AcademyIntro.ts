export function renderAcademyIntro(): string {
  return `
    <section class="section-wrapper" id="about">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content">
            <span class="section-tag">About the Academy</span>
            <h2 class="section-headline">
              Skills that move<br />
              <span style="color: var(--accent-primary);">you forward.</span>
            </h2>
            <p class="lead">
              Skillful Sir Adnan is an outcome-focused digital training academy dedicated to closing the gap between academic theory and high-demand commercial digital skills.
            </p>
            <p>
              Under the direct mentorship of Skillful Sir Adnan, students, beginners, and freelancers gain practical competence across creative design, digital marketing, video production, modern web development, and applied AI tools. Every lesson is anchored in live hands-on practice, structured feedback, and real-world project work.
            </p>

            <div class="intro-stat-row">
              <div class="intro-stat-item">
                <span class="intro-stat-value">8+</span>
                <span class="intro-stat-label">Courses Offered</span>
              </div>
              <div class="intro-stat-item">
                <span class="intro-stat-value">2</span>
                <span class="intro-stat-label">Learning Modes</span>
              </div>
              <div class="intro-stat-item">
                <span class="intro-stat-value">PKT</span>
                <span class="intro-stat-label">Live Sessions</span>
              </div>
            </div>
          </div>

          <!-- Side-by-Side Learning Modes Comparison -->
          <div class="learning-modes-wrapper">
            <!-- Online Mode -->
            <div class="learning-mode-card">
              <span class="mode-badge-indicator">ONLINE LEARNING</span>
              <h3 class="mode-title">Digital Classroom</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0;">
                Interactive live virtual lectures with real-time screen sharing, live design teardowns, and recorded class archives for students across Pakistan and worldwide.
              </p>
              <ul class="mode-features">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Interactive live sessions with Q&amp;A</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Recorded session archives for review</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>WhatsApp support channel</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Remote assignment submission</span>
                </li>
              </ul>
            </div>

            <!-- Onsite Mode -->
            <div class="learning-mode-card" style="background-color: var(--bg-surface-1);">
              <span class="mode-badge-indicator">ONSITE LEARNING</span>
              <h3 class="mode-title">Campus Lab</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0;">
                Immersive in-person learning inside dedicated computer labs with direct, over-the-shoulder instructor guidance and peer collaboration.
              </p>
              <ul class="mode-features">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Dedicated high-spec workstation PCs</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Direct in-person guidance and review</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Collaborative studio environment</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Physical lab assessments and portfolio review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
