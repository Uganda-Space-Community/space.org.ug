import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Gamepad2,
  GraduationCap,
  Sparkles,
  Telescope,
  UsersRound
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getActivities } from "@/lib/content/public";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Year-round Space Uganda activities including stargazing, STEM outreach, space games, industrial visits, and public space learning experiences."
};

const activityIcons = [Telescope, GraduationCap, Gamepad2, Building2];

function readHighlights(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

export default async function ActivitiesPage() {
  const activities = await getActivities();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-ink px-5 py-16 text-white md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-normal text-ugandaGold">
              <Sparkles aria-hidden="true" size={16} />
              Activities
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black md:text-7xl">
              Year-round ways to experience space
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
              Space Uganda brings astronomy, engineering, public learning, industry exposure,
              and playful science engagement into programmes communities can run throughout the year.
            </p>
          </div>
        </section>

        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 md:grid-cols-4 md:px-8">
            {[
              ["Observe", "Night sky experiences"],
              ["Build", "Hands-on STEM sessions"],
              ["Play", "Bingos, trivias, and challenges"],
              ["Visit", "Labs, industry, and innovation spaces"]
            ].map(([label, value]) => (
              <div className="rounded-md border border-black/10 bg-paper p-4" key={label}>
                <p className="text-xs font-black uppercase tracking-normal text-ugandaRed">
                  {label}
                </p>
                <p className="mt-2 text-lg font-black text-ink">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-paper px-5 py-16 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                description="These activities are designed as repeatable formats that partners, clubs, schools, universities, and companies can host or support."
                eyebrow={`${activities.length} Programme Formats`}
                title="Public programmes for the ecosystem"
              />
              <Link
                className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-black text-white transition hover:bg-ugandaRed"
                href="/join"
              >
                Host or support one
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {activities.map((activity, index) => {
                const Icon = activityIcons[index % activityIcons.length];
                const highlights = readHighlights(activity.highlights);

                return (
                  <article
                    className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm"
                    key={activity.id}
                  >
                    <div className="relative aspect-[16/10] bg-ink">
                      <Image
                        alt={`${activity.title} activity artwork`}
                        className="object-cover"
                        fill
                        src={activity.imageUrl ?? "/assets/space-uganda-general-space-banner.png"}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-normal text-ugandaRed">
                        <Icon aria-hidden="true" size={15} />
                        {activity.category}
                      </p>
                      <h2 className="mt-3 text-2xl font-black text-ink">{activity.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-ink/65">{activity.description}</p>

                      <div className="mt-5 grid gap-3 text-sm text-ink/70">
                        {activity.cadence ? (
                          <p className="inline-flex items-start gap-2">
                            <CalendarDays
                              aria-hidden="true"
                              className="mt-0.5 shrink-0 text-ugandaGreen"
                              size={16}
                            />
                            <span>{activity.cadence}</span>
                          </p>
                        ) : null}
                        {activity.audience ? (
                          <p className="inline-flex items-start gap-2">
                            <UsersRound
                              aria-hidden="true"
                              className="mt-0.5 shrink-0 text-ugandaGreen"
                              size={16}
                            />
                            <span>{activity.audience}</span>
                          </p>
                        ) : null}
                      </div>

                      {highlights.length ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {highlights.map((highlight) => (
                            <span
                              className="rounded-md bg-paper px-3 py-2 text-xs font-black text-ink/70"
                              key={highlight}
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionHeading
              description="WSW Uganda 2026 can plug into these same year-round formats, scaling the strongest ones into national campaign moments from October 4-10."
              eyebrow="Campaign Ready"
              title="Activities that can grow into WSW moments"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Space clubs and student branches can adopt activity formats.",
                "Partners can sponsor equipment, venues, transport, or mentors.",
                "Schools and universities can host outreach days and visits.",
                "Organisers can turn strong formats into national WSW sessions."
              ].map((item) => (
                <div className="rounded-lg border border-black/10 bg-paper p-5" key={item}>
                  <p className="text-sm font-bold leading-6 text-ink/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
