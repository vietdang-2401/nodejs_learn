const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const hbs = require('express-handlebars');

app.use(morgan('combined'));

app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
