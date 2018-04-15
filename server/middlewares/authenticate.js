import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';
import User from '../modules/users/model';

export default (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  let token;
  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }

  if (token) {
    jwt.verify(token, authConfig.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to authenticate' });
      } else {
        
        User.findOne({ username: { $oid: decoded._id }}).select({ username: 1, email: 1 }).then((user) => {
          if(!user) {
            res.status(404).json({ error: 'User does not exist' });
          }

          req.currentUser = user;
          next();
        });
      }
    });
  } else {
    res.status(403).json({
      error: 'No token provided',
    });
  }
};
