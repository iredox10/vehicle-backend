import mongoose from "mongoose";


const user = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    phoneNumber: {
      type: String,
      // required: true,
      // unique: true,
    },
    email: {
      type: String,
      // required: true,
      // unique: true,
    },
    vehicleMake: {
      type: String,
      // required: true,
    },
    vehicleType: {
      type: String,
      // required: true,
    },
    chasisNumber: {
      type: String,
      // required: true,
      // unique: true,
    },
    licenceFee: {
      type: String,
      // required: true,
    },
    licenseType: {
      type: String,
      // required: true,
    },
    weightAuthorized: {
      type: String,
      // required: true,
    },
    netWeight: {
      type: String,
      // required: true,
    },
    personAuthorized: {
      type: String,
      // required: true,
    },
    transactionId: {
      type: String,
    },
    transactionRef: {
      type: String,
    },
    paymentCode: {
      type: String,
      default: ''
    },
    paymentUrl: String,
    paymentCode: String,
    applicationId: String,
    payerRefNo: String,
    paymentRef: String,
    nabrolRef: String,
    color: String,
    plateNumber: String,
    paymentDate: Date,
    approved: {
      type: String,
      default: 'pending'
    },
    status: {
      type: "String",
      default: "pending",
    },
    dateOfBirth: Date,
    issueDate: Date,
    expiredDate: Date
  },
  { timestamps: true }
);

const User = mongoose.model('User', user);

export default User
