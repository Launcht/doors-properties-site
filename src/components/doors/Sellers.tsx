import React from 'react';
import { SELLERS_IMG } from '@/lib/doorsData';
import Reveal from './Reveal';
import Keyhole from './Keyhole';

interface Props {
  onSeller: () => void;
}

const assurances = [
  { t: 'The route is yours to choose', d: 'A private introduction to a matched few, a selective release, or a full open-market campaign. Whichever serves the property and serves you.' },
  { t: 'You see the trade-off first', d: 'What each route reaches, what it asks of your privacy, and what it is likely to do to price and to time on market. Before you commit, not afterwards.' },
  { t: 'Your privacy, written down', d: 'Whatever you will not have published - your address, your photographs, the fact of the sale itself - is recorded at the outset and holds for the length of the mandate.' },
  { t: 'The plan in writing, and a date to review it', d: 'You know exactly what marketing you have, and we set a point to look at how it is working and change the approach if the market says we should.' },
  { t: 'The same standard either way', d: 'An openly marketed home gets the same care, the same presentation and the same reporting as a private one. Neither is the lesser mandate.' },
];

const Sellers: React.FC<Props> = ({ onSeller }) => {
  return (
    <section id="sellers" className="bg-[#2C2C2C] py-28 sm:py-40">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <p className="text-[#C9A961] text-[11px] tracking-[0.3em] uppercase mb-6">For Sellers</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#F8F6F3] font-light leading-[1.15] mb-8">
              A considered route to the strongest sale your home can reach.
            </h2>
            <p className="text-[#F8F6F3]/65 text-base font-light leading-relaxed">
              You should not have to hand your home to the market and hope. Some sales are best handled
              privately; others deserve the widest audience the property can hold. We work out which with
              you, agree it in writing before anything begins, and represent it to that standard until it
              is sold.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <div>
              <div className="space-y-7">
                {assurances.map((a) => (
                  <div key={a.t} className="flex gap-5">
                    <Keyhole className="mt-1.5 w-[9px] h-5 text-[#C9A961] shrink-0" />
                    <div>
                      <h3 className="text-[#F8F6F3] font-serif text-lg mb-1">{a.t}</h3>
                      <p className="text-[#F8F6F3]/55 text-sm font-light leading-relaxed">{a.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={onSeller}
                className="mt-12 border border-[#C9A961] text-[#C9A961] px-9 py-4 text-xs tracking-[0.22em] uppercase hover:bg-[#C9A961] hover:text-[#2C2C2C] transition-colors"
              >
                Speak to us about your home
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* Cut to the shape of the DOORS arch - straight sides, semicircular
                head - with a hairline gold edge, so the image reads as a doorway
                onto the home rather than a rectangle dropped on the panel. The
                arch springs from half the image width, which is the proportion of
                the arch in the brand mark. */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full border border-[#C9A961]/45">
              <img
                src={SELLERS_IMG}
                width={1100}
                height={1473}
                loading="lazy"
                decoding="async"
                alt="A private Garden Route home at dusk, glimpsed through indigenous trees from the end of its drive"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Sellers;
