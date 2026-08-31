import confetti from 'canvas-confetti';
import { COURSES } from '../data/courses';

export interface AdmissionFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  course: string;
  learningMode: 'Online' | 'Onsite';
  notes: string;
}

export function renderAdmissionModal(preselectedCourse?: string): string {
  const defaultCourse = preselectedCourse || COURSES[0].title;

  return `
    <div class="modal-backdrop open" id="admissionModalBackdrop">
      <div class="modal-container" style="max-width: 620px;">
        
        <!-- Modal Header -->
        <div class="modal-header">
          <div>
            <div class="section-tag" style="margin-bottom: 0.25rem;">APPLICATION PORTAL</div>
            <h3 class="modal-title">ACADEMY ADMISSION</h3>
          </div>
          <button class="modal-close-btn" id="closeAdmissionModalBtn" aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
          </button>
        </div>

        <!-- Wizard Step Tracker -->
        <div style="padding: 1.25rem 2rem 0 2rem; background-color: var(--bg-surface-2); border-bottom: 1px solid var(--border-subtle);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-primary);" id="admissionStepLabel">
              STEP 01 OF 04
            </span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);" id="admissionStepName">
              PERSONAL INFORMATION
            </span>
          </div>
          <div style="display: flex; gap: 0.35rem; height: 4px; border-radius: 2px; overflow: hidden; margin-bottom: 1rem;">
            <div class="step-indicator active" style="flex: 1; background-color: var(--accent-primary);" data-step-bar="1"></div>
            <div class="step-indicator" style="flex: 1; background-color: var(--border-medium);" data-step-bar="2"></div>
            <div class="step-indicator" style="flex: 1; background-color: var(--border-medium);" data-step-bar="3"></div>
            <div class="step-indicator" style="flex: 1; background-color: var(--border-medium);" data-step-bar="4"></div>
          </div>
        </div>

        <!-- Modal Body: Step Panels -->
        <div class="modal-body">
          <form id="admissionForm">
            
            <!-- STEP 1: Personal Information -->
            <div class="wizard-step" data-step="1">
              <div class="form-group">
                <label class="form-label" for="admFullName">Full Name *</label>
                <input type="text" id="admFullName" class="form-input" placeholder="e.g. Muhammad Ali" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="admPhone">WhatsApp / Phone Number *</label>
                <input type="tel" id="admPhone" class="form-input" placeholder="e.g. 0300-1234567" required />
                <span class="form-hint">Used for admission confirmation and batch schedule updates.</span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label" for="admEmail">Email Address *</label>
                  <input type="email" id="admEmail" class="form-input" placeholder="you@example.com" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="admCity">City / Location *</label>
                  <input type="text" id="admCity" class="form-input" placeholder="e.g. Lahore, Karachi" required />
                </div>
              </div>
            </div>

            <!-- STEP 2: Choose Course -->
            <div class="wizard-step" data-step="2" style="display: none;">
              <div class="form-group">
                <label class="form-label" for="admCourse">Select Desired Digital Course *</label>
                <select id="admCourse" class="form-select" required>
                  ${COURSES.map(c => `
                    <option value="${c.title}" ${c.title.toLowerCase() === defaultCourse.toLowerCase() ? 'selected' : ''}>
                      ${c.title} (${c.category})
                    </option>
                  `).join('')}
                </select>
              </div>

              <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem; margin-top: 1rem;">
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; margin-bottom: 0.25rem;">
                  COURSE PARAMETERS
                </div>
                <div style="font-size: 0.875rem; color: var(--text-secondary);">
                  Duration: <strong style="color: #ffffff;">[COURSE DURATION]</strong> • Fee: <strong style="color: var(--accent-primary);">[COURSE FEE]</strong>
                </div>
              </div>
            </div>

            <!-- STEP 3: Learning Mode -->
            <div class="wizard-step" data-step="3" style="display: none;">
              <div class="form-group">
                <label class="form-label">Preferred Learning Mode *</label>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0.5rem;">
                  <label style="background-color: var(--bg-surface-2); border: 2px solid var(--accent-primary); border-radius: var(--radius-sm); padding: 1.25rem; cursor: pointer; display: flex; flex-direction: column; gap: 0.5rem;" id="modeOnlineOption">
                    <input type="radio" name="learningMode" value="Online" checked style="accent-color: var(--accent-primary);" />
                    <strong style="color: #ffffff; font-size: 1rem;">ONLINE CLASSROOM</strong>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">Interactive live virtual stream with recorded session access.</span>
                  </label>

                  <label style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem; cursor: pointer; display: flex; flex-direction: column; gap: 0.5rem;" id="modeOnsiteOption">
                    <input type="radio" name="learningMode" value="Onsite" style="accent-color: var(--accent-primary);" />
                    <strong style="color: #ffffff; font-size: 1rem;">ONSITE CAMPUS LAB</strong>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">Physical workstation PC lab with direct hands-on supervision.</span>
                  </label>
                </div>
              </div>

              <div class="form-group" style="margin-top: 1.5rem;">
                <label class="form-label" for="admNotes">Prior Experience / Notes (Optional)</label>
                <textarea id="admNotes" class="form-textarea" rows="3" placeholder="Tell us if you are a beginner or looking to upgrade specific skills..."></textarea>
              </div>
            </div>

            <!-- STEP 4: Review & Confirmation -->
            <div class="wizard-step" data-step="4" style="display: none;">
              <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; text-transform: uppercase;">
                  APPLICATION SUMMARY
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.875rem;">
                  <div>
                    <span style="color: var(--text-muted); display: block;">Applicant:</span>
                    <strong style="color: #ffffff;" id="summaryName">-</strong>
                  </div>
                  <div>
                    <span style="color: var(--text-muted); display: block;">Contact:</span>
                    <strong style="color: #ffffff;" id="summaryPhone">-</strong>
                  </div>
                  <div>
                    <span style="color: var(--text-muted); display: block;">Target Course:</span>
                    <strong style="color: var(--accent-primary);" id="summaryCourse">-</strong>
                  </div>
                  <div>
                    <span style="color: var(--text-muted); display: block;">Learning Mode:</span>
                    <strong style="color: var(--status-success);" id="summaryMode">-</strong>
                  </div>
                </div>
              </div>

              <div style="margin-top: 1.25rem; font-size: 0.8125rem; color: var(--text-muted); line-height: 1.6;">
                By clicking Submit Application, your enrollment request will be queued for review and Sir Adnan's admissions team will contact you to finalize batch timings.
              </div>
            </div>

            <!-- SUCCESS STATE (Shown after submit) -->
            <div id="admissionSuccessState" style="display: none; text-align: center; padding: 2rem 0;">
              <div style="width: 64px; height: 64px; border-radius: 50%; background-color: var(--status-success-bg); border: 2px solid var(--status-success); color: var(--status-success); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>

              <h3 style="font-size: 1.75rem; font-weight: 900; text-transform: uppercase; color: #ffffff; margin-bottom: 0.5rem;">
                APPLICATION RECEIVED
              </h3>
              <p style="color: var(--text-secondary); max-width: 440px; margin: 0 auto 1.5rem auto;">
                Your admission request has been submitted successfully. A member of Skillful Sir Adnan's academic team will review your application.
              </p>

              <div style="background-color: var(--bg-surface-2); border: 1px dashed var(--border-strong); border-radius: var(--radius-sm); padding: 1rem; max-width: 320px; margin: 0 auto 1.75rem auto;">
                <span class="metric-label">Application Reference</span>
                <div style="font-family: var(--font-mono); font-size: 1.125rem; font-weight: 700; color: var(--accent-primary);" id="generatedRefCode">
                  SSA-ADM-8905
                </div>
              </div>

              <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                <a href="https://wa.me/[PHONE_NUMBER]" target="_blank" rel="noopener" class="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  <span>CONNECT ON WHATSAPP</span>
                </a>
                <button class="btn btn-secondary" id="successCloseBtn">
                  <span>DONE</span>
                </button>
              </div>
            </div>

          </form>
        </div>

        <!-- Modal Footer: Navigation Controls -->
        <div class="modal-footer" id="wizardFooter">
          <button type="button" class="btn btn-ghost" id="wizardPrevBtn" style="display: none;">
            <span>BACK</span>
          </button>
          <button type="button" class="btn btn-primary" id="wizardNextBtn">
            <span>NEXT STEP</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

      </div>
    </div>
  `;
}

export function initAdmissionModalEvents(onClose: () => void, onApplicationSubmitted?: (app: AdmissionFormData) => void) {
  const backdrop = document.getElementById('admissionModalBackdrop');
  const closeBtn = document.getElementById('closeAdmissionModalBtn');
  const prevBtn = document.getElementById('wizardPrevBtn');
  const nextBtn = document.getElementById('wizardNextBtn');
  const wizardFooter = document.getElementById('wizardFooter');
  const successCloseBtn = document.getElementById('successCloseBtn');

  const stepLabel = document.getElementById('admissionStepLabel');
  const stepName = document.getElementById('admissionStepName');
  const stepBars = document.querySelectorAll<HTMLElement>('.step-indicator');
  const stepPanels = document.querySelectorAll<HTMLElement>('.wizard-step');
  const successState = document.getElementById('admissionSuccessState');

  let currentStep = 1;
  const totalSteps = 4;

  const stepTitles = [
    'PERSONAL INFORMATION',
    'CHOOSE DIGITAL COURSE',
    'LEARNING MODE',
    'CONFIRMATION & SUBMIT'
  ];

  function showStep(step: number) {
    currentStep = step;
    
    // Update labels
    if (stepLabel) stepLabel.textContent = `STEP 0${step} OF 04`;
    if (stepName) stepName.textContent = stepTitles[step - 1];

    // Update progress bars
    stepBars.forEach((bar, idx) => {
      if (idx + 1 <= step) {
        bar.style.backgroundColor = 'var(--accent-primary)';
      } else {
        bar.style.backgroundColor = 'var(--border-medium)';
      }
    });

    // Update panels
    stepPanels.forEach(panel => {
      if (panel.getAttribute('data-step') === String(step)) {
        panel.style.display = 'block';
      } else {
        panel.style.display = 'none';
      }
    });

    // Update footer buttons
    if (prevBtn) {
      prevBtn.style.display = step > 1 ? 'inline-flex' : 'none';
    }

    if (nextBtn) {
      if (step === totalSteps) {
        nextBtn.innerHTML = `<span>SUBMIT APPLICATION</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      } else {
        nextBtn.innerHTML = `<span>NEXT STEP</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      }
    }

    // Step 4 Summary population
    if (step === 4) {
      const name = (document.getElementById('admFullName') as HTMLInputElement)?.value || '[Not provided]';
      const phone = (document.getElementById('admPhone') as HTMLInputElement)?.value || '[Not provided]';
      const course = (document.getElementById('admCourse') as HTMLSelectElement)?.value || 'Graphic Designing';
      const mode = (document.querySelector('input[name="learningMode"]:checked') as HTMLInputElement)?.value || 'Online';

      const sName = document.getElementById('summaryName');
      const sPhone = document.getElementById('summaryPhone');
      const sCourse = document.getElementById('summaryCourse');
      const sMode = document.getElementById('summaryMode');

      if (sName) sName.textContent = name;
      if (sPhone) sPhone.textContent = phone;
      if (sCourse) sCourse.textContent = course;
      if (sMode) sMode.textContent = mode;
    }
  }

  function validateStep(step: number): boolean {
    if (step === 1) {
      const nameInput = document.getElementById('admFullName') as HTMLInputElement;
      const phoneInput = document.getElementById('admPhone') as HTMLInputElement;
      const emailInput = document.getElementById('admEmail') as HTMLInputElement;
      const cityInput = document.getElementById('admCity') as HTMLInputElement;

      if (!nameInput.value.trim()) {
        nameInput.focus();
        return false;
      }
      if (!phoneInput.value.trim()) {
        phoneInput.focus();
        return false;
      }
      if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        emailInput.focus();
        return false;
      }
      if (!cityInput.value.trim()) {
        cityInput.focus();
        return false;
      }
    }
    return true;
  }

  function closeModal() {
    backdrop?.remove();
    document.body.style.overflow = '';
    onClose();
  }

  closeBtn?.addEventListener('click', closeModal);
  successCloseBtn?.addEventListener('click', closeModal);

  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  nextBtn?.addEventListener('click', () => {
    if (!validateStep(currentStep)) return;

    if (currentStep < totalSteps) {
      showStep(currentStep + 1);
    } else {
      // Form Submission
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const refCode = `SSA-ADM-${randNum}`;
      const refEl = document.getElementById('generatedRefCode');
      if (refEl) refEl.textContent = refCode;

      // Collect data
      const formData: AdmissionFormData = {
        fullName: (document.getElementById('admFullName') as HTMLInputElement)?.value || '',
        phone: (document.getElementById('admPhone') as HTMLInputElement)?.value || '',
        email: (document.getElementById('admEmail') as HTMLInputElement)?.value || '',
        city: (document.getElementById('admCity') as HTMLInputElement)?.value || '',
        course: (document.getElementById('admCourse') as HTMLSelectElement)?.value || 'Graphic Designing',
        learningMode: ((document.querySelector('input[name="learningMode"]:checked') as HTMLInputElement)?.value as 'Online' | 'Onsite') || 'Online',
        notes: (document.getElementById('admNotes') as HTMLTextAreaElement)?.value || ''
      };

      if (onApplicationSubmitted) {
        onApplicationSubmitted(formData);
      }

      // Hide wizard & show success state
      stepPanels.forEach(p => p.style.display = 'none');
      if (wizardFooter) wizardFooter.style.display = 'none';
      if (stepLabel) stepLabel.parentElement!.style.display = 'none';
      if (successState) successState.style.display = 'block';

      // Trigger Confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ff2a4d', '#ffffff', '#10b981']
        });
      } catch (err) {
        // Fallback
      }
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (currentStep > 1) {
      showStep(currentStep - 1);
    }
  });

  // Learning mode radio highlights
  const onlineOpt = document.getElementById('modeOnlineOption');
  const onsiteOpt = document.getElementById('modeOnsiteOption');
  const radios = document.querySelectorAll<HTMLInputElement>('input[name="learningMode"]');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'Online') {
        if (onlineOpt) onlineOpt.style.borderColor = 'var(--accent-primary)';
        if (onsiteOpt) onsiteOpt.style.borderColor = 'var(--border-subtle)';
      } else {
        if (onsiteOpt) onsiteOpt.style.borderColor = 'var(--accent-primary)';
        if (onlineOpt) onlineOpt.style.borderColor = 'var(--border-subtle)';
      }
    });
  });
}
