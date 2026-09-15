/*
 * Bankwave case-study visual: the architecture as it exists in the repo
 * (ThembaTman0/Bankwave-V-2.0). A Spring Cloud Config Server feeds the three
 * Spring Boot services, each with its own MySQL database, all started by
 * Docker Compose. Only draw what the code contains: the API gateway and
 * circuit breaker are on the README roadmap, not built.
 * Built in HTML rather than SVG so labels keep real text sizes on narrow
 * screens instead of shrinking with the frame.
 */

const LINE = "rgba(255,255,255,0.12)";
const ACCENT_LINE = "rgba(200,160,90,0.4)";
const BOX_BG = "rgba(255,255,255,0.02)";
const COLUMN_GAP = "0.5rem";

// Soft hyphens let the database names break cleanly on the narrowest phones
// instead of overflowing their boxes; they never show when there is room.
const SERVICES = [
  { name: "Accounts", db: "accounts­db" },
  { name: "Loans", db: "loans­db" },
  { name: "Cards", db: "cards­db" },
];

const Box = ({
  title,
  sub,
  accent,
  rounded,
}: {
  title: string;
  sub: string;
  accent?: boolean;
  rounded?: boolean;
}) => (
  <div
    style={{
      border: `1px solid ${accent ? ACCENT_LINE : LINE}`,
      background: accent ? "rgba(200,160,90,0.08)" : BOX_BG,
      borderRadius: rounded ? "10px" : "4px",
      padding: "0.45rem 0.25rem",
      textAlign: "center",
      lineHeight: 1.3,
    }}
  >
    <div
      style={{
        // Databases sit one step below the services in the hierarchy
        fontSize: rounded ? "0.75rem" : "0.82rem",
        color: accent ? "var(--accent)" : "var(--white)",
        hyphens: "manual",
      }}
    >
      {title}
    </div>
    <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
      {sub}
    </div>
  </div>
);

// Vertical connector
const Wire = () => (
  <div
    style={{ width: "1px", height: "12px", margin: "0 auto", background: ACCENT_LINE }}
  />
);

const BankwaveDiagram = () => (
  <div
    role="img"
    aria-label="Bankwave architecture: a Spring Cloud Config Server supplies configuration to the Accounts, Loans and Cards Spring Boot services, each with its own MySQL database, all running under Docker Compose."
    style={{ width: "100%", padding: "clamp(0.5rem, 3vw, 1.6rem)" }}
  >
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        border: `1px dashed ${LINE}`,
        borderRadius: "6px",
        padding: "1.9rem clamp(0.35rem, 2vw, 1.2rem) clamp(0.7rem, 2vw, 1.1rem)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.7rem",
          fontSize: "0.75rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        Docker Compose
      </div>

      {/* Config Server */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ minWidth: "min(100%, 11rem)" }}>
          <Box title="Config Server" sub="Spring Cloud Config" accent />
        </div>
      </div>
      <Wire />

      {/* Bus from the first service's centre to the last one's */}
      <div
        style={{
          height: "1px",
          background: ACCENT_LINE,
          marginInline: `calc((100% - 2 * ${COLUMN_GAP}) / 6)`,
        }}
      />

      {/* Services and their databases */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          columnGap: COLUMN_GAP,
        }}
      >
        {SERVICES.map((s) => (
          <div key={s.name}>
            <Wire />
            <Box title={s.name} sub="Spring Boot" />
            <Wire />
            <Box title={s.db} sub="MySQL" rounded />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BankwaveDiagram;
