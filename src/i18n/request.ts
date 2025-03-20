import { notFound } from "next/navigation";
import { getRequestConfig, GetRequestConfigParams } from "next-intl/server";
import { locales } from "../config";

export default getRequestConfig(async (context: GetRequestConfigParams) => {
  // Resolve the `requestLocale` since it is a Promise
  const requestLocale = await context.requestLocale;

  // Validate the locale
  if (!requestLocale || !locales.includes(requestLocale)) {
    console.error("Invalid or missing locale detected:", requestLocale);
    notFound(); // Trigger a 404 if the locale is invalid
  }

  // Load and resolve the messages
  const messages = (await import(`../../messages/${requestLocale}.json`)).default;

  // Return the configuration with resolved `messages`
  return {
    locale: requestLocale,
    messages, // Resolved messages object

  };
});
