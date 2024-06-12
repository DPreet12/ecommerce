require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();

//middleware
app.use(express.json());


// routes
app.use("/users", require("./controllers/users"));
app.use("/products", require("./controllers/products"));
app.use("/orders", require("./controllers/orders"));

app.get("/", (req, res) => { 
    res.send("API is running..."); 

});
// Port
const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => console.log(`Server started on port ${PORT}`));