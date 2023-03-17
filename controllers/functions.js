import Patients from "../model/patients.js";



const showPatients = async (req, res)=>{
    try{
        const patients = await Patients.find()
        res.json(patients);
    }catch(e){
        res.send('Error: ' + e);
    }
}
const showPatient  = async (req, res)=>{
    try{
        const patient = await Patients.findById(req.params.id)
        res.json(patient);
    }catch(e){
        res.send('Error: ' + e);
    }
}

const createProfile = async (req, res)=>{
    const data = new Patients({
        name : req.body.name,
        age : req.body.age,
        address : req.body.address,
    })
    try{
        // const data = await req.body;
        const d1 = await data.save();
        res.json(d1);
    }catch(e){
        res.send('Error: ' + e);
    }
}

const updateProfile = async (req, res)=>{
    try{
        const patient = await Patients.findById(req.params.id)
        patient.name = req.body.name
        const p1 = await patient.save();
        res.json(p1);
    }catch(e){
        res.send('Error: ' + e);
    }
}

const deleteProfile = async (req, res)=>{
    try{
        const p1 = await Patients.findByIdAndDelete(req.params.id)
        // patient.name = req.body.name
        // const p1 = await patient.save();
        res.json(p1);
    }catch(e){
        res.send('Error: ' + e);
    }
}

export  {showPatients, createProfile, updateProfile, deleteProfile, showPatient};