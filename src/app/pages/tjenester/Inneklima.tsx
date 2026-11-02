import {
  ContentBlock,
  ServicePage,
  ServicePageData,
} from "../../components/ServicePage";
import heroImg from "../../../images/inneklima/inneklima.png";
import openingImg from "../../../images/hero/hero-inneklima-dno.jpg";
import explainerImg from "../../../images/inneklima/dno-moterom.jpg";
import luftrensereImg from "../../../images/inneklima/luftrensere.jpg";
import graceImg from "../../../images/inneklima/grace.jpg";
import varmepumpeImg from "../../../images/inneklima/varmepumpe.jpg";
import safelungsImg from "../../../images/inneklima/safelungs.jpg";
import kontorImg from "../../../images/inneklima/dno-kontorlandskap.jpg";
import industriImg from "../../../images/inneklima/njord-lager.jpg";
import industri2Img from "../../../images/inneklima/njord-lager-2.jpg";
import matproduksjonImg from "../../../images/inneklima/rystad-07.jpg";
import helsesektorImg from "../../../images/inneklima/oris-klinikk.jpg";
/* Njord Clean Air product photos (downloaded from njordcleanair.com). */
import njordXpF from "../../../images/inneklima/njord/xp-f.jpg";
import njordXp2 from "../../../images/inneklima/njord/xp-2.jpg";
import njordXp4 from "../../../images/inneklima/njord/xp-4.jpg";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

/* Shared Njord XP blocks, reused by the three Njord product pages. Facts from njordcleanair.com/no. */
const njordPlattform: ContentBlock = {
  type: "text",
  heading: "Njord-plattformen",
  paragraphs: [
    "Alle Njords luftrensere bruker totrinnsfiltrering: et forfilter fanger opp større støvpartikler, mens hovedfilteret fjerner de minste og mest helseskadelige forurensningene (PM10, PM2,5 og PM1). Filtre leveres opp til filterklasse H14, og alle er sertifisert i henhold til ISO 16890 eller EN 1822.",
    "Njord Connect™ Core for trådløs styring og planlegging via Wi-Fi eller Bluetooth er standard. Konstantstrømsstyringen Njord Constant Flow™ justerer viftehastigheten automatisk, slik at renseeffekten opprettholdes uavhengig av filterbelastning. Filterbytte er vanligvis hver 3., 6. eller 9. måned avhengig av støvbelastning – enheten varsler automatisk om et filter må byttes tidligere.",
    "Enhetene er helt frittstående, uten tilkobling til ventilasjonsanlegget, og kobles i en vanlig stikkontakt (230 V). De er bygget i resirkulert aluminium, oppfyller generelle krav til takmontering under sprinkleranlegg – og filtrene er håndlaget i Sverige med miljøvennlig filtermateriale fra Norge.",
  ],
};

const njordTilvalg: ContentBlock = {
  type: "bullets",
  heading: "Tilvalg",
  items: [
    "Njord UV-C – eliminerer opptil 99,999 % av skadelige mikroorganismer, virus og bakterier.",
    "Njord Ionisering – effektiv fjerning av lukt.",
    "Njord Safe-Zone™ – definerte renluftssoner der smitterisikoen reduseres med opptil 90 %.",
    "Lyddemper – reduserer utblåsningsstøyen med 10–15 dBA.",
    "Njord Connect™ ECO+ – luftkvalitetsmåling i sanntid og automatisk drift basert på partikkelnivå.",
    "Oppgradering til molekylær-/gassfiltrering i henhold til Eurovent 4/203-218.9.",
  ],
};

export const inneklimaData: ServicePageData = {
  path: "/tjenester/inneklima",
  badge: "Arbeidsmiljø",
  layout: "light",
  title: (
    <>
      Inneklima
    </>
  ),
  subtitle: "Luftrenser og varmepumpe for kontor, lager og næringsbygg",
  intro:
    "Inneklimaet i norske virksomheter har hvert år skyld i mye sykdom blant ansatte. Vår lange erfaring og dokumenterte løsninger hjelper deg å ta de rette valgene. Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
  image: heroImg,
  imageAlt: "Inneklima fra Helt Opplagt",
  heroImage: openingImg,
  brochureUrl:
    "https://heltopplagt.no/application/files/7716/8682/5172/Helt_Opplagt_Inneklima_2023.pdf",
  heroPoints: [
    { label: "Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer." },
    { label: "Bli kvitt hodepine, tretthet og andre symptomer av dårlig luft." },
    { label: "Forbedre helsen og velværet til dine ansatte" },
  ],
  explainer: {
    heading: "Hva tilbyr vi?",
    body: [
      "Vi løser alle utfordringer med dårlig luft på arbeidsplassen. Vi tar en befaring på ditt kontor og miljø og leverer løsninger som ikke krever noen byggtekniske endringer. Enkelt, effektivt og billig!",
      "Det er en kjent sak at det er lønnsomt å satse på et godt inneklima, både av hensyn til de ansattes trivsel og helse, samt hensynet til bedriftens totale lønnsomhet. I et kontorlokale med lite svevestøv vil de ansatte umiddelbart føle større velvære og ha mer energi.",
      "Helt Opplagt har løsninger som både kan løse og forebygge dårlig inneklima på jobben. Vi leverer ren luft og behagelig temperatur til dine lokaler. Vårt mål er at du skal være Helt Opplagt på jobben!",
    ],

    image: explainerImg,
    imageAlt: "Møterom med luftrenser fra Helt Opplagt",
  },
  catalogs: [
    {
      heading: "Luftrenser for kontor og møterom",
      proof:
        "Vondt i hodet? Tung luft på kontoret? Se hvilke produkter som passer for din arbeidsplass.",
      layout: "band",
      photo: true,
      items: [
        {
          name: "VisionAir Blue Line",
          tag: "Tak, vegg eller gulv",
          description:
            "VisionAir er perfekt for lokaler opptil ca 80 m2. Den kommer i to størrelser og kan plasseres i tak, vegg og/eller gulv. Perfekt for kopirom, kontorlandskap og fellesområder.",
          image: `${thumbs}/583c513de688c3e5727153b9ff5ad0e2.jpg`,
          to: "/tjenester/inneklima/visionair",
        },
        {
          name: "Grace",
          tag: "Gulvmodell",
          description:
            "Grace er gulvmodellen som fjerner opptil 99 % av den forurensede luften, den er perfekt for bruk i mindre rom opptil 25 m2. Som for eksempel cellekontorer, møterom og kopirom.",
          image: graceImg,
          to: "/tjenester/inneklima/grace",
        },
      ],
      link: { label: "Se alle produktene", to: "/tjenester/inneklima/luftrensere" },
    },
    {
      heading: "Industrielle luftrensere for lager, verksted og storkjøkken",
      proof:
        "Det er vanskelig å få god luftkvalitet når du kombinerer store arealer, stor varebeholdning og mange ansatte under et og samme tak. Vi har løsningene og produktene som løser alle utfordringer.",
      layout: "band",
      photo: true,
      items: [
        {
          name: "Njord XP-F",
          tag: "Lav takhøyde",
          description:
            "«F for Flat» – ekstremt flatt design for lokaler med lav takhøyde, med doble luftutblås som styrer den rene luften dit du vil.",
          image: njordXpF,
          to: "/tjenester/inneklima/njord-xp-f",
        },
        {
          name: "Njord XP-2",
          tag: "RISE-testet ytelse",
          description:
            "Høytytende og energieffektiv luftrenser for store lager-, industri- og produksjonshaller. To luftinntak, opptil 4100 m³/h og RISE-verifisert renluftkapasitet (CADR) på opptil 3800 m³/h – og den veier kun 42 kg.",
          image: njordXp2,
          to: "/tjenester/inneklima/njord-xp-2",
        },
        {
          name: "Njord XP-4",
          tag: "360° luftinntak",
          description:
            "Høykapasitetsaggregatet for de største hallene: fire luftinntak tar inn luft fra alle sider (360°), opptil 6500 m³/h maksimal luftstrøm – i en enhet på bare 50 kg.",
          image: njordXp4,
          to: "/tjenester/inneklima/njord-xp-4",
        },
        {
          name: "Euromate HFE-serien",
          description:
            "Tilgjengelig i flere modeller avhengig av luftvolum og forurensningstype. Filtrerer selv de minste partikler og eventuelle gasser og lukter. Elektrofiltrene er enkle å rense og gjenbruke - ikke kast etter bruk!",
          image: `${thumbs}/668745cf1fc2f86ff706874e3bf7a44d.jpg`,
          to: "/tjenester/inneklima/hfe-serien",
        },
        {
          name: "Kitchen Air Filtration (KAF)",
          tag: "Inn i eksisterende ventilasjon",
          description:
            "KAF-filtreringssystemet installeres direkte inn i eksisterende ventilasjonssystem og passer utmerket for kantiner, kommersielt kjøkken, fast food-restauranter og tradisjonelle restauranter.",
          image: `${thumbs}/6c93d124acf8f09f9a662bf63f60bff3.jpg`,
          to: "/tjenester/inneklima/kaf",
        },
      ],
    },
    {
      heading: "Mål luftkvaliteten med sensorer fra SafeLungs",
      proof:
        "Vi leier ut sensorer fra SafeLungs, og dere får tilgang til et dashbord der dere følger inneklimaet hver dag.",
      layout: "feature",
      items: [
        {
          name: "Sensorer og dashbord fra SafeLungs",
          description:
            "Sensorene måler CO₂, temperatur, luftfuktighet, svevestøv (PM2,5), VOC og NOx kontinuerlig. I dashbordet ser dere luftkvaliteten rom for rom i sanntid, utviklingen over tid og månedlige rapporter. Anbefalingene bygger på råd fra Folkehelseinstituttet og Arbeidstilsynet.",
          image: safelungsImg,
        },
      ],
      link: { label: "Les mer hos SafeLungs", to: "https://safelungs.no/" },
    },
    {
      heading: "Varmepumpe og kjøling",
      proof:
        "Vi har i over 30 år levert varmepumper og kjøleutstyr slik at du opplever riktig temperatur på arbeidsplassen hele året. Vi har lang erfaring med å levere varmepumper og kjøling i kontorlokaler, data/serverrom, restauranter, butikker etc.",
      layout: "feature",
      items: [
        {
          name: "Varmepumpe og kjøling",
          description:
            "Vi har løsninger og produkter som gir deg rett temperatur, sommer som vinter. Vi har montert og utført service på denne type utstyr siden 1985, og våre montører er NOVAP/F-gass sertifisert.",
          image: varmepumpeImg,
        },
      ],
      link: { label: "Les mer om optimal temperatur", to: "/tjenester/inneklima/temperatur" },
    },
  ],
  hideSubServiceCards: true,
  faq: [
    {
      question: "Hjelper en luftrenser mot pollen og allergi på kontoret?",
      answer:
        "Visste du at en av fire på kontoret sliter med allergier som gir plager og nedsatt effektivitet? Nå er det sesong for pollen og mange arbeidstagere plages. Helt Opplagt har løsninger som både kan løse og forebygge dårlig inneklima på jobben.",
    },
    {
      question: "Hva gjør vi med tørr eller dårlig luft på kontoret?",
      answer:
        "Vi tar en befaring på ditt kontor og miljø og leverer løsninger som ikke krever noen byggtekniske endringer. I et kontorlokale med lite svevestøv vil de ansatte umiddelbart føle større velvære og ha mer energi.",
    },
    {
      question: "Kan dere måle luftkvaliteten?",
      answer:
        "Vi tilbyr målinger med fokus på partikkeltetthet, CO2, relativ fuktighet og temperatur. Ved hjelp av en avansert laserpartikkelteller kan vi konstatere partikkeltetthet og størrelsen på partiklene som måtte være i luften. Når målingene er foretatt lager vi en rapport hvor det står beskrevet hvordan tilstanden er rent inneklimamessig, og hvilke forbedringer som bør gjøres.",
    },
    {
      question: "Krever installasjonen byggtekniske endringer?",
      answer:
        "Vi tilpasser løsningen etter deres behov og lokaler, uten at dere trenger å gjøre noen byggtekniske endringer.",
    },
    {
      question: "Er dere sertifisert for varmepumper?",
      answer:
        "Vi er godkjent av Norsk Varmepumpeforening (NOVAP). Det betyr at vi har faglig kvalifisert personell og lovpålagte sertifiseringer. Vi har montert og utført service på denne type utstyr siden 1985, og våre montører er NOVAP/F-gass sertifisert.",
    },
    {
      question: "Hva koster en befaring eller luftmåling?",
      answer:
        "Ta kontakt med oss for et uforpliktende møte med en av våre erfarne konsulenter som vil gi deg et tilbud tilpasset dine behov og ønsker. Prisen for disse målinger er naturligvis avhengig av størrelsen på oppdraget.",
    },
  ],
  readMore: [
    {
      label: "Luftmålinger",
      description: "Vi tilbyr å måle luftkvaliteten og analyserer resultatene.",
      to: "/tjenester/inneklima/luftmalinger",
      image: safelungsImg,
    },
    {
      label: "Luftrenser for kontor",
      description: "Vi løser alle utfordringer med dårlig luft på arbeidsplassen.",
      to: "/tjenester/inneklima/kontor",
      image: kontorImg,
    },
    {
      label: "Få kontroll over luftkvaliteten i industribygg",
      description: "Vi har løsningene og produktene som løser alle utfordringer.",
      to: "/tjenester/inneklima/luftkvalitet-i-industribygg",
      image: industriImg,
    },
    {
      label: "Matproduksjon og HoReCa",
      description: "I nesten alle profesjonelle kjøkken vil det være mye fett og sotpartikler som blir frigitt.",
      to: "/tjenester/inneklima/matproduksjon-og-horeca",
      image: matproduksjonImg,
    },
    {
      label: "Helsesektor, institusjoner og barnehager",
      description: "Helt Opplagt hjelper deg å skape et bedre inneklima som gir dine medarbeidere mer energi.",
      to: "/tjenester/inneklima/helsesektor-institusjoner-og-barnehager",
      image: helsesektorImg,
    },
    {
      label: "Optimal temperatur",
      description: "Vi har i over 30 år levert varmepumper og kjøleutstyr slik at du opplever riktig temperatur på arbeidsplassen hele året.",
      to: "/tjenester/inneklima/temperatur",
      image: varmepumpeImg,
    },
    {
      label: "Sesong for såre øyne og luftveisplager",
      description: "Visste du at en av fire på kontoret sliter med allergier som gir plager og nedsatt effektivitet?",
      to: "/tjenester/inneklima/sesong-sare-oyne-og-luftveisplager",
      image: `${thumbs}/6a989ffd1db602cbc63770c77ea10689.jpg`,
    },
  ],
  subServices: [
    {
      slug: "kontor",
      group: "Artikler",
      title: "Kontor",
      description:
        "Vi løser alle utfordringer med dårlig luft på arbeidsplassen. Vi tar en befaring på ditt kontor og miljø og leverer løsninger som ikke krever noen byggtekniske endringer. Enkelt, effektivt og billig!",
      image: kontorImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Forskning viser et skremmende bilde og burde få enhver næringslivsleder til å ta problemet alvorlig. Det er en kjent sak at det er lønnsomt å satse på et godt inneklima, både av hensyn til de ansattes trivsel og helse, samt hensynet til bedriftens totale lønnsomhet.",
            "En gjennomsnittlig medarbeider vil miste 10 % av sin yteevne ved et dårlig inneklima. I et kontorlokale med lite svevestøv vil de ansatte umiddelbart føle større velvære og ha mer energi.",
            "Helt Opplagt har løsninger som både kan løse og forebygge dårlig inneklima på jobben. Vi leverer ren luft og behagelig temperatur til dine lokaler. Vårt mål er at du skal være Helt Opplagt på jobben!",
            "Det finnes mange kilder og symptomer som kan bidra til dårlig inneklima. Her kommer en liten oversikt som skal gjøre det lettere for deg å identifisere de:",
          ],
        },
        {
          type: "bullets",
          heading: "Vanlige problemer:",
          items: [
            "Hodepine",
            "Følelse av tørr luft",
            "Såre øyne",
            "Problemer med kontaktlinser",
            "Tretthet utover dagen",
            "Tørr hud",
            "Halsinfeksjoner",
            "Tørre slimhinner",
            "Driftsproblemer på maskiner",
            "Nedsmussing av lokaler",
          ],
        },
        {
          type: "bullets",
          heading: "Kjente kilder:",
          items: [
            "Svevestøv fra egen aktivitet",
            "Svevestøv fra papir og tonere",
            "Kopimaskiner, printere, faxer",
            "Arkiv, post og pakkerom",
            "Tekstilstøv og bygningsmaterialer",
            "Støv utenfra, som eksos, veistøv og pollen",
            "Ventilasjonsforurensing",
            "Statisk elektrisitet",
            "Varme",
          ],
        },
        {
          type: "image",
          src: "https://heltopplagt.no/application/files/5215/6646/4847/Euromate_Call_center_HVC_Middenmeer_2.JPG",
          alt: "Vi løser utfordringer med inneklima i alle slags lokaler",
        },
      ],
    },
    {
      slug: "temperatur",
      group: "Artikler",
      title: "Optimal temperatur",
      description:
        "Vi har i over 30 år levert varmepumper og kjøleutstyr slik at du opplever riktig temperatur på arbeidsplassen hele året.",
      image: varmepumpeImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Norge er et land med store temperatursvingninger og været er vanskelig å forutse. Vi har løsninger og produkter som gir deg rett temperatur, sommer som vinter. Vi har lang erfaring med å levere varmepumper og kjøling i kontorlokaler, data/serverrom, restauranter, butikker etc.",
          ],
        },
        {
          type: "text",
          heading: "Vi hjelper deg med løsningen",
          paragraphs: [
            "Ta kontakt med oss for et uforpliktende møte med en av våre erfarne konsulenter som vil gi deg et tilbud tilpasset dine behov og ønsker.",
            "Vi er godkjent av Norsk Varmepumpeforening (NOVAP). Det betyr at vi har faglig kvalifisert personell og lovpålagte sertifiseringer. Vi har også kapasitet til å gjennomføre oppdrag på en forsvarlig måte, og vi sørger for at du som kunde får nødvendig dokumentasjon og opplæring.",
          ],
        },
      ],
    },
    {
      slug: "helsesektor-institusjoner-og-barnehager",
      group: "Artikler",
      title: "Helsesektor, institusjoner og barnehager",
      description:
        "Mange har utfordringer med uønsket lukt på arbeidsplassen. Helt Opplagt hjelper deg å skape et bedre inneklima som gir dine medarbeidere mer energi.",
      image: helsesektorImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Innendørs luft er ofte forurenset av lukt og gasser. VOC, flyktige organiske forbindelser, er stoffer som frigjøres fra forskjellige produkter i gassform og kan avgi sjenerende lukt. Maling, rengjøringsmidler, kopimaskiner, plastprodukter, møbler, byggevarer og gulv- og veggbelegg samt lukt i spesielle rom innen helsevesenet og barnehager er bare noen eksempler som genererer store mengder VOC.",
            "Mange opplever andre typer uønsket lukt som ammoniakklukt, urinlukt, kloakklukt, avføring eller annen uønsket lukt. Også behagelige lukter som lukt fra matlaging og matos kan være uønsket og våre løsninger sørger også for å fjerne dette.",
          ],
        },
        {
          type: "text",
          heading: "Vi finner løsningen for deg",
          paragraphs: [
            "Vi tilbyr bl.a. montering av VisionAir. VisionAir er designet for å passe inn i ethvert interiør, uten behov for byggtekniske endringer. Den er perfekt for å takle luftproblematikk som du finner i sykehjem, sykehus, dialysesentre, barnehager og toaletter. Skulle dere også oppleve ubehagelig ozonlukt i kopi- og printerrom eller luktspredning i forbindelse med matlaging er den utmerket til dette også.",
            "VisionAir kan kombineres med elektrostatiske filtre dersom det også er et støvproblem i tillegg til lukt. Luftrenseren kan også utstyres med UV (SterilAir).",
          ],
        },
        {
          type: "text",
          heading: "Ta kontakt for gratis befaring",
          paragraphs: [
            "Fyll ut skjema nederst på siden eller ring oss på 0 23 46 eller e-post bli@heltopplagt.no.",
          ],
        },
      ],
    },
    {
      slug: "matproduksjon-og-horeca",
      group: "Artikler",
      title: "Matproduksjon og HoReCa",
      description:
        "I nesten alle profesjonelle kjøkken vil det være mye fett og sotpartikler som blir frigitt. Brannfaren øker med mer fett som legger seg i avtrekk og ventilatorer.",
      image: matproduksjonImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "I nesten alle profesjonelle kjøkken vil det være mye fett og sotpartikler som blir frigitt. Brannfaren øker med mer fett som legger seg i avtrekk og ventilatorer. Euromate sitt filtersystem fjerner selv de minste fett- og røykpartikler fra luften. På den måten vil du få betydelig mindre vedlikehold i avtrekk og ventilator.",
          ],
        },
        {
          type: "text",
          heading: "Hvordan kvitte seg med kjøkkengassene?",
          paragraphs: [
            "Kommersielle og profesjonelle kjøkken blir i dag mer og mer omfattende. Mange kjøkken ligger også tett inntil både boligbebyggelse og annen kommersiell virksomhet, dette gjør kravene til gass, lukt og brannsikkerhet større.",
            "God filtrering i avtrekk hjelper deg å minimere potensielle risikoer som brann, omdømme og ikke minst kostnaden med opprydning hvis en ulykke skulle forekomme.",
          ],
        },
        {
          type: "bullets",
          items: [
            "Filtrerer bort 90 % av sot og røykpartikler fra luftstrømmen.",
            "Spar opptil 50 % på vedlikeholdskostnader.",
            "Hjelper deg å være en god nabo ved å spare omgivelsene fra matos og lukt.",
          ],
        },
      ],
    },
    {
      slug: "luftkvalitet-i-industribygg",
      group: "Artikler",
      title: "Få kontroll over luftkvaliteten i industribygg",
      description:
        "Det er vanskelig å få god luftkvalitet når du kombinerer store arealer, stor varebeholdning og mange ansatte under et og samme tak. Vi har løsningene og produktene som løser alle utfordringer.",
      image: industriImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Støvet pustes inn av de ansatte og skaper helseproblemer samt legger seg på utstyr og forårsaker driftsproblemer for maskiner. Støvet legger seg på kameraer, optiske sensorer og datautstyr som forårsaker økt behov for vedlikehold og renhold. Dette utgjør en vesentlig kostnad. I bakerier, kaffeproduksjon og annen matproduksjon er ofte mikropartikler, gasser, lukter og bakterier et viktig tema, dette er utfordringer våre produkter og løsninger også kan ta seg av.",
            "Vi har i over 30 år benyttet Euromates industrielle luftrensere til å håndtere denne type problemer. Utstyret er meget godt egnet til oppgaven. I tillegg til å gi langt renere inneluft, har utstyret flere andre positive effekter, som utjevning av temperaturforskjell mellom tak og gulv, samt vesentlig reduksjon av behov av ventilasjon. Å rense luft tilstrekkelig i slike områder ved hjelp av ventilasjon er meget kostbart både installasjons- og energimessig.",
            "Å benytte oss til denne jobben er derfor meget lønnsomt. Det forsterkes også av at filtrene ofte kan vaskes og ikke kastes, noe som gir ytterligere miljø- og økonomisk gevinst.",
          ],
        },
        {
          type: "bullets",
          heading: "Fordeler",
          items: [
            "Reduksjon av støvpartikler gir betydelig helsegevinst for de ansatte (puster inn mindre mikropartikler og får mindre luftveisproblemer, «svarte neser» etc)",
            "Stor reduksjon i vaske- og vedlikeholdskostnader",
            "Mindre lukt og bakterier",
            "Færre driftsproblemer",
            "Energibesparende",
            "Jevner ut temperaturforskjeller, og renser luft uten varmetap eller varmetilførsel",
            "Vaskbare filtre gir innsparinger både for miljøet og økonomien",
          ],
        },
      ],
    },
    {
      slug: "luftmalinger",
      group: "Artikler",
      title: "Luftmålinger",
      description:
        "Hvis et firma opplever at inneluften ikke er som den bør være, kan det være hensiktsmessig å måle luftkvaliteten. Vi tilbyr målinger med fokus på partikkeltetthet, CO2, relativ fuktighet og temperatur.",
      image: safelungsImg,
      content: [
        {
          type: "text",
          heading: "Problemer med inneklima?",
          paragraphs: [
            "Vi har mulighet for å måle de luftbårne partikler og respirabelt svevestøv som finnes alle steder. Ved hjelp av en avansert laserpartikkelteller kan vi konstatere partikkeltetthet og størrelsen på partiklene som måtte være i luften. Hvis oppgaven krever at man også bør konstatere typen av partikler, kan det naturligvis også la seg gjøre ved hjelp av en laboratorietest.",
          ],
        },
        {
          type: "text",
          heading: "Mål luftkvaliteten med sensorer fra SafeLungs",
          paragraphs: [
            "Vi leier ut sensorer fra SafeLungs, og dere får tilgang til et dashbord der dere følger inneklimaet hver dag.",
            "Sensorene måler CO₂, temperatur, luftfuktighet, svevestøv (PM2,5), VOC og NOx kontinuerlig. I dashbordet ser dere luftkvaliteten rom for rom i sanntid, utviklingen over tid og månedlige rapporter. Anbefalingene bygger på råd fra Folkehelseinstituttet og Arbeidstilsynet.",
          ],
        },
        {
          type: "link",
          label: "Les mer hos SafeLungs",
          href: "https://safelungs.no/",
        },
        {
          type: "text",
          heading: "Få et uforpliktende tilbud",
          paragraphs: [
            "Når målingene er foretatt lager vi en rapport hvor det står beskrevet hvordan tilstanden er rent inneklimamessig, og hvilke forbedringer som bør gjøres. Prisen for disse målinger er naturligvis avhengig av størrelsen på oppdraget.",
            "Ring oss på 0 23 46 eller bruk skjema under og gjør en avtale med en av våre inneklimarådgivere, så får dere råd og veiledning og et uforpliktende pristilbud.",
          ],
        },
      ],
    },
    {
      slug: "luftrensere",
      group: "Produkter",
      title: "Produktene",
      description:
        "Helt Opplagt sine produkter kan både løse og forebygge alle deres problemer med dårlig inneluft på jobben. Se hvilke produkter som passer for ditt miljø.",
      image: luftrensereImg,
      content: [
        {
          type: "cards",
          heading: "Våre produkter",
          items: [
            {
              title: "Njord XP-F",
              description:
                "«F for Flat» – den flate luftrenseren for lokaler med lav takhøyde. Doble luftutblås styrer den rene luften effektivt i ulike retninger.",
              image: njordXpF,
            },
            {
              title: "Njord XP-2",
              description:
                "For store haller: to luftinntak, opptil 4100 m³/h og RISE-verifisert CADR på opptil 3800 m³/h – i en enhet på kun 42 kg.",
              image: njordXp2,
            },
            {
              title: "Njord XP-4",
              description:
                "Maksimal kapasitet for ren luft: fire luftinntak (360°) og opptil 6500 m³/h for de aller største lager- og industrihallene.",
              image: njordXp4,
            },
            {
              title: "VisionAir Blue Line",
              description:
                "VisionAir er perfekt for lokaler opptil ca 80 m2. Den kommer i to størrelser og kan plasseres i tak, vegg og/eller gulv. Vi tilpasser løsningen etter deres behov og lokaler, uten at dere trenger å gjøre noen byggtekniske endringer. Luftrenseren kan også utstyres med UV (SterilAir).",
              image: `${thumbs}/583c513de688c3e5727153b9ff5ad0e2.jpg`,
            },
            {
              title: "Grace",
              description:
                "Grace er gulvmodellen som fjerner opptil 99 % av den forurensede luften, den er perfekt for bruk i mindre rom opptil 25 m2. Som for eksempel cellekontorer, møterom og kopirom.",
              image: graceImg,
            },
            {
              title: "Kitchen Air Filtration (KAF)",
              description:
                "KAF-filtreringssystemet installeres direkte inn i eksisterende ventilasjonssystem og passer utmerket for kantiner, kommersielle kjøkken, fast food-restauranter og tradisjonelle restauranter. Kan tilpasses ulike kapasitetsmengder for et skreddersydd system.",
              image: `${thumbs}/6c93d124acf8f09f9a662bf63f60bff3.jpg`,
            },
            {
              title: "Euromate HFE-serien",
              description:
                "Tilgjengelig i flere modeller avhengig av luftvolum og forurensningstype. Filtrerer selv de minste partikler og eventuelle gasser og lukter. Elektrofiltrene er enkle å rense og gjenbruke - ikke kast etter bruk!",
              image: `${thumbs}/668745cf1fc2f86ff706874e3bf7a44d.jpg`,
            },
          ],
        },
      ],
    },
    {
      slug: "sesong-sare-oyne-og-luftveisplager",
      group: "Artikler",
      title: "Sesong for såre øyne og luftveisplager",
      description:
        "Visste du at en av fire på kontoret sliter med allergier som gir plager og nedsatt effektivitet? Nå er det sesong for pollen og mange arbeidstagere plages.",
      image: `${thumbs}/6a989ffd1db602cbc63770c77ea10689.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Nå er det sesong for pollen og mange arbeidstagere plages. Med en luftrenser som skaper ren luft på kontoret sikrer du at ansatte med allergier får en bra arbeidsdag også i pollensesongen.",
            "Vi løser utfordringer med pollen og annet som bidrar til dårlig luft på arbeidsplassen. Vi tar en uforpliktende befaring på din arbeidsplass og leverer løsninger som ikke krever byggtekniske endringer. Enkelt, effektivt og billig!",
            "Registrer deg under så tar vi snarlig kontakt for avtale.",
          ],
        },
      ],
    },
    {
      slug: "njord-xp-f",
      group: "Produkter",
      title: "Njord XP-F",
      description:
        "F for Flat! Njord XP-F er en energieffektiv industriell luftrenser spesielt utviklet for effektivt å skape rene og sunne miljøer i lokaler med lav takhøyde.",
      image: njordXpF,
      content: [
        {
          type: "text",
          paragraphs: [
            "Enheten er designet for å oppta minimalt med plass, samtidig som den leverer maksimal renseeffekt og en konsekvent høy renluftstrøm. Bygget med de samme høykvalitetskomponentene som alle Njords industrielle luftrensere har XP-F et optimalisert, flatt design som gjør den både kompakt og usedvanlig lett.",
            "Luften tas inn gjennom ett luftinntak med totrinnsfiltrering, og med doble luftutblås kan den rene luften styres effektivt i ulike retninger. Det gjør XP-F godt egnet for kontoretasjer, kantiner, korridorer og garderober med lav takhøyde.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Luftstrøm ved optimal drift", "1800 m³/h"],
            ["Maksimal luftstrøm", "2200 m³/h"],
            ["Luftinntak", "1 (med doble luftutblås)"],
            ["Total inntaksflate", "0,30 m²"],
            ["Filter", "Totrinns, opptil H14 (ISO 16890 / EN 1822)"],
            ["Mål (B×D×H)", "1000 × 780 × 340 mm"],
            ["Vekt", "16 kg"],
            ["Elektrisk", "230 V, 50/60 Hz, 1,3 A, EC-motor"],
            ["Motoreffekt", "165 W"],
            ["Effektforbruk ved optimal drift", "ca. 120 W"],
            ["Lydnivå", "30–55 dB(A)"],
            ["Montering", "Tak, vegg eller gulv (evt. på hjul)"],
          ],
          footnote:
            "Optimal drift er luftrensingsvolumet som gir best balanse mellom effektivitet, energiforbruk og lydnivå. Effektforbruket avhenger av filterkonfigurasjonen.",
        },
        njordPlattform,
        njordTilvalg,
        {
          type: "link",
          label: "Se Njord XP-F hos produsenten",
          href: "https://njordcleanair.com/no/luftrenser-njord-xp-f/",
        },
      ],
    },
    {
      slug: "njord-xp-2",
      group: "Produkter",
      title: "Njord XP-2",
      description:
        "Høytytende og energieffektiv luftrenser for store lager-, industri- og produksjonshaller i kompakt og lett design, med totrinnsfiltrering for optimal luftrensing.",
      image: njordXp2,
      content: [
        {
          type: "text",
          paragraphs: [
            "De to luftinntakene suger inn og filtrerer luften fra to retninger. Doble sertifiserte og energieffektive filtre ved hvert luftinntak sikrer optimal rensing, der forfilteret fanger opp større støvpartikler, og hovedfilteret de minste og mest skadelige forurensningene. Filterkombinasjonen tilpasses driftsbehov og rensemål.",
            "Med konstantstrømsstyringen Njord Constant Flow™ justeres viftehastigheten automatisk for å sikre konstant luftstrøm og opprettholdt renseeffekt over tid. Dette garanterer samme mengde ren luft, uavhengig av filterbelastning.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Luftstrøm ved optimal drift", "3200 m³/h"],
            ["Maksimal luftstrøm", "4100 m³/h"],
            ["Luftinntak", "2 (fra to sider)"],
            ["Total inntaksflate", "0,80 m² (2 × 0,40 m²)"],
            ["Filter", "Totrinns, opptil H14 (ISO 16890 / EN 1822)"],
            ["Mål (B×D×H)", "950 × 800 × 540 mm"],
            ["Vekt", "42 kg"],
            ["Elektrisk", "230 V, 50/60 Hz, 4,5 A, EC-motor"],
            ["Motoreffekt", "1 kW"],
            ["Effektforbruk ved optimal drift", "ca. 280 W"],
            ["Lydnivå", "30–65 dB(A)"],
            ["Montering", "Tak, vegg eller gulv (evt. på hjul)"],
          ],
          footnote:
            "Optimal drift er luftrensingsvolumet som gir best balanse mellom effektivitet, energiforbruk og lydnivå. Effektforbruket avhenger av filterkonfigurasjonen.",
        },
        {
          type: "text",
          heading: "RISE-verifisert ytelse",
          paragraphs: [
            "Njord XP-2 er testet av RISE (Research Institutes of Sweden) i henhold til ISO 16890. Ved en målt luftstrøm på 4100 m³/h leverer systemet en renluftkapasitet (CADR) på opptil 3800 m³/h.",
          ],
        },
        {
          type: "table",
          rows: [
            ["CADR PM1", "ca. 3700–3800 m³/h (93 % partikkelfjerning)"],
            ["CADR PM2,5", "ca. 3800–3900 m³/h (95 % partikkelfjerning)"],
            ["CADR PM10", "ca. 4000 m³/h (99 % partikkelfjerning)"],
          ],
          footnote: "CADR (m³/h) = avskillingsgrad (%) × luftstrøm (m³/h).",
        },
        njordPlattform,
        njordTilvalg,
        {
          type: "link",
          label: "Se Njord XP-2 hos produsenten",
          href: "https://njordcleanair.com/no/luftrenser-njord-xp-2/",
        },
      ],
    },
    {
      slug: "njord-xp-4",
      group: "Produkter",
      title: "Njord XP-4",
      description:
        "Energieffektivt høykapasitetsaggregat for store lager-, industri- og produksjonshaller med fire luftinntak for optimal luftrensing.",
      image: njordXp4,
      content: [
        {
          type: "text",
          heading: "Maksimal kapasitet for ren luft",
          paragraphs: [
            "Utstyrt med fire luftinntak med totrinnsfiltrering tar enheten inn luft fra alle fire sider (360°) for maksimal renseeffektivitet. Hvert luftinntak har doble sertifiserte og energieffektive filtre som sikrer høy separasjonseffekt.",
            "Njord XP-4 passer for de aller største lokalene: lager, distribusjonsterminaler, logistikksentre, industrilokaler, verksteder og produksjonslokaler. Luftrenseren kan kompletteres (tilvalg) med en lyddempende enhet med fire luftutblås (360°) som effektivt fordeler den rene luften i lokalet.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Luftstrøm ved optimal drift", "5000 m³/h"],
            ["Maksimal luftstrøm", "6500 m³/h"],
            ["Luftinntak", "4 (360°)"],
            ["Total inntaksflate", "1,60 m² (4 × 0,40 m²)"],
            ["Filter", "Totrinns, opptil H14 (ISO 16890 / EN 1822)"],
            ["Mål (B×D×H)", "950 × 950 × 540 mm"],
            ["Vekt", "50 kg"],
            ["Elektrisk", "230 V, 50/60 Hz, 8,7 A, EC-motor"],
            ["Motoreffekt", "2 kW"],
            ["Effektforbruk ved optimal drift", "ca. 500 W"],
            ["Lydnivå", "30–65 dB(A)"],
            ["Montering", "Tak, vegg eller gulv (evt. på hjul)"],
          ],
          footnote:
            "Optimal drift er luftrensingsvolumet som gir best balanse mellom effektivitet, energiforbruk og lydnivå. Effektforbruket avhenger av filterkonfigurasjonen.",
        },
        njordPlattform,
        njordTilvalg,
        {
          type: "link",
          label: "Se Njord XP-4 hos produsenten",
          href: "https://njordcleanair.com/no/luftrenser-njord-xp-4/",
        },
      ],
    },
    {
      slug: "visionair",
      group: "Produkter",
      title: "VisionAir Blue Line",
      description:
        "VisionAir er perfekt for lokaler opptil ca 80 m2. Den kommer i to størrelser og kan plasseres i tak, vegg og/eller gulv. Vi tilpasser løsningen etter deres behov og lokaler, uten at dere trenger å gjøre noen byggtekniske endringer.",
      image: `${thumbs}/583c513de688c3e5727153b9ff5ad0e2.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "VisionAir Blue Line er Euromates resirkulerende luftrenser for kontorer, helsevirksomheter, barnehager og fellesarealer. Den kommer i to størrelser: VisionAir 1 og VisionAir 2. Vi dimensjonerer basert på dine behov.",
          ],
        },
        {
          type: "bullets",
          heading: "Filterpakker og tilvalg",
          items: [
            "DustFree – finstøv og svevestøv",
            "MicrobeFree – virus og bakterier",
            "SmokeFree – tobakksrøyk",
            "OdourFree – lukt, med stort V-formet kullfilter",
            "SterilAir – UV-C-lampe mot bakterier, virus og muggsopp",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Modell", "VisionAir 1", "VisionAir 2"],
            ["Luftstrøm", "180 m³/h", "360 m³/h"],
            ["Viftekapasitet", "1300 m³/h", "2600 m³/h"],
            ["Lydnivå", "40–62 dB(A)", "40–68 dB(A)"],
            ["Effektforbruk", "90 W", "175 W"],
            ["Mål (L×B×H)", "630 × 620 × 290 mm", "630 × 1050 × 290 mm"],
            ["Vekt", "16,5 kg", "32,5 kg"],
            ["Viftetrinn", "8 manuelle / 6 automatiske", "8 manuelle / 6 automatiske"],
            ["Sensorer", "PIR (gass/støv tilvalg)", "PIR (gass/støv tilvalg)"],
            ["Montering", "Tak, vegg, gulv eller display", "Kun tak"],
          ],
          footnote:
            "Ytelsestall gjelder filterpakken SmokeFree Global; øvrige filterpakker kan avvike noe. Filtrene er engangsfiltre som byttes ved service. CE-merket, med fem års garanti ved serviceavtale.",
        },
        {
          type: "link",
          label: "Se VisionAir hos Euromate",
          href: "https://www.euromate.com/group/products/air-cleaners/visionair/",
        },
      ],
    },
    {
      slug: "hfe-serien",
      group: "Produkter",
      title: "Euromate HFE-serien",
      description:
        "Tilgjengelig i flere modeller avhengig av luftvolum og forurensningstype. Filtrerer selv de minste partikler og eventuelle gasser og lukter. Elektrofiltrene er enkle å rense og gjenbruke - ikke kast etter bruk!",
      image: `${thumbs}/668745cf1fc2f86ff706874e3bf7a44d.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "HFE-serien er utviklet for luftbårne partikler som er typiske for lager, terminaler og logistikkbygg – som papir- og kartongstøv og gummipartikler fra transportbånd og truckhjul – og håndterer også sveiserøyk fra oljebehandlet stål, med integrert oljeoppsamler.",
            "Filteret er elektrostatisk: ioniseringsdelen gir partiklene ladning, og kollektorplatene i aluminium fanger dem. Cellene renses og gjenbrukes – ingen kostbare engangsfiltre. Serien kommer i tre størrelser, og kapasiteten kan økes ved å montere flere enheter.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Modell", "HFE-25", "HFE-50", "HFE-100"],
            ["Maks. filtreringskapasitet", "2500 m³/h", "5000 m³/h", "10 000 m³/h"],
            ["Filterflate", "14,2 m²", "28,4 m²", "42,6 m²"],
            ["Effektforbruk (motor + filter)", "735 W", "1440 W", "2585 W"],
            ["Mål (B×H×D)", "560 × 630 × 993 mm", "1010 × 630 × 993 mm", "1460 × 630 × 1060 mm"],
            ["Vekt", "100 kg", "195 kg", "–"],
            ["Trykkfall", "< 150 Pa", "< 175 Pa", "–"],
          ],
          footnote:
            "Alle modeller: epoxylakkert stål (RAL 7035), 230 V, driftstemperatur 5–45 °C, maks. 80 % relativ luftfuktighet, CE-merket. Ionisering +5 kV / kollektor +10 kV.",
        },
        {
          type: "bullets",
          heading: "Passer ikke til",
          items: [
            "Aggressive gasser og damper (syrer, alkalier, litiumholdig loddepasta)",
            "Varm luft eller gasser over 45 °C",
            "Sliping av aluminium og magnesium",
            "Kullbuemeisling, flammesprøyting og brennende partikler",
            "Eksplosjonsfarlige miljøer",
          ],
        },
        {
          type: "bullets",
          heading: "Tilvalg",
          items: [
            "For- og etterfiltre i aluminium (standard), dråpefanger for oljetåke, syntetisk finfilter (klasse G3) eller kullfilter mot lukt",
            "Oljeutskiller for enkel oljehåndtering",
            "Fjernkontroll med timer",
          ],
        },
        {
          type: "link",
          label: "Se HF-serien hos Euromate",
          href: "https://www.euromate.com/group/products/air-cleaners/hf-series/",
        },
      ],
    },
    {
      slug: "kaf",
      group: "Produkter",
      title: "Kitchen Air Filtration (KAF)",
      description:
        "KAF-filtreringssystemet installeres direkte inn i eksisterende ventilasjonssystem og passer utmerket for kantiner, kommersielt kjøkken, fast food-restauranter og tradisjonelle restauranter. KAF-filtreringssystem for kjøkken kan tilpasses ulike kapasitetsmengder. Det betyr at du får et skreddersydd system som passer perfekt til akkurat ditt kjøkken.",
      image: `${thumbs}/6c93d124acf8f09f9a662bf63f60bff3.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "KAF (Euromates SF-serie) installeres «plug & play» i nye og eksisterende ventilasjonsanlegg, så nær avtrekkshetten som mulig. I de fleste eksisterende anlegg gir avtrekksviften nok kraft til å kompensere for det lave trykkfallet.",
            "Luften går først gjennom et mekanisk forfilter som tar de største partiklene. Deretter gis fett-, røyk- og sotpartikler en elektrostatisk ladning i ioniseringsdelen, før de negativt ladede kollektorplatene fanger dem – helt ned til 0,1 mikron. Systemet er modulbasert: moduler stables for høyere kapasitet, eller settes etter hverandre for høyere renseeffekt, og kan utvides med kullfilter mot lukt.",
          ],
        },
        {
          type: "bullets",
          heading: "Derfor lønner det seg",
          items: [
            "Redusert brannfare – fett og sot stoppes før kanalene",
            "Rundt 50 % lavere vedlikeholds- og rengjøringskostnader",
            "Fjerner matlukt ved kilden – også utenfor bygget",
            "Beskytter kostbare kullfiltre og hele avtrekkskanalen",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner (SFE-moduler)",
          rows: [
            ["Modell", "SFE-25", "SFE-50", "SFE-75"],
            ["Maks. filtreringskapasitet", "2500 m³/h", "5000 m³/h", "7500 m³/h"],
            ["Viftekapasitet", "3400 m³/h", "6800 m³/h", "10 200 m³/h"],
            ["Filterflate", "14,2 m²", "28,4 m²", "42,6 m²"],
            ["Effektforbruk (filterdel)", "35 W", "40 W", "50 W"],
            ["Kapslingsgrad", "IP 55", "IP 55", "IP 55"],
            ["Mål (B×H×D)", "560 × 630 × 660 mm", "1010 × 630 × 660 mm", "1350 × 630 × 660 mm"],
            ["Vekt", "60 kg", "100 kg", "140 kg"],
          ],
          footnote:
            "Maksimal filtreringskapasitet avhenger av bruksområdet. Filtrene, ioniserings- og kollektordelene renses profesjonelt og gjenbrukes – vi følger opp med fast serviceavtale.",
        },
        {
          type: "link",
          label: "Se SF-serien hos Euromate",
          href: "https://www.euromate.com/group/products/air-cleaners/sf-series/",
        },
      ],
    },
    {
      slug: "grace",
      group: "Produkter",
      title: "Grace",
      description:
        "Grace er gulvmodellen som fjerner opptil 99 % av den forurensede luften, den er perfekt for bruk i mindre rom opptil 25 m2.",
      image: graceImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Grace er gulvmodellen som fjerner opptil 99 % av den forurensede luften, den er perfekt for bruk i mindre rom opptil 25 m2. Som for eksempel cellekontorer, møterom og kopirom. Grace har et diskret og tidløst design, og passer inn i et hvert (kontor)miljø. Grace kan leveres med forskjellige filter/filterløsninger tilpasset deres behov og lokaler.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Romstørrelse", "Opptil ca. 25 m²"],
            ["Filtertyper", "Forfilter / elektrostatisk filter / aktivt kullfilter / HEPA-filter"],
            ["Monteringsmuligheter", "Frittstående"],
            ["Mål", "850 × 380 × 290 mm"],
            ["Vekt", "15 kg"],
            ["Strømforbruk", "Maks 60 W"],
          ],
        },
      ],
    },
  ],
  quote: {
    text: "Luften på kontoret var tung, tett og tørr. Dette måtte vi gjøre noe med.",
    name: "Maria",
    role: "Rystad Energy AS",
  },
};

export function InneklimaPage() {
  return <ServicePage data={inneklimaData} />;
}
