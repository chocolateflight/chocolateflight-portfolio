import aeropress from '../../public/images/aeropress-timer.png';
import tictac from '../../public/images/tic-tac-toe.png';
import todo from '../../public/images/to-do.png';
import userSearch from '../../public/images/user-search-app.png';
import portfolio from '../../public/images/portfolio.png';
import fullstack from '../../public/images/fullstack.png';

const projects = [
  {
    id: 0,
    title: 'Portfolio Website',
    tools: "Next.js 13 - TailwindCSS - Formik",
    description: 'This portfolio website was built using Next.js 13. It is fully responsive and uses TailwindCSS for styling. The contact form uses Formik validation.',
    image: portfolio,
    github: 'https://github.com/chocolateflight/chocolateflight-portfolio',
  },
  {
    id: 1,
    title: 'Aeropress Timer',
    tools: "ReactJS - HTML - CSS",
    description: 'A simple AeroPress timer built with React with an animated timer.',
    image: aeropress,
    github: 'https://github.com/chocolateflight/aeropress-timer',
  },
  {
    id: 2,
    title: 'Tic Tac Toe',
    tools: "ReactJS - TypeScript - TailwindCSS",
    description:
      'A Tic Tac Toe game based on a Frontend Mentor challenge. Play Tic Tac Toe PVP against a friend.',
    image: tictac,
    github: 'https://github.com/chocolateflight/react-tic-tac-toe',
  },
  {
    id: 3,
    title: 'Redux ToDo',
    tools: "ReactJS - Redux - TailwindCSS",
    description:
      'A simple ToDo app built with React and Redux. Add tasks and mark them as complete. Tasks are stored in Local Storage',
    image: todo,
    github: 'https://github.com/chocolateflight/redux-todo-list',
  },
  {
    id: 4,
    title: 'GitHub User Search',
    tools: "Next.js 12 - TailwindCSS",
    description:
      'An app to access GitHub user data from the GitHub API. Search for a user and view their profile. This project was based on a Frontend Mentor challenge.',
    image: userSearch,
    github: 'https://github.com/chocolateflight/GitHub-User-Search-App',
  },
  {
    id: 5,
    title: 'Fullstack Open - Part 1 to 7',
    tools: "ReactJS - NodeJS - Jest - MongoDB - TypeScript - Cypress",
    description:
      'As part of the FullStack Open course, I built various Frontend and Backend projects. All of them are contained in this repository.',
    image: fullstack,
    github: 'https://github.com/chocolateflight/GitHub-User-Search-App',
  },
];

export default projects;
