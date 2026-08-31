export function renderNavbar(activeView: string = 'home'): string {
  return `
    <header class="site-header" id="siteHeader">
      <div class="container navbar-container">
        <!-- Brand Lockup -->
        <a href="#" class="brand-logo" data-navigate="home">
          <div class="brand-mark">S</div>
          <div class="brand-text">
            <span>SKILLFUL SIR ADNAN</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-menu">
          <a href="#courses" class="nav-link">Courses</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#instructor" class="nav-link">Instructor</a>
          <a href="#testimonials" class="nav-link">Student Stories</a>
          <a href="#certificate" class="nav-link">Certificate</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <!-- Actions & Switcher -->
        <div class="nav-actions">
          <!-- Dashboard Portal Switcher -->
          <div class="dashboard-switcher">
            <button class="btn btn-secondary btn-sm" id="dashboardDropdownBtn" aria-expanded="false">
              <span>Portals</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu" id="dashboardDropdownMenu">
              <div class="dropdown-item ${activeView === 'home' ? 'active' : ''}" data-navigate="home">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2 2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span>Academy Website</span>
              </div>
              <div class="dropdown-divider"></div>
              <div class="dropdown-item ${activeView === 'admin' ? 'active' : ''}" data-navigate="admin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                <span>Admin Dashboard</span>
              </div>
              <div class="dropdown-item ${activeView === 'student' ? 'active' : ''}" data-navigate="student">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
                <span>Student LMS</span>
              </div>
              <div class="dropdown-item ${activeView === 'instructor' ? 'active' : ''}" data-navigate="instructor">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
                <span>Instructor Portal</span>
              </div>
            </div>
          </div>

          <!-- Admission CTA -->
          <button class="btn btn-primary btn-sm" id="navAdmissionBtn">
            <span class="status-dot pulsing"></span>
            <span>ADMISSION OPEN</span>
          </button>

          <!-- Mobile Nav Toggle -->
          <button class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Fullscreen Drawer -->
    <div class="mobile-nav-drawer" id="mobileNavDrawer">
      <div class="mobile-nav-header">
        <a href="#" class="brand-logo" data-navigate="home">
          <div class="brand-mark">S</div>
          <span>SKILLFUL SIR ADNAN</span>
        </a>
        <button class="modal-close-btn" id="mobileNavClose" aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
        </button>
      </div>
      
      <ul class="mobile-nav-links">
        <li><a href="#courses" class="mobile-nav-link">Courses</a></li>
        <li><a href="#about" class="mobile-nav-link">About Academy</a></li>
        <li><a href="#instructor" class="mobile-nav-link">Instructor</a></li>
        <li><a href="#testimonials" class="mobile-nav-link">Student Stories</a></li>
        <li><a href="#certificate" class="mobile-nav-link">Certification</a></li>
        <li><a href="#contact" class="mobile-nav-link">Contact</a></li>
      </ul>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem;">
        <button class="btn btn-primary btn-lg" id="mobileAdmissionBtn" style="width: 100%;">
          <span>APPLY FOR ADMISSION</span>
        </button>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm" data-navigate="admin">Admin</button>
          <button class="btn btn-secondary btn-sm" data-navigate="student">Student</button>
          <button class="btn btn-secondary btn-sm" data-navigate="instructor">Teacher</button>
        </div>
      </div>
    </div>
  `;
}

export function initNavbarEvents(onNavigate: (view: string) => void, onOpenAdmission: () => void) {
  // Dropdown toggle
  const dropdownBtn = document.getElementById('dashboardDropdownBtn');
  const dropdownMenu = document.getElementById('dashboardDropdownMenu');
  
  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.classList.toggle('show');
      dropdownBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', () => {
      dropdownMenu.classList.remove('show');
      dropdownBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Mobile drawer
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileClose = document.getElementById('mobileNavClose');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile drawer on link click
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Admission triggers
  document.getElementById('navAdmissionBtn')?.addEventListener('click', onOpenAdmission);
  document.getElementById('mobileAdmissionBtn')?.addEventListener('click', () => {
    mobileDrawer?.classList.remove('open');
    document.body.style.overflow = '';
    onOpenAdmission();
  });

  // Navigation handlers
  document.querySelectorAll('[data-navigate]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = el.getAttribute('data-navigate');
      if (targetView) {
        mobileDrawer?.classList.remove('open');
        document.body.style.overflow = '';
        onNavigate(targetView);
      }
    });
  });
}
