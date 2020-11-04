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
    const { grupo, nombre, apellido, correo, contraseña, tiempo_en_el_juego, codigo } = req.body;
  
    let alumno = [ grupo, nombre, apellido, correo, contraseña, tiempo_en_el_juego, codigo];
  
    let nuevoAlumno = `INSERT INTO estudiante( grupo, nombre, apellido, correo, contraseña, tiempo_en_el_juego, codigo  ) 
    VALUES( ?,?,?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

  router.put('/estudiante/:id', (req, res)=>{
    const { grupo, nombre, apellido, correo, contraseña, tiempo_en_el_juego, codigo } = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE actores SET grupo = ?, nombre = ?, apellido = ?, correo = ?, contraseña = ?, tiempo_en_el_juego = ?, codigo = ? WHERE id = ?`,
     [ grupo, nombre, apellido, correo, contraseña, tiempo_en_el_juego, codigo ], (err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se han actualizado datos del estudiante'});
        }else {
            console.log(err);
        }
    });
})

module.exports = router;


