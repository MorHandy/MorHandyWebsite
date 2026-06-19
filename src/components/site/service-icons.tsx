import React from "react";

import { cn } from "@/lib/utils";


/* ─────────────────────────────────────────────────────────────
   Rich, unique custom SVG path sets — one per service
───────────────────────────────────────────────────────────── */

/* General Repair Services – wrench + screwdriver cross */
function IconToolbox({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {/* Wrench head */}
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

/* Electrical – lightning bolt inside a circuit ring */
function IconBolt({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" strokeDasharray="4 2" />
      <path d="M13 2 6.5 13H12l-1 9 6.5-11H12l1-9z" />
    </svg>
  );
}

/* Plumbing – plunger */
function IconWater({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {/* Plunger Handle */}
      <path d="M12 2v11" />
      {/* Handle top grip */}
      <path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4z" />
      {/* Plunger Cup */}
      <path d="M17.5 13H6.5a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-2a2.5 2.5 0 0 0-2.5-2.5z" />
      {/* Plunger rim */}
      <path d="M4 20h16" />
      {/* Highlight/curve on cup */}
      <path d="M7 16c3-1 7-1 10 0" />
    </svg>
  );
}

/* Appliance Repairs – spinning gear with airwave lines */
function IconFan({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2a10 10 0 0 1 0 20" strokeDasharray="3 3" />
      <path d="M12 9V2" />
      <path d="M15 12h7" />
      <path d="M12 15v7" />
      <path d="M9 12H2" />
      {/* Air waves */}
      <path d="M17 7c1 2 1 4 0 6" />
      <path d="M19 5c2 3 2 7 0 10" />
    </svg>
  );
}

/* Painting – brush with a curved paint stroke */
function IconPaint({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {/* Brush handle */}
      <path d="M3 3l7 7" />
      {/* Bristles */}
      <path d="M10 10l1.5 1.5a2 2 0 0 1 0 2.83L10 15.83a2 2 0 0 1-2.83 0L5.68 14.3a2 2 0 0 1 0-2.83L7.17 10H10z" />
      {/* Paint stroke arc */}
      <path d="M14 6c2-2 6-2 7 1s-2 5-5 4" />
      <path d="M16 17c2 1 5 0 5-3" />
      {/* Drip dot */}
      <circle cx="19" cy="19" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Carpentry – handsaw over a wood plank */
function IconRuler({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {/* Wood plank */}
      <rect height="4" rx="1" width="20" x="2" y="16" />
      {/* Wood grain lines */}
      <path d="M7 16v4M12 16v4M17 16v4" />
      {/* Saw blade */}
      <path d="M5 4h12l3 8H5z" />
      {/* Saw teeth */}
      <path d="M5 12l1-2 1 2 1-2 1 2 1-2 1 2 1-2 1 2 1-2" />
      {/* Handle */}
      <path d="M17 4v8" />
    </svg>
  );
}

/* Drywall – wall panel with trowel */
function IconWall({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {/* Wall panel */}
      <rect height="14" rx="1" width="14" x="2" y="5" />
      {/* Panel seams */}
      <path d="M2 12h14M9 5v14" />
      {/* Patch spot */}
      <path d="M5 9h3v3H5z" strokeDasharray="2 1" />
      {/* Trowel */}
      <path d="M18 3l3 3-7 7-3-3z" />
      <path d="M21 6l1 5-5 1" />
    </svg>
  );
}

/* Landscaping – leaf growing from soil with shovel */
function IconLeaf({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {/* Ground line */}
      <path d="M2 19h20" />
      {/* Stem */}
      <path d="M12 19V9" />
      {/* Leaf */}
      <path d="M12 9C12 5 16 3 19 4c0 5-4 7-7 5z" />
      <path d="M12 13c0-3-4-5-7-4 0 4 3 6 7 4z" />
      {/* Shovel handle */}
      <path d="M18 14l3 5" />
      {/* Shovel head */}
      <path d="M16 13a2 2 0 0 1 4 0v2h-4z" />
    </svg>
  );
}

/* Seasonal Maintenance – calendar with sun + snowflake */
function IconCalendar({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {/* Calendar frame */}
      <rect height="16" rx="2" width="18" x="3" y="4" />
      <path d="M3 10h18M8 2v4M16 2v4" />
      {/* Sun (top-right quadrant) */}
      <circle cx="16" cy="15" r="2" />
      <path d="M16 12v1M16 18v1M13 15h1M18 15h1M14 13l.7.7M17.3 16.3l.7.7M14 17l.7-.7M17.3 13.7l.7-.7" />
      {/* Snowflake (bottom-left quadrant) */}
      <path d="M7 13v4M5 14l4 2M5 16l4-2" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Public icon map used by ServiceCard + ServiceIcon
───────────────────────────────────────────────────────────── */

const iconMap: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  toolbox: IconToolbox,
  bolt: IconBolt,
  water: IconWater,
  fan: IconFan,
  paint: IconPaint,
  ruler: IconRuler,
  wall: IconWall,
  leaf: IconLeaf,
  calendar: IconCalendar,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? IconToolbox;
  return <Icon className={className} />;
}

/* ─────────────────────────────────────────────────────────────
   Decorative hero background pattern
───────────────────────────────────────────────────────────── */

export function BrandPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      fill="none"
      viewBox="0 0 900 520"
    >
      <path
        d="M88 78h168l54 54h210l86-86h190v154l-58 58v132l-78 78H480l-52-52H250l-80 80H60V290l66-66V116z"
        stroke="currentColor"
        strokeOpacity=".12"
        strokeWidth="2"
      />
      <path
        d="M166 152h182M121 325h210M565 122h190M538 402h186"
        stroke="currentColor"
        strokeDasharray="8 16"
        strokeOpacity=".14"
        strokeWidth="2"
      />
      <circle cx="694" cy="274" r="48" stroke="currentColor" strokeOpacity=".1" />
      <circle cx="224" cy="237" r="34" stroke="currentColor" strokeOpacity=".1" />
    </svg>
  );
}
