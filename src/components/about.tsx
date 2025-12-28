import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Trophy,
  CalendarDays,
  Users,
  Sparkles,
  BookOpen,
  Rocket,
} from "lucide-react";

export default function About() {
  const offers = [
    {
      title: "Workshops (Build Mode)",
      desc: "Hands-on sessions that end with code shipped — not just notes.",
      Icon: Code2,
    },
    {
      title: "Hackathons & Sprints",
      desc: "Team up, build fast, demo loud. Best way to level up quickly.",
      Icon: Trophy,
    },
    {
      title: "Events & Meetups",
      desc: "Talks, demos, collabs and fun sessions with real builders.",
      Icon: CalendarDays,
    },
    {
      title: "Mentorship",
      desc: "Roadmaps, reviews, and guidance from seniors & mentors.",
      Icon: Users,
    },
    {
      title: "Projects & Showcases",
      desc: "Portfolio-ready builds with feedback + public showcasing.",
      Icon: Sparkles,
    },
    {
      title: "Resources & Tracks",
      desc: "Curated paths so you don’t get stuck in tutorial hell.",
      Icon: BookOpen,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background: subtle dots + blue blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #1a73e8 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#1a73e8]/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#1a73e8]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        {/* HERO (Full width) */}
        <div className="max-w-4xl">
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            About <span className="text-[#1a73e8]">TU-Codes</span>
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600">
            TU Codes is a student-driven community where learning happens by building.
            Workshops, hackathons, projects, mentorship — and a lot of fun along the way.
          </p>
        </div>

        {/* MISSION / VISION */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <p className="text-xs font-semibold text-[#1a73e8]">MISSION</p>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              Make students confident builders.
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              We help students move from tutorials to real projects through practice, mentorship,
              and community momentum.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <p className="text-xs font-semibold text-[#1a73e8]">VISION</p>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              A high-signal tech culture on campus.
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              A place where students collaborate, ship consistently, and get industry-ready together.
            </p>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="mt-14">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">What we do</h2>
            <p className="mt-2 text-sm text-gray-600">
              Fun, fast, practical — and always focused on output.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#1a73e8] ring-1 ring-blue-100">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Built for students
                  </span>
                  <span className="text-xs font-semibold text-[#1a73e8] opacity-0 transition group-hover:opacity-100">
                    Learn more <ArrowRight className="inline h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold text-gray-900">
                Ready to build with the club?
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Join TU Codes to get updates on sessions, events, hackathons, and project collabs.
              </p>
            </div>

            <Link
              href="/join"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1558b0]"
            >
              Join now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
