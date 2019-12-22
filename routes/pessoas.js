const express = require ('express')
const pessoasController = require('../controllers/pessoas')

const pessoasRouter = ({ knex }) => {
    const router = express.Router()
    
    router.get('/', pessoasController.index.bind(null, knex))
    router.get('/delete/:id', pessoasController.deleteOne.bind(null, knex))
    router.get('/create', pessoasController.createForm)//no bind bcs no dependency
    router.post('/create', pessoasController.createProcess.bind(null, knex))
    router.get('/update/:id', pessoasController.updateForm.bind(null, knex))
    router.post('/update/:id', pessoasController.updateProcess.bind(null, knex))
    
    return router
}

module.exports = pessoasRouter