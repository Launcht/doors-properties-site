/**
 * Visitor consent, in one place.
 *
 * Chris Dreyer, 06/09/2026: the site needs a cookie policy that can be
 * "accepted/rejected or partially allowed" like any other website's.
 *
 * What this site actually does, checked rather than assumed on 07/09/2026, and
 * the notice must keep telling the truth about it:
 *
 *   NECESSARY   The sign-in session for the portal and the studio (Supabase
 *               auth, stored by the browser for a signed-in user only), and
 *               this consent choice itself. Nothing here identifies a visitor
 *               who has not signed in, and none of it can be switched off
 *               without breaking sign-in.
 *   PREFERENCES The theme choice. Off until allowed - see theme-provider.
 *   ANALYTICS   NONE. There is no Google Analytics tag, no Meta pixel, no
 *               session recorder and no advertising script anywhere in this
 *               build. The category exists so that if one is ever added it is
 *               already gated, and so a visitor can refuse in advance.
 *
 * There are also NO third-party requests. The brand fonts were served from
 * Google until 07/09/2026 and are now self-hosted, which is what lets the
 * notice say nothing leaves this site until the visitor allows it. If anything
 * third-party is ever added, it belongs behind a category here AND in the
 * privacy notice on /legal, in the same commit.
 */

export type ConsentCategory = 'necessary' | 'preferences' | 'analytics';

export interface Consent {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  /** ISO timestamp of the decision, so a stale choice can be re-asked later. */
  at: string;
  /** Bumped when the categories change, which re-asks rather than assuming. */
  version: number;
}

export const CONSENT_VERSION = 1;
const KEY = 'doors.consent';

/** Fires whenever the choice changes, so components can react without a reload. */
export const CONSENT_EVENT = 'doors:consent';

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return { ...parsed, necessary: true };
  } catch {
    // Private browsing, a blocked storage setting, or corrupt JSON. Treat it as
    // "not asked yet" rather than as consent.
    return null;
  }
}

export function writeConsent(choice: { preferences: boolean; analytics: boolean }): Consent {
  const value: Consent = {
    necessary: true,
    preferences: choice.preferences,
    analytics: choice.analytics,
    at: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    // Nothing to do. The banner will simply ask again next visit, which is the
    // safe failure: we never treat an unrecorded answer as a yes.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  return value;
}

/** True only when the visitor has actively allowed that category. */
export function allowed(category: ConsentCategory): boolean {
  if (category === 'necessary') return true;
  const c = readConsent();
  return c ? c[category] === true : false;
}

/** Clears the choice so the notice asks again. Used by "Cookie choices". */
export function resetConsent(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nothing to do */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}
