import express from "express";

import { authenticateToken } from "../middleware/middleware";
import { login, register } from "../handlers/user";
import { reportSpam } from "../handlers/spanHandler";
import { searchByName, searchByPhoneNumber } from "../handlers/searchHandler";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/report-spam", authenticateToken, reportSpam);
router.get(
  "/search/phone/:phoneNumber",
  authenticateToken,
  searchByPhoneNumber
);
router.get("/search/name/:name", authenticateToken, searchByName);

export default router;
