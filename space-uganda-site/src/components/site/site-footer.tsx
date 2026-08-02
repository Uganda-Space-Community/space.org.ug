import Link from "next/link";
import { Bell, ExternalLink, Mail, Rocket } from "lucide-react";
import { siteIdentity } from "@/lib/constants";

export function SiteFooter() {
  const subscribeHref = `mailto:${siteIdentity.contactEmail}?subject=${encodeURIComponent(
    "Subscribe me to Space Uganda updates"
  )}`;

  return (
    <footer className="border-t border-black/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-ugandaGold text-ink">
              <Rocket aria-hidden="true" size={21} />
            </span>
            <div>
              <p className="font-black">{siteIdentity.name}</p>
              <p className="text-sm text-white/60">{siteIdentity.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/65">
            Uganda&apos;s year-round umbrella for space communities, universities, companies,
            public educators, engineers, artists, astronomers, and future mission builders.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-normal text-ugandaGold">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/community">Community</Link>
            <Link href="/activities">Activities</Link>
            <Link href="/team">Team</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/wsw-2026">WSW Uganda 2026</Link>
            <Link href="/join">Join Space Uganda</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-normal text-ugandaGold">Connect</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link className="inline-flex items-center gap-2" href="https://www.worldspaceweek.org/">
              World Space Week
              <ExternalLink aria-hidden="true" size={14} />
            </Link>
            <a className="inline-flex items-center gap-2" href={`mailto:${siteIdentity.contactEmail}`}>
              <Mail aria-hidden="true" size={14} />
              {siteIdentity.contactEmail}
            </a>
            <a
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-ugandaGold px-4 py-2 text-sm font-black text-ink transition hover:bg-white"
              href={subscribeHref}
            >
              <Bell aria-hidden="true" size={15} />
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
