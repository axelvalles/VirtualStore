const mongoose = require('mongoose')
const URI = process.env.STATUS === 'PROD' ? process.env.DBURI_PROD : process.env.DBURI_DEV
const db = mongoose.connection;


function connect(){
    mongoose.connect(URI, {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    })

    db.on("open", () =>{
        console.log("conecct")
    })

    db.on("error", (error) =>{
        console.log("Error", error)
    })
}

connect()
