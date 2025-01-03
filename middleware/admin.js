const jwt = require("jsonwebtoken");
const { JWT_ADMIN } = require("../config");

function adminMiddleware(req, res, next) {
  const token = req.headers.token;
  const decode = jwt.verify(token, JWT_ADMIN);

  if (decode) {
    req.userId = decode.next();
  } else
    res.status(403).json({
      message: "you r not signed in",
    });
}

module.exports = {
  adminMiddleware: adminMiddleware,
};
