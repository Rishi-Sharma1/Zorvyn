import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  summary,
  categorySummary,
} from "../controllers/dashboardController.js";

const router = Router();

router.get("/summary", auth, summary);
router.get("/categories", auth, categorySummary);

export default router;