import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { response } from 'express'
import {describe, it as test } from 'mocha'
import { request } from 'node:http'
import application from '../Server.js'


Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)

const testingNonExistenRoute = () =>{
 describe('API CALL towards nonexistent route', () => { 
     test('Expecting 404 NOT_FOUND', (done) =>{
         Chai.request(application)
         .get(`/${randomString}`)
         .end((request,response) => {
             response.should.have.a.status(404)
             done()
         })
     })
 })
}

const getAllUsers = () => {
    test('Fetch(GET) all users from database', done => {
    Chai.request(application)
    .get('/user')
    end((request,response) => {
        response.should.have.status(200)
        response.body.should.be.a('array')
        response.body.should.length.be.eq(10)
        done()
    })
    })
}

const createUser = () =>{
    const mockaData = {
        username: randomString,
        password : randomString
    }
    test('Create(POST) method for user entity', done => {
        Chai.request(application)
        .post('/user')
        .send(mockaData)
        .end((request, response) => {
            response.should.have.a.status(200)
            response.body.should.be.a('object')
            response.body.should.have.property('username').eq(mockData.username)
            response.body.should.have.property('password').eq(mockData.password)
            done()
        })
    })
}

describe('TESTING THE USER API ROUTE', () => {
    testingNonExistenRoute()
    getAllUsers()
    createUser()
    
})