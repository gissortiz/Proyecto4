const express = require('express'); //importando express
require('dotenv').config(); //importando dotenv
const app = express(); //creando el servidor
const PORT = process.env.PORT; //puerto en el que se va a ejecutar el servidor
const reservationRoutes = require('./routes/reservationRoutes'); //importando rutas para publicarlas en el servidor

app.use(express.json()); //middleware para que el servidor pueda entender json
app.use('/reservations', reservationRoutes); //publicando las rutas en el servidor 
// use es una funcion que recibe dos parametros, el primero es la ruta y el segundo es el archivo que se va a publicar

app.listen(PORT, () => { //iniciando el servidor
    console.log(`Server running on port ${PORT}`); //mensaje que se muestra en la consola al iniciar el servidor
}
);  

