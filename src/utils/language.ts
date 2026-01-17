// Language utility functions for Cyber Security Finland website

export const languages = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    locale: 'en-US'
  },
  fi: {
    code: 'fi',
    name: 'Suomi',
    flag: '🇫🇮',
    locale: 'fi-FI'
  }
};

// Get language from path
export function getLanguageFromPath(pathname) {
  if (pathname.startsWith('/fi')) {
    return 'fi';
  }
  return 'en';
}

// Get opposite language
export function getOppositeLanguage(lang) {
  return lang === 'fi' ? 'en' : 'fi';
}

// Get language prefix for URL
export function getLanguagePrefix(lang) {
  return lang === 'fi' ? '/fi' : '';
}

// Get localized URL
export function getLocalizedUrl(pathname, targetLang) {
  // Remove existing language prefix if present
  let cleanPath = pathname;
  if (cleanPath.startsWith('/fi')) {
    cleanPath = cleanPath.replace('/fi', '') || '/';
  } else {
    cleanPath = cleanPath;
  }

  // Add new language prefix if needed
  if (targetLang === 'fi') {
    return `/fi${cleanPath === '/' ? '' : cleanPath}`;
  }
  return cleanPath;
}

// Translation strings
export const translations = {
  en: {
    // Navigation
    home: 'HOME',
    services: 'SERVICES',
    packages: 'PACKAGES',
    industries: 'INDUSTRIES',
    resources: 'RESOURCES',
    about: 'ABOUT',
    contact: 'CONTACT',
    
    // Common
    contactUs: 'Contact Us',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    freeConsultation: 'Free Consultation',
    noObligation: 'No obligation',
    
    // Hero
    heroTitle: 'Cybersecurity Compliance Made Simple for Finnish Businesses',
    heroSubtitle: 'Fast-track your ISO 27001, NIS2, and GDPR compliance with our proven 90-day programs. Expert guidance, complete documentation, and ongoing support included.',
    heroPrimaryCTA: 'Get Free Compliance Assessment',
    heroSecondaryCTA: 'Learn About Our Services',
    
    // Services
    servicesTitle: 'Our Core Services',
    servicesDescription: 'Comprehensive cybersecurity and compliance solutions tailored to your business needs',
    
    // Footer
    footerTagline: 'Expert cybersecurity and compliance services for Finnish businesses. ISO 27001, NIS2, GDPR, and DORA implementation in 90 days. Free assessment included.'
  },
  fi: {
    // Navigation
    home: 'ETUSIVU',
    services: 'PALVELUT',
    packages: 'PAKETIT',
    industries: 'TOIMIALAT',
    resources: 'RESURSSIT',
    about: 'TIETOA',
    contact: 'YHTEYTTÄ',
    
    // Common
    contactUs: 'Ota yhteyttä',
    learnMore: 'Lisätietoja',
    getStarted: 'Aloita',
    freeConsultation: 'Ilmainen konsultaatio',
    noObligation: 'Ei velvoitetta',
    
    // Hero
    heroTitle: 'Kyberturvallisuuden yhteensopivuus tehty helpoksi suomalaisille yrityksille',
    heroSubtitle: 'Nopeuta ISO 27001, NIS2 ja GDPR -vaatimustenmukaisuutta todistetuin 90 päivän ohjelmin. Asiantunteva ohjaus, täydellinen dokumentointi ja jatkuva tuki mukana.',
    heroPrimaryCTA: 'Hanki ilmainen vaatimustenmukaisuusarviointi',
    heroSecondaryCTA: 'Lisätietoja palveluistamme',
    
    // Services
    servicesTitle: 'Keskeiset palvelumme',
    servicesDescription: 'Kattavat kyberturvallisuuden ja sääntelyn noudattamisen ratkaisut liiketoimintaasi varten',
    
    // Footer
    footerTagline: 'Asiantuntijat kyberturvallisuudesta ja sääntelyn noudattamisesta suomalaisille yrityksille. ISO 27001, NIS2, GDPR ja DORA toteutus 90 päivässä. Ilmainen arviointi sisällytetty.'
  }
};

// Get translation for current language
export function t(key, lang = 'en') {
  const langTranslations = translations[lang];
  return langTranslations?.[key] || translations.en[key] || key;
}