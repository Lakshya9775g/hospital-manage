import express from 'express';
import { createProfile, deleteProfile, showPatient, showPatients, updateProfile } from '../controllers/functions.js';

const routes = express.Router();
import bodyParser from 'body-parser';

routes.use(bodyParser.json());

routes.get("/patients", showPatients);
routes.get("/patients/:id", showPatient);
routes.post("/register", createProfile);
routes.patch("/edit/:id", updateProfile);
routes.delete("/remove/:id", deleteProfile);

export default routes;