import express from 'express'
import * as controller from '../controllers/controllers.js'
const route = express.Router()

route.get('/', (req,res) => res.json(req.body))
route.post("/payment", controller.payment);
route.post('/register', controller.register)
route.post("/login", controller.login);
route.get("/users", controller.users);
route.get("/user/:id", controller.user);
route.get("/admin-user/:id", controller.adminUser)
route.post('/updateRef/:id',controller.updateRef)
route.post('/update-approve/:id', controller.updateApprove)


export default route
