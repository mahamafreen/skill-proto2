export function renderCertificateSection(): string {
  return `
    <section class="section-wrapper" id="certificate">
      <div class="container">
        
        <div class="section-header">
          <span class="section-tag">OFFICIAL CREDENTIAL</span>
          <h2 class="section-headline">ACADEMY CERTIFICATION</h2>
          <p class="section-description">
            Awarded upon demonstrated project mastery, practical assignment compliance, and capstone portfolio submission.
          </p>
        </div>

        <div class="certificate-grid">
          
          <!-- Mockup Frame -->
          <div class="certificate-mockup-frame">
            <div class="cert-inner-border">
              <div style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.2em; color: var(--text-muted); text-transform: uppercase;">
                ACADEMY OF DIGITAL EXCELLENCE
              </div>
              
              <div class="cert-academy-heading">
                SKILLFUL SIR ADNAN
              </div>

              <div style="font-size: 0.8125rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.08em;">
                CERTIFICATE OF COMPLETION
              </div>

              <div style="font-size: 0.75rem; color: var(--text-muted);">
                This is to certify that
              </div>

              <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: #ffffff; border-bottom: 1px solid var(--border-medium); padding-bottom: 0.25rem; min-width: 220px;">
                [STUDENT NAME]
              </div>

              <div style="font-size: 0.8125rem; color: var(--text-secondary); max-width: 320px;">
                has successfully fulfilled all curriculum requirements, practical assignments, and portfolio case studies for
              </div>

              <div class="cert-title-accent">
                GRAPHIC DESIGNING
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-top: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
                <div style="text-align: left;">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #ffffff; font-weight: 700;">Skillful Sir Adnan</div>
                  <div style="font-size: 0.6875rem; color: var(--text-muted);">Founder & Lead Instructor</div>
                </div>

                <div class="cert-seal">
                  OFFICIAL<br />SEAL
                </div>

                <div style="text-align: right;">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #ffffff; font-weight: 700;">[ISSUE DATE]</div>
                  <div style="font-size: 0.6875rem; color: var(--text-muted);">ID: SSA-CERT-XXXX</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Eligibility & Requirements -->
          <div style="display: flex; flex-direction: column; gap: 1.75rem;">
            <div>
              <h3 style="font-size: 1.5rem; text-transform: uppercase; margin-bottom: 0.75rem;">
                CRITERIA FOR CERTIFICATION
              </h3>
              <p style="color: var(--text-secondary);">
                Certificates from Skillful Sir Adnan Academy are earned through verifiable practical execution, ensuring they hold genuine value for employers and freelance clients.
              </p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="background-color: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem; display: flex; align-items: flex-start; gap: 1rem;">
                <div style="width: 32px; height: 32px; border-radius: var(--radius-xs); background-color: var(--accent-subtle); color: var(--accent-primary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-family: var(--font-mono); flex-shrink: 0;">1</div>
                <div>
                  <strong style="color: #ffffff; display: block; font-size: 0.9375rem; margin-bottom: 0.25rem;">80%+ Minimum Attendance</strong>
                  <p style="font-size: 0.8125rem; color: var(--text-secondary);">Active attendance in scheduled live sessions (Online) or physical lab workstations (Onsite).</p>
                </div>
              </div>

              <div style="background-color: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem; display: flex; align-items: flex-start; gap: 1rem;">
                <div style="width: 32px; height: 32px; border-radius: var(--radius-xs); background-color: var(--accent-subtle); color: var(--accent-primary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-family: var(--font-mono); flex-shrink: 0;">2</div>
                <div>
                  <strong style="color: #ffffff; display: block; font-size: 0.9375rem; margin-bottom: 0.25rem;">Module Assignments Completion</strong>
                  <p style="font-size: 0.8125rem; color: var(--text-secondary);">Submission and approval of all weekly practical exercises across each curriculum module.</p>
                </div>
              </div>

              <div style="background-color: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem; display: flex; align-items: flex-start; gap: 1rem;">
                <div style="width: 32px; height: 32px; border-radius: var(--radius-xs); background-color: var(--accent-subtle); color: var(--accent-primary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-family: var(--font-mono); flex-shrink: 0;">3</div>
                <div>
                  <strong style="color: #ffffff; display: block; font-size: 0.9375rem; margin-bottom: 0.25rem;">Final Capstone Portfolio Defense</strong>
                  <p style="font-size: 0.8125rem; color: var(--text-secondary);">Successful presentation and evaluation of a comprehensive client-ready portfolio case study.</p>
                </div>
              </div>
            </div>

            <div class="badge badge-demo" style="width: fit-content;">
              [CERTIFICATES ISSUED PHYSICALLY AND DIGITALLY UPON VALIDATED COURSE COMPLETION]
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
