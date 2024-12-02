import type { LoaderFunction } from "@remix-run/node";
import { getPosts } from "~/getPosts";
import * as fs from "fs";
import * as path from "path";

const getRoutes = () => {
  const routesDir = path.join(process.cwd(), "app", "routes");
  const files = fs.readdirSync(routesDir);
  
  const routes = files
    .filter(file => {
      // Filter out non-route files
      return file.endsWith('.tsx') && 
             !file.startsWith('_') && // Layout routes
             !file.startsWith('[') && // Special routes like sitemap and robots
             !file.startsWith('api.') && // API routes
             !file.startsWith('og') && // OG image routes
             file !== 'posts.tsx'; // Posts layout
    })
    .map(file => {
      const routePath = file.replace('.tsx', '');
      return {
        path: routePath === "_index" ? "" : routePath,
        // Home page gets highest priority
        priority: routePath === "_index" ? "1.0" : "0.8"
      };
    });

  return routes;
};

export const loader: LoaderFunction = () => {
  const baseUrl = process.env.SITE_URL || "https://mzaremski.com";
  const currentDate = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date()).replace(/\//g, '-');

  const posts = getPosts();
  const staticRoutes = getRoutes();

  const staticUrls = staticRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.path ? `/${route.path}` : ""}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join("");

  // Generate URLs for blog posts
  const postUrls = posts.map(post => `
  <url>
    <loc>${baseUrl}${post.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}${postUrls}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8",
    },
  });
};
