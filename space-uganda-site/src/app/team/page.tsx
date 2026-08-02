import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getTeamMembers } from "@/lib/content/public";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the national coordinators and organising teams helping build Space Uganda and World Space Week Uganda 2026."
};

const avatarThemes = [
  {
    accent: "#f7c948",
    glow: "#d92128",
    background:
      "radial-gradient(circle at 25% 18%, rgba(247, 201, 72, 0.9), transparent 22%), linear-gradient(135deg, #15171c, #263343)"
  },
  {
    accent: "#2eb67d",
    glow: "#f7c948",
    background:
      "radial-gradient(circle at 70% 24%, rgba(46, 182, 125, 0.85), transparent 24%), linear-gradient(135deg, #171923, #253046)"
  },
  {
    accent: "#d92128",
    glow: "#7dd3fc",
    background:
      "radial-gradient(circle at 28% 72%, rgba(217, 33, 40, 0.86), transparent 24%), linear-gradient(135deg, #15171c, #2f2432)"
  },
  {
    accent: "#7dd3fc",
    glow: "#f7c948",
    background:
      "radial-gradient(circle at 72% 70%, rgba(125, 211, 252, 0.86), transparent 24%), linear-gradient(135deg, #111827, #20342e)"
  }
];

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function TeamAvatar({
  index,
  name
}: {
  index: number;
  name: string;
}) {
  const theme = avatarThemes[index % avatarThemes.length];
  const style = {
    "--avatar-accent": theme.accent,
    "--avatar-glow": theme.glow,
    animationDelay: `${index * 160}ms`,
    background: theme.background
  } as CSSProperties;

  return (
    <div
      aria-label={`${name} abstract animated space avatar`}
      className="team-avatar"
      role="img"
      style={style}
    >
      <span aria-hidden="true" className="team-avatar__orbit team-avatar__orbit--outer" />
      <span aria-hidden="true" className="team-avatar__orbit team-avatar__orbit--inner" />
      <span aria-hidden="true" className="team-avatar__core" />
      <span aria-hidden="true" className="team-avatar__satellite" />
      <span className="team-avatar__initials">{getInitials(name)}</span>
    </div>
  );
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          description="Space Uganda is coordinated by people from different organisations working under a shared umbrella while preserving each community's identity."
          eyebrow="Team"
          imageAlt="Futuristic mission coordination room with orbital maps and constellation networks"
          imageSrc="/assets/hero-team.png"
          title="Coordinators, organisers, and ecosystem builders"
        />

        <section className="bg-paper px-5 py-16 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              description="Team profiles can grow from national coordinators to volunteers, advisors, technical leads, and host teams as the organisation expands."
              eyebrow={`${teamMembers.length} Public Profiles`}
              title="The people moving the mission"
            />
            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member, index) => (
                <article
                  className="flex h-full flex-col rounded-lg border border-black/10 bg-white p-6 shadow-sm"
                  key={member.id}
                >
                  <div className="flex items-start gap-4">
                    <TeamAvatar index={index} name={member.name} />
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase tracking-normal text-ugandaRed">
                        {member.organisation}
                      </p>
                      <h2 className="mt-2 break-words text-2xl font-black text-ink">
                        {member.name}
                      </h2>
                      <p className="mt-1 text-sm font-bold text-ink/70">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 grow text-sm leading-6 text-ink/65">{member.bio}</p>
                  {member.email ? (
                    <a
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ugandaRed"
                      href={`mailto:${member.email}`}
                    >
                      <Mail aria-hidden="true" size={16} />
                      {member.email}
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
