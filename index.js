const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

// (async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://kirti:kirti0707@cluster0.8o1i9.mongodb.net/"
//     );

//     console.log("database connected succesfully");
//     app.listen(3000);
//     console.log("server started at http://localhost:3000");
//   } catch (err) {
//     console.log("error starting server", err);
//   }
// })();

app.listen(3000);
