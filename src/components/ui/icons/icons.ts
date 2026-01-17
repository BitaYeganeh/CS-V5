// Concrete Icons map for commonly used names. Each icon provides SVG path(s)
// and sensible defaults (viewBox, stroke, sizing class) to ensure visual
// distinction across the UI. Unknown keys fall back to a simple placeholder.
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  class: 'w-6 h-6',
};

const explicit: Record<string, any> = {
  // Checks / confirmation
  check: {
    ...base,
    paths: [{ d: 'M5 13l4 4L19 7' }],
  },
  checkCircle: {
    ...base,
    paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M9 12l2 2 4-4' }],
  },
  'check-circle': null, // alias will be handled below

  // Arrows / chevrons
  arrowRight: {
    ...base,
    paths: [{ d: 'M5 12h14' }, { d: 'M12 5l7 7-7 7' }],
  },
  'arrow-right': null,
  chevronRight: {
    ...base,
    paths: [{ d: 'M9 5l7 7-7 7' }],
  },
  chevronDown: {
    ...base,
    paths: [{ d: 'M6 9l6 6 6-6' }],
  },

  // UI actions
  arrowDownTray: {
    ...base,
    paths: [{ d: 'M12 3v12' }, { d: 'M8 11l4 4 4-4' }, { d: 'M5 21h14' }],
  },
  eye: {
    ...base,
    paths: [{ d: 'M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z' }, { d: 'M12 15a3 3 0 100-6 3 3 0 000 6z' }],
  },

  // Security / shields / locks
  shield: {
    ...base,
    paths: [{ d: 'M12 2l7 4v6c0 5-4 9-7 11-3-2-7-6-7-11V6l7-4z' }],
  },
  shieldCheck: {
    ...base,
    paths: [{ d: 'M12 2l7 4v6c0 5-4 9-7 11-3-2-7-6-7-11V6l7-4z' }, { d: 'M9 12l2 2 4-4' }],
  },
  lockClosed: {
    ...base,
    paths: [{ d: 'M6 11V8a6 6 0 0112 0v3' }, { d: 'M5 11h14v10H5z' }],
  },

  // Infrastructure / cloud / data
  server: {
    ...base,
    paths: [{ d: 'M3 5h18v6H3z' }, { d: 'M3 13h18v6H3z' }],
  },
  database: {
    ...base,
    paths: [{ d: 'M12 3c5 0 9 1.79 9 4v2c0 2.21-4 4-9 4S3 11.21 3 9V7c0-2.21 4-4 9-4z' }, { d: 'M3 13c0 2.21 4 4 9 4s9-1.79 9-4' }],
  },
  cloud: {
    ...base,
    paths: [{ d: 'M20 17.58A5 5 0 0018 9h-1.26A8 8 0 104 16.25' }],
  },

  // People / users
  user: {
    ...base,
    paths: [{ d: 'M20 21v-2a4 4 0 00-3-3.87' }, { d: 'M4 21v-2a4 4 0 013-3.87' }, { d: 'M12 7a4 4 0 100-8 4 4 0 000 8z' }],
  },
  userGroup: {
    ...base,
    paths: [{ d: 'M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3' }, { d: 'M6 11c1.66 0 3-1.34 3-3S7.66 5 6 5' }, { d: 'M2 21v-2c0-2.21 4-4 10-4s10 1.79 10 4v2' }],
  },
  userCheck: {
    ...base,
    paths: [{ d: 'M16 11a4 4 0 10-8 0' }, { d: 'M19 19l-3 3-2-2' }],
  },

  // Documents / content
  document: {
    ...base,
    paths: [{ d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }, { d: 'M14 2v6h6' }],
  },
  documentText: {
    ...base,
    paths: [{ d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }, { d: 'M8 12h8' }, { d: 'M8 16h8' }],
  },
  documentDuplicate: {
    ...base,
    paths: [{ d: 'M9 3H5a2 2 0 00-2 2v12' }, { d: 'M9 3h10a2 2 0 012 2v12' }],
  },

  // UI / data viz
  chartBar: {
    ...base,
    paths: [{ d: 'M3 3v18h18' }, { d: 'M7 13v6' }, { d: 'M12 9v10' }, { d: 'M17 5v14' }],
  },
  lightBulb: {
    ...base,
    paths: [{ d: 'M9 18h6' }, { d: 'M10 10a4 4 0 118 0c0 2-2 3-2 3H8s-2-1-2-3' }],
  },
  headphones: {
    ...base,
    paths: [{ d: 'M3 18v-3a9 9 0 0118 0v3' }, { d: 'M6 13v5a2 2 0 002 2h1' }, { d: 'M18 13v5a2 2 0 01-2 2h-1' }],
  },
  'bank-notes': {
    ...base,
    paths: [{ d: 'M3 7h18v10H3z' }, { d: 'M7 11h10' }],
  },
  heart: {
    ...base,
    paths: [{ d: 'M12 21s-7-4.35-9-7.16C-2 9.92 4 4 12 9c8-5 14 1.92 9 4.84C19 16.65 12 21 12 21z' }],
  },
  'computer-desktop': {
    ...base,
    paths: [{ d: 'M2 3h20v12H2z' }, { d: 'M8 21h8' }, { d: 'M12 17v4' }],
  },
  building: {
    ...base,
    paths: [{ d: 'M3 21h18V7l-9-4-9 4v14z' }],
  },
  clipboard: {
    ...base,
    paths: [{ d: 'M9 2h6v4H9z' }, { d: 'M7 6h10v14H7z' }],
  },
  clipboardDocumentList: {
    ...base,
    paths: [{ d: 'M9 2h6v4H9z' }, { d: 'M7 6h10v14H7z' }, { d: 'M9 10h6' }, { d: 'M9 14h6' }],
  },
  book: {
    ...base,
    paths: [{ d: 'M4 19.5A2.5 2.5 0 016.5 17H20' }, { d: 'M4 4v15' }, { d: 'M20 4v15' }],
  },
  trendingUp: {
    ...base,
    paths: [{ d: 'M3 17l6-6 4 4 8-8' }, { d: 'M14 7h7v7' }],
  },

  // Misc
  minus: {
    ...base,
    paths: [{ d: 'M5 12h14' }],
  },
  info: {
    ...base,
    paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M12 10v4' }, { d: 'M12 7h.01' }],
  },
  star: {
    ...base,
    paths: [{ d: 'M12 17.3l6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.76L5.82 21z' }],
  },
};

// Aliases for hyphen/camel variants commonly used in templates
const aliases: Array<[string, string]> = [
  ['check-circle', 'checkCircle'],
  ['arrow-right', 'arrowRight'],
  ['chevron-down', 'chevronDown'],
  ['document-text', 'documentText'],
  ['arrow-down', 'arrowDownTray'],
  ['arrowDown', 'arrowDownTray'],
  ['shield-check', 'shieldCheck'],
  ['chevron-right', 'chevronRight'],
  ['arrowDownTray', 'arrowDownTray'],
  ['user-group', 'userGroup'],
  ['user-check', 'userCheck'],
  ['document-duplicate', 'documentDuplicate'],
  ['document-text', 'documentText'],
  ['clipboard-document-list', 'clipboardDocumentList'],
  ['computer-desktop', 'computer-desktop'],
  ['bank-notes', 'bank-notes'],
  ['trending-up', 'trendingUp'],
  ['chart-bar', 'chartBar'],
  ['light-bulb', 'lightBulb'],
  ['arrowDownTray', 'arrowDownTray'],
];

for (const [from, to] of aliases) {
  if (!explicit[from] && explicit[to]) explicit[from] = explicit[to];
}

export const Icons: Record<string, any> = new Proxy(explicit, {
  get(target, prop: string) {
    if (prop in target) return (target as any)[prop];
    // fallback placeholder for unknown icons
    return {
      ...base,
      paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M8 12h8' }],
    };
  },
});
