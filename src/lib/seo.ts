import { useEffect } from 'react';

/**
 * Per-route SEO. Every route used to inherit the single title and description in
 * index.html, so /legal, /signin and /register all reported themselves to Google as
 * the home page. This sets the head per route, and marks the private surfaces
 * noindex so the portal and the studio never enter an index.
 */
// The live site is served from www; the bare domain 301s here, so a canonical
// pointing at the bare domain would name a URL that redirects.
export const SITE_URL = 'https://www.doors-properties.com';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export interface SeoInput {
  title: string;
  description: string;
  /** Path only, e.g. "/legal". Omitted on noindex routes. */
  path?: string;
  noindex?: boolean;
}

export function useSeo({ title, description, path, noindex }: SeoInput) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);

    // Robots: private surfaces must never be indexed, and must not be followed
    // into, so a crawler that finds /portal from a link stops there.
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

    // Canonical: one per indexable route, absent on the ones we exclude.
    const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (noindex || !path) {
      existing?.remove();
    } else {
      // GitHub Pages serves each route as a directory, so /legal answers on
      // /legal/ - the canonical has to name the URL that actually returns 200.
      const href = SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, '') + '/');
      if (existing) {
        existing.href = href;
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = href;
        document.head.appendChild(link);
      }
      setMeta('meta[property="og:url"]', 'property', 'og:url', href);
    }
  }, [title, description, path, noindex]);
}
