const express = require("express");
const router = express.Router();

const  User  = require("../models/product");

router.get("/", async(req, res) => {
    try {
        const users = await Product.find();
        res.json(products);
    } catch (error) {
        res.send("error");
    }
});

router.get("/:id", async (req, res) => 
    { 
        try { 
            const product = await Product.findById(req.params.id); 
if (!product) 
        return   res.json({ msg: 'User not found' }); 
    res.json(product);
 } 
        catch (err) {
         res.send("Server Error"); 
    } });

    router.post("/", async ( req, res)=> {
        try {
            const   { name, description, price, category} = req.body;
            const newProducts = new Product( {
                name, description, price, category
            });
            const products = await newProducts.save();
            res.json(products);
    
        } catch (error) {
             res.send("Server Error"); 
        }
    });
    
    
router.put("/:id", async (req, res) => {
    try { const { name, description, price, category  } = req.body; 
    const products = await Product.findById(req.params.id); 
    if (!products) 
       return res.json({ msg: "User not found" });
    products.name = name || products.name; 
    products.description = description || products.description; 
    products.price = price || products.price; 
    products.category = category || products.category; 
    await products.save(); 
    res.json(products); 
   } 
    catch (err) { 
       res.send("Server Error"); 
   } });

   router.delete("/:id", async (req, res) => {
        try { 
           await Product.findByIdAndRemove(req.params.id); 
           res.json({ msg: "User removed" }); 
       } catch (err) { 
           res.send("Server Error"); 
       } });
       
       
   module.exports = router;