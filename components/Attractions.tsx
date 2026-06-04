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
      className="py-12 sm:py-20 bg-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 text-teal-800">
          Nearby Attractions
        </h2>

        <p className="text-center text-stone-600 mb-8 sm:mb-12 text-sm sm:text-base">
          Explore famous temples and spiritual destinations near Moturi
          Farmstay Vemulawada.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {places.map((place) => (
            <div
              key={place.name}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-amber-100"
            >
              <h3 className="text-xl font-semibold mb-3 text-teal-800">
                {place.name}
              </h3>

              <p className="text-green-700 font-medium mb-3">
                📍 {place.distance}
              </p>

              <p className="text-stone-600 leading-7">
                {place.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}