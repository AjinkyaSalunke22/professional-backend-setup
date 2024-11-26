import dotenv from 'dotenv'
import connectDB from './db/db.js'
import app from './app.js'

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("Error:", error)
        throw error
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`\n Server is running on http://localhost:${process.env.PORT}\n`)
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed", err)
})