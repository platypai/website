// Abstract platypus motif — three rounded "petal" shapes arranged into a stylized
// platypus silhouette. Inspired by the Platypai brochure. Designed to be used as a
// subtle decorative element (low opacity, soft background fill) — NOT as the logo.

interface PlatypusMarkProps {
  /** Pixel size (renders as a square). */
  size?: number;
  /** Container opacity for subtle decorative use. */
  opacity?: number;
  /** Wrapper classes (positioning, blur, animations). */
  className?: string;
  /** When true, fills shapes with brand colors. When false, monochrome navy at low opacity. */
  color?: boolean;
}

/**
 * Three rounded leaf shapes positioned around a square, each in a brand color:
 *  · top-left  → Turquoise  (the head)
 *  · top-right → Mustard    (the body)
 *  · bottom    → Amaranth   (the tail)
 * Together they form an abstract platypus.
 *
 * The shapes use `rx`/`ry` on a path with two opposite rounded corners — drawn
 * as a closed Bézier path inside the 200x220 viewBox.
 */
const PlatypusMark = ({
  size = 200,
  opacity = 1,
  className = '',
  color = true,
}: PlatypusMarkProps) => {
  // Single-color mode is a brand-navy outline for very subtle watermarks.
  const teal = color ? '#4ECDC4' : '#0F3559';
  const mustard = color ? '#FFD657' : '#0F3559';
  const amaranth = color ? '#E01C4A' : '#0F3559';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 220"
      width={size}
      height={size * 1.1}
      style={{ opacity }}
      className={className}
      aria-hidden="true"
    >
      {/* Top-left teal "petal" — rounded top-left + bottom-right corners */}
      <path
        d="M 10 10 Q 10 0 20 0 H 78 Q 88 0 88 10 V 88 Q 88 98 78 98 H 30 Q 10 98 10 78 Z"
        fill={teal}
      />

      {/* Top-right mustard "petal" — rounded top-right + bottom-left */}
      <path
        d="M 122 10 Q 122 0 132 0 H 180 Q 190 0 190 10 V 78 Q 190 98 170 98 H 132 Q 122 98 122 88 Z"
        fill={mustard}
      />

      {/* Bottom amaranth "petal" — rounded all four corners, slightly elongated */}
      <path
        d="M 30 122 Q 10 122 10 142 V 188 Q 10 218 40 218 H 160 Q 190 218 190 188 V 142 Q 190 122 170 122 Z"
        fill={amaranth}
      />
    </svg>
  );
};

export default PlatypusMark;
