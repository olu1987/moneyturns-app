import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  //mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/moneyturn');
  mongoose.connect('mongodb://Olu:pass@ds231549.mlab.com:31549/money-turns');
  mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.error(err));
};
