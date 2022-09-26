const dotenv = require("dotenv");
const mongoose = require( "mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, (err) => {
    err
        ? console.log("⛔ Error al conectarse a MongoDB")
        : console.log("🆗 Conectados a MongoDB")
})

module.exports = mongoose;