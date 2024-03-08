import express from 'express'
import * as controller from '../controllers/controllers.js'
const route = express.Router()

// route.post('/',(req,res) => res.json(req.body))
route.post('/', async (req,res)=>{
    const body = json.stringify(req.body)
    try {
       const file = await fs.writefile('./file.txt',body) 
       console.log('file created');
       res.download('../backend/file.txt', (err)=>{
       if(err) {
       console.log(err);
       }else{
       console.log('downloaded');
       }
    })
    } catch (err) {
        res.json(err)
    }
})

route.get('/', (req,res) => res.json("welcome"))
route.post("/payment", controller.payment);
route.post('/register', controller.register)
route.post("/login", controller.login);
route.get("/users", controller.users);
route.get("/user/:id", controller.user);
route.get("/admin-user/:id", controller.adminUser)
route.post('/updateRef/:id',controller.updateRef)
route.post('/update-approve/:id', controller.updateApprove)


export default route
