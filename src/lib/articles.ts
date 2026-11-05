/* Article images are self-hosted; hotlinking the CMS was flaky. */
import gardshusImg from "../images/catering/garden/gardshus.jpg";
import fordEtransitImg from "../images/aktuelt/ford-etransit.jpg";
import fordTilpassetImg from "../images/aktuelt/ford-tilpasset.jpg";
import dawidImg from "../images/aktuelt/dawid.jpg";
import ukrainaImg from "../images/aktuelt/ukraina.jpg";

export type ArticleBlock =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "bullets"; heading?: string; items: string[] }
  | { type: "qa"; question: string; answer: string };

export interface Article {
  slug: string;
  title: string;
  category: string;
  ingress: string;
  image: string;
  imageAlt: string;
  /** Links the card straight to another page on the site instead of an
      article of its own; the old /aktuelt URL redirects there. */
  href?: string;
  blocks: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "helt-opplagt-pa-garden",
    title: "Helt Opplagt på gården",
    category: "Arrangementer",
    ingress: "Nå kan vi også stille med lokaler til ditt arrangement.",
    image: gardshusImg,
    imageAlt: "Hovedhuset på Store Stensrud Gård",
    href: "/tjenester/catering/helt-opplagt-pa-garden",
    blocks: [],
  },
  {
    slug: "helt-opplagt-samarbeider-med-ford-pa-veien-mot-nullutslipp",
    title: "Helt Opplagt samarbeider med Ford på veien mot nullutslipp",
    category: "Miljø",
    ingress: "Gøy å ha med seg Ford på veien mot nullutslipp.",
    image: fordEtransitImg,
    imageAlt: "Åtte nye Ford E-Transit hos Helt Opplagt",
    blocks: [
      {
        type: "image",
        src: fordEtransitImg,
        alt: "Sjåførene med de nye Ford E-Transit-bilene",
        caption:
          "Helelektrisk vinterstemning: F.v. Thomas Henriksen, Roy Berg-Paulsen, Mats Solberg, Mihai Stoian, Steffen Molstad og Dawid Zaucha er svært fornøyde med sine nye Ford E-Transit elektriske varebiler.",
      },
      {
        type: "text",
        paragraphs: [
          "Endelig har vi fått åtte nye Ford E-Transit som erstatter våre gamle dieseldrevne varebiler. Så nå kan vi levere lunsj, fruktkurver og inneklimatjenester helt utslippsfritt. Smart for både miljøet, lommeboka og de ansattes trivsel bak rattet.",
          "Etter å ha ventet mer enn 10 år på en elektrisk varebil, har vi endelig funnet et fullgodt alternativ til de fossile varebilene. Med åtte nye Ford E-Transit i ulike og spesialtilpassede versjoner leverer vi nå sunn lunsj, fruktkurver, renhold og bedre inneklima - helt utslippsfritt - til hundrevis av bedrifter i Oslo-området.",
          "– Som en bedrift som leverer tjenester for å bedre helse og trivsel på arbeidsplassen, har miljø og samfunnsansvar alltid vært svært viktig for oss. Nå er vi endelig trygge på at teknologi, rekkevidde og kapasitet på de store varebilene fra Ford er god nok til at vi kan starte utskiftingen av alle våre fossilbiler, med enda flere elbiler fra Ford, sier bilansvarlig hos Helt Opplagt, Mats Solberg.",
        ],
      },
      {
        type: "text",
        heading: "Miljøvennlig, lavere driftskostnader og mer fornøyde sjåfører",
        paragraphs: [
          "Han forteller om noen svært positive første måneder med Fords nye 2-tonns helelektriske nyttekjøretøy.",
          "– E-Transit har så langt levert over vår forventning. Vi har redusert driftskostnadene med 50 % sammenlignet med tilsvarende modell med diesel. Sjåførene våre, som vi kaller kundebehandlere, kjemper om å få være de som kjører E-Transitene. De er både en bedre arbeidsplass og mer økonomisk i drift. Dette har vært en smart investering som alle kommer godt ut av - enten det er snakk om miljøet, økonomien eller de ansattes trivsel bak rattet, sier Solberg.",
          "Helt Opplagt er en CO2-nøytral virksomhet som i mer enn 35 år har levert forskjellige abonnementstjenester på fruktkurver, sunn lunsj, catering, renhold og et bedre inneklima til flere hundre bedrifter i Oslo-området.",
        ],
      },
      {
        type: "image",
        src: fordTilpassetImg,
        alt: "Spesialtilpasset Ford E-Transit",
        caption:
          "– Av de åtte E-Transitene vi har nå er det gjort fire ulike spesialtilpasninger. Det går på grad av isolasjon og interiørløsninger, ekstra varme og kjøling for riktig frakttemperatur til både frukt og grønt og lunsj – sommer som vinter, sier bilansvarlig i Helt Opplagt.",
      },
      {
        type: "text",
        heading: "Miljøhensyn stadig viktigere i anbud: E-Transit markerer starten på en elektrisk overgang",
        paragraphs: [
          "Solberg forteller at det allerede nå har kommet aktører innenfor både det private og offentlige som ønsker nullutslippstransport når de legger ut sine anbud.",
          "– For oss har det å ta ansvar for miljøet og vise samfunnsansvar vært en av de viktigste bærebjelkene for vår virksomhet i flere tiår. Samtidig er det positivt for miljøet at også de som tildeler anbud i økende grad er opptatt av miljøhensyn. Vårt mål er at alle våre firmabiler har nullutslipp innen 2030. Sammen med våre 10 elektriske Mustang Mach-E firmabiler gjør nye Ford E-Transit at vi nå endelig er i full gang med den overgangen som vi har ønsket i mer enn ti år, sier bilansvarlig Mats Solberg.",
        ],
      },
    ],
  },
  {
    slug: "vi-jobber-rekke-en-hand-til-de-ukrainske-flyktningene",
    title: "Vi jobber for å rekke en hånd til de ukrainske flyktningene",
    category: "Samfunnsansvar",
    ingress:
      "Vi i Helt Opplagt har hatt god tradisjon med å ta et tydelig samfunnsansvar.",
    image: ukrainaImg,
    imageAlt: "Helt Opplagt rekker en hånd til ukrainske flyktninger",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Vi i Helt Opplagt har hatt god tradisjon med å ta et tydelig samfunnsansvar, for oss helt riktig å umiddelbart rekke en hånd til de ukrainske flyktningene som står i en umenneskelig hverdag.",
          "Vi er i dialog med den ukrainske ambassade, NAV og europratsya.com for å hurtigst mulig kunne hjelpe de som nå krysser landegrensen vår ved å tilby arbeid, interne fadderordninger og norskkurs. Vi håper dette kan skape noe forutsigbarhet og trygghet.",
          "Vi kan ikke hjelpe alle, men vi skal gjøre vårt for å hjelpe de vi har ressurser til.",
        ],
      },
    ],
  },
  {
    slug: "serviceteknikeren-dawid",
    title: "Serviceteknikeren Dawid",
    category: "Møt oss",
    ingress:
      "Som servicetekniker i Helt Opplagt gjennomfører Dawid service hos over 100 kunder i måneden. Hva mener han selv er det beste med jobben sin?",
    image: dawidImg,
    imageAlt: "Servicetekniker Dawid i Helt Opplagt",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Navn: Dawid. Stilling: Servicetekniker. Ansatt i Helt Opplagt siden 2016.",
        ],
      },
      {
        type: "qa",
        question: "Hvorfor valgte du å starte i Helt Opplagt?",
        answer:
          "Jeg hørte gjennom en venn at Helt Opplagt søkte ny servicetekniker. Etter et lite uformelt møte med ledelsen fikk jeg et veldig godt inntrykk av både jobben og ledelsen. Jeg tror det var gjensidig, for etter kort tid hadde jeg min første arbeidsdag.",
      },
      {
        type: "qa",
        question: "Hva er det beste med jobben din?",
        answer:
          "De beste tingene med jobben som servicetekniker er først og fremst friheten! Det at jeg i større grad er med på å bestemme hverdagen min er noe jeg setter stor pris på. Det andre er kundene. Alle kunder smiler og er glade når jeg kommer, for de vet at da får de frisk og ren luft!",
      },
      {
        type: "qa",
        question: "Hvilke utfordringer møter du på i yrket ditt?",
        answer:
          "Jeg gjør service hos over 100 forskjellige kunder i måneden. Det krever først og fremst gode rutiner og planlegging. Men det er ikke alltid ting går helt etter planen. Det er da utfordringene dukker opp. Alle kunder skal ha utført service og det må gjøres riktig.",
      },
      {
        type: "qa",
        question: "Hvordan ser en vanlig arbeidsdag ut for deg?",
        answer:
          "Blant annet service hos våre kunder, installering av luftrensere og bytting av filtre.",
      },
    ],
  },
];

export function articleHref(article: Article): string {
  return article.href ?? `/aktuelt/${article.slug}`;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
