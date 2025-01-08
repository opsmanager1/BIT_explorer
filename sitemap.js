const fs = require('fs');
const path = require('path');

// Создаём данные сайтмапа
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://explorer.bitnodes.xyz/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
</urlset>`;

// Указываем путь для сохранения файл сайтмапа
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

// Сохраняем файл сайтмапа
fs.writeFile(sitemapPath, sitemap, (err) => {
  if (err) {
    console.error('Ошибка при генерации сайтмапа:', err);
  } else {
    console.log(`Сайтмап успешно создан: ${sitemapPath}`);
  }
});
