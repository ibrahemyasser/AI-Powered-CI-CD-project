type Insight = {
  title: string;
  value: string;
  hint?: string;
};

const mockInsights: Insight[] = [
  { title: "Predicted Build Time", value: "20 mins", hint: "Based on last 50 runs" },
  { title: "Commit Risk", value: "High", hint: "Trigger extra tests" },
  { title: "Flaky Tests Identified", value: "3 suites", hint: "Quarantine suggested" },
  { title: "Tests Skipped", value: "5 cases", hint: "Low-impact components" },
];

export default function InsightsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {mockInsights.map((insight) => (
        <div
          key={insight.title}
          className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-white/5 hover:shadow-glow transition"
        >
          <div className="text-sm text-gray-600 dark:text-gray-300">{insight.title}</div>
          <div className="mt-2 text-2xl font-semibold">{insight.value}</div>
          {insight.hint ? (
            <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{insight.hint}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

