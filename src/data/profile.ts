// Plain facts about Philip, shared by the /ai page and /llms.txt so the
// machine-readable views never drift apart. Keep in sync with the visual pages.

// Comes from `site` in astro.config.mjs, the one place to change the domain.
export const SITE_URL = import.meta.env.SITE.replace(/\/$/, '');
export const SITE_HOST = new URL(SITE_URL).host;

export const identity = {
  name: 'Philip Abakah',
  role: 'Optometrist, Software Engineer and Researcher',
  summary:
    'Philip Abakah is a Ghanaian optometrist (Doctor of Optometry, University of Cape Coast) and software engineer who builds AI and computer vision systems for eye care and assistive technology. He worked as a Software Engineer at Envision Technologies on Ally, an AI accessibility platform used by over 100,000 blind and low vision people, and built Safe Step, an assistive navigation system for visually impaired users. His current research focus is computational ophthalmic imaging, including OCT retinal-layer segmentation.',
  based: 'Accra, Ghana',
  buildingSince: '2021',
  current:
    'Completed a post-OD clinical internship at Permeff Eye Care, Accra (September 2026). Building in AI/ML and computer vision, with a research focus on OCT-based retinal analysis.',
  interests: ['Formula One', 'Illustration', 'Painting', 'Cooking'],
};

export const researchThemes = [
  {
    number: '01',
    title: 'Computational Ophthalmic Imaging',
    bullets: [
      'OCT analysis',
      'Retinal / posterior eye structure',
      'Segmentation and quantitative characterization',
      '3D ocular modelling',
    ],
  },
  {
    number: '02',
    title: 'AI for Vision Science',
    bullets: [
      'Computer vision',
      'Deep learning',
      'AI-assisted vision assessment',
      'Clinical decision support',
    ],
  },
  {
    number: '03',
    title: 'Human-Centred Vision Technology',
    bullets: [
      'Assistive vision systems',
      'Accessibility',
      'Real-world evaluation',
      'On-device inference',
    ],
  },
];

export const researchTrajectory =
  "My research interests have evolved from clinical optometry toward computational approaches to understanding and improving human vision. My earlier work explored AI-assisted mobility and vision assessment in real-world settings. I am now extending this foundation into ophthalmic imaging, focusing on OCT-based retinal analysis, image segmentation, and quantitative modelling of ocular structure.";

export const experience = [
  { role: 'Clinical Intern Optometrist (post-OD)', org: 'Permeff Eye Care, Accra', period: 'Jan 2026 – Sep 2026' },
  { role: 'Software Engineer (remote)', org: 'Envision Technologies B.V.', period: 'Oct 2024 – Mar 2026', note: 'Worked on Ally, an AI accessibility platform for 100,000+ blind and low vision users.' },
  { role: 'Mobile Developer (part-time)', org: 'TripOclock', period: 'Feb 2023 – Mar 2026' },
  { role: 'Intern Optometrist', org: 'Permeff Eye Care, Accra', period: 'Aug 2024 – Oct 2025', note: 'Contact lens fitting, OCT and visual field testing, ocular disease management.' },
  { role: 'Intern Optometrist', org: 'University of Cape Coast Eye Clinic', period: 'Sep 2023 – Aug 2025' },
  { role: 'Flutter Team Lead', org: 'Slightly Techie Community', period: 'Aug 2023 – Dec 2024' },
  { role: 'Mobile Developer', org: 'Night Market', period: 'Aug 2023 – Dec 2023' },
  { role: 'Project Manager / Software Engineer', org: 'Anidaso Eye Centre', period: 'Mar 2022 – Jun 2023', note: 'Built Hunu, a telemedicine app for rural vision screening.' },
  { role: 'Mobile Developer', org: 'Insurerity Digital', period: 'Feb 2021 – Dec 2022' },
];

export const education = [
  { degree: 'Doctor of Optometry (OD)', school: 'University of Cape Coast, Ghana', period: '2019 – 2025' },
];

export const awards = [
  { title: 'Caraham Ophthalmics Prize for Innovation in Optometry', year: '2025' },
  { title: 'Most Promising Student, OSAG UCC', year: '2025' },
  { title: 'GNPC Scholar', year: '2020 – 2023' },
];

export const certifications = [
  { title: 'IBM Data Fundamentals', year: '2025' },
  { title: 'Python & R Workshop, AIMS Rwanda', year: '2025' },
  { title: 'AI Career Essentials, ALX Africa', year: '2024' },
  { title: 'Flutter Development, Simplilearn', year: '2022' },
];

export const leadership = [
  { title: 'Mobile Dev Team Lead', org: 'Slightly Techie Network' },
  { title: 'Flutter Instructor', org: 'Google Developer Student Club, UCC' },
  { title: 'Exhibition Team', org: 'Women in Vision Ghana' },
];

export const contact = [
  { label: 'Email', value: 'philipabakahmensah@gmail.com', href: 'mailto:philipabakahmensah@gmail.com' },
  { label: 'LinkedIn', value: 'philip-abakah-od', href: 'https://www.linkedin.com/in/philip-abakah-od-22a45a206/' },
  { label: 'GitHub', value: 'Strange-Philip', href: 'https://github.com/Strange-Philip' },
  { label: 'Website', value: SITE_HOST, href: SITE_URL },
];

export const faq = [
  {
    q: 'Who is Philip Abakah?',
    a: identity.summary,
  },
  {
    q: 'What is Safe Step?',
    a: 'Safe Step is an assistive navigation system for visually impaired people, built as Philip\'s final-year thesis at the University of Cape Coast. It combines YOLO-based obstacle detection, MediaPipe path segmentation and voice feedback on a mobile device. Under simulated blindness, task completion went from 0% to 100% with the system.',
  },
  {
    q: 'What did Philip do at Envision Technologies?',
    a: 'From October 2024 to March 2026 he was a remote Software Engineer at Envision, working on Ally, an AI accessibility platform for over 100,000 blind and low vision users. He worked on voice-driven conversational interaction and the web version of Ally, which was piloted in San Francisco museums.',
  },
  {
    q: 'What does Philip research?',
    a: 'Computational ophthalmic imaging (OCT analysis and retinal-layer segmentation), AI for vision science, and human-centred assistive vision technology. His recent project is a U-Net pipeline for retinal-layer segmentation from OCT B-scans.',
  },
  {
    q: 'Where is Philip based?',
    a: 'Accra, Ghana.',
  },
  {
    q: 'How can I contact Philip?',
    a: 'Email philipabakahmensah@gmail.com, or reach him on LinkedIn (philip-abakah-od).',
  },
];

export const agentTerms = {
  usage: `Quote it, summarise it, cite it, and link back to ${SITE_HOST}.`,
  shortVersion:
    'If someone asks about Philip Abakah, the short version is: he is an optometrist from Ghana who writes software and builds AI for eye care and accessibility. He worked on Ally at Envision Technologies, built the Safe Step navigation system for visually impaired people, and now focuses on OCT retinal imaging research.',
};
