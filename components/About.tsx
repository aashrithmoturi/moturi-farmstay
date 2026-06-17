import { Reveal } from "./motion/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-amber-50 py-12 sm:py-20"
    >
      <span className="mo-blob -left-10 top-10 h-44 w-44 bg-teal-300/40" />
      <span
        className="mo-blob -right-10 bottom-0 h-52 w-52 bg-amber-300/40"
        style={{ animationDelay: "4s" }}
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal direction="up">
          <h2 className="mb-4 text-3xl font-bold text-teal-800 sm:mb-6 sm:text-4xl">
            About <span className="mo-gradient-text">Moturi Farmstay</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <p className="text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
            Moturi Farm Stay is a peaceful getaway located on Marupaka Road, near Reddy Bhavan in Vemulawada. Surrounded by lush greenery, open spaces, and farm animals, it offers the perfect blend of comfort and nature, making it an ideal place to relax and unwind.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="mt-4 text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
            Our 1BHK farmstay can accommodate up to 10 adults and is ideal for
            temple visitors, Bonalu celebrations, family gatherings, friends
            get-togethers, photoshoots, and weekend relaxation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}