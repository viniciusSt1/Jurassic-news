//VINICIUS STEFANES 5V
module.exports = (app) => {
    app.get('/noticia', (req,res) => {
        app.app.controllers.noticia.noticia(app, req, res); 
    })
    
    app.get('/noticias', (req,res) => {
        app.app.controllers.noticia.noticias(app, req, res);
    });

    app.post('/search', (req,res) => {
        app.app.controllers.noticia.busca(app,req,res);
    });
    app.get('/excluir', (req,res) => {
        app.app.controllers.noticia.excluir(app,req,res);
    })
}