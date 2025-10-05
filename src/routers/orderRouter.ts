import { Router } from "express";
import {
  getOrders,
  createOrder,
  getOrderById,
  deleteOrder
} from "#controllers";

const orderRouter = Router();

orderRouter.route("/")
  .get(getOrders)
  .post(createOrder);

orderRouter.route("/:id")
  .get(getOrderById)
  .delete(deleteOrder);

export default orderRouter;

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Customer order endpoints
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userId, products]
 *             properties:
 *               userId:
 *                 type: string
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required: [productId, quantity]
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: number
 *     responses:
 *       201:
 *         description: Order created
 */
