module.exports.index = (app, req, res) => {
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.get5((error, result) => {
        if(error){
            console.log(error)
        }else{
            res.render('home/index', {noticias: result});
        }
    })
}