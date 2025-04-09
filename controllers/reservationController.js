const reservationService = require('../service/reservationService');


const create = async (req, res) => {
    const reservation= req.body;
    
    reservationService.writeReservations(reservation);
    res.status(201).json({
        message: 'Su reserva fue creada exitosamente',
        data: reservation
    });    
}

const findAll = async(req, res) => {
    const dataReservations = await reservationService.readReservations()
    console.log('Leyendo las reservaciones');
    console.log('Reservaciones leidas: ', dataReservations);
    res.status(200).json({
        message: 'Lista de reservas',
        data: dataReservations   
    });  
}

const findBy = async (req, res) => {
    const reservation = await reservationService.readReservation(parseInt(req.params.id));
    if (reservation) {
        res.status(200).json({
            data: reservation,
            message: 'Reserva encontrada'
        });
    } else {
            res.status(404).json({
                message: 'Reserva no encontrada'
            });
        }
    };

const update = async (req, res) => {
    const reservation = await reservationService.updateReservation(parseInt(req.params.id), req.body);
    if (reservation) {
        res.status(200).json({
            message: 'Reserva actualizada exitosamente',
            data: reservation
        });
    } else {
        res.status(404).json({
            message: 'Reserva no encontrada'
        });
    }

}

const deleteOne = (req, res) => {
    const id = parseInt(req.params.id);
    const reservation = reservationService.deleteReservation(id);
    if (reservation) {
        res.status(200).json({
            message: 'Reserva eliminada exitosamente',
            data: reservation
        });
    } else {
        res.status(404).json({
            message: 'Reserva no encontrada'
        });
    }
 
}

const hotelSearch = async (req, res) => {
    const reservations = await reservationService.readReservations();
    const { hotel, checkin, checkout, roomType, status, numberGuests } = req.query;
    let filteredReservations = reservations;

    if (hotel) {
        filteredReservations = filteredReservations.filter(reservation => reservation.hotel === hotel);
    } 
    
    if (checkin && checkout) {
        filteredReservations = filteredReservations.filter(reservation => {
            return new Date(reservation.checkin) >= new Date(checkin) && new Date(reservation.checkout) <= new Date(checkout);
        });
    }
    
    if (roomType) {
        filteredReservations = filteredReservations.filter(reservation => reservation.roomType === roomType);
    }

    if (status) {
        filteredReservations = filteredReservations.filter(reservation => reservation.status === status);
    }
    
    if (numberGuests) {
        filteredReservations = filteredReservations.filter(reservation => reservation.numberGuests === numberGuests);
    }

    if (hotel || checkin || checkout || roomType || status || numberGuests) {
        res.status(200).json({
            message: 'Reservas filtradas',
            data: filteredReservations
        });
    } else {
        res.status(400).json({
            message: 'No se encontraron reservas'
        });
    }
}

module.exports = {
    create,
    findAll,
    findBy,
    update,
    deleteOne,
    hotelSearch
}

