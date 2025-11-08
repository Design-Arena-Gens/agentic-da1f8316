import { agentTasks, AgentTask } from "@/lib/agent";

const domainStyles: Record<AgentTask["domain"], string> = {
  inventory: "bg-amber-500/10 text-amber-600",
  orders: "bg-indigo-500/10 text-indigo-600",
  marketing: "bg-rose-500/10 text-rose-600",
  support: "bg-purple-500/10 text-purple-600",
  finance: "bg-emerald-500/10 text-emerald-600",
  logistics: "bg-sky-500/10 text-sky-600",
};

const statusColor: Record<AgentTask["status"], string> = {
  "in-progress": "bg-sky-500/10 text-sky-600",
  queued: "bg-zinc-500/10 text-zinc-600",
  completed: "bg-emerald-500/10 text-emerald-600",
  blocked: "bg-rose-500/10 text-rose-600",
};

const priorityColor: Record<AgentTask["priority"], string> = {
  high: "text-rose-500",
  medium: "text-amber-500",
  low: "text-zinc-500",
};

export function TaskGrid() {
  return (
    <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <header className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Command queue
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Agent maintains human-in-the-loop tasks with live ETAs.
          </p>
        </div>
        <button className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-600 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900">
          Sync with Slack
        </button>
      </header>
      <div className="grid gap-4 xl:grid-cols-2">
        {agentTasks.map((task) => (
          <article
            key={task.id}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  {task.id}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {task.title}
                </h3>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${domainStyles[task.domain]}`}
                >
                  {task.domain}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[task.status]}`}
                >
                  {task.status}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {task.impact}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span className={priorityColor[task.priority]}>Priority: {task.priority}</span>
              <span>ETA: {task.etaHours} hrs</span>
              <span>Assignee: {task.assignee}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

