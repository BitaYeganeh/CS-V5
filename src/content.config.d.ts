import { z } from "astro:content";
export declare const collections: {
    articles: import("astro/content/config").CollectionConfig<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        date: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        date: Date;
        title: string;
        description: string;
    }, {
        date: Date;
        title: string;
        description: string;
    }>>;
    reference: import("astro/content/config").CollectionConfig<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        date: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        date: Date;
        title: string;
        description: string;
    }, {
        date: Date;
        title: string;
        description: string;
    }>>;
    spreadsheets: import("astro/content/config").CollectionConfig<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description: string;
        url: string;
    }, {
        title: string;
        description: string;
        url: string;
    }>>;
    whitepapers: import("astro/content/config").CollectionConfig<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        readLink: z.ZodOptional<z.ZodString>;
        btnTitle: z.ZodOptional<z.ZodString>;
        btnLink: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description: string;
        readLink?: string | undefined;
        btnTitle?: string | undefined;
        btnLink?: string | undefined;
    }, {
        title: string;
        description: string;
        readLink?: string | undefined;
        btnTitle?: string | undefined;
        btnLink?: string | undefined;
    }>>;
};
//# sourceMappingURL=content.config.d.ts.map