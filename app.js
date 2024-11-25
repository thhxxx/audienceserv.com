const express = require('express');
const path = require('path');
const app = express();
const port = 9696;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/why-email-marketing', (req, res) => {
  res.render('why-email-marketing');
});

app.get('/email-marketing', (req, res) => {
  res.render('email-marketing');
});

app.get('/livesend', (req, res) => {
  res.render('livesend');
});

app.get('/template-creation', (req, res) => {
  res.render('template-creation');
});

app.get('/case-study', (req, res) => {
  res.render('case-study');
});

app.get('/about-us', (req, res) => {
  res.render('about-us');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/imprint', (req, res) => {
  res.render('imprint');
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});

app.get('/terms-conditions', (req, res) => {
  res.render('terms-conditions');
});

app.get('/solutions', (req, res) => {
  res.render('solutions');
});

app.get('/press', (req, res) => {
  res.render('press');
});

app.get('/blog', (req, res) => {
  res.render('blog');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
