import React from 'react';
import Reveal from './Reveal';
import { BrandName } from './Wordmark';

/**
 * "Our Approach" - an impersonal, faceless statement of the DOORS philosophy.
 * Per client direction (25/06/2026) the website stays clinical and shows no
 * named founder or photograph; the front-of-house treatment is handled
 * separately. No first-person name or image is used here.
 */
const Founder: React.FC = () => {
  return (
    <section id="founder" className="bg-[#F8F6F3] py-28 sm:py-40">
      <div className="max-w-[820px] mx-auto px-6 sm:px-10 text-center">
        <Reveal>
          <p className="text-[#C9A961] text-[11px] tracking-[0.3em] uppercase mb-6">Our Approach</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2C2C] font-light leading-[1.15] mb-8">
            Counselled personally, start to finish.
          </h2>
          <div className="space-y-5 text-[#2C2C2C]/70 text-[15px] sm:text-base font-light leading-relaxed">
            <p>
              <BrandName /> began with a simple conviction: that the owner of an exceptional home should
              be the one who decides how it meets its market, and should be given everything they need to
              decide it well.
            </p>
            <p>
              We keep the circle small on purpose. We would rather know a handful of owners and a handful of
              buyers well than take on more than we can represent properly. Every conversation is held in
              confidence, and every number is honest.
            </p>
            <p>
              If you are relocating within South Africa, semigrating to the Garden Route, or considering a
              sale, we would be glad to talk. No obligation, and nothing made public without your say-so.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Founder;
