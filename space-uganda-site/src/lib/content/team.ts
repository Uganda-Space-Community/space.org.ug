export type TeamMemberSeed = {
  name: string;
  role: string;
  organisation: string;
  bio: string;
  photoUrl?: string;
  sortOrder: number;
  featured: boolean;
};

export const organiserTeamMembers: TeamMemberSeed[] = [
  {
    name: "Dr Malcom Chris B",
    role: "Astronomy Organising Team",
    organisation: "Uganda Astronomical Society",
    bio: "Dr Malcom Chris B supports the astronomy organising team, helping connect public audiences to observation, astronomy learning, and Uganda's growing space community.",
    sortOrder: 1,
    featured: false
  },
  {
    name: "Ronnie Atuhaire",
    role: "National Coordinator, World Space Week Uganda 2026",
    organisation: "Space Junkies Uganda",
    bio: "Ronnie leads Space Junkies Uganda and coordinates World Space Week Uganda 2026, connecting young Ugandans, institutions, and partners to the global space community.",
    sortOrder: 2,
    featured: true
  },
  {
    name: "Zoora Harrison",
    role: "National Coordinator, World Space Week Uganda 2026",
    organisation: "StellarView Technologies",
    bio: "Zoora is the Founder and CEO of StellarView Technologies, Uganda's first space education media brand, and helps make space science accessible to African children through outreach, storytelling, and programme delivery.",
    sortOrder: 3,
    featured: true
  },
  {
    name: "Nabbaale Grace Lydia",
    role: "Chapter Lead, StellarView Technologies - Makerere University",
    organisation: "Makerere University",
    bio: "Grace is an Electrical Engineering student at Makerere University CEDAT and a StellarView Technologies chapter lead, with a strong interest in space science and its potential for Africa's development.",
    sortOrder: 4,
    featured: true
  },
  {
    name: "Ayebazibwe Brinton",
    role: "Chief Operations",
    organisation: "StellarView Technologies Ltd",
    bio: "Brinton supports operations and coordination for StellarView Technologies Ltd, helping turn space outreach ideas into organised public programmes.",
    sortOrder: 5,
    featured: false
  },
  {
    name: "Capt Simon Bruno W. Ssenyange",
    role: "Executive Director",
    organisation: "Holistic Inclusive Aviation Africa",
    bio: "Simon leads Holistic Inclusive Aviation Africa, advancing inclusive aviation and STEAM pathways for young aviation and space professionals across Africa.",
    sortOrder: 6,
    featured: false
  },
  {
    name: "Twesigye Duncan",
    role: "STEAM Educator and Coach",
    organisation: "NOA's Quest Program",
    bio: "Duncan contributes STEAM education, coaching, and practical learning support for young people engaging with aerospace, rocketry, and space science.",
    sortOrder: 7,
    featured: false
  },
  {
    name: "Halimah Bukirwa",
    role: "Founder",
    organisation: "Aerobuddies",
    bio: "Halimah brings a people-centred passion for aviation, technology, and problem-solving, building practical pathways for meaningful impact in Uganda's aviation ecosystem and beyond.",
    sortOrder: 8,
    featured: true
  },
  {
    name: "O. Samuel Oumo",
    role: "Member",
    organisation: "Uganda Astronomical Society",
    bio: "Samuel is an information systems professional and futurist thinking, writing, and building toward systems that help society imagine a greater world beyond the present.",
    sortOrder: 9,
    featured: false
  },
  {
    name: "Angu'zu Raymond",
    role: "Partnerships",
    organisation: "KTA Advocates Centre for Law, Policy and Innovation Initiative",
    bio: "Raymond is a lawyer, Uganda National Point of Contact to the Space Generation Advisory Council, and Policy and Programs Assistant at KTA Advocates Centre for Law, Policy and Innovation Initiative.",
    sortOrder: 10,
    featured: true
  },
  {
    name: "Bwengye Cosmas",
    role: "Astronomy Organising Team",
    organisation: "Uganda Astronomical Society",
    bio: "Cosmas contributes to the Uganda Astronomical Society organising team, supporting astronomy outreach and community participation for national space activities.",
    sortOrder: 11,
    featured: false
  },
  {
    name: "Navneet Singh",
    role: "Chief Technology Officer",
    organisation: "Nile Orbitals",
    bio: "Navneet contributes aerospace technology leadership and technical perspective through Nile Orbitals and the wider Space Uganda ecosystem.",
    sortOrder: 12,
    featured: false
  }
];
