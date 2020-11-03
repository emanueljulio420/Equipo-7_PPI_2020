const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM profesor', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/nuevo-profesor', (req, res)=>{
    const { cedula, nombre, edad, codigo, contraseña_docente} = req.body;
  
    let alumno = [ cedula, nombre, edad, codigo, contraseña_docente ];
  
    let nuevoAlumno = `INSERT INTO profesor( cedula, nombre, edad, codigo, contraseña_docente  ) 
    VALUES( ?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro profesor`})
        }
    });
  
  });

module.exports = router;