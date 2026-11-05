import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { CONTAINER, Pill } from "../components/site";
import { PageHeader } from "../components/PageHeader";
import { Head } from "../components/ServicePage";
import { useDocumentMeta } from "../../lib/use-document-meta";
import skredderstuaImg from "../../images/ansvar/skredderstua-radarveien.webp";
import norskkursImg from "../../images/ansvar/norskkurs.webp";
import kurverImg from "../../images/ansvar/fruktpakking-kurver.webp";
import elbilerImg from "../../images/ansvar/elbiler-bilpark.webp";
import filtreImg from "../../images/ansvar/vaskbare-filtre.webp";

interface Tiltak {
  title: string;
  body: string;
  /** The photo that shows this topic, if there is one. */
  photo?: Photo;
}

interface Photo {
  src: string;
  alt: string;
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
    body: "Hver enkelt frukt blir kontinuerlig sjekket. Det benyttes hansker, forklær og hårnett under pakking. Frukt som sorteres ut i vår strenge kvalitetskontroll, og som er fullt brukbar, gis til barnehager og organisasjoner som Fattighuset og Gatebarnas far. Frukt som ikke passer til dette, går til heste- og grisefôr samt biogass.",
  },
  {
    title: "CO2-nøytral virksomhet",
    body: "Helt Opplagt er også en CO2-nøytral virksomhet. Årlig lager vi et klimaregnskap for virksomheten (i henhold til GHG-protokollen) og kjøper inn FN-godkjente CO2-kvoter for å kompensere for alle våre utslipp. Vi er stolte av å kunne støtte Gold Standard-prosjektet i Mali, der lokalbefolkningen utstyres med lokalt produserte energieffektive og rentbrennende kjøkkenovner.",
  },
  {
    title: "Gjenbruk av energi",
    body: "Bygget vårt på Bjørnholt benytter seg av gjenbrukbar energi fra forbrenningsanlegget på Klemetsrud. All kjøling til våre 11 kjøle- og fryserom gjøres med energigjerrig varmepumpeteknologi.",
  },
  {
    title: "Vaskbare filtre til inneklima",
    body: "I vår inneklimaavdeling skifter vi nær 20.000 filtre hvert år ute hos våre kunder. Våre serviceteknikere reiser ut til kundene med rene filtre og returnerer med skitne filtre som vi vasker her i vår vaskehall, som igjen benyttes hos våre kunder. År ut og år inn omtrent som med panteflasker.",
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
    body: "Vi i Helt Opplagt har stor tro på mennesket. Vi er stolt av samarbeidet vi har fått til med Røde Kors i Oslo. Røde Kors plukker ut passende personer og disse starter i praksisplasser hos oss, samtidig som de får oppfølging av Røde Kors sine frivillige. Dersom arbeidsforholdet fungerer ansetter vi personen fast her hos oss.",
  },
  {
    title: "Norskkurs hos Helt Opplagt",
    body: "Vi i Helt Opplagt ønsker at alle våre ansatte skal ha like forutsetninger på jobb og i samfunnet generelt. Derfor tilbyr vi sammen med Folkeuniversitetet norskkurs med gratis lærebøker. I tillegg til språkkunnskaper ser man effekter som skaper et sterkt fellesskap mellom de ansatte imellom og oss i Helt Opplagt.",
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

/* Each photo next to the topic it shows. */
const withPhotos = (items: Tiltak[], photos: Record<string, Photo>) =>
  items.map((t) => ({ ...t, photo: photos[t.title] }));

const miljoItems = withPhotos(miljoTiltak, {
  "Elbiler, hybridbiler og miljømål for 2030": miljoPhotos[0],
  "Kvalitetskontroll av frukt og grønnsaker": miljoPhotos[1],
  "Vaskbare filtre til inneklima": miljoPhotos[2],
});
const sosialtItems = withPhotos(sosialt, {
  Arbeidstrening: sosialtPhotos[0],
  "Norskkurs hos Helt Opplagt": sosialtPhotos[1],
});

const MILJO = {
  title: "Miljø",
  proof: "Vi søker hele tiden etter nye metoder for å gjøre miljøet enda bedre – det er vårt miljøansvar!",
};
const SOSIALT = {
  title: "Mennesker og samfunn",
  proof: "Vi i Helt Opplagt har stor tro på mennesket.",
};

function FordLink() {
  return (
    <Link
      to="/aktuelt/helt-opplagt-samarbeider-med-ford-pa-veien-mot-nullutslipp"
      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand"
    >
      Les om overgangen til elektriske varebiler
      <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
    </Link>
  );
}

function PhotoRow({ t, flip }: { t: Tiltak; flip: boolean }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={"overflow-hidden rounded-[1.25rem] " + (flip ? "lg:order-last" : "")}>
        <img src={t.photo!.src} alt={t.photo!.alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
      </div>
      <div>
        <h3 className="font-lato text-[24px] font-light leading-tight text-navy sm:text-[28px]">{t.title}</h3>
        <p className="mt-4 text-[16px] leading-relaxed text-navy/70">{t.body}</p>
      </div>
    </div>
  );
}

/** One area of the page: the topics with a photo as large alternating
    photo/text rows, the rest as a compact two-column list underneath.
    With `band`, the heading and the first photo row sit together on a grey
    band like the opening of /om-oss (photo left, heading and text right). */
function Story({
  title,
  proof,
  items,
  band = false,
  children,
}: {
  title: string;
  proof: string;
  items: Tiltak[];
  band?: boolean;
  children?: ReactNode;
}) {
  const featured = items.filter((t) => t.photo);
  const rest = items.filter((t) => !t.photo);
  const [lead, ...others] = band ? featured : [];
  const rows = band ? others : featured;
  return (
    <>
      {band && lead && (
        <section className="border-y border-navy/[0.06] bg-stone py-10 lg:py-14">
          <div className={CONTAINER}>
            <Head title={title} proof={proof} />
          </div>
          <div className={`${CONTAINER} mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-20`}>
            <div className="overflow-hidden rounded-[1.25rem]">
              <img src={lead.photo!.src} alt={lead.photo!.alt} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div>
              <h3 className="font-lato text-[24px] font-light leading-tight text-navy sm:text-[28px]">{lead.title}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-navy/70">{lead.body}</p>
            </div>
          </div>
        </section>
      )}
      <section className={band ? "pb-14 pt-14 lg:pb-24 lg:pt-20" : "pb-14 lg:pb-24"}>
        <div className={CONTAINER}>
          {!band && <Head title={title} proof={proof} />}
          <div className={(band ? "" : "mt-12 lg:mt-16 ") + "space-y-14 lg:space-y-20"}>
            {/* Alternation carries on from the band, whose photo is left. */}
            {rows.map((t, i) => (
              <PhotoRow key={t.title} t={t} flip={band ? i % 2 === 0 : i % 2 === 1} />
            ))}
          </div>
          {rest.length > 0 && (
            <div className="mt-14 grid gap-x-14 border-t border-navy/10 lg:mt-20 lg:grid-cols-2">
              {rest.map((t) => (
                <div key={t.title} className="border-b border-navy/10 py-7">
                  <h3 className="font-lato text-[19px] font-bold leading-snug text-navy">{t.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-navy/70">{t.body}</p>
                </div>
              ))}
            </div>
          )}
          {children}
        </div>
      </section>
    </>
  );
}

function LookStory() {
  return (
    <>
      <Story {...MILJO} items={miljoItems} band>
        <div className="mt-8"><FordLink /></div>
      </Story>
      <Story {...SOSIALT} items={sosialtItems} />
    </>
  );
}

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

      <LookStory />

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
