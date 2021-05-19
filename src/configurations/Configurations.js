import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const { PORT,
        DEV_DATABASE_URL,
        ENVIROMMENT,
        PROD_DATABASE_URL
       } = process.env

const ConnectToPort = async (application) => {
try {
    await application.listen(PORT, () =>{
        console.log(`✔️ SERVER IS RUNNING ON PORT : ${PORT}`)
    })
}
catch(error){
    console.error('X ERROR OCCURD WHILE TRYING TO CONNECT TO THE PORT')
}
}

const connectToDatabase = async () =>{
    const DATABASE_URL = ENVIROMMENT==='DEVELOPMENT'? DEV_DATABASE_URL:PROD_DATABASE_URL
try {
    await mongoose.connect(DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
    console.log('✔️ successfully connected to the database')

} catch (error) {
        console.error('Error While Trying to connect to the database' + error)
        process.exit()
}

}

export default{
    ConnectToPort,
    connectToDatabase

}