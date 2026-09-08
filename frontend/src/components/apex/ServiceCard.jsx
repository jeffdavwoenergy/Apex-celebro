import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Full-image card: image covers the card with the title + Learn more overlaid.
// On hover the image slides to the LEFT to reveal the service preview text underneath.
// `glow` adds the always-on rainbow outline (landing page only).
const ServiceCard = ({ s, glow = false }) => {
  const navigate = useNavigate();
  const Icon = s.icon;
  return (
    <div className={`relative rounded-[24px] ${glow ? 'glossy-border ring-front' : ''}`}>
      <button
        onClick={() => navigate(`/services/${s.id}`)}
        className="group relative block overflow-hidden rounded-[24px] h-[340px] w-full text-left border border-black/8 shadow-[0_10px_40px_rgba(10,21,51,0.06)] hover:shadow-[0_24px_60px_rgba(30,72,255,0.14)] transition-shadow duration-300"
        data-testid={`service-card-${s.id}`}
      >
        {/* Base layer (revealed on hover) */}
        <div className="absolute inset-0 bg-white p-7 flex flex-col">
          <div className={`w-14 h-14 rounded-2xl ${s.tile} flex items-center justify-center mb-5`}>
            <Icon size={26} strokeWidth={1.9} />
          </div>
          <h3 className="font-display font-bold text-ink text-xl mb-3">{s.title}</h3>
          <p className="text-ink/65 leading-relaxed text-[15px] flex-grow">{s.description}</p>
          <span className="inline-flex items-center gap-1.5 text-brand-600 font-bold text-sm mt-4">
            Learn more <ArrowRight size={15} />
          </span>
        </div>

        {/* Image overlay that slides away to the left on hover */}
        <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10"></div>
          <div className="absolute inset-x-0 bottom-0 p-7">
            <h3 className="font-display font-bold text-white text-2xl mb-2 leading-tight">{s.title}</h3>
            <span className="inline-flex items-center gap-1.5 text-white/95 font-bold text-sm">
              Learn more <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ServiceCard;
