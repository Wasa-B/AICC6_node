const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const PORT = process.env.PORT || 8000;
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
 
const app = express();
app.use(cors());
app.use(express.json());

app.use("/public",express.static(path.join(__dirname,'public')));
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/auth",authRouter);
app.get("/",(req,res)=>{
  res.send("Auth API Backend Running...");
})

app.listen(PORT,()=>{
  console.log("Server is running on port: ",PORT);
})