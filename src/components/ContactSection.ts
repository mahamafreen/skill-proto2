export function renderContactSection(): string {
  return `
    <section class="section-wrapper" id="contact">
      <div class="container">
        
        <div class="section-header">
          <span class="section-tag">ACADEMY LIAISON</span>
          <h2 class="section-headline">GET IN TOUCH</h2>
          <p class="section-description">
            Reach out to our academic counseling desk for batch schedules, seat availability, and fee details.
          </p>
        </div>

        <div class="contact-grid">
          
          <!-- Channels List -->
          <div class="contact-info-cards">
            
            <!-- WhatsApp -->
            <a href="https://wa.me/[PHONE_NUMBER]" target="_blank" rel="noopener" class="contact-channel-card">
              <div class="contact-channel-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <div>
                <span class="metric-label">WhatsApp Helpline</span>
                <div style="font-size: 1rem; font-weight: 700; color: #ffffff;">[PHONE NUMBER]</div>
                <span style="font-size: 0.75rem; color: var(--status-success);">Instant response during business hours</span>
              </div>
            </a>

            <!-- Phone Direct -->
            <div class="contact-channel-card">
              <div class="contact-channel-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <span class="metric-label">Direct Phone Line</span>
                <div style="font-size: 1rem; font-weight: 700; color: #ffffff;">[PHONE NUMBER]</div>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Mon — Sat, 10:00 AM — 08:00 PM (PKT)</span>
              </div>
            </div>

            <!-- Email -->
            <div class="contact-channel-card">
              <div class="contact-channel-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div>
                <span class="metric-label">Official Email</span>
                <div style="font-size: 1rem; font-weight: 700; color: #ffffff;">[EMAIL]</div>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Admissions & institutional inquiries</span>
              </div>
            </div>

            <!-- Onsite Campus Address -->
            <div class="contact-channel-card">
              <div class="contact-channel-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <span class="metric-label">Onsite Academy Campus</span>
                <div style="font-size: 1rem; font-weight: 700; color: #ffffff;">[ACADEMY ADDRESS]</div>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Computer Lab 01 & Dedicated Seminar Hall</span>
              </div>
            </div>

          </div>

          <!-- Interactive Map Placeholder -->
          <div class="map-placeholder-box">
            <div style="width: 56px; height: 56px; border-radius: 50%; background-color: var(--bg-surface-2); border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; color: var(--accent-primary);">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <strong style="color: #ffffff; display: block; font-size: 1.125rem; margin-bottom: 0.25rem;">[GOOGLE MAPS EMBED AREA]</strong>
              <p style="font-size: 0.8125rem; color: var(--text-muted); max-width: 320px;">
                Interactive map navigation will load client pin at [ACADEMY ADDRESS] upon official location confirmation.
              </p>
            </div>
            <button class="btn btn-secondary btn-sm" id="contactOpenAdmissionBtn">
              <span>APPLY FOR ADMISSION NOW</span>
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- Global Footer -->
    <footer style="background-color: var(--bg-surface-1); border-top: 1px solid var(--border-subtle); padding: 4rem 0 2rem 0;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 3rem; margin-bottom: 3rem;">
          
          <!-- Col 1: Brand & Philosophy -->
          <div>
            <div class="brand-logo" style="margin-bottom: 1rem;">
              <div class="brand-mark">S</div>
              <span>SKILLFUL SIR ADNAN</span>
            </div>
            <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
              Premier digital skills academy providing outcome-focused training in Graphic Designing, Digital Marketing, Video Editing, AI and Web Development.
            </p>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
              FOUNDER: SKILLFUL SIR ADNAN
            </div>
          </div>

          <!-- Col 2: Programs -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase; margin-bottom: 1rem;">
              CORE PROGRAMS
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
              <li><a href="#courses" class="footer-link">Graphic Designing (Flagship)</a></li>
              <li><a href="#courses" class="footer-link">Digital Marketing & Ads</a></li>
              <li><a href="#courses" class="footer-link">Video Editing & Reels</a></li>
              <li><a href="#courses" class="footer-link">Motion Graphics</a></li>
              <li><a href="#courses" class="footer-link">Applied AI Course</a></li>
              <li><a href="#courses" class="footer-link">Web Development / WordPress</a></li>
            </ul>
          </div>

          <!-- Col 3: Portals & Navigation -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase; margin-bottom: 1rem;">
              PLATFORM PORTALS
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
              <li><a href="#" data-navigate="admin" class="footer-link">Admin Dashboard [Demo]</a></li>
              <li><a href="#" data-navigate="student" class="footer-link">Student LMS Portal [Demo]</a></li>
              <li><a href="#" data-navigate="instructor" class="footer-link">Instructor Portal [Demo]</a></li>
              <li><a href="#certificate" class="footer-link">Certificate Verification</a></li>
              <li><a href="#about" class="footer-link">Academy Methodology</a></li>
            </ul>
          </div>

          <!-- Col 4: Social & Links -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase; margin-bottom: 1rem;">
              CONNECT & SOCIAL
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
              <li>Instagram: <span style="color: var(--text-muted);">[INSTAGRAM]</span></li>
              <li>Facebook: <span style="color: var(--text-muted);">[FACEBOOK]</span></li>
              <li>YouTube: <span style="color: var(--text-muted);">[YOUTUBE]</span></li>
              <li>WhatsApp: <span style="color: var(--accent-primary);">[PHONE NUMBER]</span></li>
            </ul>
          </div>

        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; font-size: 0.8125rem; color: var(--text-muted);">
          <div>
            © 2026 SKILLFUL SIR ADNAN ACADEMY. All Rights Reserved.
          </div>
          <div class="badge badge-demo">
            ZERO INVENTED CREDENTIALS • TRUTHFUL EDITORIAL DESIGN
          </div>
        </div>
      </div>
    </footer>
  `;
}
