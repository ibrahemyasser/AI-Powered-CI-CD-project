export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black" />
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-primary-500">Bringing Intelligence to DevOps Workflows</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-gradient">AI-Powered CI/CD Pipeline Optimization</span>
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A graduation project that fuses DevOps automation with AI-driven analytics to make pipelines faster, cheaper, and more reliable.
        </p>
        <div className="mt-8">
          <a href="#overview" className="inline-block rounded-md bg-primary px-6 py-3 font-medium text-black shadow-glow hover:opacity-90 transition">
            Learn More
          </a>
        </div>
        <div className="pointer-events-none select-none mt-16 opacity-80">
          <div className="mx-auto h-40 w-full max-w-3xl rounded-2xl border border-cyan-200/30 dark:border-cyan-800/40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        </div>
      </div>
    </section>
  );
}

