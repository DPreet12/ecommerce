const express = require("express");
const router = express.Router();

const  Order  = require("../models/order");

router.get("/", async(req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.send("error");
    }
});

router.get("/:id", async (req, res) => 
    { 
        try { const orders = await Order.findById(req.params.id); 
if (!orders) 
        return   res.json({ msg: 'User not found' }); 
    res.json(orders); } 
        catch (orders) {
         res.send("Server Error"); 
    } });



    router.post("/", async ( req, res)=> {
        try {
            const  { user, product, quantity, total} = req.body;
            const newOrder = new Order( {
                user, product, quantity, total
            });
            const order = await newOrder.save();
            res.json(order);
    
        } catch (error) {
             res.send("Server Error"); 
        }
    });