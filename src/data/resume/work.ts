/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Microsoft (Nuance Communications)',
    position: 'Member of the CDE One/Clintegrity Support Team',
    url: 'https://microsoft.com',
    startDate: 'June 2022',
    summary: `Provide support for Microsoft's CDE One and Clintegrity platforms, which are used by healthcare organizations to manage patient data and ensure compliance with healthcare regulations. Troubleshoot and resolve technical issues, collaborate with cross-functional teams to improve platform performance and reliability, and contribute to the development of new features and capabilities. Also support integrations utilizing HL7 messaging which allows back and forth processing from Meditech, Epic and other EHR's.`,
  },
  {
    name: 'Healthedge (Wellframe)',
    position: 'Technical Support Specialist II',
    url: 'https://healthedge.com',
    startDate: 'April 2021',
    endDate: 'June 2022',
    summary: `Provided tier 1 and 2 support for members and care managers. Assisted Software Engineers with technical issues by reproducing and documenting issues reported.`,
  },
  {
    name: 'Avidxchange',
    position: 'Application Reliability Specialist',
    url: 'https://www.avidxchange.com',
    startDate: 'February 2018',
    endDate: 'April 2021',
    summary: `Solved complex cases that consisted of in depth troubleshooting regarding payments, bank check transfers, invoices, software issues, performance, etc.`,
    highlights: [
      'Promoted from Technical Specialist to Senior and eventually to Application Reliability Specialist.'
    ],
  },
  {
    name: 'Apple',
    position: 'Genius Bar Specialist',
    url: 'https://www.apple.com',
    startDate: 'September 2016',
    endDate: 'February 2018',
    summary: `On the spot troubleshooting while providing quick diagnostics and resolution for customers across Apple products. Worked in high tempo environment providing assistance to both technical support and product sales.`,
    highlights: [
      'Promoted from Product Specialist to Genius Bar Specialist.'
    ],
  },
  {
    name: 'United States Marine Corps',
    position: 'Sergenat of Marines',
    url: 'https://www.marines.mil',
    startDate: 'August 2011',
    endDate: 'August 2016',
    summary: `Served as a 6492 Avionics Precision Measuring Equipment Technician, responsible for the calibration, maintenance, and repair of highly sensitive avionics test and measurement equipment. Demonstrated strong leadership as a Non-Commissioned Officer, supervising personnel, ensuring mission readiness, and maintaining strict compliance with military quality assurance and safety standards. Recognized for technical expertise, attention to detail, and the ability to perform effectively in high-pressure operational environments.`,
    highlights: [
      'Climbed through the ranks from Private to Sergeant.',
      'Honorably discharged after 5 years of active duty service.',
      'Managed the inventory of 5,000 separate technical measurement assets worth $50,000,000 in accordance with the Naval  Aviation Maintenance Program (NAMP 4790.2X) while maintaining a 1.3% overdue rate and a 94.5% readiness rate.',
      'Lean Six Sigma Yellow Belt certified.'
    ],
  },
];

export default work;
