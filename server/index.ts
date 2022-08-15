import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { corsOptions, port, host } from './utils/config';
import router from './router';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${host}:${port}`);
});
