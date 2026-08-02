import type { Metadata } from "next";
import { Bell, Handshake, Lightbulb, Mail, Users } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SubmissionForm } from "@/components/site/submission-form";
import { siteIdentity } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join Space Uganda",
  description:
    "Join the Space Uganda ecosystem, partner with the umbrella organisation, submit a WSW innovation idea, or contact the organising team."
};

const pathways = [
  {
    title: "Join",
    description: "List your community, volunteer, mentor, host a session, or help mobilise people.",
    icon: Users
  },
  {
    title: "Partner",
    description: "Support the national umbrella through venues, media, sponsorship, tools, or expertise.",
    icon: Handshake
  },
  {
    title: "Innovate",
    description: "Submit concepts for WSW 2026 showcases, demos, workshops, and public experiences.",
    icon: Lightbulb
  },
  {
    title: "Contact",
    description: "Reach the team for press, schools, universities, sponsors, and ecosystem coordination.",
    icon: Mail
  },
  {
    title: "Subscribe",
    description: "Get updates on WSW Uganda 2026, stargazing nights, outreach calls, and ecosystem news.",
    icon: Bell
  }
];

export default function JoinPage() {
  const subscribeHref = `mailto:${siteIdentity.contactEmail}?subject=${encodeURIComponent(
    "Subscribe me to Space Uganda updates"
  )}`;

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          description="Use one form to join the umbrella, propose a partnership, submit a WSW Uganda 2026 innovation idea, or contact the organising team."
          eyebrow="Join Space Uganda"
          imageAlt="Open-air space community hub with a glowing mission table under the Milky Way"
          imageSrc="/assets/hero-join.png"
          title="Plug into Uganda's space ecosystem"
        />

        <section className="bg-white px-5 py-12 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-5">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;

              return (
                <article className="rounded-lg border border-black/10 bg-paper p-5" key={pathway.title}>
                  <Icon aria-hidden="true" className="text-ugandaGreen" size={26} />
                  <h2 className="mt-4 text-xl font-black text-ink">{pathway.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{pathway.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-ink px-5 py-9 text-white md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-ugandaGold">Stay Connected</p>
              <h2 className="mt-2 text-2xl font-black">Follow Uganda&apos;s space ecosystem as it grows.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                Subscribe for community updates, event calls, partner news, and World Space Week Uganda notices.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ugandaGold px-5 py-3 text-sm font-black text-ink transition hover:bg-white"
                href={subscribeHref}
              >
                <Bell aria-hidden="true" size={17} />
                Subscribe
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-ugandaGold hover:text-ugandaGold"
                href={`mailto:${siteIdentity.contactEmail}`}
              >
                <Mail aria-hidden="true" size={17} />
                {siteIdentity.contactEmail}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-paper px-5 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              description="Every submission is stored securely and reviewed by the organising team. This keeps the public ecosystem open while giving coordinators a structured workflow."
              eyebrow="Public Intake"
              title="Tell us where you fit"
            />
            <SubmissionForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
