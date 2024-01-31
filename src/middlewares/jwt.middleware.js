import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //Read the token
  const token = req.headers["authorization"];

  //If no token, return the error
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  //check if token is valid
  try {
    const payload = jwt.verify(token, "imk67WU86b5uQY1R2ZtjAYfuM6tZC7jQ");
    req.userId = payload.userID;
  } catch (error) {
    //return error
    return res.status(401).send("Unauthorized");
  }

  //call next middleware
  next();
};

export default jwtAuth;
