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
    const { nombre, apellido, contraseña, colegio } = req.body;
  
    let alumno = [nombre, apellido, contraseña, colegio ];
  
    let nuevoAlumno = `INSERT INTO profesor( nombre, apellido, contraseña, colegio  ) 
    VALUES( ?,?,?,?)`;
    
    mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro profesor`})
        }
    });
  
  });


  router.put('/profesor/:id', (req, res)=>{
    const { nombre, apellido, contraseña, colegio } = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE actores SET nombre =? , apellido =? , contraseña =? , colegio =?  WHERE id = ?`,
     [nombre, apellido, contraseña, colegio , id ], (err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se han actualizado datos del profesor'});
        }else {
            console.log(err);
        }
    });
})

module.exports = router;