import { useState } from "react";
import { ArrowUpRight, UserRound } from "lucide-react";
import { CONTAINER, Pill } from "../components/site";
import { PageHeader } from "../components/PageHeader";
import { Head } from "../components/ServicePage";
import buildingImg from "../../images/om-oss/bygg-bjornholt.webp";
import carFleetImg from "../../images/om-oss/photo-04-group-with-car-fleet.webp";
import euromateImg from "../../images/om-oss/photo-05-office-with-euromate-machine.webp";
import celebrationImg from "../../images/om-oss/photo-06-office-celebration.webp";
import fruitVanImg from "../../images/om-oss/photo-07-fruit-delivery-van.webp";
import warehouseImg from "../../images/om-oss/photo-08-warehouse-team.webp";
import lunsjImg from "../../images/lunsj/lunsj.webp";
import profilImg from "../../images/om-oss/ho-189.webp";
import rettHjemImg from "../../images/om-oss/rett-hjem.webp";
import teamImg from "../../images/catering/kokker.webp";
import renholdImg from "../../images/renhold/renhold-team.webp";
import njordImg from "../../images/inneklima/njord-lager.webp";
import { History, type HistoryEntry } from "../components/History";
import { useDocumentMeta } from "../../lib/use-document-meta";

/** Euromiljø, the group's first company, was founded in 1985. */
const yearsOfExperience = new Date().getFullYear() - 1985;

const stats = [
  { value: "320+", label: "Ansatte i konsernet" },
  { value: "50 000+", label: "Ansatte mottar tjenestene våre" },
  { value: "1000+", label: "Bedrifter i Oslo og Stor-Oslo" },
  { value: "15 000", label: "Serveres lunsj hver dag" },

];

const values = [
  {
    title: "Vi dyrker samhold",
    body: "Hos oss har alle et ansvar for å skape et inkluderende arbeidsmiljø hvor vi presterer, har det moro sammen og bryr oss om hverandre. Vi har tro på våre medarbeidere, noe som gjenspeiles i vår flate struktur og satsning på mennesker som kan og vil arbeide for vårt fellesskap. Hos oss har vi et mangfold som viser hverandre tillit og respekt.",
  },
  {
    title: "Vi er nysgjerrige",
    body: "Vi lærer av våre feil, og skaper nye og bedre løsninger. For å kunne lære av og med hverandre har vi et åpent sinn, og mot til å dele og stille spørsmål. Vi utforsker fremtiden og de muligheter som ligger i den.",
  },
  {
    title: "Vi skaper kvalitet",
    body: "Vi jobber for å knytte til oss de rette menneskene med den riktige kompetansen. Samtidig ønsker vi der det er mulig å rekruttere internt, for å ta vare på og videreutvikle mennesker, kunnskap og erfaring. Vi er fleksible og har en evne til å snu oss raskt for å gi en unik kundeservice og opprettholde kvaliteten vi har lovet.",
  },
];

const timeline: HistoryEntry[] = [
  {
    year: "1985",
    title: "Euromiljø blir stiftet",
    image: [carFleetImg, euromateImg, celebrationImg],
    body: "Helt Opplagt-konsernets første selskap het Euromiljø AS og ble etablert i 1985. Siden den tid har vi jobbet med å øke trivsel og effektivitet, og for enda flere langtidsfriske mennesker hos bedrifter og offentlig sektor på Østlandet. Det startet med ren luft med rett temperatur; med luftrensere, kjøling og varmepumper med tilhørende leie- og serviceavtaler.",
  },
  {
    year: "1997",
    title: "Jobbfrukt",
    image: [fruitVanImg, warehouseImg],
    body: "Midt på nittitallet startet vi levering av fruktkurver, eller jobbfrukt; lett tilgjengelig frukt på arbeidsplassen. Tjenesten er i dag blitt vanlig og inngår hos svært mange bedrifter som en viktig faktor for de ansattes trivsel og helse.",
  },
  {
    year: "1999",
    title: "Sunn lunsj",
    image: lunsjImg,
    body: "1999 startet vi med levering av sunn lunsj til små og mellomstore bedrifter. Lunsjtjenesten ble senere utvidet med kantinedrift med personell, samt varmmat, catering, overtids- og julemat fra vårt eget kjøkken.",
  },
  {
    year: "2007",
    title: "Helt Opplagt på jobben",
    image: profilImg,
    body: "Navnet Euromiljø er beholdt som firmanavn, men fra 2007 begynte vi å bruke profilnavnet Helt Opplagt på jobben.",
  },
  {
    year: "2011",
    title: "Nytt bygg på Bjørnholt",
    image: buildingImg,
    body: "I 2011 fikk vi ferdigstilt vårt nye bygg på Bjørnholt, bygget spesielt for våre virksomheter. Vi fikk med dette flotte vekstmuligheter.",
  },
  {
    year: "2013",
    title: "Rene lokaler",
    image: renholdImg,
    body: "I 2012 startet vi med å tilby renholdstjenester til våre kunder. Dette ga oss nye muligheter for å utvide tjenestene våre og styrke samarbeidet med bedrifter.",
  },

  {
    year: "2016",
    title: "Rett hjem",
    image: rettHjemImg,
    body: "Kjøpte opp Rett Hjem i 2016 for å kunne tilby bedrifter også netthandel av lunsj, catering etc. Videre overtok vi også en «Seniortjeneste», nå kalt Rett Hjem PLUSS, med levering av dagligvarer og middagsmat til eldre.",
  },
  {
    year: "2022",
    title: "Startet med lettindustri",
    image: njordImg,
    body: "I 2022 inngikk vi en avtale med Njord om å tilby luftrensere til lettindustrien. Nå leverer vi ren luft også til lager, verksteder og produksjonslokaler.",
  },
  {
    year: "I dag",
    title: "Drøyt 320 ansatte",
    image: teamImg,
    body: "Vi har hele veien hatt jevn og fin vekst, og i Helt Opplagt har vi nå drøyt 320 ansatte. Vi er stolte av våre fine og lojale medarbeidere som gjør service på rundt 1200 luftrensere og varmepumper hver måned, produserer og leverer rundt 3500 fruktkurver per uke, og serverer lunsj til over 15 000 mennesker hver dag.",
  },
];

/* DUMMY people for the staff section layout. Replace with the real names,
   titles and photos (import the photo and set `image`). */
const departments = ["Ledelse", "Salg", "Kundeservice", "Drift", "Økonomi"] as const;
type Department = (typeof departments)[number];

const team: { name: string; role: string; department: Department; image?: string }[] = [
  { name: "Ola Nordmann", role: "Daglig leder", department: "Ledelse" },
  { name: "Mona Lie", role: "Driftsdirektør", department: "Ledelse" },
  { name: "Kari Nordmann", role: "Salgssjef", department: "Salg" },
  { name: "Erik Dahl", role: "Key account manager", department: "Salg" },
  { name: "Anne Olsen", role: "Kundeansvarlig", department: "Kundeservice" },
  { name: "Sara Moen", role: "Kundeservicemedarbeider", department: "Kundeservice" },
  { name: "Per Hansen", role: "Driftsleder", department: "Drift" },
  { name: "Jonas Bakke", role: "Logistikkansvarlig", department: "Drift" },
  { name: "Lars Berg", role: "Økonomiansvarlig", department: "Økonomi" },
  { name: "Ingrid Strand", role: "Regnskapsmedarbeider", department: "Økonomi" },
];

const CHIP =
  "inline-flex items-center gap-2 rounded-[1rem] border px-4 py-2 text-[14px] font-semibold transition-colors";

export function OmOssPage() {
  const [department, setDepartment] = useState<Department>("Ledelse");

  useDocumentMeta(
    "Om oss",
    "Helt Opplagt på jobben er en markedsorientert leverandør av løpende abonnementsbaserte tjenester innen helse og trivsel på arbeidsplassen. Vi leverer jobbfrukt, catering, renhold, kantine og ren luft til over 50 000 ansatte i bedrifter i Oslo."
  );

  return (
    <div className="min-h-dvh bg-white">
      <PageHeader
        title="Om Helt Opplagt på jobben"
        intro="Sammen skal vi være det Helt Opplagte valg for en sunnere, renere og enklere hverdag! Helt Opplagt på jobben er en markedsorientert leverandør av løpende abonnementsbaserte tjenester innen helse og trivsel på arbeidsplassen."
      />

      <section className="border-t border-navy/[0.06] bg-stone py-10 lg:py-14">
        <div
          className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
        >
          <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-none">
            <div className="aspect-[3/2] overflow-hidden rounded-[0.875rem]">
              <img
                src={buildingImg}
                alt="Helt Opplagt på jobben sitt bygg på Bjørnholt i Oslo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <Head
              title="En samarbeidspartner for trivsel, helse og effektivitet"
              proof="Gjennom høy kvalitet, presise leveranser, nærhet til kundene, høy servicegrad og riktige priser skal vi være markedets foretrukne samarbeidspartner i våre nisjer."
            />
            <p className="mt-6 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
              Vi tror på menneskene, og vi bryr oss om deg. Gjennom våre verdier
              får vi mennesker til å blomstre, trives og gjøre et godt stykke
              arbeid.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
              Vi er stolte av å identifisere oss som en virksomhet med god
              kultur og rutiner for å fremme likestilling og hindre
              diskriminering på arbeidsplassen. I våre stillingsannonser
              oppfordrer vi kvalifiserte søkere til å søke uansett alder, kjønn,
              legning og kulturell bakgrunn.
            </p>
            <div className="mt-8">
              <Pill
                href="https://karriere.heltopplagt.com/"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jobb hos oss
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Pill>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/[0.06] bg-stone">
        <div className={`${CONTAINER} py-10 lg:py-12`}>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-[13px] leading-snug text-navy/55">
                  {s.label}
                </dt>
                <dd className="font-lato text-[34px] font-light leading-none text-brand">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white py-16 lg:py-24">
        <span
          aria-hidden="true"
          className="livery-puzzle-outline aspect-[100/129] -left-14 -top-8 w-36 -rotate-[12deg] bg-brand/20 lg:-left-8 lg:w-52"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <Head
            title="Verdiene våre"
            proof="Samhold, nysgjerrighet og kvalitet skal gjøre oss i stand til å løfte hverandre til topp prestasjoner i alle ledd."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[1.5rem] bg-stone p-7"
              >
                <h3 className="font-lato text-[20px] font-bold text-navy">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/65">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff. DUMMY: placeholder photos, names and titles for the layout
          only; swap in the real people (photo, name, title) in `team`. */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className={CONTAINER}>
          <Head title="Våre ansatte" />

          {/* Department filter, same look as the filter on Referanser. */}
          <div
            role="group"
            aria-label="Filtrer ansatte etter avdeling"
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {departments.map((name) => {
              const on = department === name;
              const count = team.filter((p) => p.department === name).length;
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setDepartment(name)}
                  className={
                    CHIP +
                    " " +
                    (on
                      ? "border-navy bg-navy text-white"
                      : "border-navy/15 bg-white text-navy hover:border-brand hover:text-brand")
                  }
                >
                  {name}
                  <span className={on ? "text-white/60" : "text-navy/40"}>{count}</span>
                </button>
              );
            })}
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
            {team
              .filter((p) => p.department === department)
              .map((person) => (
              <li key={person.name}>
                <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[0.875rem] bg-stone">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <UserRound
                      className="h-14 w-14 text-navy/15"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="mt-4 font-lato text-[17px] font-bold leading-snug text-navy">
                  {person.name}
                </p>
                <p className="mt-0.5 text-[14px] text-navy/55">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <History
        title="Historien vår"
        proof={`Vi har over ${yearsOfExperience} år med erfaring i å levere tjenester som fremmer trivsel, helse og effektivitet på arbeidsplassen.`}
        entries={timeline}
        ground="stone"
      />

      <section className="relative isolate overflow-hidden bg-white py-16 lg:py-20">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-16 -bottom-12 w-40 rotate-[15deg] bg-brand/10 lg:-right-8 lg:w-56"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <Head
            title="Åpenhetsloven"
            proof="Vi tar ansvar for menneskerettigheter og arbeidsforhold i vår virksomhet og leverandørkjede."
          />
          <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.7] text-navy/70">
            Åpenhetsloven trådte i kraft 1. juli 2022 for å forebygge brudd på
            menneskerettigheter og uanstendige arbeidsforhold. Vi har derfor
            gjennomført aktsomhetsvurderinger basert på OECD-retningslinjer, og
            vil gjøre dette årlig. Ingen faktiske negative konsekvenser for
            menneskerettigheter eller uanstendige arbeidsforhold har blitt
            identifisert i vår aktsomhetsvurdering.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Pill
              href="https://heltopplagt.no/download_file/view/494/180"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redegjørelse – konsernet
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
            <Pill
              href="https://heltopplagt.no/download_file/view/495/180"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redegjørelse – Euromiljø Natur AS
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
            <Pill
              href="https://heltopplagt.no/download_file/view/458"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supplier code of conduct
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          </div>
        </div>
      </section>
    </div>
  );
}
