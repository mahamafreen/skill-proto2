import { DEMO_STUDENTS, DEMO_ADMISSIONS, StudentRecord, AdmissionApplication } from '../data/mockDashboard';
import { COURSES } from '../data/courses';

export function renderAdminDashboard(activeTab: string = 'dashboard'): string {
  return `
    <div class="dashboard-root">
      
      <!-- Sidebar -->
      <aside class="dashboard-sidebar">
        <div class="sidebar-header">
          <div class="brand-mark">S</div>
          <div>
            <div style="font-weight: 800; font-size: 0.9375rem; color: #ffffff;">SKILLFUL SIR ADNAN</div>
            <div class="sidebar-portal-badge">ADMIN CONTROL PORTAL</div>
          </div>
        </div>

        <ul class="sidebar-nav">
          <li>
            <div class="sidebar-link ${activeTab === 'dashboard' ? 'active' : ''}" data-admin-tab="dashboard">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'students' ? 'active' : ''}" data-admin-tab="students">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span>Students</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'courses' ? 'active' : ''}" data-admin-tab="courses">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
              <span>Courses</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'admissions' ? 'active' : ''}" data-admin-tab="admissions">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect></svg>
              <span>Admissions (${DEMO_ADMISSIONS.filter(a => a.status === 'Pending').length})</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'certificates' ? 'active' : ''}" data-admin-tab="certificates">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span>Certificates</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'announcements' ? 'active' : ''}" data-admin-tab="announcements">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
              <span>Announcements</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${activeTab === 'settings' ? 'active' : ''}" data-admin-tab="settings">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>Settings</span>
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

      <!-- Main Portal Content -->
      <div class="dashboard-main">
        
        <!-- Topbar -->
        <header class="dashboard-topbar">
          <div class="topbar-left">
            <div class="dashboard-breadcrumb">
              <span>ADMINISTRATION</span>
              <span>/</span>
              <span style="color: #ffffff; text-transform: uppercase;">${activeTab}</span>
            </div>
          </div>

          <div class="topbar-right">
            <span class="badge badge-demo">[DEMO ADMIN SESSION]</span>
            <div class="dashboard-user-chip">
              <div class="user-avatar-mini">AD</div>
              <div class="user-name-mini">Admin Console</div>
            </div>
          </div>
        </header>

        <!-- Content Body -->
        <div class="dashboard-content-body" id="adminContentBody">
          
          <!-- Top Stat Metrics -->
          <div class="stats-grid">
            <div class="stat-box">
              <div class="stat-label-row">
                <span>TOTAL STUDENTS</span>
                <span class="badge badge-demo">SAMPLE</span>
              </div>
              <div class="stat-number">148</div>
              <div class="stat-subtext">Active enrolled cohorts across all batches</div>
            </div>

            <div class="stat-box">
              <div class="stat-label-row">
                <span>ACTIVE COURSES</span>
                <span class="badge badge-accent">LIVE</span>
              </div>
              <div class="stat-number">08</div>
              <div class="stat-subtext">Design, Digital, Dev & Foundations</div>
            </div>

            <div class="stat-box">
              <div class="stat-label-row">
                <span>PENDING ADMISSIONS</span>
                <span class="badge badge-warning">NEW</span>
              </div>
              <div class="stat-number" style="color: var(--accent-primary);" id="pendingAdmissionsStat">
                ${DEMO_ADMISSIONS.filter(a => a.status === 'Pending').length}
              </div>
              <div class="stat-subtext">Awaiting counselor review & confirmation</div>
            </div>

            <div class="stat-box">
              <div class="stat-label-row">
                <span>RECENT REGISTRATIONS</span>
                <span class="badge badge-success">THIS WEEK</span>
              </div>
              <div class="stat-number">19</div>
              <div class="stat-subtext">Online & Onsite workstations assigned</div>
            </div>
          </div>

          <!-- Pending Admissions Approval Queue -->
          <div class="dashboard-panel">
            <div class="panel-header-row">
              <div>
                <h3 class="panel-title">PENDING ADMISSION APPLICATIONS</h3>
                <span style="font-size: 0.8125rem; color: var(--text-muted);">Incoming requests submitted through the digital portal</span>
              </div>
              <span class="badge badge-demo">WORKFLOW DEMO</span>
            </div>

            <div class="table-wrapper">
              <table class="data-table" id="admissionsTable">
                <thead>
                  <tr>
                    <th>Ref ID</th>
                    <th>Applicant Name</th>
                    <th>Course Requested</th>
                    <th>Learning Mode</th>
                    <th>Phone / WhatsApp</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Review Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${DEMO_ADMISSIONS.map(adm => `
                    <tr data-adm-row="${adm.id}">
                      <td style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-primary);">${adm.id}</td>
                      <td style="font-weight: 600; color: #ffffff;">${adm.fullName} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">(${adm.city})</span></td>
                      <td>${adm.course}</td>
                      <td>
                        <span class="badge ${adm.learningMode === 'Online' ? 'badge-info' : 'badge-success'}">${adm.learningMode}</span>
                      </td>
                      <td style="font-family: var(--font-mono);">${adm.phone}</td>
                      <td style="color: var(--text-muted);">${adm.appliedDate}</td>
                      <td>
                        <span class="badge ${adm.status === 'Pending' ? 'badge-warning' : adm.status === 'Approved' ? 'badge-success' : 'badge-accent'}" id="status-badge-${adm.id}">
                          ${adm.status}
                        </span>
                      </td>
                      <td>
                        <div style="display: flex; gap: 0.5rem;">
                          <button class="btn btn-primary btn-sm approve-adm-btn" data-adm-id="${adm.id}">
                            <span>Approve</span>
                          </button>
                          <button class="btn btn-secondary btn-sm contact-adm-btn" data-adm-id="${adm.id}">
                            <span>WhatsApp</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Students Registry Table -->
          <div class="dashboard-panel">
            <div class="panel-header-row">
              <div>
                <h3 class="panel-title">STUDENT REGISTRY & PROGRESS TRACKER</h3>
                <span style="font-size: 0.8125rem; color: var(--text-muted);">Manage enrolled learners, progress percentages, and batch statuses</span>
              </div>
              <div style="display: flex; gap: 0.75rem;">
                <input type="text" id="adminStudentSearch" class="form-input" style="padding: 0.4rem 0.75rem; font-size: 0.8125rem; width: 220px;" placeholder="Search student name..." />
              </div>
            </div>

            <div class="table-wrapper">
              <table class="data-table" id="studentsTable">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Enrolled Course</th>
                    <th>Mode</th>
                    <th>Progress</th>
                    <th>Enrolled Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${DEMO_STUDENTS.map(std => `
                    <tr class="student-row" data-std-name="${std.name.toLowerCase()}">
                      <td style="font-family: var(--font-mono); font-weight: 700;">${std.id}</td>
                      <td style="font-weight: 600; color: #ffffff;">${std.name}</td>
                      <td>${std.course}</td>
                      <td><span class="badge badge-secondary">${std.learningMode}</span></td>
                      <td>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <div class="progress-track" style="width: 80px; height: 5px; margin-bottom: 0;">
                            <div class="progress-bar-fill" style="width: ${std.progress}%;"></div>
                          </div>
                          <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700;">${std.progress}%</span>
                        </div>
                      </td>
                      <td style="color: var(--text-muted);">${std.enrolledDate}</td>
                      <td>
                        <span class="badge ${std.status === 'Active' ? 'badge-success' : 'badge-info'}">${std.status}</span>
                      </td>
                      <td>
                        <button class="btn btn-ghost btn-sm" style="padding: 0.25rem 0.5rem;" title="Edit Student">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}

export function initAdminDashboardEvents(onNavigate: (view: string) => void) {
  // Navigation
  document.querySelectorAll('[data-navigate]').forEach(el => {
    el.addEventListener('click', () => {
      const view = el.getAttribute('data-navigate');
      if (view) onNavigate(view);
    });
  });

  // Admin Tab Switcher
  document.querySelectorAll('[data-admin-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[data-admin-tab]').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Student Search
  const searchInput = document.getElementById('adminStudentSearch') as HTMLInputElement | null;
  searchInput?.addEventListener('input', (e) => {
    const q = (e.target as HTMLInputElement).value.toLowerCase();
    document.querySelectorAll<HTMLElement>('.student-row').forEach(row => {
      const name = row.getAttribute('data-std-name') || '';
      row.style.display = name.includes(q) ? '' : 'none';
    });
  });

  // Admission Approval Actions
  document.querySelectorAll('.approve-adm-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const admId = btn.getAttribute('data-adm-id');
      const badge = document.getElementById(`status-badge-${admId}`);
      if (badge) {
        badge.className = 'badge badge-success';
        badge.textContent = 'Approved';
      }
      btn.setAttribute('disabled', 'true');
      btn.innerHTML = `<span>✓ Enrolled</span>`;
    });
  });

  document.querySelectorAll('.contact-adm-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const admId = btn.getAttribute('data-adm-id');
      const badge = document.getElementById(`status-badge-${admId}`);
      if (badge && badge.textContent?.trim() === 'Pending') {
        badge.className = 'badge badge-info';
        badge.textContent = 'Contacted';
      }
      alert(`Connecting to applicant ${admId} on WhatsApp for batch confirmation.`);
    });
  });
}
