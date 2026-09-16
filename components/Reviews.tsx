const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Moturi+Farmstay+Vemulawada+reviews";

const reviews = [
  {
    name: "S Anurag Reddy",
    details: "2 reviews · Business trip · Friends",
    date: "2 weeks ago",
    text: "I’m a frequent visitor to Vemulawada, but this was my first time staying at this hotel. We booked the hotel after reading the reviews, and it turned out to be a very good experience. The stay was comfortable, calm, and everything was well taken care of. I would highly recommend this hotel to anyone looking for a good place to stay.",
    highlights: "Luxury · Great view · Quiet · Great value",
  },
  {
    name: "Baloju Rajesh",
    details: "Local Guide · 8 reviews · 1 photo",
    date: "1 week ago",
    text: "Moturi Farmstay is a beautiful escape into nature. What makes this place truly special is the peaceful countryside atmosphere, surrounded by lush green paddy fields, cows, buffaloes, and adorable calves.",
    highlights: "Peaceful countryside · Nature · Family friendly",
  },
  {
    name: "Ch Raj Bharath Reddy",
    details: "Local Guide · 6 reviews · 11 photos",
    date: "3 months ago",
    text: "Visited with my family and we had a good experience. The place has a nice village atmosphere, very peaceful and relaxing. It offers a calm stay close to the temple and is a lovely alternative to regular hotel rooms or lodges.",
    highlights: "Peaceful · Village atmosphere · Family stay",
  },
  {
    name: "Rakesh Chitla",
    details: "Local Guide · 284 reviews · 441 photos",
    date: "2 months ago",
    text: "We traveled from Nizamabad for a family weekend trip and had a wonderful stay. The location is very peaceful, surrounded by greenery and fresh air, and it’s just about 5–6 km from the main temple. We enjoyed the relaxing environment and the self-cooking facility. Big thanks to the caretaker for being so supportive and hospitable. Will definitely visit again!",
    highlights: "Great view · Safe · Nature lovers · Self-cooking",
  },
  {
    name: "Sanjay Anumandla",
    details: "5 reviews",
    date: "3 months ago",
    text: "Had a very pleasant stay here. The place has a nice ambience, is well-maintained, and provides all the necessary facilities for a comfortable stay. The people there were very good and the overall experience was smooth and relaxing. Would definitely recommend this place if you’re staying in Vemulawada.",
    highlights: "Well-maintained · Comfortable · Relaxing",
  },
  {
    name: "Vijay Islavath",
    details: "7 reviews · Family trip",
    date: "3 months ago",
    text: "We had an amazing stay at the farmhouse. The property is exceptionally well-maintained, offering a perfect escape from busy city life. The peaceful surroundings, clean facilities, and warm hospitality made our experience truly memorable. Perfect for people visiting Vemulawada temple and Sircilla for work or a family trip.",
    highlights: "Great location · Clean facilities · Warm hospitality",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-teal-800 sm:mb-4 sm:text-4xl">
          Guest Reviews
        </h2>
        <p className="mb-8 text-center text-sm text-stone-600 sm:mb-12 sm:text-base">
          What our guests say about their stay at Moturi Farmstay in Vemulawada.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-amber-100 bg-amber-50/60 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-teal-900">{review.name}</h3>
                  <p className="mt-1 text-xs text-stone-500">{review.details}</p>
                </div>
                <span className="shrink-0 text-amber-500" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
              </div>
              <p className="mt-2 text-xs text-stone-500">{review.date} on Google</p>
              <p className="mt-4 flex-1 text-sm leading-6 text-stone-700">“{review.text}”</p>
              <p className="mt-5 border-t border-amber-200 pt-4 text-xs font-medium text-teal-700">
                {review.highlights}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-amber-100 bg-amber-50 p-8 text-center shadow-sm sm:mt-12">
          <p className="text-lg font-semibold text-teal-800">⭐ Loved by our guests</p>
          <p className="mt-2 text-sm text-stone-600 sm:text-base">
            Read more genuine reviews from families, pilgrims, and weekend travellers.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-800"
          >
            Read our reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
