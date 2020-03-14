   var express=require('express')
   var app=express()
   var port = 5000;
   var bodyParser= require('body-parser')
//static files
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
  

//routes
require('./routes')(app)

app.set('view engine','ejs')

app.listen(port,()=>{
    console.log('listen'+port)
})