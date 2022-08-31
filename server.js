const express = require("express");

const auth_router = require('./routes/auth.js')
const general_router = require('./routes/general.js')
var app = express();
const port = process.env.PORT || 4000;
app.get("/",(req,res)=>{
 res.status(200).json("active")
})
app.use('/api/auth/', auth_router)
app.use('/api/', general_router)
 
app.listen(port, ()=>console.log(`server running at ${port}`))
