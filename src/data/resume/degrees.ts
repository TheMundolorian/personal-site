export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Southern New Hampshire University',
    degree: 'B.S. Science, Computer Science & Software Engineering',
    link: 'https://snhu.edu',
    year: 2023,
  },
  {
    school: 'University of Massachusetts Boston',
    degree: 'B.S. Science, Management & Accounting',
    link: 'https://umb.edu',
    year: 2020,
  },
];

export default degrees;
