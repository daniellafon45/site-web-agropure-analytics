import { cn } from "@/lib/utils";

type ThemeAwareLogoProps = {
  color: string;
  white: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

/** Affiche la variante couleur ou blanche via CSS `.dark` — évite le flash au chargement (SSR/hydratation). */
export function ThemeAwareLogo({
  color,
  white,
  alt,
  className,
  width,
  height,
  loading = "lazy",
}: ThemeAwareLogoProps) {
  return (
    <>
      <img
        src={color}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={cn(className, "dark:hidden")}
      />
      <img
        src={white}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={cn(className, "hidden dark:block")}
      />
    </>
  );
}
