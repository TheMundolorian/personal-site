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
    position: 'Senior Service Engineer - Healthcare Applications & Integrations',
    url: 'https://microsoft.com',
    startDate: 'June 2022',
    summary: `Provide advanced technical support, system administration, and integration expertise for healthcare customers, acting as a primary technical owner for complex production issues, upgrades, identity/authentication configurations, and data pipeline health.
    My current role blends application support, infrastructure troubleshooting, healthcare interoperability (HL7), security/identity management, and customer-facing technical leadership, frequently operating as the escalation point between customers, internal engineering, and external vendors.`,
    highlights: [
      'Diagnose and resolve issues involving application slowness, database capacity, message backlogs, service outages, and user access failures.',
      'Perform deep analysis using logs, audit trails, SQL queries, and message queues to identify root cause and remediation paths.',
      'Work closely with interface vendors (e.g., Ellkay, Epic, MEDITECH) to resolve translation and interoperability issues.',
      'Support and troubleshoot SSO configurations, including ADFS, SAML, Auth0, certificate-based authentication, and metadata issues.',
      'Identify and resolve certificate chain problems, expired certificates, missing intermediates, and login failures (403s, refresh loops). Coordinate certificate renewals and identity changes with customer security teams and internal stakeholders.',
      'Plan, execute, and support Clintegrity upgrades across test and production environments.',
      'Act as a trusted technical advisor to healthcare customers during incidents, upgrades, and integration projects.',
      'Partner closely with peers across support, engineering, implementation, and product teams.'
    ],
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
