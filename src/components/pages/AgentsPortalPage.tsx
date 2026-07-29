import { FormEvent, useState } from 'react';
import {
  BadgeEuro,
  BarChart3,
  Bolt,
  CalendarDays,
  Eye,
  EyeOff,
  Headphones,
  LockKeyhole,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
  Tag,
  TicketCheck,
  UserRound,
  Users,
} from 'lucide-react';
import {
  ASSET,
  Gold,
  PageHero,
  PartnerMark,
  PlanePath,
  Stat,
} from '@/components/travel/Shared';
import '@/styles/pages-experience-contact-agents.css';

const welcomeBenefits = [
  [CalendarDays, 'Real-Time Availability', 'Instant access to up-to-date availability across our network.'],
  [Headphones, 'Dedicated Support', 'Experienced team ready to assist you at every step.'],
  [Tag, 'Best Rates & Offers', 'Exclusive agent rates and special promotions just for you.'],
  [Users, 'Tailor-Made Requests', 'Create personalized itineraries for your clients.'],
  [BadgeEuro, 'Easy Booking Process', 'User-friendly platform for fast and hassle-free reservations.'],
  [Bolt, 'Fast Confirmations', 'Quick response and confirmed bookings in real time.'],
] as const;

const agentBenefits = [
  [BadgeEuro, 'Exclusive Partner Rates', 'Special pricing and private offers for our partners.'],
  [Sparkles, 'Wide Product Portfolio', 'Hotels, transfers, excursions, & more in one place.'],
  [Headphones, '24/7 Support', 'We’re here to help you, whenever you need us.'],
  [ShieldCheck, 'Secure & Reliable', 'Safe transactions and data protection you can trust.'],
  [Megaphone, 'Marketing Support', 'Access brochures, images & materials to grow your business.'],
  [BarChart3, 'Grow Your Business', 'Together, we create unforgettable travel experiences.'],
] as const;

const steps = [
  [UserRound, 'Login to Your Account', 'Access your personalized dashboard with your secure credentials.'],
  [Search, 'Search & Book', 'Check real-time availability, compare options and make a reservation.'],
  [TicketCheck, 'Get Confirmation', 'Receive instant confirmation and all the details you need.'],
] as const;

export default function AgentsPortalPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('');

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Demo login received. A live partner account is required to continue.');
  };

  return (
    <div className="site-page agents-page">
        <PageHero
          className="agents-hero"
          title={<><Gold>Agents</Gold> Portal</>}
          breadcrumb="Agents Portal"
          image={`${ASSET}/agents-hero.jpg`}
        />

        <div className="shell agents-content">
          <section className="agents-welcome">
            <div className="agents-welcome__copy">
              <div className="agents-heading-row">
                <div>
                  <h2>Welcome Partner!</h2>
                  <p>Your dedicated gateway to seamless travel solutions<br />in Greece, Rhodes, Kos &amp; beyond.</p>
                  <p>Access exclusive rates, real-time availability and<br />professional support – all in one place.</p>
                </div>
                <PlanePath />
              </div>

              <div className="agents-welcome-benefits">
                {welcomeBenefits.map(([Icon, title, copy]) => (
                  <article key={title}>
                    <span><Icon /></span>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                  </article>
                ))}
              </div>
            </div>

            <section className="agent-login card" aria-labelledby="agent-login-title">
              <span className="agent-login__lock"><LockKeyhole /></span>
              <h2 id="agent-login-title">Agent Login</h2>
              <form onSubmit={handleLogin}>
                <label className="agent-login__field">
                  <UserRound />
                  <input aria-label="Username" required placeholder="Username" autoComplete="username" />
                </label>
                <label className="agent-login__field">
                  <LockKeyhole />
                  <input
                    aria-label="Password"
                    required
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </label>
                <div className="agent-login__options">
                  <label><input type="checkbox" /> Remember me</label>
                  <button type="button" onClick={() => setStatus('Please contact our team to reset your password.')}>Forgot password?</button>
                </div>
                <button className="button button--navy" type="submit">LOGIN</button>
                <div className="agent-login__or"><span />or<span /></div>
                <p>Don’t have access yet?</p>
                <button
                  className="button button--outline"
                  type="button"
                  onClick={() => setStatus('Your access request has been noted. Our team will contact you shortly.')}
                >
                  REQUEST ACCESS
                </button>
                {status && <p className="form-success" role="status">{status}</p>}
              </form>
            </section>
          </section>

          <section className="agent-benefit-strip card">
            {agentBenefits.map(([Icon, title, copy]) => (
              <article key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </section>

          <section className="agent-steps">
            <h2><span />Simple. Fast &amp; Reliable<span /></h2>
            <div className="agent-steps__grid">
              {steps.map(([Icon, title, copy], index) => (
                <article key={title}>
                  <strong>{index + 1}</strong>
                  <Icon />
                  {index < steps.length - 1 && <PlanePath />}
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="agent-proof-strip">
            <div className="agent-proof-strip__partners">
              <PartnerMark kind="dmc" />
              <PartnerMark kind="iata" />
            </div>
            <div className="agent-proof-strip__stats">
              <Stat value="15+" label="Years of Experience" />
              <Stat value="10K+" label="Happy Clients" />
              <Stat value="500+" label="Events & Groups" />
              <Stat value="24/7" label="Online Support" />
            </div>
          </section>
        </div>
    </div>
  );
}
