import express  from "express"


const router = express.Router()


router.get('/',(req,res)=>{
    res.render('index',{})
})

/* let food =[
    {name: "pera", priec: "100"},
    {name: "manzana", price: "100"},
    {name: "mango", price: "100"}
]


router.get('/',(req,res)=>{
    let usuario= {
     name:"raymond",
     rol:"admin"
    }
 
     res.render('index',{
         user:usuario,
         style: "index.css",
         isAdmin:usuario.rol ==="admin",food
     })
         
     }) */




export default router;