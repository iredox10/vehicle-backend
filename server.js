import express from 'express'
import connectMongoose from './utils/MongooseConnect.js'
import route from './routes/routes.js'
import cors from 'cors'
const app = express()

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
connectMongoose()
app.use(route)


app.listen(3003, () => console.log('server connected'))