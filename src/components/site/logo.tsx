import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-agropure.png";
import logoWhite from "@/assets/logo-agropure-white.png";
import { useLocale } from "@/i18n/context";

export function Logo({
  className = "h-10 sm:h-12 w-auto",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const { locale } = useLocale();
  const src = variant === "light" ? logoWhite : logo;

  return (
    <Link to="/$locale" params={{ locale }} className="shrink-0">
      <img src={src} alt="AgroPure Analytics" width={200} height={48} className={className} />
    </Link>
  );
}
