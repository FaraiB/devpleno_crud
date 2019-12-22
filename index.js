const express = require('express')
const path = require ('path')
const app = express()
const port = process.env.PORT || 3000
const mysql = require('mysql')
const bodyParser = require('body-parser')
/*const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database: 'cadastro'
})*/
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host:'127.0.0.1',
        user: 'root',
        password: '',
        database: 'cadastro'
    }
})
const dependencies = {
    //connection,
    knex
}

const pessoas = require('./routes/pessoas')

app.use(bodyParser.urlencoded({ extended: false}))

app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))
app.use('/pessoas', pessoas(dependencies))

//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/*connection.connect(() => {
    app.listen(port, () => console.log('CRUD listening on port ' + port))
})*/
app.listen(port, () =>   console.log('Knex operations on port ' + port))
//knex.connect(async() => {
    
//})
/*const execute = async() => {
    console.log('Knex Operations')
   
    //insert
    await knex('people').insert({
            name: 'Farai Bvuma'
    })*/
   
    //query
    /*
    const people = await knex('people').select('*')
    console.log(people)*/
   
    //update
    //await knex('people').where({id:1}).update({ name: 'james'})

    //delete
    //await knex('people').where({id:1}).del()
//}

//execute()

