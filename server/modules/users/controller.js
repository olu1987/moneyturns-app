import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from './model';
import authConfig from '../../config/auth';
import validateInput from '../../service/validation';


function incryptPassword(password) {
  return bcrypt.hashSync(password, 10);
}

export const createUser = async (req, res) => {
  console.log(req.body);
  const { errors, isValid } = validateInput(req.body);
  const { email, username } = req.body;
  let { password } = req.body;
  password = incryptPassword(password);

  const newUser = new User({ email, username, password });
  if (isValid) {
    try {
      return res.status(201).json({ savingGroup: await newUser.save() });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
  return res.status(400).json(errors);
};

export const getAllUsers = async (req, res) => {
  try {
    return res.status(200).json({ users: await User.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Getting all users' });
  }
};

export const checkUserExists = async (req, res) => {
  const { identifier } = req.params;
  try {
    return res.status(200).json({ users: await User.find({
      $or: [{ username: identifier }, { email: identifier }],
    }, 'username email') });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with getting user' });
  }
};

export const auth = async (req, res) => {
  const { identifier, password } = req.body;
  User.findOne({
    $or: [{ username: identifier }, { email: identifier }],
  }, (err, user) => {
    if (err) throw err;

    if (!user) {
      return res.json({
        errors: {
          form: 'Invalid credentials',
        },
      });
    }
    // Check if password matches
    user.comparePassword(password, (err, isMatch) => {
      if (isMatch && !err) {
        // Create token if the password matched and no error was thrown
        const token = jwt.sign(
          user.toJSON(), authConfig.jwtSecret
          , {
            expiresIn: '2 days',
          },
        );
        res.json({
          success: {
            message: 'Authentication successfull',
          },
          token,
        });
      } else {
        return res.json({
          errors: {
            form: 'Invalid credentials',
          },
        });
      }
    });
  });
};

