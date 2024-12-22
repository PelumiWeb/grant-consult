import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { locales } from './config';
 
// Can be imported from a shared config
 
export default getRequestConfig(async (context) => {
 const requestLocale = await context.requestLocale; // Ensure this resolves before use

  console.log("Resolved requestLocale:", requestLocale);

  // Validate locale
  if (!locales.includes(requestLocale as any)) {
    console.error("Invalid locale detected:", requestLocale);
    notFound(); // This triggers a 404
  }

  return {
    messages: (await import(`../messages/${requestLocale}.json`)).default,
  };
});