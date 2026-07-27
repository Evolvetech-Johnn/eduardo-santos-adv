export default function SealBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center w-24 h-24 rounded-full border border-brass/50 bg-transparent shrink-0 ${className}`}
    >
      <div className="absolute inset-1 rounded-full border border-dashed border-brass/30"></div>
      <div className="text-center px-2">
        <span className="block font-mono text-[10px] uppercase text-brass tracking-wider leading-tight">
          Registro
        </span>
        <span className="block font-mono text-xs font-bold text-brass uppercase mt-1">
          OAB/PR
        </span>
      </div>
    </div>
  );
}
