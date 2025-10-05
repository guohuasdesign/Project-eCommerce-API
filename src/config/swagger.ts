import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "eCommerce API Documentation",
      version: "1.0.0",
      description: "RESTful API built with Express + TypeScript + MongoDB + Swagger",
    },
    servers: [  
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],
  },
  // 👇 adjust this if your routes are elsewhere
  apis: ["./src/routers/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
