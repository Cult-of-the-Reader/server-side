import { Router } from "express"
import cartController from "../controllers/cartItem.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

/**
 * @swagger
 * /api/v4/cart:
 *  get:
 *   summary: Obtener el carrito del usuario
 *   description: Devuelve los items del carrito del usuario autenticado.
 *   tags: [Carrito]
 *   security:
 *     - jwtAuth: []
 *   responses:
 *     200:
 *       description: Lista de items en el carrito
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/CartItem'
 *     401:
 *       description: No autorizado
 *     500:
 *       description: Error del servidor
 */
router.get("/cart", authMiddleware, cartController.getCart)

/**
 * @swagger
 * /api/v4/add-cart:
 *  post:
 *   summary: Añadir un libro al carrito
 *   description: Añade un libro al carrito del usuario autenticado.
 *   tags: [Carrito]
 *   security:
 *     - jwtAuth: []
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             bookId:
 *               type: string
 *               description: ID del libro a añadir
 *   responses:
 *     200:
 *       description: Libro añadido al carrito
 *     400:
 *       description: El libro no está disponible (sin stock)
 *     401:
 *       description: No autorizado
 *     500:
 *       description: Error del servidor
 */
router.post("/add-cart", authMiddleware, cartController.addCart)

/**
 * @swagger
 * /api/v4/decrement-cart/{id}:
 *  put:
 *   summary: Reducir la cantidad de un item en el carrito
 *   description: Reduce la cantidad de un libro en el carrito del usuario.
 *   tags: [Carrito]
 *   security:
 *     - jwtAuth: []
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: ID del item en el carrito
 *   responses:
 *     200:
 *       description: Cantidad reducida correctamente
 *     401:
 *       description: No autorizado
 *     404:
 *       description: Item no encontrado en el carrito
 *     500:
 *       description: Error del servidor
 */
router.put("/decrement-cart/:id", authMiddleware, cartController.decrementCart);

/**
 * @swagger
 * /api/v4/cart/{id}:
 *  delete:
 *   summary: Eliminar un item del carrito
 *   description: Elimina un libro del carrito del usuario.
 *   tags: [Carrito]
 *   security:
 *     - jwtAuth: []
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: ID del item en el carrito
 *   responses:
 *     200:
 *       description: Item eliminado correctamente
 *     401:
 *       description: No autorizado
 *     404:
 *       description: Item no encontrado en el carrito
 *     500:
 *       description: Error del servidor
 */
router.delete("/cart/:id", authMiddleware, cartController.deleteCart)

export default router