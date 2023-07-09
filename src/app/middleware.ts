import { withAuth } from "next-auth/middleware";
import { redirect } from "next/navigation";

export default withAuth(
  function middleware(req) {
    if (!req.nextauth.token) redirect("/");
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token?.acessToken ?? false,
    },
  }
);
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path"],
};
