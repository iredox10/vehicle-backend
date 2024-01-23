import mongoose from "mongoose";


const user = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    vehicleMake: {
      type: String,
      required: true,
    },
    vehicleType: {
      type: String,
      required: true,
    },
    chasisNumber: {
      type: String,
      required: true,
      unique: true,
    },
    licenceFee: {
      type: String,
      required: true,
    },
    licenseType: {
      type: String,
      required: true,
    },
    weightAuthorized: {
      type: String,
      required: true,
    },
    netWeight: {
      type: String,
      required: true,
    },
    personAuthorized: {
      type: String,
      required: true,
    },
    transactionId: String,
    applicationId: String,
    refNumber: String,
    color: String,
    status: {
      type: "String",
      default: "pending",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', user);

export default User