const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});
const adminSchema = Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});
const coursechema = Schema({
  title: String,
  description: String,
  price: String,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = Schema({
  userId: ObjectId,
  courceId: ObjectId,
});
const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", adminSchema);
const courseModel = mongoose.Model("course", courseeSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);

module.export = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
