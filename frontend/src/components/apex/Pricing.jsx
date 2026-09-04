import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    id: 'pilot',
    formValue: 'Pilot ($4,500)',
    name: 'The Document & Communication Pilot',
    price: '$4,500',
    cadence: 'fixed, upfront',
    tagline: 'An immediate, high-ROI fix for your worst administrative headache.',
    features: [
      'End-to-end automation of one core high-volume bottleneck',
      'Integration with your existing communication or document tools',
      'Full deployment, testing, and team handover',
    ],
    highlight: false,
  },
  {
    id: 'full',
    formValue: 'Full Pipeline ($12,000)',
    name: 'The Full Operational Pipeline',
    price: '$12,000',
    cadence: 'fixed, upfront',
    tagline: 'Systematically clear documentation and communication backlogs across departments.',
    features: [
      'Multi-system integration: inbound calls, emails & document pipelines',
      "Advanced custom AI logic for your proprietary data & templates",
      'Comprehensive deployment, security checks & staff training',
    ],
    highlight: true,
    badge: 'Recommended',
  },
  {
    id: 'retainer',
    formValue: 'Ongoing Retainer ($2,500/mo)',
    name: 'Ongoing Optimization & Retainer',
    price: '$2,500',
    cadence: 'per month · optional add-on',
    tagline: 'Keep your systems sharp after launch as your operation evolves.',
    features: [
      'Continuous monitoring & prompt tuning',
      'Handling API updates & new document types',
      'Expanding capabilities + priority system support',
    ],
    highlight: false,
  },
];

const Pricing = ({ onChoose }) => {
  return (
    <section id="pricing" className="scroll-mt-24 bg-[#FAFAFA] py-24 lg:py-32 border-y border-black/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-brand-600 font-bold tracking-[0.18em] text-xs uppercase">Pricing</span>
          <h2 className="font-display font-bold text-ink text-4xl lg:text-5xl mt-4 leading-tight">
            Fixed-scope pricing. No surprises.
          </h2>
          <p className="text-ink/60 text-lg mt-5 leading-relaxed">
            Every engagement is priced upfront before we start. You know the number, the scope, and the outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => {
            const dark = p.highlight;
            return (
              <div
                key={p.id}
                className={`relative flex flex-col rounded-[28px] p-8 lg:p-9 transition-transform duration-300 ${
                  dark
                    ? 'bg-ink text-white shadow-[0_30px_70px_rgba(14,14,18,0.35)] lg:-translate-y-3'
                    : 'bg-white text-ink border border-black/8 hover:-translate-y-1'
                }`}
                data-testid={`plan-${p.id}`}
              >
                {p.badge && (
                  <span className="absolute top-6 right-6 bg-brand-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}

                <h3 className={`font-display font-bold text-xl leading-snug pr-16 ${dark ? 'text-white' : 'text-ink'}`}>
                  {p.name}
                </h3>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display font-bold text-5xl tracking-tight">{p.price}</span>
                </div>
                <span className={`text-sm font-medium mt-1 ${dark ? 'text-white/50' : 'text-ink/50'}`}>{p.cadence}</span>

                <p className={`mt-5 leading-relaxed ${dark ? 'text-white/70' : 'text-ink/65'}`}>{p.tagline}</p>

                <ul className="mt-7 space-y-3.5 flex-grow">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${dark ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'}`}>
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className={`text-[15px] leading-snug ${dark ? 'text-white/85' : 'text-ink/75'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onChoose(p.formValue)}
                  className={`mt-9 w-full flex items-center justify-center gap-2 rounded-full py-3.5 font-bold text-[15px] group transition-all duration-300 ${
                    dark ? 'bg-white text-ink hover:bg-brand-600 hover:text-white' : 'bg-ink text-white hover:bg-brand-600'
                  }`}
                  data-testid={`plan-cta-${p.id}`}
                >
                  Ask about this package
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 duration-300" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
