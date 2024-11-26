import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected on host: ${connectionInstance.connection.host}\n`)
    } catch (error) {
        console.error(`\n EROOR in connecting mongodb... ${error.message}\n`)
        process.exit(1)
    }
}

export default connectDB