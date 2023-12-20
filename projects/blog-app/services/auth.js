const jwt = require("jsonwebtoken");

const SECRET_KEY = "$ClAsHes!179";

function generateToken(user) {
  const payload = {
    id: user._id,
    fullName: user.fullName,
    profileImg: user.profileImg,
    role: user.role,
  };

  return jwt.sign(payload, SECRET_KEY);
}

function validateToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = { generateToken, validateToken };
