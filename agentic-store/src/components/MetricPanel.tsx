import { agentMetrics, AgentMetric } from "@/lib/agent";

type MetricPanelProps = {
  metrics?: AgentMetric[];
};

const directionCopy: Record<AgentMetric["direction"], string> = {
  up: "▲",
  down: "▼",
};

const directionColor: Record<AgentMetric["direction"], string> = {
  up: "text-emerald-500",
  down: "text-rose-500",
};

export function MetricPanel({ metrics = agentMetrics }: MetricPanelProps) {
  return (
    <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Live KPI cockpit
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Agent ingests store, ads & ops telemetry every 5 minutes.
          </p>
        </div>
        <button className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-600 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900">
          View audit trail
        </button>
      </header>
      <dl className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="flex flex-col gap-2 rounded-2xl border border-zinc-100 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {metric.label}
            </dt>
            <dd className="text-2xl font-semibold text-zinc-900 dark:text-white">
              {metric.value}
            </dd>
            <span
              className={`text-xs font-semibold ${directionColor[metric.direction]}`}
            >
              {directionCopy[metric.direction]} {metric.change}
            </span>
          </div>
        ))}
      </dl>
    </section>
  );
}

