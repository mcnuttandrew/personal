import {PROJECTS as projectsImport} from './data/projects';
import {NEWS as newsImport} from './data/news';
import {PUBLICATIONS as pubsImport} from './data/publications';
import zineImport from './data/zines';
export const NEWS = newsImport;
export const PROJECTS = projectsImport;
export const PUBLICATIONS = pubsImport;
export const ZINES = zineImport;
/* eslint-disable max-len */

export const COLLABORATOR_LINKS = {
  'Aaron Elmore': 'http://people.cs.uchicago.edu/~aelmore/',
  'Agatha Seo-Hyun Kim': 'https://history.uchicago.edu/directory/agatha-kim',
  'Alex M. Clark': 'https://scholar.google.com/citations?user=4Gv4PboAAAAJ&hl=en',
  'Allison Morgan': 'https://allisonmorgan.github.io/',
  'Anamaria Crisan': 'https://amcrisan.github.io/',
  'Blase Ur': 'https://www.blaseur.com/',
  'Chenglong Wang': 'https://chenglongwang.org/',
  'Gordon Kindlmann': 'http://people.cs.uchicago.edu/~glk/',
  'Joel Franklin': 'http://people.reed.edu/~jfrankli/',
  'Krishna Dole': 'https://scholar.google.com/citations?user=J4TpF1YAAAAJ&hl=en',
  'Kyle Chard': 'https://kylechard.com/',
  'Michael Correll': 'https://correll.io/',
  'Nelia Mann': 'https://www.union.edu/physics-and-astronomy/faculty-staff/nelia-mann',
  'Ravi Chugh': 'http://people.cs.uchicago.edu/~rchugh/',
  'Rob De Line': 'https://www.microsoft.com/en-us/research/people/rdeline/',
  'Sean Ekins': 'https://scholar.google.com/citations?user=6NNfXAMAAAAJ&hl=en',
  'Steven M. Drucker': 'https://stevenmdrucker.github.io/#/',
  'Varchas Gopalaswamy': 'https://scholar.google.com/citations?user=PxH1Z7kAAAAJ&hl=en',
  'Will Brackenbury': 'https://wbrackenbury.github.io/'
};

const selectedPubs = new Set(['no-grammar', 'tacos', 'ivy', 'mirage', 'sauce', 'ai-4-notebooks']);
export const SELECTED_PUBLICATIONS = PUBLICATIONS.filter((x) => selectedPubs.has(x.urlTitle));

export const PRESENTATIONS: {title: string; details: string[]; links?: {name: string; link: string}[]}[] = [
  {
    title: 'Understanding and Enhancing JSON-based DSL Interfaces for Visualization',
    details: [
      'Shandong University, November 15, 2022, Qingdao, China. (Virtual)',
      'IEEE VIS Doctoral Colloquium, October 15, 2022, Oklahoma City, Oklahoma. '
    ],
    links: []
  },
  {
    title: 'No Grammar to Rule Them All: A Survey of JSON-Style DSLs for Visualization',
    details: [
      'IEEEVIS, October 19, 2022, Oklahoma City, Oklahoma.',
      ' Microsoft Research, July 14, 2022, Redmond, Washington. (Virtual)'
    ],
    links: []
  },
  {
    title: 'On The Potential of Zines as a Medium for Visualization',
    details: ['IEEEVIS, October 27, 2021, New Orleans, Louisiana. (Virtual)'],
    links: []
  },

  {
    title: 'Visualization for Villainy',
    details: ['alt.vis, October 24, 2021, New Orleans, Louisiana. (Virtual)'],
    links: []
  },

  {
    title: 'How do we know what a visualization is good for? Algebraic Approaches',
    details: [
      '[RAMPVIS](https://sites.google.com/view/rampvis/events?authuser=0), August 5, 2021, Oxford, England. (Virtual)'
    ],
    links: [
      {
        name: 'slides',
        link: '(https://drive.google.com/file/d/1o9-7cBnQXfO8VTMS9V7MZ_5odwYVUkYw/view?usp=sharing'
      }
    ]
  },

  {
    title: 'What are Table Cartograms Good for Anyway? An Algebraic Analysis',
    details: [
      'EuroVis, June 15, 2021, Zurich, Switzerland. (Virtual)',
      'City University London, May 18, 2021, London, England. (Virtual)'
    ],
    links: []
  },

  {
    title: 'Integrated Visualization Editing via Parameterized Declarative Templates',
    details: [
      'SIGCHI, May 12-13, 2021, Yokohama, Japan (Virtual)',
      'CHIcago Symposium, May 5, 2021, Chicago, Illinois (Virtual)'
    ],
    links: []
  },

  {
    title:
      'Supporting Expert Close Analysis of Historical Scientific Writings: A Case Study for Near-by Reading',
    details: ['VIS4DH, October 25, 2020, Salt Lake City, Utah (Virtual)'],
    links: []
  },

  {
    title: 'Surfacing Visualization Mirages',
    details: ['CHIcago Symposium, May 26, 2020, Chicago, IL (Virtual)'],
    links: []
  },

  {
    title: 'Divining Insights: Visual Analytics Through Cartomancy',
    details: ['CHIcago Symposium, May 26, 2020, Chicago, IL (Virtual)'],
    links: []
  },

  {
    title: 'Linting for Visualization: Towards a Practical Automated Visualization Guidance System',
    details: ['VIS Guides, October 22, 2018, Berlin, Germany'],
    links: []
  },

  {
    title:
      'Design and Analysis of Table Cartograms: Simultaneous-Multipurpose Tabular Area-Encoding Displays',
    details: ['University of Chicago, June 12, 2019, Chicago, Illinois'],
    links: []
  },

  // {
  //   title:
  //     'Linting for Visualization: Towards a Practical Automated Visualization Guidance System',
  //   link: 'assets/vis-lint-talk.pdf',
  //   journal: 'VisGuides 2018. October 22, 2018'
  // },
  {
    // imgLink: 'converted-images/design-patterns-pic.jpg',
    title: 'Design Patterns For Data Visualization in React',
    // link: 'http://tinyurl.com/reactvisdesignpatterns',
    details: ['React Chicago. August 29, 2018'],
    // subtitle: 'An overview of four useful patterns for developing visualizations in react',
    links: [{name: 'slides', link: 'http://tinyurl.com/reactvisdesignpatterns'}]
  }
  // {
  //   link: 'assets/nlm-talk.pdf',
  //   title: 'Nonequivalent Lagrangian Mechanics',
  //   journal: 'Reed Physics Seminar. April 8, 2014'
  // },
  // {
  // link: 'assets/QGravPresentation.pdf',
  // links: [],
  // title: 'The Schrodinger-Newton System with Self-field Coupling',
  // authors: 'Varchas Gopalaswamy, Andrew McNutt, Allie Morgan, Carl Proepper.',
  // journal: 'Reed Physics Seminar. September 18, 2013'
  // }
];

export const BLOG_POSTS = [
  {
    imgLink: 'converted-images/tarot-image.jpg',
    title: 'A Brief Saga Concerning the Making of a Tarot Deck About the American Highway System',
    subtitle: 'A little essay about making',
    date: 'Personal Blog. December 10, 2018',
    link: 'https://medium.com/@mcnutt/a-brief-saga-concerning-the-making-of-a-tarot-deck-about-the-american-highway-system-2eaebf3320c8',
    links: [
      {
        name: 'blog post',
        link: 'https://medium.com/@mcnutt/a-brief-saga-concerning-the-making-of-a-tarot-deck-about-the-american-highway-system-2eaebf3320c8'
      },
      {name: 'github', link: 'https://github.com/mcnuttandrew/tarot-deck'}
    ]
  },
  {
    imgLink: 'converted-images/advanced-react-vis-pic.jpg',
    title: 'Advanced Visualization with react-vis',
    subtitle: 'Using Voronois, single pass rendering, and canvas components for amazing user experiences',
    date: 'Towards Data Science. May 21, 2018',
    link: 'https://towardsdatascience.com/advanced-visualization-with-react-vis-efc5c6667b4',
    links: [
      {
        name: 'blog post',
        link: 'https://towardsdatascience.com/advanced-visualization-with-react-vis-efc5c6667b4'
      },
      // {name: 'talk', link: 'http://tinyurl.com/reactvisdesignpatterns'},
      {name: 'code', link: 'https://github.com/mcnuttandrew/advanced-react-vis-tutorial'}
    ]
  }
];

export const AWARDS: {society: string; date: string; awardName: string; detail?: string}[] = [
  {
    society: 'ACM SIGCHI',
    date: '2023',
    awardName: 'Special Recognition for Outstanding Review x3'
  },
  {
    society: 'Siebel',
    date: '2023',
    awardName: 'Siebel Scholars Class of 2023'
  },
  {
    society: 'ACM SIGCHI',
    date: '2022',
    awardName: 'Special Recognition for Outstanding Review x2'
  },
  {
    society: 'ACM UIST',
    date: '2021',
    awardName: 'Special Recognition for Outstanding Review'
  },
  {
    society: 'UChicago Grad',
    date: 'October 2021',
    awardName: 'Graduate Council Research Fund'
  },
  {
    society: 'Eurographics Working Group on Data Visualization',
    date: '2021',
    awardName: 'Honorable Mention for Best Paper',
    detail: '(single juried selection) for What are Table Cartograms Good for Anyway? An Algebraic Analysis'
  },
  {
    society: 'ACM SIGCHI',
    date: '2021',
    awardName: 'Special Recognition for Outstanding Review'
  },
  {
    society: 'IEEE VIS',
    date: 'October 2020',
    awardName: 'InfoVis Honorable Mention Poster Research',
    detail: 'for A Minimally Constrained Optimization Algorithm for Table Cartograms'
  },
  {
    society: 'ACM SIGCHI',
    date: 'March 2020',
    awardName: 'Best Paper Honorable Mention',
    detail: '(Top 5\\%) for Surfacing Visualization Mirages'
  },
  {
    society: 'MindBytes Research Symposium',
    date: 'October 2019',
    awardName: 'Best Poster in Visualization'
  },
  {
    society: 'UChicago Grad',
    date: 'October 2019',
    awardName: 'Graduate Council Travel Fund'
  },
  {
    society: 'Information is Beautiful Awards',
    date: 'September 2019',
    awardName: 'Long List for Visual Analytics and Unusual Categories',
    detail: "for 'FeX': Forum Explorer and Cycles Rain Seasons in Size"
  },
  {
    society: 'University of Chicago, Department of Computer Science',
    date: 'June 2019',
    awardName: 'Teaching Assistant Prize'
  },
  {
    society: 'UChicago Physical Sciences Division ',
    date: 'May 2018, May 2019',
    awardName: 'Divisional Teaching Award Nominee'
  },
  {
    society: 'UChicago Art and Science Expo',
    date: 'May 2019',
    awardName: '2nd Place for Best in Show'
  },
  {
    society: 'Reed College',
    date: 'May 2014',
    awardName: 'Commendation of Academic Excellence',
    detail: 'Merit given to students exhibiting exemplary scholarship'
  }
];

export const TEACHING = [
  {
    title: 'CAPP 30239 - Data Visualization For Public Policy',
    date: 'Winter 2021',
    role: 'Instructor',
    location: 'UChicago',
    link: 'https://capp-30239-winter-2021.netlify.com/'
  },
  {
    title: 'CMSC 11111 - Creative Coding',
    date: 'Winter 2022',
    role: 'Teaching Assistant',
    location: 'UChicago',
    link: 'https://www.classes.cs.uchicago.edu/archive/2022/winter/11111-1/'
  },
  {
    title: 'Art with Science: Creative Coding',
    date: 'Summer 2021',
    role: 'Teaching Assistant',
    location: 'Collegiate Scholars Program (Highschool students)',
    link: 'https://www.classes.cs.uchicago.edu/archive/2021/summer/creative-coding/csp/'
  },
  {
    title: 'Introduction to Creative Coding',
    date: 'Summer 2021',
    role: 'Teaching Assistant',
    location: 'UChicago (Highschool students)',
    link: 'https://www.classes.cs.uchicago.edu/archive/2021/summer/creative-coding/immersion/'
  },
  {
    title: 'CMSC 11111 - Creative Coding',
    date: 'Spring 2021',
    role: 'Teaching Assistant',
    location: 'UChicago',
    link: 'https://www.classes.cs.uchicago.edu/archive/2021/spring/11111-1/'
  },
  {
    title: 'CMSC 23900 - Data Visualization',
    date: 'Spring 2020',
    role: 'Instructor',
    location: 'UChicago'
  },
  {
    title: 'CAPP 30239 - Data Visualization For Public Policy',
    date: 'Winter 2020',
    role: 'Instructor',
    location: 'UChicago',
    link: 'https://capp-30239-winter-2020.netlify.com/'
  },
  // {
  //   title: 'Visualization Research Reading Group',
  //   date: 'February 2019-Present',
  //   role: 'Other',
  //   location: 'UChicago',
  //   fancyTitle: 'Director',
  //   link: 'https://uchicago-vis-pl-lab.github.io/vis-reading-group/'
  // },

  {
    title: 'CMSC 23900 - Data Visualization',
    date: 'Spring 2019',
    role: 'Teaching Assistant',
    location: 'UChicago',
    link: 'http://people.cs.uchicago.edu/~glk/class/datavis19/'
  },
  {
    title: 'CAPP 30239 - Data Visualization For Public Policy',
    date: 'Winter 2019',
    role: 'Teaching Assistant',
    location: 'UChicago',
    link: 'https://twitter.com/AlexCEngler/status/1101245224733605891?s=20'
  },
  {
    title: 'CAPP 30121 - Computer Science with Applications 1',
    date: 'Fall 2018',
    role: 'Teaching Assistant',
    location: 'UChicago',
    link: 'https://classes.cs.uchicago.edu/archive/2018/fall/30121-1/'
  },
  {
    title: 'CMSC 23900 - Data Visualization',
    date: 'Spring 2018',
    role: 'Teaching Assistant',
    location: 'UChicago',
    link: 'http://people.cs.uchicago.edu/~glk/class/datavis18/'
  },
  {
    title: 'CMSC 15100 - Introduction to Computer Science 1',
    date: 'Winter 2018',
    role: 'Teaching Assistant',
    location: 'UChicago',
    link: 'https://www.classes.cs.uchicago.edu/archive/2018/winter/15100-1/syllabus.html'
  },
  {
    title: 'CMSC 12100 - Computer Science with Applications 1',
    date: 'Fall 2017',
    role: 'Teaching Assistant',
    location: 'UChicago',
    link: 'https://www.classes.cs.uchicago.edu/archive/2017/fall/12100-1/'
  },
  {
    title: 'Uberversity Speaker',
    date: '2016-2017',
    role: 'Instructor',
    fancyTitle: 'Lecturer',
    location: 'Uber'
  },
  {
    title: 'Visualization Eng-ucation',
    date: '2015-2017',
    role: 'Instructor',
    fancyTitle: 'Lecturer',
    location: 'Uber'
  },
  {
    title: 'Physics 101 - General Physics I',
    date: '2012',
    role: 'Teaching Assistant',
    location: 'Reed College'
  },
  {
    title: 'F.L. Griffin Mathfest',
    date: '2014',
    role: 'Teaching Assistant',
    location: 'Reed College'
  }
];

export const SERVICE: {organization: string; date: string; role: string; link?: string}[] = [
  {
    organization: 'alt.vis',
    date: '2022',
    role: 'Organizing Committee',
    link: 'https://altvis.github.io/'
  },
  {
    organization: 'VisGuides',
    date: '2022',
    role: 'Program Committee',
    link: 'https://visguides-workshop.github.io/'
  },
  {
    organization: 'EuroVis',
    date: '2021',
    role: 'Student Volunteer'
  },
  {
    organization: 'Chicago Public Schools CSEd Week',
    date: '2020',
    role: 'Speaker'
  },
  {
    organization: 'Open Access VIS  / EuroVIS',
    date: '2019',
    role: 'Contributor / Organizer',
    link: 'http://oavis.org/'
  },
  {
    organization: 'South Side Civic',
    date: '2019',
    role: 'Scopathon Facilitator'
  },
  {
    organization: 'UChicago Visualization Research Reading Group',
    date: 'February 2019-Match 2021',
    role: 'Organizer',
    link: 'https://uchicago-vis-pl-lab.github.io/vis-reading-group/'
  },
  {
    organization: 'UChicago CS Graduate Student Ministry',
    date: '2018',
    role: 'Facilitator of CS Grad Weekly Coffee Break'
  },

  {
    organization: 'F.L. Griffin Mathfest',
    date: 'Spring 2014',
    role: 'Teaching Assistant'
  }
];

export const REVIEWING: string[] = [
  "VIS - Full Papers ('20, '21, '22), Short Papers ('20, '21), alt.vis ('21, '22), VisGuides ('22)",
  "EuroVis - Full Papers ('23)",
  "CHI - Full Papers (⭐ '21, ⭐⭐'22, ⭐⭐⭐'23), alt.chi ('20), Late-Breaking Work ('22)",
  'UIST - Full Papers (⭐ `21)',
  'TVCG - Journal (`22)'
];
