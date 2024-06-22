import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "du", "fr", "ar"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(du|en|fr|ar)/:path*"],
};
