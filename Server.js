import express from'express'
import morgan from 'morgan'
import helmet from 'helmet'
import UserRoute from './src/routes/User.Route.js'
import Configurations from './src/configurations/Configurations.js'
import Middlewares from  './src/middlewares/Middlewares.js'

const application = express()
application.use(express.json())
application.use(helmet())
application.use(morgan('common'))   //tiny instead of common without Ip

/*
const isOrderPaidFor = (request, respons, next) =>{
    console.log("Order Confirmed")
    next()
}
application.get('/order', isOrderPaidFor, (request, response) => {
    response.send('ORDER ACCEPTED' + Math.random())
})
*/

UserRoute.routes(application)

application.use(Middlewares.notFound)

Configurations.ConnectToPort(application)
Configurations.connectToDatabase()

export default application