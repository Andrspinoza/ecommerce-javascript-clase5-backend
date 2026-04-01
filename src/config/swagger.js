import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Ecommerce",
            version: "1.0.0",
            description: "Documentación de la API del Ecommerce",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor de desarrollo",
            },
        ],
    },
    apis: ["./src/routes/*.js"], // Archivos que contienen anotaciones swagger
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Documentación disponible en http://localhost:${port}/api/docs`);
};

export default swaggerDocs;
