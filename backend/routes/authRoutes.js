import express from "express"
import { loginController, logoutController, registerController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const router =express.Router();


router.get("/current-user", authMiddleware, (req, res) => {
  console.log("check cl user ->", req.user);
  return res.status(200).json({
    message: "Current user fetched",
    user: req.user,
  });
});

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

