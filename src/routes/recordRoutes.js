import { Router } from "express";
import auth from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import * as ctrl from "../controllers/recordController.js";

const router = Router();

router.post("/", auth, authorize("admin"), ctrl.createRecord);
router.get("/", auth, ctrl.getRecords);
router.put("/:id", auth, authorize("admin"), ctrl.updateRecord);
router.delete("/:id", auth, authorize("admin"), ctrl.deleteRecord);

export default router;