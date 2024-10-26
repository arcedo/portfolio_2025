import type { Experience } from "../types/Experience";

export const EXPERIENCES: Experience[] = [
  {
    company: 'CodeBiting',
    title: 'Intern · Full Stack Developer',
    description: [
      'Implemented a RESTful API using Node.js and Express to manage logistics containers, enhancing functionality through comprehensive unit testing.',
      'Deployed and tested various server scenarios using Docker, Docker Swarm, and Redis, generating a performance comparison report using Artillery (a load testing tool) to recommend the optimal solution using an Ubuntu Server and PM2.',
      'Researched and learned the front-end framework Vue.js to develop a user interface, enabling clients to create, view, and manage containers through the RESTful API.'
    ],
    linkPage: 'https://github.com/CodeBiting',
    startMonth: 'Jul',
    startYear: 2023,
    endMonth: 'Dec',
    endYear: 2023,
  },
  {
    company: 'Web Applications Development',
    title: 'Student · Certificate of Higher Education (HNC)',
    description: [
      'Some text here...'
    ],
    linkPage: '',
    startMonth: 'Sep',
    startYear: 2022,
    endMonth: 'Sep',
    endYear: 2024,
  },
  {
    company: 'Microcomputer Systems & Networks',
    title: 'Student · Vocational Education and Training (VET)',
    description: [
      'Some text here...'
    ],
    linkPage: '',
    startMonth: 'Sep',
    startYear: 2020,
    endMonth: 'Sep',
    endYear: 2022,
  },
]