export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    number: 'Credential ID: 926D4B827D5AE4AF',
    link: 'https://learn.microsoft.com/en-us/users/marcosraymundo-1027/credentials/926d4b827d5ae4af',
    university: 'Microsoft',
  },
  {
    title: 'Microsoft Applied Skills: Create an AI agent',
    number: '',
    link: 'https://learn.microsoft.com/en-us/users/marcosraymundo-1027/credentials/64215b076983e8d0',
    university: 'Microsoft',
  },
  {
    title: 'Copilot Champs | Training Achievement',
    number: 'Credential ID: 64215B076983E8D0',
    link: 'https://www.credly.com/badges/b20c8da2-0d66-48b4-9463-05229820340b/linked_in_profile',
    university: 'Microsoft',
  },
  {
    title: 'Microsoft Applied Skills: Create and manage canvas apps with Power Apps',
    number: '',
    link: 'http://learn.microsoft.com/en-us/users/marcosraymundo-1027/credentials/ea3c27a63bbb5fba',
    university: 'Microsoft',
  },
];

export default courses;
