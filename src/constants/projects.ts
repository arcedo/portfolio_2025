import type { Project } from "../types/Project";
const imagesDir = "/images/";

//<span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold "></span>,
export const PROJECTS: Project[] = [
  {
    name: "Apex",
    image: imagesDir + "apex.webp",
    description: `Landing page for Apex team, a company related to fundraising. It contains <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">information</span> about the team and an <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">application form</span>. The page is <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">responsive</span> and <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">SEO optimized</span>.`,
    repositoryLink: "https://we-apex.com",
    tecnologies: ["TypeScript", "Tailwind CSS", "Astro.js", "Svelte"],
  },
  {
    name: "fundflow",
    image: imagesDir + "fundflow.webp",
    description: `A <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">crowdfunding platform</span> with <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold">social media features</span> like follows, likes/dislikes, and reviews from collaborators and funders. This was a <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">final grade project</span> done in pairs, with a <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">three-month timeframe</span> to brainstorm, design, and develop the app. We created <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">use case diagrams</span>, <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">designed</span> the <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">UI</span>/<span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">UX</span>, and <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">structured the database</span>. Finally, we developed the app with our chosen tech stack and <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">presented</span> the results <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">to a committee</span>.`,
    pageLink: "https://fundflow.arcedo.dev/home",
    repositoryLink: "https://github.com/arcedo/fundflow-Backend",
    tecnologies: [
      "JavaScript",
      "bun.JS",
      "express",
      "JWT",
      "Resend",
      "MySQL",
      "MongoDB",
      "Docker",
      "Nginx",
      "React.js",
      "Tailwind CSS",
      "Google OAuth",
    ],
  },
  {
    name: "Cargo Loading",
    image: imagesDir + "cargo_loading.webp",
    description: `<span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">Web service</span> that determines whether multiple <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">elements</span> can <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">fit within a container</span>, and if so, <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">identifies the optimal arrangement and order</span>. This <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">open-source project</span> is from <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">CodeBiting</span>, where I completed an <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">internship</span> and <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">contributed</span> to the <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">development</span> of the <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">REST API</span> and a <span class="group-hover:text-accent/90 transition-colors duration-500 font-semibold ">demo frontend</span> page.`,
    repositoryLink: "https://github.com/CodeBiting/onion-cargo-loading-service",
    tecnologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "Mocha",
      "Swagger",
      "Pug.js",
    ],
  },
];
