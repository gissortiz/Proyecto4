const fs = require('fs');
const path = require('path');

async function readReservations  ()  {
    try {
        const data = await fs.promises.readFile(path.join(__dirname, '../data/database.json'), 'utf-8');

        return JSON.parse(data);
    } catch (error) {
        console.error('Hubo un error hay leer las reservaciones: ', error);
        return [];
    }
}

async function writeReservations(reservation) {
    try {
        const reservations = await readReservations();
        reservations.push(reservation);
        await fs.promises.writeFile(path.join(__dirname, '../data/database.json'), JSON.stringify(reservations, null, 2));
    }
    catch (error) {
        console.error('Hubo un error al escribir las reservaciones: ', error);
    }

}

async function readReservation(id){
    try {
        const reservations = await fs.promises.readFile(path.join(__dirname, '../data/database.json'), 'utf-8');
        const data = JSON.parse(reservations);
        const reservation = data.find(reservation => reservation.id === id);
        if (!reservation) {
            return {
                status: 404,
                message: 'No se encontró la reservación con el id proporcionado'
              }
            return reservation;
        }
    }
    catch (error) {
        console.error('Hubo un error hay leer las reservaciones: ', error);
        return [];
    } 
}




module.exports = {
    readReservations,
    writeReservations,
    readReservation
}