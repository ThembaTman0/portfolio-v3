// Coarse device-capability check used to gate expensive decorative effects.
// "lite" covers touch/narrow-viewport devices outright (where a fine cursor
// and dense canvas work add nothing) plus desktop-class hardware that
// self-reports as low-power. Falls back to "full" when signals are
// unavailable (e.g. deviceMemory is Chromium-only).
export type PerfTier = "full" | "lite";

export function getPerfTier(): PerfTier {
  if (typeof window === "undefined") return "full";

  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const narrowViewport = window.matchMedia("(max-width: 768px)").matches;
  if (coarsePointer || narrowViewport) return "lite";

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    hardwareConcurrency?: number;
  };
  const lowCores =
    typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4;
  const lowMemory =
    typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;

  return lowCores && lowMemory ? "lite" : "full";
}
