import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import userRoutes from "./routes/user.routes";
import { categoryRouter } from "./routes/category.routes";
import loginRoutes from "./routes/login.routes";
import realEstateRoute from "./routes/realEstate.routes";
import schedulesRouter from "./routes/schedules.routes";



const app: Application = express()
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/realEstate", realEstateRoute);
app.use("/categories", categoryRouter);
app.use("/schedules", schedulesRouter);

app.use(handleErrors);
export default app