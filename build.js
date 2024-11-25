const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const addHTMLtoPage = [
  'index',
  'about-us',
  'case-study',
  'contact',
  'email-marketing',
  'imprint',
  'livesend',
  'privacy-policy',
  'template-creation',
  'terms-conditions',
  'why-email-marketing',
  'solutions',
  'press',
  'blog',
];

// Tạo cấu hình các file từ mảng addHTMLtoPage
const pages = addHTMLtoPage.map(page => ({
  template: `${page}.ejs`,
  output: `${page}.html`,
}));

const viewsDir = path.join(__dirname, 'views'); // Thư mục chứa file EJS
const outputDir = path.join(__dirname, 'public'); // Thư mục chứa file HTML tĩnh

// Tạo thư mục public nếu chưa có
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Chuyển đổi từng file EJS thành HTML
pages.forEach(page => {
  const templatePath = path.join(viewsDir, page.template);
  const outputPath = path.join(outputDir, page.output);

  ejs.renderFile(templatePath, {}, (err, str) => {
    if (err) {
      console.error(`Error rendering ${page.template}:`, err);
      return;
    }

    fs.writeFileSync(outputPath, str, 'utf-8');
    console.log(`Generated ${page.output}`);

    // Cập nhật href nếu cần
    updateHref(outputPath);
  });
});

// Hàm cập nhật href trong file HTML
function updateHref(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  addHTMLtoPage.forEach(page => {
    const regex = new RegExp(`href=["'](${page})["']`, 'g');
    content = content.replace(regex, `href="${page}.html"`);
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated hrefs in ${filePath}`);
}
