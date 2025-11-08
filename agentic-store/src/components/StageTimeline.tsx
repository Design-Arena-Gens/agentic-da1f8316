import { executionStages } from "@/lib/agent";

const statusStyles = {
  "not-started": "bg-zinc-500/10 text-zinc-500",
  running: "bg-sky-500/10 text-sky-600",
  done: "bg-emerald-500/10 text-emerald-600",
} as const;

export function StageTimeline() {
  return (
    <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <header className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Automation runway
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            The agent structures implementation into governed stages.
          </p>
        </div>
        <button className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-600 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900">
          Download playbook
        </button>
      </header>
      <ol className="space-y-6">
        {executionStages.map((stage) => (
          <li
            key={stage.id}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-600 dark:bg-sky-500/20 dark:text-sky-300">
                  {stage.title[0]}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {stage.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {stage.owner}
                  </p>
                </div>
              </div>
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[stage.status]}`}
              >
                {stage.status === "done"
                  ? "Completed"
                  : stage.status === "running"
                  ? "In motion"
                  : "Pending"}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {stage.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              {stage.artifacts.map((artifact) => (
                <span
                  key={artifact}
                  className="rounded-full border border-dashed border-zinc-300 px-3 py-1 dark:border-zinc-700"
                >
                  {artifact}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

