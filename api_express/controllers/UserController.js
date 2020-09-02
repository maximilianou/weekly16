// controllers/UserController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const env = require('../config/environment');

exports.register = function (req, res) {
  const { username, email, password, passwordConfirmation } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: 'Please provide email or password' });
  }
  if (password !== passwordConfirmation) {
    return res.status(422).json({ error: 'Password does not match' });
  }
  //  User.findOne({ email }, (err, existingUser) => {
  //    if (err) {
  //      return res.status(422).json({ error: 'User already exist' });
  //    }
  //    const user = new User({
  //      username,
  //      email,
  //      password,
  //    });
  //    user.save((err) => {
  //      if (err) {
  //        res
  //          .status(422)
  //          .json({ error: `Ooops!!! something went wrong!!! ${err}::${user}` });
  //      } else {
  //        return res.status(200).json({ registered: true });
  //      }
  //    });
  //  });
};

exports.login = function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: 'Please provide email or password' });
  }
  //  User.findOne({ email }, (err, user) => {
  //    if (err) {
  //      return res.status(422).json({ error: 'Oops! Something went wrong' });
  //    }
  //    if (!user) {
  //      return res.status(422).json({ error: 'Invalid User' });
  //    }
  //    if (user.hasSamePassword(password)) {
  //      const jsonToken = jwt.sign(
  //        {
  //          userId: user.id,
  //          username: user.username,
  //        },
  //        env.secret,
  //        { expiresIn: '1,h' }
  //      );
  //      return res.json(jsonToken);
  //    }
  //    return res.status(422).json({ error: 'Wrong email or password' });
  //  });
};

exports.authMiddleware = function (req, res, next) {
  const jsonToken = req.headers.authorization;
  try {
    if (jsonToken) {
      const user = parseToken(jsonToken);
      //      User.findById(user.userId, (err, user) => {
      //        if (err) {
      //          return res.status(422).json({
      //            error: 'Opps!, Something went Wrong!!',
      //          });
      //        }
      //        if (user) {
      //          res.locals.user = user;
      //          next();
      //        } else {
      //          return res.status(422).json({
      //            error: 'Not authorized User.',
      //          });
      //        }
      //      });
    } else {
      return res.status(422).json({ error: 'Not authorized user' });
    }
  } catch (err) {
    res.status(403).json({
      success: false,
      message: err,
    });
  }
};

function parseToken(token) {
  return jwt.verify(token.split(' ')[1], env.secret);
}
