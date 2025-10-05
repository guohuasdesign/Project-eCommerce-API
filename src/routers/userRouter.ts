import { Router } from "express";
import {
	getUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser
} from '#controllers';
import { validateZod } from '#middleware';
import { userInputSchema, paramsSchema } from '#schemas';

const userRouter = Router();

userRouter
	.route('/')
	.get(getUsers)
	.post(validateZod(userInputSchema, 'body'), createUser);

userRouter.use('/:id', validateZod(paramsSchema, 'params'));
userRouter
	.route('/:id')
	.get(getUserById)
	.put(validateZod(userInputSchema, 'body'), updateUser)
	.delete(deleteUser);

export default userRouter; 

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Ming
 *               lastName:
 *                 type: string
 *                 example: Xiao
 *               email:
 *                 type: string
 *                 example: ming@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */

