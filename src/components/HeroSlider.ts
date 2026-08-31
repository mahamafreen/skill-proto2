export function renderHeroSlider(): string {
  return `
    <section class="hero-section" id="heroSection">
      <div class="container">
        <div class="hero-static-grid">

          <div class="hero-content">
            <span class="hero-pretitle">
              <span class="status-dot pulsing"></span>
              Digital Skills Academy — Online &amp; Onsite
            </span>

            <h1 class="hero-title">
              Learn skills that<br />
              <span class="accent-text">pay you back.</span>
            </h1>

            <p class="hero-description">
              Practical, hands-on training in Graphic Designing, Digital Marketing, Video Editing, AI, Web Development and more — taught directly by Skillful Sir Adnan.
            </p>

            <div class="hero-course-chips">
              <span class="hero-chip">Graphic Designing</span>
              <span class="hero-chip">Digital Marketing</span>
              <span class="hero-chip">Video Editing</span>
              <span class="hero-chip">Motion Graphics</span>
              <span class="hero-chip">AI Course</span>
              <span class="hero-chip">Web Development</span>
              <span class="hero-chip">Computer Basics</span>
              <span class="hero-chip">Language Courses</span>
            </div>

            <div class="hero-cta-group">
              <button class="btn btn-primary btn-lg" id="slide1StartLearningBtn">
                Apply for Admission
              </button>
              <a href="#courses" class="btn btn-outline btn-lg">
                View All Courses
              </a>
            </div>

            <div class="hero-trust-row">
              <div class="hero-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Online &amp; Onsite Available</span>
              </div>
              <div class="hero-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Academy Certificate</span>
              </div>
              <div class="hero-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Portfolio-Based Learning</span>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="hero-photo-block">
              <img
                src="/assets/sir-adnan-portrait.png"
                alt="Skillful Sir Adnan — Founder &amp; Instructor"
                class="hero-main-img"
                loading="eager"
              />
              <div class="hero-photo-caption">
                <div class="hero-caption-name">Skillful Sir Adnan</div>
                <div class="hero-caption-role">Founder &amp; Instructor</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initHeroSliderEvents(onOpenAdmission: () => void, _onOpenCourseModal: (courseId: string) => void) {
  document.getElementById('slide1StartLearningBtn')?.addEventListener('click', onOpenAdmission);
}
