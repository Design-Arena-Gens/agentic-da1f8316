"use client";

import { useMemo, useState } from "react";
import { generateActionPlan } from "@/lib/agent";

const laneColors = ["border-sky-200", "border-emerald-200", "border-amber-200"];

export function PlanComposer() {
  const [brief, setBrief] = useState(
    "Scale UAE GMV to $2M/mo while maintaining <2% SLA breaches and lowering paid CAC by 15%."
  );
  const [submittedBrief, setSubmittedBrief] = useState(brief);
  const plan = useMemo(() => generateActionPlan(submittedBrief), [submittedBrief]);

  return (
    <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="basis-2/5 space-y-4">
          <header>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Blueprint composer
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Describe your mandate. The agent translates it into orchestrated swimlanes,
              automations, and guardrails ready for deployment.
            </p>
          </header>
          <form
            className="space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmittedBrief(brief);
            }}
          >
            <label className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              Mission statement
              <textarea
                value={brief}
                onChange={(event) => setBrief(event.target.value)}
                className="min-h-[120px] rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 shadow-inner outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-sky-500 dark:focus:ring-sky-900/40"
                placeholder="Move 80% of support tickets to self-healing while protecting NPS."
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Generate deployment plan
            </button>
          </form>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Agent uses contextual retrieval across order data, marketing cohorts, and
            logistics providers. Guardrails enforce brand tone, finance policies, and legal
            requirements.
          </p>
        </div>
        <div className="basis-3/5 space-y-4 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-900/50">
          <header className="space-y-2">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {plan.headline}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {plan.narrative}
            </p>
          </header>
          <div className="space-y-4">
            {plan.swimlanes.map((lane, index) => (
              <article
                key={lane.name}
                className={`space-y-3 rounded-2xl border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 ${laneColors[index] ?? "border-zinc-200"}`}
              >
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    {lane.name}
                  </h4>
                  <p className="text-base font-medium text-zinc-900 dark:text-zinc-50">
                    {lane.focus}
                  </p>
                </div>
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                    Automations
                  </h5>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                    {lane.automations.map((automation) => (
                      <li key={automation} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" aria-hidden />
                        <span>{automation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                    Guardrails
                  </h5>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                    {lane.guardrails.map((guardrail) => (
                      <li key={guardrail} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" aria-hidden />
                        <span>{guardrail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

