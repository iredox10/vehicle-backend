import User from "../models/user.js";

export const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.json({ err: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    res.status(200).json(user);
  } catch (err) {
    res.json(err.message);
  }
};

export const payment = async (req, res) => {
  try {
    const payment = await User.findOneAndUpdate(
      { chasisNumber: req.body.chasisNumber },
      { status: req.body.status },
      { new: true }
    );
    // const u = await User.findOne({chasisNumber: req.body.chasisNumber})
    payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.json(err.message);
  }
};

export const updateRef = async (req, res) => {
  try {
    const payment = await User.findByIdAndUpdate(req.params.id,
      { chasisNumber: req.body.chasisNumber,
       status: req.body.status ,
       transactionRef: req.body.transactionRef, 
       paymentUrl: req.body.paymentUrl ,
       paymentCode: req.body.paymentCode, 
       payerRefNo: req.body.payerRefNo 
      },
      { new: true }
    );
    payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.json(err.message);
  }
};

export const users = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json(err.message);
  }
};

export const user = async (req, res) => {
  try {
    const user = await User.findOne({_id:req.params.id})
    res.json(user);
  } catch (err) {
    res.json(err.message);
  }
};

export const adminUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.json(user);
  } catch (err) {
    res.json(err.message);
  }
};

export const updateApprove = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        approved: req.body.approve,
        issueDate: new Date(),
        expiredDate: req.body.expireDate,
        plateNumber: req.body.plateNumber
      },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.json(err.message);
  }
};
