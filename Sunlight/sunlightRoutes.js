import { Router } from "express";
import * as controller from "./sunlightController.js";

const router = Router();

router.get('/sunlight', controller.getAllCities)
router.post('/sunlight/:City', controller.createCity)
router.get('/sunlight/:Country', controller.getByCountry)
router.get('/sunlight/cityname/:City', controller.getByCityName)
// temperture still work in progress
// router.get('/sunlight/:temperature', controller.getByTemperature)
// router.get('/sunlight/:id', controller.getCityById)
router.put('/sunlight/:id', controller.updateCity)
router.delete('/sunlight/:id', controller.deleteCity)

export default router;
