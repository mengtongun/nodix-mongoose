const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger.json";
const endpointsFiles = ["./routers/auth.js", "./routers/user.js"];

swaggerAutogen(outputFile, endpointsFiles);
