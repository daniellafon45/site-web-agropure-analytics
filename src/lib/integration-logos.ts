import agco from "@/assets/integrations/agco.png";
import agrotractor from "@/assets/integrations/agrotractor.png";
import claas from "@/assets/integrations/claas.png";
import cnh from "@/assets/integrations/cnh.png";
import dji from "@/assets/integrations/dji.png";
import johnDeere from "@/assets/integrations/john-deere.png";
import kubota from "@/assets/integrations/kubota.png";
import mahindra from "@/assets/integrations/mahindra.png";
import sdf from "@/assets/integrations/sdf.png";
import sensefly from "@/assets/integrations/sensefly.png";
import xag from "@/assets/integrations/xag.png";
import agcoWhite from "@/assets/integrations/white/agco.png";
import agrotractorWhite from "@/assets/integrations/white/agrotractor.png";
import claasWhite from "@/assets/integrations/white/claas.png";
import cnhWhite from "@/assets/integrations/white/cnh.png";
import djiWhite from "@/assets/integrations/white/dji.png";
import johnDeereWhite from "@/assets/integrations/white/john-deere.png";
import kubotaWhite from "@/assets/integrations/white/kubota.png";
import mahindraWhite from "@/assets/integrations/white/mahindra.png";
import sdfWhite from "@/assets/integrations/white/sdf.png";
import senseflyWhite from "@/assets/integrations/white/sensefly.png";
import xagWhite from "@/assets/integrations/white/xag.png";

export type IntegrationLogo = {
  id: string;
  name: string;
  url: string;
  color: string;
  white: string;
};

export const INTEGRATION_LOGOS: IntegrationLogo[] = [
  { id: "agco", name: "AGCO", url: "https://www.agcocorp.com/", color: agco, white: agcoWhite },
  {
    id: "john-deere",
    name: "John Deere",
    url: "https://www.deere.com/",
    color: johnDeere,
    white: johnDeereWhite,
  },
  { id: "cnh", name: "CNH", url: "https://www.cnh.com/", color: cnh, white: cnhWhite },
  { id: "kubota", name: "Kubota", url: "https://www.kubota.com/", color: kubota, white: kubotaWhite },
  { id: "claas", name: "Claas", url: "https://www.claas.com/", color: claas, white: claasWhite },
  {
    id: "mahindra",
    name: "Mahindra",
    url: "https://www.mahindratractor.com/",
    color: mahindra,
    white: mahindraWhite,
  },
  { id: "sdf", name: "SDF", url: "https://www.sdfgroup.com/en/", color: sdf, white: sdfWhite },
  {
    id: "agrotractor",
    name: "Argo Tractors",
    url: "https://www.argotractors.com/",
    color: agrotractor,
    white: agrotractorWhite,
  },
  { id: "dji", name: "DJI Agriculture", url: "https://ag.dji.com/", color: dji, white: djiWhite },
  {
    id: "sensefly",
    name: "senseFly",
    url: "https://www.sensefly.com/",
    color: sensefly,
    white: senseflyWhite,
  },
  { id: "xag", name: "XAG", url: "https://www.xa.com/en", color: xag, white: xagWhite },
];
