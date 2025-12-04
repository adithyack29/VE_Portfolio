/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Cinematic Brand Film",
    role: "Edit · Grade · Sound design",
    year: "2024",
    thumb: "/thumbnails/brand-film.jpg",
    link: "#"
  },
  {
    title: "Music Video · Neon Nights",
    role: "Edit · VFX",
    year: "2023",
    thumb: "/thumbnails/music-video.jpg",
    link: "#"
  },
  {
    title: "Short Documentary · City Frames",
    role: "Edit · Story shaping",
    year: "2023",
    thumb: "/thumbnails/docu-city.jpg",
    link: "#"
  }
];

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const showreelRef = useRef<HTMLDivElement | null>(null);
  const workSectionRef = useRef<HTMLElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);
  const projectCardsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero intro
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll("[data-hero-reveal]"), {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        });
      }

      // Showreel glow on scroll
      if (showreelRef.current) {
        gsap.fromTo(
          showreelRef.current,
          { boxShadow: "0 0 0px rgba(249,115,22,0)" },
          {
            boxShadow: "0 0 90px rgba(249,115,22,0.3)",
            scrollTrigger: {
              trigger: showreelRef.current,
              start: "top 70%",
              end: "bottom 40%",
              scrub: true
            }
          }
        );
      }

      // Sections subtle fade/slide
      const sections: (HTMLElement | null)[] = [
        workSectionRef.current,
        aboutSectionRef.current,
        contactSectionRef.current
      ];

      sections.forEach((section) => {
        if (!section) return;
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Project cards stagger on scroll
      if (projectCardsRef.current) {
        const cards = projectCardsRef.current.querySelectorAll("[data-project-card]");
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectCardsRef.current,
            start: "top 80%"
          }
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-black via-background to-black text-slate-100 overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-soft blur-3xl" />
      </div>

      <header className="section-max flex items-center justify-between py-5 md:py-7 lg:py-8">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-xs font-semibold tracking-[0.2em]">
            VE
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Video Editor
            </p>
            <p className="text-sm text-slate-300">
              Portfolio
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.18em] uppercase text-slate-400">
          <a href="#work" className="hover:text-slate-100 transition">
            Selected work
          </a>
          <a href="#about" className="hover:text-slate-100 transition">
            About
          </a>
          <a href="#contact" className="hover:text-slate-100 transition">
            Contact
          </a>
        </nav>

        <Link
          href="#contact"
          className="rounded-full border border-accent/60 bg-accent-soft px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent hover:shadow-soft-glow transition shadow-[0_0_0_1px_rgba(249,115,22,0.25)]"
        >
          Let&apos;s work
        </Link>
      </header>

      <section
        ref={heroRef}
        className="section-max grid gap-10 pb-16 pt-10 md:pb-20 md:pt-14 lg:pt-20 lg:pb-24 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
      >
        <div className="space-y-8">
          <p
            data-hero-reveal
            className="text-xs uppercase tracking-[0.3em] text-slate-400"
          >
            Crafting rhythm, story & emotion
          </p>
          <h1
            data-hero-reveal
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            Modern, cinematic{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text">
                video editing
              </span>
              <span className="absolute inset-0 -z-10 bg-accent-soft blur-xl" />
            </span>
          </h1>
          <p
            data-hero-reveal
            className="max-w-xl text-sm md:text-base text-slate-400"
          >
            I help brands, artists and storytellers bring their footage to life
            through precise cuts, pacing, color and sound — from fast-paced
            social edits to cinematic narratives.
          </p>

          <div
            data-hero-reveal
            className="flex flex-wrap items-center gap-4 text-xs text-slate-400"
          >
            <span className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1">
              Commercial · Music · Documentary
            </span>
            <span>Available for freelance & remote collaborations</span>
          </div>
        </div>

        <div
          ref={showreelRef}
          className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.75)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1f2937_0,transparent_60%),radial-gradient(circle_at_bottom_right,#0f172a_0,transparent_55%)] opacity-60" />

          <div className="relative aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="group relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl shadow-soft-glow"
              >
                <span className="absolute inset-0 rounded-full bg-accent-soft opacity-50 group-hover:opacity-80 transition" />
                <span className="relative ml-1 inline-block h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-accent" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-black/40 px-4 py-2 text-[11px] text-slate-200 backdrop-blur-xl border border-white/5">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-[10px] font-semibold">
                  4K
                </span>
                <div>
                  <p className="font-medium">Showreel</p>
                  <p className="text-[10px] text-slate-400">
                    Replace with your Vimeo / YouTube embed
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-slate-400">
                01 · Highlights
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={workSectionRef}
        id="work"
        className="section-max space-y-6 pb-16 pt-4 md:pb-20"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Selected work
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-semibold text-slate-50">
              Narratives cut to the beat
            </h2>
          </div>
          <p className="max-w-xs text-xs text-slate-400">
            A snapshot of recent projects. Each piece is edited with a focus on
            story, pacing and sound — not just transitions.
          </p>
        </div>

        <div
          ref={projectCardsRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              data-project-card
              className="group glass-panel flex flex-col overflow-hidden rounded-2xl border border-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f2937_0,transparent_55%)] opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300 border border-white/10 group-hover:border-accent/60 group-hover:text-accent group-hover:bg-black/80 transition">
                    Preview
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                  {project.year}
                </p>
                <h3 className="text-sm font-medium text-slate-50">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400">{project.role}</p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Watch case study</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        ref={aboutSectionRef}
        className="section-max grid gap-10 pb-20 pt-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            About
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Editing that feels invisible, but unforgettable
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            From first cut to final master, I&apos;m obsessed with details that
            most people never notice — the one-frame trim that sharpens a beat,
            a color shift that sells the mood, the sound cue that makes a scene
            land. I collaborate closely with directors, brands and artists to
            shape footage into something bold, clear and emotionally sharp.
          </p>
          <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                Focus
              </p>
              <p className="mt-1 text-sm">Story-first, pace-driven edits</p>
            </div>
            <div className="glass-panel rounded-2xl px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                Tools
              </p>
              <p className="mt-1 text-sm">
                Premiere Pro / DaVinci Resolve / After Effects
              </p>
            </div>
            <div className="glass-panel rounded-2xl px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                Formats
              </p>
              <p className="mt-1 text-sm">
                Social, music videos, branded, doc-style
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-panel rounded-3xl border border-white/5 p-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              Services
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>End-to-end editing for campaigns, music videos and short films</li>
              <li>Rhythm and pacing for social-first content</li>
              <li>Color look / basic grading to match your visual language</li>
              <li>Sound design, SFX and temp mix to support the story</li>
            </ul>
          </div>
          <div className="glass-panel rounded-3xl border border-accent/20 p-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">
              Collaborations
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Open to working with studios, agencies and independent artists
              worldwide.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Remote-friendly, time-zone flexible and comfortable jumping into
              existing timelines or building from raw footage.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contactSectionRef}
        className="section-max border-t border-white/[0.04] pb-16 pt-10 md:pt-12"
      >
        <div className="glass-panel flex flex-col gap-6 rounded-3xl border border-white/5 bg-gradient-to-r from-black/60 via-surface/80 to-black/70 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Next project
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-50">
              Share your footage, let&apos;s cut something sharp
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Send a link to your footage, a rough brief and any references you
              love. I&apos;ll respond with ideas, timelines and an honest fit.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-black shadow-soft-glow hover:brightness-110 transition"
            >
              Email me your project
            </a>
            <div className="text-xs text-slate-400">
              <p>Or connect on socials:</p>
              <div className="mt-1 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="text-slate-300 hover:text-accent transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-accent transition"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-accent transition"
                >
                  Vimeo
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-6 flex items-center justify-between text-[11px] text-slate-500">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span className="hidden sm:inline">
            Built with Next.js · Designed for dark rooms & bright screens
          </span>
        </footer>
      </section>
    </main>
  );
}


