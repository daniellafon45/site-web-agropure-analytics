import aquaAction from "@/assets/partners/aqua-action.png";
import aquaHacking from "@/assets/partners/aqua-hacking.png";
import desjardins from "@/assets/partners/desjardins.png";
import ets from "@/assets/partners/ets.png";
import oseEntreprendre from "@/assets/partners/ose-entreprendre.png";
import aquaActionWhite from "@/assets/partners/white/aqua-action.png";
import aquaHackingWhite from "@/assets/partners/white/aqua-hacking.png";
import desjardinsWhite from "@/assets/partners/white/desjardins.png";
import etsWhite from "@/assets/partners/white/ets.png";
import oseEntreprendreWhite from "@/assets/partners/white/ose-entreprendre.png";

export type PartnerLogo = {
  id: string;
  name: string;
  url: string;
  color: string;
  white: string;
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: "aqua-action",
    name: "Aqua Action",
    url: "https://www.aqua-action.ca/",
    color: aquaAction,
    white: aquaActionWhite,
  },
  {
    id: "aqua-hacking",
    name: "AquaHacking",
    url: "https://aquahacking.com/",
    color: aquaHacking,
    white: aquaHackingWhite,
  },
  {
    id: "desjardins",
    name: "Desjardins",
    url: "https://www.desjardins.com/",
    color: desjardins,
    white: desjardinsWhite,
  },
  {
    id: "ets",
    name: "ÉTS",
    url: "https://www.etsmtl.ca/",
    color: ets,
    white: etsWhite,
  },
  {
    id: "ose-entreprendre",
    name: "OSE Entreprendre",
    url: "https://www.oseentreprendre.ca/",
    color: oseEntreprendre,
    white: oseEntreprendreWhite,
  },
];
