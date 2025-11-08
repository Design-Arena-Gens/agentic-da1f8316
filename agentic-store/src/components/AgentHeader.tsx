export function AgentHeader() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-100 bg-gradient-to-br from-zinc-50 via-white to-sky-50 p-10 shadow-sm dark:border-zinc-800 dark:from-zinc-900/70 dark:via-zinc-900 dark:to-slate-900">
      <div className="absolute right-12 top-12 hidden h-32 w-32 rounded-full bg-sky-200/80 blur-3xl md:block dark:bg-sky-500/20" />
      <div className="absolute -left-16 bottom-8 hidden h-40 w-40 rounded-full bg-emerald-200/60 blur-3xl md:block dark:bg-emerald-500/10" />
      <div className="relative flex flex-col gap-6">
        <span className="w-fit rounded-full border border-sky-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-900/50 dark:bg-slate-950 dark:text-sky-300">
          Autonomous Commerce Agent
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Run your entire e‑commerce operation with an orchestrated AI agent.
        </h1>
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          Spin up a command centre that supervises catalogue health, fulfilment, support,
          finance, and growth loops. Human teammates stay in control while the agent
          executes playbooks, escalates anomalies, and keeps KPIs green.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          {[
            "Multi-channel catalog sync",
            "Ops & logistics automation",
            "Lifecycle & ads intelligence",
            "Finance & CX guardrails",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-200 px-4 py-1 dark:border-zinc-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

