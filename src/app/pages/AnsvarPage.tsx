import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { CONTAINER, Pill } from "../components/site";
import { PageHeader } from "../components/PageHeader";
import { Head } from "../components/ServicePage";
import { useDocumentMeta } from "../../lib/use-document-meta";
import skredderstuaImg from "../../images/ansvar/skredderstua-radarveien.jpg";
import norskkursImg from "../../images/ansvar/norskkurs.jpg";
import kurverImg from "../../images/ansvar/fruktpakking-kurver.jpg";
import elbilerImg from "../../images/ansvar/elbiler-bilpark.jpg";
import filtreImg from "../../images/ansvar/vaskbare-filtre.jpg";

interface Tiltak {
  title: string;
  body: string;
}

interface Photo {
  src: string;
  alt: string;
}

/** The section's photos as one collage: a wide lead photo, the rest below it. */
function Collage({ photos }: { photos: Photo[] }) {
  const [lead, ...rest] = photos;
  const img = "h-full w-full object-cover";
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-[1rem]">
        <img src={lead.src} alt={lead.alt} loading="lazy" decoding="async" className={img} />
      </div>
      {rest.map((p) => (
        <div
          key={p.src}
          className={
            "overflow-hidden rounded-[1rem] " +
            (rest.length === 1 ? "col-span-2 aspect-[16/10]" : "aspect-square")
          }
        >
          <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className={img} />
        </div>
      ))}
    </div>
  );
}

/**
 * Heading and photo collage in one column (sticky on desktop), every topic
 * as plain text in the other. Photos illustrate the section as a whole, so
 * no single topic looks like it is missing one.
 */
function TiltakSection({
  title,
  proof,
  items,
  photos,
  reverse = false,
  children,
}: {
  title: string;
  proof: string;
  items: Tiltak[];
  photos: Photo[];
  reverse?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div className={"lg:sticky lg:top-24 lg:self-start " + (reverse ? "lg:order-last" : "")}>
        <Head title={title} proof={proof} />
        <div className="mt-8">
          <Collage photos={photos} />
        </div>
      </div>
      <div>
        <div className="border-b border-navy/10">
          {items.map((t) => (
            <div key={t.title} className="border-t border-navy/10 py-7 first:border-t-0 first:pt-0">
              <h3 className="font-lato text-[19px] font-bold leading-snug text-navy">
                {t.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-navy/70 lg:text-[16px]">
                {t.body}
              </p>
            </div>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}

const miljoTiltak: Tiltak[] = [
  {
    title: "Miljøfyrtårn",
    body: "Et systematisk arbeid med miljøtiltak i hverdagen, samt et fokus på miljø fra alle våre ansatte, gjorde oss til en Miljøfyrtårn-sertifisert bedrift i 2014. Helt Opplagts miljøgruppe, bestående av ansatte fra alle avdelinger i organisasjonen, har i lengre tid jobbet med å kvalitetssikre våre miljøtiltak slik at vi til enhver tid reduserer vår virksomhets ytre miljøpåvirkninger.",
  },
  {
    title: "Miljøvennlige kurver",
    body: "Vi administrerer, pakker, og frakter våre produkter til deg uten å belaste miljøet. Vi benytter utelukkende miljøvennlige, flettede gjenbrukskurver laget av en familiebedrift i en liten landsby i fjellene på Filippinene.",
  },
  {
    title: "Kildesortering",
    body: "Alle avdelinger kildesorterer avfall. All papp komprimeres i vår komprimator og leveres til gjenbruk. Vi er stolte over at vi kan returnere over 1 tonn emballasje i uken.",
  },
  {
    title: "Kvalitetskontroll av frukt og grønnsaker",
    body: "Frukt som sorteres ut i vår strenge kvalitetskontroll, og som er fullt brukbar, gis til barnehager og organisasjoner som Fattighuset og Gatebarnas far. Frukt som ikke passer til dette, går til heste- og grisefôr samt biogass.",
  },
  {
    title: "CO2-nøytral virksomhet",
    body: "Helt Opplagt er også en CO2-nøytral virksomhet. Årlig lager vi et klimaregnskap for virksomheten (i henhold til GHG-protokollen) og kjøper inn FN-godkjente CO2-kvoter for å kompensere for alle våre utslipp. Vi er stolte av å kunne støtte Gold Standard-prosjektet i Mali, der lokalbefolkningen utstyres med lokalt produserte energieffektive og rentbrennende kjøkkenovner.",
  },
  {
    title: "Gjenbruk av energi",
    body: "I forbindelse med at vi ferdigstilte og flyttet inn i vårt eget bygg, har vi kunnet planlegge alt fra starten av og all oppvarming er basert på gjenbruk av energi fra forbrenningsanlegget på Klemetsrud. All kjøling til våre 11 kjøle- og fryserom gjøres med energigjerrig varmepumpeteknologi.",
  },
  {
    title: "Vaskbare filtre til inneklima",
    body: "I vår inneklimaavdeling skifter vi nær 20.000 filtre hvert år ute hos våre kunder. I stedet benytter vi vaskbare filtre, og våre serviceteknikere reiser ut til kundene med rene filtre og returnerer med skitne filtre som vi vasker her i vår vaskehall, som igjen benyttes hos våre kunder. År ut og år inn omtrent som med panteflasker.",
  },
  {
    title: "Elbiler, hybridbiler og miljømål for 2030",
    body: "Vårt fokus på bærekraft og ønsket om å spare miljøet der det er mulig gjør at vi har satt oss et hårete mål om å ha nullutslipp på all transport innen 2030. De første hel-elektriske varebilene er nå både bestilt og tatt i bruk og vi har bygget ny ladeinfrastruktur og ladebokser til hele bilparken. Innkjøp av rene fossilbiler til transportavdelingen er nå historie!",
  },
];

const sosialt: Tiltak[] = [
  {
    title: "Arbeidstrening",
    body: "I tråd med vår sosiale profil har vi utviklet et samarbeid med arbeidsmarkedsbedrifter på Østlandet. Dette gir deg som kunde muligheten til å få pakket dine fruktkurver av en bedrift med varig tilrettelagte arbeidsplasser (en VTA-bedrift), samtidig som våre svært høye krav på frukt-, temperatur- og kvalitetskontroll opprettholdes. Gjennom dette kan vi levere kurver pakket av Stiftelsen Radarveien avdeling Skredderstua arbeidssenter.",
  },
  {
    title: "Nettverk etter soning",
    body: "Vi i Helt Opplagt har stor tro på mennesket, også de som trenger en ny sjanse. Vi er stolt av samarbeidet vi har fått til med Røde Kors i Oslo. Røde Kors plukker ut passende personer og disse starter i praksisplasser hos oss, samtidig som de får oppfølging av Røde Kors sine frivillige. Dersom arbeidsforholdet fungerer ansetter vi personen fast her hos oss.",
  },
  {
    title: "Norskkurs hos Helt Opplagt",
    body: "Vi i Helt Opplagt ønsker at alle våre ansatte skal ha like forutsetninger på jobb og i samfunnet generelt. Derfor tilbyr vi sammen med Folkeuniversitetet norskkurs med gratis lærebøker til 45 av våre ansatte. I tillegg til språkkunnskaper ser man effekter som skaper et sterkt fellesskap mellom de ansatte imellom og oss i Helt Opplagt.",
  },
];

const miljoPhotos: Photo[] = [
  { src: elbilerImg, alt: "Helt Opplagts elektriske biler og varebiler foran bygget på Bjørnholt" },
  { src: kurverImg, alt: "Kvalitetskontroll og pakking av frukt hos Helt Opplagt" },
  { src: filtreImg, alt: "Vaskbare filtre fra Helt Opplagts inneklimaavdeling" },
];

const sosialtPhotos: Photo[] = [
  { src: skredderstuaImg, alt: "Ansatte ved Skredderstua arbeidssenter med ferdigpakkede fruktkurver" },
  { src: norskkursImg, alt: "Ansatte på norskkurs hos Helt Opplagt" },
];

export function AnsvarPage() {
  useDocumentMeta(
    "Samfunnsansvar",
    "Vi i Helt Opplagt vet at vi ikke kan redde verden på egenhånd, men vi ønsker å bidra der vi kan, og håper å inspirere andre til å gjøre det samme."
  );

  return (
    <div className="min-h-dvh bg-white">
      <PageHeader
        title="Vårt samfunnsansvar"
        intro="Vi i Helt Opplagt vet at vi ikke kan redde verden på egenhånd, men vi ønsker å bidra der vi kan, og håper å inspirere andre til å gjøre det samme. Vi har alltid hatt stort fokus på miljøtiltak. Vi tenker på miljøet både i forhold til klima og natur, men også i et sosialt perspektiv."
        action={
          <Pill
            href="https://heltopplagt.no/download_file/view/455/236"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Les klimaregnskapet vårt
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Pill>
        }
      />

      <section className="bg-white py-16 lg:py-24">
        <div className={CONTAINER}>
          <TiltakSection
            title="Miljø"
            proof="Vi søker hele tiden etter nye metoder for å gjøre miljøet enda bedre – det er vårt miljøansvar!"
            items={miljoTiltak}
            photos={miljoPhotos}
          >
          <div className="mt-8">
            <Link
              to="/aktuelt/helt-opplagt-samarbeider-med-ford-pa-veien-mot-nullutslipp"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand"
            >
              Les om overgangen til elektriske varebiler
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
          </TiltakSection>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-stone border-y border-navy/[0.06] py-16 lg:py-24">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -left-16 -bottom-12 w-40 -rotate-[15deg] bg-brand/10 lg:-left-8 lg:w-60"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <TiltakSection
            title="Mennesker og samfunn"
            proof="Vi i Helt Opplagt har stor tro på mennesket, også de som trenger en ny sjanse."
            items={sosialt}
            photos={sosialtPhotos}
            reverse
          />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className={CONTAINER}>
          <Head
            title="Sertifiseringer og medlemskap"
          />
          <ul className="mt-8 grid grid-cols-1 gap-x-14 gap-y-8 sm:grid-cols-3">
            {[
              {
                name: "Miljøfyrtårn",
                detail: "Sertifisert siden 2014",
              },
              {
                name: "Grønt Punkt",
                detail: "Medlem, med EL-returavtale",
              },
              {
                name: "GLOBALG.A.P.",
                detail: "Fruktleverandørene våre er tilknyttet",
              },
            ].map((c) => (
              <li key={c.name} className="border-t border-navy/10 pt-5">
                <p className="font-lato text-[19px] font-bold text-navy">
                  {c.name}
                </p>
                <p className="mt-1 text-[15px] text-navy/60">{c.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
