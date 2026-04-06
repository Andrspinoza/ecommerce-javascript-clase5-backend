
import "dotenv/config"
import express from "express";
import { conectar } from "./config/database.js";
import productRouter from "./routes/productRoutes.js";
import swaggerDocs from "./config/swagger.js";
import cors from "cors";

app.use(cors());

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

conectar();

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    res.send("Hola desde mi backend del ecommerce!");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
    swaggerDocs(app, port);
});

