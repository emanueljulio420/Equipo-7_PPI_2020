const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../db/db')

router.get('/estudiantes', (req, res)=>{
    mysqlConnection.query('SELECT * FROM estudiante', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/nuevo-estudiante', (req, res)=>{
    const {id, grupo, nombre, apellido, correo, contraseña, tiempo_en_el_juego, codigo } = req.body;
  
    let alumno = [ id, grupo, nombre, apellido, correo, contraseña, tiempo_en_el_juego, codigo];
  
    let nuevoAlumno = `INSERT INTO estudiante( id, grupo, nombre, apellido, correo, contraseña, tiempo_en_el_juego, codigo  ) 
    VALUES( ?,?,?,?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });
  
module.exports = router;


