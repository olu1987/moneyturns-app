import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';


const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

function setDone(err, count, done) {
  if (err) {
    return done(err);
  }
  return done(!count);
}

UserSchema.path('email').validate(function (value, done) {
  this.model('Users').count({ email: value }, (err, count) => {
    setDone(err, count, done);
  });
}, 'This email is already registered');

UserSchema.path('username').validate(function (value, done) {
  this.model('Users').count({ username: value }, (err, count) => {
    setDone(err, count, done);
  });
}, 'This username is already registered');

// Compare password input to password saved in database
UserSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

export default mongoose.model('Users', UserSchema);
