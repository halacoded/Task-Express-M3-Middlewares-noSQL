const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const NotFoundHandler = require("./Middleware/NotFoundHandler");
const errorHandler = require("./Middleware/errorHandler");
const path = require("path");
connectDb();
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

app.use("/posts", postsRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(NotFoundHandler);
app.use(errorHandler);
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
