/*
 * SynthForge case-study visual: a code card showing the developer experience
 * (annotate two related JPA entities with @Seed) plus a short flow caption of
 * what the library guarantees. HTML rather than SVG so the code stays crisp
 * and copy-legible; fills the 16:9 schematic canvas.
 */

const MONO =
  "ui-monospace, 'Cascadia Code', 'JetBrains Mono', Consolas, monospace";

// A tiny syntax-ish highlighter kept intentionally minimal.
const Ann = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--accent)" }}>{children}</span>
);
const Kw = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#8fb4c8" }}>{children}</span>
);
const Cm = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--muted2)" }}>{children}</span>
);

const SynthForgeDiagram = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "0.9rem",
      padding: "clamp(0.9rem, 3vw, 1.6rem)",
    }}
  >
    {/* Code card */}
    <pre
      style={{
        margin: 0,
        fontFamily: MONO,
        fontSize: "clamp(0.6rem, 1.5vw, 0.78rem)",
        lineHeight: 1.65,
        color: "var(--text)",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid var(--line)",
        borderRadius: "4px",
        padding: "1rem 1.1rem",
        overflow: "hidden",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
    >
      <Ann>@Entity</Ann>
      {"\n"}
      <Ann>@Seed</Ann>(count = <span style={{ color: "var(--white)" }}>50</span>)
      {"\n"}
      <Kw>class</Kw> <span style={{ color: "var(--white)" }}>Counterparty</span> {"{ … }"}
      {"\n\n"}
      <Ann>@Entity</Ann>
      {"\n"}
      <Ann>@Seed</Ann>(count = <span style={{ color: "var(--white)" }}>200</span>)
      {"\n"}
      <Kw>class</Kw> <span style={{ color: "var(--white)" }}>Payment</span> {"{"}
      {"\n"}
      {"  "}
      <Ann>@ManyToOne</Ann> Counterparty cp; <Cm>{"// → real parent"}</Cm>
      {"\n"}
      {"}"}
    </pre>

    {/* Flow caption */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "0.5rem 0.7rem",
        fontSize: "clamp(0.56rem, 1.4vw, 0.66rem)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--muted)",
      }}
    >
      {["Parents first", "Constraint-aware", "Profile-gated", "Idempotent"].map(
        (t, i) => (
          <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            {i > 0 && <span style={{ color: "var(--accent)" }}>·</span>}
            {t}
          </span>
        )
      )}
    </div>
  </div>
);

export default SynthForgeDiagram;
