import { DEMO_SCHEDULE, DEMO_ASSIGNMENTS, DEMO_ANNOUNCEMENTS } from '../data/mockDashboard';

export function renderStudentDashboard(activeTab: string = 'dashboard'): string {
  return `
    <div class="dashboard-root">
      
      <!-- Sidebar -->
      <aside class="dashboard-sidebar">
        <div class="sidebar-header">
          <div class="brand-mark">S</div>
          <div>
            <div style="font-weight: 800; font-size: 0.9375rem; color: #ffffff;">SKILLFUL SIR ADNAN</div>
            <div class="sidebar-portal-badge">STUDENT LEARNING LMS</div>
          </div>
        </div>

        <ul class="sidebar-nav">
          <li>
            <div class="sidebar-link ${activeTab === 'dashboard' ? 'active' : ''}" data-student-tab="dashboard">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'courses' ? 'active' : ''}" data-student-tab="courses">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
              <span>My Courses</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'progress' ? 'active' : ''}" data-student-tab="progress">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
              <span>Progress</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'assignments' ? 'active' : ''}" data-student-tab="assignments">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Assignments</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'schedule' ? 'active' : ''}" data-student-tab="schedule">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>Class Schedule</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'certificates' ? 'active' : ''}" data-student-tab="certificates">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span>Certificates</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'announcements' ? 'active' : ''}" data-student-tab="announcements">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
              <span>Announcements</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'profile' ? 'active' : ''}" data-student-tab="profile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>Profile</span>
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

      <!-- Main LMS Content -->
      <div class="dashboard-main">
        
        <!-- Topbar -->
        <header class="dashboard-topbar">
          <div class="topbar-left">
            <div class="dashboard-breadcrumb">
              <span>LMS</span>
              <span>/</span>
              <span style="color: #ffffff; text-transform: uppercase;">Student Portal</span>
            </div>
          </div>

          <div class="topbar-right">
            <span class="badge badge-demo">[DEMO STUDENT LMS]</span>
            <div class="dashboard-user-chip">
              <div class="user-avatar-mini">MA</div>
              <div>
                <div class="user-name-mini">Muhammad Ali</div>
                <div style="font-size: 0.6875rem; color: var(--text-muted);">STD-101 • Onsite</div>
              </div>
            </div>
          </div>
        </header>

        <!-- Content Body -->
        <div class="dashboard-content-body">
          
          <!-- Student Greeting & Continue Learning Hero -->
          <div>
            <h2 style="font-size: 1.75rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.5rem;">
              Good morning, <span style="color: var(--accent-primary);">Muhammad Ali</span>
            </h2>
            <p style="color: var(--text-secondary); font-size: 0.9375rem;">
              Welcome back to your workstation portal. You are making steady progress toward your capstone certificate.
            </p>
          </div>

          <!-- Continue Learning Card -->
          <div class="continue-learning-hero">
            <div class="learning-hero-details">
              <div style="display: flex; align-items: center; gap: 0.625rem;">
                <span class="badge badge-accent">ENROLLED COURSE</span>
                <span class="badge badge-success">ONSITE BATCH • LAB 01</span>
              </div>
              
              <h3 style="font-size: 1.65rem; font-weight: 800; text-transform: uppercase;">
                GRAPHIC DESIGNING
              </h3>
              
              <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">
                Currently studying <strong style="color: #ffffff;">Module 04: Brand Design & Vector Identity</strong>. Next up: Anchor Point Precision & Multi-Platform Style Guides.
              </p>

              <div>
                <button class="btn btn-primary btn-lg" id="studentContinueBtn">
                  <span>CONTINUE LEARNING</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
              </div>
            </div>

            <!-- Progress Meter Widget -->
            <div class="learning-hero-progress">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="widget-title" style="color: var(--text-secondary);">Course Completion</span>
                <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 800; color: var(--accent-primary);">68%</span>
              </div>

              <div class="progress-track" style="height: 8px;">
                <div class="progress-bar-fill" style="width: 68%;"></div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.8125rem;">
                <div>
                  <span style="color: var(--text-muted); display: block;">Completed:</span>
                  <strong style="color: #ffffff;">14 of 21 Lessons</strong>
                </div>
                <div>
                  <span style="color: var(--text-muted); display: block;">Next Assignment:</span>
                  <strong style="color: var(--status-warning);">Due Sep 05</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Two Columns: Upcoming Schedule & Assignment Status -->
          <div class="dashboard-two-col">
            
            <!-- Upcoming Class Schedule -->
            <div class="dashboard-panel">
              <div class="panel-header-row">
                <h3 class="panel-title">UPCOMING CLASS SCHEDULE</h3>
                <span class="badge badge-accent">THIS WEEK</span>
              </div>

              <div class="schedule-list">
                ${DEMO_SCHEDULE.map(cls => `
                  <div class="schedule-card-item">
                    <div>
                      <span class="badge ${cls.mode.includes('Onsite') ? 'badge-success' : 'badge-info'}" style="font-size: 0.65rem; margin-bottom: 0.35rem;">
                        ${cls.mode}
                      </span>
                      <h4 style="font-size: 0.9375rem; font-weight: 700; color: #ffffff; margin-bottom: 0.25rem;">${cls.topic}</h4>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">
                        Instructor: <strong style="color: var(--text-secondary);">${cls.instructor}</strong>
                      </div>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-family: var(--font-mono); font-size: 0.8125rem; font-weight: 700; color: var(--accent-primary);">${cls.date}</div>
                      <div style="font-size: 0.6875rem; color: var(--text-muted);">${cls.time}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Assignments Tracker -->
            <div class="dashboard-panel">
              <div class="panel-header-row">
                <h3 class="panel-title">ASSIGNMENTS & GRADES</h3>
                <span class="badge badge-demo">SUBMISSIONS</span>
              </div>

              <div class="assignment-list">
                ${DEMO_ASSIGNMENTS.map(asg => `
                  <div class="assignment-card-item">
                    <div>
                      <h4 style="font-size: 0.875rem; font-weight: 600; color: #ffffff; margin-bottom: 0.25rem;">${asg.title}</h4>
                      <span style="font-size: 0.75rem; color: var(--text-muted);">Due: ${asg.dueDate}</span>
                    </div>
                    <div>
                      ${asg.status === 'Graded' ? `
                        <span class="badge badge-success" style="font-weight: 700;">${asg.score}</span>
                      ` : `
                        <span class="badge badge-warning">Pending Review</span>
                      `}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Academy Announcements -->
          <div class="dashboard-panel">
            <div class="panel-header-row">
              <h3 class="panel-title">ACADEMY ANNOUNCEMENTS</h3>
              <span class="badge badge-demo">OFFICIAL FEED</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${DEMO_ANNOUNCEMENTS.map(ann => `
                <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span class="badge ${ann.badge === 'URGENT' ? 'badge-accent' : ann.badge === 'WORKSHOP' ? 'badge-info' : 'badge-secondary'}">
                      ${ann.badge}
                    </span>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${ann.date}</span>
                  </div>
                  <h4 style="font-size: 1rem; font-weight: 700; color: #ffffff; margin-bottom: 0.35rem;">${ann.title}</h4>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">${ann.content}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}

export function initStudentDashboardEvents(onNavigate: (view: string) => void) {
  document.querySelectorAll('[data-navigate]').forEach(el => {
    el.addEventListener('click', () => {
      const view = el.getAttribute('data-navigate');
      if (view) onNavigate(view);
    });
  });

  document.querySelectorAll('[data-student-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[data-student-tab]').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  document.getElementById('studentContinueBtn')?.addEventListener('click', () => {
    alert('Resuming Graphic Designing — Module 04: Brand Design & Vector Geometry');
  });
}
