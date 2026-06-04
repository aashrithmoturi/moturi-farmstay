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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="bg-teal-700/50 border border-teal-600 p-4 sm:p-6 rounded-xl text-center hover:bg-teal-700 transition"
            >
              <span className="text-2xl sm:text-3xl block mb-2 sm:mb-3">{feature.icon}</span>
              <span className="text-white font-medium text-sm sm:text-base">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}