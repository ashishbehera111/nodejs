data={
  name:"ashish",
  degination:"software-enge.."
}
module.exports=(app)=>{
      
  app.get('/',(req,res)=>{
    res.render('home')
})


app.get('/about',(req,res)=>{
 res.render("about")
})


app.get('/profile/:id',(req,res)=>{
  data={
    name:req.params.id,
    degination:req.params.id
  }
  res.render("home",{data:data})
})

}