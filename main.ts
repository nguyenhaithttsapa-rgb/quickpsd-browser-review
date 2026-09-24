// Deno Deploy Static Server for QuickPsd Satellite
Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const filePath = url.pathname === "/" ? "/index.html" : url.pathname;
  try {
    const file = await Deno.readFile("." + filePath);
    const contentType = filePath.endsWith(".css") ? "text/css" : "text/html; charset=utf-8";
    return new Response(file, {
      headers: { "content-type": contentType },
    });
  } catch {
    const index = await Deno.readFile("./index.html");
    return new Response(index, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});
