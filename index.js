const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kirti:kirti0707@cluster0.8o1i9.mongodb.net/course-app"
    );

    console.log("database connected succesfully");
    app.listen(8000);
    console.log("server started at http://localhost:8000");
  } catch (err) {
    console.log("error starting server", err);
  }
})();
