import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  cookies().set("resultPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log(requestHeaders.get("authorization"));
  console.log(headerList.get("Authorization"));
  console.log(theme);
  console.log(cookies().get("resultPerPage"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
