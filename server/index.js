import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { SavingGroupRoutes, userRoutes } from './modules';

const app = express();
app.use(express.static('public'));

// Database

dbConfig();

// Middlewares

middlewaresConfig(app);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/api', [SavingGroupRoutes, userRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App is listening on port: ${PORT}`);
  }
});
