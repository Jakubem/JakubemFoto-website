const express = require('express')
const app = express()

const pug = require('pug')

app.set('views', __dirname + '/public ');
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.send(
    pug.renderFile('public/index.pug', {
    })
  );
});

app.get('/photo', function(req, res){
  res.send(
    pug.renderFile('public/photo.pug', {
    })
  );
});

app.get('/about', function(req, res){
  res.send(
    pug.renderFile('public/about.pug', {
    })
  );
});

app.get('/video', function(req, res){
  res.send(
    pug.renderFile('public/video.pug', {
    })
  );
});

app.get('/stuff', function(req, res){
  res.send(
    pug.renderFile('public/stuff.pug', {
    })
  );
});


app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('listening on port 3000')
})
