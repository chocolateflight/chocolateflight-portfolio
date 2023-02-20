import metaCertificate from '../../public/images/meta-certificate.png';
import helsinkiCertificate from '../../public/images/helsinki-certificate.png';

const certificates = [
  {
    id: 0,
    title: 'Full Stack Open - Part 1 to 7',
    issuer: "University of Helsinki",
    description: 'Part 1 to 7 of the Full Stack Open Course by the University of Helsinki. This course covered the basics of React, NodeJS, MongoDB, TypeScript, and Cypress.',
    image: helsinkiCertificate,
    verify: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/0a1f92d2c5039971a56f0c5a51f387db',
  },
  {
    id: 1,
    title: 'Meta Front-End Developer',
    issuer: "Coursera",
    description: 'This 9-course program prepares learners for an entry-level career as a front-end developer. It covered JavaScript, HTML, CSS, React, UX/UI design, and more.',
    image: metaCertificate,
    verify: 'https://coursera.org/verify/professional-cert/DQ5ZH9SCJM57',
  },
];

export default certificates;