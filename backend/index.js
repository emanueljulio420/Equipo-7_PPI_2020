const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.set('port', 4001);

app.use(express.json());

//rutas
app.use('/api',routes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

