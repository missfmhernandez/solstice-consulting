const { createRoot } = ReactDOM;

const challenges = [
  {
    challenge:
      "Managers are promoted for technical expertise but lack the leadership capability required to lead teams effectively.",
    solution:
      "Practical management development focused on communication, accountability, delegation and performance leadership.",
    outcome:
      "More confident managers who lead with greater clarity, consistency and accountability.",
  },
  {
    challenge:
      "Leadership development is disconnected from organisational strategy and commercial priorities.",
    solution:
      "Leadership programmes designed around strategy, culture and the real leadership challenges facing the business.",
    outcome:
      "Leaders who translate strategy into behaviour, decisions and team performance.",
  },
  {
    challenge:
      "Talent and promotion decisions lack consistent assessment and evidence-based evaluation.",
    solution:
      "Structured assessment, psychometrics and selection processes that improve talent decision quality.",
    outcome:
      "Stronger hiring, promotion and succession decisions with reduced talent risk.",
  },
  {
    challenge:
      "Future leadership potential is not consistently identified, developed or retained.",
    solution:
      "Talent mapping, assessment insights and targeted development pathways aligned to future business needs.",
    outcome:
      "Greater visibility of leadership potential, succession readiness and retention risk.",
  },
];

const services = [
  {
    icon: "users",
    title: "Leadership Development",
    text: "Leadership capability aligned to organisational performance and strategic priorities.",
  },
  {
    icon: "compass",
    title: "Management Training",
    text: "Practical training for managers leading performance, people and change.",
  },
  {
    icon: "message",
    title: "Executive Coaching",
    text: "Focused coaching for leaders navigating growth, transition or complexity.",
  },
  {
    icon: "chart",
    title: "Psychometrics & 360 Feedback",
    text: "Insight-led assessment using behavioural data, feedback and psychometric tools.",
  },
  {
    icon: "briefcase",
    title: "Recruitment & Selection",
    text: "Sharper interview design, assessment and selection processes for better hiring.",
  },
  {
    icon: "spark",
    title: "Talent & Succession",
    text: "Identify, develop and retain people with the potential to drive future growth.",
  },
];

const partnerships = [
  {
    icon: "briefcase",
    challenge:
      "Clients expect broader talent and leadership support beyond recruitment alone.",
    solution:
      "White-label leadership, assessment and coaching solutions delivered seamlessly alongside your existing services.",
    outcome:
      "A stronger, more differentiated client offering with increased strategic value.",
  },
  {
    icon: "message",
    challenge:
      "Growing firms need specialist expertise without increasing permanent headcount.",
    solution:
      "Flexible consulting partnership support across assessment, facilitation, coaching and talent advisory.",
    outcome:
      "Scalable delivery capability without the overhead of building internal teams.",
  },
  {
    icon: "chart",
    challenge:
      "Internal teams lack the capacity or specialist expertise to support evolving client demands.",
    solution:
      "Embedded consulting support for client meetings, proposals, programme design and delivery.",
    outcome:
      "Greater client confidence, broader service capability and stronger commercial relationships.",
  },
  {
    icon: "trend",
    challenge:
      "Recruitment and people businesses are under pressure to differentiate in increasingly competitive markets.",
    solution:
      "Leadership, assessment and organisational development expertise that expands the value delivered to clients.",
    outcome:
      "Deeper client relationships, stronger positioning and additional revenue opportunities.",
  },
];

const partnerTypes = [
  "Recruitment firms",
  "Executive search",
  "HR consultancies",
  "L&D providers",
  "Leadership consultancies",
  "People advisory firms",
];

const experienceBrands = [
  { name: "BBC", variant: "bbc" },
  {
    name: "National Grid",
    variant: "national-grid",
  },
  {
    name: "Amazon",
    path:
      "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z",
  },
  { name: "Majar Group", mark: "MAJAR", detail: "GROUP", compact: true },
  { name: "Hager", mark: ":hager", variant: "hager" },
  { name: "HB", mark: "HB", variant: "hb" },
  { name: "Diageo", mark: "DIAGEO", variant: "diageo" },
  { name: "NHS", variant: "nhs" },
  { name: "Publicis Groupe", variant: "publicis" },
  { name: "Hult Executive Education", variant: "hult" },
];

const selectedExperienceBrands = [
  { name: "Lloyds", type: "text" },
  { name: "National Grid", type: "text" },
  { name: "Amazon", type: "text" },
  { name: "Major Group", type: "text" },
  { name: "Hager", type: "text" },
  { name: "Barilla", type: "text" },
  { name: "Diageo", type: "text" },
  { name: "Havas", type: "text" },
  { name: "Publicis", type: "text" },
  { name: "Hult Ashridge", type: "text" },
];

const outcomes = [
  "Stronger leadership capability",
  "More confident and accountable managers",
  "Better hiring, promotion and succession decisions",
  "Higher-performing and more engaged teams",
  "Greater clarity, communication and leadership alignment",
  "Improved retention of key talent",
  "Clearer visibility of future leadership potential",
  "Practical behavioural change with measurable impact",
];

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    check: (
      <>
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m16 8-2 6-6 2 2-6 6-2z" />
      </>
    ),
    message: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </>
    ),
    briefcase: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M2 13h20" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8L12 3z" />
        <path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16z" />
      </>
    ),
    shield: (
      <>
        <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    bulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14a6 6 0 1 1 7 0c-.9.7-1.5 1.9-1.5 3h-4c0-1.1-.6-2.3-1.5-3z" />
      </>
    ),
    trend: (
      <>
        <path d="m3 17 6-6 4 4 7-7" />
        <path d="M14 8h6v6" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function Button({ children, variant = "primary", href = "#contact" }) {
  const styles =
    variant === "secondary"
      ? "border border-anchor-ink/15 bg-white text-anchor-ink hover:border-anchor-clay hover:text-anchor-clay"
      : "bg-anchor-ink text-white hover:bg-anchor-clay";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </a>
  );
}

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-bold uppercase tracking-[0.24em] ${
          light ? "text-white/55" : "text-anchor-clay"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold tracking-tight md:text-5xl ${
          light ? "text-white" : "text-anchor-ink"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? "text-white/72" : "text-anchor-muted"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function CardRow({ icon, label, text, strong = false }) {
  return (
    <div>
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-anchor-muted">
        <Icon name={icon} className="h-4 w-4 text-anchor-clay" />
        {label}
      </div>
      <p
        className={
          strong
            ? "text-xl font-semibold leading-8 text-anchor-ink"
            : "leading-7 text-anchor-muted"
        }
      >
        {text}
      </p>
    </div>
  );
}

function BrandLogo({ brand }) {
  if (brand.variant === "bbc") {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 210 70"
        className="h-12 w-40 opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        {["B", "B", "C"].map((letter, index) => (
          <g key={`${letter}-${index}`} transform={`translate(${index * 70} 0)`}>
            <rect x="3" y="5" width="62" height="60" fill="currentColor" />
            <text
              x="34"
              y="49"
              textAnchor="middle"
              className="fill-anchor-cream text-[39px] font-bold"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {letter}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  if (brand.variant === "national-grid") {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 240 72"
        className="h-12 w-44 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        <text
          x="16"
          y="46"
          className="fill-current text-[38px] font-normal tracking-[-0.06em]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          national
        </text>
        <text
          x="140"
          y="46"
          className="fill-current text-[38px] font-bold tracking-[-0.08em]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          grid
        </text>
        <path d="M199 15 204 20 199 25 194 20z" fill="currentColor" />
      </svg>
    );
  }

  if (brand.type === "text") {
    const words = brand.name.split(" ");

    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 220 72"
        className="h-12 w-40 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        <text
          x="110"
          y={words.length > 1 ? "32" : "45"}
          textAnchor="middle"
          className="fill-current text-[28px] font-semibold tracking-tight"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          {words[0]}
        </text>
        {words.length > 1 && (
          <text
            x="110"
            y="56"
            textAnchor="middle"
            className="fill-current text-[18px] font-semibold tracking-[0.16em]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            {words.slice(1).join(" ").toUpperCase()}
          </text>
        )}
      </svg>
    );
  }

  if (brand.variant === "lloyds") {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 260 72"
        className="h-12 w-44 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        <text
          x="130"
          y="51"
          textAnchor="middle"
          className="fill-current text-[48px] font-semibold tracking-[-0.04em]"
        >
          LLOYDS
        </text>
      </svg>
    );
  }

  if (brand.variant === "hb") {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 100 100"
        className="h-16 w-16 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="3" />
        <text
          x="50"
          y="62"
          textAnchor="middle"
          className="fill-current text-[42px] font-serif font-bold tracking-[-0.08em]"
        >
          HB
        </text>
      </svg>
    );
  }

  if (brand.variant === "hager") {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 190 72"
        className="h-12 w-36 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        <text
          x="95"
          y="47"
          textAnchor="middle"
          className="fill-current text-[42px] font-bold tracking-[-0.08em]"
        >
          :hager
        </text>
      </svg>
    );
  }

  if (brand.variant === "diageo") {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 240 72"
        className="h-12 w-40 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        <text
          x="120"
          y="50"
          textAnchor="middle"
          className="fill-current text-[46px] font-normal tracking-[-0.08em]"
        >
          DIAGEO
        </text>
      </svg>
    );
  }

  if (brand.variant === "hult") {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 260 86"
        className="h-14 w-44 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        <g fill="none" stroke="currentColor" strokeWidth="2" transform="translate(6 4)">
          <path d="M38 0 54 13v41c0 18-16 25-16 25S22 72 22 54V13z" />
          <path d="M38 0v78" />
          <path d="M22 13H0v37c0 16 14 23 22 26" />
          <path d="M54 13h22v37c0 16-14 23-22 26" />
          <path d="M14 22 38 42 62 22" />
          <path d="M14 35 38 55 62 35" />
          <path d="M14 48 38 68 62 48" />
          <path d="M30 13 38 22 46 13" />
          <path d="M30 29 38 38 46 29" />
          <path d="M30 45 38 54 46 45" />
        </g>
        <text
          x="98"
          y="38"
          className="fill-current text-[32px] font-serif tracking-[0.18em]"
        >
          HULT
        </text>
        <text
          x="100"
          y="63"
          className="fill-current text-[13px] font-bold uppercase tracking-[0.28em]"
        >
          EXECUTIVE ED
        </text>
      </svg>
    );
  }

  if (brand.variant === "nhs") {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 180 92"
        className="h-14 w-36 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        <rect x="12" y="18" width="156" height="56" rx="4" fill="currentColor" />
        <text
          x="90"
          y="59"
          textAnchor="middle"
          className="fill-anchor-cream text-[43px] font-black italic tracking-[-0.08em]"
        >
          NHS
        </text>
      </svg>
    );
  }

  if (brand.variant === "publicis") {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 220 92"
        className="h-14 w-40 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      >
        <path d="M42 22h136" stroke="currentColor" strokeWidth="3" />
        <text
          x="110"
          y="52"
          textAnchor="middle"
          className="fill-current text-[31px] font-bold tracking-[0.1em]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          PUBLICIS
        </text>
        <text
          x="110"
          y="80"
          textAnchor="middle"
          className="fill-current text-[29px] font-bold tracking-[0.1em]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          GROUPE
        </text>
      </svg>
    );
  }

  if (brand.path) {
    return (
      <svg
        role="img"
        aria-label={brand.name}
        viewBox="0 0 24 24"
        className={`${brand.size === "large" ? "h-14 w-44" : "h-11 w-36"} fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100`}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  return (
    <svg
      role="img"
      aria-label={brand.name}
      viewBox="0 0 220 72"
      className="h-12 w-40 fill-current opacity-70 transition-opacity duration-200 group-hover:opacity-100"
    >
      <text
        x="110"
        y={brand.detail ? "32" : "43"}
        textAnchor="middle"
        className={`fill-current font-bold ${brand.compact ? "text-[34px]" : "text-[28px]"}`}
      >
        {brand.mark}
      </text>
      {brand.detail && (
        <text
          x="110"
          y={brand.compact ? "59" : "56"}
          textAnchor="middle"
          className={`fill-current uppercase ${brand.compact ? "text-[30px] font-normal tracking-normal" : "text-[13px] font-semibold tracking-[0.35em]"}`}
        >
          {brand.detail}
        </text>
      )}
    </svg>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-anchor-cream text-anchor-ink">
      <header className="sticky top-0 z-50 border-b border-anchor-ink/10 bg-anchor-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="text-xl font-semibold tracking-tight">
            <span className="text-xl font-semibold tracking-tight">Solstice Consulting</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-anchor-muted md:flex">
            <a href="#approach" className="hover:text-anchor-ink">
              Approach
            </a>
            <a href="#challenges" className="hover:text-anchor-ink">
              Challenges
            </a>
            <a href="#services" className="hover:text-anchor-ink">
              Services
            </a>
            <a href="#partnerships" className="hover:text-anchor-ink">
              Partnerships
            </a>
            <a href="#about" className="hover:text-anchor-ink">
              About
            </a>
            <a href="#contact" className="hover:text-anchor-ink">
              Contact
            </a>
          </nav>
          <Button href="#contact">Start a conversation</Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.04fr_0.96fr] md:px-8 md:py-24">
          <div>
            <p className="inline-flex rounded-full border border-anchor-ink/12 bg-white px-4 py-2 text-sm font-medium text-anchor-muted">
              Leadership • Talent • Performance
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              <span className="block">Sharper leadership.</span>
              <span className="block">Better decisions.</span>
              <span className="block text-anchor-clay">Stronger performance.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-anchor-muted">
              Practical leadership and talent solutions designed for growing organisations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">
                Start a conversation
                <Icon name="arrow" className="ml-2 h-4 w-4" />
              </Button>
              <Button href="#services" variant="secondary">
                View services
              </Button>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-anchor-ink/10 bg-white p-7 shadow-soft">
            <div className="flex items-center justify-between gap-6 border-b border-anchor-ink/10 pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-anchor-clay">
                  Business outcomes
                </p>
                <p className="mt-3 text-2xl font-semibold">
                  Sharper. Better. Stronger.
                </p>
              </div>
              <div className="hidden rounded-full bg-anchor-sand p-4 sm:block">
                <Icon name="shield" className="h-7 w-7 text-anchor-moss" />
              </div>
            </div>
            <div className="mt-7 grid gap-4">
              {outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-anchor-moss" />
                  <p className="text-base leading-7 text-anchor-muted">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="approach" className="bg-anchor-ink px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Approach"
            title="Insightful, commercial and grounded in organisational reality."
            light
          />
          <div className="space-y-8 text-lg leading-8 text-white/72">
            <p>
              We combine leadership expertise, assessment insight and commercial
              understanding to create practical solutions aligned to
              organisational priorities and performance goals.
            </p>
            <p>
              Every engagement starts with a conversation. We use curious,
              commercially focused discovery to understand your organisational
              context, strategic priorities, capability gaps and the leadership
              behaviours required to drive performance.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [
                  "01",
                  "Diagnose",
                  "Identify the organisational priorities, capability gaps and leadership risks impacting performance.",
                ],
                [
                  "02",
                  "Design",
                  "Build practical leadership and talent solutions aligned to strategy, culture and business priorities.",
                ],
                [
                  "03",
                  "Develop",
                  "Strengthen leadership capability through assessment, coaching, facilitation and targeted development.",
                ],
              ].map(([num, label, text]) => (
                <article key={label} className="rounded-[1.5rem] bg-white/8 p-6 ring-1 ring-white/10">
                  <p className="text-sm font-semibold text-anchor-clay">{num}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{label}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-anchor-sand px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-4xl font-semibold leading-tight tracking-tight text-anchor-ink md:text-6xl">
            Better leadership and talent decisions create stronger organisations.
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-anchor-muted md:text-xl">
            Solstice Consulting helps organisations strengthen leadership capability,
            improve decision-making and align people performance with business
            priorities.
          </p>
        </div>
      </section>

      <section id="challenges" className="border-y border-anchor-ink/10 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Organisational challenges"
            title="Leadership and talent challenges that directly impact business performance."
            text="We work with organisations to strengthen leadership capability, improve decision-making and build the people infrastructure needed for sustainable growth and performance."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {challenges.map((item) => (
              <article
                key={item.challenge}
                className="rounded-[1.75rem] border border-anchor-ink/10 bg-anchor-cream p-6 shadow-sm"
              >
                <div className="space-y-6">
                  <CardRow icon="target" label="Challenge" text={item.challenge} strong />
                  <CardRow icon="bulb" label="Solution" text={item.solution} />
                  <CardRow icon="trend" label="Outcome" text={item.outcome} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionIntro
          eyebrow="Services"
          title="Consulting support across the full talent lifecycle."
          text="Flexible support for leadership development, management capability, coaching, assessment, recruitment and succession."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-anchor-ink/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-anchor-sand p-3 text-anchor-clay">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-anchor-muted">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="partnerships" className="border-y border-anchor-ink/10 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-anchor-clay">
              Strategic partnership challenges
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-anchor-ink md:text-5xl">
              <span className="block">More than hiring.</span>
              <span className="block text-anchor-clay">
                Broader value for your clients.
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-anchor-ink">
              <span className="block">Recruitment and people businesses</span>
              <span className="block">are increasingly expected to offer</span>
              <span className="block">more than hiring alone.</span>
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-anchor-muted">
              Clients are looking for broader leadership, assessment and talent
              solutions, but many firms do not want the cost, complexity or
              headcount involved in building these capabilities internally.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {partnerships.map((item) => (
              <article
                key={item.challenge}
                className="rounded-[1.75rem] border border-anchor-ink/10 bg-anchor-cream p-8 shadow-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-anchor-clay">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <div className="space-y-6">
                  <CardRow icon="target" label="Challenge" text={item.challenge} strong />
                  <CardRow icon="bulb" label="Solution" text={item.solution} />
                  <CardRow icon="trend" label="Outcome" text={item.outcome} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-anchor-clay">
              Ideal for
            </p>
            <div className="flex flex-wrap gap-3">
              {partnerTypes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-anchor-ink/10 bg-anchor-cream px-5 py-3 text-sm font-semibold text-anchor-muted shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionIntro
            eyebrow="About"
            title="Leadership and talent solutions grounded in organisational and commercial reality."
          />
          <div className="space-y-6 text-lg leading-8 text-anchor-muted">
            <p>
              Solstice Consulting works with organisations that want stronger
              leadership capability, better talent decisions and more aligned
              organisational performance.
            </p>
            <p>
              The work combines leadership consulting, assessment, coaching and
              talent expertise to help organisations strengthen capability,
              improve decision-making and support sustainable growth.
            </p>
            <p>
              Solutions are practical, commercially grounded and designed around
              the realities of how people, teams and organisations operate.
            </p>
          </div>
        </div>
      </section>

      <section id="founder" className="border-y border-anchor-ink/10 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-anchor-clay">
              Founder
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-anchor-ink md:text-5xl">
              Leadership and talent advisory grounded in commercial and organisational experience.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-anchor-muted">
              <p>
                Solstice Consulting was founded by Francesca Hernandez from a
                belief that organisations perform best when leadership,
                capability and organisational clarity are intentionally aligned.
              </p>
              <p>
                Too often, high quality leadership development, assessment and
                organisational consulting are positioned as overly complex,
                inaccessible or reserved for organisations with global consultancy
                budgets.
              </p>
              <p>
                Solstice was created to offer a more practical, commercially
                grounded alternative, combining the behavioural insight, strategic
                thinking and leadership expertise associated with larger
                consultancies and executive education providers, delivered in a way
                that is more agile, accessible and connected to organisational
                reality.
              </p>
              <p>
                With experience spanning recruitment, leadership consulting,
                assessment, executive coaching and organisational capability,
                Francesca combines commercial understanding with behavioural insight
                to help organisations strengthen leadership capability, improve
                talent decisions and unlock higher performance.
              </p>
              <p>
                Having worked across both recruitment and consulting environments,
                she brings an unusually broad perspective on leadership, potential,
                organisational dynamics and commercial performance, combining
                strategic thinking with practical understanding of how
                people, teams and businesses operate in reality.
              </p>
              <p>
                Alongside core consulting expertise, Solstice works with a
                trusted network of specialist partners across occupational
                psychology, coaching, mediation and organisational consulting,
                bringing together the right expertise for each engagement.
              </p>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-sm text-center lg:ml-auto">
            <div className="overflow-hidden rounded-[2rem] border border-anchor-ink/10 bg-anchor-sand shadow-soft">
              <img
                src="/assets/francesca-headshot.png"
                alt="Francesca Hernandez, Founder of Solstice Consulting"
                className="aspect-[4/5] w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="hidden aspect-[4/5] items-center justify-center px-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-anchor-muted">
                Francesca Hernandez
              </div>
            </div>
            <figcaption className="mt-5 text-sm leading-6 text-anchor-muted">
              <span className="block font-semibold text-anchor-ink">
                Francesca Hernandez
              </span>
              <span>Founder, Solstice Consulting</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="experience" className="border-y border-anchor-ink/10 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Selected Experience"
            title="Experience across leading brands, complex organisations and high-performance teams."
            text="Our work is informed by experience across financial services, energy, technology, FMCG, creative industries, executive education and professional services."
          />

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {experienceBrands.map((brand) => (
              <div
                key={brand.name}
                className="group flex min-h-20 items-center justify-center text-anchor-ink"
              >
                <BrandLogo brand={brand} />
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm font-semibold tracking-wide text-anchor-muted">
            Leadership development • Assessment • Coaching • Talent advisory •
            Management capability
          </p>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-anchor-sand px-6 py-14 text-center md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-anchor-clay">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Ready to strengthen leadership capability and organisational performance?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-anchor-muted">
            Let’s discuss the challenges, priorities and capability gaps
            impacting your organisation and the practical solutions that can help
            address them.
          </p>
          <div className="mt-8">
            <Button href="mailto:hello@solsticeconsulting.example">
              Book a consultation
              <Icon name="arrow" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-anchor-ink/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-anchor-muted md:flex-row">
          <p>© 2026 Solstice Consulting. Leadership • Talent • Performance.</p>
          <p>Leadership development · Coaching · Assessment · Selection · Talent mapping</p>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
