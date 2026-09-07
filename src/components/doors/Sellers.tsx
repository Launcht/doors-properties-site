import React from 'react';
import { SELLERS_IMG } from '@/lib/doorsData';
import Reveal from './Reveal';
import Keyhole from './Keyhole';

interface Props {
  onSeller: () => void;
}

const assurances = [
  { t: 'Three routes, and you choose', d: 'Private, limited or open. Each one reaches a different audience and costs you a different amount of privacy. We set out both before you decide, rather than defaulting to whichever suits us.' },
  { t: 'Your privacy constraints, written down', d: 'Whatever you will not have published - your address, your photographs, the fact of the sale itself - is recorded at the outset and holds for the length of the mandate.' },
  { t: 'What we will actually do, agreed', d: 'The marketing you are getting is agreed in writing before it starts. No vague promise of exposure, and no quiet decision later to do less of it.' },
  { t: 'A date to review it', d: 'We set a point to look at whether the approach is working and to change it if it is not. A route chosen in March is not automatically still right in June.' },
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
              The right exposure is never assumed.
            </h2>
            <p className="text-[#F8F6F3]/65 text-base font-light leading-relaxed">
              An exceptional home deserves judgement before it deserves exposure. Some sales are best
              handled privately. Others deserve the widest audience the property can hold. We work out
              which with you, agree it in writing, and then do it properly.
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
                Enquire about representation
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
