const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors') 

const app = express()

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'',
    database : 'CRUDDATABASE'

})

db.connect( (error) => {
    if (!!error) {
        console.log('error')
    }
    else {
        console.log('connected')
    }
})




app.use(cors())
app.use(bodyParser.urlencoded({ extended : true}))
app.use(express.json())



app.get('/api/get' , (req , res ) => {

    const sqlSelect = 'SELECT * FROM todoapp'
    db.query(sqlSelect ,  (err , result) => {
            res.send(result)
            
           
    })
})

app.post('/api/insert' , (req , res) => {

    const id = req.body.id
    const nom = req.body.title


    const sqlInsert = 'INSERT INTO todoapp (id ,Title) VALUES (?, ? )'
    db.query(sqlInsert , [id ,nom ] , (err , result) => {
            if(!!err) {
                console.log(err)
            }
            else {
                console.log('ajouté avec success')
            }
           
    })
})

app.delete('/api/delete/:delete' ,(req , res) => {
    const id = req.params.delete
    const sqlDelete = 'DELETE FROM todoapp WHERE id = ?'

    db.query(sqlDelete , id ,(err , result) => {
          if (err) { console.log(err);}
          else {console.log('sup avec succes')}

    })
})

app.put('/api/update' ,(req , res) => {

    const name = req.body.title
    const id = req.body.id
   

    const sqlUpdate = 'UPDATE todoapp SET (Title = ?) WHERE id = ?'

    db.query(sqlUpdate , [name , id]  ,(err , result) => {
          if (err)  console.log(err);

    })

})

app.post('/api/Recherche' , (req , res) => {

    const mot = req.body.rec

    const sqlRecherche ='SELECT Title FROM todoapp WHERE id = ?'


    db.query(sqlRecherche , mot , (err , result) => {

        if(!!err) {
            console.log(err)
        }
        else {
            console.log(result)
            res.send(result)
        }



    })


})


app.listen(3003 , () => {

    console.log('running on port 3002')
})