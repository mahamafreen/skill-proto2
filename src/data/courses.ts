export interface SyllabusModule {
  number: string;
  title: string;
  duration: string;
  description: string;
  lessons: string[];
}

export interface Course {
  id: string;
  title: string;
  category: 'DESIGN' | 'DIGITAL' | 'DEVELOPMENT' | 'FOUNDATIONS';
  shortDescription: string;
  fullOverview: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | 'Beginner to Intermediate';
  duration: string;
  fee: string;
  learningMode: 'Online & Onsite' | 'Online' | 'Onsite';
  badge?: string;
  isFeatured?: boolean;
  tools: string[];
  whatYouWillLearn: string[];
  projects: string[];
  careerOpportunities: string[];
  requirements: string[];
  syllabus: SyllabusModule[];
  faqs: { question: string; answer: string }[];
}

export const COURSES: Course[] = [
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    category: 'DESIGN',
    badge: 'FLAGSHIP PROGRAM',
    isFeatured: true,
    shortDescription: 'Master professional visual communication, branding systems, advertising graphics, and commercial digital design from fundamentals to client-ready portfolio.',
    fullOverview: 'The Graphic Designing curriculum is built to transform ambitious learners into industry-ready creative designers. Starting with the core science of visual hierarchy, typography, and color theory, students gain mastery over industry-standard creative suites before executing commercial client projects and building a professional portfolio for freelancing and agencies.',
    level: 'All Levels',
    duration: '[COURSE DURATION]',
    fee: '[COURSE FEE]',
    learningMode: 'Online & Onsite',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Canva Pro'],
    whatYouWillLearn: [
      'Core visual design theory, typography rules & layout grids',
      'Advanced photo manipulation, retouching & poster compositing',
      'Vector identity creation, logo design & brand style guides',
      'Social media creative campaigns & advertising banners',
      'Print collateral: brochures, flyers, packaging & stationery',
      'Client proposal crafting, freelance bidding & portfolio presentation'
    ],
    projects: [
      'Complete Corporate Brand Identity Package (Logo, Typography, Palette)',
      'High-Conversion Social Media Ad Campaign (10 Multi-format Creatives)',
      'Product Packaging Design & 3D Mockup Presentation',
      'Personal Behance & Dribbble Portfolio Case Study'
    ],
    careerOpportunities: [
      'Brand Identity Designer',
      'Advertising & Social Media Creative',
      'Freelance Graphic Designer on Upwork/Fiverr',
      'Creative Agency Visual Artist',
      'In-House Marketing Designer'
    ],
    requirements: [
      'Basic computer literacy (typing and file management)',
      'PC or Laptop capable of running Adobe Creative Cloud',
      'Dedication to complete practical assignments weekly'
    ],
    syllabus: [
      {
        number: '01',
        title: 'DESIGN FUNDAMENTALS',
        duration: 'Module 01',
        description: 'Establishing foundational creative principles, visual weight, balance, hierarchy, and contrast required for professional visual work.',
        lessons: [
          'Elements of visual composition: Line, Shape, Form, Space',
          'Gestalt principles and visual hierarchy in commercial art',
          'Grid systems and layout structures for digital & print',
          'Creative brief analysis and concept ideation techniques'
        ]
      },
      {
        number: '02',
        title: 'TYPOGRAPHY',
        duration: 'Module 02',
        description: 'Deep exploration of type anatomy, font pairing, legibility, and expressive lettering across digital screens and print publications.',
        lessons: [
          'Anatomy of type: Serif, Sans, Script, Display classifications',
          'Kerning, tracking, leading, and typographic scale systems',
          'Font pairing rules for corporate and modern brands',
          'Editorial text styling, paragraph alignment & formatting'
        ]
      },
      {
        number: '03',
        title: 'COLOR & COMPOSITION',
        duration: 'Module 03',
        description: 'Color science, psychological impact of palettes, RGB vs CMYK color spaces, and advanced digital raster editing in Photoshop.',
        lessons: [
          'Color psychology, harmonic color wheels & mood boards',
          'Color spaces: Digital RGB, Print CMYK, Hex & Pantone matching',
          'Photoshop selection tools, masking & non-destructive workflows',
          'Photo retouching, tone curves, and high-impact compositing'
        ]
      },
      {
        number: '04',
        title: 'BRAND DESIGN',
        duration: 'Module 04',
        description: 'Vector graphics creation, precision pen tool mastery, logo ideation, and crafting corporate brand guidelines in Illustrator.',
        lessons: [
          'Vector geometry, anchor points, and pen tool mastery',
          'Logo design methodologies: Wordmarks, Emblems, Monograms & Icons',
          'Constructing brand identity kits & color/typography manuals',
          'Vector illustration techniques and custom icon development'
        ]
      },
      {
        number: '05',
        title: 'SOCIAL MEDIA DESIGN',
        duration: 'Module 05',
        description: 'Designing high-converting marketing assets for digital campaigns, carousel posts, story ads, and promotional banners.',
        lessons: [
          'Aspect ratios and composition for Meta, LinkedIn, YouTube & TikTok',
          'Visual hooks, call-to-action placement & conversion design',
          'Multi-slide educational carousel layouts and visual storytelling',
          'Motion-ready static assets and responsive canvas techniques'
        ]
      },
      {
        number: '06',
        title: 'PORTFOLIO & CLIENT PROJECT',
        duration: 'Module 06',
        description: 'End-to-end client simulation project, preparing print-ready files, exporting digital assets, and launching a professional Behance case study.',
        lessons: [
          'Pre-press standards, bleed, margins, and print-ready export settings',
          'Mockup generation and photorealistic case study rendering',
          'Structuring a professional portfolio on Behance and Dribbble',
          'Freelance pricing models, client communication, and handover'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need prior drawing or art experience to enroll?',
        answer: 'No prior drawing background is required. The course starts from core fundamental visual rules and step-by-step software mastery.'
      },
      {
        question: 'Is this course offered online or onsite?',
        answer: 'Both modes are supported. You can attend live interactive online sessions or hands-on onsite classes at the academy.'
      },
      {
        question: 'Will I receive a course certificate upon completion?',
        answer: 'Yes, students who successfully complete all module assignments and submit the final portfolio project will be awarded the academy certificate.'
      }
    ]
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    category: 'DESIGN',
    shortDescription: 'Bring visual elements to life through 2D animation, kinetic typography, title sequences, logo reveals, and dynamic visual effects.',
    fullOverview: 'Learn how to create cinematic motion graphics, commercial animated ads, kinetic typography, and broadcast-ready design packages using Adobe After Effects and Premiere Pro.',
    level: 'Intermediate',
    duration: '[COURSE DURATION]',
    fee: '[COURSE FEE]',
    learningMode: 'Online & Onsite',
    tools: ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Media Encoder'],
    whatYouWillLearn: [
      'The 12 principles of animation applied to digital interfaces & graphics',
      'Keyframe interpolation, easing curves, and graph editor mastery',
      'Kinetic typography, lower thirds, and title card sequences',
      'Vector logo animation and brand motion kits',
      'Particle effects, visual transitions, and green screen compositing',
      'Optimized video rendering and social media delivery'
    ],
    projects: [
      'Commercial 15-Second Animated Brand Promo',
      'Dynamic Kinetic Typography Speech Visualization',
      'Complete YouTube / Broadcast Motion Package (Intro, Lower Third, Outro)'
    ],
    careerOpportunities: [
      'Motion Designer',
      '2D Animator',
      'Video Creative Specialist',
      'Digital Content Animator'
    ],
    requirements: [
      'Basic familiarity with Graphic Design or Adobe Illustrator',
      'Computer with dedicated GPU recommended for smooth rendering'
    ],
    syllabus: [
      {
        number: '01',
        title: 'MOTION FOUNDATIONS & AFTER EFFECTS INTERFACE',
        duration: 'Module 01',
        description: 'Workspace setup, timeline architecture, spatial vs temporal interpolation, and layer hierarchies.',
        lessons: ['UI navigation and keyframe mechanics', 'The 12 principles of animation in motion design', 'Graph editor speed and value curves']
      },
      {
        number: '02',
        title: 'KINETIC TYPOGRAPHY & TEXT ANIMATORS',
        duration: 'Module 02',
        description: 'Text range selectors, character animation, expressive kinetic typography for advertisements.',
        lessons: ['Text animators and 3D per-character switches', 'Rhythmic timing with audio voiceovers', 'Dynamic transitions and speed ramps']
      },
      {
        number: '03',
        title: 'VECTOR ANIMATION & LOGO REVEALS',
        duration: 'Module 03',
        description: 'Importing Illustrator artwork, shape layer conversions, trim paths, repeater effects, and morphing.',
        lessons: ['AI to AE vector pipeline', 'Shape layer operators: Trim Paths, Wiggle, Pucker', 'Seamless shape transitions and morphing']
      },
      {
        number: '04',
        title: 'COMMERCIAL REEL & RENDERING',
        duration: 'Module 04',
        description: 'Sound design integration, render codecs, alpha channel export, and showreel assembly.',
        lessons: ['Audio-visual synchronization', 'Exporting transparent ProRes & Lottie animations', 'Showreel portfolio presentation']
      }
    ],
    faqs: [
      {
        question: 'Is Graphic Design required before learning Motion Graphics?',
        answer: 'While beneficial, beginners with computer literacy can start with our foundational motion orientation modules.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'DIGITAL',
    shortDescription: 'Master performance marketing, search engine optimization (SEO), Meta & Google Ads campaigns, analytics, and conversion funnels.',
    fullOverview: 'A comprehensive, data-backed digital marketing curriculum covering brand positioning, audience segmentation, paid media execution (Meta Ads Manager, Google Ads), content strategy, and conversion optimization.',
    level: 'Beginner',
    duration: '[COURSE DURATION]',
    fee: '[COURSE FEE]',
    learningMode: 'Online & Onsite',
    tools: ['Meta Ads Manager', 'Google Ads', 'Google Analytics 4', 'SEMrush', 'Mailchimp'],
    whatYouWillLearn: [
      'Modern digital marketing ecosystem and customer journey mapping',
      'Meta advertising: Audience targeting, pixel tracking, and campaign scaling',
      'Google Search, Display, and Video Ads management',
      'Search Engine Optimization (On-page, Off-page, Technical basics)',
      'Data analytics with GA4, tracking KPIs, and ROAS optimization',
      'Copywriting formulas that convert cold traffic into buyers'
    ],
    projects: [
      'Live Meta Ads Campaign Strategy & Budgeting Plan',
      'Full SEO Audit Report for a Real Website',
      'Multi-stage E-commerce Conversion Funnel Blueprint'
    ],
    careerOpportunities: [
      'Digital Marketing Specialist',
      'PPC / Media Buyer',
      'SEO Consultant',
      'Social Media Marketing Manager'
    ],
    requirements: [
      'Basic internet usage and analytical thinking',
      'Active computer with internet access'
    ],
    syllabus: [
      {
        number: '01',
        title: 'MARKETING STRATEGY & AUDIENCE RESEARCH',
        duration: 'Module 01',
        description: 'Understanding consumer psychology, buyer personas, market research, and competitive analysis.',
        lessons: ['Customer lifecycle and acquisition funnels', 'Creating detailed buyer personas', 'Value propositions and messaging hierarchy']
      },
      {
        number: '02',
        title: 'META ADS & PAID SOCIAL ACQUISITION',
        duration: 'Module 02',
        description: 'Setting up Business Manager, Custom Audiences, Lookalikes, Pixel event tracking, and A/B split testing.',
        lessons: ['Business Manager and catalog setup', 'CBO vs ABO budgeting strategies', 'Creative testing framework and ad copy formulas']
      },
      {
        number: '03',
        title: 'SEARCH ENGINE OPTIMIZATION & GOOGLE ADS',
        duration: 'Module 03',
        description: 'Keyword intent research, on-page optimization, backlink strategies, and Google Search ad auctions.',
        lessons: ['Keyword research with SEMrush and Google Keyword Planner', 'On-page title tags, meta descriptions, and site speed', 'Google Search ad groups and bidding strategies']
      },
      {
        number: '04',
        title: 'ANALYTICS, REPORTING & CLIENT FREELANCING',
        duration: 'Module 04',
        description: 'Setting up GA4 dashboards, tracking conversion events, client pitching, and monthly reporting.',
        lessons: ['GA4 event tracking and conversion setup', 'Measuring CAC, ROAS, and LTV', 'Structuring monthly retainer proposals']
      }
    ],
    faqs: [
      {
        question: 'Do I need a real budget to practice paid advertising?',
        answer: 'We provide simulated environments and walkthroughs of real ad accounts, plus guidance on launching initial micro-budget test campaigns.'
      }
    ]
  },
  {
    id: 'ai-course',
    title: 'AI Course',
    category: 'DIGITAL',
    badge: 'FUTURE TECH',
    shortDescription: 'Leverage generative AI tools, prompt engineering, automated workflows, and AI-assisted content creation to 10x your productivity.',
    fullOverview: 'Explore the modern generative AI landscape. Learn structured prompt engineering techniques for language models, AI image and video generation tools, and automation workflows to streamline digital workflows and freelancing services.',
    level: 'All Levels',
    duration: '[COURSE DURATION]',
    fee: '[COURSE FEE]',
    learningMode: 'Online & Onsite',
    tools: ['ChatGPT / Claude', 'Midjourney', 'Stable Diffusion', 'Make.com', 'Zapier', 'Runway / Kling'],
    whatYouWillLearn: [
      'Advanced prompt engineering frameworks (Role, Context, Constraints, Few-shot)',
      'High-precision AI image generation with Midjourney & control parameters',
      'AI video generation, scriptwriting, and voice synthesis workflows',
      'Automating repetitive business processes with No-Code AI pipelines',
      'AI for copywriting, research, market analysis, and coding assistance',
      'Ethical considerations, copyright guidelines, and commercial usage rights'
    ],
    projects: [
      'AI-Powered Digital Brand Asset Suite (Visuals, Copy, Strategy)',
      'Automated Content Distribution Pipeline via Zapier / Make',
      'AI Commercial Video Mockup from Script to Final Render'
    ],
    careerOpportunities: [
      'AI Prompt Engineer / Consultant',
      'AI Content & Creative Producer',
      'Automation Specialist',
      'Productivity Consultant'
    ],
    requirements: [
      'Curiosity about emerging technologies and basic digital skills',
      'Standard web browser and internet connection'
    ],
    syllabus: [
      {
        number: '01',
        title: 'GENERATIVE AI FOUNDATIONS & PROMPT MASTERY',
        duration: 'Module 01',
        description: 'How LLMs operate, prompt patterns, chain-of-thought prompting, and structured output formatting.',
        lessons: ['LLM architecture overview', 'Few-shot and zero-shot prompting techniques', 'Custom instructions and system prompts']
      },
      {
        number: '02',
        title: 'VISUAL & MULTIMODAL AI CREATION',
        duration: 'Module 02',
        description: 'Controlling Midjourney style references, lighting prompts, aspect ratios, inpainting, and outpainting.',
        lessons: ['Midjourney syntax and parameter commands', 'Photorealistic prompting and commercial product staging', 'AI video generation tools and voice synthesis']
      },
      {
        number: '03',
        title: 'WORKFLOW AUTOMATION & NO-CODE AI INTEGRATIONS',
        duration: 'Module 03',
        description: 'Connecting AI models to Google Sheets, Notion, email, and social channels with automated triggers.',
        lessons: ['Zapier and Make.com fundamentals', 'Building an automated research assistant', 'Data extraction and summarization bots']
      }
    ],
    faqs: [
      {
        question: 'Do I need programming knowledge for this AI course?',
        answer: 'No programming is required. The curriculum focuses on applied prompt engineering, tools, and no-code automation systems.'
      }
    ]
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'DESIGN',
    shortDescription: 'Craft compelling video stories, commercial reels, podcasts, and social media shorts with Premiere Pro and DaVinci Resolve.',
    fullOverview: 'Learn professional non-linear video editing workflows from rough assembly to final color grade and sound mix. Master pacing, narrative flow, sound design, transitions, and export standards for YouTube, TikTok, and commercial clients.',
    level: 'Beginner to Intermediate',
    duration: '[COURSE DURATION]',
    fee: '[COURSE FEE]',
    learningMode: 'Online & Onsite',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Adobe Audition', 'CapCut Pro'],
    whatYouWillLearn: [
      'Non-linear editing fundamentals, project organization, and bin management',
      'Rhythm, pacing, match cuts, J-cuts, L-cuts, and narrative storytelling',
      'Color correction, color grading, LUTs, and color wheel balance',
      'Audio cleanup, dialogue enhancement, sound effects, and background scoring',
      'High-retention editing techniques for YouTube, Reels, and TikTok',
      'Export presets for web, broadcast, and high-definition client delivery'
    ],
    projects: [
      'High-Energy Talking Head YouTube Video with B-Roll & Graphics',
      'Short-Form Viral Reel with Dynamic Subtitles & Sound Design',
      'Cinematic Commercial Brand Teaser with Color Grading'
    ],
    careerOpportunities: [
      'Professional Video Editor',
      'Short-Form Content Editor (TikTok/Reels)',
      'YouTube Channel Lead Editor',
      'Agency Post-Production Specialist'
    ],
    requirements: [
      'Computer capable of smooth 1080p video editing',
      'Earphones or headphones for audio balancing exercises'
    ],
    syllabus: [
      {
        number: '01',
        title: 'INGESTION & TIMELINE MECHANICS',
        duration: 'Module 01',
        description: 'Footage organization, proxies, timeline shortcuts, rough cutting, and assembly workflow.',
        lessons: ['File structure, codecs, and project setup', 'Three-point editing and shortcut mastery', 'Rough assembly and storyline pacing']
      },
      {
        number: '02',
        title: 'AUDIO PRODUCTION & SOUND DESIGN',
        duration: 'Module 02',
        description: 'Dialogue cleanup, noise reduction, vocal EQ, sound effects layering, and master audio leveling.',
        lessons: ['Essential Sound panel and noise reduction', 'Layering ambient tracks and Foley effects', 'Volume automation and audio ducking']
      },
      {
        number: '03',
        title: 'COLOR CORRECTION & GRADING',
        duration: 'Module 03',
        description: 'Reading scopes, exposure balance, white balance correction, cinematic skin tones, and LUT application.',
        lessons: ['Lumetri Color scopes and exposure balance', 'Secondary color correction and skin tone isolation', 'Creative grading and film emulation']
      },
      {
        number: '04',
        title: 'SHORT-FORM VIRAL PACING & EXPORTS',
        duration: 'Module 04',
        description: 'Fast-paced storytelling, animated captions, visual hooks, and platform-specific render settings.',
        lessons: ['Auto-reframe and vertical video mastery', 'Animated captions and visual emphasis', 'Export settings for YouTube and Instagram']
      }
    ],
    faqs: [
      {
        question: 'What computer specifications are needed for Video Editing?',
        answer: 'A minimum of 8GB RAM (16GB recommended) and a multi-core processor will ensure smooth editing and playback.'
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'DEVELOPMENT',
    shortDescription: 'Build modern, responsive, high-performance websites and web applications using HTML5, CSS3, modern JavaScript, and clean frontend standards.',
    fullOverview: 'Step into frontend development with modern standards. Understand document structure, responsive layouts with Flexbox and CSS Grid, interactive UI logic with JavaScript, API integrations, and deploying production websites to the web.',
    level: 'Beginner to Intermediate',
    duration: '[COURSE DURATION]',
    fee: '[COURSE FEE]',
    learningMode: 'Online & Onsite',
    tools: ['VS Code', 'Git & GitHub', 'HTML5 / CSS3', 'JavaScript (ES6+)', 'Tailwind / Modern CSS'],
    whatYouWillLearn: [
      'Semantic HTML5 structure, accessibility (a11y), and SEO fundamentals',
      'Modern CSS: Flexbox, CSS Grid, custom properties, animations, and media queries',
      'JavaScript fundamentals: DOM manipulation, event listeners, array methods, fetch API',
      'Version control with Git, GitHub collaboration, and branching',
      'Responsive mobile-first web architecture across all device screen sizes',
      'Website deployment, performance optimization, and custom domain setup'
    ],
    projects: [
      'Multi-Page Fully Responsive Business Website',
      'Interactive Web Application with Live API Integration',
      'Personal Developer Portfolio Hosted on GitHub Pages / Vercel'
    ],
    careerOpportunities: [
      'Frontend Web Developer',
      'UI/Web Designer & Developer',
      'Freelance Web Specialist',
      'Junior Web Engineer'
    ],
    requirements: [
      'Basic computer literacy',
      'Code editor (VS Code) and modern web browser'
    ],
    syllabus: [
      {
        number: '01',
        title: 'SEMANTIC WEB ARCHITECTURE & MODERN CSS',
        duration: 'Module 01',
        description: 'Semantic HTML markup, CSS Box Model, Flexbox layouts, Grid systems, and mobile responsiveness.',
        lessons: ['HTML5 semantic elements and accessibility', 'CSS layout systems: Flexbox and Grid', 'Responsive breakpoints and modern CSS variables']
      },
      {
        number: '02',
        title: 'JAVASCRIPT CORE & DOM MANIPULATION',
        duration: 'Module 02',
        description: 'Variables, data types, functions, conditional logic, loops, DOM queries, and dynamic user events.',
        lessons: ['JavaScript syntax and control flow', 'Selecting and mutating DOM elements', 'Event listeners and interactive user interfaces']
      },
      {
        number: '03',
        title: 'ASYNCHRONOUS JAVASCRIPT & APIS',
        duration: 'Module 03',
        description: 'JSON format, Fetch API, asynchronous promises, handling responses, and rendering dynamic data feeds.',
        lessons: ['Promises, async/await, and REST APIs', 'Building dynamic cards from API data', 'Form handling and input validation']
      },
      {
        number: '04',
        title: 'GIT VERSION CONTROL & DEPLOYMENT',
        duration: 'Module 04',
        description: 'Git commits, branches, pushing repositories to GitHub, and deploying live production builds on modern hosts.',
        lessons: ['Git commands and GitHub repository workflows', 'Deploying on Vercel and Netlify', 'Lighthouse performance auditing']
      }
    ],
    faqs: [
      {
        question: 'Do I need prior coding background?',
        answer: 'No coding experience is required. We start with the absolute fundamentals of web structure and build up gradually.'
      }
    ]
  },
  {
    id: 'wordpress-development',
    title: 'WordPress',
    category: 'DEVELOPMENT',
    shortDescription: 'Create custom business websites, blogs, and full WooCommerce e-commerce stores without writing complex code.',
    fullOverview: 'Learn how to build, customize, and maintain professional WordPress websites for businesses and clients. Master Elementor page builder, WooCommerce online store configuration, payment gateways, performance optimization, and site security.',
    level: 'Beginner',
    duration: '[COURSE DURATION]',
    fee: '[COURSE FEE]',
    learningMode: 'Online & Onsite',
    tools: ['WordPress Core', 'Elementor Pro', 'WooCommerce', 'cPanel / Hosting', 'SEO Plugins'],
    whatYouWillLearn: [
      'Domain, hosting, DNS configuration, and WordPress installation',
      'Page building with Elementor: custom headers, footers, and responsive layouts',
      'Complete WooCommerce setup: product catalogs, checkout, and payment gateways',
      'Essential plugin configuration: security, caching, backups, and forms',
      'On-page SEO setup with RankMath / Yoast for WordPress sites',
      'Client website migration, maintenance, and staging management'
    ],
    projects: [
      'Complete Corporate Business Website with Contact Forms & Booking',
      'Full WooCommerce E-commerce Store with Payment Gateway Integration',
      'Custom Editorial Blog / Magazine Portal'
    ],
    careerOpportunities: [
      'WordPress Developer / Designer',
      'E-commerce Store Specialist',
      'Freelance Web Creator',
      'Website Maintenance Manager'
    ],
    requirements: [
      'Basic computer literacy and internet access',
      'Willingness to practice on local server or staging domain'
    ],
    syllabus: [
      {
        number: '01',
        title: 'WORDPRESS CORE & HOSTING ESSENTIALS',
        duration: 'Module 01',
        description: 'Hosting environments, database setup, dashboard navigation, permalinks, and theme installation.',
        lessons: ['Domain & hosting fundamentals', 'Dashboard settings and content hierarchy', 'Theme selection and customizer configuration']
      },
      {
        number: '02',
        title: 'ADVANCED ELEMENTOR PAGE BUILDING',
        duration: 'Module 02',
        description: 'Creating custom header/footer templates, dynamic tags, global styles, and pixel-perfect responsive layouts.',
        lessons: ['Elementor containers and responsive editing', 'Theme Builder: Single posts, archives, 404 pages', 'Global colors, fonts, and custom styling']
      },
      {
        number: '03',
        title: 'WOOCOMMERCE E-COMMERCE MASTERY',
        duration: 'Module 03',
        description: 'Configuring physical/digital products, tax, shipping zones, coupons, and local payment gateways.',
        lessons: ['Product categories, attributes, and variations', 'Cart & checkout custom page designs', 'Payment gateway and email order alerts']
      },
      {
        number: '04',
        title: 'SECURITY, BACKUPS & FREELANCING',
        duration: 'Module 04',
        description: 'Hardening WordPress security, automated cloud backups, speed optimization, and delivering websites to clients.',
        lessons: ['Security plugins and login protection', 'Caching, CDN setup, and asset optimization', 'Client onboarding, training, and handover']
      }
    ],
    faqs: [
      {
        question: 'Can I sell freelance website design services after this course?',
        answer: 'Yes! WordPress and WooCommerce are among the most requested web services by local businesses and global clients.'
      }
    ]
  },
  {
    id: 'computer-basics',
    title: 'Computer Basics',
    category: 'FOUNDATIONS',
    shortDescription: 'Build solid foundational computer skills: operating systems, typing speed, file management, internet safety, and MS Office suite.',
    fullOverview: 'The essential foundation for anyone starting their digital journey. Learn practical operating system workflows, touch typing speed, document creation in Word, spreadsheets in Excel, presentations in PowerPoint, and safe internet practices.',
    level: 'Beginner',
    duration: '[COURSE DURATION]',
    fee: '[COURSE FEE]',
    learningMode: 'Online & Onsite',
    tools: ['Windows OS', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Google Workspace'],
    whatYouWillLearn: [
      'Computer hardware fundamentals, operating systems, and file management',
      'Touch typing technique and keyboard shortcut proficiency',
      'Word processing: Formatting letters, resumes, and official documents in MS Word',
      'Spreadsheets: Basic formulas, tables, data entry, and charts in MS Excel',
      'Presentations: Slide design, transitions, and public speaking decks in PowerPoint',
      'Internet browsing, email etiquette, cloud storage, and cybersecurity basics'
    ],
    projects: [
      'Professional Resume & Formal Business Letter in MS Word',
      'Monthly Budget & Inventory Expense Tracker in MS Excel',
      '5-Slide Visual Academy Presentation in PowerPoint'
    ],
    careerOpportunities: [
      'Data Entry Operator',
      'Office Assistant / Coordinator',
      'Computer Operator',
      'Administrative Support Staff'
    ],
    requirements: [
      'No prior experience required — open to all beginners and students'
    ],
    syllabus: [
      {
        number: '01',
        title: 'OPERATING SYSTEMS & TYPING MASTERY',
        duration: 'Module 01',
        description: 'Desktop navigation, folder hierarchies, file extensions, and touch typing exercises.',
        lessons: ['Windows system management and settings', 'File management, compression, and shortcuts', 'Touch typing technique and speed drills']
      },
      {
        number: '02',
        title: 'MICROSOFT WORD & DOCUMENTATION',
        duration: 'Module 02',
        description: 'Document formatting, tables, headers, footers, page layouts, and PDF exporting.',
        lessons: ['Typography, paragraph spacing, and styles', 'Tables, bullet lists, and borders', 'Printing setup and PDF generation']
      },
      {
        number: '03',
        title: 'MICROSOFT EXCEL & DATA ANALYSIS',
        duration: 'Module 03',
        description: 'Rows, columns, basic arithmetic formulas (SUM, AVERAGE, IF), sorting, and charts.',
        lessons: ['Cell referencing and formula basics', 'Sorting, filtering, and data formatting', 'Creating visual bar & pie charts']
      },
      {
        number: '04',
        title: 'POWERPOINT & CLOUD PRODUCTIVITY',
        duration: 'Module 04',
        description: 'Slide design, animations, Google Drive cloud storage, Gmail etiquette, and online safety.',
        lessons: ['Creating clean presentation decks', 'Google Drive and cloud file sharing', 'Safe browsing and email communication']
      }
    ],
    faqs: [
      {
        question: 'Is this course suitable for absolute beginners?',
        answer: 'Yes! It is specifically crafted for beginners, students, and professionals wanting to master core computer proficiency.'
      }
    ]
  },
  {
    id: 'language-courses',
    title: 'Language Courses',
    category: 'FOUNDATIONS',
    shortDescription: 'Enhance your English communication, professional speaking, writing fluency, and interview confidence for global opportunities.',
    fullOverview: 'Develop practical verbal and written English communication skills tailored for freelancers, remote job seekers, students, and professionals dealing with international clients.',
    level: 'All Levels',
    duration: '[COURSE DURATION]',
    fee: '[COURSE FEE]',
    learningMode: 'Online & Onsite',
    tools: ['Interactive Speaking Labs', 'Grammar Guides', 'Pronunciation Audio', 'Roleplay Exercises'],
    whatYouWillLearn: [
      'Spoken English fluency, pronunciation, and active conversational practice',
      'Grammar foundations, sentence structure, and vocabulary building',
      'Professional business communication: emails, client calls, and proposals',
      'Freelance client conversation techniques & objection handling',
      'Job interview preparation, resume vocabulary, and public speaking confidence',
      'Listening comprehension and cross-cultural communication'
    ],
    projects: [
      'Live 2-Minute Spoken Presentation & Self Introduction',
      'Comprehensive Freelance Client Proposal & Cold Email Pitch',
      'Simulated Mock Job Interview with Direct Feedback'
    ],
    careerOpportunities: [
      'International Freelance Communicator',
      'Customer Support Executive',
      'Remote Team Specialist',
      'Corporate Associate'
    ],
    requirements: [
      'Basic understanding of the alphabet and simple vocabulary',
      'Willingness to participate in daily speaking practice'
    ],
    syllabus: [
      {
        number: '01',
        title: 'CONVERSATIONAL FLUENCY & PRONUNCIATION',
        duration: 'Module 01',
        description: 'Breaking hesitation, daily conversation drills, phonetics, and clear articulation.',
        lessons: ['Daily routine conversations and icebreakers', 'Vowel sounds and common pronunciation pitfalls', 'Active listening and response structuring']
      },
      {
        number: '02',
        title: 'GRAMMAR IN ACTION & VOCABULARY EXPANSION',
        duration: 'Module 02',
        description: 'Tenses made practical, preposition usage, sentence connectors, and contextual vocabulary.',
        lessons: ['Mastering practical tenses without memorization', 'Sentence structure and natural idioms', 'Expanding professional vocabulary']
      },
      {
        number: '03',
        title: 'PROFESSIONAL BUSINESS & CLIENT WRITING',
        duration: 'Module 03',
        description: 'Drafting clear emails, Upwork proposals, WhatsApp client messages, and formal reports.',
        lessons: ['Email etiquette and structured messaging', 'Writing persuasive freelance proposals', 'Polite negotiations and follow-ups']
      },
      {
        number: '04',
        title: 'INTERVIEW READINESS & PUBLIC SPEAKING',
        duration: 'Module 04',
        description: 'Interview answers (STAR method), body language, confidence building, and presentation skills.',
        lessons: ['Structuring interview responses with clarity', 'Handling tough questions with confidence', 'Final capstone speaking presentation']
      }
    ],
    faqs: [
      {
        question: 'Will there be live speaking practice in classes?',
        answer: 'Yes! Classes emphasize interactive pair discussions, roleplay scenarios, and live feedback.'
      }
    ]
  }
];
