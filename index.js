import { Router } from "express";
import sunlightRoutes from "./Sunlight/sunlightRoutes.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", sunlightRoutes);
// router.use("/", dataTwoRoutes);


export default router;