const exp=require('express')

const m=require('mongoose')

const url='mongodb://localhost/cbit'
m.connect(url,{useNewUrlParser:true})

const app=exp()

const con =m.connection

con.on('open',function()
{
    console.log("connection started")
}
)

app.use(exp.json())

const r=require('./route/books')
app.use('/book1',r)
app.listen(9000,()=>{
    console.log("server connected")
})