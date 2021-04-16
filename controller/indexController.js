let visitados=require('../data/datosProductos')
let indexController={
    leerTodos:function(){
        console.log('Leo productos desde atrás')
        return visitados
    }
}
module.exports=indexController