import React from 'react';
import { FileWarning, Inbox, Clock, Database, Workflow, ArrowRight } from 'lucide-react';

const pains = [
  { icon: Inbox, text: 'Digging through overflowing inboxes and routing support messages by hand.' },
  { icon: FileWarning, text: 'Manually sorting heavy documentation, invoices, and contracts.' },
  { icon: Clock, text: 'Slow response times while requests sit in a queue.' },
  { icon: Database, text: 'Repetitive data entry that never actually ends.' },
];

const fixes = [
  { text: 'Process unstructured documents automatically — parsed, tagged, and filed.' },
  { text: 'Answer routine communications with accurate, on-brand drafts.' },
  { text: 'Route complex tasks to the right person, instantly.' },
  { text: 'Sync clean data into the tools your team already uses.' },
];

const Problem = () => {
  return (
    <section id="problem" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-600 font-bold tracking-[0.18em] text-xs uppercase">The core problem we solve</span>
          <h2 className="font-display font-bold text-ink text-4xl lg:text-5xl mt-4 leading-tight">
            Your best people are stuck doing work software should handle.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* The bottleneck */}
          <div className="rounded-[28px] border border-black/8 bg-[#FAFAFA] p-8 lg:p-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-ink/50 mb-6">The manual bottleneck</span>
            <p className="text-ink text-xl font-display font-semibold leading-snug mb-8">
              Your team spends hours every week on friction that adds zero value.
            </p>
            <ul className="space-y-4">
              {pains.map((p, i) => {
                const Icon = p.icon;
                return (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="mt-0.5 w-9 h-9 rounded-xl bg-white border border-black/8 flex items-center justify-center text-ink/60 flex-shrink-0">
                      <Icon size={18} />
                    </span>
                    <span className="text-ink/70 leading-relaxed">{p.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* The resolution */}
          <div className="relative rounded-[28px] bg-ink p-8 lg:p-10 overflow-hidden">
            <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-brand-600/25 blur-[90px] pointer-events-none"></div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400 mb-6">
                <Workflow size={15} /> The AI resolution
              </span>
              <p className="text-white text-xl font-display font-semibold leading-snug mb-8">
                We replace manual friction with precision. Intelligent systems, built for your operation.
              </p>
              <ul className="space-y-4">
                {fixes.map((f, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="mt-0.5 w-9 h-9 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 flex-shrink-0">
                      <ArrowRight size={16} />
                    </span>
                    <span className="text-white/75 leading-relaxed">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
