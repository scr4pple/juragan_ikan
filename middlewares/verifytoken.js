const jwt = require('jsonwebtoken');

// verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    const jwtSecretKey = 'test';

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
  
    jwt.verify(token.replace('Bearer ', ''), jwtSecretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token invalid' });
      }

      
      req.user = decoded.user; 
      next();
    });
}

module.exports = verifyToken;