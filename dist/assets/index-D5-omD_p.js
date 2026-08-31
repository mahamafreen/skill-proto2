(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const w of f.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&d(w)}).observe(document,{childList:!0,subtree:!0});function s(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(o){if(o.ep)return;o.ep=!0;const f=s(o);fetch(o.href,f)}})();function Ce(a="home"){return`
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
              <div class="dropdown-item ${a==="home"?"active":""}" data-navigate="home">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2 2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span>Academy Website</span>
              </div>
              <div class="dropdown-divider"></div>
              <div class="dropdown-item ${a==="admin"?"active":""}" data-navigate="admin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                <span>Admin Dashboard</span>
              </div>
              <div class="dropdown-item ${a==="student"?"active":""}" data-navigate="student">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
                <span>Student LMS</span>
              </div>
              <div class="dropdown-item ${a==="instructor"?"active":""}" data-navigate="instructor">
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
  `}function xe(a,e){const s=document.getElementById("dashboardDropdownBtn"),d=document.getElementById("dashboardDropdownMenu");s&&d&&(s.addEventListener("click",S=>{S.stopPropagation();const k=d.classList.toggle("show");s.setAttribute("aria-expanded",String(k))}),document.addEventListener("click",()=>{d.classList.remove("show"),s.setAttribute("aria-expanded","false")}));const o=document.getElementById("mobileNavToggle"),f=document.getElementById("mobileNavClose"),w=document.getElementById("mobileNavDrawer");o&&w&&o.addEventListener("click",()=>{w.classList.add("open"),document.body.style.overflow="hidden"}),f&&w&&f.addEventListener("click",()=>{w.classList.remove("open"),document.body.style.overflow=""}),document.querySelectorAll(".mobile-nav-link").forEach(S=>{S.addEventListener("click",()=>{w?.classList.remove("open"),document.body.style.overflow=""})}),document.getElementById("navAdmissionBtn")?.addEventListener("click",e),document.getElementById("mobileAdmissionBtn")?.addEventListener("click",()=>{w?.classList.remove("open"),document.body.style.overflow="",e()}),document.querySelectorAll("[data-navigate]").forEach(S=>{S.addEventListener("click",k=>{k.preventDefault();const L=S.getAttribute("data-navigate");L&&(w?.classList.remove("open"),document.body.style.overflow="",a(L))})})}function Ie(){return`
    <section class="hero-section" id="heroSection">
      <div class="container hero-slider-container">
        <div class="hero-slides-wrapper" id="heroSlidesWrapper">
          
          <!-- SLIDE 01: Build Skills. Build Your Future -->
          <div class="hero-slide active" data-slide="0">
            <div class="hero-grid">
              <div class="hero-content">
                <div class="hero-pretitle">
                  <span class="status-dot pulsing"></span>
                  <span>DIGITAL SKILLS ACADEMY</span>
                </div>
                <h1 class="hero-title">
                  BUILD SKILLS.<br />
                  <span class="accent-text">BUILD YOUR FUTURE.</span>
                </h1>
                <p class="hero-description">
                  Practical digital skills for students, beginners, freelancers and future professionals. Taught through project-based online and onsite learning.
                </p>
                <div class="hero-cta-group">
                  <a href="#courses" class="btn btn-primary btn-lg">
                    <span>EXPLORE COURSES</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                  <button class="btn btn-secondary btn-lg" id="slide1StartLearningBtn">
                    <span>START LEARNING</span>
                  </button>
                </div>
              </div>

              <!-- Hero Visual 01 with Authentic Photography & Floating UI -->
              <div class="hero-visual">
                <div class="hero-image-frame">
                  <img src="/assets/sir-adnan-portrait.png" alt="Skillful Sir Adnan - Founder & Instructor" class="hero-main-img" loading="eager" />
                </div>

                <!-- Floating UI: Progress Tracker -->
                <div class="hero-floating-widget widget-progress">
                  <div class="widget-progress-header">
                    <span class="widget-title">Course Progress</span>
                    <span class="widget-value">68%</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-bar-fill" style="width: 68%;"></div>
                  </div>
                  <div class="widget-subtitle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>Graphic Designing • Lesson 14</span>
                  </div>
                </div>

                <!-- Floating UI: Live Class Indicator -->
                <div class="hero-floating-widget widget-live">
                  <div class="live-indicator-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                  <div>
                    <div class="live-info-title">
                      <span class="status-dot pulsing"></span>
                      <span>Live Session</span>
                    </div>
                    <div class="live-info-meta">Online & Onsite Lab</div>
                  </div>
                </div>

                <!-- Floating UI: Verified Certificate Badge -->
                <div class="hero-floating-widget widget-cert">
                  <div class="cert-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  </div>
                  <div class="cert-text">Verified Certification</div>
                </div>
              </div>
            </div>
          </div>

          <!-- SLIDE 02: Turn Knowledge Into Opportunity -->
          <div class="hero-slide" data-slide="1">
            <div class="hero-grid">
              <div class="hero-content">
                <div class="hero-pretitle">
                  <span class="badge badge-accent">CAREER-FOCUSED CURRICULUM</span>
                </div>
                <h1 class="hero-title">
                  TURN KNOWLEDGE<br />
                  <span class="accent-text">INTO OPPORTUNITY.</span>
                </h1>
                <p class="hero-description">
                  Learn practical skills designed to help you create, work and grow in the digital world. Master industry tools and execute commercial projects from day one.
                </p>
                <div class="hero-cta-group">
                  <button class="btn btn-primary btn-lg" id="slide2GraphicBtn">
                    <span>VIEW GRAPHIC DESIGNING</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                  <a href="#about" class="btn btn-secondary btn-lg">
                    <span>ACADEMY METHODOLOGY</span>
                  </a>
                </div>
              </div>

              <!-- Hero Visual 02: Full Banner Composition -->
              <div class="hero-visual">
                <div class="hero-image-frame" style="max-width: 520px;">
                  <img src="/assets/sir-adnan-banner.png" alt="Graphic Design Skills for Online Earning" class="hero-main-img" style="object-position: center center;" />
                </div>

                <!-- Floating UI: Student Status -->
                <div class="hero-floating-widget widget-progress" style="bottom: -15px; left: -10px;">
                  <div class="widget-progress-header">
                    <span class="widget-title">Active Learning Mode</span>
                    <span class="badge badge-success" style="font-size: 0.65rem;">ONLINE & ONSITE</span>
                  </div>
                  <div class="widget-subtitle" style="margin-top: 0.25rem;">
                    <span>Individual Workstations & Live Streams</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SLIDE 03: Learn. Build. Earn. -->
          <div class="hero-slide" data-slide="2">
            <div class="hero-grid">
              <div class="hero-content">
                <div class="hero-pretitle">
                  <span class="badge badge-accent">PRACTICAL RESULTS</span>
                </div>
                <h1 class="hero-title">
                  LEARN.<br />
                  BUILD.<br />
                  <span class="accent-text">EARN.</span>
                </h1>
                <p class="hero-description">
                  From your first lesson to your first real project. Real-world mentorship directly under Skillful Sir Adnan with structured feedback and portfolio guidance.
                </p>
                <div class="hero-cta-group">
                  <button class="btn btn-primary btn-lg" id="slide3AdmissionBtn">
                    <span>APPLY FOR ADMISSION</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                  <a href="#instructor" class="btn btn-secondary btn-lg">
                    <span>MEET SIR ADNAN</span>
                  </a>
                </div>
              </div>

              <!-- Hero Visual 03 -->
              <div class="hero-visual">
                <div class="hero-image-frame">
                  <img src="/assets/sir-adnan-portrait.png" alt="Skillful Sir Adnan Mentorship" class="hero-main-img" />
                </div>

                <!-- Floating UI: Certification Guarantee -->
                <div class="hero-floating-widget widget-live" style="top: 30px; right: -15px;">
                  <div class="live-indicator-icon" style="color: var(--accent-primary); border-color: var(--accent-border); background-color: var(--accent-subtle);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                  <div>
                    <div class="live-info-title">Outcome Driven</div>
                    <div class="live-info-meta">Real Client Deliverables</div>
                  </div>
                </div>

                <div class="hero-floating-widget widget-progress" style="bottom: -20px; left: -10px;">
                  <div class="widget-progress-header">
                    <span class="widget-title">Cohort Capstone</span>
                    <span class="widget-value">Portfolio Ready</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-bar-fill" style="width: 100%; background: var(--status-success);"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Controls & Progress Bar -->
      <div class="container">
        <div class="hero-controls-bar">
          <!-- Slide Counter -->
          <div class="hero-slide-counter">
            <span class="hero-counter-current" id="heroCounterCurrent">01</span>
            <span>/</span>
            <span id="heroCounterTotal">03</span>
          </div>

          <!-- Progress Bar Track -->
          <div class="hero-progress-container">
            <div class="hero-progress-track">
              <div class="hero-progress-fill" id="heroProgressFill"></div>
            </div>
          </div>

          <!-- Controls: Prev, Next, Play/Pause -->
          <div class="hero-nav-buttons">
            <button class="hero-control-btn" id="heroPrevBtn" aria-label="Previous slide">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="hero-control-btn hero-pause-btn" id="heroPauseBtn" aria-label="Pause slideshow">
              <span>PAUSE</span>
            </button>
            <button class="hero-control-btn" id="heroNextBtn" aria-label="Next slide">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}function Me(a,e){const s=document.querySelectorAll(".hero-slide"),d=document.getElementById("heroCounterCurrent"),o=document.getElementById("heroProgressFill"),f=document.getElementById("heroPrevBtn"),w=document.getElementById("heroNextBtn"),C=document.getElementById("heroPauseBtn"),S=document.getElementById("heroSection");if(!s.length)return;let k=0;const L=s.length,O=6500;let N=!1,m=Date.now(),b=0;function R(c){s.forEach((T,F)=>{T.classList.remove("active","prev"),F===c?T.classList.add("active"):F<c&&T.classList.add("prev")}),d&&(d.textContent=`0${c+1}`),k=c,m=Date.now(),b=0}function y(){const c=(k+1)%L;R(c)}function W(){const c=(k-1+L)%L;R(c)}function z(){if(!N&&o){const c=Date.now()-m,T=Math.min(c/O*100,100);o.style.width=`${T}%`,c>=O&&y()}requestAnimationFrame(z)}function B(){if(N=!N,C&&(C.querySelector("span").textContent=N?"PLAY":"PAUSE"),!N)m=Date.now()-b/100*O;else if(o){const c=Date.now()-m;b=Math.min(c/O*100,100)}}w?.addEventListener("click",()=>{y()}),f?.addEventListener("click",()=>{W()}),C?.addEventListener("click",()=>{B()}),S?.addEventListener("mouseenter",()=>{if(!N){N=!0;const c=Date.now()-m;b=Math.min(c/O*100,100)}}),S?.addEventListener("mouseleave",()=>{C?.querySelector("span")?.textContent==="PAUSE"&&(N=!1,m=Date.now()-b/100*O)}),window.addEventListener("keydown",c=>{c.key==="ArrowRight"?y():c.key==="ArrowLeft"&&W()});let H=0,K=0;S?.addEventListener("touchstart",c=>{H=c.changedTouches[0].screenX},{passive:!0}),S?.addEventListener("touchend",c=>{K=c.changedTouches[0].screenX,M()},{passive:!0});function M(){K<H-50?y():K>H+50&&W()}document.getElementById("slide1StartLearningBtn")?.addEventListener("click",a),document.getElementById("slide2GraphicBtn")?.addEventListener("click",()=>e("graphic-designing")),document.getElementById("slide3AdmissionBtn")?.addEventListener("click",a),z()}function ke(){return`
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
  `}const X=[{id:"graphic-designing",title:"Graphic Designing",category:"DESIGN",badge:"FLAGSHIP PROGRAM",isFeatured:!0,shortDescription:"Master professional visual communication, branding systems, advertising graphics, and commercial digital design from fundamentals to client-ready portfolio.",fullOverview:"The Graphic Designing curriculum is built to transform ambitious learners into industry-ready creative designers. Starting with the core science of visual hierarchy, typography, and color theory, students gain mastery over industry-standard creative suites before executing commercial client projects and building a professional portfolio for freelancing and agencies.",level:"All Levels",duration:"[COURSE DURATION]",fee:"[COURSE FEE]",learningMode:"Online & Onsite",tools:["Adobe Photoshop","Adobe Illustrator","Adobe InDesign","Figma","Canva Pro"],whatYouWillLearn:["Core visual design theory, typography rules & layout grids","Advanced photo manipulation, retouching & poster compositing","Vector identity creation, logo design & brand style guides","Social media creative campaigns & advertising banners","Print collateral: brochures, flyers, packaging & stationery","Client proposal crafting, freelance bidding & portfolio presentation"],projects:["Complete Corporate Brand Identity Package (Logo, Typography, Palette)","High-Conversion Social Media Ad Campaign (10 Multi-format Creatives)","Product Packaging Design & 3D Mockup Presentation","Personal Behance & Dribbble Portfolio Case Study"],careerOpportunities:["Brand Identity Designer","Advertising & Social Media Creative","Freelance Graphic Designer on Upwork/Fiverr","Creative Agency Visual Artist","In-House Marketing Designer"],requirements:["Basic computer literacy (typing and file management)","PC or Laptop capable of running Adobe Creative Cloud","Dedication to complete practical assignments weekly"],syllabus:[{number:"01",title:"DESIGN FUNDAMENTALS",duration:"Module 01",description:"Establishing foundational creative principles, visual weight, balance, hierarchy, and contrast required for professional visual work.",lessons:["Elements of visual composition: Line, Shape, Form, Space","Gestalt principles and visual hierarchy in commercial art","Grid systems and layout structures for digital & print","Creative brief analysis and concept ideation techniques"]},{number:"02",title:"TYPOGRAPHY",duration:"Module 02",description:"Deep exploration of type anatomy, font pairing, legibility, and expressive lettering across digital screens and print publications.",lessons:["Anatomy of type: Serif, Sans, Script, Display classifications","Kerning, tracking, leading, and typographic scale systems","Font pairing rules for corporate and modern brands","Editorial text styling, paragraph alignment & formatting"]},{number:"03",title:"COLOR & COMPOSITION",duration:"Module 03",description:"Color science, psychological impact of palettes, RGB vs CMYK color spaces, and advanced digital raster editing in Photoshop.",lessons:["Color psychology, harmonic color wheels & mood boards","Color spaces: Digital RGB, Print CMYK, Hex & Pantone matching","Photoshop selection tools, masking & non-destructive workflows","Photo retouching, tone curves, and high-impact compositing"]},{number:"04",title:"BRAND DESIGN",duration:"Module 04",description:"Vector graphics creation, precision pen tool mastery, logo ideation, and crafting corporate brand guidelines in Illustrator.",lessons:["Vector geometry, anchor points, and pen tool mastery","Logo design methodologies: Wordmarks, Emblems, Monograms & Icons","Constructing brand identity kits & color/typography manuals","Vector illustration techniques and custom icon development"]},{number:"05",title:"SOCIAL MEDIA DESIGN",duration:"Module 05",description:"Designing high-converting marketing assets for digital campaigns, carousel posts, story ads, and promotional banners.",lessons:["Aspect ratios and composition for Meta, LinkedIn, YouTube & TikTok","Visual hooks, call-to-action placement & conversion design","Multi-slide educational carousel layouts and visual storytelling","Motion-ready static assets and responsive canvas techniques"]},{number:"06",title:"PORTFOLIO & CLIENT PROJECT",duration:"Module 06",description:"End-to-end client simulation project, preparing print-ready files, exporting digital assets, and launching a professional Behance case study.",lessons:["Pre-press standards, bleed, margins, and print-ready export settings","Mockup generation and photorealistic case study rendering","Structuring a professional portfolio on Behance and Dribbble","Freelance pricing models, client communication, and handover"]}],faqs:[{question:"Do I need prior drawing or art experience to enroll?",answer:"No prior drawing background is required. The course starts from core fundamental visual rules and step-by-step software mastery."},{question:"Is this course offered online or onsite?",answer:"Both modes are supported. You can attend live interactive online sessions or hands-on onsite classes at the academy."},{question:"Will I receive a course certificate upon completion?",answer:"Yes, students who successfully complete all module assignments and submit the final portfolio project will be awarded the academy certificate."}]},{id:"motion-graphics",title:"Motion Graphics",category:"DESIGN",shortDescription:"Bring visual elements to life through 2D animation, kinetic typography, title sequences, logo reveals, and dynamic visual effects.",fullOverview:"Learn how to create cinematic motion graphics, commercial animated ads, kinetic typography, and broadcast-ready design packages using Adobe After Effects and Premiere Pro.",level:"Intermediate",duration:"[COURSE DURATION]",fee:"[COURSE FEE]",learningMode:"Online & Onsite",tools:["Adobe After Effects","Adobe Illustrator","Adobe Premiere Pro","Media Encoder"],whatYouWillLearn:["The 12 principles of animation applied to digital interfaces & graphics","Keyframe interpolation, easing curves, and graph editor mastery","Kinetic typography, lower thirds, and title card sequences","Vector logo animation and brand motion kits","Particle effects, visual transitions, and green screen compositing","Optimized video rendering and social media delivery"],projects:["Commercial 15-Second Animated Brand Promo","Dynamic Kinetic Typography Speech Visualization","Complete YouTube / Broadcast Motion Package (Intro, Lower Third, Outro)"],careerOpportunities:["Motion Designer","2D Animator","Video Creative Specialist","Digital Content Animator"],requirements:["Basic familiarity with Graphic Design or Adobe Illustrator","Computer with dedicated GPU recommended for smooth rendering"],syllabus:[{number:"01",title:"MOTION FOUNDATIONS & AFTER EFFECTS INTERFACE",duration:"Module 01",description:"Workspace setup, timeline architecture, spatial vs temporal interpolation, and layer hierarchies.",lessons:["UI navigation and keyframe mechanics","The 12 principles of animation in motion design","Graph editor speed and value curves"]},{number:"02",title:"KINETIC TYPOGRAPHY & TEXT ANIMATORS",duration:"Module 02",description:"Text range selectors, character animation, expressive kinetic typography for advertisements.",lessons:["Text animators and 3D per-character switches","Rhythmic timing with audio voiceovers","Dynamic transitions and speed ramps"]},{number:"03",title:"VECTOR ANIMATION & LOGO REVEALS",duration:"Module 03",description:"Importing Illustrator artwork, shape layer conversions, trim paths, repeater effects, and morphing.",lessons:["AI to AE vector pipeline","Shape layer operators: Trim Paths, Wiggle, Pucker","Seamless shape transitions and morphing"]},{number:"04",title:"COMMERCIAL REEL & RENDERING",duration:"Module 04",description:"Sound design integration, render codecs, alpha channel export, and showreel assembly.",lessons:["Audio-visual synchronization","Exporting transparent ProRes & Lottie animations","Showreel portfolio presentation"]}],faqs:[{question:"Is Graphic Design required before learning Motion Graphics?",answer:"While beneficial, beginners with computer literacy can start with our foundational motion orientation modules."}]},{id:"digital-marketing",title:"Digital Marketing",category:"DIGITAL",shortDescription:"Master performance marketing, search engine optimization (SEO), Meta & Google Ads campaigns, analytics, and conversion funnels.",fullOverview:"A comprehensive, data-backed digital marketing curriculum covering brand positioning, audience segmentation, paid media execution (Meta Ads Manager, Google Ads), content strategy, and conversion optimization.",level:"Beginner",duration:"[COURSE DURATION]",fee:"[COURSE FEE]",learningMode:"Online & Onsite",tools:["Meta Ads Manager","Google Ads","Google Analytics 4","SEMrush","Mailchimp"],whatYouWillLearn:["Modern digital marketing ecosystem and customer journey mapping","Meta advertising: Audience targeting, pixel tracking, and campaign scaling","Google Search, Display, and Video Ads management","Search Engine Optimization (On-page, Off-page, Technical basics)","Data analytics with GA4, tracking KPIs, and ROAS optimization","Copywriting formulas that convert cold traffic into buyers"],projects:["Live Meta Ads Campaign Strategy & Budgeting Plan","Full SEO Audit Report for a Real Website","Multi-stage E-commerce Conversion Funnel Blueprint"],careerOpportunities:["Digital Marketing Specialist","PPC / Media Buyer","SEO Consultant","Social Media Marketing Manager"],requirements:["Basic internet usage and analytical thinking","Active computer with internet access"],syllabus:[{number:"01",title:"MARKETING STRATEGY & AUDIENCE RESEARCH",duration:"Module 01",description:"Understanding consumer psychology, buyer personas, market research, and competitive analysis.",lessons:["Customer lifecycle and acquisition funnels","Creating detailed buyer personas","Value propositions and messaging hierarchy"]},{number:"02",title:"META ADS & PAID SOCIAL ACQUISITION",duration:"Module 02",description:"Setting up Business Manager, Custom Audiences, Lookalikes, Pixel event tracking, and A/B split testing.",lessons:["Business Manager and catalog setup","CBO vs ABO budgeting strategies","Creative testing framework and ad copy formulas"]},{number:"03",title:"SEARCH ENGINE OPTIMIZATION & GOOGLE ADS",duration:"Module 03",description:"Keyword intent research, on-page optimization, backlink strategies, and Google Search ad auctions.",lessons:["Keyword research with SEMrush and Google Keyword Planner","On-page title tags, meta descriptions, and site speed","Google Search ad groups and bidding strategies"]},{number:"04",title:"ANALYTICS, REPORTING & CLIENT FREELANCING",duration:"Module 04",description:"Setting up GA4 dashboards, tracking conversion events, client pitching, and monthly reporting.",lessons:["GA4 event tracking and conversion setup","Measuring CAC, ROAS, and LTV","Structuring monthly retainer proposals"]}],faqs:[{question:"Do I need a real budget to practice paid advertising?",answer:"We provide simulated environments and walkthroughs of real ad accounts, plus guidance on launching initial micro-budget test campaigns."}]},{id:"ai-course",title:"AI Course",category:"DIGITAL",badge:"FUTURE TECH",shortDescription:"Leverage generative AI tools, prompt engineering, automated workflows, and AI-assisted content creation to 10x your productivity.",fullOverview:"Explore the modern generative AI landscape. Learn structured prompt engineering techniques for language models, AI image and video generation tools, and automation workflows to streamline digital workflows and freelancing services.",level:"All Levels",duration:"[COURSE DURATION]",fee:"[COURSE FEE]",learningMode:"Online & Onsite",tools:["ChatGPT / Claude","Midjourney","Stable Diffusion","Make.com","Zapier","Runway / Kling"],whatYouWillLearn:["Advanced prompt engineering frameworks (Role, Context, Constraints, Few-shot)","High-precision AI image generation with Midjourney & control parameters","AI video generation, scriptwriting, and voice synthesis workflows","Automating repetitive business processes with No-Code AI pipelines","AI for copywriting, research, market analysis, and coding assistance","Ethical considerations, copyright guidelines, and commercial usage rights"],projects:["AI-Powered Digital Brand Asset Suite (Visuals, Copy, Strategy)","Automated Content Distribution Pipeline via Zapier / Make","AI Commercial Video Mockup from Script to Final Render"],careerOpportunities:["AI Prompt Engineer / Consultant","AI Content & Creative Producer","Automation Specialist","Productivity Consultant"],requirements:["Curiosity about emerging technologies and basic digital skills","Standard web browser and internet connection"],syllabus:[{number:"01",title:"GENERATIVE AI FOUNDATIONS & PROMPT MASTERY",duration:"Module 01",description:"How LLMs operate, prompt patterns, chain-of-thought prompting, and structured output formatting.",lessons:["LLM architecture overview","Few-shot and zero-shot prompting techniques","Custom instructions and system prompts"]},{number:"02",title:"VISUAL & MULTIMODAL AI CREATION",duration:"Module 02",description:"Controlling Midjourney style references, lighting prompts, aspect ratios, inpainting, and outpainting.",lessons:["Midjourney syntax and parameter commands","Photorealistic prompting and commercial product staging","AI video generation tools and voice synthesis"]},{number:"03",title:"WORKFLOW AUTOMATION & NO-CODE AI INTEGRATIONS",duration:"Module 03",description:"Connecting AI models to Google Sheets, Notion, email, and social channels with automated triggers.",lessons:["Zapier and Make.com fundamentals","Building an automated research assistant","Data extraction and summarization bots"]}],faqs:[{question:"Do I need programming knowledge for this AI course?",answer:"No programming is required. The curriculum focuses on applied prompt engineering, tools, and no-code automation systems."}]},{id:"video-editing",title:"Video Editing",category:"DESIGN",shortDescription:"Craft compelling video stories, commercial reels, podcasts, and social media shorts with Premiere Pro and DaVinci Resolve.",fullOverview:"Learn professional non-linear video editing workflows from rough assembly to final color grade and sound mix. Master pacing, narrative flow, sound design, transitions, and export standards for YouTube, TikTok, and commercial clients.",level:"Beginner to Intermediate",duration:"[COURSE DURATION]",fee:"[COURSE FEE]",learningMode:"Online & Onsite",tools:["Adobe Premiere Pro","DaVinci Resolve","Adobe Audition","CapCut Pro"],whatYouWillLearn:["Non-linear editing fundamentals, project organization, and bin management","Rhythm, pacing, match cuts, J-cuts, L-cuts, and narrative storytelling","Color correction, color grading, LUTs, and color wheel balance","Audio cleanup, dialogue enhancement, sound effects, and background scoring","High-retention editing techniques for YouTube, Reels, and TikTok","Export presets for web, broadcast, and high-definition client delivery"],projects:["High-Energy Talking Head YouTube Video with B-Roll & Graphics","Short-Form Viral Reel with Dynamic Subtitles & Sound Design","Cinematic Commercial Brand Teaser with Color Grading"],careerOpportunities:["Professional Video Editor","Short-Form Content Editor (TikTok/Reels)","YouTube Channel Lead Editor","Agency Post-Production Specialist"],requirements:["Computer capable of smooth 1080p video editing","Earphones or headphones for audio balancing exercises"],syllabus:[{number:"01",title:"INGESTION & TIMELINE MECHANICS",duration:"Module 01",description:"Footage organization, proxies, timeline shortcuts, rough cutting, and assembly workflow.",lessons:["File structure, codecs, and project setup","Three-point editing and shortcut mastery","Rough assembly and storyline pacing"]},{number:"02",title:"AUDIO PRODUCTION & SOUND DESIGN",duration:"Module 02",description:"Dialogue cleanup, noise reduction, vocal EQ, sound effects layering, and master audio leveling.",lessons:["Essential Sound panel and noise reduction","Layering ambient tracks and Foley effects","Volume automation and audio ducking"]},{number:"03",title:"COLOR CORRECTION & GRADING",duration:"Module 03",description:"Reading scopes, exposure balance, white balance correction, cinematic skin tones, and LUT application.",lessons:["Lumetri Color scopes and exposure balance","Secondary color correction and skin tone isolation","Creative grading and film emulation"]},{number:"04",title:"SHORT-FORM VIRAL PACING & EXPORTS",duration:"Module 04",description:"Fast-paced storytelling, animated captions, visual hooks, and platform-specific render settings.",lessons:["Auto-reframe and vertical video mastery","Animated captions and visual emphasis","Export settings for YouTube and Instagram"]}],faqs:[{question:"What computer specifications are needed for Video Editing?",answer:"A minimum of 8GB RAM (16GB recommended) and a multi-core processor will ensure smooth editing and playback."}]},{id:"web-development",title:"Web Development",category:"DEVELOPMENT",shortDescription:"Build modern, responsive, high-performance websites and web applications using HTML5, CSS3, modern JavaScript, and clean frontend standards.",fullOverview:"Step into frontend development with modern standards. Understand document structure, responsive layouts with Flexbox and CSS Grid, interactive UI logic with JavaScript, API integrations, and deploying production websites to the web.",level:"Beginner to Intermediate",duration:"[COURSE DURATION]",fee:"[COURSE FEE]",learningMode:"Online & Onsite",tools:["VS Code","Git & GitHub","HTML5 / CSS3","JavaScript (ES6+)","Tailwind / Modern CSS"],whatYouWillLearn:["Semantic HTML5 structure, accessibility (a11y), and SEO fundamentals","Modern CSS: Flexbox, CSS Grid, custom properties, animations, and media queries","JavaScript fundamentals: DOM manipulation, event listeners, array methods, fetch API","Version control with Git, GitHub collaboration, and branching","Responsive mobile-first web architecture across all device screen sizes","Website deployment, performance optimization, and custom domain setup"],projects:["Multi-Page Fully Responsive Business Website","Interactive Web Application with Live API Integration","Personal Developer Portfolio Hosted on GitHub Pages / Vercel"],careerOpportunities:["Frontend Web Developer","UI/Web Designer & Developer","Freelance Web Specialist","Junior Web Engineer"],requirements:["Basic computer literacy","Code editor (VS Code) and modern web browser"],syllabus:[{number:"01",title:"SEMANTIC WEB ARCHITECTURE & MODERN CSS",duration:"Module 01",description:"Semantic HTML markup, CSS Box Model, Flexbox layouts, Grid systems, and mobile responsiveness.",lessons:["HTML5 semantic elements and accessibility","CSS layout systems: Flexbox and Grid","Responsive breakpoints and modern CSS variables"]},{number:"02",title:"JAVASCRIPT CORE & DOM MANIPULATION",duration:"Module 02",description:"Variables, data types, functions, conditional logic, loops, DOM queries, and dynamic user events.",lessons:["JavaScript syntax and control flow","Selecting and mutating DOM elements","Event listeners and interactive user interfaces"]},{number:"03",title:"ASYNCHRONOUS JAVASCRIPT & APIS",duration:"Module 03",description:"JSON format, Fetch API, asynchronous promises, handling responses, and rendering dynamic data feeds.",lessons:["Promises, async/await, and REST APIs","Building dynamic cards from API data","Form handling and input validation"]},{number:"04",title:"GIT VERSION CONTROL & DEPLOYMENT",duration:"Module 04",description:"Git commits, branches, pushing repositories to GitHub, and deploying live production builds on modern hosts.",lessons:["Git commands and GitHub repository workflows","Deploying on Vercel and Netlify","Lighthouse performance auditing"]}],faqs:[{question:"Do I need prior coding background?",answer:"No coding experience is required. We start with the absolute fundamentals of web structure and build up gradually."}]},{id:"wordpress-development",title:"WordPress",category:"DEVELOPMENT",shortDescription:"Create custom business websites, blogs, and full WooCommerce e-commerce stores without writing complex code.",fullOverview:"Learn how to build, customize, and maintain professional WordPress websites for businesses and clients. Master Elementor page builder, WooCommerce online store configuration, payment gateways, performance optimization, and site security.",level:"Beginner",duration:"[COURSE DURATION]",fee:"[COURSE FEE]",learningMode:"Online & Onsite",tools:["WordPress Core","Elementor Pro","WooCommerce","cPanel / Hosting","SEO Plugins"],whatYouWillLearn:["Domain, hosting, DNS configuration, and WordPress installation","Page building with Elementor: custom headers, footers, and responsive layouts","Complete WooCommerce setup: product catalogs, checkout, and payment gateways","Essential plugin configuration: security, caching, backups, and forms","On-page SEO setup with RankMath / Yoast for WordPress sites","Client website migration, maintenance, and staging management"],projects:["Complete Corporate Business Website with Contact Forms & Booking","Full WooCommerce E-commerce Store with Payment Gateway Integration","Custom Editorial Blog / Magazine Portal"],careerOpportunities:["WordPress Developer / Designer","E-commerce Store Specialist","Freelance Web Creator","Website Maintenance Manager"],requirements:["Basic computer literacy and internet access","Willingness to practice on local server or staging domain"],syllabus:[{number:"01",title:"WORDPRESS CORE & HOSTING ESSENTIALS",duration:"Module 01",description:"Hosting environments, database setup, dashboard navigation, permalinks, and theme installation.",lessons:["Domain & hosting fundamentals","Dashboard settings and content hierarchy","Theme selection and customizer configuration"]},{number:"02",title:"ADVANCED ELEMENTOR PAGE BUILDING",duration:"Module 02",description:"Creating custom header/footer templates, dynamic tags, global styles, and pixel-perfect responsive layouts.",lessons:["Elementor containers and responsive editing","Theme Builder: Single posts, archives, 404 pages","Global colors, fonts, and custom styling"]},{number:"03",title:"WOOCOMMERCE E-COMMERCE MASTERY",duration:"Module 03",description:"Configuring physical/digital products, tax, shipping zones, coupons, and local payment gateways.",lessons:["Product categories, attributes, and variations","Cart & checkout custom page designs","Payment gateway and email order alerts"]},{number:"04",title:"SECURITY, BACKUPS & FREELANCING",duration:"Module 04",description:"Hardening WordPress security, automated cloud backups, speed optimization, and delivering websites to clients.",lessons:["Security plugins and login protection","Caching, CDN setup, and asset optimization","Client onboarding, training, and handover"]}],faqs:[{question:"Can I sell freelance website design services after this course?",answer:"Yes! WordPress and WooCommerce are among the most requested web services by local businesses and global clients."}]},{id:"computer-basics",title:"Computer Basics",category:"FOUNDATIONS",shortDescription:"Build solid foundational computer skills: operating systems, typing speed, file management, internet safety, and MS Office suite.",fullOverview:"The essential foundation for anyone starting their digital journey. Learn practical operating system workflows, touch typing speed, document creation in Word, spreadsheets in Excel, presentations in PowerPoint, and safe internet practices.",level:"Beginner",duration:"[COURSE DURATION]",fee:"[COURSE FEE]",learningMode:"Online & Onsite",tools:["Windows OS","Microsoft Word","Microsoft Excel","Microsoft PowerPoint","Google Workspace"],whatYouWillLearn:["Computer hardware fundamentals, operating systems, and file management","Touch typing technique and keyboard shortcut proficiency","Word processing: Formatting letters, resumes, and official documents in MS Word","Spreadsheets: Basic formulas, tables, data entry, and charts in MS Excel","Presentations: Slide design, transitions, and public speaking decks in PowerPoint","Internet browsing, email etiquette, cloud storage, and cybersecurity basics"],projects:["Professional Resume & Formal Business Letter in MS Word","Monthly Budget & Inventory Expense Tracker in MS Excel","5-Slide Visual Academy Presentation in PowerPoint"],careerOpportunities:["Data Entry Operator","Office Assistant / Coordinator","Computer Operator","Administrative Support Staff"],requirements:["No prior experience required — open to all beginners and students"],syllabus:[{number:"01",title:"OPERATING SYSTEMS & TYPING MASTERY",duration:"Module 01",description:"Desktop navigation, folder hierarchies, file extensions, and touch typing exercises.",lessons:["Windows system management and settings","File management, compression, and shortcuts","Touch typing technique and speed drills"]},{number:"02",title:"MICROSOFT WORD & DOCUMENTATION",duration:"Module 02",description:"Document formatting, tables, headers, footers, page layouts, and PDF exporting.",lessons:["Typography, paragraph spacing, and styles","Tables, bullet lists, and borders","Printing setup and PDF generation"]},{number:"03",title:"MICROSOFT EXCEL & DATA ANALYSIS",duration:"Module 03",description:"Rows, columns, basic arithmetic formulas (SUM, AVERAGE, IF), sorting, and charts.",lessons:["Cell referencing and formula basics","Sorting, filtering, and data formatting","Creating visual bar & pie charts"]},{number:"04",title:"POWERPOINT & CLOUD PRODUCTIVITY",duration:"Module 04",description:"Slide design, animations, Google Drive cloud storage, Gmail etiquette, and online safety.",lessons:["Creating clean presentation decks","Google Drive and cloud file sharing","Safe browsing and email communication"]}],faqs:[{question:"Is this course suitable for absolute beginners?",answer:"Yes! It is specifically crafted for beginners, students, and professionals wanting to master core computer proficiency."}]},{id:"language-courses",title:"Language Courses",category:"FOUNDATIONS",shortDescription:"Enhance your English communication, professional speaking, writing fluency, and interview confidence for global opportunities.",fullOverview:"Develop practical verbal and written English communication skills tailored for freelancers, remote job seekers, students, and professionals dealing with international clients.",level:"All Levels",duration:"[COURSE DURATION]",fee:"[COURSE FEE]",learningMode:"Online & Onsite",tools:["Interactive Speaking Labs","Grammar Guides","Pronunciation Audio","Roleplay Exercises"],whatYouWillLearn:["Spoken English fluency, pronunciation, and active conversational practice","Grammar foundations, sentence structure, and vocabulary building","Professional business communication: emails, client calls, and proposals","Freelance client conversation techniques & objection handling","Job interview preparation, resume vocabulary, and public speaking confidence","Listening comprehension and cross-cultural communication"],projects:["Live 2-Minute Spoken Presentation & Self Introduction","Comprehensive Freelance Client Proposal & Cold Email Pitch","Simulated Mock Job Interview with Direct Feedback"],careerOpportunities:["International Freelance Communicator","Customer Support Executive","Remote Team Specialist","Corporate Associate"],requirements:["Basic understanding of the alphabet and simple vocabulary","Willingness to participate in daily speaking practice"],syllabus:[{number:"01",title:"CONVERSATIONAL FLUENCY & PRONUNCIATION",duration:"Module 01",description:"Breaking hesitation, daily conversation drills, phonetics, and clear articulation.",lessons:["Daily routine conversations and icebreakers","Vowel sounds and common pronunciation pitfalls","Active listening and response structuring"]},{number:"02",title:"GRAMMAR IN ACTION & VOCABULARY EXPANSION",duration:"Module 02",description:"Tenses made practical, preposition usage, sentence connectors, and contextual vocabulary.",lessons:["Mastering practical tenses without memorization","Sentence structure and natural idioms","Expanding professional vocabulary"]},{number:"03",title:"PROFESSIONAL BUSINESS & CLIENT WRITING",duration:"Module 03",description:"Drafting clear emails, Upwork proposals, WhatsApp client messages, and formal reports.",lessons:["Email etiquette and structured messaging","Writing persuasive freelance proposals","Polite negotiations and follow-ups"]},{number:"04",title:"INTERVIEW READINESS & PUBLIC SPEAKING",duration:"Module 04",description:"Interview answers (STAR method), body language, confidence building, and presentation skills.",lessons:["Structuring interview responses with clarity","Handling tough questions with confidence","Final capstone speaking presentation"]}],faqs:[{question:"Will there be live speaking practice in classes?",answer:"Yes! Classes emphasize interactive pair discussions, roleplay scenarios, and live feedback."}]}];function Oe(){return`
    <section class="section-wrapper" id="courses">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">PROGRAM DIRECTORY</span>
          <h2 class="section-headline">CURATED DIGITAL COURSES</h2>
          <p class="section-description">
            Explore industry-aligned training programs categorized into Design, Digital Marketing, Development, and Core Foundations.
          </p>
        </div>

        <!-- Filter & Search Controls -->
        <div class="explorer-controls">
          <div class="explorer-top-row">
            <!-- Category Tabs -->
            <div class="category-filter-buttons" id="categoryTabs">
              <button class="category-btn active" data-category="ALL">ALL PROGRAMS (8)</button>
              <button class="category-btn" data-category="DESIGN">DESIGN (3)</button>
              <button class="category-btn" data-category="DIGITAL">DIGITAL (2)</button>
              <button class="category-btn" data-category="DEVELOPMENT">DEVELOPMENT (2)</button>
              <button class="category-btn" data-category="FOUNDATIONS">FOUNDATIONS (2)</button>
            </div>

            <!-- Search Bar -->
            <div class="search-input-wrapper">
              <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" id="courseSearchInput" class="form-input" placeholder="Search by course name or software..." />
            </div>
          </div>

          <!-- Secondary Filters -->
          <div class="explorer-secondary-filters">
            <div class="filter-select-group">
              <span class="filter-label">LEVEL:</span>
              <select id="levelFilterSelect" class="form-select filter-select">
                <option value="ALL">All Skill Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="All Levels">All Levels</option>
              </select>
            </div>

            <div class="filter-select-group">
              <span class="filter-label">LEARNING MODE:</span>
              <select id="modeFilterSelect" class="form-select filter-select">
                <option value="ALL">All Modes</option>
                <option value="Online & Onsite">Online & Onsite</option>
                <option value="Online">Online Only</option>
                <option value="Onsite">Onsite Only</option>
              </select>
            </div>

            <div style="margin-left: auto; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
              Showing <span id="courseCountDisplay" style="color: var(--text-primary); font-weight: 700;">8</span> Courses
            </div>
          </div>
        </div>

        <!-- Course Cards Grid -->
        <div class="courses-grid" id="coursesGridContainer">
          ${ce(X)}
        </div>
      </div>
    </section>
  `}function ce(a){return a.length===0?`
      <div style="grid-column: 1 / -1; padding: 4rem; text-align: center; background-color: var(--bg-surface-1); border: 1px dashed var(--border-medium); border-radius: var(--radius-md);">
        <p style="font-size: 1.125rem; color: var(--text-muted); margin-bottom: 1rem;">No courses match the selected filters.</p>
        <button class="btn btn-secondary btn-sm" id="resetFiltersBtn">RESET ALL FILTERS</button>
      </div>
    `:a.map(e=>`
    <article class="course-card ${e.isFeatured?"featured-border":""}" data-course-id="${e.id}">
      <div class="course-header">
        <div class="course-meta-top">
          <span class="badge ${e.badge?"badge-accent":"badge-info"}">
            ${e.badge||e.category}
          </span>
          <span class="badge badge-success">
            ${e.learningMode}
          </span>
        </div>
        <h3 class="course-title">${e.title}</h3>
        <p class="course-description">${e.shortDescription}</p>

        <!-- Tools Pills -->
        <div class="course-tools-list">
          ${e.tools.slice(0,4).map(s=>`<span class="tool-tag">${s}</span>`).join("")}
        </div>
      </div>

      <div class="course-footer-info">
        <div class="course-detail-metrics">
          <span class="metric-label">Duration / Fee</span>
          <span class="metric-val">${e.duration} • <span style="color: var(--accent-primary);">${e.fee}</span></span>
        </div>
        <button class="btn btn-secondary btn-sm view-course-btn" data-course-id="${e.id}">
          <span>VIEW COURSE</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </article>
  `).join("")}function Le(a){const e=document.getElementById("categoryTabs"),s=document.getElementById("courseSearchInput"),d=document.getElementById("levelFilterSelect"),o=document.getElementById("modeFilterSelect"),f=document.getElementById("coursesGridContainer"),w=document.getElementById("courseCountDisplay");let C="ALL",S="ALL",k="ALL",L="";function O(){let m=X.filter(b=>{if(C!=="ALL"&&!(C==="DESIGN"&&(b.id==="graphic-designing"||b.id==="motion-graphics"||b.id==="video-editing"))){if(b.category!==C)return!1}if(S!=="ALL"&&b.level!==S&&b.level!=="All Levels"||k!=="ALL"&&b.learningMode!==k&&b.learningMode!=="Online & Onsite")return!1;if(L.trim()!==""){const R=L.toLowerCase(),y=b.title.toLowerCase().includes(R),W=b.shortDescription.toLowerCase().includes(R),z=b.tools.some(B=>B.toLowerCase().includes(R));if(!y&&!W&&!z)return!1}return!0});f&&(f.innerHTML=ce(m),N()),w&&(w.textContent=String(m.length))}function N(){document.querySelectorAll(".view-course-btn").forEach(m=>{m.addEventListener("click",b=>{b.stopPropagation();const R=m.getAttribute("data-course-id");R&&a(R)})}),document.querySelectorAll(".course-card").forEach(m=>{m.addEventListener("click",()=>{const b=m.getAttribute("data-course-id");b&&a(b)})}),document.getElementById("resetFiltersBtn")?.addEventListener("click",()=>{C="ALL",S="ALL",k="ALL",L="",s&&(s.value=""),d&&(d.value="ALL"),o&&(o.value="ALL"),document.querySelectorAll(".category-btn").forEach(m=>m.classList.remove("active")),document.querySelector('[data-category="ALL"]')?.classList.add("active"),O()})}e?.querySelectorAll(".category-btn").forEach(m=>{m.addEventListener("click",()=>{e.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active")),m.classList.add("active"),C=m.getAttribute("data-category")||"ALL",O()})}),s?.addEventListener("input",m=>{L=m.target.value,O()}),d?.addEventListener("change",m=>{S=m.target.value,O()}),o?.addEventListener("change",m=>{k=m.target.value,O()}),N()}function Te(){const a=X.find(e=>e.id==="graphic-designing")||X[0];return`
    <div class="featured-section" id="featuredCourse">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Flagship Program</span>
          <h2 class="section-headline">Graphic Designing</h2>
          <p class="section-description">
            Our most comprehensive course — from design fundamentals to a full commercial portfolio.
          </p>
        </div>

        <div class="featured-section-inner">
          <div class="featured-grid">
            
            <!-- Left Column -->
            <div class="featured-left-content">
              <div class="featured-badge-row">
                <span class="badge badge-accent">FLAGSHIP PROGRAM</span>
                <span class="badge badge-success">Online &amp; Onsite</span>
              </div>

              <h3 class="featured-title">
                Master Graphic<br />
                <span style="color: var(--accent-primary);">Designing</span>
              </h3>

              <p style="color: var(--text-secondary); line-height: 1.7;">
                ${a.fullOverview}
              </p>

              <div class="learn-pillars">
                ${a.whatYouWillLearn.slice(0,4).map(e=>`
                  <div class="pillar-item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${e}</span>
                  </div>
                `).join("")}
              </div>

              <div class="featured-meta-grid">
                <div class="featured-meta-item">
                  <span class="metric-label">Duration</span>
                  <span class="metric-val">${a.duration}</span>
                </div>
                <div class="featured-meta-item">
                  <span class="metric-label">Level</span>
                  <span class="metric-val">${a.level}</span>
                </div>
                <div class="featured-meta-item">
                  <span class="metric-label">Course Fee</span>
                  <span class="metric-val" style="color: var(--accent-primary);">${a.fee}</span>
                </div>
                <div class="featured-meta-item">
                  <span class="metric-label">Mode</span>
                  <span class="metric-val">${a.learningMode}</span>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary" id="featuredViewSyllabusBtn">
                  View full syllabus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <button class="btn btn-outline" id="featuredApplyBtn">
                  Apply for admission
                </button>
              </div>
            </div>

            <!-- Right Column: Tools & Career -->
            <div class="featured-right-panel">
              <div>
                <div class="panel-subheading">Tools You Will Learn</div>
                <div class="course-tools-list" style="margin-bottom: 0;">
                  ${a.tools.map(e=>`<span class="tool-tag" style="padding: 0.35rem 0.75rem; font-size: 0.8125rem;">${e}</span>`).join("")}
                </div>
              </div>

              <div>
                <div class="panel-subheading">Portfolio Deliverables</div>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                  ${a.projects.map(e=>`
                    <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>${e}</span>
                    </li>
                  `).join("")}
                </ul>
              </div>

              <div>
                <div class="panel-subheading">Career Opportunities</div>
                <div class="career-tag-list">
                  ${a.careerOpportunities.map(e=>`<span class="career-tag">${e}</span>`).join("")}
                </div>
              </div>

              <div style="background-color: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                <div style="font-size: 0.8125rem;">
                  <strong style="color: var(--text-primary); display: block;">Official Academy Certificate</strong>
                  <span style="color: var(--text-muted);">Awarded upon verified portfolio submission</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `}function De(a,e){document.getElementById("featuredViewSyllabusBtn")?.addEventListener("click",()=>{a("graphic-designing")}),document.getElementById("featuredApplyBtn")?.addEventListener("click",e)}const $={name:"SKILLFUL SIR ADNAN",title:"FOUNDER & INSTRUCTOR",role:"Lead Digital Skills Mentor & Creative Educator",photoUrl:"/assets/sir-adnan-portrait.png",biography:"Skillful Sir Adnan is the Founder and Lead Instructor of Skillful Sir Adnan Academy. Dedicated to practical digital education, Sir Adnan provides hands-on, project-based mentorship to empower students, beginners, freelancers, and future professionals across Pakistan and abroad. His training programs focus on actionable market skills, bridge the gap between theory and client work, and guide learners from their very first lesson to independent earning.",teachingPhilosophy:"Education is most valuable when it directly leads to real-world capability. I believe in zero unnecessary theory: every tool, design principle, and workflow taught in our academy is practiced through real projects, live feedback, and practical problem-solving. My goal is to build genuine confidence in every student so they can deliver professional value.",expertise:["Graphic Designing & Brand Identity","Commercial Advertising & Social Media Creatives","Visual Communication & Typography","Creative Tools Mastery (Photoshop, Illustrator)","Practical Freelancing Guidance & Client Delivery","Curriculum Development & Interactive Mentoring"],coursesTaught:["Graphic Designing (Flagship Program)","Video Editing & Media Creation","Motion Graphics Fundamentals","Digital Skills for Online Earning"],achievements:["Founder of Skillful Sir Adnan Academy (Online & Onsite)","Mentored diverse cohorts of students, freelancers, and beginners","Developed outcome-driven project-based digital skills curriculums","Conducted interactive practical workshops and live mentoring sessions"],contactPlaceholder:{whatsapp:"[PHONE NUMBER]",email:"[EMAIL]"}};function Ne(){return`
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
                src="${$.photoUrl}" 
                alt="Skillful Sir Adnan — Founder & Instructor" 
                class="instructor-photo"
              />
              <div class="instructor-caption-box">
                <h3 class="instructor-name">${$.name}</h3>
                <div class="instructor-role">${$.title}</div>
                <p style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 0.5rem;">
                  ${$.role}
                </p>
              </div>
            </div>

            <!-- Quick Contacts Box -->
            <div style="margin-top: 1.5rem; background-color: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
              <span class="metric-label">Direct Communication</span>
              <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-secondary);">
                WhatsApp: <span style="color: var(--accent-primary);">${$.contactPlaceholder.whatsapp}</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-secondary);">
                Email: <span style="color: var(--text-primary);">${$.contactPlaceholder.email}</span>
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
                ${$.biography}
              </p>
            </div>

            <!-- Teaching Philosophy -->
            <div class="instructor-info-block" style="background-color: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 2rem;">
              <span class="info-block-title">02 — TEACHING PHILOSOPHY</span>
              <blockquote style="font-size: 1.0625rem; color: var(--text-primary); line-height: 1.7; font-style: italic; border-left: 3px solid var(--accent-primary); padding-left: 1.25rem; margin-top: 0.5rem;">
                "${$.teachingPhilosophy}"
              </blockquote>
            </div>

            <!-- Core Expertise & Courses Taught Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
              <div class="instructor-info-block">
                <span class="info-block-title">03 — CORE EXPERTISE</span>
                <div class="expertise-pill-list">
                  ${$.expertise.map(a=>`
                    <div class="expertise-pill">
                      <span style="color: var(--accent-primary); margin-right: 4px;">•</span>
                      <span>${a}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div class="instructor-info-block">
                <span class="info-block-title">04 — COURSES TAUGHT</span>
                <div class="expertise-pill-list">
                  ${$.coursesTaught.map(a=>`
                    <div class="expertise-pill" style="border-color: var(--accent-border);">
                      <span style="color: var(--accent-primary); font-weight: 700;">✓</span>
                      <span>${a}</span>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>

            <!-- Achievements / Vision -->
            <div class="instructor-info-block">
              <span class="info-block-title">05 — ACADEMY MILESTONES</span>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.625rem;">
                ${$.achievements.map(a=>`
                  <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.9375rem; color: var(--text-secondary);">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" style="flex-shrink: 0; margin-top: 4px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>${a}</span>
                  </li>
                `).join("")}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  `}const ae=[{id:"story-01",studentName:"Zubair Ahmed",course:"Graphic Designing",learningMode:"Onsite",badge:"FEATURED STUDENT STORY",quote:"Before joining Sir Adnan’s academy, I struggled with random YouTube tutorials without any structure. Sir Adnan taught us the actual design science—how to think about typography, balance, and client briefs. Within weeks of completing the brand design module, I completed my first commercial branding project with full confidence.",outcome:"Completed 4 real portfolio case studies and started taking freelance brand identity projects.",isFeatured:!0},{id:"story-02",studentName:"Ayesha Fatima",course:"Digital Marketing",learningMode:"Online",badge:"ONLINE BATCH",quote:"The practical approach to Meta Ads Manager and audience targeting made everything click. Sir Adnan breaks down complicated analytics into clear steps. The live Q&A sessions gave me exact answers for my campaign setups.",outcome:"Successfully managed ad campaigns for a local e-commerce store with positive ROAS."},{id:"story-03",studentName:"Hamza Tariq",course:"Video Editing",learningMode:"Onsite",badge:"ONSITE BATCH",quote:"The hands-on lab environment was fantastic. Learning timeline shortcuts, audio balancing, and pacing directly from Sir Adnan transformed my rough videos into clean, engaging content.",outcome:"Joined a digital media agency as a junior video editor after submitting the academy capstone reel."},{id:"story-04",studentName:"Bilal Khan",course:"Web Development",learningMode:"Online",badge:"ONLINE BATCH",quote:"I appreciated the discipline and step-by-step clarity. We didn’t just copy code; we learned how responsive layouts work and how to deploy real live websites.",outcome:"Built and published 3 responsive client websites on custom domains."}];function Pe(){const a=ae.find(s=>s.isFeatured)||ae[0],e=ae.filter(s=>!s.isFeatured);return`
    <section class="section-wrapper" id="testimonials">
      <div class="container">
        
        <div class="section-header">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="section-tag">STUDENT OUTCOMES</span>
              <h2 class="section-headline">LEARNING EXPERIENCES</h2>
            </div>
            <span class="badge badge-demo">
              [SAMPLE / DEMO TESTIMONIALS — CLIENT PLACEHOLDERS]
            </span>
          </div>
          <p class="section-description">
            Read representative learner case studies and feedback illustrating the academy's outcome-driven approach.
          </p>
        </div>

        <!-- Large-Format Editorial Student Story -->
        <div class="featured-story-card">
          <div class="story-quote-symbol">“</div>
          <p class="story-main-quote">
            ${a.quote}
          </p>
          <div class="story-author-row">
            <div>
              <div class="student-author-name" style="font-size: 1.125rem;">${a.studentName}</div>
              <div class="student-course-label" style="font-family: var(--font-mono); font-size: 0.8125rem;">
                Program: <span style="color: var(--text-primary); font-weight: 600;">${a.course}</span> (${a.learningMode} Batch)
              </div>
            </div>
            <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 0.75rem 1.25rem; max-width: 440px;">
              <span class="metric-label" style="color: var(--status-success);">VERIFIED OUTCOME</span>
              <div style="font-size: 0.8125rem; color: var(--text-secondary); margin-top: 0.25rem;">
                ${a.outcome}
              </div>
            </div>
          </div>
        </div>

        <!-- Supporting Student Review Grid (Demo) -->
        <div class="testimonials-grid">
          ${e.map(s=>`
            <div class="testimonial-card">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <span class="badge badge-info">${s.badge}</span>
                  <span class="badge badge-demo" style="font-size: 0.625rem;">DEMO REVIEW</span>
                </div>
                <p class="testimonial-quote">"${s.quote}"</p>
              </div>

              <div class="testimonial-footer">
                <div class="student-author-name">${s.studentName}</div>
                <div class="student-course-label">${s.course} • ${s.learningMode}</div>
                <div style="font-size: 0.75rem; color: var(--status-success); margin-top: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${s.outcome}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `}function Re(){return`
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
  `}function Be(){return`
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
  `}function Fe(a){return`
    <div class="modal-backdrop open" id="courseDetailModalBackdrop">
      <div class="modal-container" style="max-width: 840px;">
        
        <!-- Modal Header -->
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="badge badge-accent">${a.category}</span>
            <span class="badge badge-success">${a.learningMode}</span>
          </div>
          <button class="modal-close-btn" id="closeCourseModalBtn" aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body" style="padding: 2.5rem;">
          
          <!-- Course Hero -->
          <div style="margin-bottom: 2.5rem;">
            <h2 style="font-size: 2.25rem; font-weight: 900; text-transform: uppercase; margin-bottom: 0.75rem;">
              ${a.title}
            </h2>
            <p class="lead" style="margin-bottom: 1.5rem;">
              ${a.fullOverview}
            </p>

            <!-- Key Parameters Bar -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem;">
              <div>
                <span class="metric-label">Duration</span>
                <div class="metric-val">${a.duration}</div>
              </div>
              <div>
                <span class="metric-label">Skill Level</span>
                <div class="metric-val">${a.level}</div>
              </div>
              <div>
                <span class="metric-label">Course Fee</span>
                <div class="metric-val" style="color: var(--accent-primary);">${a.fee}</div>
              </div>
              <div>
                <span class="metric-label">Instructor</span>
                <div class="metric-val">Skillful Sir Adnan</div>
              </div>
            </div>
          </div>

          <!-- What You'll Learn -->
          <div style="margin-bottom: 2.5rem;">
            <h4 style="font-size: 1.125rem; text-transform: uppercase; margin-bottom: 1rem; font-family: var(--font-display);">
              WHAT YOU WILL LEARN
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 0.75rem;">
              ${a.whatYouWillLearn.map(e=>`
                <div style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.9375rem; color: var(--text-secondary);">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${e}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Detailed Expandable Syllabus Accordion -->
          <div style="margin-bottom: 2.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <h4 style="font-size: 1.125rem; text-transform: uppercase; font-family: var(--font-display);">
                DETAILED SYLLABUS (${a.syllabus.length} MODULES)
              </h4>
              <span class="badge badge-demo">CURRICULUM SPECIFICATION</span>
            </div>

            <div class="accordion-group">
              ${a.syllabus.map((e,s)=>`
                <div class="accordion-item ${s===0?"open":""}">
                  <button class="accordion-trigger">
                    <div class="accordion-title-group">
                      <span class="accordion-num">${e.number}</span>
                      <span class="accordion-title">${e.title}</span>
                    </div>
                    <svg class="accordion-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
                  <div class="accordion-content">
                    <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.875rem;">
                      ${e.description}
                    </p>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                      ${e.lessons.map(d=>`
                        <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; color: var(--text-muted);">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                          <span>${d}</span>
                        </li>
                      `).join("")}
                    </ul>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Software Tools & Projects Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem;">
            <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.5rem;">
              <h5 style="font-family: var(--font-mono); font-size: 0.8125rem; text-transform: uppercase; color: var(--accent-primary); margin-bottom: 0.75rem;">
                TOOLS & SOFTWARE
              </h5>
              <div class="course-tools-list" style="margin-bottom: 0;">
                ${a.tools.map(e=>`<span class="tool-tag">${e}</span>`).join("")}
              </div>
            </div>

            <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.5rem;">
              <h5 style="font-family: var(--font-mono); font-size: 0.8125rem; text-transform: uppercase; color: var(--accent-primary); margin-bottom: 0.75rem;">
                CAPSTONE PROJECTS
              </h5>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                ${a.projects.map(e=>`
                  <li style="font-size: 0.8125rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 0.4rem;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${e}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>

          <!-- FAQs Section -->
          ${a.faqs&&a.faqs.length>0?`
            <div style="margin-bottom: 2rem;">
              <h4 style="font-size: 1.125rem; text-transform: uppercase; margin-bottom: 1rem; font-family: var(--font-display);">
                FREQUENTLY ASKED QUESTIONS
              </h4>
              <div class="accordion-group">
                ${a.faqs.map(e=>`
                  <div class="accordion-item open">
                    <div style="padding: 1.25rem 1.5rem;">
                      <strong style="display: block; color: var(--text-primary); font-size: 0.9375rem; margin-bottom: 0.35rem;">${e.question}</strong>
                      <p style="font-size: 0.875rem; color: var(--text-secondary);">${e.answer}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}

        </div>

        <!-- Modal Footer CTA -->
        <div class="modal-footer">
          <button class="btn btn-secondary" id="modalCloseSecondaryBtn">Close</button>
          <button class="btn btn-primary btn-lg" id="modalApplyCourseBtn" data-course-title="${a.title}">
            <span>APPLY FOR ADMISSION</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

      </div>
    </div>
  `}function Ge(a,e){const s=document.getElementById("courseDetailModalBackdrop"),d=document.getElementById("closeCourseModalBtn"),o=document.getElementById("modalCloseSecondaryBtn"),f=document.getElementById("modalApplyCourseBtn");function w(){s?.remove(),document.body.style.overflow="",a()}d?.addEventListener("click",w),o?.addEventListener("click",w),s?.addEventListener("click",C=>{C.target===s&&w()}),f?.addEventListener("click",()=>{const C=f.getAttribute("data-course-title")||"";w(),e(C)}),document.querySelectorAll(".accordion-trigger").forEach(C=>{C.addEventListener("click",()=>{C.closest(".accordion-item")?.classList.toggle("open")})})}var se={};(function a(e,s,d,o){var f=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),w=typeof Path2D=="function"&&typeof DOMMatrix=="function",C=(function(){if(!e.OffscreenCanvas)return!1;try{var i=new OffscreenCanvas(1,1),t=i.getContext("2d");t.fillRect(0,0,1,1);var n=i.transferToImageBitmap();t.createPattern(n,"no-repeat")}catch{return!1}return!0})();function S(){}function k(i){var t=s.exports.Promise,n=t!==void 0?t:e.Promise;return typeof n=="function"?new n(i):(i(S,S),null)}var L=(function(i,t){return{transform:function(n){if(i)return n;if(t.has(n))return t.get(n);var l=new OffscreenCanvas(n.width,n.height),p=l.getContext("2d");return p.drawImage(n,0,0),t.set(n,l),l},clear:function(){t.clear()}}})(C,new Map),O=(function(){var i=Math.floor(16.666666666666668),t,n,l={},p=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(u){var v=Math.random();return l[v]=requestAnimationFrame(function r(g){p===g||p+i-1<g?(p=g,delete l[v],u()):l[v]=requestAnimationFrame(r)}),v},n=function(u){l[u]&&cancelAnimationFrame(l[u])}):(t=function(u){return setTimeout(u,i)},n=function(u){return clearTimeout(u)}),{frame:t,cancel:n}})(),N=(function(){var i,t,n={};function l(p){function u(v,r){p.postMessage({options:v||{},callback:r})}p.init=function(r){var g=r.transferControlToOffscreen();p.postMessage({canvas:g},[g])},p.fire=function(r,g,E){if(t)return u(r,null),t;var x=Math.random().toString(36).slice(2);return t=k(function(A){function I(D){D.data.callback===x&&(delete n[x],p.removeEventListener("message",I),t=null,L.clear(),E(),A())}p.addEventListener("message",I),u(r,x),n[x]=I.bind(null,{data:{callback:x}})}),t},p.reset=function(){p.postMessage({reset:!0});for(var r in n)n[r](),delete n[r]}}return function(){if(i)return i;if(!d&&f){var p=["var CONFETTI, SIZE = {}, module = {};","("+a.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{i=new Worker(URL.createObjectURL(new Blob([p])))}catch(u){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",u),null}l(i)}return i}})(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(i,t){return t?t(i):i}function R(i){return i!=null}function y(i,t,n){return b(i&&R(i[t])?i[t]:m[t],n)}function W(i){return i<0?0:Math.floor(i)}function z(i,t){return Math.floor(Math.random()*(t-i))+i}function B(i){return parseInt(i,16)}function H(i){return i.map(K)}function K(i){var t=String(i).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:B(t.substring(0,2)),g:B(t.substring(2,4)),b:B(t.substring(4,6))}}function M(i){var t=y(i,"origin",Object);return t.x=y(t,"x",Number),t.y=y(t,"y",Number),t}function c(i){i.width=document.documentElement.clientWidth,i.height=document.documentElement.clientHeight}function T(i){var t=i.getBoundingClientRect();i.width=t.width,i.height=t.height}function F(i){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=i,t}function V(i,t,n,l,p,u,v,r,g){i.save(),i.translate(t,n),i.rotate(u),i.scale(l,p),i.arc(0,0,1,v,r,g),i.restore()}function J(i){var t=i.angle*(Math.PI/180),n=i.spread*(Math.PI/180);return{x:i.x,y:i.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:i.startVelocity*.5+Math.random()*i.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:i.color,shape:i.shape,tick:0,totalTicks:i.ticks,decay:i.decay,drift:i.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:i.gravity*3,ovalScalar:.6,scalar:i.scalar,flat:i.flat}}function _(i,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,l=t.x+t.random*t.tiltCos,p=t.y+t.random*t.tiltSin,u=t.wobbleX+t.random*t.tiltCos,v=t.wobbleY+t.random*t.tiltSin;if(i.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",i.beginPath(),w&&t.shape.type==="path"&&typeof t.shape.path=="string"&&Array.isArray(t.shape.matrix))i.fill(me(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(u-l)*.1,Math.abs(v-p)*.1,Math.PI/10*t.wobble));else if(t.shape.type==="bitmap"){var r=Math.PI/10*t.wobble,g=Math.abs(u-l)*.1,E=Math.abs(v-p)*.1,x=t.shape.bitmap.width*t.scalar,A=t.shape.bitmap.height*t.scalar,I=new DOMMatrix([Math.cos(r)*g,Math.sin(r)*g,-Math.sin(r)*E,Math.cos(r)*E,t.x,t.y]);I.multiplySelf(new DOMMatrix(t.shape.matrix));var D=i.createPattern(L.transform(t.shape.bitmap),"no-repeat");D.setTransform(I),i.globalAlpha=1-n,i.fillStyle=D,i.fillRect(t.x-x/2,t.y-A/2,x,A),i.globalAlpha=1}else if(t.shape==="circle")i.ellipse?i.ellipse(t.x,t.y,Math.abs(u-l)*t.ovalScalar,Math.abs(v-p)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):V(i,t.x,t.y,Math.abs(u-l)*t.ovalScalar,Math.abs(v-p)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var h=Math.PI/2*3,P=4*t.scalar,G=8*t.scalar,U=t.x,j=t.y,Y=5,q=Math.PI/Y;Y--;)U=t.x+Math.cos(h)*G,j=t.y+Math.sin(h)*G,i.lineTo(U,j),h+=q,U=t.x+Math.cos(h)*P,j=t.y+Math.sin(h)*P,i.lineTo(U,j),h+=q;else i.moveTo(Math.floor(t.x),Math.floor(t.y)),i.lineTo(Math.floor(t.wobbleX),Math.floor(p)),i.lineTo(Math.floor(u),Math.floor(v)),i.lineTo(Math.floor(l),Math.floor(t.wobbleY));return i.closePath(),i.fill(),t.tick<t.totalTicks}function Q(i,t,n,l,p){var u=t.slice(),v=i.getContext("2d"),r,g,E=k(function(x){function A(){r=g=null,v.clearRect(0,0,l.width,l.height),L.clear(),p(),x()}function I(){d&&!(l.width===o.width&&l.height===o.height)&&(l.width=i.width=o.width,l.height=i.height=o.height),!l.width&&!l.height&&(n(i),l.width=i.width,l.height=i.height),v.clearRect(0,0,l.width,l.height),u=u.filter(function(D){return _(v,D)}),u.length?r=O.frame(I):A()}r=O.frame(I),g=A});return{addFettis:function(x){return u=u.concat(x),E},canvas:i,promise:E,reset:function(){r&&O.cancel(r),g&&g()}}}function Z(i,t){var n=!i,l=!!y(t||{},"resize"),p=!1,u=y(t,"disableForReducedMotion",Boolean),v=f&&!!y(t||{},"useWorker"),r=v?N():null,g=n?c:T,E=i&&r?!!i.__confetti_initialized:!1,x=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,A;function I(h,P,G){for(var U=y(h,"particleCount",W),j=y(h,"angle",Number),Y=y(h,"spread",Number),q=y(h,"startVelocity",Number),he=y(h,"decay",Number),fe=y(h,"gravity",Number),ye=y(h,"drift",Number),oe=y(h,"colors",H),be=y(h,"ticks",Number),re=y(h,"shapes"),we=y(h,"scalar"),Ee=!!y(h,"flat"),le=M(h),de=U,ie=[],Se=i.width*le.x,Ae=i.height*le.y;de--;)ie.push(J({x:Se,y:Ae,angle:j,spread:Y,startVelocity:q,color:oe[de%oe.length],shape:re[z(0,re.length)],ticks:be,decay:he,gravity:fe,drift:ye,scalar:we,flat:Ee}));return A?A.addFettis(ie):(A=Q(i,ie,g,P,G),A.promise)}function D(h){var P=u||y(h,"disableForReducedMotion",Boolean),G=y(h,"zIndex",Number);if(P&&x)return k(function(q){q()});n&&A?i=A.canvas:n&&!i&&(i=F(G),document.body.appendChild(i)),l&&!E&&g(i);var U={width:i.width,height:i.height};r&&!E&&r.init(i),E=!0,r&&(i.__confetti_initialized=!0);function j(){if(r){var q={getBoundingClientRect:function(){if(!n)return i.getBoundingClientRect()}};g(q),r.postMessage({resize:{width:q.width,height:q.height}});return}U.width=U.height=null}function Y(){A=null,l&&(p=!1,e.removeEventListener("resize",j)),n&&i&&(document.body.contains(i)&&document.body.removeChild(i),i=null,E=!1)}return l&&!p&&(p=!0,e.addEventListener("resize",j,!1)),r?r.fire(h,U,Y):I(h,U,Y)}return D.reset=function(){r&&r.reset(),A&&A.reset()},D}var te;function ne(){return te||(te=Z(null,{useWorker:!0,resize:!0})),te}function me(i,t,n,l,p,u,v){var r=new Path2D(i),g=new Path2D;g.addPath(r,new DOMMatrix(t));var E=new Path2D;return E.addPath(g,new DOMMatrix([Math.cos(v)*p,Math.sin(v)*p,-Math.sin(v)*u,Math.cos(v)*u,n,l])),E}function ve(i){if(!w)throw new Error("path confetti are not supported in this browser");var t,n;typeof i=="string"?t=i:(t=i.path,n=i.matrix);var l=new Path2D(t),p=document.createElement("canvas"),u=p.getContext("2d");if(!n){for(var v=1e3,r=v,g=v,E=0,x=0,A,I,D=0;D<v;D+=2)for(var h=0;h<v;h+=2)u.isPointInPath(l,D,h,"nonzero")&&(r=Math.min(r,D),g=Math.min(g,h),E=Math.max(E,D),x=Math.max(x,h));A=E-r,I=x-g;var P=10,G=Math.min(P/A,P/I);n=[G,0,0,G,-Math.round(A/2+r)*G,-Math.round(I/2+g)*G]}return{type:"path",path:t,matrix:n}}function ge(i){var t,n=1,l="#000000",p='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof i=="string"?t=i:(t=i.text,n="scalar"in i?i.scalar:n,p="fontFamily"in i?i.fontFamily:p,l="color"in i?i.color:l);var u=10*n,v=""+u+"px "+p,r=new OffscreenCanvas(u,u),g=r.getContext("2d");g.font=v;var E=g.measureText(t),x=Math.ceil(E.actualBoundingBoxRight+E.actualBoundingBoxLeft),A=Math.ceil(E.actualBoundingBoxAscent+E.actualBoundingBoxDescent),I=2,D=E.actualBoundingBoxLeft+I,h=E.actualBoundingBoxAscent+I;x+=I+I,A+=I+I,r=new OffscreenCanvas(x,A),g=r.getContext("2d"),g.font=v,g.fillStyle=l,g.fillText(t,D,h);var P=1/n;return{type:"bitmap",bitmap:r.transferToImageBitmap(),matrix:[P,0,0,P,-x*P/2,-A*P/2]}}s.exports=function(){return ne().apply(this,arguments)},s.exports.reset=function(){ne().reset()},s.exports.create=Z,s.exports.shapeFromPath=ve,s.exports.shapeFromText=ge})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),se,!1);const Ue=se.exports;se.exports.create;function $e(a){const e=a||X[0].title;return`
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
                  ${X.map(s=>`
                    <option value="${s.title}" ${s.title.toLowerCase()===e.toLowerCase()?"selected":""}>
                      ${s.title} (${s.category})
                    </option>
                  `).join("")}
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
  `}function ze(a,e){const s=document.getElementById("admissionModalBackdrop"),d=document.getElementById("closeAdmissionModalBtn"),o=document.getElementById("wizardPrevBtn"),f=document.getElementById("wizardNextBtn"),w=document.getElementById("wizardFooter"),C=document.getElementById("successCloseBtn"),S=document.getElementById("admissionStepLabel"),k=document.getElementById("admissionStepName"),L=document.querySelectorAll(".step-indicator"),O=document.querySelectorAll(".wizard-step"),N=document.getElementById("admissionSuccessState");let m=1;const b=4,R=["PERSONAL INFORMATION","CHOOSE DIGITAL COURSE","LEARNING MODE","CONFIRMATION & SUBMIT"];function y(M){if(m=M,S&&(S.textContent=`STEP 0${M} OF 04`),k&&(k.textContent=R[M-1]),L.forEach((c,T)=>{T+1<=M?c.style.backgroundColor="var(--accent-primary)":c.style.backgroundColor="var(--border-medium)"}),O.forEach(c=>{c.getAttribute("data-step")===String(M)?c.style.display="block":c.style.display="none"}),o&&(o.style.display=M>1?"inline-flex":"none"),f&&(M===b?f.innerHTML='<span>SUBMIT APPLICATION</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>':f.innerHTML='<span>NEXT STEP</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>'),M===4){const c=document.getElementById("admFullName")?.value||"[Not provided]",T=document.getElementById("admPhone")?.value||"[Not provided]",F=document.getElementById("admCourse")?.value||"Graphic Designing",V=document.querySelector('input[name="learningMode"]:checked')?.value||"Online",J=document.getElementById("summaryName"),_=document.getElementById("summaryPhone"),Q=document.getElementById("summaryCourse"),Z=document.getElementById("summaryMode");J&&(J.textContent=c),_&&(_.textContent=T),Q&&(Q.textContent=F),Z&&(Z.textContent=V)}}function W(M){if(M===1){const c=document.getElementById("admFullName"),T=document.getElementById("admPhone"),F=document.getElementById("admEmail"),V=document.getElementById("admCity");if(!c.value.trim())return c.focus(),!1;if(!T.value.trim())return T.focus(),!1;if(!F.value.trim()||!F.value.includes("@"))return F.focus(),!1;if(!V.value.trim())return V.focus(),!1}return!0}function z(){s?.remove(),document.body.style.overflow="",a()}d?.addEventListener("click",z),C?.addEventListener("click",z),s?.addEventListener("click",M=>{M.target===s&&z()}),f?.addEventListener("click",()=>{if(W(m))if(m<b)y(m+1);else{const c=`SSA-ADM-${Math.floor(1e3+Math.random()*9e3)}`,T=document.getElementById("generatedRefCode");T&&(T.textContent=c);const F={fullName:document.getElementById("admFullName")?.value||"",phone:document.getElementById("admPhone")?.value||"",email:document.getElementById("admEmail")?.value||"",city:document.getElementById("admCity")?.value||"",course:document.getElementById("admCourse")?.value||"Graphic Designing",learningMode:document.querySelector('input[name="learningMode"]:checked')?.value||"Online",notes:document.getElementById("admNotes")?.value||""};e&&e(F),O.forEach(V=>V.style.display="none"),w&&(w.style.display="none"),S&&(S.parentElement.style.display="none"),N&&(N.style.display="block");try{Ue({particleCount:70,spread:60,origin:{y:.6},colors:["#ff2a4d","#ffffff","#10b981"]})}catch{}}}),o?.addEventListener("click",()=>{m>1&&y(m-1)});const B=document.getElementById("modeOnlineOption"),H=document.getElementById("modeOnsiteOption");document.querySelectorAll('input[name="learningMode"]').forEach(M=>{M.addEventListener("change",()=>{M.value==="Online"?(B&&(B.style.borderColor="var(--accent-primary)"),H&&(H.style.borderColor="var(--border-subtle)")):(H&&(H.style.borderColor="var(--accent-primary)"),B&&(B.style.borderColor="var(--border-subtle)"))})})}const pe=[{id:"STD-101",name:"Muhammad Ali",email:"m.ali@example.com",phone:"0300-XXXXXXX",course:"Graphic Designing",learningMode:"Onsite",status:"Active",progress:68,enrolledDate:"12 Aug 2026"},{id:"STD-102",name:"Fatima Noor",email:"f.noor@example.com",phone:"0321-XXXXXXX",course:"Digital Marketing",learningMode:"Online",status:"Active",progress:84,enrolledDate:"15 Aug 2026"},{id:"STD-103",name:"Usman Farooq",email:"u.farooq@example.com",phone:"0333-XXXXXXX",course:"Video Editing",learningMode:"Onsite",status:"Active",progress:42,enrolledDate:"20 Aug 2026"},{id:"STD-104",name:"Sana Malik",email:"s.malik@example.com",phone:"0345-XXXXXXX",course:"AI Course",learningMode:"Online",status:"Active",progress:92,enrolledDate:"05 Aug 2026"},{id:"STD-105",name:"Kamran Javed",email:"k.javed@example.com",phone:"0312-XXXXXXX",course:"Web Development",learningMode:"Onsite",status:"Completed",progress:100,enrolledDate:"01 Jul 2026"},{id:"STD-106",name:"Zainab Bibi",email:"z.bibi@example.com",phone:"0302-XXXXXXX",course:"WordPress",learningMode:"Online",status:"Active",progress:55,enrolledDate:"18 Aug 2026"}],ee=[{id:"ADM-8901",fullName:"Hassan Raza",phone:"0315-XXXXXXX",email:"hassan@example.com",city:"Lahore",course:"Graphic Designing",learningMode:"Onsite",appliedDate:"Today, 10:30 AM",status:"Pending"},{id:"ADM-8902",fullName:"Mariam Siddiqui",phone:"0334-XXXXXXX",email:"mariam@example.com",city:"Karachi",course:"Digital Marketing",learningMode:"Online",appliedDate:"Today, 08:15 AM",status:"Pending"},{id:"ADM-8903",fullName:"Bilal Akhtar",phone:"0322-XXXXXXX",email:"bilal.a@example.com",city:"Rawalpindi",course:"Video Editing",learningMode:"Onsite",appliedDate:"Yesterday",status:"Contacted"},{id:"ADM-8904",fullName:"Nimra Shah",phone:"0341-XXXXXXX",email:"nimra@example.com",city:"Islamabad",course:"AI Course",learningMode:"Online",appliedDate:"Yesterday",status:"Approved"}],ue=[{id:"CLS-01",course:"Graphic Designing",topic:"Brand Identity Design Systems & Case Study Setup",instructor:"Skillful Sir Adnan",time:"05:00 PM - 07:00 PM (PKT)",date:"Today",mode:"Onsite Lab 01"},{id:"CLS-02",course:"Digital Marketing",topic:"Meta Ads Manager: Pixel Event Tracking & Custom Audiences",instructor:"Skillful Sir Adnan",time:"08:00 PM - 09:30 PM (PKT)",date:"Today",mode:"Online Live Stream"},{id:"CLS-03",course:"Video Editing",topic:"DaVinci Resolve Color Grading & Lumetri Scopes",instructor:"Skillful Sir Adnan",time:"04:00 PM - 06:00 PM (PKT)",date:"Tomorrow",mode:"Onsite Lab 01"}],He=[{id:"ASG-301",course:"Graphic Designing",title:"Module 04: Vector Logo & Corporate Stationery Set",module:"Brand Design",dueDate:"Sep 05, 2026",status:"Pending"},{id:"ASG-302",course:"Graphic Designing",title:"Module 03: High-End Photo Retouching & Composition",module:"Color & Composition",dueDate:"Aug 28, 2026",status:"Graded",score:"95/100"},{id:"ASG-303",course:"Graphic Designing",title:"Module 02: Typographic Poster & Font Hierarchy",module:"Typography",dueDate:"Aug 20, 2026",status:"Graded",score:"92/100"},{id:"ASG-304",course:"Graphic Designing",title:"Module 01: Visual Composition & Grid Layouts",module:"Design Fundamentals",dueDate:"Aug 14, 2026",status:"Graded",score:"98/100"}],qe=[{id:"ANN-01",title:"Admissions Open for New Evening & Weekend Batches",date:"Sep 01, 2026",badge:"URGENT",content:"Registrations are now active for upcoming Online & Onsite batches. Limited seats per workstation lab to maintain individual student mentoring."},{id:"ANN-02",title:"Upcoming Practical Freelance Bidding Masterclass",date:"Aug 28, 2026",badge:"WORKSHOP",content:"Special weekend live workshop with Skillful Sir Adnan on creating winning Upwork proposals and client communication workflows."},{id:"ANN-03",title:"Adobe Creative Suite Lab Software Update",date:"Aug 24, 2026",badge:"ACADEMIC",content:"All academy workstation computers in Lab 01 and Lab 02 have been updated with the latest stable releases of Photoshop, Illustrator, and Premiere Pro."}];function We(a="dashboard"){return`
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
            <div class="sidebar-link ${a==="dashboard"?"active":""}" data-admin-tab="dashboard">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="students"?"active":""}" data-admin-tab="students">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span>Students</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="courses"?"active":""}" data-admin-tab="courses">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
              <span>Courses</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="admissions"?"active":""}" data-admin-tab="admissions">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect></svg>
              <span>Admissions (${ee.filter(e=>e.status==="Pending").length})</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="certificates"?"active":""}" data-admin-tab="certificates">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span>Certificates</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="announcements"?"active":""}" data-admin-tab="announcements">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
              <span>Announcements</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="settings"?"active":""}" data-admin-tab="settings">
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
              <span style="color: #ffffff; text-transform: uppercase;">${a}</span>
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
                ${ee.filter(e=>e.status==="Pending").length}
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
                  ${ee.map(e=>`
                    <tr data-adm-row="${e.id}">
                      <td style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-primary);">${e.id}</td>
                      <td style="font-weight: 600; color: #ffffff;">${e.fullName} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">(${e.city})</span></td>
                      <td>${e.course}</td>
                      <td>
                        <span class="badge ${e.learningMode==="Online"?"badge-info":"badge-success"}">${e.learningMode}</span>
                      </td>
                      <td style="font-family: var(--font-mono);">${e.phone}</td>
                      <td style="color: var(--text-muted);">${e.appliedDate}</td>
                      <td>
                        <span class="badge ${e.status==="Pending"?"badge-warning":e.status==="Approved"?"badge-success":"badge-accent"}" id="status-badge-${e.id}">
                          ${e.status}
                        </span>
                      </td>
                      <td>
                        <div style="display: flex; gap: 0.5rem;">
                          <button class="btn btn-primary btn-sm approve-adm-btn" data-adm-id="${e.id}">
                            <span>Approve</span>
                          </button>
                          <button class="btn btn-secondary btn-sm contact-adm-btn" data-adm-id="${e.id}">
                            <span>WhatsApp</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
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
                  ${pe.map(e=>`
                    <tr class="student-row" data-std-name="${e.name.toLowerCase()}">
                      <td style="font-family: var(--font-mono); font-weight: 700;">${e.id}</td>
                      <td style="font-weight: 600; color: #ffffff;">${e.name}</td>
                      <td>${e.course}</td>
                      <td><span class="badge badge-secondary">${e.learningMode}</span></td>
                      <td>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <div class="progress-track" style="width: 80px; height: 5px; margin-bottom: 0;">
                            <div class="progress-bar-fill" style="width: ${e.progress}%;"></div>
                          </div>
                          <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700;">${e.progress}%</span>
                        </div>
                      </td>
                      <td style="color: var(--text-muted);">${e.enrolledDate}</td>
                      <td>
                        <span class="badge ${e.status==="Active"?"badge-success":"badge-info"}">${e.status}</span>
                      </td>
                      <td>
                        <button class="btn btn-ghost btn-sm" style="padding: 0.25rem 0.5rem;" title="Edit Student">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
                        </button>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  `}function Ve(a){document.querySelectorAll("[data-navigate]").forEach(s=>{s.addEventListener("click",()=>{const d=s.getAttribute("data-navigate");d&&a(d)})}),document.querySelectorAll("[data-admin-tab]").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll("[data-admin-tab]").forEach(d=>d.classList.remove("active")),s.classList.add("active")})}),document.getElementById("adminStudentSearch")?.addEventListener("input",s=>{const d=s.target.value.toLowerCase();document.querySelectorAll(".student-row").forEach(o=>{const f=o.getAttribute("data-std-name")||"";o.style.display=f.includes(d)?"":"none"})}),document.querySelectorAll(".approve-adm-btn").forEach(s=>{s.addEventListener("click",()=>{const d=s.getAttribute("data-adm-id"),o=document.getElementById(`status-badge-${d}`);o&&(o.className="badge badge-success",o.textContent="Approved"),s.setAttribute("disabled","true"),s.innerHTML="<span>✓ Enrolled</span>"})}),document.querySelectorAll(".contact-adm-btn").forEach(s=>{s.addEventListener("click",()=>{const d=s.getAttribute("data-adm-id"),o=document.getElementById(`status-badge-${d}`);o&&o.textContent?.trim()==="Pending"&&(o.className="badge badge-info",o.textContent="Contacted"),alert(`Connecting to applicant ${d} on WhatsApp for batch confirmation.`)})})}function je(a="dashboard"){return`
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
            <div class="sidebar-link ${a==="dashboard"?"active":""}" data-student-tab="dashboard">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="courses"?"active":""}" data-student-tab="courses">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
              <span>My Courses</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="progress"?"active":""}" data-student-tab="progress">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
              <span>Progress</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="assignments"?"active":""}" data-student-tab="assignments">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Assignments</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="schedule"?"active":""}" data-student-tab="schedule">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>Class Schedule</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="certificates"?"active":""}" data-student-tab="certificates">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span>Certificates</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="announcements"?"active":""}" data-student-tab="announcements">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
              <span>Announcements</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="profile"?"active":""}" data-student-tab="profile">
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
                ${ue.map(e=>`
                  <div class="schedule-card-item">
                    <div>
                      <span class="badge ${e.mode.includes("Onsite")?"badge-success":"badge-info"}" style="font-size: 0.65rem; margin-bottom: 0.35rem;">
                        ${e.mode}
                      </span>
                      <h4 style="font-size: 0.9375rem; font-weight: 700; color: #ffffff; margin-bottom: 0.25rem;">${e.topic}</h4>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">
                        Instructor: <strong style="color: var(--text-secondary);">${e.instructor}</strong>
                      </div>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-family: var(--font-mono); font-size: 0.8125rem; font-weight: 700; color: var(--accent-primary);">${e.date}</div>
                      <div style="font-size: 0.6875rem; color: var(--text-muted);">${e.time}</div>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Assignments Tracker -->
            <div class="dashboard-panel">
              <div class="panel-header-row">
                <h3 class="panel-title">ASSIGNMENTS & GRADES</h3>
                <span class="badge badge-demo">SUBMISSIONS</span>
              </div>

              <div class="assignment-list">
                ${He.map(e=>`
                  <div class="assignment-card-item">
                    <div>
                      <h4 style="font-size: 0.875rem; font-weight: 600; color: #ffffff; margin-bottom: 0.25rem;">${e.title}</h4>
                      <span style="font-size: 0.75rem; color: var(--text-muted);">Due: ${e.dueDate}</span>
                    </div>
                    <div>
                      ${e.status==="Graded"?`
                        <span class="badge badge-success" style="font-weight: 700;">${e.score}</span>
                      `:`
                        <span class="badge badge-warning">Pending Review</span>
                      `}
                    </div>
                  </div>
                `).join("")}
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
              ${qe.map(e=>`
                <div style="background-color: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span class="badge ${e.badge==="URGENT"?"badge-accent":e.badge==="WORKSHOP"?"badge-info":"badge-secondary"}">
                      ${e.badge}
                    </span>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${e.date}</span>
                  </div>
                  <h4 style="font-size: 1rem; font-weight: 700; color: #ffffff; margin-bottom: 0.35rem;">${e.title}</h4>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">${e.content}</p>
                </div>
              `).join("")}
            </div>
          </div>

        </div>

      </div>
    </div>
  `}function Xe(a){document.querySelectorAll("[data-navigate]").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-navigate");s&&a(s)})}),document.querySelectorAll("[data-student-tab]").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("[data-student-tab]").forEach(s=>s.classList.remove("active")),e.classList.add("active")})}),document.getElementById("studentContinueBtn")?.addEventListener("click",()=>{alert("Resuming Graphic Designing — Module 04: Brand Design & Vector Geometry")})}function Ye(a="dashboard"){return`
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
            <div class="sidebar-link ${a==="dashboard"?"active":""}" data-instructor-tab="dashboard">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="classes"?"active":""}" data-instructor-tab="classes">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect width="14" height="14" x="1" y="5" rx="2" ry="2"></rect></svg>
              <span>Today's Classes (02)</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="attendance"?"active":""}" data-instructor-tab="attendance">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
              <span>Attendance Tracking</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="grading"?"active":""}" data-instructor-tab="grading">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              <span>Grading Queue (04)</span>
            </div>
          </li>
          <li>
            <div class="sidebar-link ${a==="performance"?"active":""}" data-instructor-tab="performance">
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
              ${ue.slice(0,2).map(e=>`
                <div class="schedule-card-item" style="padding: 1.25rem;">
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
                      <span class="badge badge-accent">${e.course}</span>
                      <span class="badge ${e.mode.includes("Onsite")?"badge-success":"badge-info"}">${e.mode}</span>
                    </div>
                    <h4 style="font-size: 1.0625rem; font-weight: 700; color: #ffffff;">${e.topic}</h4>
                  </div>
                  <div style="text-align: right; display: flex; align-items: center; gap: 1.5rem;">
                    <div>
                      <div style="font-family: var(--font-mono); font-size: 0.9375rem; font-weight: 700; color: var(--accent-primary);">${e.time}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${e.date}</div>
                    </div>
                    <button class="btn btn-primary btn-sm">
                      <span>Start Class</span>
                    </button>
                  </div>
                </div>
              `).join("")}
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
                  ${pe.map(e=>`
                    <tr>
                      <td style="font-family: var(--font-mono); font-weight: 700;">${e.id}</td>
                      <td style="font-weight: 600; color: #ffffff;">${e.name}</td>
                      <td>${e.course}</td>
                      <td><span class="badge badge-secondary">${e.learningMode}</span></td>
                      <td style="font-family: var(--font-mono); font-weight: 600; color: var(--status-success);">${e.progress>50?"92%":"86%"}</td>
                      <td>
                        <button class="attendance-toggle-btn present" data-std-id="${e.id}">
                          PRESENT
                        </button>
                      </td>
                    </tr>
                  `).join("")}
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
  `}function Ke(a){document.querySelectorAll("[data-navigate]").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-navigate");s&&a(s)})}),document.querySelectorAll("[data-instructor-tab]").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("[data-instructor-tab]").forEach(s=>s.classList.remove("active")),e.classList.add("active")})}),document.querySelectorAll(".attendance-toggle-btn").forEach(e=>{e.addEventListener("click",()=>{e.classList.contains("present")?(e.classList.remove("present"),e.classList.add("absent"),e.textContent="ABSENT"):(e.classList.remove("absent"),e.classList.add("present"),e.textContent="PRESENT")})}),document.getElementById("saveAttendanceBtn")?.addEventListener("click",()=>{alert("Attendance log recorded successfully for Lab 01 cohort.")}),document.querySelectorAll(".grade-btn").forEach(e=>{e.addEventListener("click",()=>{alert("Grading evaluation dialog opened for submission review.")})})}class Ze{appRoot;currentView="home";modalContainer;constructor(){const e=document.getElementById("app");if(!e)throw new Error("App root #app not found");this.appRoot=e;const s=document.createElement("div");s.id="appModalContainer",document.body.appendChild(s),this.modalContainer=s,this.render(),this.setupHashListener()}setupHashListener(){window.addEventListener("hashchange",()=>{const s=window.location.hash.replace("#","");["admin","student","instructor"].includes(s)?this.navigate(s):(s==="home"||s==="")&&this.navigate("home")});const e=window.location.hash.replace("#","");["admin","student","instructor"].includes(e)&&(this.currentView=e)}navigate(e){this.currentView=e,window.location.hash=e==="home"?"":e,window.scrollTo({top:0,behavior:"smooth"}),this.render()}openAdmissionModal(e){this.modalContainer.innerHTML=$e(e),ze(()=>{this.modalContainer.innerHTML=""},s=>{const d=`ADM-${Math.floor(8900+Math.random()*99)}`;ee.unshift({id:d,fullName:s.fullName,phone:s.phone,email:s.email,city:s.city,course:s.course,learningMode:s.learningMode,appliedDate:"Just now",status:"Pending"})})}openCourseModal(e){const s=X.find(d=>d.id===e)||X[0];this.modalContainer.innerHTML=Fe(s),Ge(()=>{this.modalContainer.innerHTML=""},d=>{this.openAdmissionModal(d)})}render(){if(this.currentView==="admin"){this.appRoot.innerHTML=We(),Ve(e=>this.navigate(e));return}if(this.currentView==="student"){this.appRoot.innerHTML=je(),Xe(e=>this.navigate(e));return}if(this.currentView==="instructor"){this.appRoot.innerHTML=Ye(),Ke(e=>this.navigate(e));return}this.appRoot.innerHTML=`
      ${Ce(this.currentView)}
      <main>
        ${Ie()}
        ${ke()}
        ${Te()}
        ${Oe()}
        ${Ne()}
        ${Pe()}
        ${Re()}
        ${Be()}
      </main>
    `,xe(e=>this.navigate(e),()=>this.openAdmissionModal()),Me(()=>this.openAdmissionModal(),e=>this.openCourseModal(e)),De(e=>this.openCourseModal(e),()=>this.openAdmissionModal("Graphic Designing")),Le(e=>this.openCourseModal(e)),document.getElementById("contactOpenAdmissionBtn")?.addEventListener("click",()=>{this.openAdmissionModal()})}}document.addEventListener("DOMContentLoaded",()=>{new Ze});
