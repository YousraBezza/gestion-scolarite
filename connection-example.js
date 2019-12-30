var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tpigl.sql'
});
/*
connection.query('SELECT * from eleve',function(err,rows,field){
    if(!err){
        for (var i = 0; i < rows.length; i++) {
            result = rows; //je stock le résultat dans une variable pour l'envoyer à la vue
            
          };
    }else{
        console.log(err);
    }
    
});
*/
//connection.use('/',index);
//connection.use('/api/v1/users', users);
connection.query('SELECT * from eleve',function(err,rows,field){
    if(!err){
        console.log(rows[2].email);
    }else{
        console.log(err);
    }
    
});
connection.end();
/*
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tpigl'
});


connection.end();
*/