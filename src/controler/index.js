const Promo = require('../models/promoSchema');
const Room = require('../models/roomsSchema');

module.exports = {
    index: async (req, res, next) => {    
        const promo = await Promo.find({});
        res.status(200).json({status: "200 promociones encontradas,", data: promo});
    },
    
    newPromo: async (req, res, next) =>{
        const newPromo = new Promo(req.body);
        const promo = await newPromo.save();
        res.status(200).json({status: "200, promoción agregada", data: promo});
    },

    getPromo: async (req,res,next) =>{
        const { promoId } = req.params;
        const promo = await Promo.findById(promoId);
        res.status(200).json({status: "200, promoción especifica encontrada", data: promo});
        
    },

    replacePromo: async (req,res,next) =>{
        const { promoId } = req.params;
        const newpromo = req.body;
        const allPromo = await Promo.findByIdAndUpdate(promoId, newpromo);
        res.status(200).json({status: "200, promoción actualizada", data: newpromo});
    },

    deletePromo: async (req,res,next) =>{
        const { promoId } = req.params;
        await Promo.findByIdAndRemove(promoId);
        res.status(200).json({status: "200, pormoción eliminada"}); 
    },

    getPromoRooms: async (req,res,next) =>{
        const { promoId } = req.params;
        const promo = await Promo.findById(promoId).populate('rooms');
        res.status(200).json({status: "200, pormoción espeficia con habitaciones", data: promo});
    },

    newRoomPromo: async (req,res,next) =>{
        const { promoId } = req.params;
        var rooms = req.body;
        for(var i = 0; i < rooms.length; i++){
            const newRoom = new Room(rooms[i]);
            const promo = await Promo.findById(promoId);
            newRoom.promo_a = promo;
            const a = await newRoom.save();
            promo.rooms.push(newRoom);
            const b = await promo.save();
        }
        res.status(201).json({status: "200, habitación agregada a la promoción", data: req.body});
    },

    deleteRoom: async (req,res,next) =>{
        const { roomId } = req.params;
        await Room.findByIdAndRemove(roomId);
        res.status(200).json({status: "200, habitación eliminada"}); 
    },

    replaceRoom: async (req,res,next) =>{
        const { roomId } = req.params;
        const newRoom = req.body;
        const allRoom = await Room.findByIdAndUpdate(roomId, newRoom);
        res.status(200).json({status: "200, habitación actualizada", data: newRoom});
    },

};