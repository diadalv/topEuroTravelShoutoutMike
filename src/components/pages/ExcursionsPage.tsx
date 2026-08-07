import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExcursionCatalogService, type ExcursionCatalogRecord } from '@/integrations/excursions';
import { CalendarDays, Clock3, MapPin, UsersRound } from 'lucide-react';
import { Gold, PageHero, PageSeo, Photo, RequestBanner, travelMedia } from '@/components/travel/Shared';

type ExcursionRecord = ExcursionCatalogRecord & Record<string, unknown>;

function richTextToText(value?: unknown) {
  if (!value) return '';
  const html = typeof value === 'string' ? value : JSON.stringify(value);
  if (typeof window === 'undefined') return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const document = new DOMParser().parseFromString(html, 'text/html');
  return (document.body.textContent || '').replace(/\s+/g, ' ').trim();
}

export default function ExcursionsPage() {
  const [records, setRecords] = useState<ExcursionRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('All');

  useEffect(() => {
    let active = true;

    ExcursionCatalogService.getAll()
      .then((result) => {
        if (active) {
          setRecords(result as ExcursionRecord[]);
        }
      })
      .catch((reason) => {
        console.error('Unable to load excursions:', reason);
        if (active) setError('Excursions are temporarily unavailable. Please try again shortly.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const languages = useMemo(
    () => ['All', ...Array.from(new Set(records.map((record) => record.language).filter(Boolean) as string[]))],
    [records],
  );

  const visibleRecords = language === 'All'
    ? records
    : records.filter((record) => record.language === language);

  return (
    <div className="excursions-list-page">
      <PageSeo title="Best Tours &amp; Excursions in Rhodes &amp; Kos | Top Euro Travel" description="Book tours and excursions in Rhodes and Kos, including boat trips, island cruises, cultural tours and authentic local experiences." />
      <PageHero
        className="excursions-list-hero"
        title={<><Gold>Tours &amp; Excursions</Gold> in Rhodes &amp; Kos</>}
        breadcrumb="Excursions"
        image={travelMedia('excursions-hero.jpg')}
        description="Carefully selected tours, cruises and authentic local experiences in Rhodes and Kos."
      />

      <section className="shell excursions-list-intro">
        <span>DISCOVER RHODES &amp; KOS</span>
        <h2>Experience Each Destination from a Unique Perspective</h2>
        <p>Discover the very best of Rhodes and Kos through carefully selected tours, cruises and authentic local experiences. From cultural discoveries and island cruises to adventure activities and unforgettable days at sea, our excursions offer relaxation, culture, adventure and family-friendly activities for every traveller.</p>
      </section>

      {languages.length > 2 && (
        <nav className="shell excursions-filter" aria-label="Filter excursions by language">
          {languages.map((option) => (
            <button
              type="button"
              key={option}
              className={language === option ? 'is-active' : ''}
              aria-pressed={language === option}
              onClick={() => setLanguage(option)}
            >
              {option}
            </button>
          ))}
        </nav>
      )}

      <section className="shell excursions-list-content" aria-live="polite">
        {loading && (
          <div className="excursions-list-state">
            <span /><span /><span />
            <p>Loading excursions…</p>
          </div>
        )}

        {!loading && error && <div className="excursions-list-state"><p>{error}</p></div>}

        {!loading && !error && visibleRecords.length === 0 && (
          <div className="excursions-list-state">
            <MapPin aria-hidden="true" />
            <p>No excursions are currently available for this selection.</p>
          </div>
        )}

        {!loading && !error && visibleRecords.length > 0 && (
          <div className="excursions-card-grid">
            {visibleRecords.map((record) => {
              const description = record.shortDescription || richTextToText(record.overview);
              const price = record.adultPrice
                ? 'from €' + Number(record.adultPrice).toFixed(0)
                : record.priceLabel || 'Price on request';
              const detailUrl = '/excursions/' + record.slug;

              return (
                <article className="excursion-list-card" key={record._id}>
                  <Link className="excursion-list-card__image" to={detailUrl} aria-label={'View ' + record.title}>
                    <Photo src={record.mainImage || record.coverImage || ''} alt={record.title || 'Island excursion'} />
                    {record.tourGroup && <span>{record.tourGroup}</span>}
                  </Link>
                  <div className="excursion-list-card__body">
                    <div className="excursion-list-card__eyebrow">
                      {record.language && <span>{record.language}</span>}
                      {record.operatingDays && <span><CalendarDays aria-hidden="true" />{record.operatingDays}</span>}
                    </div>
                    <h3><Link to={detailUrl}>{record.title}</Link></h3>
                    <p>{description}</p>
                    <div className="excursion-list-card__meta">
                      <span><Clock3 aria-hidden="true" />{record.duration || 'Tour duration on request'}</span>
                      <span><UsersRound aria-hidden="true" />{record.capacity ? 'Up to ' + record.capacity + ' guests' : 'Flexible group size'}</span>
                    </div>
                    <div className="excursion-list-card__footer">
                      <strong>{price}</strong>
                      <Link className="button button--navy button--tiny" to={detailUrl}>VIEW DETAILS</Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <RequestBanner />
    </div>
  );
}
