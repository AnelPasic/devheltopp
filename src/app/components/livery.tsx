import {
  Apple,
  ChefHat,
  Sandwich,
  Sparkles,
  UtensilsCrossed,
  Wind,
  type LucideIcon,
} from "lucide-react";

export interface LiveryService {
  name: string;
  href: string;
  proof: string;
  blurb: string;
}

/** One icon per service, used in the header dropdown and the puzzle section. */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  Frukt: Apple,
  Lunsj: Sandwich,
  Kantine: UtensilsCrossed,
  Catering: ChefHat,
  Inneklima: Wind,
  Renhold: Sparkles,
};

export const SERVICES: LiveryService[] = [
  {
    name: "Frukt",
    href: "/tjenester/frukt",
    proof: "Du bestemmer størrelse og innhold.",
    blurb: "Du bestemmer størrelse og innhold. Vi leverer daglig eller etter behov.",
  },
  {
    name: "Lunsj",
    href: "/tjenester/lunsj",
    proof: "For 5 personer og oppover.",
    blurb: "Lønnsomme og velsmakende lunsjordninger for 5 personer og oppover.",
  },
  {
    name: "Kantine",
    href: "/tjenester/kantine",
    proof: "Vi tar oss av hele lunsjavviklingen.",
    blurb: "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
  },
  {
    name: "Catering",
    href: "/tjenester/catering",
    proof: "Vi tilbereder alt i vårt eget kjøkken.",
    blurb: "Vi tilbereder alt i vårt eget kjøkken. Fra varmmat, salater og påsmurt til spennende møte- og kursmat.",
  },
  {
    name: "Inneklima",
    href: "/tjenester/inneklima",
    proof: "Helt uten byggtekniske endringer.",
    blurb: "Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
  },
  {
    name: "Renhold",
    href: "/tjenester/renhold",
    proof: "Godt renhold gir bedre trivsel.",
    blurb: "Godt renhold gir bedre trivsel og sørger for et bedre arbeidsmiljø.",
  },
];
