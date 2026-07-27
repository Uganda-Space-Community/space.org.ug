export type ActivitySeed = {
  title: string;
  category: string;
  summary: string;
  description: string;
  imageUrl: string;
  cadence: string;
  audience: string;
  leadOrganisation: string;
  highlights: string[];
  sortOrder: number;
  featured: boolean;
};

export const defaultActivities: ActivitySeed[] = [
  {
    title: "Star Gazing",
    category: "Astronomy Nights",
    summary:
      "Guided telescope nights that make Uganda's night sky easier to see, understand, and love.",
    description:
      "Community stargazing brings students, families, astronomy clubs, and curious first-timers together for telescope viewing, constellation walks, sky storytelling, and practical observation skills.",
    imageUrl: "/assets/activity-star-gazing.png",
    cadence: "Evening sessions and special sky events",
    audience: "Students, families, clubs, and astronomy beginners",
    leadOrganisation: "Uganda Astronomical Society and partner clubs",
    highlights: ["Telescope viewing", "Constellation walks", "Astrophotography tasters"],
    sortOrder: 1,
    featured: true
  },
  {
    title: "STEM Outreach",
    category: "Education",
    summary:
      "Hands-on space science sessions for schools, universities, youth groups, and public learning spaces.",
    description:
      "STEM outreach turns space into a practical learning gateway through satellite models, robotics, engineering challenges, astronomy lessons, and mentor-led workshops for young Ugandans.",
    imageUrl: "/assets/activity-stem-outreach.png",
    cadence: "School visits, campus sessions, and community workshops",
    audience: "Learners, teachers, student branches, and youth communities",
    leadOrganisation: "Space Uganda partners and STEM education teams",
    highlights: ["Satellite models", "Robotics labs", "Career pathways"],
    sortOrder: 2,
    featured: true
  },
  {
    title: "Space Bingos & Trivias",
    category: "Public Engagement",
    summary:
      "Playful space learning experiences that make astronomy, missions, and STEM knowledge social.",
    description:
      "Space Bingos & Trivias are built for clubs, classrooms, community nights, and campaign events where people can learn through games, friendly competition, and memorable space facts.",
    imageUrl: "/assets/activity-space-bingos-trivias.png",
    cadence: "Community game nights and event activations",
    audience: "Schools, clubs, families, volunteers, and public audiences",
    leadOrganisation: "Space Uganda outreach teams",
    highlights: ["Quiz nights", "Space bingo rounds", "Team challenges"],
    sortOrder: 3,
    featured: true
  },
  {
    title: "Industrial Visits",
    category: "Industry Linkages",
    summary:
      "Structured visits that connect learners to laboratories, engineering spaces, innovators, and industry mentors.",
    description:
      "Industrial visits help students and early-career builders see how space-adjacent skills translate into real work across engineering, aviation, manufacturing, geospatial technology, and research.",
    imageUrl: "/assets/activity-industrial-visits.png",
    cadence: "Partner-hosted visits and technical tours",
    audience: "University teams, student branches, innovators, and young professionals",
    leadOrganisation: "Partner companies, universities, and technical institutions",
    highlights: ["Lab tours", "Mentor briefings", "Career exposure"],
    sortOrder: 4,
    featured: true
  }
];
