export const dynamic = 'force-static';

const Swatch = ({ name, className }: { name: string; className: string }) => (
  <div className="flex items-center gap-3">
    <div className={`h-9 w-9 rounded-md border border-black/10 ${className}`} />
    <code className="text-body text-muted-text">{name}</code>
  </div>
);

const TableDemo = () => {
  const rows = [
    ['INV001', 'Paid'],
    ['INV002', 'Pending'],
    ['INV003', 'Unpaid'],
    ['INV004', 'Paid'],
    ['INV005', 'Paid'],
    ['INV006', 'Pending'],
  ];

  return (
    <div className="rounded-2xl overflow-hidden bg-card border border-card-border shadow-[0_1px_0_rgba(0,0,0,.02)]">
      {/* header bar with rounded top because of overflow-hidden */}
      <div className="bg-green-60 heading-ero-text">
        <div className="grid grid-cols-2 px-6 py-3 text-h4 text-white font-bold"> 
          <div>Tier</div>
          <div>Benefits</div>
        </div>
      </div>

      {/* rows with thin teal dividers */}
      <ul className="divide-y divide-table-cell-divider">
        {rows.map(([tier, status]) => (
          <li key={tier} className="grid grid-cols-2 px-6 py-4 text-table-text">
            <div>{tier}</div>
            <div>{status}</div>
          </li>
        ))}
      </ul>

      {/* caption/footer strip */}
      <div className="bg-green-50 text-center text-body py-3 text-text">
        A list of your recent invoices.
      </div>
    </div>
  );
}

export default function TokensPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-12">
      <h1 className="heading-1">Design Tokens</h1>

      {/* Colors — semantic */}
      <section className="space-y-4">
        <h2 className="text-h3">Semantic colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <Swatch name="bg-background" className="bg-background" />
          <Swatch name="text-foreground" className="bg-foreground" />
          <Swatch name="primary" className="bg-primary" />
          <Swatch name="secondary" className="bg-secondary" />
          <Swatch name="accent" className="bg-accent" />
          <Swatch name="card" className="bg-card" />
          <Swatch name="card-border" className="bg-card-border" />
          <Swatch name="table-border" className="bg-table-border" />
          <Swatch name="table-header" className="bg-table-header" />
        </div>
      </section>

      {/* Colors — brand scales */}
      <section className="space-y-4">
        <h2 className="text-h3">Brand scales</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {['20','40','50','60','80','100'].map(step => (
            <Swatch key={`green-${step}`} name={`green-${step}`} className={`bg-green-${step}`} />
          ))}
          {['20','40','50','60','80','100'].map(step => (
            <Swatch key={`teal-${step}`} name={`teal-${step}`} className={`bg-teal-${step}`} />
          ))}
          {['20','40','50','60','80','100'].map(step => (
            <Swatch key={`orange-${step}`} name={`orange-${step}`} className={`bg-orange-${step}`} />
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <h2 className="text-h3">Typography</h2>
        <div className="space-y-2">
          <div className="heading-1">Header 1 / Bold / 34</div>
          <div className="heading-2">Header 2 / Bold / 27</div>
          <div className="text-h3">Header 3 / Semibold / 20</div>
          <div className="text-h4">Header 4 / Medium / 16</div>
          <p className="text-body-md">Body (Medium) / 15 — The quick brown fox jumps over the lazy dog.</p>
          <p className="text-body">Body / 13.5 — The quick brown fox jumps over the lazy dog.</p>
          <p className="text-link">Link / 13 — (style color as needed)</p>
          <p className="text-body-sm">Body Small / 11.5</p>
          <div
            className="inline-grid grid-cols-3 mx-auto gap-4"
          >
            {/* primary */}
            <button className="btn-primary">+ Button +</button>
            <button className="btn-primary hover:btn-pressed">+ Button +</button>
            <button className="btn-primary" disabled>+ Button +</button>

            {/* secondary */}
            <button className="btn-secondary">+ Button +</button>
            <button className="btn-secondary hover:btn-pressed">+ Button +</button>
            <button className="btn-secondary" disabled>+ Button +</button>

            {/* outline */}
            <button className="btn-secondary-outline">+ Button +</button>
            <button className="btn-secondary-outline hover:btn-pressed">+ Button +</button>
            <button className="btn-secondary-outline" disabled>+ Button +</button>
          </div>
        </div>
      </section>

      {/* Cards example */}
      <section className="space-y-4">
        <h2 className="text-h3">Card + table tokens</h2>
        <div className="rounded-xl border border-card-border bg-card p-6">
          <div className="grid grid-cols-3 gap-3 text-body">
            <div className="font-semibold text-table-text">Header</div>
            <div className="font-semibold text-table-text">Header</div>
            <div className="font-semibold text-table-text">Header</div>
            <div className="border-t border-table-border py-2">Cell</div>
            <div className="border-t border-table-border py-2">Cell</div>
            <div className="border-t border-table-border py-2">Cell</div>
          </div>
        </div>

        <TableDemo />
      </section>
    </main>
  );
}
