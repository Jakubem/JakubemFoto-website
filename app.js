const express = require('express')
const app = express()

const port = 3024;

app.set('views', __dirname + '/public ');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send(
    pug.renderFile('public/index.pug', {
    })
  );
});

app.get('/foto', (req, res) => {
  res.send(
    pug.renderFile('public/foto.pug', {
    })
  );
});

app.get('/video', (req, res) => {
  res.send(
    pug.renderFile('public/video.pug', {
    })
  );
});

app.get('/projects', (req, res) => {
  res.send(
    pug.renderFile('public/projects.pug', {
    })
  );
});

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
