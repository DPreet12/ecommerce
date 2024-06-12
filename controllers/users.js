const express = require("express");
const router = express.Router();

const  User  = require("../models/user");

router.get("/", async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.send("error");
    }
});

router.get("/:id", async (req, res) => 
    { 
        try { const user = await User.findById(req.params.id); 
if (!user) 
        return   res.json({ msg: 'User not found' }); 
    res.json(user); } 
        catch (err) {
         res.send("Server Error"); 
    } });


    router.get("/:id/orders", async (req, res) => {
         try { 
    const orders = await Order.find({ user: req.params.id }).populate("products.product"); 
         res.json(orders); 
        } catch (err) { 
            res.send("Server Error");
         } });

         router.get("/category/:category", async (req, res) => { 
            try { 
                const products = await Product.find({ category: req.params.category }); 
                res.json(products);
             } catch (err) { 
                res.send("Server Error"); 
            } });

            router.get("/search/:name", async (req, res) =>
                { 
                  try { 
                        const products = await Product.find(); 
                        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(req.params.name.toLowerCase()) ); 
                        res.json(filteredProducts);
                     } 
                     catch (err) 
                     { 
                        res.send("Server Error");
                     } });


router.post("/", async ( req, res)=> {
    try {
        const   { name, email, password, phone} = req.body;
        const newUser = new User( {
            name, email, password, phone
        });
        const user = await newUser.save();
        res.json(user);

    } catch (error) {
         res.send("Server Error"); 
    }
});

router.put("/:id", async (req, res) => {
     try { const { name, email, password, phone  } = req.body; 
     const user = await User.findById(req.params.id); 
     if (!user) 
        return res.json({ msg: "User not found" });
     user.name = name || user.name; 
     user.email = email || user.email; 
     user.password = password || user.password; 
     user.phone = phone || user.phone; 
     await user.save(); 
     res.json(user); 
    } 
     catch (err) { 
        res.send("Server Error"); 
    } });

    router.delete("/:id", async (req, res) => {
         try { 
            await User.findByIdAndRemove(req.params.id); 
            res.json({ msg: "User removed" }); 
        } catch (err) { 
            res.send("Server Error"); 
        } });
        
        
    module.exports = router;