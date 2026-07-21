/*
 * Satellite case-study visual: a themed horizontal bar chart of the real
 * classifier accuracies from the IEEE-published study (results table), so the
 * project shows genuine data on-brand rather than a white-background figure or
 * stock imagery. 16:9 inline SVG using the site's color tokens.
 */

const FONT = "var(--font-dm-sans), sans-serif";
const ACCENT = "var(--accent)";
const MUTED = "var(--muted)";
const MUTED2 = "var(--muted2)";
const WHITE = "var(--white)";

const DATA: { name: string; value: number; best?: boolean }[] = [
  { name: "Hybrid (SVM + RBF)", value: 81.42, best: true },
  { name: "Linear classifier", value: 76.19 },
  { name: "DAISY only", value: 73.4 },
  { name: "KNN", value: 68.02 },
  { name: "HOG only", value: 36.73 },
];

const CHART_LEFT = 168;
const CHART_RIGHT = 566; // leave room for the value label after the longest bar
const SCALE = (CHART_RIGHT - CHART_LEFT) / 100; // px per percentage point
const TOP = 60;
const STEP = 56;
const BAR_H = 24;

const SatelliteChart = () => (
  <svg
    viewBox="0 0 640 360"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Classifier accuracy on the UC Merced land-use dataset: Hybrid SVM with RBF kernel 81.42 percent (best), Linear classifier 76.19, DAISY only 73.4, KNN 68.02, HOG only 36.73."
  >
    {/* Baseline axis */}
    <line
      x1={CHART_LEFT}
      y1={44}
      x2={CHART_LEFT}
      y2={TOP + STEP * 4 + 20}
      stroke="rgba(255,255,255,0.12)"
      strokeWidth={1}
    />

    {DATA.map((d, i) => {
      const cy = TOP + i * STEP;
      const w = d.value * SCALE;
      return (
        <g key={d.name}>
          {/* Name label */}
          <text
            x={CHART_LEFT - 12}
            y={cy + 4}
            textAnchor="end"
            fill={d.best ? WHITE : MUTED}
            fontFamily={FONT}
            fontSize={11}
          >
            {d.name}
          </text>
          {/* Track */}
          <rect
            x={CHART_LEFT}
            y={cy - BAR_H / 2}
            width={CHART_RIGHT - CHART_LEFT}
            height={BAR_H}
            rx={2}
            fill="rgba(255,255,255,0.02)"
          />
          {/* Bar */}
          <rect
            x={CHART_LEFT}
            y={cy - BAR_H / 2}
            width={w}
            height={BAR_H}
            rx={2}
            fill={d.best ? ACCENT : "rgba(200,160,90,0.22)"}
          />
          {/* Value */}
          <text
            x={CHART_LEFT + w + 8}
            y={cy + 4}
            fill={d.best ? ACCENT : MUTED}
            fontFamily={FONT}
            fontSize={11}
            fontWeight={d.best ? 600 : 400}
          >
            {d.value.toFixed(2)}%
          </text>
        </g>
      );
    })}

    {/* Caption */}
    <text
      x={CHART_LEFT}
      y={340}
      fill={MUTED2}
      fontFamily={FONT}
      fontSize={10}
      letterSpacing={0.4}
    >
      10-fold cross-validation · SVM · UC Merced Land Use (21 scene classes)
    </text>
  </svg>
);

export default SatelliteChart;
