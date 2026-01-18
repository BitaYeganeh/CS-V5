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
  bars: {
    ...base,
    paths: [{ d: 'M3 6h18' }, { d: 'M3 12h18' }, { d: 'M3 18h18' }],
  },
  x: {
    ...base,
    paths: [{ d: 'M18 6L6 18' }, { d: 'M6 6l12 12' }],
  },
  alert: {
    ...base,
    paths: [{ d: 'M12 2L2 20h20L12 2z' }, { d: 'M12 9v4' }, { d: 'M12 17h.01' }],
  },
  arrowDownRight: {
    ...base,
    paths: [{ d: 'M7 7l10 10' }, { d: 'M17 7v10H7' }],
  },
  bars3: {
    ...base,
    paths: [{ d: 'M3 6h18' }, { d: 'M3 12h18' }, { d: 'M3 18h18' }],
  },
  calendar: {
    ...base,
    paths: [{ d: 'M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z' }, { d: 'M16 2v4' }, { d: 'M8 2v4' }, { d: 'M5 10h14' }],
  },
  chatBubble: {
    ...base,
    paths: [{ d: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' }],
  },
  clock: {
    ...base,
    paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M12 6v6l4 2' }],
  },
  close: {
    ...base,
    paths: [{ d: 'M18 6L6 18' }, { d: 'M6 6l12 12' }],
  },
  email: {
    ...base,
    paths: [{ d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }, { d: 'M22 6l-10 7L2 6' }],
  },
  'external-link': {
    ...base,
    paths: [{ d: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' }, { d: 'M15 3h6v6' }, { d: 'M10 14L21 3' }],
  },
  globeAlt: {
    ...base,
    paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M2 12h20' }, { d: 'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z' }],
  },
  'help-circle': {
    ...base,
    paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3' }, { d: 'M12 17h.01' }],
  },
  mobile: {
    ...base,
    paths: [{ d: 'M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z' }, { d: 'M12 18h.01' }],
  },
  world: {
    ...base,
    paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M2 12h20' }, { d: 'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z' }],
  },
  globe: {
    ...base,
    paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M2 12h20' }, { d: 'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z' }],
  },
  banknotes: {
    ...base,
    paths: [{ d: 'M2 8h20v8H2z' }, { d: 'M4 4h16v4H4z' }, { d: 'M4 16h16v4H4z' }, { d: 'M12 12a2 2 0 100-4 2 2 0 000 4z' }],
  },
  identification: {
    ...base,
    paths: [{ d: 'M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z' }, { d: 'M8 12a2 2 0 100-4 2 2 0 000 4z' }, { d: 'M6 16c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2' }, { d: 'M14 10h4' }, { d: 'M14 14h4' }],
  },
  users: {
    ...base,
    paths: [{ d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' }, { d: 'M9 7a4 4 0 100-8 4 4 0 000 8z' }, { d: 'M23 21v-2a4 4 0 00-3-3.87' }, { d: 'M16 3.13a4 4 0 010 7.75' }],
  },
  userCircle: {
    ...base,
    paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M12 12a3 3 0 100-6 3 3 0 000 6z' }, { d: 'M6.168 18.849A4 4 0 0110 16h4a4 4 0 013.834 2.855' }],
  },
  magnifyingGlass: {
    ...base,
    paths: [{ d: 'M11 2a9 9 0 100 18 9 9 0 000-18z' }, { d: 'M21 21l-4.35-4.35' }],
  },
  exclamationTriangle: {
    ...base,
    paths: [{ d: 'M12 2L2 20h20L12 2z' }, { d: 'M12 9v4' }, { d: 'M12 17h.01' }],
  },
  envelope: {
    ...base,
    paths: [{ d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }, { d: 'M22 6l-10 7L2 6' }],
  },
  creditCard: {
    ...base,
    paths: [{ d: 'M2 6h20v12H2z' }, { d: 'M2 10h20' }, { d: 'M6 14h4' }],
  },
  badge: {
    ...base,
    paths: [{ d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' }],
  },
  arrowPath: {
    ...base,
    paths: [{ d: 'M21 2v6h-6' }, { d: 'M3 12a9 9 0 0115-6.7L21 8' }, { d: 'M3 22v-6h6' }, { d: 'M21 12a9 9 0 01-15 6.7L3 16' }],
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
  documentCheck: {
    ...base,
    paths: [{ d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }, { d: 'M14 2v6h6' }, { d: 'M9 15l2 2 4-4' }],
  },

  // UI / data viz
  chartBar: {
    ...base,
    paths: [{ d: 'M3 3v18h18' }, { d: 'M7 13v6' }, { d: 'M12 9v10' }, { d: 'M17 5v14' }],
  },
  chartPie: {
    ...base,
    paths: [{ d: 'M21.21 15.89A10 10 0 118 2.83' }, { d: 'M22 12A10 10 0 0012 2v10z' }],
  },
  presentationChart: {
    ...base,
    paths: [{ d: 'M3 3h18v12H3z' }, { d: 'M3 15l6 6' }, { d: 'M21 15l-6 6' }, { d: 'M9 9v6' }, { d: 'M12 7v8' }, { d: 'M15 11v4' }],
  },
  lightBulb: {
    ...base,
    paths: [{ d: 'M9 18h6' }, { d: 'M10 10a4 4 0 118 0c0 2-2 3-2 3H8s-2-1-2-3' }],
  },
  portfolio: {
    ...base,
    paths: [{ d: 'M3 7h18v12H3z' }, { d: 'M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2' }, { d: 'M3 11h18' }],
  },
  articles: {
    ...base,
    paths: [{ d: 'M6 2h12v20H6z' }, { d: 'M10 6h4' }, { d: 'M10 10h4' }, { d: 'M10 14h4' }, { d: 'M10 18h4' }],
  },
  documentChartBar: {
    ...base,
    paths: [{ d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }, { d: 'M14 2v6h6' }, { d: 'M9 12v5' }, { d: 'M12 10v7' }, { d: 'M15 13v4' }],
  },
  blankDocument: {
    ...base,
    paths: [{ d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }, { d: 'M14 2v6h6' }],
  },
  documentMagnifyingGlass: {
    ...base,
    paths: [{ d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }, { d: 'M14 2v6h6' }, { d: 'M11 14a2 2 0 100-4 2 2 0 000 4z' }, { d: 'M14.5 14.5L17 17' }],
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

  // Additional icons for industries and services
  bank: {
    ...base,
    paths: [{ d: 'M3 21h18' }, { d: 'M3 10h18' }, { d: 'M5 6l7-3 7 3' }, { d: 'M4 10v11' }, { d: 'M20 10v11' }, { d: 'M8 14v3' }, { d: 'M12 14v3' }, { d: 'M16 14v3' }],
  },
  'chart-line': {
    ...base,
    paths: [{ d: 'M3 3v18h18' }, { d: 'M3 15l5-5 4 4 9-9' }],
  },
  chartLine: {
    ...base,
    paths: [{ d: 'M3 3v18h18' }, { d: 'M3 15l5-5 4 4 9-9' }],
  },
  code: {
    ...base,
    paths: [{ d: 'M16 18l6-6-6-6' }, { d: 'M8 6l-6 6 6 6' }],
  },
  bolt: {
    ...base,
    paths: [{ d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' }],
  },
  cog: {
    ...base,
    paths: [{ d: 'M12 15a3 3 0 100-6 3 3 0 000 6z' }, { d: 'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z' }],
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
  academicCap: {
    ...base,
    paths: [{ d: 'M12 2L2 7l10 5 10-5-10-5z' }, { d: 'M2 17l10 5 10-5' }, { d: 'M2 12l10 5 10-5' }],
  },
  'academic-cap': null,
  bookOpen: {
    ...base,
    paths: [{ d: 'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z' }, { d: 'M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z' }],
  },
  edit: {
    ...base,
    paths: [{ d: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7' }, { d: 'M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z' }],
  },
  play: {
    ...base,
    fill: 'currentColor',
    stroke: 'none',
    paths: [{ d: 'M8 5v14l11-7z' }],
  },
  video: {
    ...base,
    paths: [{ d: 'M23 7l-7 5 7 5V7z' }, { d: 'M2 5h14v14H2z' }],
  },
  target: {
    ...base,
    paths: [{ d: 'M12 2a10 10 0 100 20 10 10 0 000-20z' }, { d: 'M12 6a6 6 0 100 12 6 6 0 000-12z' }, { d: 'M12 10a2 2 0 100 4 2 2 0 000-4z' }],
  },
  'building-library': {
    ...base,
    paths: [{ d: 'M12 2L2 7v1h20V7z' }, { d: 'M4 9v10' }, { d: 'M8 9v10' }, { d: 'M12 9v10' }, { d: 'M16 9v10' }, { d: 'M20 9v10' }, { d: 'M2 19h20v2H2z' }],
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
  ['arrow-down-right', 'arrowDownRight'],
  ['chat-bubble', 'chatBubble'],
  ['globe-alt', 'globeAlt'],
  ['externalLink', 'external-link'],
  ['document-check', 'documentCheck'],
  ['user-circle', 'userCircle'],
  ['magnifying-glass', 'magnifyingGlass'],
  ['exclamation-triangle', 'exclamationTriangle'],
  ['credit-card', 'creditCard'],
  ['arrow-path', 'arrowPath'],
  ['chart-pie', 'chartPie'],
  ['presentation-chart', 'presentationChart'],
  ['document-chart-bar', 'documentChartBar'],
  ['blank-document', 'blankDocument'],
  ['document-magnifying-glass', 'documentMagnifyingGlass'],
  ['book-open', 'bookOpen'],
  ['lock-closed', 'lockClosed'],
  ['building-library', 'building-library'],
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
