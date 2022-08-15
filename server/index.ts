import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { corsOptions, port, host } from './utils/config';
import router from './router';
import { connectDb } from './models';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

(async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at ${host}:${port}`);
    });
  } catch (e) {
    console.log('⚡️[server]: Server could not connect to database!');
  }
})();
