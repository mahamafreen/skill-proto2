import { renderNavbar, initNavbarEvents } from './components/Navbar';
import { renderHeroSlider, initHeroSliderEvents } from './components/HeroSlider';
import { renderAcademyIntro } from './components/AcademyIntro';
import { renderCourseExplorer, initCourseExplorerEvents } from './components/CourseExplorer';
import { renderFeaturedCourse, initFeaturedCourseEvents } from './components/FeaturedCourse';
import { renderInstructorSection } from './components/InstructorSection';
import { renderStudentStories } from './components/StudentStories';
import { renderCertificateSection } from './components/CertificateSection';
import { renderContactSection } from './components/ContactSection';
import { renderCourseDetailModal, initCourseDetailModalEvents } from './components/CourseDetailModal';
import { renderAdmissionModal, initAdmissionModalEvents, AdmissionFormData } from './components/AdmissionModal';
import { renderAdminDashboard, initAdminDashboardEvents } from './components/AdminDashboard';
import { renderStudentDashboard, initStudentDashboardEvents } from './components/StudentDashboard';
import { renderInstructorDashboard, initInstructorDashboardEvents } from './components/InstructorDashboard';
import { COURSES } from './data/courses';
import { DEMO_ADMISSIONS } from './data/mockDashboard';

class AcademyApp {
  private appRoot: HTMLElement;
  private currentView: string = 'home';
  private modalContainer: HTMLElement;

  constructor() {
    const root = document.getElementById('app');
    if (!root) throw new Error('App root #app not found');
    this.appRoot = root;

    // Create persistent modal container
    const mContainer = document.createElement('div');
    mContainer.id = 'appModalContainer';
    document.body.appendChild(mContainer);
    this.modalContainer = mContainer;

    this.render();
    this.setupHashListener();
  }

  private setupHashListener() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (['admin', 'student', 'instructor'].includes(hash)) {
        this.navigate(hash);
      } else if (hash === 'home' || hash === '') {
        this.navigate('home');
      }
    });

    const initialHash = window.location.hash.replace('#', '');
    if (['admin', 'student', 'instructor'].includes(initialHash)) {
      this.currentView = initialHash;
    }
  }

  public navigate(view: string) {
    this.currentView = view;
    window.location.hash = view === 'home' ? '' : view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  public openAdmissionModal(preselectedCourse?: string) {
    this.modalContainer.innerHTML = renderAdmissionModal(preselectedCourse);
    initAdmissionModalEvents(
      () => {
        this.modalContainer.innerHTML = '';
      },
      (newApp: AdmissionFormData) => {
        // Add to live demo admissions
        const randId = `ADM-${Math.floor(8900 + Math.random() * 99)}`;
        DEMO_ADMISSIONS.unshift({
          id: randId,
          fullName: newApp.fullName,
          phone: newApp.phone,
          email: newApp.email,
          city: newApp.city,
          course: newApp.course,
          learningMode: newApp.learningMode,
          appliedDate: 'Just now',
          status: 'Pending'
        });
      }
    );
  }

  public openCourseModal(courseId: string) {
    const course = COURSES.find(c => c.id === courseId) || COURSES[0];
    this.modalContainer.innerHTML = renderCourseDetailModal(course);
    initCourseDetailModalEvents(
      () => {
        this.modalContainer.innerHTML = '';
      },
      (courseTitle: string) => {
        this.openAdmissionModal(courseTitle);
      }
    );
  }

  public render() {
    if (this.currentView === 'admin') {
      this.appRoot.innerHTML = renderAdminDashboard();
      initAdminDashboardEvents((view) => this.navigate(view));
      return;
    }

    if (this.currentView === 'student') {
      this.appRoot.innerHTML = renderStudentDashboard();
      initStudentDashboardEvents((view) => this.navigate(view));
      return;
    }

    if (this.currentView === 'instructor') {
      this.appRoot.innerHTML = renderInstructorDashboard();
      initInstructorDashboardEvents((view) => this.navigate(view));
      return;
    }

    // Default: Public Academy Website
    this.appRoot.innerHTML = `
      ${renderNavbar(this.currentView)}
      <main>
        ${renderHeroSlider()}
        ${renderAcademyIntro()}
        ${renderFeaturedCourse()}
        ${renderCourseExplorer()}
        ${renderInstructorSection()}
        ${renderStudentStories()}
        ${renderCertificateSection()}
        ${renderContactSection()}
      </main>
    `;

    // Initialize events for all public components
    initNavbarEvents(
      (view) => this.navigate(view),
      () => this.openAdmissionModal()
    );

    initHeroSliderEvents(
      () => this.openAdmissionModal(),
      (courseId) => this.openCourseModal(courseId)
    );

    initFeaturedCourseEvents(
      (courseId) => this.openCourseModal(courseId),
      () => this.openAdmissionModal('Graphic Designing')
    );

    initCourseExplorerEvents(
      (courseId) => this.openCourseModal(courseId)
    );

    document.getElementById('contactOpenAdmissionBtn')?.addEventListener('click', () => {
      this.openAdmissionModal();
    });
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new AcademyApp();
});
