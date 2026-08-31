import { DEMO_SCHEDULE, DEMO_STUDENTS } from '../data/mockDashboard';

export function renderInstructorDashboard(activeTab: string = 'dashboard'): string {
  return `
    <div class="dashboard-root">
      
      <!-- Sidebar -->
      <aside class="dashboard-sidebar">
        <div class="sidebar-header">
          <div class="brand-mark">S</div>
          <div>
            <div style="font-weight: 800; font-size: 0.9375rem; color: #ffffff;">SKILLFUL SIR ADNAN</div>
            <div class="sidebar-portal-badge">INSTRUCTOR CONSOLE</div>
          </div>
        </div>

        <ul class="sidebar-nav">
          <li>
            <div class="sidebar-link ${activeTab === 'dashboard' ? 'active' : ''}" data-instructor-tab="dashboard">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'classes' ? 'active' : ''}" data-instructor-tab="classes">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect width="14" height="14" x="1" y="5" rx="2" ry="2"></rect></svg>
              <span>Today's Classes (02)</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'attendance' ? 'active' : ''}" data-instructor-tab="attendance">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
              <span>Attendance Tracking</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'grading' ? 'active' : ''}" data-instructor-tab="grading">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              <span>Grading Queue (04)</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'performance' ? 'active' : ''}" data-instructor-tab="performance">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
              <span>Cohort Analytics</span>
            </div>
          </li>
        </ul>

        <div class="sidebar-footer">
          <button class="btn btn-secondary btn-sm" data-navigate="home" style="width: 100%;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Back to Website</span>
          </button>
        </div>
      </aside>

      <!-- Main Instructor Console -->
      <div class="dashboard-main">
        
        <!-- Topbar -->
        <header class="dashboard-topbar">
          <div class="topbar-left">
            <div class="dashboard-breadcrumb">
              <span>INSTRUCTOR</span>
              <span>/</span>
              <span style="color: #ffffff; text-transform: uppercase;">Faculty Console</span>
            </div>
          </div>

          <div class="topbar-right">
            <span class="badge badge-accent">FOUNDER SESSION</span>
            <div class="dashboard-user-chip">
              <img src="/assets/sir-adnan-headshot.png" alt="Skillful Sir Adnan" style="width: 28px; height: 28px; border-radius: 50%; object-fit: cover;" />
              <div>
                <div class="user-name-mini">Skillful Sir Adnan</div>
                <div style="font-size: 0.6875rem; color: var(--text-muted);">Lead Instructor</div>
              </div>
            </div>
          </div>
        </header>

        <!-- Content Body -->
        <div class="dashboard-content-body">
          
          <!-- Stat Cards -->
          <div class="stats-grid">
            <div class="stat-box">
              <div class="stat-label-row">
                <span>TODAY'S CLASSES</span>
                <span class="badge badge-accent">SCHEDULED</span>
              </div>
              <div class="stat-number">02</div>
              <div class="stat-subtext">Onsite Lab 01 & Online Stream</div>
            </div>

            <div class="stat-box">
              <div class="stat-label-row">
                <span>TOTAL MENTORED</span>
                <span class="badge badge-info">ACTIVE</span>
              </div>
              <div class="stat-number">148</div>
              <div class="stat-subtext">Students across active cohorts</div>
            </div>

            <div class="stat-box">
              <div class="stat-label-row">
                <span>PENDING ASSIGNMENTS</span>
                <span class="badge badge-warning">REVIEW</span>
              </div>
              <div class="stat-number" style="color: var(--accent-primary);">04</div>
              <div class="stat-subtext">Portfolio & brand guidelines submissions</div>
            </div>

            <div class="stat-box">
              <div class="stat-label-row">
                <span>AVG ATTENDANCE RATE</span>
                <span class="badge badge-success">HIGH</span>
              </div>
              <div class="stat-number">94%</div>
              <div class="stat-subtext">Across physical workstations & Zoom</div>
            </div>
          </div>

          <!-- Today's Teaching Sessions -->
          <div class="dashboard-panel">
            <div class="panel-header-row">
              <div>
                <h3 class="panel-title">TODAY'S TEACHING SCHEDULE</h3>
                <span style="font-size: 0.8125rem; color: var(--text-muted);">Live hands-on lab sessions and online broadcasting</span>
              </div>
              <span class="badge badge-success">ON SCHEDULE</span>
            </div>

            <div class="schedule-list">
              ${DEMO_SCHEDULE.slice(0, 2).map(cls => `
                <div class="schedule-card-item" style="padding: 1.25rem;">
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
                      <span class="badge badge-accent">${cls.course}</span>
                      <span class="badge ${cls.mode.includes('Onsite') ? 'badge-success' : 'badge-info'}">${cls.mode}</span>
                    </div>
                    <h4 style="font-size: 1.0625rem; font-weight: 700; color: #ffffff;">${cls.topic}</h4>
                  </div>
                  <div style="text-align: right; display: flex; align-items: center; gap: 1.5rem;">
                    <div>
                      <div style="font-family: var(--font-mono); font-size: 0.9375rem; font-weight: 700; color: var(--accent-primary);">${cls.time}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${cls.date}</div>
                    </div>
                    <button class="btn btn-primary btn-sm">
                      <span>Start Class</span>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Attendance Tracking Matrix (Lab 01 Batch) -->
          <div class="dashboard-panel">
            <div class="panel-header-row">
              <div>
                <h3 class="panel-title">COHORT ATTENDANCE RECORDING (LAB 01)</h3>
                <span style="font-size: 0.8125rem; color: var(--text-muted);">Mark live workstation participation for today's session</span>
              </div>
              <button class="btn btn-secondary btn-sm" id="saveAttendanceBtn">
                <span>Save Attendance Log</span>
              </button>
            </div>

            <div class="table-wrapper">
              <table class="attendance-grid-table">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Course Batch</th>
                    <th>Mode</th>
                    <th>Prior Attendance</th>
                    <th>Today's Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${DEMO_STUDENTS.map(std => `
                    <tr>
                      <td style="font-family: var(--font-mono); font-weight: 700;">${std.id}</td>
                      <td style="font-weight: 600; color: #ffffff;">${std.name}</td>
                      <td>${std.course}</td>
                      <td><span class="badge badge-secondary">${std.learningMode}</span></td>
                      <td style="font-family: var(--font-mono); font-weight: 600; color: var(--status-success);">${std.progress > 50 ? '92%' : '86%'}</td>
                      <td>
                        <button class="attendance-toggle-btn present" data-std-id="${std.id}">
                          PRESENT
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Pending Assignment Grading Queue -->
          <div class="dashboard-panel">
            <div class="panel-header-row">
              <h3 class="panel-title">PENDING PORTFOLIO & ASSIGNMENT REVIEWS</h3>
              <span class="badge badge-demo">GRADING INTERFACE</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <span class="badge badge-accent" style="font-size: 0.65rem; margin-bottom: 0.25rem;">GRAPHIC DESIGNING</span>
                  <h4 style="font-size: 0.9375rem; font-weight: 700; color: #ffffff;">Module 04: Vector Logo & Corporate Stationery Set</h4>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Submitted by <strong style="color: var(--text-primary);">Muhammad Ali (STD-101)</strong> • 3 attachments</div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                  <button class="btn btn-secondary btn-sm grade-btn" data-sub="1">Review Files</button>
                  <button class="btn btn-primary btn-sm grade-btn" data-sub="1">Grade (A/100)</button>
                </div>
              </div>

              <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <span class="badge badge-info" style="font-size: 0.65rem; margin-bottom: 0.25rem;">VIDEO EDITING</span>
                  <h4 style="font-size: 0.9375rem; font-weight: 700; color: #ffffff;">Module 02: 15-Sec Viral Reel Sound Design & Pacing</h4>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Submitted by <strong style="color: var(--text-primary);">Usman Farooq (STD-103)</strong> • DaVinci Project Export</div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                  <button class="btn btn-secondary btn-sm grade-btn" data-sub="2">Review Files</button>
                  <button class="btn btn-primary btn-sm grade-btn" data-sub="2">Grade (A/100)</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}

export function initInstructorDashboardEvents(onNavigate: (view: string) => void) {
  document.querySelectorAll('[data-navigate]').forEach(el => {
    el.addEventListener('click', () => {
      const view = el.getAttribute('data-navigate');
      if (view) onNavigate(view);
    });
  });

  document.querySelectorAll('[data-instructor-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[data-instructor-tab]').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Attendance toggles
  document.querySelectorAll('.attendance-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('present')) {
        btn.classList.remove('present');
        btn.classList.add('absent');
        btn.textContent = 'ABSENT';
      } else {
        btn.classList.remove('absent');
        btn.classList.add('present');
        btn.textContent = 'PRESENT';
      }
    });
  });

  document.getElementById('saveAttendanceBtn')?.addEventListener('click', () => {
    alert('Attendance log recorded successfully for Lab 01 cohort.');
  });

  document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Grading evaluation dialog opened for submission review.');
    });
  });
}
