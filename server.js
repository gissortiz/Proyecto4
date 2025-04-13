const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');

require('dotenv').config();// importando variables de entorno de .env
const app = express();
app.use(cors());

const PORT = process.env.PORT;

const swaggerOptions = { 
    swaggerDefinition: { 
        openapi: '3.0.0',
        info: { 
            title: 'Reservation API',
            version: '1.0.0',
            description: 'API for managing reservations',
        },
        servers: [ 
            {
                url: 'http://localhost:3000',
                description: 'Servidor local (desarrollo)',
            },
            {
                url: 'https://proyecto4-d4d0.onrender.com',
                description: 'Servidor en producción (Render)',
            },
        ],
    },
    apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const reservationRoutes = require('./routes/reservationRoutes'); 

app.use(express.json()); //middleware para que el servidor pueda entender json
app.use('/reservations', reservationRoutes); //publicando las rutas en el servidor 


app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`); 
}
);  

