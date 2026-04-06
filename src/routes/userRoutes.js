import { Router } from "express";
import auth from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import { getUsers, updateUser } from "../controllers/userController.js";

const router = Router();

router.get("/", auth, authorize("admin"), getUsers);
router.patch("/:id", auth, authorize("admin"), updateUser);

export default router;