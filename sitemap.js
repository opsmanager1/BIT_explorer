const fs = require('fs');
const path = require('path');

// Данные для сайтмапа
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://explorer.bitnodes.xyz/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <!-- Добавьте другие страницы сюда -->
  <!-- Пример:
  <url>
    <loc>https://explorer.bitnodes.xyz/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  -->
</urlset>`;

// Указываем путь для сохранения сайтмапа
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

// Сохраняем файл сайтмапа
fs.writeFile(sitemapPath, sitemap, (err) => {
  if (err) {
    console.error('Ошибка при генерации сайтмапа:', err);
  } else {
    console.log(`Сайтмап успешно создан: ${sitemapPath}`);
  }
});

