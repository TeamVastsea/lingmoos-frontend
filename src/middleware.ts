import createMiddleware from 'next-intl/middleware';
import { LocalesList } from './locales';

// @ts-ignore
export default createMiddleware({
    // A list of all locales that are supported
    locales: LocalesList,

    // Used when no locale matches
    defaultLocale: 'en',
    localePrefix: 'always',
});

export const config = {
    matcher: [
        // Enable a redirect to a matching locale at the root
        '/',

        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        '/(zh-cn|en)/:path*',

        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        '/((?!_next|_vercel|.*\\..*).*)',
    ],
};
