const mysql = require("mysql2/promise");
const config = require("./config")


async function DBconnect() {
    const conn = await mysql.createConnection(config);
    const [rows, fields] = await conn.execute('SELECT * FROM goods ');
    //console.log(rows);
    conn.end();
    return rows;
    console.log(rows)
}


async function getData() {
    let data = await DBconnect()

    console.log(data)
}

getData()