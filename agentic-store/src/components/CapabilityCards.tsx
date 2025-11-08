import { agentCapabilities } from "@/lib/agent";

export function CapabilityCards() {
  return (
    <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Capability pods
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Each pod blends connectors, agents, and human approvals.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="rounded-full border border-zinc-200 px-3 py-1 dark:border-zinc-700">
            Shopify · WooCommerce · Amazon
          </span>
          <span className="rounded-full border border-zinc-200 px-3 py-1 dark:border-zinc-700">
            Meta · Google · TikTok
          </span>
        </div>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {agentCapabilities.map((capability) => (
          <article
            key={capability.id}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {capability.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{capability.subtitle}</p>
            </div>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              {capability.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <button className="mt-auto w-fit rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50 dark:border-sky-900/50 dark:bg-slate-950 dark:text-sky-300 dark:hover:border-sky-800 dark:hover:bg-sky-950/40">
              View automations
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

