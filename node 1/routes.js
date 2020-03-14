
module.exports=(app)=>{
      
  app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.get('/home',(req,res)=>{
 res.send("this is second")
})

app.get('/profile',(req,res)=>{
 res.send("this is third")
})

}