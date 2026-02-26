import {
  BeakerIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  HandThumbUpIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

const features = [
  { icon: "cogs", title: "Machine made" },
  { icon: "thumbs-up", title: "Pure & fresh" },
  { icon: "flask", title: "No harmful chemicals" },
  { icon: "check", title: "FSSAI approved" },
  { icon: "environment", title: "Environment friendly" },
];

function FeatureIcon({ name }: { name: string }) {
  const cls = "w-8 h-8";

  const iconMap = {
    cogs: Cog6ToothIcon,
    "thumbs-up": HandThumbUpIcon,
    flask: BeakerIcon,
    check: CheckCircleIcon,
    environment: GlobeAmericasIcon,
  } as const;

  const Icon = iconMap[name as keyof typeof iconMap];

  if (!Icon) return null;

  return <Icon className={cls} aria-hidden="true" />;
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
    </section>
  );
}
