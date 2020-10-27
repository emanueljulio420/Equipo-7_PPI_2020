const { Router } = require('express');
const router = Router();
const mysqlCennection = require('../db/db')

router.get('/estudiantes', (req, res)=>{
    mysqlConnection.query('SELECT * FROM estudiante', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});


module.exports = router;