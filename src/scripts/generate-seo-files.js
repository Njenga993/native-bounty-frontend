import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, "../dist");
const publicDir = path.join(__dirname, "../public");

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Generate humans.txt
const humansTxt = `/* TEAM */
    Founder & CEO: [Name]
    CTO: [Name]
    Lead Developer: [Name]
    UI/UX Designer: [Name]
    Agricultural Specialist: [Name]
    Logistics Manager: [Name]

/* SITE */
    Last update: ${new Date().toISOString().split("T")[0]}
    Standards: HTML5, CSS3, React, TypeScript
    Components: Vite, React Router, Helmet
    Software: VS Code, Git, Figma

/* CONTACT */
    Email: hello@nativebounty.co.ke
    Phone: +254 XXX XXX XXX
    Address: Nairobi, Kenya
    Website: https://nativebounty.co.ke

/* THANKS */
    Special thanks to:
    - All partner farmers across Kenya
    - Our investors and supporters
    - The agricultural community in Kenya
    - Open source community

/* LOCATION */
    Country: Kenya
    Region: Eastern Africa
    Coverage: 12 counties and growing
`;

fs.writeFileSync(path.join(distDir, "humans.txt"), humansTxt);
console.log("✅ Generated humans.txt");

// Generate browserconfig.xml
const browserconfigXml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square70x70logo src="/assets/ms-icon-70x70.png"/>
            <square150x150logo src="/assets/ms-icon-150x150.png"/>
            <square310x310logo src="/assets/ms-icon-310x310.png"/>
            <wide310x150logo src="/assets/ms-icon-310x150.png"/>
            <TileColor>#4CAF50</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

fs.writeFileSync(path.join(distDir, "browserconfig.xml"), browserconfigXml);
console.log("✅ Generated browserconfig.xml");

// Generate .htaccess (if deploying to Apache)
const htaccess = `# Apache configuration for Native Bounty
# https://nativebounty.co.ke

RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

# Remove trailing slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [R=301,L]

# Redirect www to non-www
RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Security Headers
<IfModule mod_headers.c>
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set X-Content-Type-Options "nosniff"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Handle React Router
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Block access to hidden files
RedirectMatch 403 /\\.\\..*$
`;

fs.writeFileSync(path.join(distDir, ".htaccess"), htaccess);
console.log("✅ Generated .htaccess");

// Copy robots.txt from public if exists, otherwise generate default
const robotsTxt = `# robots.txt for Native Bounty
# https://nativebounty.co.ke/robots.txt

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /temp/

Sitemap: https://nativebounty.co.ke/sitemap.xml
Host: https://nativebounty.co.ke

User-agent: Googlebot
Allow: /
Crawl-delay: 0.5

User-agent: Googlebot-Image
Allow: /assets/

User-agent: Bingbot
Allow: /
Crawl-delay: 0.5
`;

const robotsPath = path.join(publicDir, "robots.txt");
if (fs.existsSync(robotsPath)) {
  fs.copyFileSync(robotsPath, path.join(distDir, "robots.txt"));
  console.log("✅ Copied robots.txt from public");
} else {
  fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt);
  console.log("✅ Generated robots.txt");
}

console.log("🎉 SEO files generation complete!");
