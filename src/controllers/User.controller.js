import UserModel from '../models/User.models.js'
import StatusCode from '../configurations/StatusCode.js'
import { request } from 'node:http'
import { response } from 'express'

const createUser = async (request, response) =>{
    const user = new UserModel({
        username: request.body.username,
        password: request.body.password
    })

    try{
        const databaseResponse = await user.save()
        response.status(StatusCode.CREATED).send(databaseResponse)

    } 
    catch(error){
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const getAllUsers = async (request, response) =>{
try {
    const databaseResponse =  await UserModel.find()
    response.status(StatusCode.OK).send(databaseResponse)
} catch (error) {
    response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
}
}

const getUserById = async (request,response) =>{
    try {
        const databaseResponse = await UserModel.findOne({_id: request.params.userId})
        response.status(StatusCode.OK).send(databaseResponse)
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const deleteUserById = async (request,response) =>{
    try {
        const databaseResponse =await UserModel.findByIdAndDelete(request.params.userId)
        response.status(StatusCode.OK).send({message : `Successfully deleted the user ${databaseResponse.username}`})

    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: `Error occurd while trying to delete user with id ${request.params.userId}`, stackTrace: error.message})

    }
}

const updateUser = async(request,response) =>{
  
       const data = {
        username: request.body.username,
        password: request.body.password
       }
    try {
        if(!request.body.username){
            return response.status(StatusCode.BAD_REQUEST).send({message: 'empty values ar not valid'})
        }
        const databaseResponse = await UserModel.findByIdAndUpdate(request.params.userId, data, {new: true})
        response.status(StatusCode.OK).send(databaseResponse)
        
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})

    }
}

export default{
    createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUser
}
