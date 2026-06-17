import { Reveal, Stagger, RevealItem } from "./motion/Reveal";

const features = [
  { icon: "🏡", label: "1BHK Farmstay" },
  { icon: "👨‍👩‍👧‍👦", label: "Accommodates 10 Adults" },
  { icon: "👪", label: "Family Friendly" },
  { icon: "🎊", label: "Bonalu Celebrations" },
  { icon: "👥", label: "Friends Get-Together" },
  { icon: "🌿", label: "Nature Experience" },
  { icon: "🐄", label: "Cattle Farm" },
  { icon: "📸", label: "Photoshoot Location" },
];

export default function Features() {
  return (
    <section className="bg-teal-800 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal direction="up">
          <h2 className="mb-8 text-center text-3xl font-bold text-white sm:mb-12 sm:text-4xl">
            Why Choose Us
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <RevealItem key={feature.label} direction="zoom">
              <div className="mo-card mo-sweep rounded-xl border border-teal-600 bg-teal-700/50 p-4 text-center sm:p-6">
                <span className="mo-float-slow mb-2 block text-2xl sm:mb-3 sm:text-3xl">
                  {feature.icon}
                </span>
                <span className="text-sm font-medium text-white sm:text-base">
                  {feature.label}
                </span>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}