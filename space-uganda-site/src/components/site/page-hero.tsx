import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  children,
  priority = true
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        alt={imageAlt}
        className="absolute inset-0 -z-20 object-cover"
        fill
        priority={priority}
        sizes="100vw"
        src={imageSrc}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(21,23,28,0.98),rgba(21,23,28,0.82),rgba(21,23,28,0.38))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_34%,rgba(247,201,72,0.2),transparent_32%),linear-gradient(0deg,rgba(21,23,28,0.68),transparent_48%)]" />
      <div className="mx-auto flex min-h-[440px] max-w-7xl flex-col justify-end px-5 py-16 md:min-h-[520px] md:px-8">
        <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-normal text-ugandaGold">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-5xl text-5xl font-black leading-tight md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">{description}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
