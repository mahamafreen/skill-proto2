export interface Testimonial {
  id: string;
  studentName: string;
  course: string;
  learningMode: 'Online' | 'Onsite';
  badge: string;
  quote: string;
  outcome: string;
  isFeatured?: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'story-01',
    studentName: 'Zubair Ahmed',
    course: 'Graphic Designing',
    learningMode: 'Onsite',
    badge: 'FEATURED STUDENT STORY',
    quote: 'Before joining Sir Adnan’s academy, I struggled with random YouTube tutorials without any structure. Sir Adnan taught us the actual design science—how to think about typography, balance, and client briefs. Within weeks of completing the brand design module, I completed my first commercial branding project with full confidence.',
    outcome: 'Completed 4 real portfolio case studies and started taking freelance brand identity projects.',
    isFeatured: true
  },
  {
    id: 'story-02',
    studentName: 'Ayesha Fatima',
    course: 'Digital Marketing',
    learningMode: 'Online',
    badge: 'ONLINE BATCH',
    quote: 'The practical approach to Meta Ads Manager and audience targeting made everything click. Sir Adnan breaks down complicated analytics into clear steps. The live Q&A sessions gave me exact answers for my campaign setups.',
    outcome: 'Successfully managed ad campaigns for a local e-commerce store with positive ROAS.'
  },
  {
    id: 'story-03',
    studentName: 'Hamza Tariq',
    course: 'Video Editing',
    learningMode: 'Onsite',
    badge: 'ONSITE BATCH',
    quote: 'The hands-on lab environment was fantastic. Learning timeline shortcuts, audio balancing, and pacing directly from Sir Adnan transformed my rough videos into clean, engaging content.',
    outcome: 'Joined a digital media agency as a junior video editor after submitting the academy capstone reel.'
  },
  {
    id: 'story-04',
    studentName: 'Bilal Khan',
    course: 'Web Development',
    learningMode: 'Online',
    badge: 'ONLINE BATCH',
    quote: 'I appreciated the discipline and step-by-step clarity. We didn’t just copy code; we learned how responsive layouts work and how to deploy real live websites.',
    outcome: 'Built and published 3 responsive client websites on custom domains.'
  }
];
