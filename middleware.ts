import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match everything except API, static, _next, og-image, favicons, asset folders
  matcher: [
    "/((?!api|_next|_vercel|favicon|og-image|services|patients|allies|.*\\..*).*)",
  ],
};
