import { useRef, useState, type ReactNode } from "react";

export function SpreadsheetHoverBackground({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const zoomMask = `radial-gradient(circle 220px at ${spot.x}% ${spot.y}%, #000 0%, #000 35%, transparent 72%)`;

  return (
    <main
      ref={containerRef}
      className="relative bg-background overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setSpot((s) => ({ ...s, active: false }))}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
        <div
          className="absolute inset-0 spreadsheet-grid transition-opacity duration-200"
          style={{
            opacity: spot.active ? 1 : 0,
            transform: spot.active ? "scale(1.4)" : "scale(1)",
            transformOrigin: `${spot.x}% ${spot.y}%`,
            WebkitMaskImage: zoomMask,
            maskImage: zoomMask,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
}
