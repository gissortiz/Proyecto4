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


module.exports = {
    create,
    findAll,
    findBy,
    update,
    deleteOne

}