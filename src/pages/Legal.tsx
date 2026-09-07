import React from 'react';
import { useSeo } from '@/lib/seo';
import { Link } from 'react-router-dom';
import { Wordmark, BrandName } from '@/components/doors/Wordmark';
import { resetConsent } from '@/lib/consent';

/**
 * Privacy, POPIA and legal.
 *
 * Rewritten 07/09/2026. Chris Dreyer asked for "the privacy notice, data
 * handling and provider arrangements reviewed" and for a cookie policy that can
 * be accepted, rejected or partially allowed before publication.
 *
 * The old page was four short paragraphs and named no cookie, no processor and
 * no cross-border transfer, while the site was in fact storing a sign-in
 * session, running a database in London and fetching fonts from Google. Every
 * statement below was checked against what this build actually does, and the
 * rule that keeps it honest is simple: if the site starts loading or sending
 * something new, this page changes in the same commit.
 */
const Legal: React.FC = () => {
  useSeo({ title: 'Privacy, POPIA and Legal | DOORS', description: 'How DOORS handles your information under POPIA, the cookies this site sets, who processes your data, our PPRA registration and Fidelity Fund Certificate, and the terms of using this site.', path: '/legal' });

  return (
    <div className="min-h-screen bg-[#F8F6F3] text-[#2C2C2C]">
      <header className="border-b border-[#2C2C2C]/10">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 py-6 flex items-center justify-between">
          <Link to="/" aria-label="DOORS home"><Wordmark tone="onyx" size="md" /></Link>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A961]">Privacy &amp; Legal</span>
        </div>
      </header>

      <div className="max-w-[760px] mx-auto px-6 sm:px-10 py-20">
        <h1 className="font-serif text-5xl font-light mb-3">Privacy &amp; Legal</h1>
        <p className="text-[#2C2C2C]/70 text-sm mb-14">
          Doors (Pty) Ltd, George, Western Cape. Last reviewed 7 September 2026.
        </p>

        <div className="space-y-12 text-[#2C2C2C]/65 text-[15px] font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-3">What we collect, and why</h2>
            <p>
              We collect only what we need to advise you properly: your name, your contact details,
              and what you are looking for or considering. If you register, that includes the areas,
              budget band and priorities you tell us about, so we can match you to the right homes
              rather than send you all of them.
            </p>
            <p className="mt-4">
              We use it to reply to you, to introduce suitable homes or buyers, and to stay in touch
              about matters relevant to you. We do not sell it, and we do not share it with anyone
              for their marketing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-3">What a seller controls</h2>
            <p>
              How a property is brought to market is agreed with its owner before anything begins:
              private, limited or open. Where an owner has asked for a restricted mandate, the
              address, the photographs and often the fact of the sale itself are held back, and any
              privacy constraint they set is recorded for the length of the mandate. Where a
              property is openly marketed, it is marketed properly. Neither route changes how we
              treat the personal information behind it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-3">Cookies and what this site stores</h2>
            <p>
              This site runs no advertising scripts, sets no advertising cookies and has no
              analytics tag of any kind. It also makes no request to any other company while you
              read it. The brand fonts are served from this site rather than from Google, which is
              a deliberate choice, not an accident of the build.
            </p>
            <ul className="mt-4 space-y-3 list-none">
              <li>
                <strong className="text-[#2C2C2C]/85 font-normal">Strictly necessary.</strong> Your
                sign-in session, if you have an account for the portal or the studio, and the record
                of your cookie choice. Neither can be switched off without breaking sign-in.
              </li>
              <li>
                <strong className="text-[#2C2C2C]/85 font-normal">Preferences.</strong> A display
                setting remembered between visits. Off unless you allow it, and it never leaves your
                own device.
              </li>
              <li>
                <strong className="text-[#2C2C2C]/85 font-normal">Measurement.</strong> None at
                present. The choice exists so that if we ever add a way of counting visits, it runs
                only for people who have already agreed to it.
              </li>
            </ul>
            <p className="mt-5">
              <button
                onClick={resetConsent}
                className="text-[#2C2C2C] border-b border-[#C9A961] pb-0.5 hover:text-[#C9A961] transition-colors"
              >
                Change your cookie choices
              </button>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-3">Who else handles your information</h2>
            <p>
              We use a small number of service providers to run this site, and they process
              information only on our instruction:
            </p>
            <ul className="mt-4 space-y-3 list-none">
              <li>
                <strong className="text-[#2C2C2C]/85 font-normal">Supabase</strong> holds the
                registration and enquiry records and the accounts behind the portal and the studio.
                The database is hosted in the United Kingdom, so information you give us is stored
                outside South Africa.
              </li>
              <li>
                <strong className="text-[#2C2C2C]/85 font-normal">GitHub Pages</strong> serves these
                pages. Like any web host it records the request, including the IP address it was
                made from.
              </li>
              <li>
                <strong className="text-[#2C2C2C]/85 font-normal">Nobody else.</strong> The
                photography, the fonts and everything else you see are served from this site itself.
              </li>
            </ul>
            <p className="mt-4">
              Where a sale involves exchange control, tax or cross-border structuring, that work is
              done by your own advisors or by a specialist we introduce you to, not by <BrandName />.
              We will always tell you who is doing what.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-3">Your rights under POPIA</h2>
            <p>
              You may ask what we hold about you, ask us to correct it, ask us to delete it, or
              withdraw your consent to being contacted, at any time and at no cost. Write to{' '}
              <a href="mailto:admin@doors-properties.com" className="text-[#2C2C2C] border-b border-[#C9A961] pb-0.5 hover:text-[#C9A961] transition-colors">
                admin@doors-properties.com
              </a>{' '}
              and we will act on it. If you are not satisfied with how we have handled a request,
              you may complain to the Information Regulator of South Africa.
            </p>
            <p className="mt-4">
              We keep registration and enquiry records for as long as you are someone we might
              usefully help, and we remove them on request. Records we are required by law to keep,
              including those under the Financial Intelligence Centre Act, are kept for the period
              the law requires.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-3">Prices on this site</h2>
            <p>
              Where a price appears publicly it is shown as a band rather than an exact figure. Any
              euro amount beside a rand figure is an indicative conversion for international buyers,
              calculated at a fixed rate recorded in the site and not updated daily. It is not a
              price, and nothing on this site is an offer.
            </p>
            <p className="mt-4">
              Homes marked as an architectural showcase are illustrative. They are not available to
              view or to buy, and they are shown to demonstrate the standard of work.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-3">The entity</h2>
            <p>
              The brand DOORS is operated by Doors (Pty) Ltd, a private company registered in South
              Africa, trading as DOORS Properties, based in George and working the Garden Route
              corridor from Mossel Bay through Knysna to Plettenberg Bay.
            </p>
            <p className="mt-4">
              Doors (Pty) Ltd is registered with the Property Practitioners Regulatory Authority and
              holds Fidelity Fund Certificate 202614020700000. C Dreyer is the responsible
              practitioner.
            </p>
          </section>
        </div>

        <Link to="/" className="inline-block mt-16 text-xs tracking-[0.2em] uppercase border-b border-[#C9A961] pb-1 hover:text-[#C9A961]">
          Return home
        </Link>
      </div>
    </div>
  );
};

export default Legal;
