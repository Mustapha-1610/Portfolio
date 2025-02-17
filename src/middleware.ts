import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "du", "fr"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(du|en|fr)/:path*"],
};
