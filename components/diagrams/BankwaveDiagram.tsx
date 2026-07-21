/*
 * Bankwave case-study visual: a themed microservices architecture schematic.
 * Pure inline SVG (16:9) so it stays crisp at any resolution and picks up the
 * site's CSS color tokens. Service names are representative of a banking
 * backend; edit the labels below to match the real service topology.
 */

const BOX = "rgba(255,255,255,0.02)";
const LINE = "rgba(255,255,255,0.12)";
const ACCENT = "var(--accent)";
const ACCENT_LINE = "rgba(200,160,90,0.4)";
const ACCENT_FILL = "rgba(200,160,90,0.08)";
const WHITE = "var(--white)";
const MUTED = "var(--muted)";
const MUTED2 = "var(--muted2)";
const FONT = "var(--font-dm-sans), sans-serif";

const Service = ({ x, name }: { x: number; name: string }) => (
  <g>
    <rect x={x} y={168} width={150} height={50} rx={4} fill={BOX} stroke={LINE} />
    <text
      x={x + 75}
      y={190}
      textAnchor="middle"
      fill={WHITE}
      fontFamily={FONT}
      fontSize={13}
    >
      {name}
    </text>
    <text
      x={x + 75}
      y={206}
      textAnchor="middle"
      fill={MUTED}
      fontFamily={FONT}
      fontSize={9}
      letterSpacing={1}
    >
      Spring Boot
    </text>
  </g>
);

const Database = ({ cx }: { cx: number }) => (
  <g>
    <path
      d={`M${cx - 34},252 V282 A34,7 0 0 0 ${cx + 34},282 V252`}
      fill={BOX}
      stroke={LINE}
    />
    <ellipse cx={cx} cy={252} rx={34} ry={7} fill={BOX} stroke={LINE} />
    <text
      x={cx}
      y={274}
      textAnchor="middle"
      fill={MUTED}
      fontFamily={FONT}
      fontSize={10}
      letterSpacing={1}
    >
      MySQL
    </text>
  </g>
);

const BankwaveDiagram = () => (
  <svg
    viewBox="0 0 640 360"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Bankwave microservices architecture: clients call an API gateway that routes to Accounts, Payments and Customers services, each with its own MySQL database, wired to Eureka service discovery and Spring Cloud Config inside a Docker Compose environment."
  >
    {/* Connectors (drawn first, under the boxes) */}
    <g stroke={ACCENT_LINE} fill="none" strokeWidth={1.2}>
      {/* Clients -> Gateway */}
      <line x1={320} y1={60} x2={320} y2={88} />
      {/* Gateway -> services (fan) */}
      <line x1={320} y1={132} x2={127} y2={168} />
      <line x1={320} y1={132} x2={320} y2={168} />
      <line x1={320} y1={132} x2={513} y2={168} />
      {/* services -> DBs */}
      <line x1={127} y1={218} x2={127} y2={245} />
      <line x1={320} y1={218} x2={320} y2={245} />
      <line x1={513} y1={218} x2={513} y2={245} />
    </g>

    {/* Infra dashed links */}
    <g stroke={LINE} fill="none" strokeWidth={1} strokeDasharray="3 3">
      <line x1={95} y1={132} x2={120} y2={168} />
      <line x1={545} y1={132} x2={520} y2={168} />
    </g>

    {/* Docker Compose boundary */}
    <rect
      x={40}
      y={156}
      width={560}
      height={150}
      rx={6}
      fill="none"
      stroke={LINE}
      strokeDasharray="5 4"
    />
    <text
      x={592}
      y={150}
      textAnchor="end"
      fill={MUTED2}
      fontFamily={FONT}
      fontSize={9}
      letterSpacing={2}
    >
      DOCKER COMPOSE
    </text>

    {/* Clients */}
    <rect x={245} y={28} width={150} height={32} rx={4} fill={BOX} stroke={LINE} />
    <text
      x={320}
      y={48}
      textAnchor="middle"
      fill={MUTED}
      fontFamily={FONT}
      fontSize={12}
    >
      Clients / apps
    </text>

    {/* Eureka */}
    <rect x={36} y={88} width={118} height={44} rx={4} fill={BOX} stroke={LINE} />
    <text x={95} y={110} textAnchor="middle" fill={WHITE} fontFamily={FONT} fontSize={12}>
      Eureka
    </text>
    <text x={95} y={124} textAnchor="middle" fill={MUTED} fontFamily={FONT} fontSize={9}>
      service registry
    </text>

    {/* API Gateway (accent) */}
    <rect
      x={200}
      y={88}
      width={240}
      height={44}
      rx={4}
      fill={ACCENT_FILL}
      stroke={ACCENT_LINE}
    />
    <text x={320} y={109} textAnchor="middle" fill={ACCENT} fontFamily={FONT} fontSize={14}>
      API Gateway
    </text>
    <text x={320} y={124} textAnchor="middle" fill={MUTED} fontFamily={FONT} fontSize={9}>
      Spring Cloud Gateway
    </text>

    {/* Config */}
    <rect x={486} y={88} width={118} height={44} rx={4} fill={BOX} stroke={LINE} />
    <text x={545} y={110} textAnchor="middle" fill={WHITE} fontFamily={FONT} fontSize={12}>
      Config
    </text>
    <text x={545} y={124} textAnchor="middle" fill={MUTED} fontFamily={FONT} fontSize={9}>
      central config
    </text>

    {/* Services */}
    <Service x={52} name="Accounts" />
    <Service x={245} name="Payments" />
    <Service x={438} name="Customers" />

    {/* Databases */}
    <Database cx={127} />
    <Database cx={320} />
    <Database cx={513} />
  </svg>
);

export default BankwaveDiagram;
