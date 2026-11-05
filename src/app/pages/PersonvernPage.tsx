import type { ReactNode } from "react";
import { CONTAINER } from "../components/site";
import { PageHeader } from "../components/PageHeader";
import { useDocumentMeta } from "../../lib/use-document-meta";

/** Privacy statement and cookies, linked from the footer. Text as on
    heltopplagt.no/personvern. */
export function PersonvernPage() {
  useDocumentMeta(
    "Personvern og informasjonskapsler",
    "Personvernerklæring for Helt Opplagt-konsernet: hvilke data vi samler inn, hvordan vi bruker dem og hvilke informasjonskapsler vi bruker."
  );

  return (
    <div className="min-h-dvh bg-white">
      <PageHeader title="Personvern og informasjonskapsler" />

      <article className="bg-white pb-20 pt-8 lg:pb-28 lg:pt-10">
        <div className={CONTAINER}>
          <div className="max-w-[720px]">
            <Section heading="Personvernerklæring Helt Opplagt-konsernet">
              <P>
                Denne personvernerklæringen gjelder for alle data som omhandler deg som person,
                bedriften du jobber for, for alle nettsteder som eies og driftes av selskapene i
                Helt Opplagt-konsernet, samt våre interne løsninger for lagring av data.
              </P>
            </Section>

            <Section heading="Hva vi vet og hvordan behandler vi dine data">
              <P>
                Helt Opplagt samler inn data om deg når du blir kunde av oss. Dataene vi innhenter
                brukes kun til markedsføring av selskapene i konsernet og er relatert til
                produkter/tjenester som du har hos oss. Vi er opptatt av at du som kunde forstår
                hvordan vi håndterer data vi samler om deg og denne personvernerklæringen
                forklarer hvilken data vi samler inn, hvordan vi gjør det og hva vi bruker dataene
                til.
              </P>
            </Section>

            <Section heading="Personvern">
              <P>
                Personopplysninger er definert som data som kan knyttes til en enkeltperson. Det
                kan være navn, adresse, produktinteresser, telefon og e-post. Vi lagrer ikke
                ip-adresser, eller en kombinasjon av disse som gjør det mulig å se person bak
                dataene. All bruk av personopplysninger regnes som behandling av
                personopplysninger, som for eksempel innsamling, registrering, sammenstilling,
                lagring og utlevering eller en kombinasjon av disse. Behandling av
                personopplysninger reguleres av personopplysningsloven. Vi er behandlingsansvarlig
                for alle personopplysninger som vi innhenter i forbindelse med ditt kundeforhold.
                Som behandlingsansvarlig er det vi som har ansvar og plikter etter
                personopplysningsloven ovenfor deg som kunde. Dersom vi bruker en underleverandør
                for å behandle personopplysninger, vil vi sørge for at vår underleverandør har
                gyldig databehandler avtale med oss/deg.
              </P>
              <P>
                Vi deler ikke opplysninger om din bruk av tjenestene med andre selskaper med mindre
                det foreligger en databehandler avtale mellom oss og en underleverandør. Vi deler,
                selger eller formidler ikke personopplysninger på noen annen måte enn beskrevet i
                denne personvernerklæringen.
              </P>
            </Section>

            <Section heading="Hvor vi får våre data fra">
              <P>
                Når du kontakter oss første gang vil vi be om kontaktinformasjon. Bedriftens
                kontaktinformasjon er basert på informasjon vi henter fra Brønnøysund registeret,
                men for personer vil vi be om din e-post og telefon nummer. Opplysningen du gir oss
                kan deles inn som følger:
              </P>
              <H3>Opplysninger du selv deler med oss</H3>
              <P>
                Når du henvender deg til oss per mail, telefon eller hjemmeside vil du normalt
                oppgi navn og e-postadresse. Disse opplysningene lagres i våre databaser for at vi
                skal kunne kommunisere med deg.
              </P>
              <H3>Opplysninger om produkter og tjenester</H3>
              <P>
                Når du blir kunde hos oss vil vi registrer nødvendig informasjon om hvilke
                tjenester/produkter du bruker og hvordan du bruker dem.
              </P>
            </Section>

            <Section heading="Hvordan vi bruker opplysningene">
              <P>
                Alle personopplysninger vi lagrer er for at vi skal kommunisere og skape en best
                mulig kundeopplevelse for deg. Vi behandler personopplysninger og andre former for
                data for å levere tjenestene som er avtalt med deg og for å sikre en best mulig
                brukeropplevelse. Dine bruksdata kan bli brukt til statistikk for å forstå
                bruksmønster på produkter og tjenester.
              </P>
            </Section>

            <Section heading="Informasjon om markedsføring">
              <P>
                Hvis du har et aktivt kundeforhold vil vi sende deg informasjon og markedsføring
                på e-post eller andre elektroniske kommunikasjonsmetoder innenfor rammene av
                markedsføringsloven, med mindre du har bedt oss om noe annet. Har du ikke et
                aktivt kundeforhold til oss, vil vi bare sende slik markedsføring om du har gitt
                oss et eksplisitt og informert samtykke.
              </P>
            </Section>

            <Section heading="Korrigering og sletting av personopplysninger">
              <P>
                For at vi skal bistå deg som kunde best mulig er det viktig at opplysninger vi har
                registrert er riktige og oppdaterte. Hvis du oppdager feil, oppfordrer vi deg til
                å ta kontakt med oss slik at opplysningene kan bli rettet. Du kan også kontakte oss
                dersom du ønsker at opplysningene skal slettes. Vi vil ikke lagre data lenger enn
                det som er nødvendig for å oppfylle formålet med behandlingen og lovpålagte plikter
                vi har.
              </P>
            </Section>

            <Section heading="Sletting av informasjonskapsler">
              <P>
                Du kan velge om du vil akseptere lokal lagring av data gjennom innstillingene i
                nettleseren din. Her kan du normalt angi om du aksepterer lagring av
                informasjonskapsler fra nettsidene du besøker, fra tredjeparter som er tilknyttet
                nettsidene og eventuelt om du ønsker å bli varslet hver gang en ny
                informasjonskapsel blir lagret. Den eksakte fremgangsmåten avhenger litt av enheten
                din og hvilken nettleser du bruker. Hvis du velger å deaktivere lokal lagring av
                data kan det hende at du må logge deg på hver gang du skal bruke en av våre
                nettbutikker.
              </P>
            </Section>

            <Section heading="Analyse- og tredjepartsverktøy">
              <P>
                Vi benytter programmer for å samle inn informasjon om hvordan våre tjenester blir
                brukt. Statistikk om brukere og trafikk blir som oftest brukt og anvendt i
                aggregert form, slik at ikke statistikken inneholder noen form for informasjon som
                kan knyttes direkte til deg som en identifisert person. Informasjon om bruk av
                produktene kobles likevel med personopplysninger i enkelte sammenhenger for å kunne
                gi deg som bruker god kundeservice og målrettet kommunikasjon.
              </P>
              <H3>Helt Opplagt bruker følgende cookies</H3>
              <ul className="space-y-2">
                {["Google Analytics", "Google Ads", "Google Tag Manager", "Facebook piksel", "APSIS"].map(
                  (name) => (
                    <li key={name} className="flex items-center gap-3 text-[16px] leading-[1.75] text-navy/75 lg:text-[17px]">
                      <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      {name}
                    </li>
                  )
                )}
              </ul>
            </Section>

            <Section heading="Endringer i personvernerklæringen">
              <P>
                Vår personvernerklæring vil oppdateres fortløpende i henhold til gjeldende
                regelverk. En elektronisk lesbar personvernerklæring vil til enhver tid forefinnes
                på våre hjemmesider.
              </P>
            </Section>

            <Section heading="Kontaktinformasjon">
              <P>
                Dersom du har spørsmål om vår personvernerklæring, kan du kontakte oss på:
              </P>
              <P>
                E-post:{" "}
                <a href="mailto:Bli@HeltOpplagt.no" className={LINK}>
                  Bli@HeltOpplagt.no
                </a>{" "}
                eller telefon:{" "}
                <a href="tel:+4702346" className={LINK}>
                  0 23 46
                </a>
              </P>
            </Section>
          </div>
        </div>
      </article>
    </div>
  );
}

const LINK = "font-semibold text-brand underline-offset-4 hover:underline";

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mb-10 lg:mb-12">
      <h2 className="mb-4 font-lato text-[22px] font-bold leading-snug text-navy sm:text-[24px]">
        {heading}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 text-[17px] font-semibold leading-snug text-navy">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-[16px] leading-[1.75] text-navy/75 lg:text-[17px]">{children}</p>;
}
