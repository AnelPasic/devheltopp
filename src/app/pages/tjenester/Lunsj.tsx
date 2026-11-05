import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/lunsj/lunsj.webp";
import openingImg from "../../../images/hero/hero-lunsj.webp";
import explainerImg from "../../../images/catering/fat-anretning.webp";
import fatHof3 from "../../../images/lunsj/hof3.webp";
import hverdagslunsjenImg from "../../../images/lunsj/cards/hverdagslunsjen.webp";
import golunsjenImg from "../../../images/lunsj/cards/golunsjen.webp";
import superlunsjenImg from "../../../images/lunsj/cards/superlunsjen.webp";
import varmLunsjImg from "../../../images/lunsj/varm-lunsj.webp";
import { cms } from "../../../images/cms";


export const lunsjData: ServicePageData = {
  path: "/tjenester/lunsj",
  badge: "Mat & Drikke",
  layout: "light",
  title: (
    <>
      Lunsj
    </>
  ),
  subtitle: "Sunn og god lunsj gjør arbeidsdagen bedre",
  intro:
    "Vi har over 25 års erfaring med å levere lunsj til store og små bedrifter i Oslo og Stor-Oslo. Vi leverer alt fra enkle lunsjesker til proffkantine, og er eksperter på å sikre en god og variert lunsj tilpasset bedriftens behov.",
  image: heroImg,
  imageAlt: "Lunsj fra Helt Opplagt",
  heroImage: openingImg,
  brochureUrl:
    "/brosjyrer/helt-opplagt-lunsjbrosjyre-2026.pdf",
  heroPoints: [
    { label: "Sunn og god lunsj hver dag" },
    { label: "Et sosialt avbrekk i en travel hverdag" },
    { label: "Sparer tid og samler de ansatte" },
  ],
  explainer: {
    heading: "Hva tilbyr vi?",
    body: [
      "Helt Opplagt leverer lunsjordninger for alle type arbeidsplasser. Start med en av våre ferdig komponerte lunsjesker, og tilpass etter ønske. Alle lunsjeskene har et basis innhold av fersk brød, utvalgt pålegg, grønnsaker, frukt og drikke. Vi varierer innholdet fra dag til dag, med over 50 ulike rullerende menyer. Lunsjeskene er tilpasset fra fem personer og oppover, og leveres hver dag før kl. 11.00.",
      "Vi leverer også varm lunsj på jobb, ferdige fat med pålegg og fullservice kantineordninger. Vi tilpasser lunsjordningen etter deres behov, og hjelper dere med å skape en hyggelig og sosial lunsjpause for alle ansatte.",
    ],

    image: explainerImg,
    imageAlt: "Kokk fra Helt Opplagt anretter påleggsfat",
    video: {
      youtubeId: "ElqfdKrEfkM",
      title: "Lunsj fra Helt Opplagt",
      length: "0:58",
      photoTab: "Lunsj",
      videoTab: "Møt oss",
    },
  },
  catalogs: [
    {
      heading: "Velg din lunsjeske",

      layout: "grid",
      items: [
        {
          name: "Hverdagslunsjen",
          //tag: "Rimelig",
          description:
            "Vår enkleste og rimeligste lunsjordning. Passer for dere som ønsker å spare penger, og samtidig ha noe som er ferskere og friskere enn matpakke.",
          image: hverdagslunsjenImg,
          to: "/tjenester/lunsj/hverdagslunsjen",
        },
        {
          name: "Go'lunsjen",
          //tag: "Populær",
          description:
            "Vår mest populære lunsjordning. God og variert, fersk og frisk. Et tidsbesparende og lønnsomt alternativ til å handle mat i butikken.",
          image: golunsjenImg,
          to: "/tjenester/lunsj/golunsjen",
        },
        {
          name: "Superlunsjen",
          //tag: "Flaggskip",
          description:
            "Vårt flaggskip blant selvbetjente lunsjordninger. Luksuriøst og velsmakende, godt og variert. Et fristende utvalg for dere som ønsker å gjøre noe ekstra ut av lunsjen.",
          image: superlunsjenImg,
          to: "/tjenester/lunsj/superlunsjen",
        },
      ],
    },
    {
      heading: "Ferdige fat",

      layout: "feature",
      items: [
        {
          name: "Leveres rett inn i deres kjøleskap",
          tag: "Passer best fra ca 10 pers og oppover",
          description:

            "Ønsker dere dagens meny lekkert dandert på fat? Basert på Go’lunsjen, får dere et variert utvalg av kjøtt, fisk, ost, egg og grønnsaker – med tilbehør som drikke, smør og syltetøy pakket ved siden av. Fredager byr på ekstra variasjon med varme innslag som karbonader, roastbiff eller kyllingvinger. ",
          image: fatHof3,
        },
      ],
      link: { label: "Les mer om ferdige fat", to: "/tjenester/lunsj/ferdige-fat" },
    },
    {
      heading: "Varm lunsj på jobb",

      layout: "feature",
      items: [
        {
          name: "Stor variasjon og lang holdbarhet",
          tag: "Mer enn 50 retter",
          description:
            "Vi har et stort utvalg av velsmakende varmretter, alle laget helt fra bunn av, med fokus på sunnhet og naturlige råvarer. Rettene leveres både porsjonspakkede og i storforpakninger, og kan raskt og enkelt varmes opp i komfyr eller mikrobølgeovn.",
          image: varmLunsjImg,
        },
      ],
      link: { label: "Les mer om varm lunsj", to: "/tjenester/lunsj/varm-lunsj" },
    },
  ],
  hideSubServiceCards: true,
  faq: [
    {
      question: "Hvor mange må vi være for å få lunsjlevering?",
      answer:
        "Er du en bedrift mellom 5-300 ansatte kan vi levere alt fra enkle lunsjbokser til proffkantine. Ferdige fat passer best fra ca 10 pers og oppover.",
    },
    {
      question: "Når leveres lunsjen på jobben?",
      answer:
        "All lunsj leveres før kl. 11 hver dag. Vi leverer daglig eller etter behov.",
    },
    {
      question: "Hva koster en lunsjordning?",
      answer:
        "Hverdagslunsjen koster ca. 32 kr per person/dag. Go'lunsjen koster ca. 50 kr per person/dag. Superlunsjen koster ca. 61 kr per person/dag. Husk at det går an å gjøre tilleggsbestillinger ved behov/ønske.",
    },
    {
      question: "Hva inneholder lunsjesken?",
      answer:
        "Vi kommer daglig med en eske som inneholder ferskt brød, dagens pålegg, grønnsaker, frukt og drikke. Noen ting, som for eksempel smør og syltetøy, kommer mandager og er ment å vare utover uken, mens det aller meste er dagens pålegg for at dere skal slippe å rydde det samme pålegget ut og inn av kjøleskapet hver dag.",
    },
  ],
  readMore: [
    {
      label: "Lunsjesker",
      description: "Velg blant vår enkle Hverdagslunsj™, populære Go'lunsj™ eller luksuriøse Superlunsj™.",
      to: "/tjenester/lunsj/hverdagslunsjen",
      image: cms("4b5debec2dd9e84aaaa4847cf6ad5852"),
    },
    {
      label: "Ferdige fat",
      description: "Lekre fat, levert rett i kjøleskapet - klart til lunsj når dere er det",
      to: "/tjenester/lunsj/ferdige-fat",
      image: cms("41d9e0eadce975c155ef731dbce1b6a8"),
    },
    {
      label: "Varm lunsj",
      description: "Vi har et stort utvalg av velsmakende retter, alle laget helt fra bunn av.",
      to: "/tjenester/lunsj/varm-lunsj",
      image: varmLunsjImg,
    },
    {
      label: "Kantine",
      description: "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
      to: "/tjenester/kantine",
      image: cms("f8b24672f313f2f3ca35fd4b0765e8ab"),
    },
  ],
  subServices: [
    {
      slug: "hverdagslunsjen",
      title: "Hverdagslunsjen",
      variantOf: "lunsjesker",
      priceNote: "Ca. 32 kr per person/dag",
      description:
        "Vår enkleste og rimeligste lunsjordning. Passer for dere som ønsker å spare penger, men samtidig ha noe som er ferskere og friskere enn matpakke. Leveres i enheter tilpasset ca 5 pers.",
      image: hverdagslunsjenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vår enkleste og rimeligste lunsjordning. Denne esken består av brød, smør, to-tre typer pålegg og juice/melk. I tillegg får dere kokte egg hver fredag.",
            "Hverdagslunsjen koster ca. 32 kr per person/dag. Lunsjesken leveres helt inn til ønsket rom, hver dag før kl 11.",

          ],
        },

      ],
    },
    {
      slug: "golunsjen",
      title: "Go'lunsjen",
      variantOf: "lunsjesker",
      priceNote: "Ca. 50 kr per person/dag",
      description:
        "Vår mest populære lunsjordning. God og variert, fersk og frisk. Et tidsbesparende og lønnsomt alternativ til å handle mat i butikken. Passer fra ca 5 pers og oppover.",
      image: golunsjenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vår mest populære lunsjordning. Dere får brød, smør, juice/melk og et stort utvalg av pålegg. Pålegget varieres daglig med blant annet kjøtt- og fiskepålegg, majones, kaviar, assorterte oster, italiensk salat, skalldyrsalater, syltetøy, leverpostei og mye mer. Dere får også friske grønnsaker. Hver fredag leverer vi i tillegg karbonader, kokte egg, fiskekaker eller kyllingvinger. En frukt til hver person er inkludert i lunsjesken. ",
            "Go'lunsjen koster ca. 50 kr per person/dag. Lunsjesken leveres helt inn til ønsket rom, hver dag før kl 11.",

          ],
        },

      ],
    },
    {
      slug: "superlunsjen",
      title: "Superlunsjen",
      variantOf: "lunsjesker",
      priceNote: "Ca. 61 kr per person/dag",
      description:
        "Vårt flaggskip blant selvbetjente lunsjordninger. Luksuriøst og velsmakende, godt og variert. Et fristende utvalg for dere som ønsker å gjøre noe ekstra ut av lunsjen. Passer fra ca 5 pers og oppover.",
      image: superlunsjenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vårt flaggskip blant selvbetjente lunsjordninger. Superlunsjen er vår mest lukseriøse og velsmakende, og inneholder mer eksklusive råvarer enn Go'lunsjen. Her får man for eksempel brie, røkt laks og rosatbiff i tillegg til kokte egg flere ganger i uken. Det er oftere tilpassede fredagsmenyer, og dere får flere gønnsaker og ferskpresset juice.",
            "Superlunsjen koster ca. 61 kr per person/dag. Lunsjesken leveres helt inn til ønsket rom, hver dag før kl 11.",
          ],
        },

      ],
    },
    {
      slug: "ferdige-fat",
      title: "Ferdige fat",
      description:
        "Kjøtt- og fiskepålegg, ost, egg, grønnsaker osv pakkes på fat. Et tidsbesparende og lønnsomt alternativ til å handle mat i butikken. Passer best fra ca 10 pers og oppover.",
      image: cms("41d9e0eadce975c155ef731dbce1b6a8"),
      content: [
        {
          type: "text",
          heading: "Ønsker dere en ordning som er enda mer tilrettelagt?",
          paragraphs: [
            "Vi kommer hver dag med dagens meny lekkert dandert på fat. Lunsjfatene baserer seg på det store utvalget vi leverer i Go'lunsjen og passer best fra ca. ti personer og oppover. Dere får en kjøtt- og fiskepålegg, ost , egg og friske grønnsaker. Drikke, smør, syltetøy og annet som ikke egner seg på fat, kommer ved siden av. Dere får en flere typer pålegg hver dag, med stor variasjon.\n \nVi rullerer mellom 50  forskjellige påleggsmenyer, slik at dere ikke går lei.Dere får også egen fredagsmeny, der det varieres mellom blant annet karbonader, roastbiff, fiskekaker og kyllingvinger.",
          ],
        },

      ],
    },
    {
      slug: "varm-lunsj",
      title: "Varm lunsj",
      description:
        "Vi har et stort utvalg av velsmakende retter, laget av våre egen kokker - helt fra bunnen av.",
      image: varmLunsjImg,
      content: [
        {
          type: "text",
          heading: "Stor variasjon og lang holdbarhet",
          paragraphs: [
            "På vårt kjøkkken er det fokus på sunne og ferske råvarer uten tilsetningsstoffer, og rettene leveres både porsjonspakket og i storforpakninger. Disse kan raskt og enkelt varmes opp i komfyr eller mikrobølgeovn. \n \n Vi jobber kontinuerlig med fornyelse av våre menyer og har et godt og variert utvalg. Vi vil at våre kunder skal oppleve en inspirerende variasjon, så det rulleres mellom smaksrike retter fra hele verden. Under ser du et lite utvalg av våre retter:",
          ],
        },
        {
          type: "bullets",
          items: [
            "Kylling curry med ris",
            "Marinerte kyllinglår med potetsalat",
            "Albondigas med stekte poteter",
            "Viltgryte med stekte poteter",
            "Lapskaus",
            "Chili con Carne med ris",
            "Thailandsk Green Curry med ris",
            "Pasta Carbonara",
            "Karbonader med ertepure og stekte poteter",
          ],
        },
      ],
    },
    {
      slug: "kantine",
      title: "Kantine",
      description:
        "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
      image: cms("f8b24672f313f2f3ca35fd4b0765e8ab"),
      content: [
        {
          type: "text",
          heading: "Vi kommer med maten - dere nyter",
          paragraphs: [
            "Et fullservicetilbud for litt større bedrifter der vi tar oss av hele lunsjavviklingen. Vi stiller med en hyggelig vert/vertinne. Dere kan bare komme og nyte!",
            "Gjennom mange års erfaring med fornøyde kunder er tjenesten spesialtilpasset bedrifter med mellom 20 til 150 ansatte. Våre varierte menyer gir dere en buffet som er både smaksrik og sunn for kroppen, samt presentert på en måte som er en fryd for øyet! Vi tilbyr et modulbasert kantinetilbud der dere selv kan påvirke sammensetningen.",
            "I ca 100 betjente kantiner sørger våre dyktige, blide og serviceinnstilte verter og vertinner for å skape en god lunsjopplevelse i en travel hverdag for våre kunders ansatte. Vi vet at våre kunder er opptatt av både atmosfære og smak, så vårt fokus er å skape en hyggelig ramme rundt lunsjavviklingen i tillegg til høy kvalitet på maten vi serverer.",
          ],
        },
        {
          type: "bullets",
          heading: "Modulbasert kantinetilbud - velg blant følgende moduler:",
          items: [
            "Frokostblanding og yoghurt som et alternativ eller tillegg.",
            "Pålegg - pyntede fat og skåler med kjøtt- og fiskepålegg, oster, majonessalater, syltetøy og smørepålegg som varieres fra dag til dag.",
            "Småretter som omelett, tunfisksalat og grønnsakspanne.",
            "Salater - daglig variasjon mellom mange spennende salater som tilberedes ferskt hos dere.",
            "Varmmat laget fra bunn av på vårt eget kjøkken.",
            "Vafler/småkaker - perfekt som fredagskos!",
            "Ulike typer drikke som juice og melk, deriblant kundefavoritten Eplejuice fra Askim frukt- og bærpresseri.",
            "Brød/knekkebrød - sunne og grove brød etter egne oppskrifter uten unødvendige tilsetningsstoffer. Variert utvalg av gode og fiberrike knekkebrødvarianter.",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Vi leverer daglig, noe som gir store fordeler i forhold til ferskhet, kvalitet og fleksibilitet. Det gir lettere tilpasning til variasjoner i antall brukere og gjester, og fjerner svinnproblematikk.",
            "Vi presenterer helst maten på fat i en buffetløsning. Dette hindrer unødvendig svinn, sparer tidsbruk og dermed også kostnader, samt ikke minst er det den gunstigste løsningen for miljøet, sammenlignet med å servere maten i kuvertbegre.",
            "Våre utmerkede verter og vertinner sørger for at dere bare kan komme og nyte maten da vi tar oss av alt arbeidet rundt, herunder gjøremål som: av- og pådekking, tilbereding av all maten i buffeten, oppvask, holde kjøkken og kantineområdet rent og ryddig.",
          ],
        },
      ],
    },
  ],
};

export function LunsjPage() {
  return <ServicePage data={lunsjData} />;
}
