const express=require("express")
const app=express()
app.use("/",express.static("./videoRentalFrontend"))
app.use("/css",express.static("./css"))
const port=process.env.PORT||3000
app.listen(port,()=>console.log(`running on port ${port}`))