import { Reveal, Stagger, RevealItem } from "./motion/Reveal";

export default function Attractions() {
  const places = [
    {
      name: "Sri Raja Rajeshwara Swamy Temple",
      distance: "Approx. 6 km",
      description:
        "One of Telangana's most famous Shiva temples attracting devotees from across India.",
    },
    {
      name: "Nampally Narasimha Swamy Temple",
      distance: "Approx. 6 km",
      description:
        "A scenic hill temple dedicated to Lord Narasimha with beautiful views and spiritual significance.",
    },
    {
      name: "Agraharam Temple",
      distance: "Approx. 5 km",
      description:
        "A peaceful and historic temple known for its traditional architecture and serene surroundings.",
    },
  ];

  return (
    <section
      id="attractions"
      className="relative overflow-hidden bg-amber-50 py-12 sm:py-20"
    >
      <span className="mo-blob right-0 top-0 h-56 w-56 bg-teal-300/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="up">
          <h2 className="mb-3 text-center text-3xl font-bold text-teal-800 sm:mb-4 sm:text-4xl">
            Nearby Attractions
          </h2>
          <p className="mb-8 text-center text-sm text-stone-600 sm:mb-12 sm:text-base">
            Explore famous temples and spiritual destinations near Moturi
            Farmstay Vemulawada.
          </p>
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
          {places.map((place) => (
            <RevealItem key={place.name} direction="up">
              <div className="mo-card mo-sweep h-full rounded-2xl border border-amber-100 bg-white p-6 shadow-md sm:p-8">
                <h3 className="mb-3 text-xl font-semibold text-teal-800">
                  {place.name}
                </h3>
                <p className="mb-3 font-medium text-green-700">
                  📍 {place.distance}
                </p>
                <p className="leading-7 text-stone-600">{place.description}</p>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}