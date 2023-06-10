module.exports.noticia = (app, req, res) => {
    const connection = app.config.dbConnection();

    if(req.query.id_noticia){
        var id_noticia = req.query;
    }else{
        res.redirect('/noticias')
    }
    

    const noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.getNoticia(id_noticia, (error, result) => {
        res.render('noticias/noticia', { noticias: result });
    })
    //VINICIUS STEFANES 5V
}

module.exports.noticias = (app, req, res) => {
    const connection = app.config.dbConnection();

    const noticiasModel = new app.app.models.noticiasDAO(connection);
    noticiasModel.getNoticias((error, result) => {
        res.render('noticias/noticias', { noticias: result })
    })
}

module.exports.busca = (app, req, res) => {
    const pesquisa = req.body.pesquisa;
    const connection = app.config.dbConnection();

    const noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.buscaNoticias(pesquisa, (error, result) => {
        if(error){
            console.log(error);
        }else{
            res.render('noticias/noticias', {noticias: result})
        }
    })
}

module.exports.excluir = (app,req, res) => {
    const connection = app.config.dbConnection();

    const noticiasModel = new app.app.models.noticiasDAO(connection);

    if(req.query.id_noticia){
        var noticia_excluir = req.query;
    }else{
        res.redirect('/noticias');
    }

    noticiasModel.excluirNoticia(noticia_excluir, (error, result) => {
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    })
}