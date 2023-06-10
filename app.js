const app = require('./config/server');

//require('./app/routes/addnoticia')(app);
//require('./app/routes/home')(app);
//require('./app/routes/noticia')(app);
//require('./app/routes/noticiaList')(app);

const port = 1234;
app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})