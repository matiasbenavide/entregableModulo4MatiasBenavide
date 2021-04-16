const express=require('express')
const router=express.Router()
const indexController=require('../controller/indexController')
router.get('/',(req,res)=>{
    const products=indexController.leerTodos()
    console.log('Volví del controller')
    res.render('index',{ products })
})
module.exports=router