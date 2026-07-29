import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BedDouble,
  Binoculars,
  BriefcaseBusiness,
  Building2,
  Bus,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Luggage,
  MapPin,
  Medal,
  Rocket,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {
  ASSET,
  Gold,
  IconFeature,
  PageHero,
  PartnerMark,
  Photo,
  PlanePath,
  SectionTitle,
  Stat,
} from '@/components/travel/Shared';

type ProgramCard = {
  icon: LucideIcon;
  title: string;
  copy: string;
  image: string;
  position?: string;
};

const micePrograms: ProgramCard[] = [
  {
    icon: BriefcaseBusiness,
    title: 'Corporate Meetings',
    copy: 'Professional settings and seamless support for productive meetings of any size.',
    image: 'services-hero.jpg',
  },
  {
    icon: Building2,
    title: 'Conferences',
    copy: 'End-to-end conference management with world-class venues and services.',
    image: 'mice-hero.jpg',
  },
  {
    icon: Medal,
    title: 'Incentives',
    copy: 'Reward, motivate and inspire your teams with unique island experiences.',
    image: 'sunset.jpg',
  },
  {
    icon: Rocket,
    title: 'Product Launches',
    copy: 'Make a lasting impression with creative launches and flawless execution.',
    image: 'nightlife.jpg',
  },
  {
    icon: Users,
    title: 'Team Building',
    copy: 'Engaging activities that strengthen connections and build stronger teams.',
    image: 'local-life.jpg',
  },
];

const groupPrograms: ProgramCard[] = [
  {
    icon: GraduationCap,
    title: 'Educational Tours',
    copy: 'Enriching educational experiences with expert guides and tailored itineraries.',
    image: 'acropolis.jpg',
  },
  {
    icon: Binoculars,
    title: 'Special Interest Groups',
    copy: 'Custom programs for passion-driven groups: photography, wellness, history and more.',
    image: 'butterflies-entry.jpg',
  },
  {
    icon: Luggage,
    title: 'Leisure Groups',
    copy: 'Relaxed group getaways with carefully curated itineraries and local touches.',
    image: 'sailing.jpg',
  },
  {
    icon: Landmark,
    title: 'Cultural Programs',
    copy: 'Immerse your group in the culture, traditions and authentic flavors of the islands.',
    image: 'old-town.jpg',
  },
];

const organizerFeatures = [
  { icon: Landmark, title: 'Venue Sourcing', copy: 'Access to the best venues across Rhodes & Kos.' },
  { icon: BedDouble, title: 'Accommodation', copy: 'Carefully selected hotels & resorts for maximum comfort.' },
  { icon: Bus, title: 'Logistics & Planning', copy: 'End-to-end planning with attention to every detail.' },
  { icon: Bus, title: 'Transfers', copy: 'Reliable, comfortable and on-time ground transport.' },
  { icon: Users, title: 'On-site Coordination', copy: 'Dedicated support team throughout your event.' },
  { icon: MapPin, title: 'Local Expertise', copy: 'Deep destination knowledge and trusted local partnerships.' },
];

const moments = [
  ['services-hero.jpg', 'A fully prepared conference room'],
  ['about-hero.jpg', 'Business guests connecting in Rhodes'],
  ['mice-hero.jpg', 'An outdoor sunset dinner'],
  ['marina.jpg', 'Island-hopping boats in the harbour'],
  ['acropolis.jpg', 'Ancient sites at sunset'],
  ['nightlife.jpg', 'A memorable evening event'],
];

function ProgramCard({ icon: Icon, title, copy, image, position }: ProgramCard) {
  return (
    <article className="mice-page__program-card">
      <div className="mice-page__program-photo">
        <Photo
          src={`${ASSET}/${image}`}
          alt={title}
          className={position ? `mice-page__photo--${position}` : ''}
        />
      </div>
      <div className="mice-page__program-icon"><Icon aria-hidden="true" /></div>
      <div className="mice-page__program-copy">
        <h3>{title}</h3>
        <p>{copy}</p>
        <Link to="/contact">LEARN MORE <ArrowRight aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

export default function MiceGroupsPage() {
  return (
    <div className="mice-page">
        <PageHero
          className="mice-page__hero"
          image={`${ASSET}/mice-hero.jpg`}
          breadcrumb="MICE & Groups"
          title={<><Gold>MICE</Gold> &amp; Groups</>}
          description={(
            <>
              Inspiring meetings. Unforgettable experiences.<br />
              We create seamless events and group journeys<br />
              in Rhodes &amp; Kos.
            </>
          )}
        />

        <div className="mice-page__program-shell shell">
          <section className="mice-page__program-section mice-page__program-section--mice" aria-labelledby="mice-program-title">
            <div className="mice-page__program-heading">
              <div className="mice-page__heading-icon"><Users aria-hidden="true" /></div>
              <div>
                <h2 id="mice-program-title">MICE</h2>
                <p>Elevate your business events with bespoke solutions designed for<br />productivity, impact and unforgettable experiences.</p>
              </div>
              <PlanePath />
            </div>
            <div className="mice-page__program-grid mice-page__program-grid--five">
              {micePrograms.map((program) => <ProgramCard key={program.title} {...program} />)}
            </div>
          </section>

          <section className="mice-page__program-section" aria-labelledby="groups-program-title">
            <div className="mice-page__program-heading">
              <div className="mice-page__heading-icon"><Users aria-hidden="true" /></div>
              <div>
                <h2 id="groups-program-title">GROUPS</h2>
                <p>From educational journeys to leisure escapes,<br />we craft meaningful group travel experiences.</p>
              </div>
              <PlanePath />
            </div>
            <div className="mice-page__program-grid mice-page__program-grid--four">
              {groupPrograms.map((program) => <ProgramCard key={program.title} {...program} />)}
            </div>
          </section>

          <section className="mice-page__organizers" aria-labelledby="organizers-title">
            <SectionTitle><span id="organizers-title">Why Organizers Choose Us</span></SectionTitle>
            <div className="mice-page__organizer-grid">
              {organizerFeatures.map(({ icon, title, copy }) => (
                <IconFeature key={title} icon={icon} title={title}>{copy}</IconFeature>
              ))}
            </div>
          </section>

          <section className="mice-page__moments" aria-labelledby="moments-title">
            <SectionTitle><span id="moments-title">Moments that Matter</span></SectionTitle>
            <div className="mice-page__moment-grid">
              {moments.map(([image, alt]) => (
                <div className="mice-page__moment" key={image}>
                  <Photo src={`${ASSET}/${image}`} alt={alt} />
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mice-page__proof shell" aria-label="Our experience and accreditations">
          <div className="mice-page__proof-stats">
            <Stat value="500+" label="Events Delivered" />
            <Stat value="10K+" label="Happy Participants" />
            <Stat value="15+" label="Years of Experience" />
            <Stat value="30+" label="Destination Partners" />
            <Stat value="24/7" label="On-site Support" />
          </div>
          <div className="mice-page__proof-partners">
            <span>Trusted by</span>
            <PartnerMark kind="iata" compact />
            <PartnerMark kind="dmc" compact />
          </div>
        </section>

        <section className="mice-page__request shell">
          <PlanePath />
          <div className="mice-page__request-copy">
            <h2>Have a special request?</h2>
            <p>We create tailor-made group experiences.</p>
          </div>
          <div className="mice-page__request-benefits">
            <span><CheckCircle2 aria-hidden="true" /> Custom Itineraries</span>
            <span><CheckCircle2 aria-hidden="true" /> Flexible Solutions</span>
            <span><CheckCircle2 aria-hidden="true" /> Dedicated Support</span>
          </div>
          <Link className="button button--gold" to="/contact">ENQUIRE NOW</Link>
        </section>
    </div>
  );
}
