export interface InstructorProfile {
  name: string;
  title: string;
  role: string;
  photoUrl: string;
  bannerUrl: string;
  headshotUrl: string;
  biography: string;
  teachingPhilosophy: string;
  experienceSummary: string;
  expertise: string[];
  coursesTaught: string[];
  achievements: string[];
  contactPlaceholder: {
    whatsapp: string;
    email: string;
    location: string;
  };
}

export const INSTRUCTOR_DATA: InstructorProfile = {
  name: 'SKILLFUL SIR ADNAN',
  title: 'FOUNDER & INSTRUCTOR',
  role: 'Lead Digital Skills Mentor & Creative Educator',
  photoUrl: '/assets/sir-adnan-portrait.png',
  bannerUrl: '/assets/sir-adnan-banner.png',
  headshotUrl: '/assets/sir-adnan-headshot.png',
  biography: 'Skillful Sir Adnan is the Founder and Lead Instructor of Skillful Sir Adnan Academy. Dedicated to practical digital education, Sir Adnan provides hands-on, project-based mentorship to empower students, beginners, freelancers, and future professionals across Pakistan and abroad. His training programs focus on actionable market skills, bridge the gap between theory and client work, and guide learners from their very first lesson to independent earning.',
  teachingPhilosophy: 'Education is most valuable when it directly leads to real-world capability. I believe in zero unnecessary theory: every tool, design principle, and workflow taught in our academy is practiced through real projects, live feedback, and practical problem-solving. My goal is to build genuine confidence in every student so they can deliver professional value.',
  experienceSummary: 'Extensive hands-on experience in graphic designing, creative digital media, brand identity, and practical student mentoring through both interactive online batches and onsite academy training.',
  expertise: [
    'Graphic Designing & Brand Identity',
    'Commercial Advertising & Social Media Creatives',
    'Visual Communication & Typography',
    'Creative Tools Mastery (Photoshop, Illustrator)',
    'Practical Freelancing Guidance & Client Delivery',
    'Curriculum Development & Interactive Mentoring'
  ],
  coursesTaught: [
    'Graphic Designing (Flagship Program)',
    'Video Editing & Media Creation',
    'Motion Graphics Fundamentals',
    'Digital Skills for Online Earning'
  ],
  achievements: [
    'Founder of Skillful Sir Adnan Academy (Online & Onsite)',
    'Mentored diverse cohorts of students, freelancers, and beginners',
    'Developed outcome-driven project-based digital skills curriculums',
    'Conducted interactive practical workshops and live mentoring sessions'
  ],
  contactPlaceholder: {
    whatsapp: '[PHONE NUMBER]',
    email: '[EMAIL]',
    location: '[ACADEMY ADDRESS]'
  }
};
