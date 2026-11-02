/** Customer testimonials, verbatim from heltopplagt.no/referanser. The original credits company and name only, so `role` mirrors `company`. */
export interface Review {
  name: string;
  role: string;
  company: string;
  /** Which service the quote is about — matches the service names. */
  service: "Kantine" | "Lunsj" | "Frukt" | "Inneklima" | "Renhold";
  text: string;
  /** Short headline-style quote, used large on the Referanser page. */
  pullQuote?: string;
}

export const reviews: Review[] = [
  {
    name: "Kristin Gresmo Johansen",
    role: "Sport Holding AS (Sport 1, Intersport, Bergans)",
    company: "Sport Holding AS (Sport 1, Intersport, Bergans)",
    service: "Kantine",
    text: "Vi har hatt Helt Opplagt som kantineleverandør siden juni 2021. Vi er en stor bedrift som stadig vokser, nå ca 180 personer. Vi har valgt nivå medium i vår kantine, og har varmmat 1 gang i uken. I tillegg til salatbar og brød/pålegg dukker det stadig opp småretter som omeletter, supper etc. Fredag = vafler. Vi er veldig fornøyde med Helt Opplagt som kantineleverandør. Maten som presenteres er delikat, de er flinke til å variere både salatbar, pålegg og småretter slik at det hele tiden finnes noe spennende å velge i. I tillegg er vertinnene som jobber hos oss dyktige, blide jenter med høyt fokus på service.",
  },
  {
    name: "Wenche Revhaug",
    role: "Kronos Titan",
    company: "Kronos Titan",
    service: "Kantine",
    text: "Kronos Titan har i flere år hatt fleksibel matleveranse fra Helt Opplagt med daglig lunsjbuffet i kantinen. I tillegg har vi lunsjesker til våre ansatte i helkontinuerlig skift. Helt Opplagt leverer god, variert og sunn mat – fersk og frisk. De gir oss det lille ekstra for at vi skal få et hyggelig avbrekk og en bra matopplevelse – hver dag! Helt Opplagt er fleksible, imøtekommende med høy servicegrad – vi er superfornøyd!",
  },
  {
    name: "Tor Anders Andersen",
    role: "Team Verksted AS Avd Follo",
    company: "Team Verksted AS Avd Follo",
    service: "Lunsj",
    text: "Vi har i 3 år hatt lunsjkurver fra Helt Opplagt og valgte Go'lunsjen. Vi organiserer lunsjen som et spleiselag mellom bedriften og de ansatte og er 15-19 personer daglig. Med denne ordningen sparer vi tid, da vi ikke trenger å reise ut for å kjøpe lunsj lenger. Våre ansatte opplever ordningen som et flott tilbud og nå som alle spiser samtidig og er samlet i kantinen gjør det også godt for arbeidsmiljøet og det sosiale. Vi får en sunn lunsj med variert utvalg, deriblant våre favorittpålegg som kjøttpålegg, ost, leverpostei og syltetøy. Helt Opplagt fungerer helt utmerket som leverandør for oss.",
  },
  {
    name: "Tom Liseth",
    role: "Samsung Electronics",
    company: "Samsung Electronics",
    service: "Lunsj",
    text: "Vi har hatt Superlunsjen fra Helt Opplagt i 6 måneder som et spleiselag mellom bedriften og de ansatte. Vi ønsket en felles lunsjordning for å få et mer naturlig samlingspunkt for de ansatte. Det skaper en god mulighet for å snakke med kollegaer fra andre avdelinger som du ikke snakker med på daglig basis. Tjenesten oppleves veldig bra for de ansatte, og ikke minst kostnadseffektivt. Løsningen har fungert over forventning på alle punkt. Leveranse skjer daglig med godt pålegg, og dagsferskt brød er sammen med eplejuicen fra Askim høydepunktene blant produktene.",
  },
  {
    name: "Jorunn Kristiansen",
    role: "Vinmonopolet AS",
    company: "Vinmonopolet AS",
    service: "Frukt",
    text: "Vinmonopolet har fått frukt til 170 ansatte fra Helt Opplagt siden 2018. Vi har valgt Knaskekurven og Go'kurven. Vi hadde et ønske om å tilføre de ansatte ny energi i form av sunne alternativer så vi kan holde energien oppe ut dagen. Frukten er veldig populær og det er konkurranse om å kaste seg over kurvene når de kommer. Nøtter og bananer er de største favorittene. Vi er veldig godt fornøyd med Helt Opplagt. De er svært fleksible og raske til å følge opp ønsker.",
  },
  {
    name: "Edmund Ellingsen",
    role: "Refinansiering.no – Zen Finans AS",
    company: "Refinansiering.no – Zen Finans AS",
    service: "Frukt",
    text: "Refinansiering har fått frukt til ca 20 ansatte fra Helt Opplagt siden 2023. Vi har prøvd både Hverdagskurven og Knaskekurven og har vært veldig fornøyd med begge. Vi ønsket å tilby noe som både er sunt og bidrar til trivsel på arbeidsplassen. Fruktordningen gir et positivt løft i hverdagen, og de ansatte er veldig fornøyde! Fruktkurven skaper en liten, men viktig grunn til å ta en pause og slå av en prat, noe som styrker samholdet blant de ansatte. De som leverer er alltid hyggelige, og servicen er fantastisk. Kort sagt er vi veldig fornøyde med Helt Opplagt.",
  },
  {
    name: "Anette Rosendahl",
    role: "Den Norske Opera & Ballett",
    company: "Den Norske Opera & Ballett",
    service: "Inneklima",
    pullQuote:
      "Å produsere Svanesjøen med hodepine var ikke optimalt. Løsningen var Helt Opplagt.",
    text: "Vi hadde problemer med støv og dårlig luft på grunn av produksjon av kostymer, masker og andre objekter som skulle brukes i forestillingene. Mange av de ansatte følte at luften var tørr og dårlig – særlig mot slutten av arbeidsdagen. Vi forsøkte uten hell å gjøre noe med dette, helt til vi kom i kontakt med Helt Opplagt, som anbefalte oss de riktige løsningene for å redusere svevestøvet. Vi er nå veldig fornøyde med luftrenserne, og arbeidsmiljøet er forbedret kraftig. Vi er veldig fornøyde med samarbeidet, og Helt Opplagt kommer hver måned for å skifte filtre og rense luftrenserne.",
  },
  {
    name: "Maria",
    role: "Rystad Energy AS",
    company: "Rystad Energy AS",
    service: "Inneklima",
    pullQuote: "Luften på kontoret var tung, tett og tørr. Dette måtte vi gjøre noe med.",
    text: "De ansatte klaget over luftkvaliteten, noe som gikk ut over trivsel, arbeidsmiljø og effektivitet. Vi tok selvsagt dette på største alvor – ingenting er viktigere enn at de ansatte har et godt arbeidsmiljø. Etter befaringer og et godt tilbud så vi ingen grunn til å ikke inngå samarbeid med Helt Opplagt – dette måtte vi bare prøve. Det har vi aldri angret på, for vi opplever stor forbedring. Alle er mye mer fornøyde og kan konsentrere seg om jobben. Helt Opplagt følger opp avtalen til punkt og prikke, og gjør all jobben med montering, service og vedlikehold.",
  },
  {
    name: "Helge Stensrud",
    role: "Schibsted Trykk Oslo AS",
    company: "Schibsted Trykk Oslo AS",
    service: "Renhold",
    text: "Høsten 2023 så vi etter ny samarbeidspartner på daglig og temporært renhold og valget falt på Helt Opplagt. Tilbudspresentasjonen var i sin helhet god, i tillegg er det et firma som tar stort sosialt ansvar noe som er svært viktig for oss og våre verdier. Et godt renhold gir et bra arbeidsmiljø, og Helt Opplagt innfrir alle forventningene vi hadde til kvalitet. Når ansatte kommenterer at det er rent blir man trygg på at man har gjort riktig valg av leverandør. Jeg vil spesielt trekke frem positiviteten Helt Opplagt viser. De er løsningsorienterte, bestandig imøtekommende og fikser alt vi ber om. Vi er glade for valget vi tok om ny samarbeidspartner.",
  },
];

/** Anchor id for one review on /referanser, e.g. "referanse-kristin-gresmo-johansen". */
export function reviewId(review: Review) {
  const slug = review.name
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "o")
    .replace(/å/g, "a")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `referanse-${slug}`;
}
