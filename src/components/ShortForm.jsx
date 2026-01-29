import VideoCard from "./VideoCard";

const shortFormVideos = [
  "bc8DB49z06M",
  "Msv5oRgAWGw",
  "s9t7VZ03X8U",
  "fPiFclCMEmU",
  "U9kRc9w_08Q",
  "r2nGBaY4oDY",
  "f4HvQp9twjQ",
];

export default function ShortForm() {
  return (
    <section className="bg-[#0b0b0b] text-white py-14 sm:py-18 md:py-24">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Bebas_Neue'] tracking-wider text-yellow-400">
          SHORT FORM
        </h2>
        <p className="mt-3 text-[10px] sm:text-xs tracking-[0.35em] text-gray-400">
          REELS & SHORT CONTENT
        </p>
      </div>

      {/* Grid */}
      <div
        className="
          max-w-6xl mx-auto
          grid gap-4 sm:gap-6 md:gap-8
          px-4 sm:px-6
          grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
        "
      >
        {shortFormVideos.map((id) => (
          <VideoCard key={id} youtubeId={id} title="Short Form Edit" />
        ))}
      </div>
    </section>
  );
}
