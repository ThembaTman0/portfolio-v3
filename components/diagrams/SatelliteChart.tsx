import { Fragment } from "react";

/*
 * Satellite case-study visual: the classifier accuracies from the IEEE study as
 * a themed horizontal bar chart. Built in HTML rather than SVG so the labels
 * keep real text sizes on narrow screens instead of shrinking with the frame.
 */

const DATA: { name: string; value: number; best?: boolean }[] = [
  { name: "Hybrid (SVM + RBF)", value: 81.76, best: true },
  { name: "Linear classifier", value: 76.19 },
  { name: "DAISY only", value: 73.4 },
  { name: "KNN", value: 67.14 },
  { name: "HOG only", value: 36.73 },
];

const SatelliteChart = () => (
  <div
    role="img"
    aria-label="Classifier accuracy on the UC Merced land-use dataset: Hybrid SVM with RBF kernel 81.76 percent (best), Linear classifier 76.19, DAISY only 73.4, KNN 67.14, HOG only 36.73."
    style={{
      width: "100%",
      padding: "clamp(1rem, 3vw, 1.8rem)",
      display: "flex",
      flexDirection: "column",
      gap: "1.1rem",
    }}
  >
    <div
      aria-hidden="true"
      style={{
        display: "grid",
        gridTemplateColumns: "max-content 1fr max-content",
        columnGap: "0.75rem",
        rowGap: "0.7rem",
        alignItems: "center",
      }}
    >
      {/* Baseline axis running behind every bar */}
      <div
        style={{
          gridColumn: 2,
          gridRow: `1 / span ${DATA.length}`,
          alignSelf: "stretch",
          borderLeft: "1px solid rgba(255,255,255,0.12)",
          margin: "-0.35rem 0",
        }}
      />
      {DATA.map((d, i) => (
        <Fragment key={d.name}>
          <div
            style={{
              gridColumn: 1,
              gridRow: i + 1,
              fontSize: "0.75rem",
              color: d.best ? "var(--white)" : "var(--muted)",
              textAlign: "right",
              whiteSpace: "nowrap",
            }}
          >
            {d.name}
          </div>
          <div
            style={{
              gridColumn: 2,
              gridRow: i + 1,
              height: "clamp(14px, 2.4vw, 22px)",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "2px",
            }}
          >
            <div
              style={{
                width: `${d.value}%`,
                height: "100%",
                borderRadius: "2px",
                background: d.best ? "var(--accent)" : "rgba(200,160,90,0.22)",
              }}
            />
          </div>
          <div
            style={{
              gridColumn: 3,
              gridRow: i + 1,
              fontSize: "0.75rem",
              color: d.best ? "var(--accent)" : "var(--muted)",
              fontWeight: d.best ? 600 : 400,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {d.value.toFixed(2)}%
          </div>
        </Fragment>
      ))}
    </div>

    <div
      aria-hidden="true"
      style={{
        fontSize: "0.75rem",
        lineHeight: 1.5,
        letterSpacing: "0.02em",
        color: "var(--muted)",
      }}
    >
      10-fold cross-validation · SVM · UC Merced Land Use (21 scene classes)
    </div>
  </div>
);

export default SatelliteChart;
