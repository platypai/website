// Official Platypai logo — sourced from /From Miniscule/Favicons/platypaiv8-07.svg
// and copied to /public/logo.svg. We render via an <img> tag so the asset is a single
// network request (cached by the browser) and remains crisp at every size.

interface LogoProps {
  /** Pixel size for both width and height. */
  size?: number;
  /** Optional wrapping classes (e.g., shadow, ring). */
  className?: string;
}

const Logo = ({ size = 40, className = '' }: LogoProps) => {
  return (
    <img
      src="/logo.svg"
      alt="PlatypAI"
      width={size}
      height={size}
      className={className}
      style={{ display: 'block' }}
    />
  );
};

export default Logo;
