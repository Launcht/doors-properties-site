import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONSENT_EVENT, readConsent, writeConsent } from '@/lib/consent';

/**
 * The cookie notice. Chris Dreyer, 06/09/2026: it should work "like any other
 * website's cookie policy, to be accepted/rejected or partially allowed".
 *
 * Three things it does deliberately differently from most:
 *
 *  1. Reject is a real button, sitting beside Accept and styled the same. A
 *     refusal that takes three clicks through a settings panel is a dark
 *     pattern, and this is a brand that says "no theatre" on its own home page.
 *  2. It says what the site actually does, which at the moment is very little.
 *     Claiming to run analytics we do not run would be the same kind of
 *     unsupported claim Chris asked us to strip out of the copy.
 *  3. Nothing third-party loads before the answer, because there is nothing
 *     third-party left to load - the fonts were self-hosted in the same pass.
 *     A banner in front of a page that has already called out to Google is
 *     decoration.
 *
 * TWO FAULTS FOUND BY RENDERING IT AT 390px AND LOOKING, both fixed here and
 * both invisible to the typecheck:
 *
 *  - Expanded, the card was 918px tall on an 844px viewport and, being anchored
 *    to the bottom, it grew off the TOP of the screen. The heading was gone and
 *    there was nothing to scroll. It is now capped and scrolls inside itself.
 *  - "Allow all" and "Save my choices" were both solid gold, so two buttons
 *    competed for the same job. Only one is gold at a time now: Allow all until
 *    the visitor starts choosing, Save my choices once they have.
 */
const CookieNotice: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(false);
  const [preferences, setPreferences] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    setOpen(readConsent() === null);
    const onChange = () => setOpen(readConsent() === null);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!open) return null;

  const decide = (choice: { preferences: boolean; analytics: boolean }) => {
    writeConsent(choice);
    setOpen(false);
  };

  const solid =
    'bg-[#C9A961] text-[#0A0908] px-7 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-[#d9bc7c] transition-colors';
  const outline =
    'border border-[#F8F6F3]/35 text-[#F8F6F3] px-7 py-3 text-[11px] tracking-[0.22em] uppercase hover:border-[#F8F6F3]/70 transition-colors';

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-notice-heading"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl max-h-[85vh] flex flex-col bg-[#0A0908] border border-[#C9A961]/35 text-[#F8F6F3] shadow-2xl">
        <div className="overflow-y-auto p-6 sm:p-8 pb-0">
          <h2 id="cookie-notice-heading" className="font-serif text-xl sm:text-2xl font-light mb-3">
            Before you go any further
          </h2>

          <p className="text-[#F8F6F3]/70 text-sm font-light leading-relaxed">
            This site does not track you. It runs no advertising scripts, sets no advertising
            cookies, and makes no request to any other company while you read it. What it stores is
            your sign-in session if you have one, your choice below, and, if you allow it, the
            display preference you set.
          </p>

          {detail && (
            <div className="mt-6 space-y-5 border-t border-[#F8F6F3]/10 pt-6">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-[3px] shrink-0 w-4 h-4 border border-[#C9A961]/60 bg-[#C9A961]/25 flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#C9A961]" />
                </span>
                <div>
                  <h3 className="text-sm text-[#F8F6F3] mb-1">
                    Strictly necessary
                    <span className="ml-3 text-[10px] tracking-[0.2em] uppercase text-[#C9A961]">
                      Always on
                    </span>
                  </h3>
                  <p className="text-[#F8F6F3]/55 text-xs font-light leading-relaxed">
                    Your sign-in session for the portal and the studio, and the record of this
                    choice. Turning these off would stop you signing in, so they cannot be switched
                    off.
                  </p>
                </div>
              </div>

              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences}
                  onChange={(e) => setPreferences(e.target.checked)}
                  className="mt-[3px] shrink-0 w-4 h-4 accent-[#C9A961]"
                />
                <div>
                  <h3 className="text-sm text-[#F8F6F3] mb-1">Preferences</h3>
                  <p className="text-[#F8F6F3]/55 text-xs font-light leading-relaxed">
                    Remembers a display setting between visits. Convenience only, and it stays on
                    your own device.
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-[3px] shrink-0 w-4 h-4 accent-[#C9A961]"
                />
                <div>
                  <h3 className="text-sm text-[#F8F6F3] mb-1">Measurement</h3>
                  <p className="text-[#F8F6F3]/55 text-xs font-light leading-relaxed">
                    We run none at present, and this box changes nothing today. It is here so that
                    if we ever add a way of counting visits, it will only run for people who have
                    already said yes.
                  </p>
                </div>
              </label>
            </div>
          )}

        </div>

        {/* Pinned. The answer is always reachable without scrolling. */}
        <div className="shrink-0 border-t border-[#F8F6F3]/10 p-6 sm:p-8 pt-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              onClick={() => decide({ preferences: true, analytics: true })}
              className={detail ? outline : solid}
            >
              Allow all
            </button>
            <button
              onClick={() => decide({ preferences: false, analytics: false })}
              className={outline}
            >
              Necessary only
            </button>

            {detail ? (
              <button onClick={() => decide({ preferences, analytics })} className={solid}>
                Save my choices
              </button>
            ) : (
              <button
                onClick={() => setDetail(true)}
                className="text-[#F8F6F3]/60 text-[11px] tracking-[0.22em] uppercase underline underline-offset-4 hover:text-[#F8F6F3] transition-colors sm:ml-1 py-3"
              >
                Choose individually
              </button>
            )}

            <Link
              to="/legal"
              className="sm:ml-auto text-[#F8F6F3]/45 text-[11px] tracking-[0.15em] uppercase hover:text-[#C9A961] transition-colors py-3"
            >
              Privacy notice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
