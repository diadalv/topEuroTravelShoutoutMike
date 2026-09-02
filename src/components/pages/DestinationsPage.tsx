import {
  PageHero,
  PageSeo,
  Photo,
  travelMedia,
} from "@/components/travel/Shared";
import "@/styles/destinations-core-intro.css";
import {
  ArrowRight,
  HeartHandshake,
  Landmark,
  Mountain,
  UtensilsCrossed,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";

const media = {
  hero: travelMedia("destinations-hero-v2.jpg"),
  rhodes: travelMedia("destinations-rhodes-v2.jpg"),
  kos: travelMedia("flower.jpg"),
  medievalCity: travelMedia("old-town.jpg"),
  lindos: travelMedia("home-welcome-v2.jpg"),
  culture: travelMedia("flower.jpg"),
  islandExperiences: travelMedia("sailing.jpg"),
};

type DestinationChapter = {
  id: "rhodes" | "kos";
  number: string;
  name: string;
  statement: string;
  description: string;
  highlights: readonly string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  href: string;
};

type DestinationBenefit = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

type DestinationExperience = {
  destination: "Rhodes" | "Kos";
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  href: string;
  layout: "large" | "wide" | "standard";
};

const destinations = [
  {
    id: "rhodes",
    number: "01",
    name: "Rhodes",
    statement: "History. Coastline. Timeless experiences.",
    description:
      "Rhodes is one of Greece's leading tourism destinations, renowned for its rich history, diverse landscapes and exceptional hospitality infrastructure. From the UNESCO-listed Medieval City and picturesque villages to luxury resorts and a spectacular coastline, the island offers outstanding opportunities for leisure travel, groups, events and tailor-made programmes.",
    highlights: ["Medieval City", "Lindos", "Coastline", "Events"],
    image: media.rhodes,
    imageAlt: "Aerial destination view of Rhodes and its coastline",
    imageCaption: "Rhodes · Dodecanese",
    href: "/rhodes",
  },
  {
    id: "kos",
    number: "02",
    name: "Kos",
    statement: "Beaches. Culture. Effortless island living.",
    description:
      "Kos combines beautiful beaches, rich cultural heritage and a relaxed island character. Its accessible landscape, strong hospitality infrastructure and authentic local experiences make it an ideal destination for leisure groups, incentives, events and carefully designed programmes.",
    highlights: ["Beaches", "Heritage", "Groups", "Incentives"],
    image: media.kos,
    imageAlt: "Destination view of Kos harbour and coastline",
    imageCaption: "Kos · Dodecanese",
    href: "/kos",
  },
] satisfies readonly DestinationChapter[];

const benefits = [
  {
    icon: Mountain,
    title: "Unique Landscapes",
    copy: "Diverse scenery and striking island character.",
  },
  {
    icon: Landmark,
    title: "Rich Culture",
    copy: "Heritage, history and living local traditions.",
  },
  {
    icon: Waves,
    title: "Clear Waters",
    copy: "Ideal settings for relaxation and exploration.",
  },
  {
    icon: UtensilsCrossed,
    title: "Authentic Flavours",
    copy: "Local gastronomy, traditions and wine.",
  },
  {
    icon: HeartHandshake,
    title: "Warm Hospitality",
    copy: "Genuine welcome, care and trusted support.",
  },
] satisfies readonly DestinationBenefit[];

const experiences = [
  {
    destination: "Rhodes",
    title: "Medieval City",
    copy: "Step into living history inside one of Europe’s best-preserved medieval cities.",
    image: media.medievalCity,
    imageAlt: "Atmospheric street in the Medieval City of Rhodes",
    href: "/rhodes",
    layout: "large",
  },
  {
    destination: "Rhodes",
    title: "Lindos & the Acropolis",
    copy: "Iconic views, ancient heritage and unforgettable island character.",
    image: media.lindos,
    imageAlt: "Lindos and its Acropolis overlooking the Aegean Sea",
    href: "/rhodes",
    layout: "wide",
  },
  {
    destination: "Kos",
    title: "Culture & Heritage",
    copy: "Ancient stories, local traditions and a destination shaped by history.",
    image: media.culture,
    imageAlt: "Cultural and historic destination experience in Kos",
    href: "/kos",
    layout: "standard",
  },
  {
    destination: "Kos",
    title: "Island Experiences",
    copy: "Sea, landscape and carefully curated moments across the island.",
    image: media.islandExperiences,
    imageAlt: "Sailing experience near Kos in the Aegean Sea",
    href: "/kos",
    layout: "standard",
  },
] satisfies readonly DestinationExperience[];

export default function DestinationsPage() {
  const pageRef = useRef<HTMLElement>(null);
  const experienceTouchStart = useRef<number | null>(null);
  const [activeExperience, setActiveExperience] = useState(0);
  const [isMobileExperiences, setIsMobileExperiences] = useState(false);

  useEffect(() => {
    document.body.classList.add("tet-destinations-page-active");

    const root = pageRef.current;
    if (!root) {
      return () => {
        document.body.classList.remove("tet-destinations-page-active");
      };
    }

    const items = root.querySelectorAll<HTMLElement>("[data-dest-reveal]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));

      return () => {
        document.body.classList.remove("tet-destinations-page-active");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -7% 0px",
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      document.body.classList.remove("tet-destinations-page-active");
    };
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    const syncMobileState = () => setIsMobileExperiences(mobileQuery.matches);

    syncMobileState();
    mobileQuery.addEventListener("change", syncMobileState);

    return () => mobileQuery.removeEventListener("change", syncMobileState);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isMobileExperiences || prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveExperience((current) => (current + 1) % experiences.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [isMobileExperiences]);

  return (
    <main className="tet-destinations-page" id="main-content" ref={pageRef}>
      <PageSeo
        title="Rhodes & Kos Destinations | Top Euro Travel DMC Greece"
        description="Discover Rhodes and Kos with Top Euro Travel, a trusted destination management company providing local expertise, group travel, events and tailor-made programmes across both islands."
      />

      <PageHero
        title={<>Explore Our Destinations in Greece</>}
        breadcrumb="Destinations"
        image={media.hero}
        description={
          <>Two island destinations. One trusted local DMC partner.</>
        }
      />

      <section className="tet-dest-core" aria-labelledby="tet-dest-core-title">
        <div className="tet-dest-core__inner">
          <div className="tet-dest-core__headline" data-dest-reveal>
            <p className="tet-dest-core__eyebrow">Our Core Destinations</p>

            <h2 className="tet-dest-core__title" id="tet-dest-core-title">
              <span>Two Islands.</span>
              <span>One Trusted</span>
              <span>Local Partner.</span>
            </h2>

            <div className="tet-dest-core__route">
              <span className="tet-dest-core__route-stop">
                <strong>Rhodes</strong>
              </span>

              <span className="tet-dest-core__route-track" aria-hidden="true">
                <span className="tet-dest-core__route-compass">✦</span>
              </span>

              <span className="tet-dest-core__route-stop tet-dest-core__route-stop--end">
                <strong>Kos</strong>
              </span>
            </div>
          </div>

          <div className="tet-dest-core__copy" data-dest-reveal>
            <p>
              Greece offers an extraordinary diversity of destinations,
              experiences and travel opportunities. As a destination management
              company with extensive expertise in Rhodes and Kos, Top Euro
              Travel supports tour operators, travel agencies, groups and event
              planners with reliable, tailor-made solutions across Greece.
            </p>

            <p>
              While Rhodes and Kos remain our core destinations, our experience,
              trusted network and flexible approach allow us to support a wide
              range of travel programmes, events and special projects throughout
              the country.
            </p>
          </div>
        </div>
      </section>

      <section
        className="tet-dest-chapters"
        aria-label="Top Euro Travel destination profiles"
      >
        <div className="tet-dest-chapters__container">
          {destinations.map((destination, index) => (
            <div key={destination.id}>
              <article
                className={`tet-dest-chapter${
                  index === 1 ? " tet-dest-chapter--reverse" : ""
                }`}
                id={destination.id}
                data-dest-reveal
              >
                <div className="tet-dest-chapter__media">
                  <Photo src={destination.image} alt={destination.imageAlt} />

                  <div
                    className="tet-dest-chapter__media-shade"
                    aria-hidden="true"
                  />

                  <p className="tet-dest-chapter__caption">
                    {destination.imageCaption}
                  </p>
                </div>

                <div className="tet-dest-chapter__content">
                  <div className="tet-dest-chapter__meta">
                    <span className="tet-dest-chapter__number">
                      {destination.number}
                    </span>
                  </div>

                  <h2>{destination.name}</h2>

                  <p className="tet-dest-chapter__statement">
                    {destination.statement}
                  </p>

                  <p className="tet-dest-chapter__description">
                    {destination.description}
                  </p>

                  <ul
                    className="tet-dest-chapter__highlights"
                    aria-label={`${destination.name} highlights`}
                  >
                    {destination.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <Link
                    className="tet-dest-chapter__link"
                    to={destination.href}
                  >
                    Discover {destination.name}
                    <ArrowRight
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>

              {index === 0 && (
                <div className="tet-dest-chapters__bridge">
                  <span
                    className="tet-dest-chapters__bridge-line"
                    aria-hidden="true"
                  />

                  <div className="tet-dest-chapters__bridge-copy" aria-hidden="true" />

                  <span
                    className="tet-dest-chapters__bridge-line"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        className="tet-dest-benefits"
        aria-labelledby="tet-dest-benefits-title"
      >
        <div className="tet-dest-benefits__inner">
          <div className="tet-dest-benefits__heading" data-dest-reveal>
            <p>Why Rhodes &amp; Kos</p>
            <h2 id="tet-dest-benefits-title">
              Distinct island character. One trusted standard.
            </h2>
          </div>

          <div className="tet-dest-benefits__grid">
            {benefits.map(({ icon: Icon, title, copy }, index) => (
              <article
                className="tet-dest-benefit"
                data-dest-reveal
                style={{ "--benefit-index": index } as CSSProperties}
                key={title}
              >
                <span className="tet-dest-benefit__icon" aria-hidden="true">
                  <Icon size={23} strokeWidth={1.65} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="tet-dest-experiences"
        aria-labelledby="tet-dest-experiences-title"
      >
        <div className="tet-dest-experiences__inner">
          <div className="tet-dest-experiences__heading" data-dest-reveal>
            <div>
              <p>Experiences by Destination</p>
              <h2 id="tet-dest-experiences-title">
                Curated experiences in Rhodes &amp; Kos.
              </h2>
            </div>

            <Link className="tet-dest-experiences__all" to="/excursions">
              View all experiences
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div
            className="tet-dest-experiences__grid"
            onTouchStart={(event) => {
              experienceTouchStart.current =
                event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const startX = experienceTouchStart.current;
              const endX = event.changedTouches[0]?.clientX;
              experienceTouchStart.current = null;

              if (startX === null || endX === undefined) return;

              const distance = endX - startX;
              if (Math.abs(distance) < 45) return;

              setActiveExperience((current) =>
                distance < 0
                  ? (current + 1) % experiences.length
                  : (current - 1 + experiences.length) % experiences.length,
              );
            }}
          >
            {experiences.map((experience, index) => (
              <Link
                className={`tet-dest-experience tet-dest-experience--${experience.layout}${
                  index === activeExperience ? " is-active" : ""
                }`}
                data-dest-reveal
                to={experience.href}
                key={`${experience.destination}-${experience.title}`}
                aria-hidden={
                  isMobileExperiences
                    ? index !== activeExperience
                    : undefined
                }
                tabIndex={
                  isMobileExperiences && index !== activeExperience
                    ? -1
                    : undefined
                }
              >
                <Photo src={experience.image} alt={experience.imageAlt} />

                <span
                  className="tet-dest-experience__shade"
                  aria-hidden="true"
                />

                <span className="tet-dest-experience__content">
                  <small>{experience.destination}</small>
                  <strong>{experience.title}</strong>
                  <span>{experience.copy}</span>
                </span>

                <span className="tet-dest-experience__arrow" aria-hidden="true">
                  <ArrowRight size={19} />
                </span>
              </Link>
            ))}
          </div>

          <div
            className="tet-dest-experiences__dots"
            role="group"
            aria-label="Choose a destination experience"
          >
            {experiences.map((experience, index) => (
              <button
                type="button"
                className={index === activeExperience ? "is-active" : ""}
                aria-label={`Show ${experience.title}`}
                aria-pressed={index === activeExperience}
                onClick={() => setActiveExperience(index)}
                key={experience.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="tet-dest-cta" aria-labelledby="tet-dest-cta-title">
        <div className="tet-dest-cta__inner" data-dest-reveal>
          <div>
            <p>Planning a programme?</p>
            <h2 id="tet-dest-cta-title">
              Let&apos;s design your next Rhodes or Kos programme.
            </h2>
          </div>

          <p className="tet-dest-cta__copy">
            Our local teams can help you design, coordinate and deliver every
            detail with consistency and care.
          </p>

          <Link className="tet-dest-cta__button" to="/contact">
            Talk to Our DMC Team
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
