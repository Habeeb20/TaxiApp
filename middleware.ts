import { authMiddleware } from "@clerk/nextjs";
import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes:['/browse']
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 CLIENT_PUBLIC_FILES_PATH