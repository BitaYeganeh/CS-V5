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
    heroTitle: 'Enterprise Cybersecurity & Compliance Advisory',
    heroSubtitle: 'Strategic guidance for complex regulatory environments. ISO 27001, NIS2, GDPR, and DORA implementation with proven methodologies trusted by global organizations.',
    heroPrimaryCTA: 'Request Consultation',
    heroSecondaryCTA: 'Explore Capabilities',

    // Services
    servicesTitle: 'Core Capabilities',
    servicesDescription: 'Comprehensive cybersecurity and regulatory compliance solutions for enterprises across regulated industries',

    // Footer
    footerTagline: 'Enterprise cybersecurity and compliance advisory services. ISO 27001, NIS2, GDPR, and DORA implementation with proven methodologies for global organizations.',

    // Service Pages
    regulatoryComplianceTitle: 'Regulatory Compliance',
    regulatoryComplianceTagline: 'Navigate complex regulations with confidence',
    riskAndAssessmentTitle: 'Risk & Assessment Services',
    riskAndAssessmentTagline: 'Identify, assess, and mitigate cybersecurity risks',
    readMore: 'Read more',

    // Regulatory Compliance Services
    nis2ComplianceTitle: 'NIS2 Compliance',
    nis2ComplianceDesc: 'Assess gaps, implement controls, and operationalize incident reporting to meet EU NIS2 obligations for essential and important entities.',
    doraComplianceTitle: 'DORA Compliance',
    doraComplianceDesc: 'Build Digital Operational Resilience with ICT risk management, testing, and incident processes aligned to DORA requirements.',
    gdprPrivacyTitle: 'GDPR/Privacy Services',
    gdprPrivacyDesc: 'Operationalize privacy by design: data mapping, DPIAs, records of processing, and governance to demonstrate GDPR compliance.',
    eidasDigitalTrustTitle: 'eIDAS/Digital Trust',
    eidasDigitalTrustDesc: 'Establish trusted digital identity, qualified signatures and seals, and assurance aligned with eIDAS and ETSI standards.',
    eprivacyCookieTitle: 'ePrivacy & Cookie Compliance',
    eprivacyCookieDesc: 'ePrivacy and cookie compliance: consent management, cookie audits, tracking governance.',

    // Risk Assessment Services
    riskAssessmentsTitle: 'Risk Assessments',
    riskAssessmentsDesc: 'Comprehensive risk assessments to identify vulnerabilities and threats to your organization.',
    riskManagementTitle: 'Risk Management',
    riskManagementDesc: 'Ongoing risk management programs to continuously monitor and mitigate cybersecurity risks.',
    thirdPartyRiskTitle: 'Third-Party Risk Management',
    thirdPartyRiskDesc: 'Assess and manage risks from vendors, suppliers, and business partners.'
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
    heroTitle: 'Kyberturvallisuus- ja vaatimustenmukaisuusneuvonta',
    heroSubtitle: 'Strateginen ohjaus monimutkaisissa sääntelyympäristöissä. ISO 27001, NIS2, GDPR ja DORA toteutus todistetuin menetelmin, joihin maailmanlaajuiset organisaatiot luottavat.',
    heroPrimaryCTA: 'Pyydä konsultaatio',
    heroSecondaryCTA: 'Tutustu palveluihin',

    // Services
    servicesTitle: 'Ydinosaamisalueet',
    servicesDescription: 'Kattavat kyberturvallisuus- ja sääntelyvaatimustenmukaisuusratkaisut yrityksille säännellyillä toimialoilla',

    // Footer
    footerTagline: 'Kyberturvallisuus- ja vaatimustenmukaisuusneuvontapalvelut. ISO 27001, NIS2, GDPR ja DORA toteutus todistetuin menetelmin maailmanlaajuisille organisaatioille.',

    // Service Pages
    regulatoryComplianceTitle: 'Sääntelyvaatimustenmukaisuus',
    regulatoryComplianceTagline: 'Navigoi monimutkaiset säädökset luottavaisesti',
    riskAndAssessmentTitle: 'Riski- ja arviointipalvelut',
    riskAndAssessmentTagline: 'Tunnista, arvioi ja vähennä kyberturvallisuusriskejä',
    readMore: 'Lue lisää',

    // Regulatory Compliance Services
    nis2ComplianceTitle: 'NIS2-vaatimustenmukaisuus',
    nis2ComplianceDesc: 'Arvioi puutteet, toteuta valvonta ja operationalisoi tapausten raportointi täyttääksesi EU:n NIS2-velvoitteet olennaisille ja tärkeille toimijoille.',
    doraComplianceTitle: 'DORA-vaatimustenmukaisuus',
    doraComplianceDesc: 'Rakenna digitaalista toimintakykyä ICT-riskienhallinnan, testauksen ja tapausten käsittelyn avulla DORA-vaatimusten mukaisesti.',
    gdprPrivacyTitle: 'GDPR/Tietosuojapalvelut',
    gdprPrivacyDesc: 'Operationalisoi tietosuoja suunnittelun avulla: tietojen kartoitus, DPIA:t, käsittelyrekisterit ja hallinto GDPR-vaatimustenmukaisuuden osoittamiseksi.',
    eidasDigitalTrustTitle: 'eIDAS/Digitaalinen luottamus',
    eidasDigitalTrustDesc: 'Luo luotettava digitaalinen identiteetti, hyväksytyt allekirjoitukset ja leimat sekä varmuus eIDAS- ja ETSI-standardien mukaisesti.',
    eprivacyCookieTitle: 'ePrivacy ja evästeiden vaatimustenmukaisuus',
    eprivacyCookieDesc: 'ePrivacy ja evästeiden vaatimustenmukaisuus: suostumuksen hallinta, evästeauditoinnit, seurannan hallinto.',

    // Risk Assessment Services
    riskAssessmentsTitle: 'Riskiarvioinnit',
    riskAssessmentsDesc: 'Kattavat riskiarvioinnit organisaatiosi haavoittuvuuksien ja uhkien tunnistamiseksi.',
    riskManagementTitle: 'Riskienhallinta',
    riskManagementDesc: 'Jatkuvat riskienhallintaohjelmat kyberturvallisuusriskien jatkuvaan seurantaan ja vähentämiseen.',
    thirdPartyRiskTitle: 'Kolmannen osapuolen riskienhallinta',
    thirdPartyRiskDesc: 'Arvioi ja hallinnoi riskejä toimittajilta, tavarantoimittajilta ja liikekumppaneilta.'
  }
};

// Get translation for current language
export function t(key, lang = 'en') {
  const langTranslations = translations[lang];
  return langTranslations?.[key] || translations.en[key] || key;
}