export default function VideoCard({ youtubeId, title }) {
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const link = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-[#111] rounded-lg overflow-hidden border border-white/10"
    >
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xl scale-90 group-hover:scale-100 transition">
          ▶
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-white leading-snug">{title}</h3>
      </div>
    </a>
  );
}
