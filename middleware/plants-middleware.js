const jwt = require("jsonwebtoken");

function restrict() {
  return async (req, res, next) => {
    const authError = {
      message: "Sorry, invalid credentials, you can't view your plants",
    };
    try {
      const token = req.headers.authroization;
      if (!token) {
        return res.status(401).json(authError);
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json(authError);
        }
        req.token = decoded;
        next();
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = restrict;
