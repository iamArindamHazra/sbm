const stats = [
  { value: "15+", label: "Years in business" },
  { value: "20+", label: "Trained workforce" },
  { value: "India & USA", label: "Delivery reach" },
  { value: "FSSAI", label: "Certified quality" },
];

export default function Stats() {
  return (
    <section
      className="py-16 md:py-12 sm:py-24 bg-background border-t border-white/10"
      aria-label="Company at a glance"
      id="stats"
    >
      <div className="w-[90%] max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-white m-0">
                {value}
              </p>
              <p className="text-sm md:text-base text-gray-400 m-0 mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
