module.exports = (app) => {
    app.get('/addNotice', (req, res) => {//VINICIUS STEFANES 5V
        app.app.controllers.admin.addNoticia(app, req, res)
    })
    app.post('/adicionando', (req, res) => {
        app.app.controllers.admin.save(app, req, res)
    })
}