import express from "express";
import '#db';
import { userRouter, categoryRouter, productRouter, orderRouter } from '#routers';
import { errorHandler } from '#middleware';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.ts";


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.use('*splat', (req, res) => {
	throw new Error('Not found', { cause: { status: 404 } });
});

app.use(errorHandler);

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

