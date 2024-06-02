import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import {LocalesList} from "@/src/locales";


export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!LocalesList.includes(locale as any)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
