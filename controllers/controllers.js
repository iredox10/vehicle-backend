import User from "../models/user.js"

export const register = async(req,res) =>{
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (err) {
        res.json({err:err.message})
    }
}

export const login = async(req,res)=>{
    try {
        const user = await User.findOne({chasisNumber: req.body.chasisNumber})
        res.status(200).json(user)
    } catch (err) {
        res.json(err.message)
    }
}

export const payment = async (req,res) =>{
    
    try {
        const payment = await User.findOneAndUpdate({chasisNumber: req.body.chasisNumber}, {status: req.body.status},{new:true})
        // const u = await User.findOne({chasisNumber: req.body.chasisNumber})
        payment.save()
        res.status(201).json(payment)
    } catch (err) {
        res.json(err.message)
    }
}



export const users = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users);
  } catch (err) {
    res.json(err.message);
  }
};

export const user = async (req, res) => {
  try {
    const user = await User.findOne({ chasisNumber: req.params.id });
    res.json(user);
  } catch (err) {
    res.json(err.message);
  }
};
