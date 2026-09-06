import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Shared service card: HD image, centered content, arrow that flashes on hover
const ServiceCard = ({ s }) => {
  const navigate = useNavigate();
  const Icon = s.icon;
  return (
    <button
      onClick={() => navigate(`/services/${s.id}`)}
      className="group text-center bg-white rounded-[22px] border border-black/8 overflow-hidden hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(30,72,255,0.14)] transition-all duration-300"
      data-testid={`service-card-${s.id}`}
    >
      <div className="relative h-36 overflow-hidden">
        <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent"></div>
        <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl ${s.tile} flex items-center justify-center shadow-lg ring-4 ring-white`}>
          <Icon size={22} strokeWidth={1.9} />
        </div>
      </div>
      <div className="px-5 pt-9 pb-6">
        <h3 className="font-display font-bold text-ink text-[17px] mb-2 group-hover:text-brand-600 transition-colors">{s.title}</h3>
        <p className="text-ink/60 text-[13.5px] leading-relaxed mb-4 line-clamp-3">{s.description}</p>
        <span className="inline-flex items-center gap-1.5 text-brand-600 font-bold text-sm group-hover:animate-flash">
          Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
};

export default ServiceCard;
