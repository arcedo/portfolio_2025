import type { Project } from "../types/Project";
const imagesDir = '/images/';

export const PROJECTS: Project[] = [
  {
    name: 'fundflow',
    image: imagesDir+'fundflow.webp',
    description: "A crowdfunding platform with social media features like follows, likes/dislikes, and reviews from collaborators and funders. This was a final grade project done in pairs, with a three-month timeframe to brainstorm, design, and develop the app. We created use case diagrams, designed the UI/UX, and structured the database. Finally, we developed the app with our chosen tech stack and presented the results to a committee.",
    pageLink: 'https://fundflow.arcedo.dev/home',
    repositoryLink: 'https://github.com/arcedo/fundflow-Backend',
    tecnologies: [
      'JavaScript',
      'bun.JS',
      'express',
      'JWT',
      'Resend',
      'MySQL',
      'MongoDB',
      'Docker',
      'Nginx',
      'React.js',
      'Tailwind CSS',
      'Google OAuth',
    ]
  },
  {
    name: 'Cargo Loading',
    image: imagesDir+'cargo_loading.webp',
    description: "Web service that determines whether multiple elements can fit within a container, and if so, identifies the optimal arrangement and order. This open-source project is from CodeBiting, where I completed an internship and contributed to the development of the REST API and a demo frontend page.",
    repositoryLink: 'https://github.com/CodeBiting/onion-cargo-loading-service',
    tecnologies: [
      'JavaScript',
      'Node.js',
      'Express',
      'Mocha',
      'Swagger',
      'Pug.js'
    ]
  },
  {
    name: 'LearnSphere',
    image: imagesDir+'learn_sphere.webp',
    description: 'An educational platform for students and teachers, designed to optimize academic management and track student progress. This was a class assignment where we developed the app in pairs, following the entire process from start to finish. Our responsibilities included designing the frontend, creating UML diagrams, structuring the database, and selecting a technology stack we felt most comfortable using.',
    repositoryLink: 'https://github.com/arcedo/LearnSphere',
    tecnologies: [
      'JavaScript',
      'Node.js',
      'Express',
      'React.js',
      'Tailwind CSS'
    ]
  },
  {
    name: 'MC-Kinator',
    image: imagesDir+'mc_kinator.webp',
    description: "A CLI McDonald's-themed app inspired by Akinator, featuring products from Spain as of November 2023. This was a class assignment where the teachers randomly assigned both the programming language and the theme. For the algorithm, I moved beyond traditional if-else statements by implementing a filtering and selection algorithm that narrows down answers based on user input. This approach enhanced the app's responsiveness and made the decision-making process more intuitive and engaging for users.",
    repositoryLink: 'https://github.com/arcedo/Akinator',
    tecnologies: [
      'Java'
    ]
  }
]