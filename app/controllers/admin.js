module.exports.addNoticia = (app, req, res) => {
    res.render('admin/form_add_noticia', { validacao: {}, retorno: {} });//VINICIUS STEFANES 5V
}

module.exports.save = (app, req, res) => {
    const noticia = req.body;
    req.assert('titulo', 'O título é obrigatório').notEmpty();
    req.assert('resumo', 'O resumo é obrigatório').notEmpty();
    req.assert('resumo', 'O resumo deve ter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'O autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'A data é obrigatória').notEmpty();
    req.assert('noticia', 'A notícia é obrigatória').notEmpty();
    var error = req.validationErrors();
    //console.log(error);
    if (error) {
        res.render('admin/form_add_noticia', { validacao: error, retorno: noticia })
        return;
    }

    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.saveNotice(noticia, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            console.log('Noticia inserida');
            res.redirect('/noticias');
        }
    })
}

