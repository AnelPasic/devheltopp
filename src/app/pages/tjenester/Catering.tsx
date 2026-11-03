import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/catering/catering.png";
import openingImg from "../../../images/hero/hero-catering.jpg";
import explainerImg from "../../../images/catering/kokker.jpg";
import lunsjCardImg from "../../../images/lunsj/lunsj.png";
import kantineCardImg from "../../../images/kantine/kantine.png";
import fruktCardImg from "../../../images/frukt/frukt.png";
import pasmurtImg from "../../../images/catering/pasmurt.jpg";
import varmmatImg from "../../../images/catering/varmmat-buffet.jpg";
import moteserviceImg from "../../../images/catering/moteservice.jpg";
import eventImg from "../../../images/catering/event-koldtbord.jpg";
import kakerImg from "../../../images/catering/kaker.jpg";
import kakerKaffeImg from "../../../images/catering/kaker-kaffe.jpg";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const cateringData: ServicePageData = {
  path: "/tjenester/catering",
  badge: "Mat & Drikke",
  layout: "light",
  title: (
    <>
      Catering
    </>
  ),
  subtitle: "Matlevering og møtemat til bedrifter i Oslo",
  intro:
    "Proffesjonelle kokker, gode råvarer og variert meny laget på eget kjøkken. Vi leverer varmmat, salater, tapas og påsmurt, samt en spennende meny for møte- og kursmat.",
  image: heroImg,
  imageAlt: "Catering fra Helt Opplagt",
  heroImage: openingImg,
  brochureUrl:
    "https://heltopplagt.no/application/files/8417/5526/4710/Catering_2025.pdf",
  heroPoints: [
    { label: "Laget fra bunn av med ferske råvarer" },
    { label: "Vi kan stille med mat, drikke, kokk og servitører." },
    { label: "Godt, sunt og variert" },
  ],
  explainer: {
    heading: "Hva tilbyr vi?",
    body: [
      "Sammen med våre kunders økende ønske om hjemmelagede kvalitetsprodukter har Helt Opplagt Catering vokst frem som en viktig del av lunsjtilbudet til Helt Opplagt på Jobben. Helt Opplagt Catering lager hver dag varme lunsjretter, forskjellige typer friske og sunne salater og ferske påsmurte varer som baguetter og snitter til møter og andre anledninger.",
      "Vi har et bredt utvalg av retter og mat. Alt lages fra bunn av, med friske råvarer og kjærlighet, ligger alt til rette for å velge et sunnere alternativ til lunsj.",
    ],

    image: explainerImg,
    imageAlt: "Kokkene i Helt Opplagt Catering på eget kjøkken",
    video: {
      youtubeId: "fIk7Yg3gECc",
      title: "Catering fra Helt Opplagt",
      length: "2:02",
      photoTab: "Catering",
      videoTab: "Møt oss",
    },
  },
  catalogs: [
    {
      heading: "Møtemat: våre møteservicepakker",
      proof:
        "Helt Opplagt leverer møtepakker. Våre pakker koster fra 65,- per person for kaffe og snack til full pakke med kaffe, smoothie, wraps, bakervare og oppskåret frukt/grønt. Vi lover fornøyde og opplagte møtedeltakere.",

      layout: "panels",
      items: [
        {
          name: "Pakke 1 - Mini",
          description:
            "Kaffepakke med kaffemelk, sukkerbit og kaffesjokolade. Snack - velg mellom assortert bakevare, oppskåret frukt eller oppskåret grønt.",
        },
        {
          name: "Pakke 2 - Medium",
          description:
            "Kaffepakke. Miniwraps - 2 stk. per person. Snack - velg mellom assortert bakevare, oppskåret frukt eller oppskåret grønt.",
        },
        {
          name: "Pakke 3 - Full pakke",
          description:
            "Drikke - smoothie eller kaffepakke. Miniwraps - 2 stk. per person. Assortert bakevare. Oppskåret frukt og grønt.",
        },
      ],
    },
  ],
  subServicesHeading: "Mat og drikke til alle anledninger",

  faq: [
    {
      question: "Hva koster møtemat?",
      answer:
        "Våre pakker koster fra 65,- per person for kaffe og snack til full pakke med kaffe, smoothie, wraps, bakervare og oppskåret frukt/grønt.",
    },
    {
      question: "Kan dere levere mat til firmafest og event?",
      answer:
        "Vi hjelper deg med alle former for events og firmafest! Se ikke bort fra at vi også kan stille med kokk eller serveringshjelp hvis dere skulle ønske det.",
    },
    {
      question: "Har dere egne lokaler?",
      answer:
        "Hos oss på Store Stensrud Gård, syd i Oslo, tilbyr vi unike lokaler for både store og små feiringer! Gården ligger lett tilgjengelig 15 minutters kjøretid syd for Oslo sentrum og har eget busstopp for ankomst med offentlig transport.",
    },
  ],
  readMore: [
    {
      label: "Lunsj",
      description: "Lønnsomme og velsmakende lunsjordninger for 5 personer og oppover.",
      to: "/tjenester/lunsj",
      image: lunsjCardImg,
    },
    {
      label: "Kantine",
      description: "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
      to: "/tjenester/kantine",
      image: kantineCardImg,
    },
    {
      label: "Frukt",
      description: "Du bestemmer størrelse og innhold. Vi leverer daglig eller etter behov.",
      to: "/tjenester/frukt",
      image: fruktCardImg,
    },
  ],
  subServices: [
    {
      slug: "pasmurt",
      title: "Påsmurt",
      description:
        "Når du har et arrangement, kurs eller gjester som krever mat utover den vanlige lunsjen, stiller vi med et vidt spekter av diverse møtemat og påsmurt.",
      image: pasmurtImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Når du har et arrangement, kurs eller gjester, som krever mat utover den vanlige lunsjen, stiller vi med et vidt spekter av diverse møtemat og påsmurt. Vi lager blant annet baguetter, foccacia eller wraps av høy kvalitet, og hjelper til å skreddersy bestillingen så den blir riktig for akkurat deg. Snitter til et styremøte? Rundstykker til frokostseminar? Vi hjelper deg!",
            "Vi får stadig høre at vi har Oslos beste påsmurt. Prøv oss neste gang og se om du er enig.",
          ],
        },
        {
          type: "table",
          heading: "Prisliste – baguetter, focaccia eller ciabatta",
          rows: [
            ["Ost og skinke på spansk vis", "(E, SE, SL, SU)", "81,-"],
            ["Kyllingsalat (indisk masala)", "(E, SE, SL, SU)", "81,-"],
            ["Roastbeef og remulade", "(E, SE, SU, HG)", "81,-"],
            ["Tunfisksalat med kapers", "(F, E, SE, ME)", "81,-"],
            ["Chorizo og cheddar", "(ME, SO, E, SE, SL, SU)", "81,-"],
            ["BLT", "(E, SE, SU)", "81,-"],
            [
              "Tomat, mozzarella og pesto",
              "(ME, SE, E, N, spor av peanøtter)",
              "81,-",
            ],
            ["Brie og ruccola", "(E, SE, ME, SU)", "81,-"],
            ["Egg og tomat", "(E, SU, SE)", "81,-"],
          ],
        },
        {
          type: "table",
          heading: "Annet påsmurt",
          rows: [
            ["Rundstykker", "Leveres med tilsvarende pålegg", "47,-"],
            [
              "Snitter, 5 stk pr kuvert",
              "Grovt brød med pålegg som serranoskinke, håndpillede reker, røkelaks, brie og roastbiff",
              "165,-",
            ],
            ["Wraps", "Spekeskinke, laks, roastbeef eller kylling", "81,-"],
            [
              "Kanapeer, 5 stk pr kuvert",
              "Grovt brød med pålegg som serranoskinke, håndpillede reker, røkelaks, brie og roastbiff",
              "165,-",
            ],
          ],
        },
      ],
    },
    {
      slug: "varmmat",
      title: "Varmmat",
      description:
        "Helt Opplagt lager forskjellige varmretter hver uke, slik at du kan nyte god mat laget fra bunn av. Vi starter med tomme kjeler og jobber oss opp ved hjelp av friske grønnsaker, kjøtt og fisk av god kvalitet.",
      image: varmmatImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Her i Helt Opplagt lager vi hver uke forskjellige varmretter slik at du kan nyte god mat laget fra bunn av. Vi starter med tomme kjeler og jobber oss opp ved hjelp av friske grønnsaker og kjøtt og fisk av god kvalitet.",
            "Menyen består av hverdagsretter fra hele verden, for eksempel indisk kylling curry, amerikansk chili con carne, russisk stroganoff og norsk lapskaus.",
          ],
        },
      ],
    },
    {
      slug: "salater",
      title: "Salater",
      description:
        "Friske grønnsaker og forskjellige salattyper utgjør basen i vår salatmeny, og fra den kan du velge grønne salater ved siden av varmmaten eller lunsjen, eller rene salatmåltider.",
      image: `${thumbs}/3d1ba52d8c13ebc884ca2ef2304b2516.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Friske grønnsaker og forskjellige salattyper utgjør basen i vår salatmeny, og fra den kan du velge grønne salater ved siden av varmmaten eller lunsjen, eller rene salatmåltider som porsjonspakket pasta- eller nicoisesalat.",
            "Prøv for eksempel vår populære cæsarsalat, laget tradisjonelt med romanosalat og vår spesielle cæsardressing!",
          ],
        },
        {
          type: "table",
          heading: "Prisliste",
          rows: [
            [
              "Hverdagssalat med topping",
              "(SE, F (hvis tunfisk), SK (hvis reker), ME)",
              "74,-",
            ],
            [
              "Grønn salat med topping",
              "(SE, F (hvis tunfisk), SK (hvis reker), ME)",
              "87,-",
            ],
            ["Grønn salat med kylling", "(E, ME, SU)", "87,-"],
            ["Nicoisesalat", "(E, ME, F, SE)", "87,-"],
            ["Cæsarsalat", "(ME, F, E)", "87,-"],
            ["Pastasalat", "(HG, ME, N, E)", "87,-"],
            ["Taboulesalat", "(E, HG, SU, ME)", "87,-"],
            ["Tex-Mex salat", "(ME, E)", "87,-"],
            ["Thai-inspirert nudelsalat", "(HG, E, SO, S)", "87,-"],
            [
              "Hverdagssalat/grønn salat/gresk salat uten topping",
              "Passer fint som tilbehør til brødmat eller varmmat",
              "62,-/67,-",
            ],
          ],
          footnote:
            "Salatene kan toppes med for eksempel ost og skinke (ME), pasta med hvitløksdressing (ME, E, HG), kylling, reker (SK) eller couscous (HG, E, ME). Salatprisene er per porsjon (ca 250–300 g), kan leveres enkeltvis eller i storforpakning.",
        },
      ],
    },
    {
      slug: "overtidsmat",
      title: "Overtidsmat",
      description:
        "Vi lager nydelige varmretter i porsjonspakker. Våre overtidspakker leveres som «overtidsmat abonnement» som sørger for at dere har mat klar i kjøleskapet som enkelt kan varmes i micro. Vi varierer menyen hver uke.",
      image: `${thumbs}/fae8c770cb3e37279d5d9083d9b71ddd.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vår flotte varmmat-meny kan også leveres i porsjonspakker som passer perfekt som overtidsmat. Vi leverer avtalt antall porsjoner en gang pr uke. Dette oppbevares i kjøleskap og er dermed tilgjengelig for enkel oppvarming i mikroen når dere trenger det. Menyen varierer fra uke til uke slik at dere opplever god og spennende variasjon! Alle våre retter er laget fra bunn, uten bruk av unødvendige tilsetningsstoffer. Vi har fokus på gode råvarer, samt redusert salt- og fettinnhold.",
          ],
        },
      ],
    },
    {
      slug: "moteservicepakker",
      title: "Møteservice",
      description:
        "Helt Opplagt leverer møtepakker. Våre pakker koster fra 65,- per person for kaffe og snack til full pakke med kaffe, smoothie, wraps, bakervare og oppskåret frukt/grønt. Vi lover fornøyde og opplagte møtedeltakere.",
      image: moteserviceImg,
      content: [
        {
          type: "bullets",
          heading: "Pakke 1 – Mini",
          items: [
            "Kaffepakke med kaffemelk, sukkerbit og kaffesjokolade",
            "Snack – velg mellom assortert bakevare, oppskåret frukt eller oppskåret grønt.",
          ],
        },
        {
          type: "bullets",
          heading: "Pakke 2 – Medium",
          items: [
            "Kaffepakke",
            "Miniwraps – 2 stk. per person.",
            "Snack – velg mellom assortert bakevare, oppskåret frukt eller oppskåret grønt.",
          ],
        },
        {
          type: "bullets",
          heading: "Pakke 3 – Full pakke",
          items: [
            "Drikke – smoothie eller kaffepakke.",
            "Miniwraps – 2 stk. per person",
            "Assortert bakevare",
            "Oppskåret frukt og grønt.",
          ],
        },
      ],
    },
    {
      slug: "event",
      title: "Event",
      description:
        "Vi hjelper deg med alle former for events og firmafest! Planlegger du et arrangement for kunder og forretningsforbindelser, en feiring eller fest med kolleger, eller rett og slett bare en fredagspils? Kontakt oss.",
      image: eventImg,
      content: [
        {
          type: "text",
          heading: "Vi hjelper deg med alle former for events og firmafest!",
          paragraphs: [
            "Planlegger du et arrangement for kunder og forretningsforbindelser, en feiring eller fest med kolleger, eller rett og slett bare en fredagspils? Hva med digitalt kick-off med hjemkjøring av varer? Kontakt oss.",
          ],
        },
        {
          type: "image",
          src: "https://heltopplagt.no/application/files/7316/1348/5394/Kickoff_2021.jpg",
          alt: "Kick-off med Helt Opplagt",
        },
        {
          type: "bullets",
          heading: "Vi kan også bidra med:",
          items: [
            "Middager",
            "Påsmurt",
            "Fingermat",
            "Tapas",
            "Desserter og kaker",
            "Drikke (mineralvann, øl, tappetårn)",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Se ikke bort fra at vi også kan stille med kokk eller serveringshjelp hvis dere skulle ønske det. Ring oss på 0 23 46 for en prat, så hjelper vi dere å sette sammen et vellykket arrangement.",
          ],
        },
      ],
    },
    {
      slug: "helt-opplagt-pa-garden",
      title: "Helt Opplagt på gården",
      description: "Nå kan vi også stille med lokaler til ditt arrangement.",
      image: `${thumbs}/88375d2d8c649f17faafa2f6ad6ccc56.jpg`,
      content: [
        {
          type: "text",
          heading: "Leter du etter det perfekte stedet for ditt arrangement?",
          paragraphs: [
            "Hos oss på Store Stensrud Gård, syd i Oslo, tilbyr vi unike lokaler for både store og små feiringer!",
            "Gården ligger lett tilgjengelig 15 minutters kjøretid syd for Oslo sentrum og har eget busstopp for ankomst med offentlig transport.",
          ],
        },
        {
          type: "image",
          src: "https://heltopplagt.no/application/files/9217/7800/7300/garden.jpg",
          alt: "Store Stensrud Gård",
        },
        {
          type: "text",
          heading: "Utendørs arrangementer – gårdsleker og grillfester",
          paragraphs: [
            "Gården har store utendørs arealer med plass til flere hundre mennesker til store sommerfester, kick-off, grillfester og mer!",
            "Nyt vårt tradisjonsrike gårdstun med rikelig plass for dans, lek, spill og aktiviteter. Vi tilbyr morsomme aktiviteter som øksekast, ringspill, hesteskokasting, kasting på blikkbokser, melkespannholding etc.",
          ],
        },
        {
          type: "image",
          src: "https://heltopplagt.no/application/files/5317/7800/6820/Utendors.jpg",
          alt: "Utendørs arrangementer på gården",
        },
        {
          type: "text",
          heading: "Innendørs arrangementer",
          paragraphs: [
            "Vi dekker opp og pynter stallen for en genuin låvefest! Her har vi plass til 50–60 personer til bords, samt bar- og dansemuligheter. Er dere mange flere kan vi løse dette med telt utendørs. For mindre selskaper på ca 20 personer har vi også koselige og ærverdige stuer i hovedhuset.",
            "Vi tilbyr mat, drikke, kokk og servitører, enten du ønsker grillfest eller selskapsmeny. Dere kan bare slappe av og nyte arrangementet!",
          ],
        },
        {
          type: "image",
          src: "https://heltopplagt.no/application/files/5017/7800/6809/Innendors.jpg",
          alt: "Innendørs arrangementer i stallen",
        },
        {
          type: "text",
          heading: "Paintball og Archery Tag",
          paragraphs: [
            "I samarbeid med vår nabo Highjump Event, kan vi også tilby fartsfylt action med paintball eller bueskyting!",
          ],
        },
        {
          type: "image",
          src: "https://heltopplagt.no/application/files/9517/7800/6809/Paintball.jpg",
          alt: "Paintball på gården",
        },
        {
          type: "text",
          heading: "Badeplass",
          paragraphs: [
            "En kort spasertur fra gården ligger Stensrudtjernet hvor du finner en fin badeplass med sandstrand og gressletter. Perfekt for arrangementer på varme sommerdager.",
            "Så dersom du ser etter et annerledes og autentisk sted for å arrangere firmafest og event, eller dine ansatte trenger lokaler til bryllup, konfirmasjoner, dåp, navnefest etc., ta kontakt! Send epost til bli@heltopplagt.no eller ring 02346.",
          ],
        },
      ],
    },
    {
      slug: "kaker-og-bakervarer",
      title: "Kaker og bakervarer",
      description:
        "Vi tilbyr alle slag bakervarer fra wienerbrød og boller til et godt utvalg av store og små kaker.",
      image: kakerImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Marsipan og kremkaker fra 6 til 120 personer. Nydelige ostekaker, bringebærkaker, sjokoladekaker mm.",
            "Av bakervarer leverer vi blant annet ferske sprøe wienerstenger, boller, skolebrød, croissant, muffins, mm. Vi har alt du trenger til møter, fredagssamlingen, eller en markering på kontoret.",
          ],
        },
        {
          type: "image",
          src: kakerKaffeImg,
          alt: "Kake og kaffe servert på kontoret",
        },
      ],
    },
  ],
};

export function CateringPage() {
  return <ServicePage data={cateringData} />;
}
