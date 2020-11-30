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

router.post('/estudiantes', (req, res)=>{
    const { grado, nombre, apellido, correo, contraseña, id,colegio, id_docente } = req.body;
  
    let alumno = [ grado, nombre, apellido, correo, contraseña,colegio, id ,id_docente];
  
    let nuevoAlumno = `INSERT INTO estudiante( grado, nombre, apellido,colegio, correo, contraseña, id, id_docente ) 
    VALUES( ?,?,?,?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

  router.put('/estudiantes/:id', (req, res)=>{
    const { grado, nombre, apellido, correo, contraseña, codigo } = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE actores SET grado = ?, nombre = ?, apellido = ?, correo = ?, contraseña = ?, tiempo_en_el_juego = ?, codigo = ? WHERE id = ?`,
     [ grado, nombre, apellido, correo, contraseña, codigo, id ], (err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se han actualizado datos del estudiante'});
        }else {
            console.log(err);
        }
    });
})

module.exports = router;


