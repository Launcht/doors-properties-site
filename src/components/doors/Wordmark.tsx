import React from 'react';

interface WordmarkProps {
  /** which colourway of the official Primary Wordmark to show */
  tone?: 'ivory' | 'onyx' | 'gold';
  /** retained for API compatibility; no longer used (the mark is the full logo) */
  glyph?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const toneMap: Record<string, string> = {
  ivory: '#F5F1E8',
  onyx: '#0A0908',
  gold: '#C9A961',
};

// Official Primary Wordmark (overlapping-O keyhole) in each colourway.
// Files live in public/logo and are served under the app base path.
const logoForTone: Record<string, string> = {
  ivory: 'logo/doors-white.svg',
  onyx: 'logo/doors-black.svg',
  gold: 'logo/doors-gold.svg',
};

// The full lockup is 255.67 x 81.95, of which the wordmark alone is the top
// 61.5 - so the "THE KEY TO EXTRAORDINARY" strip is only the bottom quarter of
// the height, and the letterforms inside it are a fraction of that again. At the
// old h-8 the strapline was roughly 8px of band and read as a smudge. These
// sizes are set so the tagline is legible at every place the lockup is used.
const heightForSize: Record<string, string> = {
  sm: 'h-8',
  md: 'h-12',
  lg: 'h-16',
  xl: 'h-20',
};

/**
 * The DOORS Primary Wordmark - the official logo lockup with the overlapping
 * O's forming the keyhole. Rendered from the supplied vector logo (not drawn in
 * code), so it matches the brand exactly. `tone` picks the colourway.
 */
export const Wordmark: React.FC<WordmarkProps> = ({
  tone = 'ivory',
  className = '',
  size = 'md',
}) => {
  const src = `${import.meta.env.BASE_URL}${logoForTone[tone]}`;
  return (
    <img
      src={src}
      alt="DOORS"
      className={`${heightForSize[size]} w-auto object-contain ${className}`}
    />
  );
};

// Wordmark only, tagline cropped out. Used inline inside a sentence, where the
// full lockup's strapline would be unreadable and would break the line.
const inlineLogoForTone: Record<string, string> = {
  ivory: 'logo/doors-wordmark-white.svg',
  onyx: 'logo/doors-wordmark-black.svg',
  gold: 'logo/doors-wordmark-gold.svg',
};

/**
 * The brand name as it appears INSIDE running text - "BrandName began with a
 * simple conviction". Client request 28/07/2026: wherever the name appears as
 * written text, show the logo instead. She circled a body-copy sentence, so this
 * has to sit in the line of type, not just in headers.
 *
 * Rendered at cap height and nudged onto the baseline so the sentence still
 * reads as a sentence.
 *
 * THE WORD IS REAL TEXT, and the logo is decorative over it. Chris Dreyer,
 * 06/09/2026: "Make wording that relies on an inline logo readable and
 * accessible as text, including phrases such as 'Register with [logo]'." An
 * alt attribute alone answered the screen reader and nothing else - it is not
 * copied with the sentence, not shown in reader mode or an email preview, and
 * it carries less weight inside an <h1> than the word does. So the span holds
 * "DOORS" for every one of those, positioned off-screen rather than hidden with
 * display:none, which would take it out of the accessibility tree as well.
 */
export const BrandName: React.FC<{ tone?: 'ivory' | 'onyx' | 'gold'; className?: string }> = ({
  tone = 'onyx',
  className = '',
}) => (
  <span className="inline-block">
    <span className="sr-only">DOORS</span>
    <img
      src={`${import.meta.env.BASE_URL}${inlineLogoForTone[tone]}`}
      alt=""
      aria-hidden="true"
      className={`inline-block w-auto align-baseline ${className}`}
      style={{ height: '0.78em', transform: 'translateY(0.04em)' }}
    />
  </span>
);

/**
 * The nested-arch doorway device - a secondary brand mark used as a quiet
 * ornament between sections or beside small labels.
 */
export const DoorwayMark: React.FC<{ className?: string; tone?: 'gold' | 'ivory' | 'onyx' }> = ({
  className = '',
  tone = 'gold',
}) => (
  <svg viewBox="0 0 40 56" fill="none" className={className} aria-hidden>
    <path d="M4 56V24a16 16 0 0 1 32 0v32" stroke={toneMap[tone]} strokeWidth="1.2" />
    <path d="M11 56V26a9 9 0 0 1 18 0v30" stroke={toneMap[tone]} strokeWidth="1" opacity="0.7" />
    <path d="M18 56V30a2 2 0 0 1 4 0v26" stroke={toneMap[tone]} strokeWidth="0.9" opacity="0.5" />
  </svg>
);

export default Wordmark;
