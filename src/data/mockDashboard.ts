export interface StudentRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  learningMode: 'Online' | 'Onsite';
  status: 'Active' | 'Completed' | 'On Hold';
  progress: number;
  enrolledDate: string;
}

export interface AdmissionApplication {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  course: string;
  learningMode: 'Online' | 'Onsite';
  appliedDate: string;
  status: 'Pending' | 'Approved' | 'Contacted' | 'Rejected';
}

export interface AssignmentItem {
  id: string;
  course: string;
  title: string;
  module: string;
  dueDate: string;
  status: 'Submitted' | 'Pending' | 'Graded';
  score?: string;
}

export interface LiveClassSchedule {
  id: string;
  course: string;
  topic: string;
  instructor: string;
  time: string;
  date: string;
  mode: 'Online Live Stream' | 'Onsite Lab 01';
  meetingLinkPlaceholder?: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  badge: 'URGENT' | 'ACADEMIC' | 'WORKSHOP';
  content: string;
}

export const DEMO_STUDENTS: StudentRecord[] = [
  { id: 'STD-101', name: 'Muhammad Ali', email: 'm.ali@example.com', phone: '0300-XXXXXXX', course: 'Graphic Designing', learningMode: 'Onsite', status: 'Active', progress: 68, enrolledDate: '12 Aug 2026' },
  { id: 'STD-102', name: 'Fatima Noor', email: 'f.noor@example.com', phone: '0321-XXXXXXX', course: 'Digital Marketing', learningMode: 'Online', status: 'Active', progress: 84, enrolledDate: '15 Aug 2026' },
  { id: 'STD-103', name: 'Usman Farooq', email: 'u.farooq@example.com', phone: '0333-XXXXXXX', course: 'Video Editing', learningMode: 'Onsite', status: 'Active', progress: 42, enrolledDate: '20 Aug 2026' },
  { id: 'STD-104', name: 'Sana Malik', email: 's.malik@example.com', phone: '0345-XXXXXXX', course: 'AI Course', learningMode: 'Online', status: 'Active', progress: 92, enrolledDate: '05 Aug 2026' },
  { id: 'STD-105', name: 'Kamran Javed', email: 'k.javed@example.com', phone: '0312-XXXXXXX', course: 'Web Development', learningMode: 'Onsite', status: 'Completed', progress: 100, enrolledDate: '01 Jul 2026' },
  { id: 'STD-106', name: 'Zainab Bibi', email: 'z.bibi@example.com', phone: '0302-XXXXXXX', course: 'WordPress', learningMode: 'Online', status: 'Active', progress: 55, enrolledDate: '18 Aug 2026' }
];

export const DEMO_ADMISSIONS: AdmissionApplication[] = [
  { id: 'ADM-8901', fullName: 'Hassan Raza', phone: '0315-XXXXXXX', email: 'hassan@example.com', city: 'Lahore', course: 'Graphic Designing', learningMode: 'Onsite', appliedDate: 'Today, 10:30 AM', status: 'Pending' },
  { id: 'ADM-8902', fullName: 'Mariam Siddiqui', phone: '0334-XXXXXXX', email: 'mariam@example.com', city: 'Karachi', course: 'Digital Marketing', learningMode: 'Online', appliedDate: 'Today, 08:15 AM', status: 'Pending' },
  { id: 'ADM-8903', fullName: 'Bilal Akhtar', phone: '0322-XXXXXXX', email: 'bilal.a@example.com', city: 'Rawalpindi', course: 'Video Editing', learningMode: 'Onsite', appliedDate: 'Yesterday', status: 'Contacted' },
  { id: 'ADM-8904', fullName: 'Nimra Shah', phone: '0341-XXXXXXX', email: 'nimra@example.com', city: 'Islamabad', course: 'AI Course', learningMode: 'Online', appliedDate: 'Yesterday', status: 'Approved' }
];

export const DEMO_SCHEDULE: LiveClassSchedule[] = [
  { id: 'CLS-01', course: 'Graphic Designing', topic: 'Brand Identity Design Systems & Case Study Setup', instructor: 'Skillful Sir Adnan', time: '05:00 PM - 07:00 PM (PKT)', date: 'Today', mode: 'Onsite Lab 01' },
  { id: 'CLS-02', course: 'Digital Marketing', topic: 'Meta Ads Manager: Pixel Event Tracking & Custom Audiences', instructor: 'Skillful Sir Adnan', time: '08:00 PM - 09:30 PM (PKT)', date: 'Today', mode: 'Online Live Stream' },
  { id: 'CLS-03', course: 'Video Editing', topic: 'DaVinci Resolve Color Grading & Lumetri Scopes', instructor: 'Skillful Sir Adnan', time: '04:00 PM - 06:00 PM (PKT)', date: 'Tomorrow', mode: 'Onsite Lab 01' }
];

export const DEMO_ASSIGNMENTS: AssignmentItem[] = [
  { id: 'ASG-301', course: 'Graphic Designing', title: 'Module 04: Vector Logo & Corporate Stationery Set', module: 'Brand Design', dueDate: 'Sep 05, 2026', status: 'Pending' },
  { id: 'ASG-302', course: 'Graphic Designing', title: 'Module 03: High-End Photo Retouching & Composition', module: 'Color & Composition', dueDate: 'Aug 28, 2026', status: 'Graded', score: '95/100' },
  { id: 'ASG-303', course: 'Graphic Designing', title: 'Module 02: Typographic Poster & Font Hierarchy', module: 'Typography', dueDate: 'Aug 20, 2026', status: 'Graded', score: '92/100' },
  { id: 'ASG-304', course: 'Graphic Designing', title: 'Module 01: Visual Composition & Grid Layouts', module: 'Design Fundamentals', dueDate: 'Aug 14, 2026', status: 'Graded', score: '98/100' }
];

export const DEMO_ANNOUNCEMENTS: AnnouncementItem[] = [
  { id: 'ANN-01', title: 'Admissions Open for New Evening & Weekend Batches', date: 'Sep 01, 2026', badge: 'URGENT', content: 'Registrations are now active for upcoming Online & Onsite batches. Limited seats per workstation lab to maintain individual student mentoring.' },
  { id: 'ANN-02', title: 'Upcoming Practical Freelance Bidding Masterclass', date: 'Aug 28, 2026', badge: 'WORKSHOP', content: 'Special weekend live workshop with Skillful Sir Adnan on creating winning Upwork proposals and client communication workflows.' },
  { id: 'ANN-03', title: 'Adobe Creative Suite Lab Software Update', date: 'Aug 24, 2026', badge: 'ACADEMIC', content: 'All academy workstation computers in Lab 01 and Lab 02 have been updated with the latest stable releases of Photoshop, Illustrator, and Premiere Pro.' }
];
