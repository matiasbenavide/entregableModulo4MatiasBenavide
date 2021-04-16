const express=require('express')
const path=require('path')
const app=express()
const port=process.env.PORT
const indexRouter=require('./routes/indexRouter')
const userRouter=require('./routes/userRouter')
const productRouter=require('./routes/productRouter')
const publicPath=path.resolve(__dirname,'./public')
app.use(express.static(publicPath))
//CONFIGURACIÓN DE EJS
app.set('view engine','ejs')

//---------------------------------------------------

app.use('/', indexRouter)
/*app.use('/',userRouter)
app.use('/products',productRouter)*/

//---------------------------------------------------

/*app.get('/',(req,res)=>{
    res.render('index')
})
//ESTO NO VA
app.post('/',(req,res)=>{
    res.render('index')
})
//ESTO NO VA
app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/login',(req,res)=>{
    res.render('login')
})*/
app.listen(port||3001,function(){
    console.log("Servidor corriendo con éxito")
})