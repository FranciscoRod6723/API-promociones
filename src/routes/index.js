const router = require('express-promise-router')(); 
const {
    index,
    newPromo,
    getPromo,
    replacePromo,
    deletePromo,
    getPromoRooms,
    newRoomPromo,
    deleteRoom,
    replaceRoom
} = require('../controler/index.js');

router.get('/obtenerPromociones', index);
router.get('/obtenerPromo/:promoId', getPromo);
router.get('/obtenerPromo/:promoId/rooms/', getPromoRooms);


router.put('/cambiarPrmo/:promoId', replacePromo);
router.put('/cambiarRoom/:roomId', replaceRoom);


router.delete('/eliminarPromo/:promoId', deletePromo);
router.delete('/eliminarRoom/:roomId', deleteRoom);


router.post('/crearPromo', newPromo);
router.post('/guardarRoom/:promoId', newRoomPromo);


module.exports = router;