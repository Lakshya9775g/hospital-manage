import mongoose, { model } from "mongoose";

const Patients = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: false
    }
})

export default mongoose.model('Patients',Patients);


