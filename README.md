# Project-eCommerce-API

building an eCommerce API with Express + TypeScript + Mongoose

Project structure:

src/
├── db/
│   └── index.ts           # MongoDB connection
├── controllers/
│   ├── index.ts           # export all controllers
│   └── users.ts           # logic for user routes
├── models/
│   ├── index.ts           # export all models
│   └── User.ts            # Mongoose User schema
├── routers/
│   ├── index.ts           # export all routers
│   └── userRouter.ts      # Express router for users
├── types/
│   └── index.ts           # custom TS types/interfaces
└── app.ts                 # Express app entrypoint
