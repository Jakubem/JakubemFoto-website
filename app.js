const express = require('express')
const path = require('path')
const app = express()
const pug = require('pug')

const port = 3024;

app.set('views', __dirname + '/public ');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send(
    pug.renderFile('src/views/index.pug', {
    })
  );
});

app.get('/foto', (req, res) => {
  res.send(
    pug.renderFile('src/views/foto.pug', {
    })
  );
});

app.get('/video', (req, res) => {
  res.send(
    pug.renderFile('src/views/video.pug', {
    })
  );
});

app.get('/projects', (req, res) => {
  res.send(
    pug.renderFile('src/views/projects.pug', {
    })
  );
});

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
