"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

const SYSTEM_STEPS = [
  {
    title: "Capture",
    detail: "Notes, meetings, decisions, and the messy context around the work",
  },
  {
    title: "Distill",
    detail: "Living digests that keep the useful context current",
  },
  {
    title: "Apply",
    detail: "Skills and automations built around recurring leadership work",
  },
  {
    title: "Act",
    detail: "Plans, artifacts, decisions, and follow-through written back",
  },
];

const SKILLS = [
  {
    title: "Director-builder weekly review",
    detail:
      "Turns current commitments, people needs, and workstream context into a focused week with one bounded builder contribution.",
  },
  {
    title: "Product design partner",
    detail:
      "Moves a product problem from evidence and scenarios through prototyping, validation, and handoff.",
  },
  {
    title: "Technical sensemaking partner",
    detail:
      "Builds enough technical understanding to support better product and leadership decisions.",
  },
];

export default function LeadershipOS() {
  const theme = useTheme();

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/tinkering"
          className="animate-fade-in inline-block text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: theme.muted }}
        >
          &larr; Back to My tinkering
        </Link>

        <h1
          className="animate-fade-in-up mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: theme.text }}
        >
          My leadership OS
        </h1>
        <p
          className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ color: theme.muted }}
        >
          A private operating system I built to turn leadership context into
          useful action. What started as a daily debrief has grown into living
          context, custom skills, and automations that help me plan, design, and
          make sense of complex work.
        </p>

        <div
          className="animate-fade-in-up animation-delay-400 mt-10 overflow-hidden rounded-2xl p-5 md:p-7"
          style={{
            background: `linear-gradient(135deg, ${theme.cardBg}, ${theme.accent}18)`,
            border: `1px solid ${theme.accent}30`,
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: theme.muted }}
          >
            A loop that compounds
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {SYSTEM_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl p-4"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.accent}25`,
                }}
              >
                <span
                  className="font-mono text-[0.65rem] font-semibold"
                  style={{ color: theme.accent }}
                >
                  0{index + 1}
                </span>
                <h2
                  className="mt-2 font-serif text-lg"
                  style={{ color: theme.text }}
                >
                  {step.title}
                </h2>
                <p
                  className="mt-2 text-xs leading-relaxed"
                  style={{ color: theme.muted }}
                >
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-400 mt-12 space-y-10">
          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              It started with a daily debrief
            </h2>
            <div
              className="mt-3 space-y-4 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              <p>
                Daily Debriefer began as a small app for capturing wins,
                tensions, energy, and relationship dynamics while they were
                still fresh. It helped me pause long enough to see work that
                would otherwise disappear into the pace of the day.
              </p>
              <p>
                The journal solved capture, but I wanted the context to keep
                working after I wrote it down. That question became the starting
                point for a much larger system.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              From journal to operating system
            </h2>
            <div
              className="mt-3 space-y-4 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              <p>
                I moved the work into a private GitHub repository that holds
                decisions, commitments, workstream context, and notes about the
                people and partnerships I support. Raw logs preserve what
                happened. Living digests keep the working context sharp.
              </p>
              <p>
                Copilot can use that context without asking me to reconstruct it
                every time. The result is one system of record and one place to
                think, build, and follow through.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              Skills turn context into action
            </h2>
            <p
              className="mt-3 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              Memory is useful, but it is not the outcome. I built skills around
              recurring work so the system can help me make a decision, shape an
              artifact, or choose what deserves attention next.
            </p>
            <div className="mt-5 grid gap-4">
              {SKILLS.map((skill) => (
                <div
                  key={skill.title}
                  className="rounded-xl p-5"
                  style={{
                    background: theme.cardBg,
                    border: `1px solid ${theme.accent}20`,
                  }}
                >
                  <h3
                    className="font-serif text-xl"
                    style={{ color: theme.text }}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed md:text-base"
                    style={{ color: theme.muted }}
                  >
                    {skill.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              Automations keep the loop moving
            </h2>
            <p
              className="mt-3 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              Recurring reviews and maintenance can now happen on a schedule
              instead of depending on me to remember the right prompt. The
              system gathers the current evidence, prepares a useful starting
              point, and leaves the judgment with me.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              What I designed
            </h2>
            <p
              className="mt-3 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              The interesting part is not a single prompt. It is the information
              architecture, the boundaries between raw and distilled context,
              the contracts for each skill, and the writeback loop that makes
              the system more useful over time. I am designing how a set of
              AI tools can work with me without taking judgment away from me.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              What I am learning
            </h2>
            <p
              className="mt-3 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              Good context compounds when it stays current and leads somewhere.
              The value is not remembering more. It is turning evidence into a
              better decision or next action, then writing the result back so
              the system gets sharper.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              Built with
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[
                "GitHub Copilot",
                "GitHub",
                "Markdown",
                "Custom skills",
                "Automations",
                "Connected tools",
              ].map((tech) => (
                <li
                  key={tech}
                  className="rounded-full px-3 py-1 text-sm"
                  style={{
                    border: `1px solid ${theme.accent}30`,
                    color: theme.muted,
                  }}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <span
              className="inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider"
              style={{
                color: theme.linkAccent,
                border: `1px solid ${theme.lineColor}`,
              }}
            >
              Private by design
            </span>
            <p
              className="mt-3 max-w-lg text-sm leading-relaxed"
              style={{ color: theme.muted }}
            >
              The system contains real work and people context, so this case
              study uses a sanitized model rather than live data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
