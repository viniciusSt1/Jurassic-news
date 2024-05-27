const mysql = require('mysql');

const connMysql = () => {
    console.log('Conexão estabelecida')
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'Suasenha',
        database:'portal_noticias'
    })
}

module.exports = () => {
    console.log('O autoload carregou o mySql');
    return connMysql;
}
