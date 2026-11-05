import { ServicePage, ServicePageData, type ContentBlock } from "../../components/ServicePage";
import heroImg from "../../../images/catering/catering.webp";
import openingImg from "../../../images/hero/hero-catering.webp";
import explainerImg from "../../../images/catering/kokker.webp";
import lunsjCardImg from "../../../images/lunsj/lunsj.webp";
import kantineCardImg from "../../../images/kantine/kantine.webp";
import fruktCardImg from "../../../images/frukt/frukt.webp";
import pasmurtImg from "../../../images/catering/pasmurt.webp";
import varmmatImg from "../../../images/catering/varmmat-buffet.webp";
import moteserviceImg from "../../../images/catering/moteservice.webp";
import eventImg from "../../../images/catering/event-koldtbord.webp";
import kakerImg from "../../../images/catering/kaker.webp";
import kakerKaffeImg from "../../../images/catering/kaker-kaffe.webp";
import bltImg from "../../../images/catering/meny/blt.webp";
import ostSkinkeImg from "../../../images/catering/meny/ost-skinke.webp";
import kyllingsalatImg from "../../../images/catering/meny/kyllingsalat.webp";
import roastbeefImg from "../../../images/catering/meny/roastbeef.webp";
import chorizoImg from "../../../images/catering/meny/chorizo-cheddar.webp";
import mozzarellaImg from "../../../images/catering/meny/tomat-mozzarella.webp";
import wrapKyllingImg from "../../../images/catering/meny/wrap-kylling.webp";
import wrapSpekeskinkeImg from "../../../images/catering/meny/wrap-spekeskinke.webp";
import wrapRokelaksImg from "../../../images/catering/meny/wrap-rokelaks.webp";
import greskSalatImg from "../../../images/catering/meny/gresk-salat.webp";
import nicoiseImg from "../../../images/catering/meny/nicoisesalat.webp";
import caesarImg from "../../../images/catering/meny/caesarsalat.webp";
import pastasalatImg from "../../../images/catering/meny/pastasalat.webp";
import taboulehImg from "../../../images/catering/meny/taboulehsalat.webp";
import texmexImg from "../../../images/catering/meny/texmex-salat.webp";
import nudelsalatImg from "../../../images/catering/meny/nudelsalat.webp";
import gronnSalatImg from "../../../images/catering/meny/gronn-salat.webp";
import hverdagssalatImg from "../../../images/catering/meny/hverdagssalat.webp";
import gardshusImg from "../../../images/catering/garden/gardshus.webp";
import innkjorselImg from "../../../images/catering/garden/innkjorsel.webp";
import stallenFestImg from "../../../images/catering/garden/stallen-fest.webp";
import kokkImg from "../../../images/catering/garden/kokk.webp";
import festlokaleImg from "../../../images/catering/garden/festlokale.webp";
import gardstunBordImg from "../../../images/catering/garden/gardstun-bord.webp";
import badmintonImg from "../../../images/catering/garden/badminton.webp";
import kubbImg from "../../../images/catering/garden/kubb.webp";
import badeplassImg from "../../../images/catering/garden/badeplass.webp";
import archeryTagImg from "../../../images/catering/garden/AT-jente.webp";
import paintballImg from "../../../images/catering/garden/paintball.webp";
import paintballStemningImg from "../../../images/catering/garden/paintball-stemning.webp";
import lavvoImg from "../../../images/catering/garden/Lavvo.webp";
import kickoffImg from "../../../images/catering/kickoff-2021.webp";
import { cms } from "../../../images/cms";


/* Products and prices from the printed catering brochure. Shared by the
   catalogs on the Catering page and the price tables on the sub-pages. */

/** [name, description, price] */
const MOTESERVICE_PAKKER: { name: string; price: string; points: string[] }[] = [
  {
    name: "Pakke 1 - Mini",
    price: "65,- per person",
    points: [
      "Kaffepakke med kaffemelk, sukkerbit og kaffesjokolade",
      "Snacks: Velg mellom assortert bakervare, oppskåret frukt eller oppskåret grønt",
    ],
  },
  {
    name: "Pakke 2 - Medium",
    price: "115,- per person",
    points: [
      "Kaffepakke med kaffemelk, sukkerbit og kaffesjokolade",
      "2 mini-wraps",
      "Snacks: Velg mellom assortert bakervare, oppskåret frukt eller oppskåret grønt",
    ],
  },
  {
    name: "Pakke 3 - Full pakke",
    price: "160,- per person",
    points: [
      "Smoothie eller kaffepakke med kaffemelk, sukkerbit og kaffesjokolade",
      "2 mini-wraps",
      "Assortert bakervare",
      "Oppskåret frukt og grønt",
    ],
  },
];

/** [name, allergens, price] */
const ENKELTVIS: [string, string, string][] = [
  ["Kaffekopp", "", "29,- per kopp"],
  ["Kaffepakke med kaffemelk, sukkerbit og kaffesjokolade", "", "39,- per pakke"],
  ["Oppskåret frukt", "", "39,- per person"],
  ["Oppskåret grønt", "", "39,- per person"],
  ["Mini-wraps 2 stk", "(G, HG, ME, N / hvis røkelaks: F)", "68,- per stk"],
  ["Smoothie", "", "45,- per stk"],
  ["Mineralvann", "", "38,- per stk"],
];

/** [name, description, allergens, price] */
const ARRANGEMENTER: [string, string, string, string][] = [
  [
    "Koldtbord",
    "Karbonader med løk, kalkunbryst og waldorfsalat, reker og majones, laks og eggerøre, roastbiff med sprøstekt løk og remulade, salat og dressing, potetsalat, spekemat og rømme, brød, smør mm.",
    "(E, F, HG, ME, N, SE, SK, SU)",
    "fra 395,- per person",
  ],
  [
    "Tapas",
    "Albondigas, scampi med hvitløk, patatas bravas, marinerte oliven, potetomelett, spansk spekemat, manchego, kyllingvinger, balsamicosyltet sopp, brød og aioli mm.",
    "(E, F, HG, ME, SK, SO, SU)",
    "fra 445,- per person",
  ],
  [
    "Kjøkkenets lunsjboks",
    "Leveres porsjonspakket, kaldt. Innholdet vil variere etter råvaretilgang og sesong, eksempelvis: Roastbiff, røkelaks, skinke, reker, potetsalat, brie, eggerøre, brød, salat.",
    "(E, F, HG, ME, SE, SK, SU)",
    "245,- per porsjon",
  ],
  [
    "Kjøkkenets tapasboks",
    "Leveres porsjonspakket, kaldt. Innholdet vil variere etter råvaretilgang og sesong, eksempelvis: Chorizo, serrano, marinerte oliven, manchego, grillede grønnsaker, foccacia.",
    "(E, F, HG, ME, SE, SU)",
    "245,- per porsjon",
  ],
  [
    "Kjøkkenets varmmat",
    "Vi tilbyr et stort utvalg spennende retter fra hele verden, laget fra bunn av med fokus på naturlige råvarer og god kvalitet. Spør oss om pris og innhold.",
    "",
    "fra 106,- per person",
  ],
];

const PRISER = "Alle priser er eksklusive mva og leveranse.";
const BESTILLING = "Bestilles to dager før aktuell leveringsdag.";

const ALLERGENER: ContentBlock = {
  type: "text",
  heading: "Allergener",
  paragraphs: [
    "E: egg, F: fisk, HG: hvetegluten, L: lupiner, ME: melk/laktose, N: nøtter, S: sesam, SE: sennep, SK: skalldyr, SO: soya, SU: sulfitt.",
  ],
};

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

      note: "Alle priser er eksklusive mva og leveranse.",
      layout: "panels",
      items: MOTESERVICE_PAKKER.map(({ name, price, points }) => ({
        name,
        price,
        description: `${points.join(". ")}.`,
      })),
      priceList: {
        heading: "Enkeltvis",
        rows: ENKELTVIS.map(([name, , price]) => [name, price]),
      },
    },
    {
      heading: "Arrangementer: koldtbord, tapas og varmmat",
      proof: "Vi hjelper deg med alle former for events og firmafest!",
      note: "Bestilles to dager før aktuell leveringsdag. Alle priser er eksklusive mva og leveranse.",
      layout: "panels",
      items: ARRANGEMENTER.map(([name, description, , price]) => ({ name, description, price })),
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
            "Vi lager blant annet baguetter, foccacia eller wraps av høy kvalitet, og hjelper til å skreddersy bestillingen så den blir riktig for akkurat deg. Snitter til et styremøte? Rundstykker til frokostseminar? Vi hjelper deg!",
            "Vi får stadig høre at vi har Oslos beste påsmurt. Prøv oss neste gang og se om du er enig.",
          ],
        },
        {
          type: "products",
          heading: "Prisliste: baguette, focaccia eller ciabatta",
          items: [
            { name: "BLT", allergens: "(E, SE, SU)", price: "88,-", image: bltImg },
            { name: "Ost og skinke på spansk vis", allergens: "(E, SE, SL, SU)", price: "88,-", image: ostSkinkeImg },
            { name: "Kyllingsalat (indisk masala)", allergens: "(E, SE, SL, SU)", price: "88,-", image: kyllingsalatImg },
            { name: "Roastbeef og remulade", allergens: "(E, HG, SE, SU)", price: "88,-", image: roastbeefImg },
            { name: "Chorizo og cheddar", allergens: "(E, ME, SE, SL, SO, SU)", price: "88,-", image: chorizoImg },
            { name: "Tomat, mozzarella og pesto", allergens: "(E, ME, N, SE, spor av peanøtter)", price: "88,-", image: mozzarellaImg },
            { name: "Tunfisksalat med kapers", allergens: "(E, F, ME, SE)", price: "88,-" },
            { name: "Brie og ruccola", allergens: "(E, HG, ME, SE, SU)", price: "88,-" },
            { name: "Egg og tomat", allergens: "(E, SE, SU)", price: "88,-" },
          ],
          footnote:
            "Baguette (HG, L, ME, S, SO, kan inneholde spor av N). Focaccia (HG, kan inneholde spor av N). Ciabatta (HG, S, SO, kan inneholde spor av N).",
        },
        {
          type: "products",
          heading: "Annet påsmurt",
          items: [
            { name: "Wraps med kylling og pesto", allergens: "(HG, ME, N)", price: "88,-", image: wrapKyllingImg },
            { name: "Wraps med spekeskinke og parmesan", allergens: "(HG, ME, N)", price: "88,-", image: wrapSpekeskinkeImg },
            { name: "Wraps med røkelaks og Snøfrisk", allergens: "(E, F, HG, ME, N)", price: "88,-", image: wrapRokelaksImg },
            { name: "Rundstykke", allergens: "(HG)", price: "49,-" },
            { name: "Snitter", allergens: "(E, F, HG, ME, SE, SK, kan inneholde spor av N)", price: "175,-" },
            { name: "Kanapeer", allergens: "(E, F, HG, ME, N, SE, SK)", price: "175,-" },
          ],
        },
        {
          type: "products",
          heading: "Pinsa",
          items: [
            { name: "Spekeskinke, ruccula, parmesan og søt balsamico", allergens: "(E, HG, L, ME, SE, SO, SU)", price: "hel 130,- / halv 85,-" },
            { name: "«Caprese»: mozzarella, cherrytomat, basilikum, olivenolje", allergens: "(E, HG, L, ME, SE, SO)", price: "hel 130,- / halv 85,-" },
            { name: "Grillede grønnsaker og blåmuggost", allergens: "(HG, L, ME, SE, SO)", price: "hel 130,- / halv 85,-" },
          ],
          footnote: `${BESTILLING} ${PRISER}`,
        },
        ALLERGENER,
      ],
    },
    {
      slug: "varmmat",
      title: "Varmmat",
      description:
        "Helt Opplagt lager forskjellige varmretter hver uke, slik at du kan nyte god mat laget fra bunn av. Vi starter med tomme kjeler og jobber oss opp ved hjelp av friske grønnsaker, kjøtt og fisk av god kvalitet.",
      image: varmmatImg,
      priceNote: "",
      content: [
        {
          type: "text",
          paragraphs: [
            "Her i Helt Opplagt lager vi hver uke forskjellige varmretter slik at du kan nyte god mat laget fra bunn av. Vi starter med tomme kjeler og jobber oss opp ved hjelp av friske grønnsaker og kjøtt og fisk av god kvalitet.",
            "Menyen består av hverdagsretter fra hele verden, for eksempel indisk kylling curry, amerikansk chili con carne, russisk stroganoff og norsk lapskaus.",
          ],
        },
        {
          type: "table",
          heading: "Prisliste",
          rows: [["Kjøkkenets varmmat", "Spør oss om pris og innhold", "fra 106,- per person"]],
          footnote: `${BESTILLING} ${PRISER}`,
        },
      ],
    },
    {
      slug: "salater",
      title: "Salater",
      description:
        "Vi har en variert salatmeny med klassiske salater som cæsarsalat, nicoisesalat og pastasalat, samt spennende salater med smaker fra hele verden.",
      image: cms("3d1ba52d8c13ebc884ca2ef2304b2516"),
      content: [
        {
          type: "text",
          paragraphs: [
            "Friske grønnsaker og forskjellige salattyper utgjør basen i vår salatmeny, og fra den kan du velge grønne salater ved siden av varmmaten eller lunsjen, eller rene salatmåltider som porsjonspakket pasta- eller nicoisesalat.",
            "Prøv for eksempel vår populære cæsarsalat, laget tradisjonelt med romanosalat og vår spesielle cæsardressing!",
          ],
        },
        {
          type: "products",
          heading: "Prisliste",
          items: [
            { name: "Gresk salat med kylling", allergens: "(E, ME, SU)", price: "95,-", image: greskSalatImg },
            { name: "Nicoisesalat", allergens: "(E, F, ME, SE)", price: "95,-", image: nicoiseImg },
            { name: "Cæsarsalat", allergens: "(E, F, ME)", price: "95,-", image: caesarImg },
            { name: "Pastasalat", allergens: "(E, HG, ME, N)", price: "95,-", image: pastasalatImg },
            { name: "Taboulehsalat", allergens: "(E, HG, ME, SU)", price: "95,-", image: taboulehImg },
            { name: "Tex Mex salat", allergens: "(E, ME)", price: "95,-", image: texmexImg },
            { name: "Thaiinspirert nudelsalat", allergens: "(E, HG, S, SO)", price: "95,-", image: nudelsalatImg },
            { name: "Grønn salat med topping", allergens: "(ME, SE / hvis tunfisk: F / hvis reker: SK)", price: "95,-", image: gronnSalatImg },
            { name: "Hverdagssalat med topping", allergens: "(ME, SE / hvis tunfisk: F / hvis reker: SK)", price: "78,-", image: hverdagssalatImg },
            {
              name: "Hverdagssalat, grønn salat og gresk salat uten topping",
              allergens: "Passer fint som tilbehør til brødmat eller varmmat",
              price: "65,- / 69,-",
            },
          ],
          footnote: `Topping kan eksempelvis være couscous, kylling, reker, ost og skinke eller pasta med hvitløksdressing. Salatene kan leveres porsjonspakket eller i storforpakning og prisene er per porsjon (ca. 200-300 g). ${BESTILLING} ${PRISER}`,
        },
        ALLERGENER,
      ],
    },
    {
      slug: "overtidsmat",
      title: "Overtidsmat",
      description:
        "Vi lager nydelige varmretter i porsjonspakker. Våre overtidspakker leveres som «overtidsmat abonnement» som sørger for at dere har mat klar i kjøleskapet som enkelt kan varmes i micro. Vi varierer menyen hver uke.",
      image: cms("fae8c770cb3e37279d5d9083d9b71ddd"),
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
      priceNote: "",
      content: [
        {
          type: "packages",
          heading: "Møteservicepakker",
          items: MOTESERVICE_PAKKER,
        },
        {
          type: "table",
          heading: "Enkeltvis",
          rows: ENKELTVIS.map(([name, allergens, price]) => [
            allergens ? `${name} ${allergens}` : name,
            price,
          ]),
          footnote: `${BESTILLING} ${PRISER}`,
        },
        ALLERGENER,
      ],
    },
    {
      slug: "event",
      title: "Event",
      description:
        "Vi hjelper deg med alle former for events og firmafest! Planlegger du et arrangement for kunder og forretningsforbindelser, en feiring eller fest med kolleger, eller rett og slett bare en fredagspils?",
      image: eventImg,
      content: [
        {
          type: "text",
          heading: "Vi hjelper deg med alle former for events og firmafest!",
          paragraphs: [
            "Planlegger du et arrangement for kunder og forretningsforbindelser, en feiring eller fest med kolleger, eller rett og slett bare en fredagspils? Hva med digitalt kick-off med hjemkjøring av varer?",
          ],
        },
        {
          type: "table",
          heading: "Arrangementer",
          rows: ARRANGEMENTER.map(([name, description, allergens, price]) => [
            name,
            allergens ? `${description} ${allergens}` : description,
            price,
          ]),
          footnote: `${BESTILLING} ${PRISER}`,
        },
        {
          type: "image",
          src: kickoffImg,
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
            "Se ikke bort fra at vi også kan stille med kokk eller serveringshjelp hvis dere skulle ønske det. Ta kontakt, så hjelper vi dere å sette sammen et vellykket arrangement.",
          ],
        },
      ],
    },
    {
      slug: "helt-opplagt-pa-garden",
      title: "Helt Opplagt på gården",
      description: "Nå kan vi også stille med lokaler til ditt arrangement.",
      brochureUrl: "/brosjyrer/helt-opplagt-pa-garden.pdf",
      image: cms("88375d2d8c649f17faafa2f6ad6ccc56"),
      content: [
        {
          type: "media",
          heading: "Leter du etter det perfekte stedet for ditt arrangement?",
          paragraphs: [
            "Hos oss på Store Stensrud Gård, syd i Oslo, tilbyr vi unike lokaler for både store og små feiringer!",
            "Gården ligger lett tilgjengelig 15 minutters kjøretid syd for Oslo sentrum og har eget busstopp for ankomst med offentlig transport.",
          ],
          images: [
            { src: gardshusImg, alt: "Hovedhuset på Store Stensrud Gård" },
            { src: innkjorselImg, alt: "Innkjørselen til Store Stensrud Gård med velkomstskilt" },
          ],
        },
        {
          type: "media",
          reverse: true,
          kicker: "Innendørs arrangementer",
          heading: "Unike lokaler for både store og små feiringer!",
          images: [
            { src: stallenFestImg, alt: "Bursdagsfest i stallen på Store Stensrud Gård" },
            { src: kokkImg, alt: "Kokken lager mat i stor panne på gårdstunet", position: "50% 30%" },
            { src: festlokaleImg, alt: "Festlokale dekket med langbord, lerret og ballonger", position: "50% 75%" },
          ],
          paragraphs: [
            "Skap en uforglemmelig feiring i landlige omgivelser, enten dere planlegger firmafest, sommerfest, bryllup, konfirmasjon, dåp, navnefest eller en sosial samling med gode opplevelser.",
            "Vi kan ordne mat, drikke, kokk og servitører, enten dere ønsker grillfest, tapas eller en mer tradisjonell selskapsmeny. Dere kan senke skuldrene, nyte dagen og la oss ta oss av resten.",
            "Vi dekker opp og pynter stallen for en genuin låvefest med plass til 50-60 personer til bords, samt mulighet for bar og dans. Er dere flere, kan vi finne gode løsninger med telt utendørs.",
            "For mindre selskaper på rundt 20 personer tilbyr vi også koselige og ærverdige stuer i hovedhuset.",
          ],
        },
        {
          type: "media",
          kicker: "Utendørs arrangementer",
          heading: "Gårdsleker og grillfester",
          paragraphs: [
            "Gården har store utendørs arealer med plass til flere hundre mennesker til store sommerfester, kick-off, grillfester og mer!",
            "Nyt vårt tradisjonsrike gårdstun med rikelig plass for dans, lek, spill og aktiviteter. Vi tilbyr morsomme aktiviteter som tautrekking, hesteskokasting, kasting på blikkbokser, cornhole, stigegolf, kubb, krokett, badminton etc.",
          ],
          images: [
            { src: gardstunBordImg, alt: "Bord og stoler dekket på gårdstunet", position: "50% 60%" },
            { src: badmintonImg, alt: "Badmintonnett på plenen", position: "50% 55%" },
            { src: kubbImg, alt: "Kubb på plenen ved gårdstunet", position: "50% 55%" },
          ],
        },
        {
          type: "media",
          reverse: true,
          heading: "Badeplass",
          paragraphs: [
            "En kort spasertur fra gården ligger Stensrudtjernet hvor du finner en fin badeplass med sandstrand og gressletter.",
          ],
          badge: "Perfekt på varme sommerdager",
          images: [{ src: badeplassImg, alt: "Benk ved badeplassen ved Stensrudtjernet", position: "50% 55%" }],
        },
        {
          type: "media",
          heading: "Paintball og Archery Tag",
          paragraphs: [
            "I samarbeid med vår nabo Highjump Event, kan vi også tilby fartsfylt action med paintball eller bueskyting!",
          ],
          badge: "Fra 500,- pr hode",
          images: [
            { src: archeryTagImg, alt: "Archery Tag hos Highjump Event" },
            { src: paintballImg, alt: "Paintball hos Highjump Event" },
            { src: paintballStemningImg, alt: "Blide paintballspillere i utstyr" },
            { src: lavvoImg, alt: "Lavvo med bålpanne hos Highjump Event" },
          ],
        },
        {
          type: "packages",
          heading: "Fest med aktiviteter og mat",
          items: [
            {
              name: "Aktiv gårdsdag med mat og konkurranser",
              price: "ca. 835 kr per person",
              points: [
                "Gårdsleie",
                "Gårdsleker",
                "Mat",
                "Bemanning",
                "Utvask",
                "Tilgang til store uteområder for enkle gårdsleker og sosiale aktiviteter",
              ],
              note: "Passer godt for sommerfest, firmafest, bursdag, vennegjeng eller uformell feiring.",
            },
            {
              name: "Full opplevelsesdag med paintball eller bueskyting",
              price: "ca. 1 335 kr per person",
              points: [
                "Gårdsleie",
                "Gårdsleker",
                "Mat",
                "Bemanning",
                "Utvask",
                "Paintball eller bueskyting hos Highjump",
              ],
              note: "Dette passer spesielt godt for firmaevent, teambuilding, utdrikningslag eller vennegjenger som ønsker mer aktivitet før maten.",
            },
          ],
        },
        {
          type: "table",
          heading: "Pakkeforslag: 50 personer",
          rows: [
            ["Gårdsleie", "5 000,-"],
            ["Bemanning: 2 personer x 5 timer à kr 750", "7 500,-"],
            ["Rydding og utvask", "2 000,-"],
            ["Grillmeny eller tapas: 50 x kr 445", "22 250,-"],
            ["Totalt uten paintball/bueskyting", "41 750,-"],
            ["Paintball/bueskyting per person", "500,-"],
            ["Totalt med paintball/bueskyting", "66 750,-"],
          ],
          footnote:
            "Endelig pris avhenger av antall personer, ønsket meny, varighet, bemanning, drikke og eventuelle tilvalg som telt, kaker, snacks eller ekstra aktiviteter. Vi har tappetårn. Eventuelle polvarer må medbringes selv. Ta kontakt for et konkret tilbud til deres arrangement.",
        },
        {
          type: "packages",
          heading: "Matvalg",
          items: [
            {
              name: "Grillmeny",
              price: "kr 445,- /kuvert",
              points: [
                "Spareribs",
                "Marinert kylling lårfilet",
                "Grillede maiskolber",
                "«Cæsar»-inspirert salat",
                "Potetsalat",
                "Focaccia og aioli",
                "Blanding av ostepølser og baconpølser med tilbehør",
              ],
            },
            {
              name: "Tapas",
              price: "kr 445,- /kuvert",
              points: [
                "Albondigas",
                "Scampi med hvitløk",
                "Patatas bravas",
                "Marinerte oliven",
                "Spansk spekemat",
                "Manchego",
                "Balsamicosyltet sopp",
                "Brød og aioli mm.",
              ],
            },
          ],
        },
        {
          type: "table",
          heading: "Priser",
          rows: [
            ["Gårdsleie", "5 000,- pr dag"],
            ["Bemanning", "750,- pr time"],
            ["Rydding/utvask", "2 000,-"],
            ["Gårdsleker", "inkludert"],
            ["AV-utstyr (projektor/lerret/høyttalere/mikrofoner/miksebord)", "inkludert"],
            ["Paintball/bueskyting", "500,- pr pers pr time"],
            ["Grillmat eller tapas", "445,- pr kuvert"],
          ],
          footnote: "Alle priser er eksklusive mva.",
        },
        {
          type: "text",
          paragraphs: [
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
        {
          type: "table",
          heading: "Marsipankake med valnøtt og bringebær",
          rows: [
            ["6-8 personer", "530,-"],
            ["12-14 personer", "830,-"],
            ["16-20 personer", "1125,-"],
            ["24 personer", "1350,-"],
            ["30 personer", "1640,-"],
            ["40 personer", "2150,-"],
          ],
          footnote:
            "(E, HG, ME, N). Vi kan også levere laktose- og glutenfrie kaker, større kaker, samt bilde og valgfri tekst, kontakt oss for pris.",
        },
        {
          type: "table",
          heading: "Andre kaker",
          rows: [
            ["Ostekake med pasjonsfrukt, 6-8 pers", "(E, HG, ME)", "465,-"],
            ["Ostekake med pasjonsfrukt, 16-20 pers", "(E, HG, ME)", "720,-"],
            ["Bringebærgelékake, 6-8 pers", "(E, HG, ME, SO, SU)", "610,-"],
            ["Bringebærgelékake, 16 pers", "(E, HG, ME, SO, SU)", "975,-"],
            ["Pavlova, 10-12 pers", "(E, ME)", "695,-"],
            ["Sjokolademuffinkake, 6-8 pers", "(E, HG, ME, SO, kan inneholde spor av N)", "450,-"],
            ["Sjokoladedrøm, 20 pers", "(E, HG, ME, SO)", "1195,-"],
            ["Bringebærmousse, 10 pers", "(E, L, ME, N, SO, kan inneholde spor av L)", "1025,-"],
            ["Sjokolademousse med chili, 10-14 pers", "(E, HG, ME, kan inneholde spor av N)", "985,-"],
            ["Kransekake, 9 ringer", "(E, N)", "350,-"],
            ["Kransekake, 18 ringer", "(E, N)", "950,-"],
            ["Brownie med pistasjnøtter og havsalt, 40 biter", "(E, HG, ME, N, kan inneholde spor av S)", "1365,-"],
            ["Gulrotkake, 40 biter", "(E, HG, ME)", "1295,-"],
            ["Sjokoladekake vegansk, 40 biter", "(SO)", "1395,-"],
            ["Festsjokoladekake, 35 biter", "(HG, ME, SO)", "2150,-"],
          ],
        },
        {
          type: "table",
          heading: "Bakervarer",
          rows: [
            ["Makron, 4-5 stk", "(E, HG, ME, N)", "90,-"],
            ["Wienerstang med eple", "(E, HG, ME)", "90,-"],
            ["Muffins: Eple, sjokolade eller bringebær/sjokolade", "(E, HG, ME, N, kan inneholde spor av SO)", "35,-"],
            ["Hveteboller/rosinboller", "(E, HG, ME)", "12,-"],
            ["Skolebolle", "(E, HG, ME, SU)", "35,-"],
            ["Kanelsnurr", "(E, HG, ME)", "35,-"],
            ["Wienerbrød", "(E, HG, ME, N)", "35,-"],
            ["Croissant", "(E, HG, ME)", "35,-"],
          ],
          footnote: `${BESTILLING} ${PRISER}`,
        },
        ALLERGENER,
      ],
    },
  ],
};

export function CateringPage() {
  return <ServicePage data={cateringData} />;
}
