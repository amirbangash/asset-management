
import jwt from 'jsonwebtoken'

const createToken = (user) => {
  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
      id: user.id,
      role: user.role,
      password: user.password
    },
    process.env.TOKEN_KEY,
    { expiresIn: '8h' }
  );
  return token;
}
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    return next();
  } catch (err) {
    console.log("error is ", err)
    return res.status(401).send('Invalid Token');
  }

};

export { verifyToken, createToken }
