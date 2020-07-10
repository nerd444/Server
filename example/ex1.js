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

// 1.
connection.query('select article, color from shirts limit 20', 
    function(error, results, fields){
        console.log(results)
    })

// 2.
// let insert_query = 'insert into shirts (article, color, shirt_size, last_worn) \
//                              values ("polo shirt", "Purple", "M", 50)'
// connection.query(insert_query, function(error, result){
//     console.log(result)
// })

// 3.
connection.query('select * from shirts where shirt_size = "M"', 
    function(error, results, fields){
        console.log(results)
    })

// 4.
// connection.query('update shirts set shirt_size = "L" where article = "polo shirt"', 
//     function(error, results, fields){
//         console.log(results)
//     })

// 5. 
// connection.query('update shirts set last_worn = 0 where last_worn = 15', 
//     function(error, results, fields){
//         console.log(results)
//     })

// 6.
// connection.query('update shirts set shirt_size="XS", color = "off white" where color = "Orange"', 
//     function(error, results, fields){
//         console.log(results)
//     })

// 7. 
// connection.query('delete from shirts where last_worn = 200', 
//     function(error, results, fields){
//         console.log(results)
//     })

// 8.
// connection.query('delete from shirts where article = "tank top"', 
//     function(error, results, fields){
//         console.log(results)
//     })


// 2-1.
connection.query('select * from users limit 30', 
    function(error, results, fields){
        console.log(results)
    })

// 2-2.
connection.query('select * from users order by created_at asc limit 1', 
    function(error, results, fields){
        console.log(results)
    })

// 2-3.
connection.query('select monthname(created_at) as "month", count(*) as "count" \
        from users group by month(created_at) \
        order by count desc', 
    function(error, results, fields){
        console.log(results)
    })

// 2-4
connection.query('select * from users where email like "%yahoo%" limit 20', 
    function(error, results, fields){
        console.log(results)
    })

// 2-5
connection.query('select count(*) from users where email like "%yahoo%"', 
    function(error, results, fields){
        console.log(results)
    })


// 3-1
connection.query('select concat(author_fname, author_lname) as "full_name" from books', 
    function(error, results, fields){
        console.log(results)
    })

// 3-2
connection.query('select concat(substring(title,1,10),"...")as "short title" from books', 
    function(error, results, fields){
        console.log(results)
    })

// 3-3
connection.query('select concat(title," was released in ", released_year) as "blurb" from books', 
    function(error, results, fields){
        console.log(results)
    })

// 3-4
connection.query('select title, char_length(title) as "character count" from books', 
    function(error, results, fields){
        console.log(results)
    })

// 3-5
// let insert_query = 'insert into books (title, author_fname, author_lname, released_year, stock_quantity, pages) \
//                             values ("10% Happier", "Dan", "Harris", 2014, 29, 256),\
//                             ("fake_book", "Freida", "Harris", 2001, 287, 428), \
//                             ("Lincoln In The Bardo", "George", "Saunders", 2017, 1000, 367)'
// connection.query(insert_query, function(error, result){
//     console.log(result)
// })

// 3-6
connection.query('select title, released_year from books order by released_year desc limit 5', 
    function(error, results, fields){
        console.log(results)
    })

// 3-7
connection.query('select title, pages from books order by pages desc limit 1', 
    function(error, results, fields){
        console.log(results)
    })

// 3-8
connection.query('select count(*) from books where title like "%the%"', 
    function(error, results, fields){
        console.log(results)
    })

// 3-9
connection.query('select released_year, count(*) as "cnt" from books group by released_year', 
    function(error, results, fields){
        console.log(results)
    })

// 3-10
connection.query('select released_year, count(*) as "books", format(avg(pages),4) as "avg pages" \
                    from books group by released_year order by released_year asc', 
    function(error, results, fields){
        console.log(results)
    })


connection.end()