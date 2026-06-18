import { PanelFrame } from "./shared";

type PanelProps = { data?: Record<string, unknown> };

type PriceRow = { product: string; price: string; change: string };
type SensorRow = { label: string; value: string; status: string };

export function PestDiagnosticPanel({ data }: PanelProps) {
  const diagnosis = String(data?.diagnosis ?? "");
  const confidence = Number(data?.confidence ?? 85);
  const reports = Number(data?.reports ?? 342);
  const photoPlaceholder = String(data?.photoPlaceholder ?? "");
  const aiLabel = String(data?.aiLabel ?? "AI");
  const reportsLabel = String(data?.reportsLabel ?? "");

  return (
    <PanelFrame className="flex gap-2 p-2">
      <div className="flex w-1/3 flex-col gap-1">
        <div className="flex flex-1 items-center justify-center rounded-md border border-dashed border-black/20 bg-green-50/80 px-1 text-center text-[8px] text-black/40">
          {photoPlaceholder}
        </div>
        <div className="rounded-md bg-emerald-900/90 px-1.5 py-1 text-center text-[8px] text-white">
          {aiLabel} {confidence}%
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <div className="text-[9px] font-medium text-black">{diagnosis}</div>
          <div className="text-[8px] text-black/50">
            {reports} {reportsLabel}
          </div>
        </div>
        <div className="relative h-16 rounded-md bg-emerald-900/10">
          {[
            [25, 40, "bg-emerald-500"],
            [55, 30, "bg-amber-500"],
            [75, 55, "bg-red-500"],
          ].map(([x, y, c], i) => (
            <span
              key={i}
              className={`absolute flex size-5 items-center justify-center rounded-full text-[7px] text-white ${c}`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {i + 2}
            </span>
          ))}
        </div>
      </div>
    </PanelFrame>
  );
}

export function AgCalculatorPanel({ data }: PanelProps) {
  const crop = String(data?.crop ?? "");
  const area = String(data?.area ?? "");
  const npk = String(data?.npk ?? "");
  const cropLabel = String(data?.cropLabel ?? "");
  const plotLabel = String(data?.plotLabel ?? "");
  const npkLabel = String(data?.npkLabel ?? "");

  return (
    <PanelFrame className="p-2">
      <div className="grid h-full grid-rows-[1fr_auto] gap-2">
        <div className="space-y-1.5">
          <div className="flex gap-2 text-[9px]">
            <span className="rounded border border-black/10 bg-white/80 px-2 py-1 text-black/50">{cropLabel}</span>
            <span className="rounded border border-black/10 bg-white px-2 py-1 font-medium text-black">{crop}</span>
          </div>
          <div className="flex gap-2 text-[9px]">
            <span className="rounded border border-black/10 bg-white/80 px-2 py-1 text-black/50">{plotLabel}</span>
            <span className="rounded border border-black/10 bg-white px-2 py-1 font-medium text-black">{area}</span>
          </div>
          <div className="h-10 rounded-md bg-gradient-to-br from-amber-100/50 to-green-200/30" />
        </div>
        <div className="rounded-lg border border-emerald-200 bg-emerald-50/90 px-3 py-2 text-center">
          <div className="text-[8px] uppercase tracking-wider text-black/50">{npkLabel}</div>
          <div className="text-lg font-light text-emerald-900">{npk}</div>
        </div>
      </div>
    </PanelFrame>
  );
}

export function AgAssistantPanel({ data }: PanelProps) {
  const tasks = String(data?.tasks ?? "");
  const tasksLabel = String(data?.tasksLabel ?? "");
  const sensors = (data?.sensors as SensorRow[]) ?? [];

  return (
    <PanelFrame className="p-2">
      <div className="grid h-full grid-cols-3 gap-1.5">
        {sensors.map((s) => (
          <div key={s.label} className="rounded-md border border-black/10 bg-white/80 p-1.5 text-center">
            <div className="text-[7px] text-black/50">{s.label}</div>
            <div className="text-xs font-medium text-black">{s.value}</div>
            <div
              className={`mx-auto mt-1 h-1 w-4/5 rounded-full ${s.status === "good" ? "bg-emerald-500" : "bg-amber-500"}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 rounded-md bg-black/5 px-2 py-1 text-[8px]">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/10">
          <div className="h-full w-[40%] rounded-full bg-emerald-600" />
        </div>
        <span className="text-black/60">
          {tasksLabel} {tasks}
        </span>
      </div>
    </PanelFrame>
  );
}

export function MarketToolsPanel({ data }: PanelProps) {
  const rows = (data?.prices as PriceRow[]) ?? [];
  const colProduct = String(data?.colProduct ?? "");
  const colPrice = String(data?.colPrice ?? "");
  const col7d = String(data?.col7d ?? "");

  return (
    <PanelFrame className="p-2">
      <div className="space-y-1">
        <div className="grid grid-cols-3 gap-1 border-b border-black/10 pb-1 text-[7px] uppercase tracking-wider text-black/40">
          <span>{colProduct}</span>
          <span>{colPrice}</span>
          <span>{col7d}</span>
        </div>
        {rows.map((row) => (
          <div key={row.product} className="grid grid-cols-3 gap-1 text-[9px]">
            <span className="font-medium text-black">{row.product}</span>
            <span className="text-black/70">{row.price}</span>
            <span className={row.change.startsWith("+") ? "text-emerald-700" : "text-red-600"}>
              {row.change}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 right-2 flex h-6 items-end gap-0.5">
        {[4, 6, 5, 8, 7, 9, 11].map((h, i) => (
          <div key={i} className="w-1.5 rounded-t bg-emerald-600/60" style={{ height: `${h * 2}px` }} />
        ))}
      </div>
    </PanelFrame>
  );
}

export function AgLogisticsPanel({ data }: PanelProps) {
  const distance = String(data?.distance ?? "");
  const duration = String(data?.duration ?? "");
  const cost = String(data?.cost ?? "");
  const distanceLabel = String(data?.distanceLabel ?? "");
  const durationLabel = String(data?.durationLabel ?? "");
  const costLabel = String(data?.costLabel ?? "");

  return (
    <PanelFrame className="bg-amber-50/30">
      <svg className="absolute inset-0 h-full w-full p-3" viewBox="0 0 200 100" aria-hidden>
        <path d="M30,70 Q80,20 120,50 T170,30" fill="none" stroke="#1b5e3b" strokeWidth="2" strokeDasharray="6 3" />
        <circle cx="30" cy="70" r="5" fill="#1b5e3b" />
        <circle cx="170" cy="30" r="5" fill="#f97316" />
      </svg>
      <div className="absolute bottom-2 left-2 right-2 grid grid-cols-3 gap-1 rounded-lg border border-black/10 bg-white/95 p-2 text-center text-[8px]">
        <div>
          <div className="text-black/50">{distanceLabel}</div>
          <div className="font-medium text-black">{distance}</div>
        </div>
        <div>
          <div className="text-black/50">{durationLabel}</div>
          <div className="font-medium text-black">{duration}</div>
        </div>
        <div>
          <div className="text-black/50">{costLabel}</div>
          <div className="font-medium text-black">{cost}</div>
        </div>
      </div>
    </PanelFrame>
  );
}

export function HarvestTokenizationPanel({ data }: PanelProps) {
  const volume = String(data?.volume ?? "");
  const tokens = String(data?.tokens ?? "");
  const volumeLabel = String(data?.volumeLabel ?? "");
  const lotsFinancing = String(data?.lotsFinancing ?? "");
  const crops = (data?.crops as string[]) ?? [];

  return (
    <PanelFrame className="flex items-center gap-3 p-3">
      <div className="relative flex size-20 shrink-0 items-center justify-center">
        <svg className="size-full -rotate-90" viewBox="0 0 36 36" aria-hidden>
          <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="4" />
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke="#1b5e3b"
            strokeWidth="4"
            strokeDasharray="55 45"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-[8px] font-medium text-black">35%</span>
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <div className="text-[10px]">
          <span className="text-black/50">{volumeLabel}</span>
          <div className="font-medium text-black">{volume}</div>
        </div>
        <div className="flex flex-wrap gap-1">
          {crops.map((crop) => (
            <span key={crop} className="rounded-full bg-emerald-100 px-2 py-0.5 text-[7px] text-emerald-800">
              {crop}
            </span>
          ))}
        </div>
        <div className="text-[9px] text-black/50">
          <strong className="text-black">{tokens}</strong> {lotsFinancing}
        </div>
      </div>
    </PanelFrame>
  );
}
