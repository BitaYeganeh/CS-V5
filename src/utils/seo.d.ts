export interface HreflangDescriptor {
    rel: 'alternate';
    href: string;
    hreflang: string;
}
export declare function buildI18nLinks(fullUrl: string, siteBase: string): {
    links: HreflangDescriptor[];
    canonical: string;
};
//# sourceMappingURL=seo.d.ts.map