import express from 'express'
import * as controller from '../controllers/controllers.js'
import File from '../models/file.js'
import path from 'node:path'
import * as fs from 'node:fs/promises'
import User from '../models/user.js'

const route = express.Router()



route.post('/', async (req,res)=>{ 
    const body = JSON.stringify(req.body)
    try {
            const user = await User.findOneAndUpdate({transactionRef:req.body.TransactionRef},{
            transactionRef: req.body.TransactionRef,
            payerRefNo: req.body.data.PayerRefNo,
            paymentRef: req.body.data.paymentRef,
            licenceFee: req.body.data.amount,
            paymentDate: req.body.data.PaymentDate,
            status: 'paid',
        },{new:true})
        // const data = JSON.stringify(body)
       const file = await fs.writeFile('./file.txt',body) 
       console.log('file created');
     
    const text = await fs.readFile('./file.txt', 'utf8')
    const dbfile = await File.create({name: 'file', content: text})
    console.log(text);
    res.json({dbfile,user})
    } catch (err) {
        res.json(err.message)
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

route.get('/webhook-user/:id', async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.json(err.message)
    }
})

route.post('/complete-reg/:id', async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{
            ownerName:req.body.ownerName,
            address: req.body.address,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            vehicleMake: req.body.vehicleMake,
            vehicleType: req.body.vehicleType,
            chasisNumber: req.body.chasisNumber,
            netWeight: req.body.netWeight,
            weightAuthorized: req.body.weightAuthorized,
            personAuthorized: req.body.personAuthorized
        },{new:true})
        res.json(user)
    } catch (err) {
       res.json(err.message) 
    }
})

export default route
