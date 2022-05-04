const http = require("http")
const url = require("url")
const mysql = require("mysql2/promise");
const config = require("./config");

http.createServer( (req, res) => {

    let urlParts = url.parse(req.url)
    console.log(req.query)

    console.log(req.method);
    if (req.method == "GET") {
        getData(req, res)
    }
} ).listen(63342);
console.log("-сервер создан-")


async function getData(req, res) {
    console.log("-гет дата-")
    let data = await DBconnect(req)

    let dataJSON = JSON.stringify(data)

    await res.end(dataJSON)
}


async function DBconnect(req) {
    //req.pathname

    const conn = await mysql.createConnection(config);
    const [rows, fields] = await conn.execute('SELECT * FROM goods ');
    await conn.end();
    return rows;
}