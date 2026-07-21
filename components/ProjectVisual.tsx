import Image from "next/image";
import type { Project } from "@/constants";
import BankwaveDiagram from "./diagrams/BankwaveDiagram";
import SynthForgeDiagram from "./diagrams/SynthForgeDiagram";
import SatelliteChart from "./diagrams/SatelliteChart";

// Per-project authored visuals, keyed by Project.id. A project renders, in
// priority order: a real screenshot (Project.image) in a browser frame; else
// a registered diagram in a "schematic" frame; else the monogram placeholder.
const DIAGRAMS: Record<string, { label: string; Component: React.FC }> = {
  "01": { label: "System architecture", Component: BankwaveDiagram },
  "02": { label: "How it works", Component: SynthForgeDiagram },
  "03": { label: "Model accuracy", Component: SatelliteChart },
};

// Two-letter monogram from a project title, mirroring the ghost "TN"
// monogram treatment already used in the Hero panel.
const initials = (title: string) =>
  title
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const chromeUrl = (project: Project) =>
  (project.demo ?? project.github ?? project.subtitle).replace(/^https?:\/\//, "");

const Dots = () => (
  <>
    {["#3a3a3a", "#3a3a3a", "rgba(200,160,90,0.55)"].map((c, i) => (
      <span
        key={i}
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: c,
          display: "block",
          flexShrink: 0,
        }}
      />
    ))}
  </>
);

const Monogram = ({ title }: { title: string }) => (
  <div
    aria-hidden="true"
    style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at 30% 30%, rgba(200,160,90,0.05) 0%, transparent 60%)",
      }}
    />
    <div
      style={{
        fontFamily: "var(--font-fraunces), serif",
        fontSize: "4.4rem",
        fontWeight: 700,
        color: "transparent",
        WebkitTextStroke: "1px rgba(200,160,90,0.24)",
        letterSpacing: "-0.03em",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      {initials(title)}
    </div>
    <div
      style={{
        position: "absolute",
        top: "0.9rem",
        left: "0.9rem",
        width: "20px",
        height: "20px",
        borderTop: "1px solid rgba(200,160,90,0.3)",
        borderLeft: "1px solid rgba(200,160,90,0.3)",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "0.9rem",
        right: "0.9rem",
        width: "20px",
        height: "20px",
        borderBottom: "1px solid rgba(200,160,90,0.3)",
        borderRight: "1px solid rgba(200,160,90,0.3)",
      }}
    />
  </div>
);

/*
 * Framed preview for a project's case study. A real screenshot (Project.image)
 * renders in a browser-chrome frame; an authored diagram renders in a lighter
 * "schematic" frame (label instead of a URL bar); otherwise a generated
 * monogram placeholder keeps the panel feeling designed rather than empty.
 */
const ProjectVisual = ({ project }: { project: Project }) => {
  const diagram = !project.image ? DIAGRAMS[project.id] : undefined;

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid var(--line)",
        borderRadius: "4px",
        overflow: "hidden",
        background: "var(--bg2)",
      }}
    >
      {/* Frame bar: browser URL for screenshots, a plain label for diagrams */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.6rem 0.85rem",
          borderBottom: "1px solid var(--line)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <Dots />
        {diagram ? (
          <div
            style={{
              marginLeft: "0.6rem",
              fontSize: "0.58rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {diagram.label}
          </div>
        ) : (
          <div
            style={{
              marginLeft: "0.6rem",
              fontSize: "0.62rem",
              letterSpacing: "0.04em",
              color: "var(--muted2)",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--line)",
              borderRadius: "2px",
              padding: "0.2rem 0.65rem",
              flex: 1,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {chromeUrl(project)}
          </div>
        )}
      </div>

      {/* Content area (16:9) */}
      <div style={{ position: "relative", aspectRatio: "16/9" }}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            style={{ objectFit: "cover" }}
          />
        ) : diagram ? (
          <div style={{ position: "absolute", inset: 0 }}>
            <diagram.Component />
          </div>
        ) : (
          <Monogram title={project.title} />
        )}
      </div>
    </div>
  );
};

export default ProjectVisual;
