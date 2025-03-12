import { Router } from "express"
import cartController from "../controllers/cartItem.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

router.get("/cart", authMiddleware, cartController.getCart)
router.post("/add-cart", authMiddleware, cartController.addCart)
router.put("/decrement-cart/:id", authMiddleware, cartController.decrementCart);
router.delete("/cart/:id", authMiddleware, cartController.deleteCart)

export default router