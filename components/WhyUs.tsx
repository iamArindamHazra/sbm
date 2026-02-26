const features = [
  { icon: "cogs", title: "Machine made" },
  { icon: "thumbs-up", title: "Pure & fresh" },
  { icon: "flask", title: "No harmful chemicals" },
  { icon: "check", title: "FSSAI approved" },
  { icon: "leaf", title: "Environment friendly" },
];

function FeatureIcon({ name }: { name: string }) {
  const cls = "w-8 h-8";
  switch (name) {
    case "cogs":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "thumbs-up":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
        </svg>
      );
    case "flask":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "check":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "leaf":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 2.66 2.66 0 003 8v2a2.66 2.66 0 001.05 2.05A1 1 0 006 11v.065a31.922 31.922 0 01-.435 2.059 2.64 2.64 0 01-.945 1.067 1 1 0 00-.95.69 1 1 0 00.15 1.015 2.64 2.64 0 01.945 1.067 31.922 31.922 0 01.435 2.059 1 1 0 00.95.69h.01a1 1 0 00.95-.69c.054-.207.114-.413.18-.618.226-.966.506-1.93.84-2.734.167-.403.356-.786.57-1.116.208-.322.477-.65.822-.88a1 1 0 001.45-.385c.166-.415.286-.844.36-1.272.15-.857.187-1.913.187-2.094V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v.065c0 .18-.037 1.237-.187 2.094-.074.428-.194.857-.36 1.272z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyUs() {
  return (
    <section
      id="why"
      className="py-24 bg-background-muted relative overflow-x-hidden"
    >
      <h2 className="font-display text-center text-accent text-3xl md:text-4xl m-0 font-semibold">
        Why to choose us?
      </h2>
      <div className="w-[80%] max-w-6xl mx-auto relative z-10 mt-14 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="glass inline-flex items-center justify-center w-20 h-20 rounded-full text-accent p-4 border-2 border-accent/30">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="text-accent mt-4 font-semibold text-gray-100">
                {f.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <h2 className="font-display text-center text-accent text-3xl md:text-4xl mt-24 font-semibold">
        Our products
      </h2>
    </section>
  );
}
