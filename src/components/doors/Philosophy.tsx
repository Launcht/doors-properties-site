import React from 'react';
import Reveal from './Reveal';
import { BrandName } from './Wordmark';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="bg-[#F8F6F3] py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-24 sm:mb-32">
            <p className="text-[#C9A961] text-[11px] tracking-[0.3em] uppercase mb-7 flex items-center gap-2">
              The <BrandName tone="gold" className="!h-[1.35em]" /> Approach
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2C2C2C] font-light leading-[1.2]">
              Every property opens somewhere. The question is how.
            </h2>
            <p className="text-[#2C2C2C]/70 text-base sm:text-lg font-light leading-relaxed mt-8">
              Private, limited or open. The right answer depends on the property and on what you are
              trying to achieve, so we work it out with you before anything begins - what each route
              reaches, what it asks of your privacy, and what it is likely to do to the result.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 sm:gap-16">
          {[
            {
              n: '01',
              title: 'Informed Exposure',
              body: 'You decide how much of your life goes on show, knowing what each choice is likely to reach and what it is likely to cost. Agreed before anything begins, written down, and reviewed.',
            },
            {
              n: '02',
              title: 'A Considered Collection',
              body: 'A small number of homes, each taken because we can genuinely add something. Some are represented privately. Others are marketed openly and well. Quality over quantity, always.',
            },
            {
              n: '03',
              title: 'Advisory, Not Sales',
              body: 'Counsel you can act on: honest, numerate, and grounded in this stretch of coast. Given straight, including on the days the straight answer costs us the mandate.',
            },
          ].map((item, i) => (
            <Reveal key={item.n} delay={i * 120}>
              <div className="text-center md:text-left">
                <span className="font-serif text-[#C9A961] text-2xl">{item.n}</span>
                <h3 className="font-serif text-2xl text-[#2C2C2C] mt-4 mb-4">{item.title}</h3>
                <p className="text-[#2C2C2C]/70 text-[15px] font-light leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
