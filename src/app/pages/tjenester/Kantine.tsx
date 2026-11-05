import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/kantine/kantine.webp";
import openingImg from "../../../images/hero/hero-kantine.webp";
import explainerImg from "../../../images/kantine/sport-1-07.webp";
import utenKjokkenImg from "../../../images/kantine/sport-1-13.webp";
import lunsjCardImg from "../../../images/lunsj/lunsj.webp";
/* Module photos are Unsplash stock (free license); palegg.jpg is Helt Opplagt's own tray photo. */
import modFrokost from "../../../images/kantine/moduler/frokost.webp";
import modBrod from "../../../images/kantine/moduler/brod.webp";
import modPalegg from "../../../images/kantine/moduler/palegg.webp";
import modSalater from "../../../images/kantine/moduler/salater.webp";
import modSmaretter from "../../../images/kantine/moduler/smaretter.webp";
import modVarmmat from "../../../images/kantine/moduler/varmmat.webp";
import modDrikke from "../../../images/kantine/moduler/drikke.webp";
import modVafler from "../../../images/kantine/moduler/vafler.webp";
import kantine2019Img from "../../../images/kantine/kantine-2019.webp";
import { cms } from "../../../images/cms";


export const kantineData: ServicePageData = {
  path: "/tjenester/kantine",
  badge: "Mat & Drikke",
  layout: "light",
  title: (
    <>
      Kantine
    </>
  ),
  subtitle: "Kantine og kantinedrift for bedrifter i Oslo",
  intro:
    "Kantine for bedrifter som vil ha en fullverdig lunsjopplevelse uten å bygge opp en tung intern kantinedrift. Proffkantine er vårt fullservicetilbud til alle typer kjøkken der vi tar oss av hele lunsjavviklingen. Ta kontakt med oss for en gratis befaring.",
  image: heroImg,
  imageAlt: "Kantinedrift fra Helt Opplagt",
  heroImage: openingImg,
  brochureUrl:
    "https://heltopplagt.no/application/files/9016/9636/6182/Helt_Opplagt_Kantinebrosjyre_2023_WEB.pdf",
  heroPoints: [
    { label: "Mat tilbedret av proffesjonelle kokker" },
    { label: "Stor variert meny" },
    { label: "Kan fungerer uten fullt kantinekjøkken" },
  ],
  explainer: {
    heading: "Hva tilbyr vi?",
    body: [
      "Helt opplagt tilbyr en komplett kantineløsning for alle typer bedrifter, der alt er lagt til rette for at dere får en god og velfungerende lunsj, uten ekstra arbeid.",
      "Løsningen er modulbasert og kan enkelt tilpasses etter behov. Det gir høy fleksibilitet, mindre matsvinn og full kontroll på kvalitet og mengde. Med vår kantinetjeneste får dere en enklere hverdag – og en lunsjpause folk gleder seg til.",
      " Vår kantinetjeneste kan også kombineres med daglig renhold.",
    ],

    image: explainerImg,
    imageAlt: "Kantine med buffet levert av Helt Opplagt",
    video: {
      youtubeId: "dWk5BL-YokE",
      title: "Kantine fra Helt Opplagt",
      length: "1:50",
      photoTab: "Kantine",
      videoTab: "Møt oss",
    },
  },
  catalogs: [
    {
      heading: "Modulbasert kantinetilbud",
      proof:
        "Vi er veldig fleksible og kunden håndplukker moduler etter ønske. Her kan man få, mange eller alle moduler hver dag. Legger også tilrette for en kombinasjon med for eksempel noen moduler fast og la andre rullere utover uken.",
      layout: "grid",
      photo: true,
      items: [
        {
          name: "Frokostblanding og yoghurt",
          description: "Som et alternativ eller tillegg.",
          image: modFrokost,
        },
        {
          name: "Brød og knekkebrød",
          description:
            "Sunne og grove brød etter egne oppskrifter uten unødvendige tilsetningsstoffer. Variert utvalg av gode og fiberrike knekkebrødvarianter.",
          image: modBrod,
        },
        {
          name: "Pålegg",
          description:
            "Pyntede fat og skåler med kjøtt- og fiskepålegg, oster, majonessalater, syltetøy og smørepålegg som varieres fra dag til dag.",
          image: modPalegg,
        },
        {
          name: "Salater",
          description: "Daglig variasjon mellom mange spennende salater som tilberedes ferskt hos dere.",
          image: modSalater,
        },
        {
          name: "Småretter",
          description: "Småretter som omelett, tunfisksalat og grønnsakspanne.",
          image: modSmaretter,
        },
        {
          name: "Varmmat",
          description: "Varmmat laget fra bunn av på vårt eget kjøkken.",
          image: modVarmmat,
        },
        {
          name: "Drikke",
          description:
            "Ulike typer drikke som juice og melk, deriblant kundefavoritten Eplejuice fra Askim frukt- og bærpresseri.",
          image: modDrikke,
        },
        {
          name: "Vafler og småkaker",
          description: "Perfekt som fredagskos!",
          image: modVafler,
        },
      ],
    },
    {
      heading: "Kantine på jobben – uten kjøkken?",
      proof: "Hos Helt Opplagt leverer vi fullverdige kantineløsninger til bedrifter helt ned i 15 personer – uten at dere trenger store kjøkkenfasiliteter.",
      layout: "feature",
      items: [
        {
          name: "Ingen kjøkken? Ikke noe problem!",
          description:
            "Du trenger du ikke et stort kjøkken, man kommer langt med en komfyr, kjøleskap og oppvaskmaskin. Alt kommer klart til bruk, og våre kantineverter tar seg av oppdekking, rydding og etterarbeid – med et smil.",
          image: utenKjokkenImg,
        },
      ],
      link: {
        label: "Les mer om kantine uten kjøkken",
        to: "/tjenester/kantine/kantine-pa-jobben-uten-kjokken",
      },
    },
    {
      heading: "Verter og vertinner",
      proof: "I våre mer enn 100 betjente kantiner sørger våre dyktige, blide og serviceinnstilte verter og vertinner for å skape en god lunsjopplevelse i en travel hverdag.",
      layout: "feature",
      items: [
        {
          name: "Dere kan bare komme og nyte maten",
          description:
            "Vi tar oss av alt: av- og pådekking, tilbereding av all maten i buffeten, oppvask, holde kjøkken og kantineområdet rent og ryddig etc. Vi kan også påta oss annet forefallende kontorarbeid og/eller vask av deres lokaler.",
          image: cms("a29ba39192bb1cdb321cad644af15f53"),
        },
      ],
      link: {
        label: "Les mer om verter og vertinner",
        to: "/tjenester/kantine/verter-og-vertinner",
      },
    },
  ],
  hideSubServiceCards: true,
  faq: [
    {
      question: "Leverer Helt Opplagt kantine til bedrifter i Oslo?",
      answer:
        "Ja. Helt Opplagt leverer kantine og kantineservice til bedrifter i Oslo og Stor-Oslo. Løsningen kan inkludere daglig matlevering, buffet, lunsjavvikling og vert eller vertinne.",
    },
    {
      question: "Hva er forskjellen på kantine og lunsjordning?",
      answer:
        "En lunsjordning handler ofte om matlevering. En kantineløsning kan også inkludere oppsett, buffet, servering, rydding, vert/vertinne og mer praktisk drift rundt lunsjen.",
    },
    {
      question: "Kan vi få kantine uten fullt kjøkken?",
      answer:
        "Ja. Helt Opplagt kan levere kantineløsninger også for bedrifter uten fullt kantinekjøkken. Maten lages på eget kjøkken og leveres til arbeidsplassen.",
    },
    {
      question: "Hvilke bedrifter passer kantineservice for?",
      answer:
        "Kantineservice passer særlig godt for små og mellomstore bedrifter som ønsker en fast og profesjonell lunsjopplevelse uten å håndtere alt selv. Løsningen er særlig aktuell for bedrifter med omtrent 20–300 ansatte.",
    },
    {
      question: "Hva kan inngå i en kantineløsning?",
      answer:
        "En kantineløsning kan inkludere brød, pålegg, salater, småretter, varmmat, drikke, buffet, vert/vertinne og praktisk lunsjavvikling.",
    },
    {
      question: "Hva koster kantinedrift?",
      answer:
        "Prisen avhenger av antall ansatte, leveringsfrekvens, menyvalg, behov for varmmat, om dere ønsker vert/vertinne og hvor mye drift Helt Opplagt skal håndtere. Be om befaring for riktig forslag.",
    },
    {
      question: "Kan kantine kombineres med renhold?",
      answer:
        "Ja. Helt Opplagt tilbyr både kantine og renhold. For noen bedrifter kan det gi færre leverandører, enklere oppfølging og bedre utnyttelse av tiden til vert eller vertinne.",
    },
  ],
  readMore: [
    {
      label: "Om våre kantiner",
      description: "Gjennom mange års erfaring med fornøyde kunder er tjenesten spesialtilpasset bedrifter mellom 20 og 300 ansatte.",
      to: "/tjenester/kantine/om-vare-kantiner",
      image: cms("1e7046a1804a25a379a1d086b08d75ee"),
    },
    {
      label: "Kantine på jobben – uten kjøkken?",
      description: "Vi leverer fullverdige kantineløsninger til bedrifter helt ned i 15 personer.",
      to: "/tjenester/kantine/kantine-pa-jobben-uten-kjokken",
      image: utenKjokkenImg,
    },
    {
      label: "Verter og vertinner",
      description: "Våre utmerkede verter og vertinner sørger for at dere bare kan komme og nyte maten.",
      to: "/tjenester/kantine/verter-og-vertinner",
      image: cms("a29ba39192bb1cdb321cad644af15f53"),
    },
    {
      label: "Kombiner kantine og renhold",
      description: "Ved å samle dine tjenester hos en leverandør vil du forenkle din arbeidshverdag. Færre leverandører bidrar til store besparelser.",
      to: "/tjenester/kantine/kombiner-kantine-og-renhold",
      image: cms("37b164159bb2d27e7dd7c3be6e7d98de"),
    },
    {
      label: "Lunsj",
      description: "Lønnsomme og velsmakende lunsjordninger for 5 personer og oppover.",
      to: "/tjenester/lunsj",
      image: lunsjCardImg,
    },
  ],
  subServices: [
    {
      slug: "om-vare-kantiner",
      title: "Om våre kantiner",
      description:
        "Vi kommer med maten - dere nyter. Gjennom mange års erfaring med fornøyde kunder er tjenesten spesialtilpasset bedrifter mellom 20 og 300 ansatte.",
      image: cms("1e7046a1804a25a379a1d086b08d75ee"),
      content: [
        {
          type: "text",
          paragraphs: [
            "Våre varierte menyer gir dere en buffet som er både smaksrik og sunn for kroppen, samt presentert på en måte som er en fryd for øyet! Vi tilbyr et modulbasert kantinetilbud der dere selv kan påvirke sammensetningen.",
            "Her kan man enten ha kun deler av modulene, «alt» hver dag eller en kombinasjon med for eksempel noen moduler fast og la andre rullere utover uken. Her er det med andre ord alle muligheter for enhver smak.",
            "Vi leverer daglig, noe som gir store fordeler i forhold til ferskhet, kvalitet og fleksibilitet. Det gir lettere tilpasning til variasjoner i antall brukere og gjester, og fjerner svinnproblematikk.",
            "Vi presenterer helst maten på fat i en buffetløsning. Dette hindrer unødvendig svinn, sparer tidsbruk og dermed også kostnader, samt ikke minst er det den gunstigste løsningen for miljøet, sammenlignet med å servere maten i kuvertbegre.",
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
      ],
    },
    {
      slug: "verter-og-vertinner",
      title: "Verter og vertinner",
      description:
        "I våre mer enn 100 betjente kantiner sørger våre dyktige, blide og serviceinnstilte verter og vertinner for å skape en god lunsjopplevelse i en travel hverdag for våre kunders ansatte.",
      image: cms("a29ba39192bb1cdb321cad644af15f53"),
      content: [
        {
          type: "text",
          paragraphs: [
            "Vi vet at våre kunder er opptatt av både atmosfære og smak, så vårt fokus er å skape en hyggelig ramme rundt lunsjavviklingen i tillegg til høy kvalitet på maten vi serverer.",
            "Våre utmerkede verter og vertinner sørger for at dere bare kan komme og nyte maten. Vi tar oss av alt av gjøremål som: av- og pådekking, tilbereding av all maten i buffeten, oppvask, holde kjøkken og kantineområdet rent og ryddig etc. Vi kan også påta oss annet forefallende kontorarbeid og/eller vask av deres lokaler.",
          ],
        },
        {
          type: "image",
          src: kantine2019Img,
          alt: "Verter og vertinner fra Helt Opplagt",
        },
      ],
    },
    {
      slug: "kombiner-kantine-og-renhold",
      title: "Kombiner kantine og renhold",
      description:
        "Ved å samle dine tjenester hos en leverandør vil du forenkle din arbeidshverdag. Færre leverandører bidrar til store besparelser. Du har større oversikt og det krever mindre ressurser.",
      image: cms("37b164159bb2d27e7dd7c3be6e7d98de"),
      content: [
        {
          type: "text",
          paragraphs: [
            "Vi kan tilby deg ett kontaktpunkt og fast oppfølgning ved behov. Vi ønsker alle en hverdag hvor vi kan fokusere på vår kjernevirksomhet. Ved å velge en eller flere tjenester fra Helt Opplagt vil vi legge til rette slik at dere kan rendyrke det dere er gode på.",
            "Vi tilbyr alle våre kunder en prøveperiode hvor vi skal bevise hva vi duger til. Og med over 30 års bransjeerfaring kan vi skryte av å ha ekstremt få tilfeller av frafall etter denne prøveperioden. Skulle du ønske å besøke en av våre referansekunder for å se tjenesten i praksis er du velkommen til dette.",
            "Mindre selskaper kan i tillegg dra nytte av samme person på både renhold og kantine. På denne måten får vi effektivisert tidsbruken til deres vert/vertinne som igjen gjør at dere sparer penger.",
            "Du har kanskje prøvd mange leverandører tidligere som ikke leverer over tid? Tett dialog, oppfølgning og ris/ros fra dere vil holde oss på tå hev slik at vi hele tiden kan levere den tjenesten og kvaliteten dere betaler for.",

          ],
        },
      ],
    },
    {
      slug: "kantine-pa-jobben-uten-kjokken",
      title: "Kantine på jobben – uten kjøkken?",
      description:
        "Når mange tenker på kantine, ser de for seg storkjøkken, industrioppvaskmaskiner og kokker i fullt firsprang. Men hva med de små bedriftene? Hva med kontorfellesskapet på 15–30 personer, uten eget kjøkken, men med like stort behov for sunn, fristende og praktisk lunsj?",
      image: utenKjokkenImg,
      content: [
        {
          type: "image",
          src: utenKjokkenImg,
          alt: "Kantine på jobben uten kjøkken",
        },
        {
          type: "text",
          paragraphs: [
            "Hos Helt Opplagt leverer vi fullverdige kantineløsninger til bedrifter helt ned i 15 personer – uten at dere trenger store kjøkkenfasiliteter.",
          ],
        },

        {
          type: "text",
          heading: "Ingen kjøkken? Ikke noe problem!",
          paragraphs: [
            "Mange små og mellomstore bedrifter dropper kantine fordi de mangler fasilitetene. Med oss trenger du ikke et stort kjøkken, men kommer langt med en komfyr, kjøleskap og oppvaskmaskin. Alt kommer klart til bruk, og våre kantineverter tar seg av oppdekking, rydding og etterarbeid – med et smil.",
          ],
        },
        {
          type: "bullets",
          heading: "Hvorfor velge Helt Opplagt?",
          items: [
            "Tilpasset alle størrelser: Vi dekker bedrifter fra 15 til 300 ansatte – og tar de små like seriøst som de store.",
            "Fersk mat, levert daglig: Våre menyer er varierte, sunne og laget fra bunnen av på vårt eget kjøkken.",
            "Reduserer matsvinn: Daglig levering gjør at vi treffer bedre på behovet – og unngår unødig svinn.",
            "Miljø og ansvar: Vi kildesorterer alt avfall, benytter resirkulert emballasje, leverer maten i El-biler og gir overskuddsmat til veldedige formål.",
            "Personlig service: Du får fast kontaktperson, raske svar og en dedikert vert som kjenner din bedrift.",
            "Kantine kombinert med renhold: Ved å samle dine tjenester hos en leverandør vil du forenkle din arbeidshverdag. Færre leverandører bidrar til store besparelser.",
          ],
        },

      ],
    },
  ],
  quote: {
    text: "Helt Opplagt leverer god, variert og sunn mat – fersk og frisk. De gir oss det lille ekstra for at vi skal få et hyggelig avbrekk og en bra matopplevelse – hver dag! Helt Opplagt er fleksible, imøtekommende med høy servicegrad – vi er superfornøyd!",
    name: "Wenche Revhaug",
    role: "Kronos Titan",
  },
};

export function KantinePage() {
  return <ServicePage data={kantineData} />;
}
