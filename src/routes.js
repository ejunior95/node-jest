const routes = require('express').Router()
const {User} = require('./app/models')

User.create({
    name: 'Junior', 
    email: 'e.junior95@gmail.com', 
    password_hash: '28393829032'
})

module.exports = routes;