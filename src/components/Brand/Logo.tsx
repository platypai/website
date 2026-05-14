// Inline-SVG PlatypAI logo mark.
// Visual reference: a soft "P" containing a node with a teal core and a pink
// accent — a quiet visual metaphor for "Expert (teal) holding AI (pink)."
// All colors are tokens (currentColor + brand tokens) so the mark composes
// well on white, navy, and gradient backgrounds.

interface LogoProps {
  /** Pixel size for both width and height. */
  size?: number;
  /** Optional wrapping classes (e.g., shadow, ring). */
  className?: string;
  /** When true, draws on a navy chip; when false, draws on transparent. */
  chip?: boolean;
}

const Logo = ({ size = 36, className = '', chip = true }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="PlatypAI"
      className={className}
    >
      <defs>
        <linearGradient id="platypaiChip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A192F" />
          <stop offset="100%" stopColor="#082037" />
        </linearGradient>
        <radialGradient id="platypaiCore" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#CAF0F8" />
          <stop offset="60%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#0077B6" />
        </radialGradient>
      </defs>

      {chip && (
        <rect x="0" y="0" width="48" height="48" rx="12" fill="url(#platypaiChip)" />
      )}

      {/* Soft P glyph — a vertical stem and a half-loop */}
      <path
        d="M14 11 V37"
        stroke="#CAF0F8"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 11 Q 30 11 30 19 Q 30 27 14 27"
        stroke="#CAF0F8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Expert core (teal) */}
      <circle cx="22" cy="19" r="4.5" fill="url(#platypaiCore)" />

      {/* AI accent (pink) */}
      <circle cx="33" cy="30" r="3" fill="#FF4D6D" />

      {/* Subtle connecting line: expert → AI */}
      <path
        d="M24.5 21.5 L31 28"
        stroke="#FF4D6D"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="1.5 2"
      />
    </svg>
  );
};

export default Logo;
