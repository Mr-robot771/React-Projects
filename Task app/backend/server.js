const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const { errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require('./connectBD/database.js');
const router = require("./routes/userRoutes.js");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',router)

app.use("/api/tasks", require("./routes/taskRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"))

app.use(errorHandler);

app.listen(port, () => console.log(`server is listening at port ${port}`));
