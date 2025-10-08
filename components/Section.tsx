import { ReactNode } from "react";

export default function Section({ id, title, children, subtitle }: { id: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 md:py-24 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-3xl">{subtitle}</p>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}

