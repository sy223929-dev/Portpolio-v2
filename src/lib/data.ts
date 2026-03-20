// ─── RESUME DATA (EXACT WORDING — DO NOT MODIFY) ─────────────────────────────

export const personal = {
  name: "Surendra Yadav",
  location: "Nautanwa, Uttar Pradesh, India",
  phone: "8577074763",
  email: "sy223929@gmail.com",
  linkedin: "https://linkedin.com/in/surendra-yadav",
  dob: "04 March 2002",
  languages: "Hindi (Native), English",
  nationality: "Indian",
};

export const summary =
  "Results-driven office professional with 3+ years of experience in finance operations, office administration, MIS reporting, and customer data management. Skilled in Advanced Excel, Tally Prime, Python, Power BI, MySQL, Web Development, Web Design, MS Word and PowerPoint with working knowledge of supply chain operations, documentation flow, and record management. Proven track record of achieving performance targets with multiple Highest Loan Distribution Awards. Seeking office-based role in MIS, Back Office, Accounting, or Supply Chain Operations.";

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Branch Relationship Manager",
    company: "Prayas Financial Services Pvt. Ltd.",
    location: "Gorkhpur, UP",
    period: "December 2023 – January 2025",
    bullets: [
      "Maintained comprehensive customer records, documentation, and daily MIS reports using Advanced Excel with pivot tables and VLOOKUP functions",
      "Handled end-to-end office coordination including data entry, verification, and preparation of management reports",
      "Supported billing operations, basic accounting entries in Tally Prime, and systematic record keeping for financial transactions",
      "Developed data tracking systems and generated reports for management review to support decision-making processes",
      "Managed loan disbursement operations and bank deposits with 100% accuracy in financial documentation",
      "Achieved Highest Loan Distribution Award at Zone Level through efficient customer data management and operational excellence",
    ],
    tags: [
      "MIS Reporting",
      "Advanced Excel",
      "Tally Prime",
      "Data Management",
      "Office Coordination",
    ],
  },
  {
    id: 2,
    role: "Relationship Manager",
    company: "CreditAccess Grameen Limited",
    location: "Kaptanganj, UP",
    period: "July 2022 – December 2023",
    bullets: [
      "Managed branch-level records, customer databases, and generated daily and weekly MIS reports for operational monitoring",
      "Handled complete documentation flow including verification, filing, and office administration activities",
      "Maintained basic accounts records and created detailed reporting sheets for financial tracking and compliance",
      "Coordinated with branch office for timely data submission and preparation of operational reports",
      "Achieved Highest Loan Distribution Award twice in the operational area by streamlining data management processes",
      "Ensured accuracy in customer data entry and maintained organized filing systems for quick retrieval",
      "Successfully processed loan collections and maintained systematic record of all banking transactions",
    ],
    tags: [
      "MIS Reports",
      "Database Management",
      "Documentation",
      "Financial Tracking",
      "Data Entry",
    ],
  },
  {
    id: 3,
    role: "Insurance Assistant",
    company: "Alive GIC",
    location: "Nautanwa, UP",
    period: "2021 – 2022",
    bullets: [
      "Assisted in insurance policy processing, documentation, and customer service activities",
      "Maintained policy records and prepared reports on sales performance and renewals",
      "Handled customer queries and provided support for policy-related documentation and data entry",
    ],
    tags: [
      "Documentation",
      "Customer Service",
      "Data Entry",
      "Record Keeping",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  state: string;
  year: string;
  percentage: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Commerce",
    institution: "Siddharth University",
    state: "Uttar Pradesh",
    year: "Graduated: 2023",
    percentage: "52%",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Nautanwa Inter College",
    state: "Uttar Pradesh",
    year: "Completed: 2020",
    percentage: "62%",
  },
  {
    degree: "High School (10th)",
    institution: "Madhuban Inter College",
    state: "Uttar Pradesh",
    year: "Completed: 2018",
    percentage: "78.5%",
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Computer & Data Management",
    icon: "Monitor",
    color: "#06b6d4",
    items: [
      "Advanced Excel (MIS Reports, Pivot Tables, VLOOKUP, XLOOKUP, Power Query, Dashboards)",
      "Tally Prime (Accounting Entries, Billing, GST)",
      "Python (Data Handling, Basic Analysis)",
      "Power BI (Dashboards, Reports)",
      "MySQL (Basic Queries)",
      "MS Word",
      "MS PowerPoint",
      "Web Development",
      "Web Design",
    ],
  },
  {
    title: "Office & Finance Operations",
    icon: "Briefcase",
    color: "#8b5cf6",
    items: [
      "MIS Reporting",
      "Data Management",
      "Back Office Operations",
      "Billing",
      "Record Keeping",
      "Documentation",
      "File Management",
      "Office Coordination",
      "Basic Accounting Support",
      "Payroll Data Support",
    ],
  },
  {
    title: "Supply Chain Knowledge",
    icon: "Truck",
    color: "#10b981",
    items: [
      "Purchase and Sales Record Flow",
      "Stock Management",
      "Inventory Control",
      "Data Entry and Tracking",
      "Operational Records Maintenance",
      "Cross-functional Coordination",
      "Warehouse Operations",
      "Movement Documentation",
      "Excel-based Reporting Systems",
    ],
  },
];

export const certifications = [
  {
    name: "O Level Certificate (Information Technology)",
    issuer: "NIELIT",
    icon: "Shield",
    color: "#06b6d4",
  },
  {
    name: "CCC (Course on Computer Concepts)",
    issuer: "NIELIT — 2021",
    icon: "Monitor",
    color: "#8b5cf6",
  },
  {
    name: "Certificate Course in Entrepreneurship (CCE)",
    issuer: "",
    icon: "Lightbulb",
    color: "#f59e0b",
  },
  {
    name: "Tally Prime (Accounting Software)",
    issuer: "CIT Nautanwa — 2023",
    icon: "Calculator",
    color: "#10b981",
  },
  {
    name: "Microsoft Power BI",
    issuer: "Data Visualization & Dashboards",
    icon: "BarChart3",
    color: "#ef4444",
  },
  {
    name: "Warehouse Management in Logistics & Supply Chain Management",
    issuer: "Udemy",
    icon: "Warehouse",
    color: "#3b82f6",
  },
  {
    name: "Inventory Management",
    issuer: "Stock Control & Operations",
    icon: "Package",
    color: "#ec4899",
  },
];

export const achievements = [
  "Received Highest Loan Distribution Award at Zone Level at Prayas Financial Services Pvt. Ltd.",
  "Achieved Highest Loan Distribution Award twice at CreditAccess Grameen Ltd. in operational area",
  "Successfully managed customer databases and MIS reporting systems improving operational efficiency",
  "Maintained 100% accuracy in data entry and financial documentation across all roles",
];

// ─── DASHBOARD SAMPLE DATA ───────────────────────────────────────────────────

export const dashboardKPIs = [
  { label: "MIS Reports Generated", value: 850, suffix: "+", icon: "FileSpreadsheet", color: "#06b6d4", delta: "+12%" },
  { label: "Data Records Managed", value: 25000, suffix: "+", icon: "Database", color: "#8b5cf6", delta: "+8%" },
  { label: "Documentation Accuracy", value: 100, suffix: "%", icon: "Target", color: "#10b981", delta: "Consistent" },
  { label: "Awards Won", value: 3, suffix: "", icon: "Trophy", color: "#f59e0b", delta: "Zone + Area" },
];

export const monthlyReports = [
  { month: "Jan", daily: 22, weekly: 4, monthly: 1 },
  { month: "Feb", daily: 20, weekly: 4, monthly: 1 },
  { month: "Mar", daily: 23, weekly: 5, monthly: 1 },
  { month: "Apr", daily: 21, weekly: 4, monthly: 1 },
  { month: "May", daily: 24, weekly: 5, monthly: 1 },
  { month: "Jun", daily: 22, weekly: 4, monthly: 1 },
  { month: "Jul", daily: 25, weekly: 5, monthly: 2 },
  { month: "Aug", daily: 23, weekly: 4, monthly: 1 },
  { month: "Sep", daily: 26, weekly: 5, monthly: 2 },
  { month: "Oct", daily: 24, weekly: 5, monthly: 1 },
  { month: "Nov", daily: 27, weekly: 5, monthly: 2 },
  { month: "Dec", daily: 25, weekly: 4, monthly: 1 },
];

export const reportBreakdown = [
  { name: "Daily MIS", value: 45, fill: "#06b6d4" },
  { name: "Weekly Summary", value: 25, fill: "#8b5cf6" },
  { name: "Financial Tracking", value: 15, fill: "#10b981" },
  { name: "Inventory Reports", value: 10, fill: "#f59e0b" },
  { name: "Ad-hoc Analysis", value: 5, fill: "#ef4444" },
];

export const operationalMetrics = [
  { month: "Jan", accuracy: 99.8, efficiency: 92, records: 2100 },
  { month: "Feb", accuracy: 99.9, efficiency: 93, records: 2200 },
  { month: "Mar", accuracy: 100, efficiency: 94, records: 2350 },
  { month: "Apr", accuracy: 99.9, efficiency: 95, records: 2180 },
  { month: "May", accuracy: 100, efficiency: 96, records: 2400 },
  { month: "Jun", accuracy: 100, efficiency: 95, records: 2300 },
  { month: "Jul", accuracy: 99.9, efficiency: 97, records: 2500 },
  { month: "Aug", accuracy: 100, efficiency: 96, records: 2450 },
  { month: "Sep", accuracy: 100, efficiency: 98, records: 2600 },
  { month: "Oct", accuracy: 100, efficiency: 97, records: 2550 },
  { month: "Nov", accuracy: 100, efficiency: 98, records: 2700 },
  { month: "Dec", accuracy: 100, efficiency: 99, records: 2650 },
];

export const supplyChainFlow = [
  { week: "W1", inbound: 120, outbound: 105, stock: 340 },
  { week: "W2", inbound: 135, outbound: 118, stock: 357 },
  { week: "W3", inbound: 110, outbound: 125, stock: 342 },
  { week: "W4", inbound: 145, outbound: 130, stock: 357 },
  { week: "W5", inbound: 128, outbound: 115, stock: 370 },
  { week: "W6", inbound: 140, outbound: 138, stock: 372 },
  { week: "W7", inbound: 155, outbound: 142, stock: 385 },
  { week: "W8", inbound: 130, outbound: 128, stock: 387 },
];

export const skillProficiency = [
  { skill: "Advanced Excel", level: 92 },
  { skill: "MIS Reporting", level: 90 },
  { skill: "Tally Prime", level: 85 },
  { skill: "Power BI", level: 78 },
  { skill: "Python", level: 65 },
  { skill: "MySQL", level: 70 },
  { skill: "Data Management", level: 95 },
  { skill: "Documentation", level: 93 },
];
