// 이 파일 안에서, mysql 라이브러리를 사용하겠다.
let mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host : 'database-2.c3igvgofvrsa.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'tkdwlsnlmoonlm'
    }
);

connection.query('select count(*) from memo', 
    function(error, results, fields){
        console.log(results)
    })
connection.end()
