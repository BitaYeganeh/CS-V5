export function buildI18nLinks(fullUrl, siteBase) {
    try {
        const url = new URL(fullUrl);
        const isFi = url.pathname.startsWith('/fi');
        const basePath = isFi ? url.pathname.replace(/^\/fi/, '') || '/' : url.pathname;
        const enUrl = new URL(basePath, siteBase).toString();
        const fiUrl = new URL('/fi' + (basePath === '/' ? '' : basePath), siteBase).toString();
        const links = [
            { rel: 'alternate', href: enUrl, hreflang: 'en' },
            { rel: 'alternate', href: fiUrl, hreflang: 'fi' },
            { rel: 'alternate', href: enUrl, hreflang: 'x-default' },
        ];
        const canonical = isFi ? fiUrl : enUrl;
        return { links, canonical };
    }
    catch {
        return { links: [], canonical: fullUrl };
    }
}
//# sourceMappingURL=seo.js.map