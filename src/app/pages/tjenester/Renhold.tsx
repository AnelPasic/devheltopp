import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/renhold/renhold.png";
import openingImg from "../../../images/hero/hero-renhold.jpg";
import explainerImg from "../../../images/renhold/vinduspuss.jpg";
import inneklimaCardImg from "../../../images/hero/hero-inneklima-dno.jpg";
import kantineCardImg from "../../../images/kantine/kantine.png";
import renholdTeamImg from "../../../images/renhold/renhold-team.jpg";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const renholdData: ServicePageData = {
  path: "/tjenester/renhold",
  badge: "Arbeidsmiljø",
  layout: "light",
  title: (
    <>
      Renhold
    </>
  ),
  subtitle: "Godt renhold og kontorvask bidrar til større trivsel og et bedre arbeidsmiljø",
  intro:
    "Vi har over 100 profesjonelle medarbeidere som ønsker seg flere nye oppdragssteder. Ønsker du at dine kollegaer skal få et rent innemiljø? Da er Helt Opplagt Rent løsningen for deg!",
  image: heroImg,
  imageAlt: "Renhold fra Helt Opplagt",
  heroImage: openingImg,
  /* Ingen renholdsbrosjyre er publisert på heltopplagt.no, derfor ingen brochureUrl. */
  heroPoints: [
    { label: "Godt renhold gir bedre trivsel og sørger for et bedre arbeidsmiljø." },
    { label: "Mindre støv gir også et bedre inneklima og reduserer risikoen for astma- og allergiplager." },
    { label: "Fagutdannede og kompetente medarbeidere" },
  ],
  explainer: {
    heading: "Hva tilbyr vi?",
    body: [
      "Vi er en renholdsentreprenør som ivaretar dine behov på en profesjonell måte. Vi kan bistå dere med en behovstilpasset renholdsavtale som på en bærekraftig og effektiv måte forlenger levetid på gulv og inventar. Samtidig vil et godt renhold bidra positivt til et lavere sykefravær og bedre lønnsomhet.",
      "Vi har fagutdannede og kompetente medarbeidere, og det forplikter. Alle våre medarbeidere får bruke tid på videreutvikling og læring, blant annet gjennom nært samarbeid med våre leverandører som er spesialister på sine felt. Her legger vi også stor vekt på HMS, service og arbeidssystematikk.",
    ],

    image: explainerImg,
    imageAlt: "Medarbeider fra Helt Opplagt vasker vinduer",
    video: {
      youtubeId: "LdcmUsoEPeQ",
      title: "Renhold fra Helt Opplagt",
      length: "2:00",
      photoTab: "Renhold",
      videoTab: "Møt oss",
    },
  },
  catalogs: [
    {
      heading: "Dette kan vi ta oss av",
      proof: "Kort fortalt det meste du behøver av både innendørs og utendørs vedlikehold.",
      layout: "grid",
      photo: true,
      items: [
        {
          name: "Daglig renhold",
          description:
            "Vi kan bistå dere med en behovstilpasset renholdsavtale som på en bærekraftig og effektiv måte forlenger levetid på gulv og inventar.",
          image: `${thumbs}/25ddb625b59a219605acc899d9230432.jpg`,
          to: "/tjenester/renhold/daglig-renhold",
        },
        {
          name: "Hovedrengjøring",
          description:
            "En hovedrengjøring innebærer en grundig rengjøring av både vegger og tak. Det kan også innbefatte andre områder som ikke blir rengjort ved daglig rengjøring.",
          image: `${thumbs}/77582f78736eb1356bae7dd359ef7852.jpg`,
          to: "/tjenester/renhold/hovedrengjoring",
        },
        {
          name: "Gulvvedlikehold",
          description:
            "Gulvvedlikehold er viktig for å unngå store renovasjonskostnader i fremtiden. Med våre moderne maskiner kan vi rense, skure, bone, olje og vedlikeholde alle typer gulv.",
          image: `${thumbs}/dca037a67392f3e04161f36a0e694b15.jpg`,
          to: "/tjenester/renhold/gulvvedlikehold",
        },
        {
          name: "Vinduspuss",
          description:
            "Vi utfører vinduspuss og bruker moderne utstyr for å gjøre vinduene rene og flekkfrie på en fagmessig og riktig måte. Slik at du kan se gjennom vinduene – ikke på vinduene.",
          image: `${thumbs}/345d12b02398938002207c1977b9faac.jpg`,
          to: "/tjenester/renhold/vinduspuss",
        },
        {
          name: "Tepperens og møbelrens",
          description:
            "Regelmessig støvsuging av tepper er en viktig del av vedlikeholdet. I tillegg bør man årlig ta en dypere rens av teppet, for å fjerne støv og bakterier som har samlet seg i teppets fibre.",
          image: `${thumbs}/42921c719d882a03f23a614b86a36794.jpg`,
          to: "/tjenester/renhold/tepperens-og-mobelrens",
        },
        {
          name: "Vedlikehold, feiing, snø og gress",
          description:
            "Vi kan utføre en rekke oppgaver innen vaktmesterservice, små reparasjoner, montering, avfallshåndtering, skifting av lyspærer etc.",
          image: `${thumbs}/b150c85e26357ff9c7b793aaaaaa6351.jpg`,
          to: "/tjenester/renhold/vedlikehold-feiing-sno-og-gress",
        },
      ],
    },
  ],
  hideSubServiceCards: true,
  faq: [
    {
      question: "Kan vi prøve dere først?",
      answer:
        "Vi tilbyr alle våre kunder en prøveperiode hvor vi skal bevise hva vi duger til. Og med over 30 års bransjeerfaring kan vi skryte av å ha ekstremt få tilfeller av frafall etter denne prøveperioden.",
    },
    {
      question: "Hvem utfører renholdet?",
      answer:
        "Vi har fagutdannede og kompetente medarbeidere, og det forplikter. Alle våre medarbeidere får bruke tid på videreutvikling og læring, blant annet gjennom nært samarbeid med våre leverandører som er spesialister på sine felt. Her legger vi også stor vekt på HMS, service og arbeidssystematikk.",
    },
    {
      question: "Leverer dere mer enn vanlig kontorrenhold?",
      answer:
        "Vi kan utføre en rekke oppgaver innen vaktmesterservice, små reparasjoner, montering, avfallshåndtering, skifting av lyspærer etc. Kort fortalt det meste du behøver av både innendørs og utendørs vedlikehold.",
    },
    {
      question: "Kan renhold kombineres med kantine?",
      answer:
        "Ja vi har mange fornøyde kunder med kombinert renhold og kantine. Mindre selskaper kan i tillegg dra nytte av samme person på både renhold og kantine. På denne måten får vi effektivisert tidsbruken til deres vert/vertinne som igjen gjør at dere sparer penger.",
    },
  ],
  readMore: [
    {
      label: "Kombiner kantine og renhold",
      description: "Ved å samle dine tjenester hos en leverandør vil du forenkle din arbeidshverdag. Færre leverandører bidrar til store besparelser.",
      to: "/tjenester/kantine/kombiner-kantine-og-renhold",
      image: `${thumbs}/37b164159bb2d27e7dd7c3be6e7d98de.jpg`,
    },
    {
      label: "Inneklima",
      description: "Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
      to: "/tjenester/inneklima",
      image: inneklimaCardImg,
    },
    {
      label: "Kantine",
      description: "Proffkantine er vårt fullservicetilbud til alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
      to: "/tjenester/kantine",
      image: kantineCardImg,
    },

  ],
  subServices: [
    {
      slug: "daglig-renhold",
      title: "Daglig renhold",
      description:
        "Vi er en renholdsentreprenør som ivaretar dine behov på en profesjonell måte. Vi kan bistå dere med en behovstilpasset renholdsavtale som på en bærekraftig og effektiv måte forlenger levetid på gulv og inventar. Samtidig vil et godt renhold bidra positivt til et lavere sykefravær og bedre lønnsomhet.",
      image: `${thumbs}/25ddb625b59a219605acc899d9230432.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vi har fagutdannede og kompetente medarbeidere, og det forplikter. Alle våre medarbeidere får bruke tid på videreutvikling og læring, blant annet gjennom nært samarbeid med våre leverandører som er spesialister på sine felt. Her legger vi også stor vekt på HMS, service og arbeidssystematikk.",
            "Vi avholder kontinuerlig norskkurs etter behov i samarbeid med Folkeuniversitetet. Denne kontinuerlige kompetanseutviklingen gjør at du som kunde får de beste leveransene fra våre motiverte medarbeidere.",
          ],
        },
      ],
    },
    {
      slug: "vedlikehold-feiing-sno-og-gress",
      title: "Vedlikehold, feiing, snø og gress",
      description:
        "Vi kan utføre en rekke oppgaver innen vaktmesterservice, små reparasjoner, montering, avfallshåndtering, skifting av lyspærer etc. Kort fortalt det meste du behøver av både innendørs og utendørs vedlikehold.",
      image: `${thumbs}/b150c85e26357ff9c7b793aaaaaa6351.jpg`,
      content: [
        {
          type: "image",
          src: `${thumbs}/25ee209e6fa9f31e2b3c02b4ad38bb6d.jpg`,
          alt: "Vedlikehold, feiing, snø og gress",
        },
        {
          type: "bullets",
          heading: "Eksempler på oppgaver vi kan utføre:",
          items: [
            "Avfallshåndtering",
            "Kontroll og bytte av belysning",
            "Vanning av planter",
            "Montering av dispensere og møbler etc.",
            "Små reparasjoner",
            "Kosting og vedlikehold av utemiljøer",
            "Gressklipping",
            "Fasadevask",
            "Snømåking, salting og strøing av utemiljøer",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Har dere behov for denne typen tjenester? Ring oss på 0 23 46 eller fyll ut kontaktskjema for en uforpliktende prat.",
            "PS! Har dere behov utover det vi har listet opp her kan vi helt sikkert hjelpe dere med det også.",
          ],
        },
      ],
    },
    {
      slug: "hovedrengjoring",
      title: "Hovedrengjøring",
      description:
        "Godt renhold og rengjøring på arbeidsplassen gir større trivsel og bedre arbeidsmiljø. Mindre støv gir også et bedre inneklima og reduserer risikoen for astma- og allergiplager. Godt renhold har også en positiv effekt på sykefraværet.",
      image: `${thumbs}/77582f78736eb1356bae7dd359ef7852.jpg`,
      content: [
        {
          type: "text",
          heading: "En viktig del av det totale renholdsbildet",
          paragraphs: [
            "En hovedrengjøring innebærer en grundig rengjøring av både vegger og tak. Det kan også innbefatte andre områder som ikke blir rengjort ved daglig rengjøring. Dette blir vi enige om sammen. Hovedrengjøring er en viktig del av det totale renholdsbildet. Hvor ofte en trenger hovedrengjøring avhenger av bransje og smussgraden. Hovedrengjøring utføres av renholder med lang erfaring fra denne type arbeid.",
          ],
        },
      ],
    },
    {
      slug: "gulvvedlikehold",
      title: "Gulvvedlikehold",
      description:
        "Gulvvedlikehold er viktig for å unngå store renovasjonskostnader i fremtiden.",
      image: `${thumbs}/dca037a67392f3e04161f36a0e694b15.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vedlikehold av gulv er en viktig del av renholdet. Kostnadene kan bli mangedoblet om man utsetter dette arbeidet for lenge. Med våre moderne maskiner kan vi rense, skure, bone, olje og vedlikeholde alle typer gulv. Snakk med oss for å få en vurdering av hva som er riktig rengjøring av ditt gulv.",
          ],
        },
      ],
    },
    {
      slug: "vinduspuss",
      title: "Vinduspuss",
      description:
        "Godt renhold på arbeidsplassen gir større trivsel og bedre arbeidsmiljø. Mindre støv gir også et bedre inneklima og reduserer risikoen for astma- og allergiplager.",
      image: `${thumbs}/345d12b02398938002207c1977b9faac.jpg`,
      content: [
        {
          type: "text",
          heading: "Se ut gjennom vinduene – ikke på vinduene",
          paragraphs: [
            "Vi utfører vinduspuss og bruker moderne utstyr for å gjøre vinduene rene og flekkfrie på en fagmessig og riktig måte. Slik at du kan se gjennom vinduene – ikke på vinduene.",
            "Sammen med våre kunder, kommer vi frem til en avtale om jevnlig vinduspuss.",
          ],
        },
      ],
    },
    {
      slug: "tepperens-og-mobelrens",
      title: "Tepperens og møbelrens",
      description:
        "Godt renhold på arbeidsplassen gir større trivsel og bedre arbeidsmiljø. Mindre støv gir også et bedre inneklima og reduserer risikoen for astma- og allergiplager.",
      image: `${thumbs}/42921c719d882a03f23a614b86a36794.jpg`,
      content: [
        {
          type: "text",
          heading: "Skitne tepper og møbler påvirker inneluften",
          paragraphs: [
            "Dersom det ikke utføres jevnlig tepperens vil dette gå utover rommets brukere i form av dårligere kvalitet på inneluften, i verste fall betyr dette høyere sykefravær. Regelmessig støvsuging av tepper er en viktig del av vedlikeholdet. I tillegg bør man årlig ta en dypere rens av teppet, for å fjerne støv og bakterier som har samlet seg i teppets fibre. Vi er klare til å bli kalt inn på teppet!",
            "Vi anbefaler også at man renser tekstilmøbler med jevne mellomrom. Dette ivaretar stoffet i møblene og vil dermed øke holdbarheten. Og så er det jo hyggeligere å sitte i en nyrenset sofa.",
          ],
        },
      ],
    },
  ],
};

export function RenholdPage() {
  return <ServicePage data={renholdData} />;
}
