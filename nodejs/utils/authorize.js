const passport = require("passport");

const authorize = (req, res, next) => {
  passport.authenticate(
    "jwt",
    {
      session: false,
    },
    async (err, user) => {
      if (!user || err) {
        res.status(401).json({ message: "UnAuthorized" });
      } else {
        req.user = user;
        next();
      }
    }
  )(req, res, next);
};

module.exports = authorize;
