const fs = require('fs');
const path = require('path');

// Создаём данные сайтмапа с корректным форматом
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://explorer.bitnodes.xyz/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
</urlset>`;

// Указываем путь для сохранения файла сайтмапа
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

// Сохраняем файл сайтмапа
fs.writeFile(sitemapPath, sitemap, (err) => {
  if (err) {
    console.error('Ошибка при генерации сайтмапа:', err);
  } else {
    console.log(`Сайтмап успешно создан: ${sitemapPath}`);
  }
});
