const express = require('express')
const app = express()
const pug = require('pug')

const port = 3024;

app.set('views', __dirname + '/public ');
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.send(
    pug.renderFile('public/index.pug', {
    })
  );
});

app.get('/foto', function(req, res){
  res.send(
    pug.renderFile('public/foto.pug', {
    })
  );
});

app.get('/video', function(req, res){
  res.send(
    pug.renderFile('public/video.pug', {
    })
  );
});

app.get('/projects', function(req, res){
  res.send(
    pug.renderFile('public/projects.pug', {
    })
  );
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
  console.log(`listening on port ${port}`);
})
