var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tpigl'
});
connection.query('SELECT * from eleve',function(err,rows,field){
    if(!err){
        console.log(rows);
    }else{
        console.log(err);
    }
    
});
connection.end();