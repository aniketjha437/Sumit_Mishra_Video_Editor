import VideoCard from "./VideoCard";

const longFormVideos = [
  {
    id: "8VU9AxVkDDE",
    title: "Long Form Video 1",
  },
  {
    id: "RrfJRnF-eTI",
    title: "Long Form Video 2",
  },
];

export default function LongForm() {
  return (
    <section
      id="work"
      className="bg-[#0b0b0b] text-white
                 py-16 sm:py-20 md:py-24"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mb-12 sm:mb-16">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl
                       font-['Bebas_Neue'] tracking-wider text-yellow-400"
        >
          LONG FORM
        </h2>

        <p
          className="mt-3 text-[10px] sm:text-xs
                      tracking-[0.35em] text-gray-400"
        >
          CINEMATIC STORYTELLING
        </p>
      </div>

      {/* Videos Grid */}
      <div
        className="max-w-6xl mx-auto
                   grid grid-cols-1 sm:grid-cols-2
                   gap-8 sm:gap-10 md:gap-12
                   px-4 sm:px-6"
      >
        {longFormVideos.map((video) => (
          <VideoCard key={video.id} youtubeId={video.id} title={video.title} />
        ))}
      </div>
    </section>
  );
}
