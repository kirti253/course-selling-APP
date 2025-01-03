const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const JWT_ADMIN = "de43fdw3";
const jwt = require("jsonwebtoken");

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
adminRouter.post("/", async function (req, res) {});
adminRouter.put("/", async function (req, res) {});
adminRouter.get("/bulk", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
