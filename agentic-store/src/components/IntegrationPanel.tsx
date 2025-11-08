const integrations = [
  {
    category: "Storefronts",
    items: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
  },
  {
    category: "Marketplaces",
    items: ["Amazon", "Noon", "Namshi", "Carrefour"],
  },
  {
    category: "Logistics",
    items: ["Aramex", "Fetchr", "DHL", "LastMile"],
  },
  {
    category: "Finance & Support",
    items: ["Stripe", "Tabby", "Zendesk", "Freshdesk"],
  },
];

export function IntegrationPanel() {
  return (
    <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <header className="mb-6 space-y-2">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Connectors & knowledge graph
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Agent syncs structured and conversational data into a commerce graph for
          retrieval augmented reasoning.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {integrations.map((group) => (
          <article
            key={group.category}
            className="space-y-3 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900/50"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-300">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200 px-3 py-1 dark:border-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

