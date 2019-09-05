const mysql = require('mysql');
const HOST = '127.0.0.1';
const USER = 'root';
const PASS = '123456';
const DATABASE = '20160626';
const PORT = 3306
const db = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASS,
    database: DATABASE,
    port: PORT,
    multipleStatements:true//使得mysql能多个查询
});
module.exports={
    db:db,
}