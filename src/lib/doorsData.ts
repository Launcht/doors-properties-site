export interface DoorsProperty {
  ref: string;
  title: string;
  area: string;
  priceBand: string;
  sizeSqm: number;
  bedrooms: number;
  summary: string;
  image: string;
  video?: string;
  character?: string[];
  /**
   * Architectural showcase, not a live mandate. Drawn from `is_demo` on the
   * listing row. Showcase homes are labelled as such everywhere they appear and
   * never invite an enquiry on that specific home - a render is not a property
   * anyone can be introduced to. Set by C Dreyer 12/08/2026 for PPRA compliance.
   */
  isShowcase?: boolean;
  // Unlocked-only detail (visible to registered buyers)
  private?: boolean;        // fully-private; only shown when DOORS introduces it
  exactPrice?: string;      // unlocked
  address?: string;         // unlocked
  bathrooms?: number;
  erfSqm?: number;
  gallery?: string[];
  specifics?: string[];
}



export const collection: DoorsProperty[] = [
  {
    ref: 'DR-204',
    title: 'Knysna Headlands Estate',
    area: 'Knysna',
    priceBand: 'R22m - R28m',
    exactPrice: 'R24 500 000',
    address: '14 Eastford Ridge, Eastford, Knysna',
    sizeSqm: 720,
    erfSqm: 2400,
    bedrooms: 5,
    bathrooms: 5,
    summary: 'A headland villa above the lagoon mouth, glass to the water on three sides, walled and entirely private.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387083220_1f4e79f8.png',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    character: [
      'A walled headland position with the lagoon on three sides.',
      'Glazed living volumes that open entirely to the water.',
      'Approached by a private drive; unseen from any road.',
    ],
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387083220_1f4e79f8.png',
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387094228_55eba4c8.png',
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387079395_9ec1ad94.jpg',
    ],
    specifics: [
      'Heated infinity pool to the lagoon edge',
      'Self-contained guest wing and staff quarters',
      'Boat house with private slipway',
      'Backup power and full water store',
    ],
  },
  {
    ref: 'DR-187',
    title: 'Plettenberg Beachfront',
    area: 'Plettenberg Bay',
    priceBand: 'R35m - R45m',
    exactPrice: 'R39 750 000',
    address: 'Beachyhead Drive, Plettenberg Bay',
    sizeSqm: 640,
    erfSqm: 1650,
    bedrooms: 4,
    bathrooms: 5,
    summary: 'Direct frontage onto Robberg beach. Architect-designed, and represented on a restricted mandate at the owner\u2019s request.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387151032_43caf4ef.jpg',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    character: [
      'Direct, unbroken frontage onto Robberg beach.',
      'A single architect\u2019s hand across every line of the home.',
      'Represented on a restricted mandate, at the owner\u2019s request.',
    ],
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387151032_43caf4ef.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387080574_92c00d4a.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387081204_241d9be7.jpg',
    ],
    specifics: [
      'Direct beach access from the lower terrace',
      'Double volume living onto the dune line',
      'Wine cellar and tasting room',
      'Imported finishes throughout',
    ],
  },
  {
    ref: 'DR-156',
    title: 'Pezula Ridge Residence',
    area: 'Knysna',
    priceBand: 'R15m - R20m',
    exactPrice: 'R17 900 000',
    address: 'Pezula Private Estate, Knysna',
    sizeSqm: 540,
    erfSqm: 1100,
    bedrooms: 4,
    bathrooms: 4,
    summary: 'Set into the ridge with indigenous forest behind and ocean ahead. Quiet, considered, complete.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387079395_9ec1ad94.jpg',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    character: [
      'Indigenous forest behind, open ocean ahead.',
      'Set quietly into the ridge for shelter and privacy.',
      'Within a secured, established estate.',
    ],
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387079395_9ec1ad94.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387083220_1f4e79f8.png',
    ],
    specifics: [
      'Estate golf and clubhouse membership',
      'North-facing for all-day light',
      'Established indigenous garden',
    ],
  },
  {
    ref: 'DR-141',
    title: 'Mossel Bay Cliff House',
    area: 'Mossel Bay',
    priceBand: 'R12m - R16m',
    exactPrice: 'R13 800 000',
    address: 'Pinnacle Point, Mossel Bay',
    sizeSqm: 480,
    erfSqm: 900,
    bedrooms: 4,
    bathrooms: 3,
    summary: 'A clean, low villa on the cliff edge, with a sheltered pool and uninterrupted sea views to the west.',
    image: `${import.meta.env.BASE_URL}images/aerial-coastal-estate.jpg`,
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    character: [
      'A low, clean villa poised on the cliff edge.',
      'A sheltered pool terrace facing the western sea.',
      'Uninterrupted sunset views across the bay.',
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/aerial-coastal-estate.jpg`,
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387081204_241d9be7.jpg',
    ],
    specifics: [
      'Golf estate with cliffside fairways',
      'Sheltered, west-facing pool terrace',
      'Open-plan living onto the sea',
    ],
  },
  {
    ref: 'DR-119',
    title: 'Goose Valley Sanctuary',
    area: 'Plettenberg Bay',
    priceBand: 'R18m - R24m',
    exactPrice: 'R20 400 000',
    address: 'Goose Valley Golf Estate, Plettenberg Bay',
    sizeSqm: 610,
    erfSqm: 1300,
    bedrooms: 5,
    bathrooms: 4,
    summary: 'A family home set in mature gardens within a secure estate, moments from the beach and the village.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387080574_92c00d4a.jpg',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    character: [
      'Mature, established gardens within a secure estate.',
      'A short, quiet distance from beach and village.',
      'Generous family proportions throughout.',
    ],
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387080574_92c00d4a.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387094228_55eba4c8.png',
    ],
    specifics: [
      'Secure golf estate with 24-hour access control',
      'Established family garden and pool',
      'Walking distance to the beach',
    ],
  },
  {
    ref: 'DR-098',
    title: 'George Mountain Retreat',
    area: 'George',
    priceBand: 'R10m - R14m',
    exactPrice: 'R11 600 000',
    address: 'Kraaibosch, George',
    sizeSqm: 520,
    erfSqm: 1500,
    bedrooms: 4,
    bathrooms: 3,
    summary: 'Beneath the Outeniqua mountains, a calm contemporary home on a generous, established plot.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387081204_241d9be7.jpg',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    character: [
      'Framed by the Outeniqua mountains beyond.',
      'Calm contemporary lines on a generous plot.',
      'Established, mature surrounds for complete seclusion.',
    ],
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387081204_241d9be7.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387079395_9ec1ad94.jpg',
    ],
    specifics: [
      'Generous plot with mountain backdrop',
      'Contemporary open-plan interior',
      'Established trees for full privacy',
    ],
  },
  // Fully-private homes - never shown publicly; appear in the portal only
  // when DOORS has introduced them to a specific buyer.
  {
    ref: 'DR-071',
    title: 'The Lagoon House',
    area: 'Knysna',
    priceBand: 'R45m - R60m',
    exactPrice: 'R52 000 000',
    address: 'Leisure Isle, Knysna',
    sizeSqm: 880,
    erfSqm: 3100,
    bedrooms: 6,
    bathrooms: 6,
    private: true,
    summary: 'A landmark Leisure Isle estate. The owner has asked for a private mandate, so it is shown only to matched, registered buyers.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387083220_1f4e79f8.png',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    character: [
      'A landmark position on Leisure Isle.',
      'Private jetty and direct lagoon frontage.',
      'Known to only a handful of people.',
    ],
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387083220_1f4e79f8.png',
      'https://d64gsuwffb70l.cloudfront.net/6a2dcec9cd468ee0fa9c747f_1781387151032_43caf4ef.jpg',
    ],
    specifics: ['Private jetty', 'Six-car garaging', 'Separate guest cottage'],
  },
];

// Local, brand-supplied imagery (served under the app base path). Garden Route
// coastal homes, no mountain backdrop - per client feedback 25/06/2026.
export const HERO_IMG = `${import.meta.env.BASE_URL}images/hero-cliff-villa.jpg`;
export const REGION_IMG = `${import.meta.env.BASE_URL}images/garden-route-fynbos-coastline.jpg`;
export const COLLECTION_IMG = `${import.meta.env.BASE_URL}images/bluehour-home-dusk.jpg`;
// For Sellers. A home glimpsed from the end of its own drive rather than put on
// show, which is the section's argument - replaced the flat coastal landscape
// that sat here, per client feedback 16/08/2026.
export const SELLERS_IMG = `${import.meta.env.BASE_URL}images/private-home-dusk-drive.jpg`;

// Publicly-visible collection (excludes fully-private homes)
export const publicCollection = collection.filter((p) => !p.private);

// Bands below R10m added 07/09/2026 on client instruction: R10 million is not an
// acceptance threshold, and a buyer looking below it should not find the form
// telling them otherwise before anyone has spoken to them.
export const budgetBands = [
  'Up to R5m',
  'R5m - R10m',
  'R10m - R15m',
  'R15m - R25m',
  'R25m - R40m',
  'R40m+',
];

// Herolds Bay and Wilderness named by the client 06/09/2026. Sedgefield sits
// between Wilderness and Knysna and is part of the corridor the brand claims,
// so leaving it out of a list that names its neighbours would read as an
// omission rather than a decision.
export const areas = [
  'Mossel Bay',
  'George',
  'Herolds Bay',
  'Wilderness',
  'Sedgefield',
  'Knysna',
  'Plettenberg Bay',
  'Across the corridor',
];

export const timelines = ['Actively looking', 'Within 6 months', 'Within a year', 'Still deciding'];

// Indicative euro conversion for international buyers. Client instruction
// 06/09/2026: euro alongside the rand, "small and not replacing the rand value".
//
// The rate is FIXED and DATED on purpose. A live FX call on a property site can
// fail silently and leave a stale number looking authoritative; a stated rate
// with a date beside it is honest about what it is. Refresh it when the site is
// next touched, and never present a converted figure as a price.
export const EUR_ZAR = 18.54;
export const EUR_ZAR_AS_AT = '06/09/2026';

/**
 * Converts a rand price band or exact price to an indicative euro equivalent.
 * Accepts 'R22m - R28m', 'R40m+' and 'R39 750 000'. Returns null when it cannot
 * parse the input, so an unrecognised format shows nothing rather than a wrong
 * number.
 */
export function euroEquivalent(rand: string): string | null {
  if (!rand) return null;

  const toEuro = (zar: number): string => {
    const eur = zar / EUR_ZAR;
    if (eur >= 1_000_000) {
      const m = eur / 1_000_000;
      return '\u20ac' + (m >= 10 ? m.toFixed(0) : m.toFixed(1)) + 'm';
    }
    return '\u20ac' + Math.round(eur / 1000) + 'k';
  };

  const millions = [...rand.matchAll(/R\s?([\d.]+)\s?m/gi)].map((m) => parseFloat(m[1]) * 1_000_000);
  if (millions.length) {
    const parts = millions.map(toEuro);
    if (rand.includes('+')) return parts[0] + '+';
    if (rand.trim().toLowerCase().startsWith('up to')) return 'up to ' + parts[0];
    return parts.join(' - ');
  }

  const plain = rand.replace(/[^\d]/g, '');
  if (plain.length >= 6) return toEuro(parseInt(plain, 10));

  return null;
}

export const priorityOptions = [
  'Sea views',
  'Absolute privacy',
  'Secure estate',
  'Direct beach access',
  'Off-grid / self-sufficient',
  'Equestrian',
  'Lock-up-and-go',
  'Family living',
  'Architectural significance',
  'Walk to village',
];
