const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const { JWT_ADMIN } = require("../config");
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require("../midddleware/admin");
adminRouter.post("/signup", async function (req, res) {
  const { email, password, lastname, firstname } = req.body;
  try {
    await adminModel.create({
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
    });
    res.json({
      message: "user created successfully",
    });
  } catch {
    err;
    console.log("eroror");
  }
});
adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({ message: "inccorect credential" });
  }
});
adminRouter.post("/", adminMiddleware, async function (req, res) {
  const adminId = req.userId;

  const { title, description, imageUrl, price } = req.body;

  const course = await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId,
  });
  res.json({
    message: "course created",
    cousreId: cousre._id,
  });
});
adminRouter.put("/", async function (req, res) {});
adminRouter.get("/bulk", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
