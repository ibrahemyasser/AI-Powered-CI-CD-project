import { Code, Hammer, FlaskConical, Rocket, Activity, RefreshCcw } from "lucide-react";

const stages = [
  { label: "Code", Icon: Code },
  { label: "Build", Icon: Hammer },
  { label: "Test", Icon: FlaskConical },
  { label: "Deploy", Icon: Rocket },
  { label: "Monitor", Icon: Activity },
  { label: "Feedback", Icon: RefreshCcw },
] as const;

export default function PipelineDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[720px] flex items-center justify-between gap-4 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/40 dark:bg-white/5">
        {stages.map(({ label, Icon }, idx) => (
          <div key={label} className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-400 grid place-items-center">
                <Icon size={22} />
              </div>
              <span className="mt-2 text-xs font-medium">{label}</span>
            </div>
            {idx < stages.length - 1 && (
              <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400/60 to-blue-500/60" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

