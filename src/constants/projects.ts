import type { Project } from "../types/Project";
const imagesDir = '/images/';

export const PROJECTS: Project[] = [
  {
    name: 'fundflow',
    image: imagesDir+'fundflow.webp',
    description: `A crowdfunding platform with social media features like follows, likes/dislikes, and reviews from collaborators and funders. 
      This was a final grade project done in pairs, with a three-month timeframe to brainstorm, design, and develop the app. 
      We created use case diagrams, designed the UI/UX, and structured the database. 
      Finally, we developed the app with our chosen tech stack and presented the results to a committee.
      `,
    pageLink: 'https://fundflow.arcedo.dev/home',
    repositoryLink: 'https://github.com/arcedo/fundflow-Backend'
  },
  {
    name: 'Cargo Loading',
    image: imagesDir+'cargo_loading.webp',
    description: '',
    repositoryLink: 'https://github.com/CodeBiting/onion-cargo-loading-service'
  },
  {
    name: 'LearnSphere',
    image: imagesDir+'learn_sphere.webp',
    description: '',
    repositoryLink: 'https://github.com/arcedo/LearnSphere'
  },
  {
    name: 'Form Design',
    image: imagesDir+'form_design.webp',
    description: '',
    repositoryLink: 'https://github.com/arcedo/'
  },
  {
    name: 'MC-Kinator',
    image: imagesDir+'',
    description: '',
    repositoryLink: 'https://github.com/arcedo/Akinator'
  }
]