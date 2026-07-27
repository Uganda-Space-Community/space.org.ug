export type TeamMemberSeed = {
  name: string;
  role: string;
  organisation: string;
  bio: string;
  photoUrl?: string;
  sortOrder: number;
  featured: boolean;
};

const avatarPackUrl = "/assets/team/space-team-avatar-pack.png";

export const organiserTeamMembers: TeamMemberSeed[] = [
  {
    name: "Ronnie Atuhaire",
    role: "National Coordinator, World Space Week Uganda 2026",
    organisation: "Space Junkies Uganda",
    bio: "Ronnie leads Space Junkies Uganda and coordinates World Space Week Uganda 2026, connecting young Ugandans, institutions, and partners to the global space community.",
    photoUrl: avatarPackUrl,
    sortOrder: 1,
    featured: true
  },
  {
    name: "Zoora Harrison",
    role: "National Coordinator, World Space Week Uganda 2026",
    organisation: "StellarView Technologies",
    bio: "Zoora is the Founder and CEO of StellarView Technologies, Uganda's first space education media brand, and helps make space science accessible to African children through outreach, storytelling, and programme delivery.",
    photoUrl: avatarPackUrl,
    sortOrder: 2,
    featured: true
  },
  {
    name: "Nabbaale Grace Lydia",
    role: "Chapter Lead, StellarView Technologies - Makerere University",
    organisation: "Makerere University",
    bio: "Grace is an Electrical Engineering student at Makerere University CEDAT and a StellarView Technologies chapter lead, with a strong interest in space science and its potential for Africa's development.",
    photoUrl: avatarPackUrl,
    sortOrder: 3,
    featured: true
  },
  {
    name: "Ayebazibwe Brinton",
    role: "Chief Operations",
    organisation: "StellarView Technologies Ltd",
    bio: "Brinton supports operations and coordination for StellarView Technologies Ltd, helping turn space outreach ideas into organised public programmes.",
    photoUrl: avatarPackUrl,
    sortOrder: 4,
    featured: false
  },
  {
    name: "Mugisha Trevour Jean-Claude",
    role: "Researcher, The GIS Center",
    organisation: "Makerere University CEDAT",
    bio: "Trevour is a Land Surveying and Geomatics student at Makerere University, active in geospatial technology, Earth observation, OpenStreetMap, drone applications, and youth-led STEM initiatives.",
    photoUrl: avatarPackUrl,
    sortOrder: 5,
    featured: true
  },
  {
    name: "Capt Simon Bruno W. Ssenyange",
    role: "Executive Director",
    organisation: "Holistic Inclusive Aviation Africa",
    bio: "Simon leads Holistic Inclusive Aviation Africa, advancing inclusive aviation and STEAM pathways for young aviation and space professionals across Africa.",
    photoUrl: avatarPackUrl,
    sortOrder: 6,
    featured: false
  },
  {
    name: "Twesigye Duncan",
    role: "STEAM Educator and Coach",
    organisation: "NOA's Quest Program",
    bio: "Duncan contributes STEAM education, coaching, and practical learning support for young people engaging with aerospace, rocketry, and space science.",
    photoUrl: avatarPackUrl,
    sortOrder: 7,
    featured: false
  },
  {
    name: "Halimah Bukirwa",
    role: "Founder",
    organisation: "Aerobuddies",
    bio: "Halimah brings a people-centred passion for aviation, technology, and problem-solving, building practical pathways for meaningful impact in Uganda's aviation ecosystem and beyond.",
    photoUrl: avatarPackUrl,
    sortOrder: 8,
    featured: true
  },
  {
    name: "O. Samuel Oumo",
    role: "Member",
    organisation: "UAS",
    bio: "Samuel is an information systems professional and futurist thinking, writing, and building toward systems that help society imagine a greater world beyond the present.",
    photoUrl: avatarPackUrl,
    sortOrder: 9,
    featured: false
  },
  {
    name: "Angu'zu Raymond",
    role: "Partnerships",
    organisation: "KTA Advocates Centre for Law, Policy and Innovation Initiative",
    bio: "Raymond is a lawyer, Uganda National Point of Contact to the Space Generation Advisory Council, and Policy and Programs Assistant at KTA Advocates Centre for Law, Policy and Innovation Initiative.",
    photoUrl: avatarPackUrl,
    sortOrder: 10,
    featured: true
  },
  {
    name: "Dr Byaruhanga Christopher",
    role: "Astronomy Organising Team",
    organisation: "Uganda Astronomical Society",
    bio: "Dr Byaruhanga supports the astronomy organising team, helping connect public audiences to observation, astronomy learning, and Uganda's growing space community.",
    photoUrl: avatarPackUrl,
    sortOrder: 11,
    featured: false
  },
  {
    name: "Bwengye Cosmas",
    role: "Astronomy Organising Team",
    organisation: "Uganda Astronomical Society",
    bio: "Cosmas contributes to the Uganda Astronomical Society organising team, supporting astronomy outreach and community participation for national space activities.",
    photoUrl: avatarPackUrl,
    sortOrder: 12,
    featured: false
  },
  {
    name: "Navneet Singh",
    role: "Chief Technology Officer",
    organisation: "Nileorbital Aerospace",
    bio: "Navneet contributes aerospace technology leadership and technical perspective to the wider Space Uganda ecosystem.",
    photoUrl: avatarPackUrl,
    sortOrder: 13,
    featured: false
  }
];
