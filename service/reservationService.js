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


module.exports = {
    readReservations,
    writeReservations
}