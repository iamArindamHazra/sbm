const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 450;

type LazyMapProps = {
  src: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function LazyMap({
  src,
  title,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className = "",
}: Readonly<LazyMapProps>) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-2xl bg-background-alt/50 ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: 0, maxWidth: "100%" }}
        allowFullScreen
        title={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full rounded-2xl"
      />
    </div>
  );
}
