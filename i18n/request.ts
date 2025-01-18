import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { LocalesList } from '@/src/locales';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    // Ensure that the incoming locale is valid
    if (!locale || !LocalesList.includes(locale as any)) {
      locale = 'en';
    }
    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
