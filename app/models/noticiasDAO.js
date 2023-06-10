function noticiasDAO(connection){
    conn = connection;
    this.getNoticias = (callback) => {
        conn.query('select * from noticias order by id_noticia desc', callback);
    }
    //vinicius stefanes 5v
    this.getNoticia = (noticia,callback) => {
        conn.query(`select * from noticias where id_noticia = ${noticia.id_noticia}`, callback);
    }

    this.saveNotice = (noticia,callback) => {
        conn.query('insert into noticias set ?',noticia, callback);
    }

    this.get5 = (callback) => {
        conn.query('select * from noticias order by data_criacao desc limit 5', callback);
    }
    this.buscaNoticias = (pesquisa, callback) => {
        conn.query("select * from noticias where titulo like '%" + pesquisa + "%' order by data_criacao desc", callback);
    }
    this.excluirNoticia = (noticia_excluir, callback) => {
        conn.query('delete from noticias where id_noticia ='+ noticia_excluir.id_noticia, callback);
    }
}
module.exports = () => {
    return noticiasDAO;
}