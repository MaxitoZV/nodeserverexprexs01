const express = require('express')

const port = process.env.PORT || 3000

const app=express()

app.use(express.json())

//Routes

app.get('/',function(req, res){

    //res.json({"name":"Viajera","Interprete":"Frankie Ruiz"});

    const song ={
        "name":"Viajera",
        "singer":[
            "Frankie Ruiz",
            "Fania All Star"
        ],
        "year":1963,
        "author":"Carlos Farfan"
    }
    res.json(song)
})

app.listen(3000, function(){
    console.log('Server listen in port ',port)
})
