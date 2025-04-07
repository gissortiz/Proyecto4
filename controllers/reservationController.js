const reservationService = require('../service/reservationService');

const reservations = [
];

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

const findBy = (req, res) => {
    reservation = reservations.find(reservation => reservation.id === parseInt(req.params.id))
    res.status(200).json({
        message: reservation != undefined ? 'Reserva encontrada' : 'Reserva no encontrada',  
        data: reservation
    });
}

const update = (req, res) => {
    const reservation = reservations.find(reservation => reservation.id === parseInt(req.params.id));
    if (reservation) {
        const index = reservations.indexOf(reservation);
        reservations[index] = req.body;
        res.status(200).json({
            message: 'Reserva actualizada exitosamente',
            data: reservations[index]
        });
    } else {
        res.status(404).json({
            message: 'Reserva no encontrada'
        });
    }

}

const deleteOne = (req, res) => {
const reservation = reservations.find(reservation => reservation.id === parseInt(req.params.id));
    if (reservation) {
        const index = reservations.indexOf(reservation);
        reservations.splice(index, 1);
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


module.exports = {
    create,
    findAll,
    findBy,
    update,
    deleteOne

}