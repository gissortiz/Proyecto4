const fs = require('fs');
const path = require('path');

async function readReservations  ()  {
    try {
        const data = await fs.promises.readFile(path.join(__dirname, '../data/database.json'), 'utf-8');

        return JSON.parse(data);
    } catch (error) {
        console.error('Hubo un error al leer las reservaciones: ', error);
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
        const reservation = data.find(reservation => Number(reservation.id) === Number(id));
        if (reservation) {
            return reservation;
        } else {
            console.error('readReservation: No se encontró la reservación con el id: ', id);
            return null;
        }
    }
    catch (error) {
        console.error('Hubo un error hay leer las reservaciones: ', error);
        return null;
    } 
}

async function updateReservation(id, reservation) {
    try {
        const reservations = await readReservations();
        const index = reservations.findIndex(res => res.id === id);
        if (index !== -1) {
            reservations[index] = reservation;
            await fs.promises.writeFile(path.join(__dirname, '../data/database.json'), JSON.stringify(reservations, null, 2));
            return reservation;
        } else {
            console.error('updateReservation: No se encontró la reservación con el id: ', id);
            return null;
        }
    }
    catch (error) {
        console.error('Hubo un error al actualizar la reservación: ', error);
        return null;
    } 
}

async function deleteReservation(id) {
    try {
        const reservations = await readReservations();
        const index = reservations.findIndex(res => res.id === id);
        if (index !== -1) {
            const deletedReservation = reservations.splice(index, 1);
            await fs.promises.writeFile(path.join(__dirname, '../data/database.json'), JSON.stringify(reservations, null, 2));
            return deletedReservation;
        } else {
            console.error('No se encontró la reservación con el id: ', id);
            return null;
        }
    }
    catch (error) {
        console.error('deleteReservation: Hubo un error al eliminar la reservación: ', error);
        return null;
    } 
}

async function getHotels() {
    return [
        { id: 1, name: 'Hotel 1', location: 'Location 1' },
        { id: 2, name: 'Hotel 2', location: 'Location 2' },
        { id: 3, name: 'Hotel 3', location: 'Location 3' }
    ];
}


module.exports = {
    readReservations,
    writeReservations,
    readReservation,
    updateReservation,
    deleteReservation,
    getHotels
}