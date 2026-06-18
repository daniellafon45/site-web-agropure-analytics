import { PanelFrame } from "./shared";

type PanelProps = { data?: Record<string, unknown> };

export function NationalPlatformPanel({ data }: PanelProps) {
  const fieldLabel = String(data?.fieldLabel ?? "");
  const ndvi = String(data?.ndvi ?? "0.62");
  const risk = Number(data?.risk ?? 72);
  const riskLabel = String(data?.riskLabel ?? "Risk");

  return (
    <PanelFrame className="bg-gradient-to-br from-emerald-900/20 via-green-800/10 to-amber-900/10">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 p-2 opacity-80">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-sm ${i % 3 === 0 ? "bg-amber-500/40" : i % 2 === 0 ? "bg-emerald-600/50" : "bg-lime-500/30"}`}
          />
        ))}
      </div>
      <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-black/10 bg-white/90 p-2 text-[9px] shadow-sm">
        <div className="font-medium text-black">{fieldLabel}</div>
        <div className="mt-1 flex justify-between text-black/60">
          <span>NDVI {ndvi}</span>
          <span className="text-amber-700">
            {riskLabel} {risk}
          </span>
        </div>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-black/10">
          <div className="h-full w-[62%] rounded-full bg-emerald-600" />
        </div>
      </div>
      <svg className="absolute right-3 top-3 h-12 w-16 opacity-70" viewBox="0 0 64 32" aria-hidden>
        <polyline fill="none" stroke="#1b5e3b" strokeWidth="2" points="0,24 12,18 24,20 36,10 48,14 64,6" />
      </svg>
    </PanelFrame>
  );
}

export function SurveyDigitizationPanel({ data }: PanelProps) {
  const progress = Number(data?.progress ?? 67);
  const forms = String(data?.forms ?? "");
  const deployments = String(data?.deployments ?? "");
  const formsLabel = String(data?.formsLabel ?? "");
  const deploymentsLabel = String(data?.deploymentsLabel ?? "");

  return (
    <PanelFrame className="flex items-center gap-3 p-3">
      <div className="relative flex size-16 shrink-0 items-center justify-center">
        <svg className="size-full -rotate-90" viewBox="0 0 36 36" aria-hidden>
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="3" />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#1b5e3b"
            strokeWidth="3"
            strokeDasharray={`${progress} ${100 - progress}`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xs font-medium text-black">{progress}%</span>
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex justify-between text-[10px]">
          <span className="text-black/50">{formsLabel}</span>
          <span className="font-medium text-black">{forms}</span>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-black/50">{deploymentsLabel}</span>
          <span className="font-medium text-black">{deployments}</span>
        </div>
        <div className="relative h-14 rounded-md bg-emerald-900/10">
          {[
            [20, 30],
            [45, 55],
            [70, 25],
            [55, 70],
            [80, 45],
          ].map(([x, y], i) => (
            <span
              key={i}
              className={`absolute size-2 rounded-full ${i < 3 ? "bg-emerald-600" : "bg-amber-500"}`}
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          ))}
        </div>
      </div>
    </PanelFrame>
  );
}

export function TraceabilityPanel({ data }: PanelProps) {
  const lotId = String(data?.lotId ?? "");
  const chainLabel = String(data?.chainLabel ?? "");

  return (
    <PanelFrame className="bg-slate-100/50">
      <svg className="absolute inset-0 h-full w-full p-4" viewBox="0 0 200 120" aria-hidden>
        <path
          d="M20,80 Q60,20 100,60 T180,40"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        {[
          [20, 80],
          [60, 35],
          [100, 60],
          [140, 50],
          [180, 40],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i === 4 ? 6 : 4} fill={i === 4 ? "#f97316" : "#fb923c"} />
        ))}
      </svg>
      <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 rounded-lg border border-black/10 bg-white/90 px-2 py-1.5 text-[9px]">
        <span className="size-5 rounded bg-emerald-100 text-center leading-5 text-emerald-800">✓</span>
        <div>
          <div className="font-medium text-black">{lotId}</div>
          <div className="text-black/50">{chainLabel}</div>
        </div>
      </div>
    </PanelFrame>
  );
}

export function WaterReservoirsPanel({ data }: PanelProps) {
  const stock = String(data?.stock ?? "58%");
  const reservoirs = Number(data?.reservoirs ?? 42);
  const normalBadge = String(data?.normalBadge ?? "");
  const criticalBadge = String(data?.criticalBadge ?? "");
  const reservoirsLabel = String(data?.reservoirsLabel ?? "");
  const stockLabel = String(data?.stockLabel ?? "");

  return (
    <PanelFrame>
      <div className="absolute inset-0 p-3">
        <div className="mb-2 flex gap-1.5 text-[9px]">
          <span className="rounded bg-emerald-600/80 px-1.5 py-0.5 text-white">{normalBadge}</span>
          <span className="rounded bg-amber-500/80 px-1.5 py-0.5 text-white">{criticalBadge}</span>
        </div>
        <div className="relative h-16 rounded-md bg-blue-900/10">
          {[
            ["20%", "30%", "bg-emerald-500"],
            ["50%", "45%", "bg-amber-500"],
            ["75%", "35%", "bg-red-500"],
          ].map(([l, t, c], i) => (
            <span
              key={i}
              className={`absolute size-3 rounded-full ${c}`}
              style={{ left: l, top: t }}
            />
          ))}
        </div>
        <div className="mt-2 flex items-end justify-between gap-1 px-1">
          {[72, 65, 58, 52, 48, 44, 40].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-blue-600/50" style={{ height: `${h * 0.35}px` }} />
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[9px] text-black/50">
          <span>
            {reservoirs} {reservoirsLabel}
          </span>
          <span className="font-medium text-black">
            {stockLabel} {stock}
          </span>
        </div>
      </div>
    </PanelFrame>
  );
}

export function CropPracticesPanel({ data }: PanelProps) {
  const sheets = (data?.sheets as string[]) ?? [];
  const detailTitle = String(data?.detailTitle ?? "");
  const sheetsCount = String(data?.sheetsCount ?? "");

  return (
    <PanelFrame className="p-2">
      <div className="grid h-full grid-cols-2 grid-rows-2 gap-1.5">
        {sheets.map((title, i) => (
          <div
            key={title}
            className={`rounded-md border border-black/10 p-1.5 ${i === 0 ? "bg-emerald-50" : "bg-white/80"}`}
          >
            <div className="mb-1 h-6 rounded bg-gradient-to-br from-emerald-200/60 to-green-300/40" />
            <div className="text-[8px] font-medium text-black">{title}</div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-1.5 right-1.5 rounded border border-black/10 bg-white/95 px-2 py-1 text-[8px]">
        <span className="font-medium text-black">{detailTitle}</span>
        <span className="ml-1 text-black/50">· {sheetsCount}</span>
      </div>
    </PanelFrame>
  );
}

export function StoneCordonsPanel({ data }: PanelProps) {
  const traces = Number(data?.traces ?? 5);
  const km = String(data?.km ?? "12.45");
  const erosionRisk = String(data?.erosionRisk ?? "");
  const tracesLabel = String(data?.tracesLabel ?? "");
  const erosionReduction = String(data?.erosionReduction ?? "");

  return (
    <PanelFrame className="bg-gradient-to-br from-amber-100/40 to-stone-200/30">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-2 rounded bg-stone-400/20" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120" aria-hidden>
          <path d="M10,90 Q50,30 100,70 T190,50" fill="none" stroke="#78716c" strokeWidth="2" />
          <path d="M10,70 Q60,40 110,80 T190,60" fill="none" stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
      </div>
      <div className="absolute left-2 top-2 rounded bg-red-500/20 px-1.5 py-0.5 text-[8px] text-red-900">
        {erosionRisk}
      </div>
      <div className="absolute bottom-2 left-2 right-2 flex justify-between rounded-lg bg-white/90 px-2 py-1 text-[9px]">
        <span>
          <strong>{traces}</strong> {tracesLabel}
        </span>
        <span>{km} km</span>
        <span className="text-emerald-700">{erosionReduction}</span>
      </div>
    </PanelFrame>
  );
}
