import express from 'express'
import * as controller from '../controllers/controllers.js'
import File from '../models/file.js'
import path from 'node:path'
import * as fs from 'node:fs/promises'

const route = express.Router()
// route.post('/', async (req,res)=>{ 
    
//     const body = JSON.stringify(req.body)
//     try {
//         const user = await User.create({
//             transactionRef: req.body.TransactionRef,
//             payerRefNo: req.body.PayerRefNo,
//             paymentRef: req.body.paymentRef,
//             licenceFee: req.body.amount,
//             paymentDate: req.body.paymentDate
//         })
//        const file = await fs.writeFile('./file.txt',body) 
//     const text = await fs.readFile('./file.txt', 'utf8')
//     const dbfile = await File.create({name: file, content: text})
//     res.json(dbfile,user)
//     } catch (err) {
//         res.json(err.message)
//     }

// })

route.post('/', async (req,res)=>{ 
    const body = JSON.stringify(req.body)
    try {
       const file = await fs.writeFile('./file.txt',body) 
       console.log('file created');
    const text = await fs.readFile('./file.txt', 'utf8')
       const dbfile = await File.create({name: file, content: text})
                const user = await User.create({
            transactionRef: req.body.TransactionRef,
            payerRefNo: req.body.PayerRefNo,
            paymentRef: req.body.paymentRef,
            licenceFee: req.body.amount,
            paymentDate: req.body.paymentDate
        })
    res.json({dbfile,user})
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
