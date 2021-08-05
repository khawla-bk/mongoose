const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const userRoute = require("./routes/user");

// DB connection
connectDB();

app.use(express.json);

//Routes
app.use("/api/users", userRoute);

//App listen
const port = 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
